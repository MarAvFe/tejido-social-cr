# VOICE.md — Editorial standard for "Aprende sobre el FA"

Purpose: a durable reference so tone stays consistent as volume increases and
more contributors (human or AI) draft content. Read this before writing new
articles. Update it only when the committee deliberately decides to change
how the site sounds — not per article.

This is inferred from the ~35 articles already published (`docs/`) plus the
conventions already encoded in `CONTENT-TODO.md`. Nothing here overrides an
explicit decision the committee makes later; it describes the standard
already in practice so it stops being implicit.

**VOICE.md is about how content *sounds*. For where a new article *goes* and
what it must *link to*, see `CONTENT-FRAMEWORK.md`** — the 4-question
placement test and the concept-thread registry that catch organization
conflicts (like the comisiones↔iniciativas gap) at creation time.

---

## Register

**Sober, institutional-explanatory.** The site explains how a real political
structure works, to people who are joining it. It is not a manifesto, not a
recruitment pitch, not a blog. Compare:

- ✅ "El TEFA solicitó al CEN definir una estructura básica interna que
  llenara esos vacíos."
- ❌ "¡El TEFA dio un paso histórico para fortalecer la democracia interna!"

No exclamation points. No rhetorical questions used as hooks. No slogans
invented for the site — if a phrase like "La Sabanilla que soñamos" is being
quoted, it's because it's the committee's own lema, cited as such, not
site-authored copy.

## Honesty about incompleteness

This is the single most load-bearing convention on the site. When something
is new, undecided, or thin, the article says so explicitly rather than
performing completeness.

- ✅ "Los comités distritales en general tienen menos de un año de
  antigüedad" — stated plainly in an article about CEC Ampliado, not buried.
- ✅ Existing pattern: `[x] HECHO — breve, falta metodología nacional oficial`
  in `CONTENT-TODO.md` tracking.
- ✅ Existing pattern: placeholder articles that say outright they're
  waiting on a pending workshop, rather than inventing content to fill the
  page.
- ❌ Never smooth over a gap with generic language to make a structure look
  more consolidated than it is. A one-year-old committee is not described
  with the same confidence as a body that's existed for a decade.

This matters specifically because the committee's own credibility depends on
new affiliates trusting what the site tells them. But it cuts both ways, and
in practice the second failure below is the more frequent one:

- **Overstating maturity** misleads about what exists.
- **Burying what *is* settled under hedges about what isn't** leaves the
  reader unable to act on any of it. An article qualified at every turn has
  told them nothing, at greater length. This is not the safe direction to
  err in — it is the other way to fail.

### Where a hedge goes, and where it doesn't

**One statement per gap, at the point where it changes what the reader
should do.** Not restated in every article that touches the subject.

**Ambient uncertainty is site-level, not per-article.** That the distrital
structure is young and much of it still informal is true of nearly
everything here. It is stated once, in `src/pages/politica-editorial.md`,
and is not re-litigated page by page. A hedge that could be pasted into any
article on the site without editing is not telling the reader anything
about *this* article.

**Deletion test:** if the gap were filled tomorrow, would this sentence
need to change? If not, it is decoration — cut it.

- ✅ "El plazo para presentar la denuncia no está definido en las
  directrices; consultá con la Coordinación antes de asumir uno." — the
  gap changes the reader's next action.
- ❌ "Las decisiones se toman en la Asamblea Distrital, aunque la forma
  exacta en que esto ocurre no está formalmente definida en ningún
  documento." — the second clause gives the reader nothing to act on. If
  the first clause is true, state it and stop.

## Sourcing discipline

Every substantive claim about how the party works traces to a source: the
official directive (`directrices-capb.md`), the party statute, an assembly
minuta, or explicit "conocimiento de campo" (field knowledge, i.e. told to
us by the committee, not yet formalized in an official document). Articles
use frontmatter (`source_label`, `source_note`, `source_url`) to name this
plainly — see any existing article for the pattern.

When a claim is genuinely uncertain — "supongo que esto es X pero no estoy
seguro," as the committee itself has said about municipal structure — do not
resolve the uncertainty by guessing. Either research it against a public
authoritative source (TSE, Código Municipal) and cite it, or leave it
explicitly open pending confirmation. Never let an AI-drafted inference
read as settled fact.

## Genericity vs. instance

Per the architecture already decided in `CONTENT-TODO.md`: reference content
(`organismos/`, `guias/`, `explicacion/`, `recursos/`, `tutorials/`,
`niveles/`) is written for *any* district — "el distrito," "el Comité,"
never "Sabanilla." Only `docs/distritos/<slug>/` pages (not yet built) speak
in the specific, current-instance voice ("hoy, la Coordinación de Sabanilla
es...").

Keep this distinction in mind at the sentence level, not just the file
level: a generic article that slips into "en Sabanilla hacemos..." has
leaked instance content into reference content and will not transfer
cleanly to the next district that adopts the site.

## Privacy

No real private individual's name or contact datum in generic content,
ever — see the banner already in `CONTENT-TODO.md`. Roles only:
"Coordinación," "representante del TEFA," "regiduría municipal del FA."

Public office is the one exception worth naming explicitly here, because
it will come up (Block A, item 3 below): a name tied to a *public elected
office* recorded by the TSE (e.g. "Fulana de Tal, regidora del FA en
Montes de Oca, período 2020–2024") is public record, not private data, and
may be cited when the article is specifically about electoral history.
That's different in kind from naming who currently holds an unpaid
ad-honorem committee seat, which stays out of generic docs and lives only
in the future distrital roster page.

## Structural conventions (mechanical, but part of "sounding right")

- **Never reference an internal working doc from reader-facing content** —
  no naming `CONTENT-TODO.md`, `CLAUDE.md`, `VOICE.md`, `PROJECT.md`, or
  similar inside `docs/` or `src/pages/*.md`. The reader has no access to
  these files. This has already leaked into a published article once — see
  the full rule and recovery pattern in `CLAUDE.md`'s "No internal-doc
  references in reader-facing content" section.
- Frontmatter: `source_label`, `source_note`, `source_url` when there's a
  citable source; `sidebar_position` / `sidebar_label` for index pages.
- Section pattern in explicación articles: problem/context → why it didn't
  exist before → how it was resolved → what it means in practice → "Ver
  también" cross-links. Not every article needs all five, but this is the
  default shape.
- Cross-link instead of repeating: if a fact lives in a reference page,
  link to it rather than restating it in an explicación or guía article.
- Headings in Spanish, sentence case with initial caps per Spanish
  convention ("Por Qué Existen los Comités de Base Distritales" — title
  case is used for H1s specifically, matching existing files; body
  headings can be sentence case).

## What this document is not

Not a grammar/style guide (no rules on Oxford commas, voseo vs. usted,
etc.) — if none of that has caused inconsistency yet, don't invent rules
preemptively. Add a rule here only after it's actually caused friction
across two or more articles, not speculatively.
