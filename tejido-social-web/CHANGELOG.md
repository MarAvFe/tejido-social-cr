# Changelog

All notable changes to Tejido Social will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

### Planned for Next Version
- Additional nivel pages (participante, miembro-activo, coordinador, formador) with full content
- Organismo pages with detailed specifications
- How-to guide pages (complete set)
- Reference resource pages (canticos, plantillas, glosario, preguntas-frecuentes)
- English translation of key content
- Multi-language support (Portuguese, Arabic)
- Contributing guidelines updates (this changelog)

---

## Version History

| Version | Date | Status |
|---------|------|--------|
| 0.1.0 | 2026-02-13 | Initial release - Documentation framework and landing page |
| 0.0.0 | 2026-02-13 | Pre-release template |