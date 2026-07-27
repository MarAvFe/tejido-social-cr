# Changelog

All notable changes to Tejido Social will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.2] - 2026-07-25

### Added
- `docs/explicacion/concejo-municipal-vs-cec.md` — N2 from `CONTENT-TODO.md`: distinguishes the elected municipal government from the party's internal cantonal structure (CEC), sourced from the Código Municipal, the FA Statute, and `directrices-capb.md`. Confirms these are two independent origins (State vs. party), resolving the committee's own stated uncertainty about the distinction. Unblocks N3 (FA's historical municipal record).
- `docs/organismos/frentes-nacionales.md` — N6 from `CONTENT-TODO.md`: the party's 12 statutory Frentes Nacionales (sector-based, not territorial), plus JFA ("La J") and Secretaría de las Mujeres as related but separately-regulated sector organs. Sourced from the FA Statute (Arts. 23, 26, 27) rather than committee notes, since the committee notes turned out not to contain this information despite the original TODO entry saying otherwise. Explicitly flags that no district/canton-level presence of any Frente is confirmed yet.
- `docs/explicacion/public-narrative.md` — explains the Public Narrative framework (Marshall Ganz: Self/Us/Now, YCMAD) as a reusable tool, paired with `tutorials/historia-de-angelica.md` (the worked example). Includes a 3-question template for an affiliate to prepare their own story before bringing an initiative to committee.
- Four new reference/explicación articles (N11–N14 in `CONTENT-TODO.md`), all sourced directly from a full read-through of the FA Statute — likely FAQs for any affiliate that weren't covered anywhere on the site yet:
  - `docs/organismos/requisitos-candidatura-popular.md` — what the Statute requires of anyone running for elected office on the FA ticket (Art. 22): background/CCSS checks, minimum affiliation time, and the 20%-of-salary contribution commitment to the party treasury.
  - `docs/explicacion/mecanismos-democracia-participativa.md` — plebiscito vs. referendo, how affiliates themselves can force a national consultation (25%/30% petition thresholds), and the binding-result turnout thresholds (Arts. 38–42).
  - `docs/organismos/sanciones-disciplinarias.md` — what counts as a falta, the six escalating sanctions, and the Tribunal de Ética's exclusive authority over discipline and revocatoria (Arts. 59–61).
  - `docs/organismos/finanzas-del-partido.md` — where party money can/can't legally come from, mandated spending percentages, and public-reporting obligations (Arts. 53–58).
- `docs/organismos/codigo-de-etica.md` — N15 in `CONTENT-TODO.md`: a 3-minute, explicitly-not-a-replacement summary of the standalone [Código de Ética del Frente Amplio](https://www.frenteamplio.org/wp-content/uploads/2025/05/Codigo-de-Etica-FA.pdf) PDF (46 articles, 5 chapters) — covers the ethical/conduct commitments, the Tribunal de Ética and Tribunal de Alzada, the denuncia procedure, the sanctions ladder (including the parallel Ley 10.235 violence-against-women-in-politics scale), and recursos. Modeled on `principios/partido-nacional.md`'s approach to condensing a primary source faithfully. Cross-linked with `organismos/requisitos-candidatura-popular.md` and `organismos/sanciones-disciplinarias.md`.
- `docs/recursos/glosario.md`: 8 new entries surfaced while reading the FA Statute and Código de Ética in full — `JFA`, `SdM`, `Frente Nacional`, `Plebiscito`, `Referendo`, `Tribunal de Ética`, `Tribunal de Alzada`, `Revocatoria de mandato`, `Inopia`, each cross-linked to the article that covers it in depth.
- `docs/guias/presentar-denuncia-tribunal-etica.md` — N16 in `CONTENT-TODO.md`: how-to companion to `codigo-de-etica.md`, walking through the Código's Capítulo III step by step (plazos, what a denuncia must contain, anonymous-denuncia exceptions, the Órgano Director/comparecencia process, and the two recourse options). Flags explicitly that the Código doesn't publish a fixed public email/form for filing — doesn't invent one. Linked from `codigo-de-etica.md`'s denuncia section with a "(¿cómo?)" pointer.

### Fixed
- `docs/organismos/roles-municipales.md`: the Remuneración section incorrectly said concejales de distrito receive a dieta. Fact-checked against the Código Municipal (Ley N.° 7794): Art. 30 grants dietas only to regidores and síndicos; Art. 55 explicitly states Concejo de Distrito members serve "gratuitamente." Corrected to note concejales de distrito receive no dieta or remuneration. Also softened the alcaldía-salary line ("depende de la recaudación de impuestos" → "se ajusta según el presupuesto ordinario de la municipalidad"), matching Art. 20's actual basis (a budget-tier table), not tax collection directly. Also fixed a stale "todavía no tiene artículo propio" line now that `concejo-municipal-vs-cec.md` exists, and added cross-links both ways.
- `concejo-municipal-vs-cec.md`, `frentes-nacionales.md`, `public-narrative.md`: had a `source_url` in frontmatter but no inline links in the body — every mention of a specific law/article/authority now links directly to it, plus a closing "Fuente:" line, matching the existing `roles-municipales.md` pattern. Codified as a standing check in `CONTENT-FRAMEWORK.md` (question 4) so it isn't missed again.
- `docs/organismos/sanciones-disciplinarias.md`: incorrectly called the party's disciplinary body "Tribunal de Ética y Disciplina." Confirmed against both the FA Statute and the Código de Ética that the correct name is **Tribunal de Ética**, with appeals going to a separate **Tribunal de Alzada**. Corrected and cross-linked both tribunals.

## [0.4.1] - 2026-07-25

### Changed
- **Comisiones Temáticas restructured as a real sidebar subcategory.** The 6 commission pages (`ambientes-espacios-publicos`, `participacion-organizacion`, `cultura-deporte-recreacion`, `movilidad-ciudad`, `cuidados-inclusion`, `educacion-formacion-empleo`) were flat siblings inside `organismos/`, alongside unrelated pages (roles, CEC Ampliado, roles municipales). Diátaxis quadrant was right, but the sidebar didn't visually group the six as one unit. Moved into `organismos/comisiones-tematicas/` with its own `_category_.json`, so they now nest under a collapsible "Comisiones Temáticas" section instead of sitting flat. `comisiones-tematicas.md` becomes `comisiones-tematicas/index.md`. Updated all inbound links (11 files) and `CONTENT-FRAMEWORK.md`'s Comisión/Iniciativa thread entries to match. Pure reorganization — no content change, no new reader-facing category.

## [0.4.0] - 2026-07-25

### Changed
- **Licensing split into code vs. content, and made conservative pending legal review.** Previously the repo claimed CC0 (public domain) for content in most places but MIT in the root README — an inconsistency, and CC0 was premature regardless: parts of the site's content closely follow or paraphrase the party's own official directives/statute, which this project may not have the right to dedicate to the public domain. Now:
  - `LICENSE` (root) — MIT, and now correctly contains MIT text (previously contained CC0 legal text despite the root README claiming MIT). Covers code only (`tejido-social-web/src/`, plugins, config, build scripts).
  - `LICENSE-CONTENT` (root, new) — CC BY-NC-ND 4.0. Covers written content only (`tejido-social-web/docs/`, `tejido-social-web/src/pages/*.md`). Explicitly framed in the file itself as a conservative placeholder pending legal review, not a final decision — expected to loosen, not tighten.
  - Updated all references to match: root `README.md`, `tejido-social-web/README.md`, and the site footer copyright string in `docusaurus.config.ts` (previously said "Dominio Público (CC0)").
  - Added a `SITE-TODO.md` item tracking the pending legal review and what it needs to resolve.

### Added
- `SITE-TODO.md` — new engineering/config/process backlog, separate from `CONTENT-TODO.md` (which is content-only, missing articles). Seeded with the `showLastUpdateTime: true` config task (moved out of `CONTENT-TODO.md`) plus two new audit items: re-checking published articles against `VOICE.md` now that it's written down, and periodically re-verifying `CONTENT-FRAMEWORK.md`'s concept-thread registry still matches the site.
- `VOICE.md` — editorial voice/tone standard (register, honesty-about-incompleteness, sourcing discipline, genericity vs. instance, privacy incl. public-office naming exception) inferred from published articles and existing `CONTENT-TODO.md` conventions.
- `CONTENT-TODO.md`: new "Pending intake" section tracking 10 items from the 2026-07-25 committee notes, split into research-ready, write-ready, operational/not-yet-documentable, and blocked-on-human-conversation buckets.
- `/politica-editorial` — new standalone page (`src/pages/politica-editorial.md`) explaining the source/status tag system, the fact-vs-interpretation distinction, and how to flag or correct an error. Linked from the footer next to Contacto.
- `docs/organismos/roles-municipales.md` — reference on Costa Rica's municipal government (alcaldía, Concejo Municipal/regidores, Concejo de Distrito/síndicos, the 8 special Concejos Municipales de Distrito), sourced from the Código Municipal and TSE (N1 from the 2026-07-25 intake).
- `docs/organismos/cec-ampliado.md` — reference on CEC Ampliado (the CEC meeting jointly with district coordinations), explicit that it and most district committees are under a year old (N4).
- `docs/distritos/` — first build-out of the instance-content scaffold decided earlier: `docs/distritos/<canton-slug>/<distrito-slug>/`, canton-namespaced from the start since district names repeat nationally (496 districts across 82 cantones). Seeded with Montes de Oca → Sabanilla, including `iniciativas.md` (N5: public initiative track record, no personal contact info — coordination mediates introductions).
- `docs/tutorials/historia-de-angelica.md` — illustrative Public Narrative (Marshall Ganz) example of taking a small idea to the district committee; seeds the first entry in Sabanilla's `iniciativas.md`.
- `CONTENT-FRAMEWORK.md` — content-placement framework: a 4-question test (reader-question → category, generic vs. instance, concept-thread → obligatory links, source label) plus a living registry of concept-threads (Iniciativa, Comisión, Membresía, Asamblea, Coordinación, Encuesta, Estructura del partido) with each thread's generic home, instance home, and invariants. Purpose: catch organization conflicts (duplication/contradiction across Diátaxis quadrants) at creation time, not in a later audit. Cross-referenced from `VOICE.md` and `CLAUDE.md`.
- `CLAUDE.md`: new "Language: English for meta docs, Spanish for published content" rule, since the English/Spanish split slipped twice (see Changed below) — codified so it doesn't happen a third time.

### Fixed
- Site footer still showed the old "Dominio Público (CC0)" copyright text after the licensing change, because Docusaurus's Spanish i18n snapshot (`i18n/es/docusaurus-theme-classic/footer.json`) overrides `docusaurus.config.ts`'s `copyright` value at build time for the `es` locale. Fixed the i18n file directly; also backfilled a missing "Política Editorial" footer-link translation entry that had silently fallen back since that link was added.
- Build failed after the Docusaurus 3.9.2 → 3.10.2 upgrade with `Cannot find package '@docusaurus/faster'` — 3.10 requires that package separately for the Rspack bundler path enabled by the pre-existing `future: { v4: true }` config flag. Added `@docusaurus/faster` as a dependency.

### Changed
- Footer copyright and both `LICENSE`/`LICENSE-CONTENT` copyright-holder lines simplified from "Comité de Acción Política de Base de Sabanilla (Frente Amplio)" to just "Frente Amplio".
- `docs/organismos/comisiones-tematicas.md` and `docs/distritos/montes-de-oca/sabanilla/iniciativas.md` now cross-reference each other explicitly: the comisión page explains the comisión→iniciativa (generic plano → district instance) relationship and links to district initiatives; the iniciativas page is regrouped *by comisión* so the plano↔instance structure is visible. Closes the disconnect the framework's Iniciativa thread is built to prevent.
- `CONTENT-TODO.md` trimmed to backlog-only: removed all 34 `[x] HECHO` entries from the content tree (published articles are now tracked only by their existence in `docs/` and this changelog, not duplicated in the TODO). Kept the 5 still-open placeholder entries and the one never-built backlog item (`recursos/mapa-canton-distritos.md`, later superseded — see below), plus the decision/architecture sections. File shrank from a full site map to an actual open-items list.
- `contacto.md`: trimmed the source-tag explanation to a pointer at `/politica-editorial`, which is now the canonical explanation (was duplicated in both places).
- `CONTENT-FRAMEWORK.md` translated from Spanish to English — it's a meta/planning doc, not published content, so it belongs in the English bucket per the language rule above.
- `CONTENT-TODO.md` translated from Spanish to English in full (it was Spanish throughout except one English section added later) — same reason.
- `CONTENT-TODO.md`'s distrito/cantón/nacional architecture section updated to namespace instance pages by canton (`distritos/<canton-slug>/<distrito-slug>/`) instead of a flat `distritos/<slug>/` — a flat scheme would collide the moment a second canton also has a district with the same name (e.g. multiple "San Rafael" nationally). `recursos/mapa-canton-distritos.md` backlog item superseded by the now-built `docs/distritos/montes-de-oca/index.md`.
- `CONTENT-TODO.md`: marked N1, N4, N5 done with pointers to the new articles; added the original Spanish backlog items (Historia de Angélica — now done —, piloto de San José Centro, expectativas del Acuerdo Comisión Política, artículo de public narrative, revisión de `principios/partido-nacional`) and a technical-maintenance item for site-wide `showLastUpdateTime: true`.

## [0.3.0] - 2026-07-16

### Added
- Full-text search, powered by `@easyops-cn/docusaurus-search-local` — indexed at build time, runs entirely client-side (no external service, works offline once loaded). Configured for Spanish stemming/indexing.
- `CLAUDE.md` — workflow rules for keeping this changelog current and for semver bump decisions (patch = content/small fixes, minor = new features, major = reserved for a real adoption milestone like a domain change or canton/national rollout).

### Fixed
- Translated remaining English strings in `i18n/es/code.json` (search UI, external-link icon label, mobile dropdown labels) that had been auto-generated in English by `write-translations` and never localized.

## [0.2.0] - 2026-07-15

### Added

#### Source Transparency
- Every article now discloses where its content comes from, rendered automatically at the bottom of the page via a swizzled `DocItem/Content`:
  - **Directiva oficial** — cites the party's official directive/statute, with a link when available.
  - **Conocimiento de campo** — knowledge gathered from real district experience (assembly minutes, community consultation), not an official written source.
  - **Editorial** — framing/structure written by whoever maintains the site, no external source.
  - **Fuente pendiente** — placeholder content awaiting a real source (workshops not yet held, formats not yet confirmed).
- Driven entirely by frontmatter (`source_label`, `source_note`, `source_url`) — applied across all 40 existing articles.

#### Automatic Acronym Tooltips
- `src/data/acronyms.ts` — single registry of party acronyms (FA, CAPB, CEC, CEP, CEN, TEFA, TSE, FAMO).
- `plugins/remark-acronyms` — remark plugin that wraps every whole-word acronym mention across all content at build time, with no per-article edits required. Adding a new acronym is a one-line registry addition.
- Renders as a native `<abbr>` with hover tooltip on desktop, plus a tap-to-open floating popover on mobile (hover-only tooltips don't work on touch devices).
- Site-wide "expand acronyms to full text" mode wired end-to-end (`AcronymModeContext`, localStorage-persisted) — infrastructure ready for a future visible toggle.

#### Content
- Split `principios.md` into `principios/partido-nacional.md` (the 12 official statutory principles, sourced from frenteamplio.org) and `principios/comite-distrital.md` (the original 5 practical committee values, now clearly labeled as field knowledge, not statute).
- New tutorial: `tutorials/desarrollar-iniciativa-distrital.md` — how to take a personal initiative from idea to a proposal the district coordination can pick up.
- New standalone `/contacto` page: current status of the site (a Sabanilla district proposal, not yet official), its purpose, and a contact email.
- Category landing pages (`guias/`, `recursos/`, `explicacion/`) now list their child articles with descriptions instead of "Contenido pendiente" or nothing at all.

#### Navigation & Branding
- Sidebar reordered via `_category_.json`: Introducción, Recursos, Principios, Tutoriales, Guías Prácticas, Niveles, Organismos, Explicación.
- Footer: "GitHub Issues" replaced with "Contacto" (internal link), added "Sitio oficial del partido", dropped the license link.
- New favicon: inverted colors from the official FA mark, to avoid confusion with frenteamplio.org's own favicon.

### Changed
- Landing page: voseo pass across hero and feature copy; simplified hero text (dropped the party-pledge quote and the presumptuous "diste el paso" line).

---

## [0.1.0] - 2026-02-13

### Added

#### Content Architecture - Diataxis Framework
- Reorganized documentation following Diataxis framework (Tutorials, How-To Guides, Reference, Explanation)
- **Tutorials** - Learning by doing (3 new files):
  - `docs/tutorials/primera-protesta.md` - Step-by-step guide to attending your first protest
  - `docs/tutorials/primera-accion-digital.md` - Learning digital activism through practical actions
  - `docs/tutorials/unirse-a-un-organismo.md` - How to discover and join a working group
  
- **Explanation** - Context and reasoning (5 new files):
  - `docs/explicacion/historia-tejido-social.md` - Origin story of Tejido Social framework
  - `docs/explicacion/por-que-descentralizar.md` - Why decentralization works better than centralized leadership
  - `docs/explicacion/por-que-principios-escritos.md` - Why published principles protect movements
  - `docs/explicacion/modelos-de-referencia.md` - Reference movements and what we learned (BDS, XR, Sunrise, Wikipedia, Mutual Aid, Civil Rights, Zapatistas)
  - `docs/explicacion/economia-solidaria.md` - Theory and practice of solidarity economy for movements

#### Landing Page & Branding
- Updated `src/pages/index.tsx` - New hero section with Tejido Social messaging and dual CTA buttons
- Updated `src/components/HomepageFeatures/index.tsx` - 6 core features (Descentralizado, Documentado, Causa-Neutral, Principios Claros, Niveles de Participación, Organismos Autónomos)
- Updated `docusaurus.config.ts` - Site title, tagline, navbar, and footer with proper navigation structure

#### Language & Voice
- Converted all Spanish documentation to **ustedeo** (formal address) for inclusive, authentically Costa Rican tone:
  - `docs/intro.md` - Updated to use formal address throughout
  - `docs/niveles/observador.md` - Converted to reference-style format with formal address
  - `docs/tutorials/primera-protesta.md` - Updated to ustedeo while maintaining warm tone
  - `docs/tutorials/primera-accion-digital.md` - Updated to ustedeo
  - `docs/tutorials/unirse-a-un-organismo.md` - Updated to ustedeo

#### License
- Changed LICENSE from MIT to **CC0 1.0 Universal** (Public Domain Dedication)
- Aligns with Tejido Social's philosophy of free knowledge with no restrictions

### Changed

#### Documentation Structure
- `docs/niveles/observador.md` - Refactored as REFERENCE content (factual, not narrative)
  - Converted "Después" section to simple resource table linking to tutorials
  - Removed tutorial material in favor of pointing to detailed guides

#### Package Metadata
- Updated `package.json` version from 0.0.0 to 0.1.0

### Technical Details

#### Files Created (13 total)
- 3 tutorial files (learning by doing)
- 5 explanation files (understanding and context)
- 1 license file (CC0)
- 1 changelog file (this document)
- 3 updated component/config files

#### Files Modified (7 total)
- Landing page components and configuration
- Documentation reference pages
- Language and voice across Spanish content

### Documentation Principles Applied

- **Diataxis Framework**: Separated tutorials, guides, reference, and explanation to serve different user needs
- **Ustedeo**: Formal address for inclusivity and authenticity in Costa Rican context
- **Reference Content**: Concise, factual, neutral
- **Tutorial Content**: Learning by doing, step-by-step, encouraging
- **Explanation Content**: Context, reasoning, "why" not just "how"

---

## Unreleased

### Planned
- Full-text search
- Sitemap/SEO/`robots.txt`/`llms.txt` (once the site has a real domain and is ready for adoption)
- District-level pages (`docs/distritos/<slug>/`) once a second district is active
- Visible toggle for the acronym expand-all mode (infrastructure already in place, see 0.2.0)

---

## Version History

| Version | Date | Status |
|---------|------|--------|
| 0.3.0 | 2026-07-16 | Local full-text search, CLAUDE.md changelog/semver workflow |
| 0.2.0 | 2026-07-15 | Source transparency, automatic acronym tooltips, content restructuring |
| 0.1.0 | 2026-02-13 | Initial release - Documentation framework and landing page |
| 0.0.0 | 2026-02-13 | Pre-release template |