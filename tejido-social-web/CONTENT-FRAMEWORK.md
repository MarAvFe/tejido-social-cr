# CONTENT-FRAMEWORK.md — Where new content goes and what it connects to

Purpose: decide an article's **placement and connections** *before* writing
it, so organization conflicts get caught at creation time, not discovered
months later in a review. This is distinct from:

- `VOICE.md` — *how* content sounds (tone, honesty, privacy).
- `CONTENT-TODO.md` — *what's missing* and still needs to be written.
- This file — *where* new content fits and *what it must link to*.

The problem this solves: the site grows in batches. Diátaxis tells you which
**quadrant** a piece belongs in, but a single concept (e.g. "iniciativa") gets
split across several quadrants and folders. If those pieces don't link to
each other by their relationship, the reader can't follow the full topic —
and someone ends up writing an article that already existed in another
quadrant, or that contradicts its counterpart. This framework prevents that
with two tools: a **4-question test** for every new article, and a
**concept-thread registry** to check it against.

---

## Part 1 — The 4-question test (before writing)

Answer all four before creating the file. If you're unsure on any of them,
you don't yet know where the article belongs — and that uncertainty is
exactly where a future conflict is born. Resolve it first.

### 1. What reader question does it answer? → decides the category

| Reader question | Category | Folder |
| --- | --- | --- |
| How do I get started? (learning by doing) | Tutoriales | `tutorials/` |
| How do I do task X? | Guías Prácticas | `guias/` |
| Why is it this way? | Explicación | `explicacion/` |
| What exactly is X? (lookup) | Referencia | `organismos/`, `niveles/`, `recursos/` |
| What's happening in my district? | Instance | `distritos/<canton>/<distrito>/` |

If the article answers **two** of these, it's **two articles** — split it. A
tutorial that veers into explaining the "why" halfway through should link to
an Explicación article, not absorb it.

### 2. Is it generic or instance? → decides the zone

- **Generic** (reusable by any district): `organismos/`, `guias/`,
  `explicacion/`, `recursos/`, `tutorials/`, `niveles/`, `principios/`.
  Written in terms of "the district" / "the Committee", **never
  "Sabanilla"**.
- **Instance** (a specific district at a point in time):
  `distritos/<canton>/<distrito>/`. Current officeholder names, real
  initiatives, priorities approved by *that* assembly.

**Hard rule:** if the draft names Sabanilla or lists real actions of a
specific district, it's instance — don't put it in a generic page. And if a
generic page "wants" to list real actions (the pillar-stub case, see
Part 3), that's the signal that content belongs in the instance zone: **link
to it, don't embed it.**

### 3. Which concept-thread does it continue? → decides the required links

Look up the concept in the **thread registry** (Part 2). Every thread has a
*generic blueprint* and (sometimes) *instance entries*. Your new article must
link **in both directions** according to its role:

- If it's the generic blueprint → link to "where its instances live".
- If it's an instance → link to "what its generic blueprint is".
- If it's a step in a process → link to the previous and next step.

If the concept **isn't in the registry**, it's a new thread: add it to the
registry (Part 2) as part of the same change. An unregistered thread is an
orphan article waiting to be duplicated.

### 4. What's its source? → decides the label

`source_label` in the frontmatter (Directiva oficial / Editorial /
Conocimiento de campo / pendiente). Already established practice — see
`VOICE.md`.

**Frontmatter alone is not enough — link inline too.** Every time the body
names a specific law, article number, or authority ("Artículo 26", "el
Código Municipal", "el Estatuto del partido"), that mention must itself be a
markdown link to the source (the PDF, the TSE page, or the internal
generic-zone article it derives from), not just referenced once in
`source_note`/`source_url`. Close the article with an explicit "Fuente:"
line linking everything cited, mirroring the existing pattern in
`organismos/roles-municipales.md`. This was missed on first pass for three
articles (`concejo-municipal-vs-cec.md`, `frentes-nacionales.md`,
`public-narrative.md`) — frontmatter had the source, the prose didn't link
it — so treat it as a standing check before publishing, the same way the
internal-doc-name grep is a standing check in `CLAUDE.md`.

---

## Part 2 — Concept-thread registry

A **thread** is a concept that crosses several quadrants/folders. For each
one, the table gives: its **generic blueprint** (the reusable definition),
its **instance home** (where it appears per district, if applicable), and the
**related pieces** that must stay cross-linked. Before creating an article,
check that you're not breaking or duplicating an existing thread. When
creating a new thread, add a row.

> Keep this registry alive: when you add or move an article that touches a
> thread, update its row in the same commit. A stale registry is worse than
> none.

### Thread: **Iniciativa** — from an idea to a district project

- **Generic blueprint:** `tutorials/desarrollar-iniciativa-distrital.md` (the
  process **and the ficha** — the fixed field set every initiative page
  fills in: pilar, responsable, objetivo, alcance, a quién afecta, por
  qué importa, estado/fecha, qué necesita para avanzar),
  `tutorials/historia-de-angelica.md` (the narrated example),
  `explicacion/public-narrative.md` (the underlying framework — Self/Us/Now —
  as a reusable tool, distinct from its worked example).
- **Instance home:** `distritos/<canton>/<distrito>/iniciativas/` — an
  `index.md` grouping by pillar, plus **one page per initiative**
  (`iniciativas/<slug>.md`). Was a single flat `iniciativas.md`; split once
  real initiatives arrived, because each accumulates enough detail (interview
  context, per-initiative open questions) to outgrow a table row. Built for
  Sabanilla: `biblioteca-ambulante`, `buses-sabanilla`, `comercio-local`.
- **Related, must stay linked:** `organismos/pilares-desarrollo/index.md`
  (every initiative is framed under a pillar),
  `explicacion/como-se-priorizan-necesidades.md`.
- **Invariant:** a concrete initiative is **always** instance; the process,
  the ficha, and the pillar are generic. The pillar links to
  initiatives; the initiatives index groups **by pillar**. The ficha
  field set is defined in **one** place (the tutorial) — never re-define it
  in a second "boilerplate" article, and never let an initiative page invent
  its own field names.
- **Invariant:** an initiative page publishes with unanswered ficha fields
  marked pending, never filled with plausible guesses — early-stage
  initiatives are the normal case, not an exception (see `VOICE.md`).

### Thread: **Pilar de desarrollo** — the 6 areas of work

- **Generic blueprint:** `organismos/pilares-desarrollo/index.md` (index) +
  the 6 pillar pages, all nested under `organismos/pilares-desarrollo/`
  (`organismos/pilares-desarrollo/ambientes-espacios-publicos.md`, etc.) —
  a real sidebar subcategory, not flat siblings of the rest of `organismos/`.
- **Instance home:** each district's initiatives, grouped by pillar.
- **Invariant:** the pillar page describes **what that area covers for
  any district** — it does not list a specific district's members or actions
  (that's the Iniciativa thread, in instance).
- **Invariant — a pilar is an area of work, never a group of people.** This
  thread was originally called "comisión temática" and was renamed
  wholesale in 0.4.4. The rename was not cosmetic: "comisión" means a *body
  of people* (like a district, or the national **Comisión Política**), and
  using it for an *area of work* implied six standing groups each with its
  own membership and meetings. A district running on ad-honorem volunteers
  cannot staff six such groups — in practice the **Mesa de Coordinación is
  the coordinating body**, and pillars only distribute the work. Never
  reintroduce "comisión" for a pillar, and never write "conformar/integrar
  un pilar" or "integrantes del pilar" — people join *initiatives*, not
  pillars.
- **Do not touch:** the national **Comisión Política** (in
  `organismos/sanciones-disciplinarias.md` and
  `organismos/frentes-nacionales.md`) is a statutory party organ, unrelated
  to district work. It kept its name through the rename. Likewise
  **Frentes** (`organismos/frentes-nacionales.md`) are the party's formal
  structures that *do* group people by sector — that's the thread to point
  at when a reader asks "where are the actual groups?", not this one.
- **Legacy URLs:** `/docs/organismos/comisiones-tematicas/*` was public
  before the rename; 301 redirects to `pilares-desarrollo` live in the root
  `netlify.toml`. Don't remove them.

### Thread: **Membresía / Niveles** — from sympathizer to national coordination

- **Generic blueprint:** `niveles/` (index + 7 levels),
  `tutorials/unirse-a-un-organismo.md`.
- **Instance home:** none (levels are structural, don't vary by district).
- **Related:** `organismos/directrices-capb.md` (who can join the padrón).
- **Invariant:** levels 1–4 are documented; 5–7 are placeholders marked as
  such.

### Thread: **Asamblea** — how a committee is constituted and decides

- **Generic blueprint:** `guias/conformar-comite-distrital.md`,
  `guias/organizar-asamblea-constitutiva.md`,
  `explicacion/por-que-comites-de-base.md`.
- **Instance home:** `distritos/<canton>/<distrito>/` (date, agreements,
  priorities approved by *that* assembly — pending creation per district).
- **Related:** Encuesta thread (prior input), Coordinación thread (what gets
  elected).

### Thread: **Coordinación / Mesa** — who articulates the work

- **Generic blueprint:** `organismos/estructura-distrital.md`,
  `organismos/roles-y-responsabilidades.md`,
  `niveles/coordinacion-distrital.md`.
- **Instance home:** `distritos/<canton>/<distrito>/mesa-de-coordinacion.md`
  (current officeholders — pending creation; the **only** place with names).
- **Invariant:** each role's functions are generic; who currently holds it is
  instance and goes only in the instance page.

### Thread: **Encuesta / Plan de Acción** — the diagnostic input

- **Generic blueprint:** `guias/disenar-encuesta-plan-accion.md` (designing
  it), `guias/ampliar-alcance-encuesta.md` (growing its reach).
- **Instance home:** a district's actual survey results (inside its instance
  page).
- **Note:** the two guides are **not** duplicates — designing ≠ growing
  reach. Don't merge them.

### Thread: **Frentes y Secretarías** — party structure by sector, not territory

- **Generic blueprint:** `organismos/frentes-nacionales.md` (the 12 statutory
  Frentes Nacionales, plus JFA and Secretaría de las Mujeres as related but
  separately-regulated sector organs).
- **Instance home:** none yet — no field data on which Frentes are active in
  Montes de Oca/Sabanilla. Page says so explicitly rather than implying
  coverage.
- **Related:** Estructura del partido thread (this is the sector axis,
  parallel to the territorial one); JFA's own statute has a cantonal
  sub-structure that could eventually get its own generic blueprint if a
  district needs more detail than the summary here.
- **Invariant:** don't describe a Frente's local presence unless it's
  confirmed field knowledge — the statute only guarantees the Frente exists
  nationally, not that it's active in any given canton/district.

### Thread: **Estatuto del partido** — national rules any affiliate can hit

- **Generic blueprint:** `organismos/requisitos-candidatura-popular.md`
  (candidacy requirements, Art. 22),
  `explicacion/mecanismos-democracia-participativa.md` (plebiscito/referendo,
  Arts. 38–42), `organismos/sanciones-disciplinarias.md` (discipline/
  revocatoria, Arts. 59–61), `organismos/finanzas-del-partido.md` (party
  finances, Arts. 53–58), `organismos/codigo-de-etica.md` (3-minute summary
  of the standalone Código de Ética PDF — different source document from
  the Estatuto, referenced BY the Estatuto and by
  `requisitos-candidatura-popular.md`/`sanciones-disciplinarias.md`, not a
  duplicate of either), `guias/presentar-denuncia-tribunal-etica.md` (the
  How-To counterpart to `codigo-de-etica.md`'s Reference/Explicación —
  same Capítulo III material, reader-question "how do I do X" instead of
  "what is X").
- **Instance home:** none — these are national-level rules that apply
  identically regardless of district; no per-district variation to capture.
- **Related:** `organismos/frentes-nacionales.md` (same source document, the
  Estatuto, different chapter); `requisitos-candidatura-popular.md` ↔
  `sanciones-disciplinarias.md` ↔ `codigo-de-etica.md` all cross-link (the
  commitments a candidate accepts, what happens if broken, and the full
  Tribunal de Ética procedure behind it). **Naming note:** the Estatuto and
  the Código de Ética both call it the **Tribunal de Ética** — earlier draft
  of `sanciones-disciplinarias.md` mistakenly called it "Tribunal de Ética y
  Disciplina," caught and fixed once the Código de Ética PDF was read
  directly. Watch for this if summarizing from memory instead of the source.
- **Invariant:** every article in this thread cites specific article numbers
  inline, linked to the Estatuto PDF, plus a closing "Fuente:" line — see the
  sourcing-discipline rule in Part 1, question 4. More Estatuto chapters
  remain unmined (e.g. Cap. IV Órganos Legales, Cap. VIII Principios de
  Acción Política) — treat this thread as open, not closed at four articles.

### Thread: **Gobierno municipal (instancia cantonal)** — the State government, in one real canton

- **Generic blueprint:** `organismos/roles-municipales.md` (what each municipal office is,
  nationally), `explicacion/concejo-municipal-vs-cec.md` (why this is not the party),
  `explicacion/alcaldia-concejo-en-la-practica.md` (separation-of-powers dynamics in
  practice), `organismos/presupuestos-participativos-municipales.md` (the national
  participatory-budget legal mechanism), `organismos/sesiones-concejo-municipal.md`
  (Concejo Municipal session/voting procedure), `organismos/concejos-de-distrito.md`
  (concejo-de-distrito election mechanics, cociente/subcociente). **Scope test for this
  thread specifically:**
  if a mechanic is defined by the Código Municipal and would read the same in any canton
  (even if not every municipality actually uses it, e.g. not all run presupuestos
  participativos), it's generic — genericize the illustrating examples too, they don't
  need to name a specific district to make the point.
- **Instance home:** `distritos/<canton>/gobierno-municipal.md` — one per canton, sits
  alongside the district pages (not inside a specific district, since the Concejo
  Municipal and the alcaldía are cantonal, not distrital). First one:
  `distritos/montes-de-oca/gobierno-municipal.md`.
- **Related:** `organismos/roles-y-responsabilidades.md` (party-side roles, do not conflate).
- **Invariant:** generic definitions and mechanics stay in the blueprint articles — the
  instance page reports real, current, cantón-specific facts only (staffing counts, session
  schedule, dieta split, budget percentages, which reglamento/tools this canton actually
  uses) and never re-defines what a "regiduría" or "síndico" *is*, or re-explains a
  mechanic MU1–4 already covers — link to it instead (VOICE.md "cross-link instead of
  repeating"). Once MU1–4 exist, revisit `gobierno-municipal.md` for overlap it should
  replace with a link.
- **Invariant — keep partisan content out of the generic blueprint and out of
  `gobierno-municipal.md`:** Concejo Municipal party/coalition composition, coalition
  formation/breakup history, and electoral strategy live in their own instance article,
  `distritos/montes-de-oca/composicion-politica-concejo.md`, explicitly marked "en
  revisión" rather than folded into the neutral institutional pages. Decided 2026-09-02:
  that content is categorically different (partisan/strategic vs. institutional-
  explanatory) and would break `VOICE.md`'s sober register if mixed in. Party/coalition
  names are TSE public record and are named in that dedicated article; personal names
  never are, there or anywhere else.
- **Origin:** first populated from an orientation session held for Montes de Oca militancia
  on 2026-08-28 (`raw data/minuta-28ago26-organizacion-municipal.md`, full transcript in
  `transcrip-28ago26-organizacion-municipal.anon.md`). MU1–4 published 2026-09-02; see
  `CONTENT-TODO.md` for per-article sourcing caveats.

### Thread: **Estructura del partido** — district → canton → province → national

- **Generic blueprint:** `organismos/directrices-capb.md`,
  `organismos/cec-ampliado.md`,
  `niveles/coordinacion-{cantonal,provincial,nacional}.md`.
- **Instance home:** `distritos/<canton>/index.md` (canton rollup).
- **Note:** distinct from **municipal** government
  (`organismos/roles-municipales.md`), which is the State, not the party. See
  Part 3 — this folder overlap is flagged for review.

---

## Part 3 — Known conflicts (flagged, some already resolved)

Cases where the framework detects tension. The first is the canonical example
of what this whole thing is for.

> **Vocabulary note:** entries below written before 0.4.4 say "commission"
> where the site now says "pillar" — these are kept as an accurate record of
> what things were called when each conflict was found and fixed. For the
> current rule, see the Pilar de desarrollo thread in Part 2.

### ✅ Resolved — Pilar ⇄ Iniciativa were disconnected

`pilares-desarrollo/index.md` is the generic blueprint for a district's
initiatives — the same blueprint↔instance relationship — but they didn't
reference each other. **Fixed:** the commission page now links to
initiatives and explains the relationship; the initiatives page is grouped
by commission. This is the pattern Part 1 (question 3) and the Iniciativa
thread prevent going forward.

**Also fixed later:** the 6 commission pages were flat siblings inside
`organismos/` alongside unrelated pages (roles, CEC, municipal roles) —
Diátaxis quadrant was right, but the sidebar didn't visually group them as
one unit. Moved into `organismos/pilares-desarrollo/` as a real sidebar
subcategory (`_category_.json` + `index.md` + the 6 pages), so the six areas
of work read as a set in the nav, not just in prose.

### ✅ Resolved — the 6 commission stubs promised instance content

Each commission page ended with *"Contenido pendiente: integrantes, plan de
trabajo y próximas acciones."* But a specific district's members and actions
are **instance** (Iniciativa thread), not generic — that footer invited
breaking the generic↔instance boundary. **Fixed** on all six: the footer now
states that members/plan/actions belong to each district and links to the
district index, instead of promising content that shouldn't live there.

### ⚠️ Open — `roles-municipales` lives in Organismos but isn't party structure

`organismos/` mixes committee structure, party structure, and external
municipal government. Roles municipales is the State, not the FA.
**Suggested action:** move it to `recursos/` or a new "Contexto
institucional" category. Not urgent, but exactly the kind of mixing the
thread registry is meant to surface.

---

## How to use this in practice

1. New content arrives (committee notes, an idea, a pending item from
   `CONTENT-TODO.md`).
2. Run the 4-question test (Part 1).
3. Look up its thread in the registry (Part 2). Link in both directions; if
   it's a new thread, add the row.
4. Write the article following `VOICE.md` for tone.
5. Update `CONTENT-TODO.md` (mark the item done) and `CHANGELOG.md`.

The 4-question test also works as a review checklist: if an already-published
article fails one, that's a candidate to move, split, or re-link.
