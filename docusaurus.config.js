// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CREDO',
  tagline: 'CREDO AUTH is cool',
  favicon: 'img/credo.svg',
  metadata: [
    // Open Graph metadata (WhatsApp, Facebook, LinkedIn, etc.)
    { property: 'og:title', content: 'CREDO - Reusable Auth System' },
    { property: 'og:description', content: 'CREDO AUTH is a reusable authentication system. Easily integrate secure auth into your projects.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://credo-docs.vercel.app/img/credo.svg' },
    { property: 'og:url', content: 'https://credo-docs.vercel.app' },
    { property: 'og:site_name', content: 'CREDO' },

    // Twitter Card metadata
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CREDO - Reusable Auth System' },
    { name: 'twitter:description', content: 'CREDO AUTH is a reusable authentication system. Easily integrate secure auth into your projects.' },
    { name: 'twitter:image', content: 'https://credo-docs.vercel.app/img/credo.svg' },
    { name: 'twitter:site', content: '@waynethefuture' },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://credo-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/credo.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CREDO',
        logo: {
          alt: 'CREDO Logo',
          src: 'img/credo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
            to: '/docs/intro',
          },

          {
            href: 'https://github.com/OgunwandeBukunmi/credo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/OgunwandeBukunmi',
              },
              {
                label: 'X',
                href: 'https://x.com/waynethefuture',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CREDO, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
