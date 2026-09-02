#!/usr/bin/env python3
"""Replace real names in a meeting transcript with role/persona labels.

No real names live in this script. The actual name -> label mapping is a
separate JSON file (kept out of git, next to the raw transcripts) so this
tool is reusable across meetings without ever putting personal data in
version control.

Usage:
    python3 anonymize-transcript.py --input IN.md --output OUT.md --mapping MAP.json

Mapping file shape:
{
  "roles": [
    {"label": "Síndico por San Pedro al 2026", "variants": ["Nombre Apellido Apellido", "Nombre"]}
  ],
  "generic": [
    {"tag": "Persona 1", "variants": ["Apodo", "NombrePila"]}
  ]
}

Each variant is replaced case-sensitively, whole-word, longest variant
first (across both sections combined) so a full name is never partially
clobbered by a shorter rule (e.g. a first name) firing first.

After substitution, the script scans the OUTPUT for any remaining
"Capitalized Capitalized" bigrams not already explained by the mapping or
a small built-in allowlist of institutional/place terms, and prints them
so a human can check nothing was missed — it does not auto-redact these,
since that heuristic is noisy (false positives on sentence-initial
capitals next to a proper noun).
"""
import argparse
import json
import re
import sys
from collections import Counter

ALLOWLIST_BIGRAMS = {
    "Consejo Municipal", "Concejo Municipal", "Frente Amplio", "Unidad Social",
    "Social Cristiana", "Gente Montedioca", "Gente Montesioca", "Gente Montesoca",
    "Gente Montesdioca", "San Pedro", "San Rafael", "San José",
    "Somos Montedioca", "Somos Montesioca", "Somos Montesoca", "Somos Montesca",
    "Somos Montes", "Liberación Nacional", "Google Meet", "Costa Rica",
    "Acción Ciudadana", "Distrito Cultural", "Tres Ríos", "Montes Dioca",
    "Desarrollo Social", "Hacienda Municipal", "Asamblea Distrital",
    "Partido Humanista", "Partido Progresista", "Partido Pueblo",
    "Segunda República", "Estado Social", "Secretaría Municipal",
    "Comité Ejecutivo", "Plaza Roosevelt", "Montío Cadecide",
    "Organización Municipal", "Consejo Distrito", "El Consejo",
    "Máximo Fernández", "Montedioca Decide",
}


def build_rules(mapping):
    rules = []
    for entry in mapping.get("roles", []):
        for variant in entry["variants"]:
            rules.append((variant, entry["label"]))
    for entry in mapping.get("generic", []):
        for variant in entry["variants"]:
            rules.append((variant, f"[{entry['tag']}]"))
    # Longest variant first so full names win over bare first names/surnames.
    rules.sort(key=lambda r: len(r[0]), reverse=True)
    return rules


def apply_rules(text, rules):
    counts = Counter()
    for variant, replacement in rules:
        pattern = re.compile(r"\b" + re.escape(variant) + r"\b")
        text, n = pattern.subn(replacement, text)
        if n:
            counts[f"{variant!r} -> {replacement}"] = n
    return text, counts


def scan_leftovers(text):
    candidates = re.findall(
        r"\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+ [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)\b", text
    )
    c = Counter(candidates)
    return [(w, n) for w, n in c.most_common() if w not in ALLOWLIST_BIGRAMS]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--input", required=True)
    ap.add_argument("--output", required=True)
    ap.add_argument("--mapping", required=True)
    args = ap.parse_args()

    with open(args.mapping, encoding="utf-8") as f:
        mapping = json.load(f)

    with open(args.input, encoding="utf-8") as f:
        text = f.read()

    rules = build_rules(mapping)
    out_text, counts = apply_rules(text, rules)

    with open(args.output, "w", encoding="utf-8") as f:
        f.write(out_text)

    print(f"Wrote {args.output}")
    print(f"\nSubstitutions applied ({len(counts)} distinct variants):")
    for k, n in sorted(counts.items(), key=lambda kv: -kv[1]):
        print(f"  {n:4d}  {k}")

    leftovers = scan_leftovers(out_text)
    if leftovers:
        print(f"\nPossible leftover names in OUTPUT ({len(leftovers)} distinct, review these):")
        for w, n in leftovers:
            print(f"  {n:4d}  {w}")
    else:
        print("\nNo leftover capitalized-bigram candidates found in output.")


if __name__ == "__main__":
    sys.exit(main())
