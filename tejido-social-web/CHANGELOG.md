# Changelog

All notable changes to Tejido Social will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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