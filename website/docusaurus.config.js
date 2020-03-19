module.exports = {
  title: 'React NodeGui Testing Library',
  tagline:
    'Simple React NodeGui testing utilities that encourage good testing practices.',
  url: 'https://fnky.github.io',
  baseUrl: '/react-nodegui-testing-library/',
  projectName: 'react-nodegui-testing-library',
  organizationName: 'fnky',
  favicon: 'img/butterfly.png',
  themeConfig: {
    navbar: {
      title: 'React NodeGui Testing Library',
      logo: {
        alt: 'React NodeGui Testing Library',
        src: 'img/butterfly.png',
      },
      links: [
        { to: 'docs/intro', label: 'Docs', position: 'right' },
        {
          href: 'https://github.com/fnky/react-nodegui-testing-library',
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
          items: [{ to: 'docs/intro', label: 'Getting Started' }],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href:
                'https://stackoverflow.com/questions/tagged/react-nodegui-testing-library',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/fnky/react-nodegui-testing-library',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} fnky.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
