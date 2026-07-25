# CONTENT-TODO.md — Content backlog for "Aprende sobre el FA"

Backlog of articles organized per [Diátaxis](https://diataxis.fr): Tutorials, How-To Guides, Explanation, and Reference. Lists only what's **missing** — still to write or decide. Published content lives in `docs/` and is its own source of truth (its inventory isn't duplicated here; see `CHANGELOG.md` for the history of what was added and when).

Content only — no engineering, config, or process work here. See [SITE-TODO.md](./SITE-TODO.md) for that (Docusaurus config, one-off audits, tooling).

> **Privacy:** the sources (`unstructured_knowledge.md`, `raw data/directrices-capb.md`, `raw data/minuta-12jul26.md`) contain real private individuals' names. No real name may appear in articles generated from this TODO — use only generic roles/structures (e.g. "Coordinación", "representante del TEFA"). Current officeholder data, if needed, goes only in a district instance page (see architecture section at the end), never in generic content. Exception: publicly elected offices (see [VOICE.md](./VOICE.md)).

Sources: `U` = `unstructured_knowledge.md`, `D` = `raw data/directrices-capb.md`, `M` = `raw data/minuta-12jul26.md`.
Priority: **High** = reference that governs the committee's existence/operation or unblocks immediate work · **Medium** = supporting explanation/how-to · **Low** = future enrichment or pending a decision.

## Existing placeholders awaiting a source

Articles already published as explicit placeholders, waiting on a source that doesn't exist yet (a pending workshop, or a structure without documented detail). These don't require research work — they require the event/decision to happen first.

- `explicacion/fundamentalismo-religioso-control-politico.md` — pending workshop on religious fundamentalism and political control. — U
- `explicacion/vision-ambiental-fa.md` — pending workshop on the FA's environmental vision. — U, M
- `niveles/coordinacion-cantonal.md` — CEC, no detailed source yet.
- `niveles/coordinacion-provincial.md` — CEP, no detailed source yet.
- `niveles/coordinacion-nacional.md` — CEN/TEFA/Secretaría General, no detailed source yet.

## Unpublished backlog (Reference)

- ~~`recursos/mapa-canton-distritos.md`~~ — superseded by
  `docs/distritos/montes-de-oca/index.md`, created as part of the N5
  scaffold (see below). Same purpose (a map of the canton and its
  districts), better location (instance zone, not generic zone).

## Original backlog — items not covered in the research summary

- [ ] **Historia de Angélica** — ~~model narrative (Public Narrative /
  Marshall Ganz) of how a small idea becomes real action.~~ **DONE** — see
  `docs/tutorials/historia-de-angelica.md`. Note from the original doc: "a
  complete draft from an earlier conversation already exists" — I searched
  chat history and did NOT find it. Used the draft handed over directly as
  the real version, without assuming the lost draft said anything different.
- [ ] **Where does this model come from?** — partially covered on the site
  (`por-que-comites-de-base` already explains the organizational gap), but
  still missing the specific thread of the San José Centro pilot and the
  national Comisión Política's recognition of that pilot.
- [ ] **What does the party expect from us?** — translate considerandos 3,
  4, 6, 7 of the Acuerdo Comisión Política into practical expectations.
  Still not covered on the site.
- [ ] **"Public narrative" article** — an educational piece separate from
  Historia de Angélica: explain the framework (Self/Us/Now, YCMAD) and give
  a template for any affiliate to write their own story. Distinct from
  Historia de Angélica — that's the example, this is the tool.
- [ ] **Party values in plain language** — verify whether
  `principios/partido-nacional` already covers this or is just the statute
  reformatted without stripping the ideological jargon. Not confirmed yet.

## Placeholders pending a decision

From the minutes of the 12 July 2026 assembly (`M`, §8), these topics still don't have definitive content and depend on the committee resolving them first:

- Exact text of the founding agreement → will feed `recursos/acuerdo-constitutivo-modelo.md`
- Final approved priorities → will feed `explicacion/como-se-priorizan-necesidades.md` and `organismos/comisiones-tematicas.md`
- Final composition of commissions → will feed the 6 commission pages in `organismos/`
- Immediate tasks with owners and deadlines → future article, no location assigned yet
- Date/location of the next meeting → operational content, likely in the instance zone (see below), not generic

## Pending intake — 2026-07-25 committee notes (Sabanilla, Frente Amplio)

Source: committee meeting notes, Sabanilla, 2026-07-25. Existing site
structure (roles, periods, official directives) already covers the
committee's internal structure well. The gap is: (1) how the party relates
to the formal municipal structure, (2) cultural/historical context that
needs human interviews, (3) communication protocols that don't exist yet or
aren't defined. See [VOICE.md](./VOICE.md) for tone — these all need to land
in the sober, gap-honest register described there, especially items 4 and 8
(new/thin structures) and item 3 (public-record names, see VOICE.md's
privacy section for the public-office exception).

### Ready for research with public sources (research-ready, no interview needed)

- ~~**N1 — Municipal roles in Costa Rica**~~ — DONE, see
  `organismos/roles-municipales.md`.
- **N2 — Concejo Municipal vs. internal party representation (CEC)**
  (Explicación). The formal distinction between the elected local
  government and a party's internal territorial structure — general
  principle first, then applied to the FA case. **The committee itself is
  unsure of this distinction** ("I assume this is the elected municipality
  vs. the party's representation, but I'm not sure") — confirm via research
  before drafting, do not assume. Priority: Medium, blocks N3 conceptually
  (need the distinction clear before writing FA's history within it).
- **N3 — FA's historical municipal record** (nacional and/or Montes de Oca
  specifically). Past electoral results, regidores/síndicos elected under
  the FA banner. Sources: TSE, prensa. **Privacy note:** an elected
  official's name tied to their public office (TSE record) is citable by
  name per VOICE.md's public-office exception — this is different from
  naming a current unpaid committee holder. Priority: Medium, depends on N2
  landing first for framing.

### Write-ready — committee already has the info, no external research needed

- ~~**N4 — CEC Ampliado**~~ — DONE, see `organismos/cec-ampliado.md`.
- ~~**N5 — Per-district initiative directory**~~ — DONE, scaffold built at
  `docs/distritos/montes-de-oca/sabanilla/` (see architecture section
  below, now updated to namespace by canton — `distritos/<canton-slug>/
  <distrito-slug>/` — since district names repeat nationally). Initiative
  history lives in `distritos/montes-de-oca/sabanilla/iniciativas.md`,
  seeded with the Historia de Angélica tutorial as its first (illustrative)
  entry. Real entries get added as the committee reports actual initiatives
  — table is intentionally near-empty right now.
- **N6 — Party frentes** (women's, La J [divided by canton], ecumenical,
  sexual diversity, ecological) (Referencia, likely new `organismos/` page
  or section). Reference article — info already provided by the committee,
  no fact-finding needed. Priority: Medium.

### Operational goals, not documentation yet — revisit if they become concrete initiatives

- **N7 — FA presence in public spaces** (e.g. Feria del Agricultor de
  Montes de Oca — currently no FA presence there). This is a committee
  goal, not a documentable process yet. Revisit later if it becomes a
  concrete initiative (comparable to Historia de Angélica). Not a doc
  target today.
- **N8 — Red de Economía Social Solidaria**. Currently one WhatsApp group
  in Montes de Oca. The committee itself hasn't decided whether more
  groups/levels should exist. Stays an internal discussion note — not
  content for the 92 affiliates until the committee decides the mechanism.
  Do not draft a page implying a settled structure.

### Blocked on human conversation — do not delegate to research

These are explicitly **not** researchable from public sources. Track as a
standing "needs interview / needs authority" list, separate from the doc
tree, so they don't quietly rot as unfinished placeholders.

- **N9 — Cultural/historical narrative** (frame from Ma Antonieta,
  educator). Question structure exists: what happened, who was involved,
  what were the results, what was the objective. The committee says this
  needs depth directly from her. This is a pending interview, not a
  research task. **Action needed:** schedule the conversation; nothing to
  draft until then.
- **N10 — District public-communication protocol + national guidance**
  (merged topic). No clear guidance yet from the national party to
  districts/cantons on what can be said publicly, who (if anyone) has veto
  or retroactive control over social media and other channels, or whether
  a formal comisión política exists to decide this. **The committee's goal
  is not to challenge this — it's to open the question of how to work on
  it going forward.** None of this is researchable from public sources; it
  needs a direct conversation with someone holding real party authority.
  This is the largest governance gap in the current notes: the national
  party hasn't yet given districts an operating guide for this. **Action
  needed:** identify who that conversation is with, before any article can
  be drafted.

## Content architecture: district / canton / national

**Principle:** separate **generic** content (reusable by any district — roles, processes, the official directive) from **instance** content (specific to Sabanilla at a given moment — who coordinates today, what its assembly prioritized).

- **Generic zone** — the current folders (`organismos/`, `guias/`, `explicacion/`, `recursos/`, `tutorials/`, `principios.md`, `niveles/`) stay district-agnostic. Everything derived from `directrices-capb.md`, the assembly methodology, the glossary, and the 6 commissions lives here, written in terms of "the district" / "the Committee", never "Sabanilla".
- **Instance zone** — new folder `docs/distritos/<canton-slug>/<distrito-slug>/`, e.g. `docs/distritos/montes-de-oca/sabanilla/{index,mesa-de-coordinacion,iniciativas}.md`. **The district slug alone isn't unique nationally** — Costa Rica has 496 districts across 82 cantones and several names repeat (there's more than one "San Rafael"). That's why canton always comes first in the path, from the very first district documented, even though only one exists today — this avoids a URL migration later. A future district in the same canton (`docs/distritos/montes-de-oca/san-pedro/`, etc.) replicates the same shape without touching the generic zone; a new canton adds its own folder (`docs/distritos/<other-canton>/`). An index `docs/distritos/index.md` serves as the national map; each `docs/distritos/<canton-slug>/index.md` serves as the canton map. **Already built** for Montes de Oca/Sabanilla — see `docs/distritos/index.md` and `docs/distritos/montes-de-oca/index.md`.
- **Current officeholder names**: only in `distritos/<canton-slug>/<distrito-slug>/mesa-de-coordinacion.md`, kept up to date operationally by the committee itself — never in generic pages.
- **Convention**: instance pages always live under `distritos/<canton-slug>/<distrito-slug>/`, linking to the generic reference (e.g. Sabanilla's Mesa links to `organismos/roles-y-responsabilidades.md`) instead of repeating content.
- **Path to canton/national**: the `distritos/<canton-slug>/` index is already the canton rollup; the `distritos/` index is the national rollup. No separate `territorios/<provincia>/<canton>/<distrito>/` hierarchy is needed — canton/district is already in the path. **The full list of 496 districts / 82 cantones is not onboarded yet** — they're added only as a real district organizes and requests its page, not speculatively.
