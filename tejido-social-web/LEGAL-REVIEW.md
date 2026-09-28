# LEGAL-REVIEW.md — Lawyer-review blocker, by artifact

Some content on this site tells people how to use the law (today: how to file
a recurso de amparo). A wrong deadline or a wrong article there costs a reader
their remedy, and the party's name is on the page. This file lists every
artifact that needs a lawyer's review, why, what exactly the reviewer must
check, and what each one blocks until it is reviewed.

Companion to `CONSTRAINTS.md` (which lists it under "review only": no script
can check legal accuracy) and to `doubt-driven-development` (which is not a
substitute: an AI reviewer can catch inconsistencies, it cannot certify law).

Last updated: 2026-09-28.

## Current status

- **Reviewer: unassigned.** Nothing below has been reviewed by a lawyer.
- **Nothing has been checked against primary sources.** The guide was drafted
  in a session with no access to SCIJ or the Sala's site (outbound requests
  were blocked). Article numbers and rules come from the external proposal
  (Asistente de Recursos Constitucionales, 2026-09-23) and from general
  knowledge, and are unverified. The claim register below is the checklist for
  fixing that.
- **The guide is published with a visible notice** ("no la revisó una persona
  abogada", `source_label: "Fuente pendiente"`). That is a proposal, not a
  decision: see "Decisions needed".

## Blocking levels

| Level | Meaning |
| --- | --- |
| **B1** | Blocks release of the helper (the interactive assistant). Not built yet. |
| **B2** | Blocks publishing the documentation-library pages. Not written yet. |
| **B3** | Blocks removing the "not reviewed" notice and the `Fuente pendiente` label from the guide. Does **not** block it being online with the notice. |
| **V** | No lawyer needed, but the owner must verify the fact before it ships. |

## Artifacts

| ID | Artifact | Exists? | Level | Why it needs review | What the reviewer checks |
| --- | --- | --- | --- | --- | --- |
| A1 | Guide `docs/recursos/presentar-recurso-de-amparo.md` (text and flowchart) | Yes, with notice | B3 | Paraphrases the Constitution and Ley 7135 and tells readers what to do and when. Readers may act on it without a lawyer, which is its purpose. | Every row of the claim register (C1–C13). Whether the flowchart's redirects ("otra vía", "plazo pudo vencer") discourage a valid amparo. |
| A2 | Illustration `static/img/asistente-amparo-ilustracion.png` | Yes | V | Shows the imagined interface only. Contains no legal wording (skeleton lines, placeholders) and is labelled as an illustration. | Nothing, as long as it stays that way. Any real legal text added to it becomes part of A4 and needs review. |
| A3 | Helper: orientation filter (the 3–4 questions, the warnings each answer triggers) | No | B1 | Each rule is a legal judgment (deadline, admissibility against private parties, "another route"). A wrong rule steers people away from a valid remedy. Design rule to keep: it advises, it never blocks. | Rule text and thresholds against Ley 7135 (arts. 35 and 57 at least); that no answer blocks continuing; wording of each warning. |
| A4 | Helper: amparo question wording and the generated escrito | No | B1 | The output is a legal document filed with the Sala. Fixed boilerplate, the order of sections and how the petition (petitoria) is phrased can make a filing weaker or inadmissible. | Section structure against the Sala's guide; boilerplate; that generated text never asserts more than the person entered; the fields for who files vs. who is harmed. |
| A5 | Helper: habeas corpus flow and escrito (phase 2) | No | B1 | Same as A4, with liberty at stake and urgency. A slow or malformed filing has worse consequences. | Same as A4, plus the urgent-route wording and any "no deadline / any hour" claim. |
| A6 | Library: reproduced law text (Constitution art. 48 and related; Ley 7135 arts. 15–65) | No | B2 | Outdated or mis-transcribed text presented as the law. Also whether reproduction is allowed as the proposal assumes. | Text against the current SCIJ version, including amended articles; the copyright basis for reproducing it. A link to SCIJ instead of a copy avoids both problems. |
| A7 | Library: example escritos (3–4: health, education, public information) | No | B2 | Legal accuracy as models people will copy, plus privacy: examples built from real cases carry personal and health data. | Accuracy of each example; that no real person, case or health detail survives (`VOICE.md` privacy rule; Ley 8968). |
| A8 | Library: FAQ and glossary (amparado, recurrido, jerarca…) | No | B2 | Definitions of legal terms; a loose definition misleads. | Each definition against the law and the Sala's usage. |
| A9 | Helper: disclaimer and privacy statements ("no sustituye asesoría legal", "los datos nunca salen del navegador", Ley 8968 compliance) | No | B1 | The party would assert publicly that it holds no personal data and complies with Ley 8968. A false statement is a legal exposure. It needs a lawyer for the compliance claim **and** a code check for the technical claim. | Wording of the disclaimer; whether "no data held" is enough for Ley 8968; code audit that nothing leaves the browser (no analytics on form content, no third-party requests). |
| A10 | Helper: "cómo presentarlo" screen (channels and requirements) | No | B1 | Wrong filing instructions (channel, credentials) waste the reader's time or deadline. | Same as C8 and C9 below, against the Sala's site on the review date. |
| A11 | Free-advice directory (Consultorios Jurídicos UCR and others) | Partly (one line in A1) | V | A factual listing, not a legal judgment: hours, address, which cases they take. Stale entries send people to the wrong place. | Owner confirms with the service before publishing; date the entry. |

## Claim register for A1

Every reader-facing claim in the guide that comes from law or an authority,
with the source that must confirm it. "Sala guide" is the PDF linked from the
guide; "Sala web" is the "presentar recurso vía web" page.

| ID | Claim in the guide | Source to check against | Notes |
| --- | --- | --- | --- |
| C1 | Art. 48 of the Constitution establishes hábeas corpus (personal liberty and integrity) and amparo (other fundamental rights) | Constitución Política, art. 48, SCIJ | Paraphrase; confirm wording, including international human-rights instruments. |
| C2 | Ley 7135 develops both remedies | Ley 7135, SCIJ | Low risk. |
| C3 | Anyone can file, for themselves or for someone else | Ley 7135 (standing articles, number to confirm), Sala guide | Check whether conditions apply for filing on another's behalf. |
| C4 | No lawyer required | Sala guide, Ley 7135 | High impact: readers will rely on it. |
| C5 | Deadline: any time while the violation lasts; otherwise two months from when its effects ended | Ley 7135 art. 35 (number unverified) | Check exact wording ("efectos directos", "totalmente") and whether there are exceptions. Highest-impact claim. |
| C6 | Against private parties only in limited cases (public functions, position of power, ordinary routes insufficient or late) | Ley 7135 art. 57 (number unverified) | Confirm the conditions as paraphrased and that the summary is not too narrow. |
| C7 | Money, labor and neighbor disputes "suelen tener otras vías" | Ley 7135 admissibility limits | The guide steers readers away. A labor-related violation of a fundamental right can still be an amparo; the lawyer decides the phrasing. |
| C8 | Filing channels: in person, fax, internet; internet needs a Poder Judicial credential requested in person | Sala web, Sala guide | Fax and the credential rule are unverified. Channels change: re-check on each review. |
| C9 | After filing, the Sala requests a report from the institution, then rules and notifies | Ley 7135 procedure articles | Keep the description general, as now. |
| C10 | Habeas corpus is a distinct, shorter, urgent remedy not covered by the guide | Ley 7135 arts. 15 onward | Characterization only; the guide makes no deadline claim for it. |
| C11 | Consultorios Jurídicos UCR in San Pedro offer free legal advice | UCR Facultad de Derecho | See A11. |
| C12 | The Sala decides whether to admit the recurso; the redirect answers advise but do not prohibit | Ley 7135 admissibility | Supports the "never blocks" design. |
| C13 | Drafting advice: numbered facts, dates, facts not opinions, opinion only briefly at the end | Sala guide | Practical advice; the lawyer confirms it does not hurt a filing. |

## What "reviewed" means

An artifact counts as reviewed only when all of these hold:

1. A licensed lawyer, ideally with amparo or constitutional experience,
   reviewed it. The party designates who. An AI system cannot be the reviewer.
2. The scope was stated by artifact ID (and claim IDs for A1).
3. It was checked against the current text on SCIJ and the Sala's own pages,
   with the check date recorded.
4. The result is written in the log below, with the commit it applies to.

Then, and only then, for A1: remove the notice, and change `source_label` from
`Fuente pendiente` to the right label with a dated `source_note`.

**Re-opens the review:** any edit to a claim in the register or to a template;
an amendment to Ley 7135 or the Constitution's text; a new version of the
Sala's guide or a change in its filing channels. Otherwise re-check at least
once a year.

## Review log

| Date | Artifact / claims | Reviewer (name or initials, as they agree; or role) | Checked against (source, version date) | Result | Commit |
| --- | --- | --- | --- | --- | --- |
| _none yet_ | | | | | |

## Decisions needed

1. **Who is the reviewer?** Until there is a named person, B1 and B2 items
   cannot move, and the guide stays labelled as unreviewed.
2. **Is the guide online with the notice acceptable?** The alternative is to
   set `unlisted: true` in its frontmatter (reachable by link, out of the
   sidebar and search) until A1 is reviewed. The notice is on the page either
   way.
3. **Who answers for it?** Decided 2026-09-28: the guide lives in
   `docs/recursos/` with a visible notice that it is an independent resource
   and that the Frente Amplio does not answer for it. That removes the party
   from the liability chain but not the need for review: the people who
   maintain this site now answer for what it says, which makes a named
   reviewer more important, not less. The notice must stay on the page and on
   any future artifact of this family (the helper, the library).
