# Changelog

All notable changes to Tejido Social will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Content quality gates and CI.** The repo had no CI; the Netlify build was the only check. New `.github/workflows/ci.yml` runs on every push and PR: the same build Netlify runs (both apps), `tsc` for both, `scripts/check-content.mjs` (internal file names in reader-facing text, `[text](url)` inside TSX, placeholder artifacts, missing `source_label`; changelog reminder on PRs) and `scripts/link-graph.mjs --check` (broken relative doc links, stale entries in the `CONTENT-FRAMEWORK.md` thread registry). Each rule is covered by a test that plants a violation (`scripts/*.test.mjs`). The bar is written down in the new root `CONSTRAINTS.md`. Project skills for agents in `.claude/skills/`: `content-article` (this repo's checklist) and three adapted from addyosmani/agent-skills (MIT): `doubt-driven-development` (review factual claims before they ship), `interview-me`, `constraint-driven-development`. Chosen after evaluating Ponytail, OmniRoute, Graphify and Agent Skills; the reasoning is in `SITE-TODO.md`.
- **`/padron` — restricted member roll (demo stage).** New page (`src/pages/padron.tsx`, `src/components/Padron/`) built the same way as `/calendar`: a native page in the site's own `Layout`, with its backend configured by env var (`PADRON_API_URL` → `customFields.padronApiUrl`). Editors log in, then search (accent-insensitive, by name or phone), filter by district, and add/edit/delete people (nombre, teléfono, distrito, fecha de ingreso); the canton is derived from the district (`src/config/padron.ts`), never stored. Two data sources behind one interface (`src/components/Padron/store.ts`). **Without `PADRON_API_URL` (the current deploy) it runs in demo mode:** 30 fictitious people (`src/data/padron-demo.json`), no login, changes kept only in the visitor's own localStorage, a banner saying so and warning against entering real data, and a "Restablecer demo" button — so the UI can be tested with no server. **With `PADRON_API_URL`** it talks to PocketBase (new top-level `padron-backend/`: schema migration + a seed script that loads the same demo JSON and refuses to touch a non-empty table); there, access control lives in PocketBase's API rules, not in the page: login required, anonymous requests get an empty list, public sign-up is disabled, login is rate-limited. Not linked from the navbar, `noindex`, and excluded from the sitemap. New dependency: `pocketbase` (JS SDK).
- **CARS — new sub-site for the Colectiva Autónoma de Resistencia Social** (`src/pages/cars/`, `src/components/Cars/`). A second independent sub-site alongside Iniciativas Colectivas: same architectural approach (its own `CarsLayout` shell that skips Docusaurus's `Layout`, so no FA navbar, footer or branding), but its own components and color scope rather than shared ones — CARS and Iniciativas Colectivas are unrelated organizations that only share the domain. Twelve pages: a landing page with three reader paths ("Tengo una causa" / "Quiero sumarme" / "Solo quiero informarme"), `quienes-somos/` (overview, misión y visión, historia, principios), `causas/` (active causes + how to bring one), `como-nos-organizamos/` (the backbone/accompaniment model, the five committees, and consent-based decision-making), and `participa/` (sumate, contacto).
- **CARS — brand assets** generated from the collective's logo (`static/img/cars-{favicon.ico,favicon.png,logo-mark.png,social-card.png}`): a circular transparent-background mark, a 16/32/48 favicon, and a 1200×630 social card in the flag palette. `CarsLayout` overrides the site-wide favicon and the `og:`/`twitter:` tags per page, so a CARS link shared to the collective's own Facebook page no longer previews as "Aprendé sobre el FA" with the party's social card. `og:image` is resolved absolute, since scrapers won't fetch a root-relative one.
- **CARS — causes are external by design.** `InitiativeCard` links out to wherever each cause is already documented (data centers points at the existing `/iniciativas-colectivas/datacenters/`) rather than restating it, and renders a visible "pendiente" placeholder when a cause has no published destination yet — the site never ships a dead link silently. `causas/_plantilla-causa.tsx` is an underscore-prefixed (therefore unbuilt) template carrying the shared cause schema: estado, organización líder, contacto público, cómo ayudar, última actualización, etiquetas.
- **CARS — corrected official name.** Every press source and the collective's own logo read "Colectiva Autónoma **por** la Resistencia Social", not "de" — renamed across all pages, metadata and the regenerated social card.
- **CARS — sourced history.** The timeline now links six press reports inline. Corrects a significant error: the 6 August plantón was the "Plantón por la Justicia Democrática", convened by the collective over judicial independence and the Executive's "golpe de Estado" accusation against four Sala Constitucional magistrates — not a continuation of the ICE campaign, as the earlier draft implied. Adds the ICE bill's expediente number (23.414), the plantón's hours and the fourteen simultaneous locations, and the faroleada's real name, its ~40 backing organizations and its 31 cantones. The March founding date remains the one unsourced item and stays marked "por confirmar". The ICE→judiciary arc is now the page's argument rather than a gap: it's what taught the collective that organizations facing unrelated issues needed the same support.
- **CARS — CANVAS as precedent** on the hub-model page: the Belgrade centre founded in 2004 by Otpor! veterans, which trains movements in 50+ countries instead of leading them. Cited for two specific decisions (teach the knowledge rather than accumulate it; don't front someone else's fight) and for the model's limits, not as a claim of similarity.
- **CARS — the judiciary cause renamed** to "Independencia judicial y separación de poderes", since it's the cause that actually convened both mobilizations.
- **CARS — coordination-vetted copy for the five comisiones**, replacing inferred descriptions. The collective's own term is *comisión*, not "comité", so the page moved to `como-nos-organizamos/comisiones.tsx` (301 in `netlify.toml`) and the term was corrected site-wide — except "comités comunales" on the hub page, which refers to other organizations. The vetted horizontality text also documents a detail the earlier copy missed: each comisión has a coordinating person who orients the work and links to the other comisiones, explicitly without creating hierarchy.
- **CARS — real links.** Sign-up form (`forms.gle/pxx85jVHHHJPVjdr9`) is live on `participa/sumate`, so that CTA is no longer a placeholder, and Instagram (`@colectivaautonoma.rs`) joins Facebook on the landing page, contacto and the cause-intake page. `contacto` now reads "canales" rather than "un solo canal".
- **CARS — real history.** The collective formed in March 2026 to organize against the ICE "armonización" project; the timeline now carries that origin, the 20,000+ plantón (6 August, confirmed) and the faroleada across 31 cantones (14 September), and the same origin story grounds `quienes-somos` and the hub-model page — the model is presented as something learned from that first campaign rather than asserted abstractly. Dates given from memory render with a "por confirmar" mark (new `dateUnconfirmed` flag on `TimelineItem`), distinct from both a confirmed date and a fully missing one, so a half-remembered date is never quoted back as established.
- **CARS — the principles page says it's empty instead of filling itself.** The collective hasn't agreed its principles yet, so the page states that plainly and points at what *is* settled, replacing an earlier plausible-sounding draft list. Principles are what an organization accepts being held to; a drafted one gets cited later as if it had been agreed.
- **CARS — pages describing unratified process are labeled as such.** `principios`, `como-decidimos` and `como-sumar-una-causa` carry a "Propuesta — pendiente de aprobación del colectivo" notice, so a draft isn't read as settled policy. Dates the collective hasn't confirmed (founding, the 20,000+ plantón, the Faroles parade) render as "fecha pendiente" instead of an estimate.
- Plain-text URLs in event descriptions, location, and contact fields (Zoom/Meet links, forms, a second Instagram link — anything pasted without Google Calendar's own "insert link" formatting) are now rendered as clickable links (`src/utils/linkify.ts`, used by `richText.ts`'s `linkifyUrls` for HTML descriptions and directly in `EventCalendar` for plain-text fields).
- Event popup now shows the date and time (e.g. "Jueves 13 de agosto, 3:30pm") above the badge row, which previously showed no date/time at all.
- **Iniciativas Colectivas — Data centers, press coverage + Limón jobs investigation.** Three translated international press summaries (WRI, CNN, CBS News) on the data centers index page, each with the outlet's own logo, a Spanish summary, and a link to the original (new `ArticleSummary` component in `src/components/IniciativasColectivas`). Also two new Limón-specific articles, linked from the Limón page: a sourced investigation dossier on the Quantum AI Free Zone Campus's jobs-vs-investment numbers (`datacenters/limon-informe-empleos.tsx`), and a satirical flyer version of the same data for sharing (`datacenters/limon-volante-empleos.tsx`) — both built on new long-form article primitives (`Prose`, `Callout`, `SourcesNote`, `renderInlineMarkdown`).
- **Iniciativas Colectivas — "¿Quién está detrás de Quantum?"** (`datacenters/limon-quantum-quienes-son.tsx`), linked from the Limón page. Investigation into the company and people behind the Quantum project: the free-zone regime COMEX revoked in May 2026 (RES-DMR-0083-2026 / ACU-RZF-0025-2026-COMEX) that the developer's site still advertises, the missing SETENA environmental registration, and the public backgrounds of its two listed sales contacts — sourced to La Nación, a 2017 WJLA/AP report, and the developer's own websites. Every source mention is now an inline link to the original page (added `ExternalLink` helper), not just a closing citation.
- **Iniciativas Colectivas — Facebook post embed** (new `FacebookPostEmbed` component, `plugins/post.php` no-auth iframe like the existing `InstagramPostEmbed`). First used on the Limón page for a community Facebook post.
- **Iniciativas Colectivas — "Consignas"** (`src/pages/iniciativas-colectivas/consignas.tsx`), linked from the root Iniciativas Colectivas index. First set of chants for data-center protests, each tagged with topic badges via new `Consigna`/`TagBadge` components — all four currently tagged `datacenters`, with more tags expected as other campaigns add their own chants.
- **Sabanilla — new "San Pedro en Bus" initiative** (`docs/distritos/montes-de-oca/sabanilla/iniciativas/san-pedro-en-bus.md`). Documents an already-built citizen bus-reporting tool (`sanpedroenbus.vercel.app`), covering 9 San Pedro-corridor routes including Sabanilla's. Filed honestly as outside the committee's formal initiative process — pending UAT and formal district alignment, not yet "asignado por la coordinación" like the other three. Cross-linked both ways with the pre-existing, unrelated "Buses de Sabanilla" initiative so the two aren't confused, and the iniciativas index's closing note was split since it no longer holds that all active initiatives are early-stage with nothing built.
- **Iniciativas Colectivas — "Mapa: data centers en Centroamérica"** (`datacenters/mapa-regional.tsx`), linked from the data centers index. Multi-marker map (new `RegionalDataCenterMap` component, built on `leaflet`/`react-leaflet` — new dependencies, since the existing single-pin `MapEmbed` can't place more than one Google Maps marker without a paid API) covering 8 identified projects across Costa Rica, El Salvador, Guatemala, Honduras, and Panamá, color-coded by build status (operativo / en construcción / proyectado). Each marker shows an estimated water consumption in millions of liters since January 2026, computed from published MW capacity via a documented WUE formula (`src/utils/dataCenterWaterEstimate.ts`) — but only for the 2 of 8 projects where the published capacity is a sustained IT load with a comparable (evaporative) cooling technology; the other 6 (including Volcano Energy's Bitcoin-mining park in El Salvador, air/immersion-cooled rather than evaporative) are shown with an explicit note instead of a fabricated number. Quantum's figure is explicitly labeled hypothetical, since construction hasn't started.

- **Iniciativas Colectivas — Bagaces, «Bagaces Alerta» flyer documented.** New `FlyerImage` component (`src/components/IniciativasColectivas`) renders a community flyer as an image at full width — for archiving campaign material as it was shared, rather than retyping it as prose. First use: the two-page "Bagaces Alerta" volante on the Palo Negro AI & HPC Campus project (`static/img/datacenters/bagaces-volante-{1,2}.jpg`), embedded on `datacenters/bagaces.tsx` along with its questions and figures (environmental risk categories, the ≈40 MW wind / ≈80 MW solar + geothermal/BESS backup numbers, and its rebuttal of the developer's "zero water consumption" claim) carried over as plain reusable text, not rewritten as a sourced investigation — this is the community's own flyer content, not independently verified reporting, and is presented as such rather than as a dossier.
- **Iniciativas Colectivas — "Data centers y consulta a pueblos indígenas"** (`datacenters/pueblos-indigenas-consulta.tsx`), linked from the data centers index page and from both the Bagaces and Limón pages, since it applies to either localidad rather than one. Explains Costa Rica's Convenio 169 (OIT) obligation to consult indigenous peoples before measures that may affect them directly, ratified via Ley 7316, and the country's own consultation mechanism (Decreto 40932-MP-MJP), then cites the Shoshone-Bannock Tribes' 2026 formal opposition to data center development in Idaho, USA as a precedent, closing on the concrete question and the authority (MJP, or the territory's own asociación de desarrollo) a community can put it to. Fixed on first review: the citation links used inline `[text](url)` markdown syntax, which `renderInlineMarkdown` doesn't parse (it only handles `**bold**`) — every source link rendered as dead literal text. Switched to the same `ExternalLink`/`SOURCES` pattern already used in `limon-quantum-quienes-son.tsx`. Also trimmed a "scope" callout that mostly restated what the article wasn't claiming rather than what it was, and corrected a factual slip (Costa Rica recognizes eight indigenous *peoples*, not eight indigenous *territories* — there are 24 territories).

### Changed
- **Voseo is now the documented form of address** (`VOICE.md`). The PR template, both issue templates and `CONTRIBUTE.md` required *ustedeo* and "causa-neutral" content, inherited from the old generic Tejido Social framework; they now point at `VOICE.md` and `CONTENT-FRAMEWORK.md`, and the audience levels in the issue templates match `docs/niveles/`. The site is currently mixed (older how-to guides use *usted*); converting them is tracked in `SITE-TODO.md`, pending confirmation of the rule.
- **San Pedro en Bus promoted to a canton-level initiative.** Moved from `distritos/montes-de-oca/sabanilla/iniciativas/` to a new `distritos/montes-de-oca/iniciativas/` section (index + the article), since its 9 routes span the canton rather than one district; 301 from the old URL in `netlify.toml`. Status updated to "en pruebas públicas (UAT)". The page is no longer framed as a Sabanilla committee initiative, so the committee-process wording is gone from it, from Sabanilla's initiatives index (now a one-line pointer under Movilidad) and from `buses-sabanilla.md`'s cross-link. Montes de Oca's index links the new section. The owner's first name was removed per the site's no-names rule for initiative pages.

### Fixed
- **CARS — the collective didn't organize the ICE campaign; a chat that outlasted it did.** `historia.tsx`, `quienes-somos/index.tsx` and `como-nos-organizamos/modelo-hub.tsx` all stated CARS itself formed in March 2026 to coordinate the ICE "armonización" response. Per coordination feedback, that's wrong: the collective didn't exist yet. The people who took part in that mobilization (some of whom are now in CARS) did so individually, through their own pre-existing organizations — named on all three pages (movimiento estudiantil autónomo/MEA, FNL, red de solidaridad con Palestina) without tying any one person to a group — not as CARS. The MEA created the coordination chat that came out of that work, and only months later — after becoming a communications commission, then the Plantón's logistics group — did the collective itself emerge from that chat. All three pages now tell that chronology instead of crediting CARS with organizing the ICE campaign directly.
- **CARS — `historia.tsx`, where the communications commission actually leads.** Second round of coordination feedback on the same origin story: the commission's own members joined its call organically, and it was that commission's work — not a separate logistics group — that concluded in the collective's own formation ("un grupo de personas con ganas de ver cambios tangibles en la sociedad, la Colectiva Autónoma por la Resistencia Social"), framed against a stated motivation (disconformidad social frente a gobiernos neoliberales). The 6 August Plantón entry now also states plainly that organizing its ground logistics was the collective's debut as an organization.

### Removed
- **Iniciativas Colectivas — leftover placeholder links.** Limón's "Documentos y recursos" section (a single unfilled "Carpeta de documentos (Mega)" placeholder) is gone, along with its remaining Instagram/X placeholder links now that the page has real content (Facebook embed, press coverage, three analysis articles). Bagaces's placeholder Mega-folder link and its "Cobertura de prensa" section (a single unfilled placeholder) are gone too, leaving its real "Quiero colaborar" form link in place. No placeholder `ResourceLink`s remain anywhere under `iniciativas-colectivas/datacenters/`.

## [0.6.1] - 2026-09-04

### Added
- Organizer filter, and a per-event modality icon (💻 Virtual / 📍 Presencial / 🔀 Híbrida), tagged via a `[Modalidad]` title prefix.
- Structured per-event fields via plain `Etiqueta: valor` lines in the description: `Organiza`, `Sector`, `Inscripción`, `Contacto`, `Estado`, `Título corto` (month view only) — shown as pill badges in the event popup rather than repeated in the prose below.
- Event color reflects status: green (Confirmada), yellow (Pendiente), gray and struck through (Cancelada — stays visible rather than disappearing), 🟢 icon (Disponible). A "Referencia" legend at the bottom of the calendar summarizes it.
- Week/day views hide 22:00–05:00.
- Event descriptions render as sanitized rich text (Google Calendar stores these as real HTML) instead of showing raw tags.
- [Cómo Usar el Calendario de Actividades](docs/explicacion/usar-calendario-actividades.md) — reader guide plus the full tag-syntax reference for whoever maintains a calendar.
- Local dev reads `GOOGLE_CALENDAR_API_KEY` from a gitignored `.env`.
- Flyer images: a public Instagram post link found anywhere in the description (no tag needed) is embedded directly in the event popup via Instagram's no-auth iframe embed, since flyers already live there and re-uploading them elsewhere just for a public URL is unnecessary friction.

### Fixed
- FullCalendar's grid layout, dark-mode theming, and mobile header toolbar all conflicted with Docusaurus's own CSS.
- Agenda view's events weren't clickable (Google Calendar's own event link collided with our custom rendering).
- Event status colors were silently never painted — FullCalendar sets a literal inline `background-color` per event, not just the CSS variable we were overriding.

## [0.6.0] - 2026-09-04

### Added
- **`/calendar` page** — read-only events calendar built on FullCalendar (pinned to v6.1.21, since the plugins used — `daygrid`/`list`/`timegrid`/`google-calendar` — haven't cut a stable v7 release yet, only `core`/`react` have). Each organizer (a municipality, or the national level) is its own public Google Calendar, managed outside this repo by whoever has edit access to it; the site only reads events client-side via the Google Calendar API (`googleCalendarApiKey` from the `GOOGLE_CALENDAR_API_KEY` build environment variable — not a secret, since it's restricted by HTTP referrer and API scope in Google Cloud Console). Onboarding a new organizer (municipal or national) is a single-entry edit to `src/config/calendars.ts` (id, label, color) — no other code change needed. Includes an organizer filter (checkboxes toggle event sources) and a per-event "add to your calendar" action (Google Calendar link + downloadable `.ics`, built with no extra dependency in `src/utils/addToCalendar.ts`).
- **Virtual/presencial event tagging** — since calendar managers only have the plain Google Calendar web UI (no custom fields there), modality is tagged with a `[Virtual]`/`[Presencial]` prefix typed straight into the event title. `src/utils/eventTags.ts` parses it, strips it from the displayed title, and shows a 💻/📍 icon; an untagged event has no filter effect and always stays visible, so forgetting the tag never hides an event. The modality filter (separate from the organizer filter) hides events with a pure CSS rule keyed off a `data-hide-virtual`/`data-hide-presencial` attribute, so toggling it never re-fetches from the Google Calendar API.
- **Local dev environment variables via `.env`** — `docusaurus.config.ts` now loads `dotenv/config` before reading `GOOGLE_CALENDAR_API_KEY`, so local dev picks it up from a gitignored `.env` (copy `.env.example` and fill it in) instead of needing it exported by hand for every `npm start`. Netlify's build is unaffected — it already sets the variable directly in its build environment.
- **Meta descriptions** — added `description:` frontmatter field to all 70+ articles across all doc categories for SEO and preview text.
- **Mermaid diagram support**, with pan/zoom — enabled `@docusaurus/theme-mermaid` and swizzled (wrapped) `theme/Mermaid` to add pan/zoom controls via `svg-pan-zoom`, since diagrams can render wider or taller than the article column. Diagrams sit in a fixed-height, bordered viewport instead of pushing page layout around. First used in [`docs/guias/presentar-denuncia-tribunal-etica.md`](docs/guias/presentar-denuncia-tribunal-etica.md) for the full complaint-filing flowchart, including its correction and appeal loops.

### Fixed
- **`/calendar`'s month/week/day grids rendered as a collapsed ~1px sliver**, only the Agenda/list view was usable — Infima's global `table { display: block; overflow: auto; }` (added so long markdown tables scroll on mobile) has no `.fc`-scoped exception, so it also landed on FullCalendar's internal `<table>` elements. FullCalendar's month/week/day views depend on the browser's native table layout algorithm (a `height: 1px` + `rowspan` trick) to stretch rows to fill the available height; forcing `display: block` breaks that algorithm and collapses every row. Agenda/list view was unaffected since it doesn't use that trick — which is what made this easy to miss at first. Fixed with a `.fc`-scoped override in `custom.css` restoring real table display roles, so ordinary content tables elsewhere on the site keep Infima's responsive behavior untouched.
- **`/calendar` was unreadable in dark mode** — yellow text stranded on a background that never actually went dark. FullCalendar's CSS custom properties (`--fc-page-bg-color` and friends) are fixed light-theme values with no awareness of Docusaurus's `[data-theme]`, so the whole grid stayed a white box in dark mode; meanwhile Infima's global `a { color: var(--ifm-link-color) }` correctly turned brand yellow in dark mode (by this file's own accessibility contract, yellow text is only safe on the dark background it was never sitting on), and FullCalendar's day-number cells are `<a>` elements. Fixed by re-pointing FullCalendar's variables at the site's dark tokens under `[data-theme='dark'] .fc`, and resetting day-number link color to normal dark-mode body text — they're UI chrome, not emphasis links, the same reasoning `.menu__link` already follows.
- **Production build was broken site-wide** (all 71 pages, not just the one with a diagram) — the Mermaid pan/zoom wrapper above did `import svgPanZoom from 'svg-pan-zoom'` as a static top-level import. `svg-pan-zoom` touches `window` at module-eval time, and this file is pulled in unconditionally by theme-classic's shared `MDXComponents` (for the `mermaid` fence mapping) on *every* doc page during SSR — so it crashed Node the instant it was required, before any diagram was even rendered. `npm run build` failed locally the whole time; Netlify silently kept serving the last successful deploy, which is why the new diagram never appeared live. Fixed by making the `svg-pan-zoom` import dynamic (`await import(...)` inside `useEffect`), which never runs on the server. Caught by reproducing `npm run build` locally rather than trusting `npm start` (dev mode doesn't do static-site generation, so it never hit this).

## [0.5.7] - 2026-09-02

### Added
- **`static/robots.txt`** — was returning 404; now allows all crawlers and points at the existing `sitemap.xml` (auto-generated by the `@docusaurus/preset-classic` sitemap plugin, already live but never referenced anywhere).
- **`static/llms.txt`** — following the [llms.txt convention](https://llmstxt.org/), a plain-text index of the site's sections (generic content vs. per-district instance content) for LLM agents/crawlers, mirroring the site's own genérico/instancia distinction.

### Fixed
- **Navbar theme toggle showed a 3rd state** — with `colorMode.respectPrefersColorScheme: true` (kept so a first-time visitor's theme still follows their OS preference), Docusaurus's stock toggle also cycles light → dark → system → light... on click, showing a distinct "system" icon along the way. Swizzled `Navbar/ColorModeToggle` to decouple the two behaviors it ties together: the button always shows and toggles between just sun/moon (based on the *effective* resolved color, not the raw choice), and every click sets an explicit light/dark value — so once touched, it never falls back to "system" again, but a fresh visitor still gets the right theme on first load.

### Changed
- **404 page copy rewritten** — the generic "Este enlace no funciona" headline is now "Tomamos la dirección equivocada," playing on "dirección" meaning both web address and direction/leadership (also the Estatuto's own term for the party's governing bodies, "Órganos de Dirección"). Added a simple map-pin SVG icon as a visual anchor, in the site's own brand colors rather than an emoji (emoji were tried first but rendered as empty boxes in at least one environment, so nothing that depends on system emoji-font support was kept).

## [0.5.4] - 2026-09-02

### Added
- **Custom 404 page**, sober and helpful instead of Docusaurus's generic default: explains the link is likely broken or moved, and links back to Introducción, Organismos, Guías Prácticas, and the Glosario. Implemented by swizzling `@theme/NotFound/Content` rather than adding `src/pages/404.tsx` alone — the latter only controls the static file crawlers see before JS loads; Docusaurus's client-side router falls back to a separate `@theme/NotFound` component after hydration, which would otherwise silently replace a page-only custom 404 with the stock translated copy. Also fixed the page `<title>`, sourced from an untouched `i18n/es/code.json` string (`theme.NotFound.title`) — same category of bug as the footer-copyright fix in 0.4.0.
- **Branded social share image** (`static/img/social-card.png`), replacing the stock Docusaurus placeholder that every shared link had been showing. Matches the site's actual hero styling (yellow background, FA mark, near-black text). Sized for WhatsApp specifically, which center-crops preview images sometimes down to near-square: all content sits well inside a safe center zone with generous margin, verified by simulating a worst-case square crop, rather than filling the full 1200×630 canvas edge-to-edge.

## [0.5.3] - 2026-09-02

### Changed (ética split)
- **`principios/codigo-de-etica.md`** moved from `organismos/` — it's a set of commitments/values, same kind of document as `partido-nacional.md` and `comite-distrital.md`, not an organizational body. Every inbound link fixed (`guias/presentar-denuncia-tribunal-etica.md`, `organismos/sanciones-disciplinarias.md`, `organismos/requisitos-candidatura-popular.md`, `recursos/glosario.md`, `principios/index.md`, `organismos/index.md`).
- **New `organismos/tribunal-de-etica.md`** — split out of the old `codigo-de-etica.md`: composition (5 titulares + 5 suplentes, 4-year term via Asamblea Nacional), functional autonomy (including the TSE precedent on revocatoria de mandato, moved here from `sanciones-disciplinarias.md`), Tribunal de Alzada, and the two recourse paths. This is the actual órgano; `principios/codigo-de-etica.md` is the document it enforces — keeping them apart means "what are the rules" and "who enforces them" don't collide in one article.
- **Tribunal de Elecciones del Frente Amplio (colloquially "TEFA") confirmed distinct from Tribunal de Ética**, verified against the Estatuto's own text (Art. 33 vs. Art. 34, which explicitly bars simultaneous membership in both) rather than relying on the site's pre-existing glossary claim alone. `recursos/glosario.md`'s TEFA entry rewritten to lead with the full name and cite the incompatibility clause.

## [0.5.2] - 2026-09-02

### Added
- **Four generic, country-level municipal-government articles**, sourced from the full transcript of the 2026-08-28 orientation session: `explicacion/alcaldia-concejo-en-la-practica.md` (alcaldía/Concejo negotiation dynamics), `organismos/presupuestos-participativos-municipales.md` (the participatory-budget mechanism — legal basis flagged as unconfirmed), `organismos/sesiones-concejo-municipal.md` (session/voting procedure), `organismos/concejos-de-distrito.md` (concejo-de-distrito election mechanics, composición sourced to Código Municipal Art. 55). These extend `roles-municipales.md`/`concejo-municipal-vs-cec.md` and apply to any canton, not just Montes de Oca.
- **`distritos/montes-de-oca/composicion-politica-concejo.md`** — Concejo Municipal party/coalition composition and electoral history for Montes de Oca, explicitly marked "en revisión": sourced to a single internal session, not yet cross-checked against TSE/prensa, published as editorial/field knowledge for the people who hold these seats to review and correct. Kept deliberately separate from the neutral institutional articles per `VOICE.md`'s sober register.

### Changed
- **`distritos/montes-de-oca/gobierno-municipal.md`** trimmed to link out to the four new generic articles instead of re-explaining their mechanics, per `VOICE.md`'s "cross-link instead of repeating." Corrected: it previously said concejalías de distrito receive a dieta — the transcript confirms only regidores and síndicos do; concejalías de distrito serve unpaid (this already matched `roles-municipales.md`, which was correct). Also names and links the participatory-budget platform (**[Montes de Oca Decide](https://decide.montesdeoca.go.cr/)**) and cites the municipality's published organigrama.
- **`organismos/roles-municipales.md`** extended with regiduría propietaria/suplente functions, the sindicatura's voice-no-vote role in Concejo sessions, and an inline citation (Art. 55) for the Concejo de Distrito's fixed 5-person composition — detail that didn't have a generic home or a pinned source before.

### Changed (navigation and discoverability pass)
- **`recursos/glosario.md`** gained a **Términos del gobierno municipal** section — the site had six municipal articles and the glossary defined none of their vocabulary (regiduría propietaria/suplente, sindicatura, concejalía, dieta, cociente/subcociente, control político, moción de orden, juramentación, quórum, mayorías). Includes an entry for the **Concejo (c) vs. consejo (s)** distinction, so the spelling rule is documented for readers and not just in internal notes. Municipal terms are kept in their own section, explicitly flagged as State vocabulary rather than party vocabulary.
- **`intro.md`** — the site's entry point described it as being only about comités distritales, and its scope note ("el alcance actual es distrital") was no longer true now that municipal content is country-level. Added a municipal starting path and a glossary pointer to "Por dónde empezar," and rewrote the scope note to distinguish generic municipal content from the canton-specific pages under `distritos/`.
- **Sidebar order** now follows the site's own Diátaxis model: `Recursos` (glossary, FAQ, templates — reference material) moved from position 2 to 8, so it no longer sits ahead of the entire learning path. Everything between shifts up one; relative order is otherwise unchanged.
- **Footer** was missing Organismos, Tutoriales and Distritos, and its "Explicaciones" link pointed at one article instead of the category index. Both fixed.
- **`tutorials/desarrollar-iniciativa-distrital.md`** — the initiative tutorial never said where funding could come from. Added a short "De dónde puede salir el dinero" section pointing to presupuestos participativos, with the two deadline-bearing conditions (juramentación, annual May–June convocatoria).
- **`explicacion/como-se-priorizan-necesidades.md`** — narrows the gap the article itself declared: documents the **MoSCoW** method recommended by a serving sindicatura, explicitly labelled as field practice rather than party doctrine. The stated gap (no official national methodology) remains open.
- **`recursos/preguntas-frecuentes.md`** gained a municipal section answering the questions actually asked during the orientation session: what a dieta is and who receives it, what a non-voting seat is for, the 10-day legal response deadline, whether you can approach a department directly, and how a neighbours' group can request municipal funds.

### Fixed
- **"Consejo(s) de Distrito" corrected to "Concejo(s) de Distrito"** (a governing body, from *concilium* — not "consejo," advice, from *consilium*) across every new/touched article and this changelog's own entries above. `organismos/consejos-de-distrito.md` renamed to `organismos/concejos-de-distrito.md`; every inbound link and body mention updated to match. See `CONTENT-TODO.md` for the distinction (and the one place it does NOT apply: `Consejo de Transporte Público`, a different, correctly-S-spelled national body linked from `buses-sabanilla.md`).

## [0.5.1] - 2026-09-01

### Added
- **`distritos/montes-de-oca/gobierno-municipal.md`** — overview of how the Montes de Oca municipal government works (structure and separation of powers, staffing, presupuestos participativos, citizen channels, council composition by party only, regiduría/síndicatura functions, session mechanics, dietas, consejos de distrito), sourced from a 2026-08-28 orientation session. First article under a new instance thread ("Gobierno municipal") registered in `CONTENT-FRAMEWORK.md`; sets up a series of deeper per-topic articles once the full session recording is transcribed (tracked in `CONTENT-TODO.md`).

## [0.5.0] - 2026-07-31

### Added
- **Accessibility toolbar at the top of every doc page** (`src/components/A11yToolbar/`) — readers reported the site was hard to read and that the theme switch was unfindable on mobile.
  - **Text size control (A / A＋ / A＋＋).** Scales `--ifm-font-size-base` (16 → 18 → 21px) with matching line-height, so headings, lists and tables scale proportionally rather than just paragraphs. Choice persists in `localStorage`. Default stays 16px.
  - **Light/dark toggle duplicated here.** The navbar toggle collapses behind the mobile hamburger menu; this one stays visible in the page flow on every screen size.
  - **Read-aloud button** using the browser's built-in Web Speech API — no external service, no cost, works offline. Picks an `es-CR` voice when present, falls back to any Spanish voice. Long articles are chunked by sentence (browsers truncate long utterances), and code blocks/ToC are stripped before reading. Hidden entirely where the browser lacks support.

### Changed
- **Body links no longer use brand yellow as text.** Yellow on the page background measured **1.22:1** against WCAG AA's 4.5:1 minimum — this was the root cause of the "yellow over white" complaints. Prose links are now near-black (**15.94:1**) sitting on a thick brand-yellow underline that thickens on hover, so the brand color still marks every link while the words carry the contrast. Dark mode keeps yellow link text, where it measures 13:1 on the carbon background and passes.
- **Sidebar styled as navigation, not as prose.** The underline treatment above deliberately stops at the article body: applied to a ~60-entry stacked menu it turned the sidebar into a block of highlighter. Sidebar entries are now plain text with a subtle gray hover, and brand yellow is reserved for the **active page** — a 3px left bar plus bold weight, so the "you are here" cue never rests on color alone. WCAG 1.4.1's underline requirement targets links embedded in text; a nav list is self-evidently navigation, so the structure carries it. Light and dark both measure ≥11.8:1. The yellow bar itself is decorative (1.22:1) and carries no meaning the bold weight and background tint don't already convey.
- `src/css/custom.css` opens with an explicit **accessibility contract** documenting why yellow may be a background but never light-mode text — replacing the old comment that acknowledged the contrast problem and marked it "accepted as-is."
- Visible focus rings on all interactive elements (blue on light, yellow on dark, near-black over yellow surfaces where blue wouldn't contrast); `prefers-reduced-motion` respected; article measure capped at 70ch so larger text doesn't produce unreadably long lines.
- Site URL now points at the live Netlify deployment (`https://tejidosocialcr.netlify.app`) instead of the placeholder `tejidosocial.org`, so sitemap and canonical URLs resolve. Added a matching `homepage` field to `package.json`.

### Fixed
- **`<Acronym>` announced itself as "botón" to screen readers.** `role="button"` was set directly on the `<abbr>`, overriding its native abbreviation semantics and suppressing the `title` expansion. The trigger is now a real `<button>` wrapping an untouched `<abbr>` — keyboard activation comes free, the popover is linked via `aria-controls`/`role="tooltip"`, and Escape closes it.
- Acronym dotted underline moved from `--ifm-color-emphasis-500` to `-700`, which clears the 3:1 threshold for non-text indicators.

## [0.4.4] - 2026-07-29

### Changed
- **"Comisiones Temáticas" renamed to "Pilares de Desarrollo" across the site.** Not a wording preference — a correction. "Comisión" names a *body of people* (a district is a comisión in that sense; the party's formal people-grouping structures are the **Frentes**, documented separately in `organismos/frentes-nacionales.md`). Using it for an *area of work* implied six standing groups each with its own membership and meetings, which a district running on ad-honorem volunteers cannot staff. In practice the Mesa de Coordinación coordinates the work, and the six areas only distribute it.
  - `docs/organismos/comisiones-tematicas/` → `docs/organismos/pilares-desarrollo/` (folder, sidebar label, and all 6 pillar pages).
  - `pilares-desarrollo/index.md` rewritten, not just relabeled: new section stating outright that a pillar is an area of work and **not** a group of people, why six separate groups aren't realistic at district scale, and where the party's actual sector groupings live (Frentes). The old "Cómo se conforma una comisión" section is gone — it described joining a group, which is no longer the model.
  - Terminology updated in 20 further files (guías, tutoriales, niveles, principios, explicación, glosario, organismos, and the Sabanilla initiative pages). Where the old prose said people "sumarse a una comisión temática," it now says they join an *initiative* within a pillar — people join initiatives, not pillars.
  - The initiative ficha's first field is now **Pilar** (was **Comisión**), in the tutorial and all three initiative pages.
  - Glossary entry replaced: "Comisión temática" → "Pilar de desarrollo," with the area-of-work-not-a-group distinction stated.
  - **Not renamed:** the national **Comisión Política** in `organismos/sanciones-disciplinarias.md` and `organismos/frentes-nacionales.md` — a statutory party organ, unrelated to district work.
- `netlify.toml`: 301 redirects from the old public `/docs/organismos/comisiones-tematicas/*` URLs to `pilares-desarrollo`, so links shared before the rename keep resolving.

## [0.4.3] - 2026-07-29

### Added
- **Sabanilla's first three real initiatives**, each as its own page under `docs/distritos/montes-de-oca/sabanilla/iniciativas/`, grouped by comisión temática in the index:
  - `iniciativas/biblioteca-ambulante.md` — mobile library at the Feria del Agricultor on weekends, to build reading habits among children of the district (Educación, Formación y Empleo). The possible daycare/cuido extension is documented as an idea under discussion, explicitly not an approved stage, since it carries legal/safety/staffing obligations the committee hasn't evaluated.
  - `iniciativas/buses-sabanilla.md` — public bus service in the district (Movilidad y Derecho a la Ciudad). Published with objetivo and alcance openly undefined: the article says outright that the context lives in one person's accumulated experience rather than public sources, and that the next step is that conversation, followed by picking a single opportunity as the focus.
  - `iniciativas/comercio-local.md` — interviews with local business owners that double as district-opinion gathering and as visibility for those businesses against larger chains (Participación y Organización Comunitaria). Names the unresolved tension between interviewing a business and publicly promoting it under the committee's name.
- `docs/tutorials/desarrollar-iniciativa-distrital.md`: new "La ficha de una iniciativa" section defining the fixed field set every initiative page fills in — comisión, responsable, objetivo, alcance, a quién afecta, por qué importa, estado/fecha, qué necesita para avanzar. This makes the existing tutorial the single definition of the initiative boilerplate (rather than adding a second article that would drift from it), and states that unanswered fields are recorded as pending, never filled with assumptions.

### Changed
- **Initiatives restructured from one flat page into a folder.** `distritos/montes-de-oca/sabanilla/iniciativas.md` becomes `iniciativas/index.md` with a `_category_.json`, plus one page per initiative. A single table row can't hold what a real initiative accumulates (interview context, per-initiative open questions), and doing the split now — with the first three real entries — avoids a URL migration later, the same reasoning behind putting canton first in the district path. Inbound links updated in `tutorials/historia-de-angelica.md`, `tutorials/desarrollar-iniciativa-distrital.md`, `organismos/comisiones-tematicas/index.md`, and the Sabanilla index.
- **All 6 comisión temática pages: footer no longer promises instance content.** Each ended with "Contenido pendiente: integrantes, plan de trabajo y próximas acciones" — but a district's members and actions are instance content, so that footer invited breaking the generic↔instance boundary. Now states that those belong to each district and links to the district index, keeping the generic↔instance separation intact.

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