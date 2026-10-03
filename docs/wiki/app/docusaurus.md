---
title: docusaurus
description:
date: 2026-08-19
update_date:
draft: true
author: JackyLee
tags:
  - wiki
  - app/server
categories:
comment: true
---

Docusaurus 将 Markdown 文档生成静态网站；`classic` 模板提供文档、导航和主题。

```sh
npx create-docusaurus@3.10.2 my-wiki classic --javascript --skip-install
cd my-wiki
npm install
npm start
npm run build
```

接入已有笔记时，先在临时目录生成模板，只添加所需站点文件，避免覆盖原文。`docs/` 保存文档，`sidebars.js` 可按目录自动生成导航；根路径文档设 `routeBasePath: '/'`，首页设 `slug: /`，不要同时保留占用 `/` 的模板页面。

已有普通 Markdown 可设 `markdown.format: 'md'`；空 YAML 字段解析为 `null` 时，使用 `markdown.parseFrontMatter` 过滤空值，避免类型校验失败。`draft: true` 仅在开发模式显示，生产构建排除草稿。

版本由 lockfile 固定，后续使用 `npm ci`。本地构建通过不代表已发布；部署前将配置中的 `url` 改为实际域名。

## 参考资料

- [官网与安装文档](https://docusaurus.io/docs/installation)
- [facebook/docusaurus: Easy to maintain open source documentation websites.](https://github.com/facebook/docusaurus) #todo
