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
        {type: 'dropdown', label: '基础', position: 'left', items: [
          {type: 'docSidebar', sidebarId: 'basesSidebar', label: '基础知识总览'},
          {type: 'docSidebar', sidebarId: 'dataStructuresSidebar', label: '数据结构'},
          {type: 'docSidebar', sidebarId: 'computerNetworkSidebar', label: '计算机网络'},
          {type: 'docSidebar', sidebarId: 'computerOrganizationSidebar', label: '计算机组成原理'},
          {type: 'docSidebar', sidebarId: 'operatingSystemSidebar', label: '操作系统'},
        ]},
        {type: 'dropdown', label: '语言', position: 'left', items: [
          {type: 'docSidebar', sidebarId: 'langSidebar', label: '语言总览'},
          {type: 'docSidebar', sidebarId: 'pythonSidebar', label: 'Python'},
          {type: 'docSidebar', sidebarId: 'javaSidebar', label: 'Java'},
          {type: 'docSidebar', sidebarId: 'cppSidebar', label: 'C++'},
          {type: 'docSidebar', sidebarId: 'goSidebar', label: 'Go'},
          {type: 'docSidebar', sidebarId: 'javascriptSidebar', label: 'JavaScript'},
          {type: 'docSidebar', sidebarId: 'rustSidebar', label: 'Rust'},
          {type: 'docSidebar', sidebarId: 'htmlSidebar', label: 'HTML'},
          {type: 'docSidebar', sidebarId: 'cssSidebar', label: 'CSS'},
        ]},
        {type: 'docSidebar', sidebarId: 'wikiSidebar', label: 'wiki', position: 'left'},
        {type: 'docSidebar', sidebarId: 'selfHostedSidebar', label: '自部署', position: 'left'},
        {type: 'docSidebar', sidebarId: 'compareSidebar', label: '工具比较', position: 'left'},
        {type: 'docSidebar', sidebarId: 'solutionSidebar', label: '解决方案', position: 'left'},
        {type: 'docSidebar', sidebarId: 'workSidebar', label: '工作', position: 'left'},
      ],
    },
    footer: {style: 'dark', copyright: '计算机知识库 · Built with Docusaurus'},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
