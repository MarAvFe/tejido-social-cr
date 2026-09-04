import 'dotenv/config';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkAcronyms from './plugins/remark-acronyms';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aprendé sobre el FA',
  tagline: 'Organización de base para una Costa Rica más justa, equitativa e inclusiva',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // TODO: revisit `url` when a definitive domain is chosen for the real site.
  url: 'https://tejidosocialcr.netlify.app',
  baseUrl: '/',

  organizationName: 'tejido-social-cr',
  projectName: 'tejido-social',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },

  // GOOGLE_CALENDAR_API_KEY is not a secret: it's restricted by HTTP
  // referrer + API scope in Google Cloud Console, so it's safe to ship in
  // the client bundle. Set it in Netlify's build environment; for local
  // dev, copy .env.example to .env (gitignored) and fill it in. See
  // /calendar.
  customFields: {
    googleCalendarApiKey: process.env.GOOGLE_CALENDAR_API_KEY || '',
  },

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
          remarkPlugins: [remarkAcronyms],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        language: 'es',
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      // Stays true so a first-time visitor's initial theme follows their
      // OS preference (handled by Docusaurus's pre-hydration inline
      // script, independent of the toggle button). The swizzled
      // Navbar/ColorModeToggle below is what keeps the actual click
      // behavior a plain 2-state sun/moon toggle — Docusaurus's stock
      // toggle ties both behaviors to this one flag, cycling light →
      // dark → system → light... once respectPrefersColorScheme is true,
      // which is the 3rd state that was showing up.
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Aprendé sobre el FA',
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
          to: '/calendar',
          position: 'left',
          label: 'Calendario',
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
              to: '/docs/niveles',
            },
            {
              label: 'Organismos',
              to: '/docs/organismos',
            },
            {
              label: 'Distritos',
              to: '/docs/distritos',
            },
          ],
        },
        {
          title: 'Aprendé',
          items: [
            {
              label: 'Tutoriales',
              to: '/docs/tutorials',
            },
            {
              label: 'Guías Prácticas',
              to: '/docs/guias',
            },
            {
              label: 'Explicaciones',
              to: '/docs/explicacion',
            },
            {
              label: 'Recursos',
              to: '/docs/recursos',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Contacto',
              to: '/contacto',
            },
            {
              label: 'Política Editorial',
              to: '/politica-editorial',
            },
            {
              label: 'Contribuir (GitHub)',
              href: 'https://github.com/MarAvFe/tejido-social-cr/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Sitio oficial del partido',
              href: 'https://www.frenteamplio.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Frente Amplio. Contenido bajo licencia CC BY-NC-ND 4.0. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

