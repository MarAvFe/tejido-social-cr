import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aprende sobre el FA',
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
      title: 'Aprende sobre el FA',
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
              to: '/docs/niveles',
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
              to: '/docs/explicacion/por-que-comites-de-base',
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
