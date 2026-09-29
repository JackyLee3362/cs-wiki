import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkProjectLinks from './plugins/remark-project-links.mjs';
import parseFrontMatter from './plugins/parse-front-matter.mjs';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: '计算机知识库',
  tagline: '计算机基础、工具与实践笔记',
  url: 'https://wiki.jackylee.top',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},
  markdown: {
    parseFrontMatter,
    format: 'md',
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'warn', onBrokenMarkdownImages: 'warn'},
  },
  themes: [
    '@docusaurus/theme-mermaid',
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true,
      language: ['en', 'zh'],
      docsRouteBasePath: '/',
      indexBlog: false,
      indexPages: true,
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
      searchBarShortcut: false,
    }],
  ],
  presets: [['classic', {
    docs: {
      routeBasePath: '/',
      sidebarPath: './sidebars.js',
      numberPrefixParser: false,
      beforeDefaultRemarkPlugins: [remarkProjectLinks],
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      editUrl: 'https://github.com/jackylee3362/cs-wiki/edit/main/',
    },
    blog: false,
    pages: {},
    theme: {customCss: ['./src/css/custom.css', './node_modules/katex/dist/katex.min.css']},
  }]],
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: '计算机知识库',
      items: [
        {to: '/', label: '首页', position: 'left', activeBaseRegex: '^/$'},
        {type: 'docSidebar', sidebarId: 'basesSidebar', label: '基础', position: 'left'},
        {type: 'docSidebar', sidebarId: 'wikiSidebar', label: 'wiki', position: 'left'},
        {type: 'docSidebar', sidebarId: 'articlesSidebar', label: '文章', position: 'left'},
      ],
    },
    footer: {style: 'dark', copyright: '计算机知识库 · Built with Docusaurus'},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
