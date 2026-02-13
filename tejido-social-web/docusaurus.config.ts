import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tejido Social',
  tagline: 'Un marco abierto para la organización comunitaria descentralizada',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tejidosocial.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tejido-social-cr', // Usually your GitHub org/user name.
  projectName: 'tejido-social', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Tejido Social',
      logo: {
        alt: 'Tejido Social Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/blog', label: 'Actualizaciones', position: 'left'},
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
              label: 'Tutoriales',
              to: '/docs/tutorials/primera-protesta',
            },
            {
              label: 'Guías Prácticas',
              to: '/docs/guias/como-organizar-protesta',
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
      copyright: `Copyright © ${new Date().getFullYear()} Tejido Social. Dominio Público (CC0). Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
