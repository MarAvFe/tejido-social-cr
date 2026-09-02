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
- [x] **"Public narrative" article** — DONE, see
  `explicacion/public-narrative.md`. Explains Self/Us/Now and YCMAD, gives a
  3-question template for an affiliate to prepare their own story, and
  cross-links both directions with `tutorials/historia-de-angelica.md`
  (that's the example, this is the tool).
- [ ] **Party values in plain language** — verify whether
  `principios/partido-nacional` already covers this or is just the statute
  reformatted without stripping the ideological jargon. Not confirmed yet.

## Placeholders pending a decision

From the minutes of the 12 July 2026 assembly (`M`, §8), these topics still don't have definitive content and depend on the committee resolving them first:

- Exact text of the founding agreement → will feed `recursos/acuerdo-constitutivo-modelo.md`
- Final approved priorities → will feed `explicacion/como-se-priorizan-necesidades.md`, `organismos/pilares-desarrollo/index.md`, and the 6 pillar pages under it. (The minuta's original wording was "conformación de comisiones" — partly obsolete since the 0.4.4 rename: pillars have no membership to compose, so what's still pending from that line is the *priorities per area*, not a roster.)
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
- ~~**N2 — Concejo Municipal vs. internal party representation (CEC)**~~ —
  DONE, see `explicacion/concejo-municipal-vs-cec.md`. Confirmed via the
  Código Municipal, the FA Statute, and `directrices-capb.md`: these are two
  legally distinct origins (State vs. party), not two names for the same
  thing — the committee's uncertainty was warranted, the structures really
  are independent. Unblocks N3.
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
  history lives in `distritos/montes-de-oca/sabanilla/iniciativas/`,
  seeded with the Historia de Angélica tutorial as its first (illustrative)
  entry. Real entries get added as the committee reports actual initiatives
  — table is intentionally near-empty right now.
- ~~**N6 — Party frentes**~~ — DONE, see `organismos/frentes-nacionales.md`.
  Correction to this TODO's original note: the committee notes did **not**
  actually contain frente details (checked `unstructured_knowledge.md`,
  `directrices-capb.md`, `minuta-12jul26.md` — none mention frentes). Drafted
  instead from the FA Statute (Arts. 23, 26, 27), which is the correct
  authoritative source anyway — the statutory list of 12 Frentes Nacionales,
  plus JFA and Secretaría de las Mujeres as separately-regulated sector
  organs. Local/Sabanilla presence of any frente is explicitly flagged as
  unconfirmed in the article, pending field info.

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

## Pending intake — FA Statute gaps (2026-07-25 read-through)

Source: full read-through of the [Estatuto del Partido Frente Amplio](https://www.tse.go.cr/pdf/normativa/estatutos/frenteamplio.pdf)
(TSE), done while sourcing `organismos/frentes-nacionales.md`. These are
statute-only, research-ready topics — no committee interview needed — that
answer likely FAQs from a new or curious affiliate ("general John") and
aren't covered anywhere on the site yet.

- ~~**N11 — Requisitos para postularse a cargos de elección popular**~~ —
  DONE, see `organismos/requisitos-candidatura-popular.md`. Includes the
  hoja de delincuencia / CCSS / gender-violence disqualifiers, minimum
  affiliation time, the 20%-of-salary contribution commitment, and a note on
  the TSE-recorted "medidas cautelares" clause (struck for violating
  presumption of innocence).
- ~~**N12 — Mecanismos de Democracia Participativa**~~ — DONE, see
  `explicacion/mecanismos-democracia-participativa.md`. Plebiscito vs.
  referendo, the 25%/30% affiliate-petition thresholds, 50%/60% binding-result
  turnout thresholds, and the gender-parity + affected-sector-consultation
  guarantees.
- ~~**N13 — Sanciones Disciplinarias y Revocatoria de Mandato**~~ — DONE, see
  `organismos/sanciones-disciplinarias.md`. The six escalating sanctions,
  what counts as a falta, and the **Tribunal de Ética**'s exclusive
  authority over revocatoria (including the reform the TSE denied for trying
  to move that authority elsewhere). Corrected after first draft mistakenly
  called it "Tribunal de Ética y Disciplina" — the real name (confirmed in
  both the Estatuto and the Código de Ética, N15) is just Tribunal de Ética.
- ~~**N14 — Finanzas y Control Contable del partido**~~ — DONE, see
  `organismos/finanzas-del-partido.md`. Where money can/can't legally come
  from, the 10%/15% mandated spend, and the public-reporting obligations
  (Gaceta, monthly Tesorería reports).

N11–N14: `source_label: "Directiva oficial"`, sourced directly from the
Estatuto — link every article number cited inline to the PDF, per the
sourcing-discipline rule in `CONTENT-FRAMEWORK.md` (question 4).

- ~~**N15 — Código de Ética del Frente Amplio (resumen)**~~ — DONE, see
  `organismos/codigo-de-etica.md`. User-requested (not from the Statute
  read-through): a 3-minute, explicitly-not-a-replacement summary of the
  standalone [Código de Ética PDF](https://www.frenteamplio.org/wp-content/uploads/2025/05/Codigo-de-Etica-FA.pdf)
  (46 articles, 5 chapters) — the document candidates declare they'll
  follow per N11, and that N13 only summarized at the Estatuto level.
  Covers: the ethical/conduct commitments (Cap. I), Tribunal de Ética +
  Tribunal de Alzada composition and authority (Cap. II), the full denuncia
  procedure including deadlines and cautelares (Cap. III), the sanctions
  ladder with per-sanction causales, including the parallel Ley 10.235
  violence-against-women-in-politics scale (Cap. IV), and recursos (Cap. V).
  Modeled on `principios/partido-nacional.md`'s approach (faithful condensed
  reference, not a replacement for the primary source). Cross-linked with
  N11 and N13. Caught and fixed a naming error in N13 while sourcing this
  (see N13's note above).
- ~~**N16 — Cómo Presentar una Denuncia ante el Tribunal de Ética**~~ — DONE,
  see `guias/presentar-denuncia-tribunal-etica.md`. User-requested how-to
  companion to N15, following the Código de Ética's Capítulo III step by
  step: plazos (1 year general, imprescriptible for corruption/sexual
  violence), what a written denuncia must contain, anonymous-denuncia
  exceptions, what happens after filing (Órgano Director, 15-day response
  window, comparecencia oral), and the two recourse options (revocatoria,
  apelación). **Known gap, flagged in the article itself**: the Código de
  Ética doesn't publish a fixed public email/form for filing — only that the
  Tribunal's sede is the party's oficinas centrales and it "habilita los
  correos electrónicos que estime necesarios." Guide says so explicitly
  rather than inventing a contact channel; update once confirmed.

## Pending intake — Sabanilla initiatives + meta projects (2026-07-29)

Source: committee working session, Sabanilla. Three concrete initiatives and
four cross-cutting "meta project" topics.

### Published — the three concrete initiatives

All three are live under `docs/distritos/montes-de-oca/sabanilla/iniciativas/`,
each as its own page with the ficha field set, each grouped under its
pilar de desarrollo. Published deliberately incomplete (state: "en
formulación"), with unanswered fields marked pending rather than invented —
per VOICE.md's honesty-about-incompleteness rule.

- **I1 — Biblioteca ambulante** (`iniciativas/biblioteca-ambulante.md`).
  Pilar: Educación, Formación y Empleo. Mobile library at the Feria del
  Agricultor on weekends. **The daycare/cuido extension is documented as an
  idea under discussion, not an approved stage** — it carries legal,
  safety, and staffing obligations the committee hasn't evaluated. Do not
  let a future edit promote it to a planned phase without the committee
  actually deciding. Note this also partially activates N7 (FA presence in
  public spaces) — the feria goal now has a concrete initiative attached.
- **I2 — Buses de Sabanilla** (`iniciativas/buses-sabanilla.md`). Pilar:
  Movilidad y Derecho a la Ciudad. **Least defined of the three — no
  objetivo, no alcance.** Blocked on the same class of problem as N9: the
  context lives in one person's ~10 years of accumulated experience, not in
  public sources. **Action needed:** schedule that conversation, then pick
  ONE opportunity as the focus (the committee's own stated criterion).
  Nothing further to draft until the interview happens.
- **I3 — Comercio local** (`iniciativas/comercio-local.md`). Pilar:
  Participación y Organización Comunitaria. Interviews doubling as
  district-opinion gathering and as free visibility for local businesses vs.
  the big chains. **Unresolved tension flagged in the article itself:**
  publishing a business profile under the committee's name can read as party
  endorsement of a specific commerce, or create an expectation of
  reciprocity. The inclusion criterion is undecided; it also depends on M1
  (communication rules) landing. Don't write a "how we choose businesses"
  guide until the committee decides.

### Meta projects — NOT publishable yet, tracked here

Four cross-cutting topics that came up alongside the initiatives. **None of
these should become a reader-facing article in their current state** — for
every one, the honest answer today is "the committee hasn't decided," and
publishing a page about an undecided mechanism performs a consolidation
that doesn't exist (VOICE.md). They're real work, tracked here so they don't
evaporate; each has an explicit unblock condition.

- **M1 — Communication: channels, tone, cadence, brand.** Open questions,
  none answered: does the district have an IG/TikTok presence? Does the
  canton have official social media, and can the district get posting
  access? Do we write newspaper columns? Then: what tone, what cadence, and
  a brand book on top of that.
  **M1 and N10 are related but NOT the same task, and must not be merged**
  (corrected 2026-07-29 — an earlier version of this entry wrongly treated
  them as one):
  - **N10 is top-down discovery** — find out what national guidance exists.
    The expected answer is *probably none*. It's a research/inquiry task
    with an external dependency (someone with party authority).
  - **M1 is bottom-up construction** — build something reasonable now and
    leave explicit blanks for whatever N10 turns up. It does **not** wait on
    N10.

  So M1 is not blocked the way the other meta items are. **Unblock:** a
  committee decision on channels and tone — nothing external required. The
  deliverable is deliberately partial: a working communication approach with
  named gaps, not a finished policy. That shape fits VOICE.md's
  honesty-about-incompleteness rule directly, so M1 *can* become
  reader-facing content earlier than M3/M4 — as long as the blanks are
  visible as blanks. Related field notes already gathered: interest in
  working with journalists, finding audiovisual producers, shared graphic
  resources, and a political communication plan (staying current and
  re-communicating).
- **M2 — Initiative boilerplate.** ✅ **Resolved without a new article.**
  The committee's instinct was right that a boilerplate is needed, but
  `tutorials/desarrollar-iniciativa-distrital.md` already *was* it — it just
  didn't state the field set as a fixed list. Added a "La ficha de una
  iniciativa" section there (pilar, responsable, objetivo, alcance, a
  quién afecta, por qué importa, estado/fecha, qué necesita para avanzar),
  and all three I1–I3 pages use those exact headings so the shape is
  visibly one document type. **Do not create a separate boilerplate
  article** — that would fork the definition and guarantee drift.
- **M3 — Shared district management: treasury and per-initiative
  communication.** The real question is architectural: does each initiative
  hold its own treasury, or is there one district treasury distributed
  across initiatives? Same question for communication (per-initiative vs.
  district-level) and for reporting district-wide goals and progress. The
  committee's stated motivation is exactly right — solve it once instead of
  re-solving per initiative. **Not documentable yet: no model has been
  chosen.** Note `organismos/finanzas-del-partido.md` covers *party-level*
  finance rules (Estatuto Arts. 53–58) and is a constraint on any answer,
  but it does not answer the district-internal question. **Unblock:**
  committee decides a model.
  **Zone decision (2026-07-29): treasury goes in a Sabanilla article, NOT
  the generic zone — even though the topic is generic in principle.** The
  reasoning is deliberate and overrides the default: a treasury model is too
  consequential to publish as a blueprint for every district before it has
  been tested in one. Sabanilla documents what *it* does; if the model
  proves itself, it graduates to generic later. Treat "generic in principle"
  and "ready to be published as generic" as different bars — this is the
  precedent for that distinction.
- **M4 — Inter-canton collaboration / not reinventing solutions.** Other
  cantones (noted in field: Goicoechea, La Unión, Moravia) have presumably
  faced M1 and M3 already. Two-track intent, and the tracks must not be
  confused: (a) **today, assume we're the creators** — Sabanilla can't wait
  for anyone to start; (b) **in parallel, build a practice of connecting
  outward** to upskill and reuse. Shared resources across the district's
  initiatives (e.g. one ad manager serving all of them) sit at the
  intersection of M3 and M4.
  **Placement decision (2026-07-29): M4 is operative, not documentation —
  it gets no article.** It's a working practice (make contact, learn, reuse),
  and a page describing an intention to collaborate isn't content. The one
  case where it *could* earn a place is if it's reframed as a documented
  **"upskilling and collaboration" practice** — i.e. an article about how a
  district learns from other cantones as a repeatable habit, not about the
  intention to try. Location for that is still undecided and genuinely
  unclear (`explicacion/`? `guias/`?); **leave it unplaced rather than
  forcing a folder.** Revisit once there's real experience to describe.
  **Unblock:** an actual contact made with another canton.

**Structural note, revised 2026-07-29:** the earlier blanket claim that
M1/M3/M4 all land in the generic zone was too coarse. Per-item now: **M1**
generic-leaning (a communication approach with visible blanks is reusable);
**M3** instance-first by explicit decision (Sabanilla only, until the
treasury model is proven); **M4** no article at all unless reframed as an
upskilling practice. Only Sabanilla's *chosen* answers (which channels it
actually uses, what its treasury holds) are instance in every case.

### ✅ Resolved — "pilares" vs. "comisiones temáticas"

Was an open question; **decided 2026-07-29.** They are the same thing, and
"comisión" was the wrong word. Committee's reasoning: a *comisión* is a body
of people (a district is a comisión in that sense), and the party's formal
people-grouping structures are the **Frentes** — already documented
separately in `organismos/frentes-nacionales.md`. Using "comisión" for an
*area of work* implied six standing groups with their own membership, which a
district of this scale cannot staff. In practice the Mesa de Coordinación
coordinates, and the six areas only distribute the work.

**Done:** full rename to **Pilares de Desarrollo** (generic/district-level,
no territorial qualifier) — folder, sidebar, all prose, glossary entry, and
the `pilares-desarrollo/index.md` page rewritten to state that a pillar is
an area of work and not a group of people. The national **Comisión Política**
kept its name (statutory organ, unrelated). 301 redirects for the old public
URLs live in the root `netlify.toml`. See the Pilar de desarrollo thread in
`CONTENT-FRAMEWORK.md` for the standing rule.

Still unplaced from the same session: "puntos abstractos del Parque del
Este" — too thin to place, needs the committee to say what it means.

## Pending intake — 2026-08-28 municipal orientation session (Montes de Oca)

Source: orientation session for Montes de Oca militancia, facilitated by the
Síndico por San Pedro al 2026, 2026-08-28
(`raw data/minuta-28ago26-organizacion-municipal.md`). What's saved so far
is a session summary handed over by the user, not the full recording —
**the full transcript is still pending.** Privacy note: the raw source names
real individuals; per the standing rule at the top of this file, no personal
name may appear in generated articles — cite by public office/role only
(e.g. "Síndico por San Pedro al 2026"), see `VOICE.md`.

- ~~**MU0 — Overview/teaser article**~~ — DONE, see
  `distritos/montes-de-oca/gobierno-municipal.md`. Covers, at survey depth,
  everything the summary already documents: the three-part structure,
  staffing breakdown, presupuestos participativos, citizen-facing channels,
  council composition (by party/coalition only, no names), regiduría/
  síndicatura functions, session mechanics, dietas, concejos de distrito,
  and how to participate. Registered as a new thread ("Gobierno municipal
  (instancia cantonal)") in `CONTENT-FRAMEWORK.md`.

**Full transcript received, anonymized, and read in full (2026-09-02)** —
`raw data/transcrip-28ago26-organizacion-municipal.anon.md`, produced by
`scripts/anonymize-transcript.py` (mapping stays local, gitignored).

**Scope correction (2026-09-02):** MU1–MU4 turned out to be **generic,
country-level** articles, not Montes de Oca instance content — same
placement logic as the existing `organismos/roles-municipales.md` and
`explicacion/concejo-municipal-vs-cec.md`, which they extend. The mechanics
they describe (the three-part split, the national participatory-budget
legal mechanism, session/voting procedure, the cociente/subcociente election
formula) come from the Código Municipal and apply to any canton — the
Síndico's own framing in the session draws this line explicitly ("esta
información probablemente no le va a servir a San José... pero en algunos
puntos sí"). Concejo Municipal party/coalition composition, coalition
history, and electoral strategy were kept **out** of MU1–4 and out of the
instance article — that content is categorically partisan/strategic rather
than institutional-explanatory, and lives in a new dedicated instance
article instead (MU5, below), explicitly flagged for review rather than
treated as settled.

- ~~**MU1 — Separación de poderes en la práctica**~~ — DONE, see
  `explicacion/alcaldia-concejo-en-la-practica.md`. The alcaldía/Concejo
  negotiation dynamic beyond the formal split, genericized (no canton named
  in the examples).
- ~~**MU2 — Presupuestos participativos**~~ — DONE, see
  `organismos/presupuestos-participativos-municipales.md`. **Sourcing flagged
  inline in the article itself**, not just here: the session hedged between
  "por ley" and "por acuerdo del Concejo Municipal" for the legal basis and
  never landed on one — the article says so explicitly and needs a
  truth-bearer to confirm which it is. The participatory-budget platform's
  name and URL are confirmed (2026-09-02, by the user): **Montes de Oca
  Decide**, https://decide.montesdeoca.go.cr/ — the transcript's three ASR
  renderings ("Montío Cadecide", "Montioca de Sidana", "Montedioca Decide")
  were all the same tool, mangled. Named and linked in
  `distritos/montes-de-oca/gobierno-municipal.md` (it's Montes de Oca-specific,
  not this generic article). The municipality's real domain is
  `montesdeoca.go.cr` (not `montoca.go.cr`, another ASR mangling) — confirmed
  via the org-chart page the user linked, now cited in
  `gobierno-municipal.md`'s staffing section.
- ~~**MU3 — Cómo funciona una sesión del Concejo Municipal**~~ — DONE, see
  `organismos/sesiones-concejo-municipal.md`. Includes the quórum formula
  (mitad+1 of regidurías propietarias) and the two procedural mechanisms the
  original summary had conflated: **moción de orden** vs. **alteración del
  orden del día**.
- ~~**MU4 — Concejos de distrito: elección y reglamento**~~ — DONE, see
  `organismos/concejos-de-distrito.md`. Cociente/subcociente mechanics with
  a worked (illustrative, not real) example, plus a flagged sourcing gap:
  the gender-parity suplencia reform is reported without a confirmed article
  number or date.
- **MU5 — Composición Política del Concejo Municipal de Montes de Oca**
  (instance, not generic) — DRAFTED, see
  `distritos/montes-de-oca/composicion-politica-concejo.md`. Coalition
  composition, the FA + Gente Montesoca coalition's formation and how it
  functions today, presidency/vicepresidencia history, and the electoral
  reported figures — all explicitly marked **"en revisión"** in the article
  itself, sourced to a single internal session, not cross-checked against
  TSE or press. This is deliberately published as editorial/field knowledge
  rather than held back — the intent (per the user, 2026-09-02) is that the
  people who actually hold these seats review it once it's live and open
  discussion from there, rather than waiting for a private review pass
  first. Partisan framing (e.g. pejorative labels for rival parties) was
  stripped to stay within VOICE.md's sober register even though the article
  is provisional. **Still open:** cross-check against TSE/prensa for the
  proper N3 (FA's historical municipal record, 2026-07-25 intake above) —
  this article is a strong first draft toward N3, not a replacement for
  doing that verification.

Also fixed while writing these: `distritos/montes-de-oca/gobierno-municipal.md`
originally said concejales de distrito receive a dieta — the transcript
confirms only regidores and síndicos do (concejalías de distrito serve
unpaid), matching what `organismos/roles-municipales.md` already said
correctly. Corrected, and that article trimmed generally to link to
MU1–4 instead of re-explaining their mechanics, per VOICE.md's
"cross-link instead of repeating."

**Spelling correction (2026-09-02, caught by the user):** the body is
"**Concejo** de Distrito" (with C — the deliberative body, same root as
Concejo Municipal), not "Consejo de Distrito" (with S, which reads as
"advice"). MU4's file was renamed
`organismos/consejos-de-distrito.md` → `organismos/concejos-de-distrito.md`,
and every inbound link plus every body mention of "consejo(s) de distrito"
across the batch (`roles-municipales.md`, `presupuestos-participativos-municipales.md`,
`gobierno-municipal.md`, `composicion-politica-concejo.md`,
`distritos/montes-de-oca/index.md`, and this file) was fixed to match. Not
touched: `distritos/montes-de-oca/sabanilla/iniciativas/buses-sabanilla.md`'s
link to the **Consejo de Transporte Público** (CTP) — a different, unrelated
national body that is correctly spelled with S. Watch for this distinction
in any future municipal-government content — "Concejo" (C) for a governing
body (Concejo Municipal, Concejo de Distrito), "Consejo" (S) for an advisory
one (like the CTP) or the common noun.

## Content architecture: district / canton / national

**Principle:** separate **generic** content (reusable by any district — roles, processes, the official directive) from **instance** content (specific to Sabanilla at a given moment — who coordinates today, what its assembly prioritized).

- **Generic zone** — the current folders (`organismos/`, `guias/`, `explicacion/`, `recursos/`, `tutorials/`, `principios.md`, `niveles/`) stay district-agnostic. Everything derived from `directrices-capb.md`, the assembly methodology, the glossary, and the 6 pillars lives here, written in terms of "the district" / "the Committee", never "Sabanilla".
- **Instance zone** — new folder `docs/distritos/<canton-slug>/<distrito-slug>/`, e.g. `docs/distritos/montes-de-oca/sabanilla/{index,mesa-de-coordinacion,iniciativas}.md`. **The district slug alone isn't unique nationally** — Costa Rica has 496 districts across 82 cantones and several names repeat (there's more than one "San Rafael"). That's why canton always comes first in the path, from the very first district documented, even though only one exists today — this avoids a URL migration later. A future district in the same canton (`docs/distritos/montes-de-oca/san-pedro/`, etc.) replicates the same shape without touching the generic zone; a new canton adds its own folder (`docs/distritos/<other-canton>/`). An index `docs/distritos/index.md` serves as the national map; each `docs/distritos/<canton-slug>/index.md` serves as the canton map. **Already built** for Montes de Oca/Sabanilla — see `docs/distritos/index.md` and `docs/distritos/montes-de-oca/index.md`.
- **Current officeholder names**: only in `distritos/<canton-slug>/<distrito-slug>/mesa-de-coordinacion.md`, kept up to date operationally by the committee itself — never in generic pages.
- **Convention**: instance pages always live under `distritos/<canton-slug>/<distrito-slug>/`, linking to the generic reference (e.g. Sabanilla's Mesa links to `organismos/roles-y-responsabilidades.md`) instead of repeating content.
- **Path to canton/national**: the `distritos/<canton-slug>/` index is already the canton rollup; the `distritos/` index is the national rollup. No separate `territorios/<provincia>/<canton>/<distrito>/` hierarchy is needed — canton/district is already in the path. **The full list of 496 districts / 82 cantones is not onboarded yet** — they're added only as a real district organizes and requests its page, not speculatively.

Definir pilares de sabanilla
iniciativas en cada pilar

cada iniciativa tiene un líder.
qué mas?
- objetivo
- alcance
- fecha
- por qué es importante?
- a quien afecta?
- algo más?

notes:
biblioteca ambulante. cuido?
buses sabanilla. oportunidades? elegir una
comunicar, publicitar negocios locales. historias y opiniones, entrevistas

Meta proyectos:
- comunicación: Goico, la union, moravia
- marco de lineamientos

puntos abstractos del parque del este


marco para llevar una initiactiva
cuanta gente? 
qué recursos ocupa?
comunicarlo?


A Mariano le interesa trabajar con periodistas.

encontrar productores audiovisuales
recursos gráficos? unificar comunicación? libro de marca?
plan de comunicación política (estar al día con lo que sucede y recomunicar)
- acercarse a los negocios locales. publicidad y opinión pública