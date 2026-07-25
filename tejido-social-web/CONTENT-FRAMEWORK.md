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
generic page "wants" to list real actions (the commission-stub case, see
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
  process), `tutorials/historia-de-angelica.md` (the narrated example).
- **Instance home:** `distritos/<canton>/<distrito>/iniciativas.md`.
- **Related, must stay linked:** `organismos/comisiones-tematicas/index.md`
  (every initiative is framed under a commission),
  `explicacion/como-se-priorizan-necesidades.md`.
- **Invariant:** a concrete initiative is **always** instance; the process
  and the commission are generic. The commission links to initiatives; the
  initiatives page groups **by commission**.

### Thread: **Comisión temática** — the 6 areas of work

- **Generic blueprint:** `organismos/comisiones-tematicas/index.md` (index) +
  the 6 commission pages, all nested under `organismos/comisiones-tematicas/`
  (`organismos/comisiones-tematicas/ambientes-espacios-publicos.md`, etc.) —
  a real sidebar subcategory, not flat siblings of the rest of `organismos/`.
- **Instance home:** each district's initiatives, grouped by commission.
- **Invariant:** the commission page describes **what that area covers for
  any district** — it does not list a specific district's members or actions
  (that's the Iniciativa thread, in instance).

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

### ✅ Resolved — Comisión ⇄ Iniciativa were disconnected

`comisiones-tematicas.md` is the generic blueprint for a district's
initiatives — the same blueprint↔instance relationship — but they didn't
reference each other. **Fixed:** the commission page now links to
initiatives and explains the relationship; the initiatives page is grouped
by commission. This is the pattern Part 1 (question 3) and the Iniciativa
thread prevent going forward.

**Also fixed later:** the 6 commission pages were flat siblings inside
`organismos/` alongside unrelated pages (roles, CEC, municipal roles) —
Diátaxis quadrant was right, but the sidebar didn't visually group them as
one unit. Moved into `organismos/comisiones-tematicas/` as a real sidebar
subcategory (`_category_.json` + `index.md` + the 6 pages), so the six areas
of work read as a set in the nav, not just in prose.

### ⚠️ Open — the 6 commission stubs promise instance content

Each commission page ends with *"Contenido pendiente: integrantes, plan de
trabajo y próximas acciones."* But a specific district's members and actions
are **instance** (Iniciativa thread), not generic. That footer invites
breaking the generic↔instance boundary. **Suggested action:** rewrite the
footer to point to the district's initiatives instead of promising content
that shouldn't live there.

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
