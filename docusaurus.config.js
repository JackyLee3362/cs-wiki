import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkProjectLinks from './plugins/remark-project-links.mjs';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: '计算机知识库',
  tagline: '计算机基础、工具与实践笔记',
  url: 'https://wiki.jackylee.fun',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},
  markdown: {
    format: 'md',
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'warn', onBrokenMarkdownImages: 'warn'},
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [['classic', {
    docs: {
      routeBasePath: '/',
      sidebarPath: './sidebars.js',
      numberPrefixParser: false,
      remarkPlugins: [remarkProjectLinks, remarkMath],
      rehypePlugins: [rehypeKatex],
      editUrl: 'https://github.com/jackylee3362/cs-wiki/edit/main/',
    },
    blog: false,
    pages: false,
    theme: {customCss: ['./src/css/custom.css', 'katex/dist/katex.min.css']},
  }]],
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: '计算机知识库',
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', label: '文档', position: 'left'},
        {href: 'https://github.com/jackylee3362/cs-wiki', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {style: 'dark', copyright: '计算机知识库 · Built with Docusaurus'},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
