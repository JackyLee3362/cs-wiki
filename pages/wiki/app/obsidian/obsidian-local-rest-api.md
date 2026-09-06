---
title: Obsidian Local REST API
date: 2024-10-17
draft: false
author: JackyLee
tags:
  - 笔记工具
  - Obsidian
  - 插件
categories:
  - 编辑器工具
comment: true
---

第三方插件，为 Obsidian 提供本地 REST API 接口，方便外部工具与笔记库交互。

## 添加到每日笔记

```http
POST /periodic/daily/ HTTP/1.1

[^{{date "H:m"}}]: [{{page.title}}]({{page.url}})
```

## 创建快照

```http
PUT /vault/project/{{filename page.title}}.md HTTP/1.1

---
page-title: {{json page.title}}
url: {{page.url}}
create_time: "{{date}}"
tags:
  - app/gui
summary:
status: todo
priority: 0
summary: {{json page.title}}
---
{{#if page.selectedText}}

{{quote page.selectedText}}

---

{{/if}}{{page.content}}
```

## 特点

- 通过 HTTP 接口读写笔记库内容
- 支持与 Web Clipper、快捷指令等外部工具集成
- 可配合浏览器扩展实现一键剪藏
- 提供安全的本地认证机制

- [Local Rest API for Obsidian: Interactive API Documentation](https://coddingtonbear.github.io/obsidian-local-rest-api/)
