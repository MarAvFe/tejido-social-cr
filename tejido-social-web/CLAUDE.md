# CLAUDE.md

Instructions for Claude Code when working in this directory (`tejido-social-web/`).

## Changelog discipline

Before creating a commit that changes anything under `tejido-social-web/`
(content, code, config), update `CHANGELOG.md`:

1. Check whether an `## [Unreleased]` section exists at the top (below the
   header). If not, add one.
2. Add a bullet describing the change under `### Added` / `### Changed` /
   `### Fixed` / `### Removed` as appropriate, following the existing style
   in the file (short, specific, links to the relevant path when useful).
3. Decide the version bump for that Unreleased section using semver, but
   with these project-specific rules:
   - **Patch** (0.x.Y): content edits, copy fixes, single-article
     additions, small bug fixes, dependency bumps.
   - **Minor** (0.X.0): new features (a new interactive component, search,
     a new content category/type), structural additions, anything a
     reader would notice as "the site can now do X".
   - **Major** (X.0.0): reserved for a real-world adoption milestone —
     the site gets a real party domain, or is adopted by a canton/national
     structure beyond Sabanilla. Not triggered by code changes alone, ever.
     Do not bump to major on your own judgment — ask first if unsure.
4. When the user asks to "release" or "cut a version" (or when a session
   naturally wraps up a batch of related work), rename `[Unreleased]` to
   the decided version + today's date, update `package.json`'s `version`
   field to match, and add a fresh empty `[Unreleased]` section above it.
   Until then, keep accumulating entries under `[Unreleased]` rather than
   creating a new version per commit — the user prefers reviewing a batch
   before it's "official," not a version bump every commit.

If a change is trivial and purely internal (refactor with no user-visible
effect, fixing a typo in a code comment, adjusting test/tooling config),
it's fine to skip the changelog — use judgment, don't pad it.

## No internal-doc references in reader-facing content

`docs/`, `src/pages/*.md` articles, and any other reader-facing page must
never mention `CONTENT-TODO.md`, `CLAUDE.md`, `VOICE.md`, `PROJECT.md`,
`DESIGN-SPEC.md`, or any other planning/process file by name — not as a
citation, not as a "see also," not as a placeholder note. These are
internal working documents; a reader has no access to them and no reason
to know they exist. This happened once already (a stray `— ver
CONTENT-TODO.md (N2)` leaked into `organismos/roles-municipales.md`) —
treat it as a standing failure mode to actively check for, not a one-off
typo.

When a cross-reference is genuinely missing (the target article doesn't
exist yet), do not link forward to it and do not name the tracking doc
either. Either:
- Omit the cross-reference entirely and let the article stand on its own, or
- Note the gap in prose without naming any file (e.g. "La distinción entre
  este gobierno local y la representación interna del partido todavía no
  tiene artículo propio.")

Before finishing any edit to a reader-facing file, grep the diff for the
internal filenames above as a last check.

## Language: English for meta docs, Spanish for published content

Hard rule, no exceptions: **every internal/meta/planning file is English.
Every reader-facing published page is Spanish.** This is deliberate — it's
the fastest way for the user to tell "in progress" from "already shipped"
at a glance, and it must never be muddled by mixing languages within either
category.

- **English (meta):** `CLAUDE.md`, `VOICE.md`, `CONTENT-TODO.md`,
  `CONTENT-FRAMEWORK.md`, `PROJECT.md`, `DESIGN-SPEC.md`, `CHANGELOG.md`,
  code comments, commit messages, this file's own prose.
- **Spanish (published):** everything under `docs/`, everything under
  `src/pages/*.md`, any other page a site visitor can reach.

This has already slipped twice: `CONTENT-FRAMEWORK.md` was originally
written in Spanish, and `CONTENT-TODO.md` was Spanish throughout except a
later English-only section grafted on. Both were caught and fixed after
the fact — don't let a third instance happen. When creating or editing any
file, decide which bucket it's in *before* writing the first sentence, not
after.

If a meta doc needs to quote reader-facing Spanish prose (e.g. citing a
draft article for review), that's fine — the quote can be Spanish, but the
surrounding analysis/instructions stay English.

## Before creating any content article

Run the placement test in `CONTENT-FRAMEWORK.md` first: which reader-question
(category), generic or instance (zone), which concept-thread (obligatory
links), which source label. Check the thread registry so you don't duplicate
or contradict an existing thread across quadrants — and update the registry
in the same change if you add or move an article that touches a thread. This
is what catches organization conflicts (like comisiones↔iniciativas) at
creation time instead of in a later audit.

## Other context

- `PROJECT.md` — background on the project's purpose and philosophy
  (written for the earlier generic "Tejido Social" framework; treat as
  historical context, not a live description of this site).
- `CONTENT-TODO.md` — content backlog and sourcing conventions (missing
  articles only).
- `SITE-TODO.md` — engineering/config/process backlog (not content) —
  config changes, one-off audits and sweeps across published content,
  tooling.
- `VOICE.md` — editorial voice/tone standard.
- `CONTENT-FRAMEWORK.md` — where new content goes and what it links to
  (placement test + concept-thread registry).
