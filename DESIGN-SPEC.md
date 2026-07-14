# DESIGN-SPEC: Two-app restructure (frozen demo + new Frente Amplio app), merged single Netlify deploy

> Audience: a coder agent who will implement this literally, with zero further design decisions.
> Scope: restructure the repo into two independent Docusaurus 3.9.2 apps that are joined only at deploy time. The new "real" app (Frente Amplio) serves at `/`; the current app (renamed to "demo") serves at `/demo/`. No implementation is performed by this spec; it defines exactly what to create/edit.

---

## Problem

The repo currently hosts one Docusaurus app (`tejido-social-web/`) with generic, cause-neutral "Tejido Social" content, plus a personal blog post. The owner wants a **new, near-blank Docusaurus site for the real organization ("Frente Amplio", yellow/black branding) served at the site root**, while **preserving the existing app as a frozen demo served under `/demo/`** on the same domain. The two must be fully separate source trees, joined only by the Netlify build/publish step.

---

## Approach (and why)

### Repo layout — chosen: rename current app to a sibling `-demo` folder; new app takes the canonical name

Final top-level layout:

```
/                              (repo root)
  netlify.toml                 (NEW)
  scripts/netlify-build.sh     (NEW)
  tejido-social-web/           (NEW — the real Frente Amplio app; served at /)
  tejido-social-web-demo/      (RENAMED from current tejido-social-web/; frozen; served at /demo/)
  ...(existing repo-root files unchanged: CHANGELOG, CONTRIBUTING, LICENSE, .github/, etc.)
```

**Why this layout (sibling folders, not `apps/`):** it is the smallest change that satisfies the constraint. An `apps/`/`sites/` parent would move *both* trees and rewrite every path in Netlify + tooling for no functional gain. Sibling folders keep each app self-contained with its own `package.json`, `node_modules`, and `.gitignore`, exactly as today.

**Why rename the *demo* (not the new app) to the `-demo` suffix:** the new real app is the primary, long-lived site and deserves the canonical `tejido-social-web/` name; the demo is the thing being demoted. The rename is a whole-folder move, so git history for the demo content is preserved regardless of `git mv` vs `mv`.

**`mv` vs `git mv`:** use a plain filesystem move (`mv tejido-social-web tejido-social-web-demo`). This task performs **no `git add` and no commit**, so `git mv` (which only stages the rename) and plain `mv` produce an identical working tree. Git detects the rename as a rename at commit time based on content similarity either way. Use plain `mv`.

### New real app — chosen: copy the demo app and strip it, do not `create-docusaurus`

Copy `tejido-social-web-demo/` into a fresh `tejido-social-web/`, then delete content and rewrite config. This guarantees identical Docusaurus version (3.9.2), identical deps, identical TS config, identical swizzle-free component setup, and identical build behavior — no re-derivation. A fresh `create-docusaurus` scaffold would risk version/dep drift and reintroduce boilerplate we'd have to strip anyway.

### Netlify — chosen: one publish dir, produced by a root shell script

A standalone `scripts/netlify-build.sh` builds the real app, builds the demo app, and copies the demo build into `<real-build>/demo/`. Netlify publishes the real app's `build/` dir (which now contains `demo/`). A shell script (rather than a root `package.json` build script) is chosen because the orchestration is filesystem plumbing (two `cd`s + a copy), which is clearer and more debuggable as a shell script than as a chain of npm `--prefix` invocations, and it avoids introducing a root `package.json` / lockfile that would imply a third npm project.

### Demo `baseUrl` — chosen: one-time edit to `/demo/` (a deliberate, justified exception to "frozen")

Docusaurus bakes `baseUrl` into asset URLs (`/assets/...`) and internal absolute links **at build time**. A build made with `baseUrl: '/'` cannot be correctly served from `/demo/` — CSS/JS/links would 404. There is no Netlify-side rewrite that fixes baked-in absolute asset paths cleanly. Therefore the demo app's `docusaurus.config.ts` **must** set `baseUrl: '/demo/'`. This is pure deploy plumbing: it changes no content, branding, or structure; it only makes links resolve under the new path. It is the sole content-of-config edit permitted to the "frozen" demo (plus the optional announcement bar below). The demo's `url: 'https://tejidosocial.org'` stays unchanged (domain is unchanged).

### "Frozen" demo — rebuild from source each deploy, do NOT check in a static snapshot

"Frozen" means: the demo source stops receiving feature work, content edits, and dependency bumps. It does **not** mean freezing a prebuilt artifact into git. The Netlify pipeline rebuilds the demo from source every deploy. Rationale: one uniform deploy pipeline; no separate "regenerate the snapshot" process; no committing generated `build/` output (which violates the existing `.gitignore` and normal practice); trivial to un-freeze later (just edit source again). Build cost is negligible for this doc count.

### Demo "not official" announcement bar — build it now (config-only, in the same spirit as the baseUrl edit)

The owner explicitly named content-confusion risk. A Docusaurus `themeConfig.announcementBar` is a config-only, non-content, non-branding change, low-risk and easily reversible — consistent with the deploy-only edits already being made to the demo. It is included in this pass (exact config below).

---

## Plan — exact changes

### Step 0 — Rename the current app

```
mv /home/mavila/tejido-social-cr/tejido-social-web /home/mavila/tejido-social-cr/tejido-social-web-demo
```

After this, `tejido-social-web-demo/` is the frozen demo. Do not touch any file inside it except the two edits in Step 1.

### Step 1 — Two edits inside the demo app (`tejido-social-web-demo/docusaurus.config.ts`)

Edit A — change `baseUrl`:

- From: `baseUrl: '/',`
- To: `baseUrl: '/demo/',`

Edit B — add an `announcementBar` to `themeConfig`. Insert this object as the first property inside `themeConfig` (immediately after `image: 'img/docusaurus-social-card.jpg',` and before `colorMode:`):

```ts
announcementBar: {
  id: 'demo_not_official',
  content:
    'Este es un sitio de demostración del marco Tejido Social. No es contenido oficial de Frente Amplio.',
  backgroundColor: '#2e8555',
  textColor: '#ffffff',
  isCloseable: true,
},
```

Make **no other changes** to the demo app. In particular do NOT fix the demo's `i18n` locale, `editUrl`, or any content — the demo keeps its existing state including known bugs.

### Step 2 — Create the new real app by copying the demo, then stripping

2a. Copy the entire demo tree to the new canonical name, **excluding build artifacts and node_modules**:

```
mkdir -p /home/mavila/tejido-social-cr/tejido-social-web
```
Copy every tracked file/folder from `tejido-social-web-demo/` into `tejido-social-web/` EXCEPT: `node_modules/`, `build/`, `.docusaurus/`, `.cache-loader/`. (Copy `.gitignore`, `package.json`, `package-lock.json` if present, `tsconfig.json`, `sidebars.ts`, `src/`, `static/`, `docs/`, `blog/`, `docusaurus.config.ts`. `node_modules` will be reinstalled by Netlify via `npm ci`; do not copy it.)

> Note: after copying, the new app's `docusaurus.config.ts` is still the demo's edited-in-Step-1 version. Step 4 fully rewrites it, overriding both Step-1 edits for the real app (real app has `baseUrl: '/'` and no announcement bar).

2b. **Delete the copied blog entirely** (real app has no blog):

```
rm -rf /home/mavila/tejido-social-cr/tejido-social-web/blog
```

2c. **Delete all copied docs** (they will be replaced with stubs in Step 5):

```
rm -rf /home/mavila/tejido-social-cr/tejido-social-web/docs
```

2d. **Delete the copied demo-specific static images** that will be replaced; keep the folder:

Delete from `tejido-social-web/static/img/`: `docusaurus.png`, `undraw_docusaurus_mountain.svg`, `undraw_docusaurus_react.svg`, `undraw_docusaurus_tree.svg`. Replace `logo.svg`, `favicon.ico`, `docusaurus-social-card.jpg` per Step 6 (placeholders). Keep the `static/img/` directory.

2e. **Delete `src/pages/markdown-page.md`** (leftover boilerplate page):

```
rm -f /home/mavila/tejido-social-cr/tejido-social-web/src/pages/markdown-page.md
```

### Step 3 — Update the new app's `package.json`

In `tejido-social-web/package.json`, change only the `name` field:

- From: `"name": "tejido-social-web",`
- To: `"name": "frente-amplio-web",`

Leave all dependencies, devDependencies, scripts, and `engines` byte-identical to the demo's. Also, if a `package-lock.json` was copied, update its top-level `"name"` fields to `frente-amplio-web` for consistency (both the root `"name"` and the `"packages"[""].name`), OR simply delete the copied `package-lock.json` and let `npm ci`/`npm install` regenerate it. Chosen: **delete the copied `package-lock.json` in the new app** and let Netlify's `npm install` regenerate it (avoids hand-editing lockfile internals). Do NOT delete the demo's lockfile.

### Step 4 — Rewrite `tejido-social-web/docusaurus.config.ts` (real app)

Replace the entire file with the following:

```ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Frente Amplio',
  tagline: 'Organización de base para una Costa Rica más justa, equitativa e inclusiva',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // TODO: revisit `url` when a definitive domain is chosen for the real site.
  url: 'https://tejidosocial.org',
  baseUrl: '/',

  organizationName: 'tejido-social-cr',
  projectName: 'tejido-social',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Frente Amplio',
      logo: {
        alt: 'Frente Amplio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/MarAvFe/tejido-social-cr',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Principios',
              to: '/docs/principios',
            },
            {
              label: 'Niveles',
              to: '/docs/niveles/observador',
            },
          ],
        },
        {
          title: 'Aprende',
          items: [
            {
              label: 'Guías Prácticas',
              to: '/docs/guias',
            },
            {
              label: 'Recursos',
              to: '/docs/recursos',
            },
            {
              label: 'Explicaciones',
              to: '/docs/explicacion/historia-tejido-social',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/MarAvFe/tejido-social-cr/issues',
            },
            {
              label: 'Contribuir',
              href: 'https://github.com/MarAvFe/tejido-social-cr/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Licencia (CC0)',
              href: 'https://creativecommons.org/publicdomain/zero/1.0/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Frente Amplio. Dominio Público (CC0). Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

Notes baked into the above (do not deviate):
- `blog: false` disables the blog plugin (confirmed valid preset-classic 3.x syntax); no `/blog` navbar item, no "Actualizaciones", no blog `editUrl`.
- `editUrl` omitted from `docs` → Docusaurus renders no "edit this page" link.
- `i18n` fixed to Spanish.
- **No link to `/demo/` anywhere** (demo is link-only discoverable; owner instruction).
- Footer "Aprende" links point to the stub index docs `/docs/guias` and `/docs/recursos` (these exist as `guias/index.md` and `recursos/index.md` stubs) and to `explicacion/historia-tejido-social` (which exists as a stub). All footer `to:` targets correspond to stub docs created in Step 5, so `onBrokenLinks: 'throw'` will pass.

`sidebars.ts` in the new app stays byte-identical to the demo's (autogenerated pattern). Do not change it.

### Step 5 — Create the real app's stub docs

Create the following files under `tejido-social-web/docs/`. **The folder structure, filenames, and frontmatter `title`/H1 must mirror the demo exactly** (per owner instruction: same filenames/folders/titles, only the body becomes a placeholder).

**Frontmatter rules (match the demo's exact patterns observed per file):**
- Most demo docs have **no YAML frontmatter** — their title is the first-line `# H1`. Mirror that: stub = just the H1 + placeholder body, no frontmatter.
- `docs/intro.md` in the demo has frontmatter `sidebar_position: 1`. Keep it.
- The three `index.md` files (`guias/`, `organismos/`, `recursos/`) have frontmatter `sidebar_position: 1` + `sidebar_label: "..."`. Keep those exact frontmatter blocks.

**Stub body template (uniform):** for every file, the body is the H1 (matching the demo's exact H1 text) followed by exactly one placeholder line:

```
_Contenido pendiente._
```

So a no-frontmatter stub is literally:

```md
# <exact demo H1 text>

_Contenido pendiente._
```

A stub that had frontmatter is:

```md
---
<exact demo frontmatter lines>
---

# <exact demo H1 text>

_Contenido pendiente._
```

Do **not** include any internal markdown links, tables, or cross-references in any stub body (keeps `onBrokenLinks: 'throw'` safe).

**Exact file list with exact frontmatter + H1 to reproduce:**

Top-level:
- `docs/intro.md` — frontmatter `sidebar_position: 1`; H1: `# Introducción a Tejido Social`
- `docs/principios.md` — no frontmatter; H1: `# Principios del Movimiento`

`docs/explicacion/` (no frontmatter, no index):
- `economia-solidaria.md` — H1: `# Economía Solidaria`
- `historia-tejido-social.md` — H1: `# Historia de Tejido Social`
- `modelos-de-referencia.md` — H1: `# Modelos de Referencia`
- `por-que-descentralizar.md` — H1: `# Por Qué Descentralizar`
- `por-que-principios-escritos.md` — H1: `# Por Qué Principios Escritos`

`docs/guias/`:
- `index.md` — frontmatter:
  ```
  sidebar_position: 1
  sidebar_label: "Guías Prácticas"
  ```
  H1: `# Guías Prácticas`
- `como-hablar-con-medios.md` — H1: `# Cómo Hablar con los Medios`
- `como-organizar-protesta.md` — H1: `# Cómo Organizar una Protesta`
- `derechos-legales.md` — H1: `# Derechos Legales`
- `manejo-redes-sociales.md` — H1: `# Manejo de Redes Sociales`
- `prevencion-agotamiento.md` — H1: `# Prevención del Agotamiento`
- `seguridad-en-protestas.md` — H1: `# Seguridad en Protestas`

`docs/niveles/` (no frontmatter, no index):
- `coordinador.md` — H1: `# Coordinador - Nivel 3`
- `formador.md` — H1: `# Formador - Nivel 4`
- `miembro-activo.md` — H1: `# Miembro Activo - Nivel 2`
- `observador.md` — H1: `# Observador — Nivel 0`  (note: em dash `—`, matching demo exactly)
- `participante.md` — H1: `# Participante - Nivel 1`

`docs/organismos/`:
- `index.md` — frontmatter:
  ```
  sidebar_position: 1
  sidebar_label: "Organismos"
  ```
  H1: `# Organismos`
- `accion-callejera.md` — H1: `# Acción Callejera`
- `apoyo-legal.md` — H1: `# Apoyo Legal`
- `bienestar.md` — H1: `# Bienestar`
- `economia-solidaria.md` — H1: `# Economía Solidaria`
- `educacion.md` — H1: `# Educación`
- `medios-comunicacion.md` — H1: `# Medios y Comunicación`
- `presion-politica.md` — H1: `# Presión Política`
- `seguridad-cuidado.md` — H1: `# Seguridad y Cuidado`

`docs/recursos/`:
- `index.md` — frontmatter:
  ```
  sidebar_position: 1
  sidebar_label: "Recursos"
  ```
  H1: `# Recursos`
- `canticos.md` — H1: `# Cánticos`
- `glosario.md` — H1: `# Glosario`
- `plantillas-pancartas.md` — H1: `# Plantillas de Pancartas`
- `preguntas-frecuentes.md` — H1: `# Preguntas Frecuentes`

`docs/tutorials/` (no frontmatter, no index):
- `primera-accion-digital.md` — H1: `# Tu Primera Acción Digital`
- `primera-protesta.md` — H1: `# La Primera Protesta`
- `unirse-a-un-organismo.md` — H1: `# Cómo Unirse a un Organismo`

Total: 36 stub docs (2 top-level + 5 explicacion + 7 guias incl. index + 5 niveles + 9 organismos incl. index + 5 recursos incl. index + 3 tutorials).

> Forward guidance (NOT implemented now): when real content is later written, avoid hardcoding "Sabanilla"; write generically to "tu distrito" / "el distrito" so the framework is adoptable by any district. Organize by topic/knowledge-type (the current flat category structure), not by district. No structural change is needed now.

### Step 6 — Real app branding assets (`tejido-social-web/static/img/`)

Create placeholder assets at these exact paths (names must match `docusaurus.config.ts` references):

6a. `tejido-social-web/static/img/logo.svg` — replace with this placeholder (yellow background, black "FA"):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="Frente Amplio">
  <rect width="200" height="200" rx="24" fill="#ffde2d"/>
  <text x="100" y="128" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="700" text-anchor="middle" fill="#000000">FA</text>
</svg>
```

6b. `tejido-social-web/static/img/favicon.ico` — a favicon is required by config. Simplest reliable placeholder: **copy the demo's existing `favicon.ico`** into the new app (`cp tejido-social-web-demo/static/img/favicon.ico tejido-social-web/static/img/favicon.ico`). It is a generic icon; branding refinement is a fast-follow. (Do not attempt to generate a new `.ico` by hand.)

6c. `tejido-social-web/static/img/docusaurus-social-card.jpg` — referenced by `themeConfig.image`. **Copy the demo's existing file** as a placeholder (`cp tejido-social-web-demo/static/img/docusaurus-social-card.jpg tejido-social-web/static/img/docusaurus-social-card.jpg`). Social-card redesign is a fast-follow.

> Owner will later drop final-brand versions at these same three paths; no config change will be needed when they do.

### Step 7 — Real app branding CSS (`tejido-social-web/src/css/custom.css`)

Replace the entire file with the following. Primary brand color is yellow `#ffde2d`; derived shades computed by scaling lightness. Because pure yellow gives poor contrast on white for link/button text, dark mode uses the yellow family directly while light mode keeps yellow as primary but relies on Infima's automatic contrast for button text. Use these exact values:

```css
/**
 * Global styles. Infima variable overrides for Frente Amplio branding.
 * Brand: yellow #ffde2d, black #000000.
 */

:root {
  --ifm-color-primary: #ffde2d;
  --ifm-color-primary-dark: #ffd804;
  --ifm-color-primary-darker: #f5cd00;
  --ifm-color-primary-darkest: #cba900;
  --ifm-color-primary-light: #ffe456;
  --ifm-color-primary-lighter: #ffe76a;
  --ifm-color-primary-lightest: #fff0a3;

  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);

  /* Yellow-on-white needs dark text on primary buttons/badges */
  --ifm-color-primary-contrast-foreground: #000000;
  --ifm-button-color: #000000;
  --ifm-heading-color: #000000;
}

/* Dark mode: black background, yellow accents */
[data-theme='dark'] {
  --ifm-color-primary: #ffde2d;
  --ifm-color-primary-dark: #ffd804;
  --ifm-color-primary-darker: #f5cd00;
  --ifm-color-primary-darkest: #cba900;
  --ifm-color-primary-light: #ffe456;
  --ifm-color-primary-lighter: #ffe76a;
  --ifm-color-primary-lightest: #fff0a3;

  --ifm-background-color: #000000;
  --ifm-background-surface-color: #121212;
  --docusaurus-highlighted-code-line-bg: rgba(255, 222, 45, 0.15);
}
```

### Step 8 — Real app homepage (`tejido-social-web/src/pages/index.tsx` + HomepageFeatures)

8a. Replace `tejido-social-web/src/pages/index.tsx` entirely with:

```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{fontSize: '1.15rem', fontStyle: 'italic', maxWidth: '760px', margin: '1.5rem auto 2rem'}}>
          «Si compartes nuestros ideales y sueñas con una Costa Rica más justa, equitativa e inclusiva, ¡este es el momento de dar el paso!»
        </p>
        <p style={{fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 2rem'}}>
          Diste el paso. Empecemos aquí para aprender cómo organizarnos juntos.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Comenzar aquí
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Organización de base`}
      description="Documentación, guías y recursos para la organización de base de Frente Amplio.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
```

Canonical "start here" entry doc: **`docs/intro.md`** → route `/docs/intro`. This is the single primary CTA.

8b. Keep `tejido-social-web/src/pages/index.module.css` byte-identical to the demo's (it was copied; leave it).

8c. Replace `tejido-social-web/src/components/HomepageFeatures/index.tsx` entirely with a 3-feature version (generic, non-fabricated copy):

```tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Aprende',
    emoji: '📚',
    description: (
      <>
        Documentación clara sobre cómo funcionamos, nuestros principios y las
        formas de participar. Empieza desde cero, a tu ritmo.
      </>
    ),
  },
  {
    title: 'Participa',
    emoji: '🤝',
    description: (
      <>
        Encuentra tu lugar según tu tiempo e intereses. Cada persona aporta, sin
        importar cuánto pueda dedicar.
      </>
    ),
  },
  {
    title: 'Organiza',
    emoji: '⚙️',
    description: (
      <>
        Guías y recursos prácticos para llevar los ideales a la acción concreta
        en tu comunidad.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

8d. Keep `tejido-social-web/src/components/HomepageFeatures/styles.module.css` byte-identical to the demo's (copied; leave it).

### Step 9 — Netlify orchestration script (`scripts/netlify-build.sh`) at repo root

Create `/home/mavila/tejido-social-cr/scripts/netlify-build.sh` with exactly:

```bash
#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REAL_APP="$REPO_ROOT/tejido-social-web"
DEMO_APP="$REPO_ROOT/tejido-social-web-demo"

echo "==> Building real app (Frente Amplio)"
cd "$REAL_APP"
npm ci || npm install
npm run build

echo "==> Building demo app (served at /demo/)"
cd "$DEMO_APP"
npm ci || npm install
npm run build

echo "==> Merging demo build into real build at /demo/"
rm -rf "$REAL_APP/build/demo"
mkdir -p "$REAL_APP/build/demo"
cp -R "$DEMO_APP/build/." "$REAL_APP/build/demo/"

echo "==> Done. Publish dir: $REAL_APP/build"
```

Make it executable (`chmod +x scripts/netlify-build.sh`). The `npm ci || npm install` fallback handles the real app whose lockfile was regenerated/removed.

### Step 10 — `netlify.toml` at repo root

Create `/home/mavila/tejido-social-cr/netlify.toml` with exactly:

```toml
[build]
  command = "bash scripts/netlify-build.sh"
  publish = "tejido-social-web/build"

[build.environment]
  NODE_VERSION = "20"
```

Notes:
- `publish` is the real app's build dir, which now contains `demo/`.
- `NODE_VERSION = "20"` satisfies both apps' `engines.node >= 20` and gives a deterministic Netlify build (Netlify's default may differ). Node 20 is sufficient for Docusaurus 3.9.2; do not pin higher.
- This repo currently has no `netlify.toml`; adding one **overrides the Netlify UI build settings**. After merge, the owner should confirm the Netlify dashboard's UI build command/publish dir no longer conflict (netlify.toml wins, but flag it — see Risks).

### Step 11 — Root `.gitignore` check

The demo app's `.gitignore` lives inside its folder and was copied into the new app; both continue to ignore `build/`, `.docusaurus/`, `node_modules`, etc. No new root `.gitignore` is required. Do NOT commit any `build/` output. (No commit happens in this task regardless.)

---

## Fast-follow ideas (explicitly NOT built now)

- Final Frente Amplio brand assets (real `logo.svg`, `favicon.ico`, social card) dropped at the three `static/img/` paths.
- Member-tracking / survey-following feature (surfaced by an under-followed member survey effort) — out of scope.
- A "news/updates" section for the real app — explicitly out of scope.
- Taxonomy/hierarchy for organizational scope (distrital → cantonal → provincial → nacional) — deferred.
- A generic "talleres" (workshops) content area under recursos/guias — only gestured at; not created beyond the mirrored categories.
- Choosing/wiring a definitive production domain for the real app (currently reuses `tejidosocial.org`); revisit `url` in `docusaurus.config.ts` then.

---

## Implementation checklist (ordered)

1. `mv tejido-social-web/ → tejido-social-web-demo/` (plain filesystem move).
2. In `tejido-social-web-demo/docusaurus.config.ts`: set `baseUrl: '/demo/'`; add the `announcementBar` block to `themeConfig` (Step 1). No other demo edits.
3. Copy demo tree → new `tejido-social-web/`, excluding `node_modules/ build/ .docusaurus/ .cache-loader/`.
4. In new app: delete `blog/`, delete `docs/`, delete boilerplate static images (keep `logo.svg`/`favicon.ico`/`social-card.jpg` for now — they're replaced in Step 6/copied), delete `src/pages/markdown-page.md`, delete copied `package-lock.json`.
5. Set new app `package.json` `name` → `frente-amplio-web`.
6. Overwrite new app `docusaurus.config.ts` with the Step 4 content.
7. Create all 36 stub docs under new `tejido-social-web/docs/` per Step 5 (exact folders, filenames, frontmatter, H1s; body = `# H1` + `_Contenido pendiente._`).
8. Replace new app `static/img/logo.svg` with the placeholder SVG; copy demo `favicon.ico` and `docusaurus-social-card.jpg` into new app.
9. Overwrite new app `src/css/custom.css` with the Step 7 content.
10. Overwrite new app `src/pages/index.tsx` and `src/components/HomepageFeatures/index.tsx` per Step 8 (leave both `.module.css` files as copied).
11. Create `scripts/netlify-build.sh` (Step 9), `chmod +x`.
12. Create `netlify.toml` (Step 10).
13. Do NOT run `git add`/commit; do NOT commit `build/` output.

---

## Validation checklist (for a separate validator agent)

**Demo app (`tejido-social-web-demo/`) — frozen except two edits:**
- Every file byte-identical to pre-rename `tejido-social-web/` EXCEPT `docusaurus.config.ts`, which differs ONLY by: `baseUrl: '/demo/'` and the added `announcementBar` block. No content/branding/structure changes.
- `cd tejido-social-web-demo && npm ci && npm run build` succeeds; output `build/index.html` references assets under `/demo/` paths.

**Real app (`tejido-social-web/`):**
- `package.json` `name` is `frente-amplio-web`; deps/devDeps/scripts/engines identical to demo.
- `docusaurus.config.ts`: `title` "Frente Amplio", `i18n` es/[es], `blog: false`, no `editUrl` in `docs`, `baseUrl: '/'`, no `/demo/` link anywhere, no `/blog` navbar item.
- `docs/` contains exactly the 36 stub files listed in Step 5, each with the correct H1/frontmatter and a `_Contenido pendiente._` body and no internal markdown links.
- No `blog/` folder; no `src/pages/markdown-page.md`.
- `static/img/` contains `logo.svg` (the FA placeholder), `favicon.ico`, `docusaurus-social-card.jpg`, and none of the four `undraw_*`/`docusaurus.png` boilerplate images.
- `src/css/custom.css` matches Step 7 (yellow primary vars, dark-mode black background).
- Homepage renders the quote CTA to `/docs/intro`; HomepageFeatures has 3 items (Aprende/Participa/Organiza).
- `cd tejido-social-web && npm install && npm run build` succeeds with `onBrokenLinks: 'throw'` (no broken links → footer/homepage targets all resolve to existing stub docs).

**Deploy plumbing:**
- `netlify.toml` at repo root: `command = "bash scripts/netlify-build.sh"`, `publish = "tejido-social-web/build"`, `NODE_VERSION = "20"`.
- `scripts/netlify-build.sh` exists, is executable, builds both apps and copies demo build into `tejido-social-web/build/demo/`.
- After running the script locally (optional full validation): `tejido-social-web/build/index.html` is the Frente Amplio homepage; `tejido-social-web/build/demo/index.html` is the demo homepage; demo assets resolve under `/demo/`.
- No `build/` directory is staged/committed.

---

## Risks / open questions

- **Netlify UI vs `netlify.toml` precedence:** adding `netlify.toml` overrides the current dashboard build settings. Confirm the owner is OK with build config moving into the repo (recommended). If the dashboard has an explicit "base directory" set to `tejido-social-web`, it must be cleared to empty (repo root) or the root script/paths won't resolve — flag for the owner to check in Netlify UI.
- **`url` placeholder:** real app reuses `https://tejidosocial.org`; correct only because it deploys there today. Revisit when a real domain is chosen.
- **Yellow contrast/accessibility:** `#ffde2d` as primary can yield low-contrast link/button text on white in light mode. The CSS sets dark button/heading foreground, but a full a11y pass on the real brand palette is a fast-follow.
- **Demo `announcementBar` wording:** proposed copy names Tejido Social as a demo of the framework and disclaims Frente Amplio officialness; confirm wording is acceptable before shipping.
- **Build time:** two Docusaurus builds per deploy; negligible at current doc counts but will grow with real content.
