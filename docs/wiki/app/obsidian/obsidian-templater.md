---
title: Obsidian Templater
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

第三方模板插件，比 Obsidian 内置的 Templates 更强大，支持 JavaScript 脚本。

## 示例模板

```yaml
---
type: books
title: "[[<% tp.file.title %>]]"
cover:
author:
  - '[[<% tp.system.prompt("请输入作者")%>]]'
genre: <% tp.system.suggester(["fiction", "non-fiction"], ["fiction", "non-fiction"], true, 'genre')%>
status: <% tp.system.suggester(["to-read", "reading", "done"], ["to-read", "reading", "done"], true, 'status')%>
rating:
myRating:
summary:
date_creation: <% tp.file.creation_date("YYYY-MM-DD") %>
---
```

## 特点

- 支持 JavaScript 脚本动态生成内容
- 内置丰富的系统变量（日期、文件名、光标位置等）
- 支持用户输入提示（prompt）和下拉选择（suggester）
- 可配合 QuickAdd 实现快速创建结构化笔记

- [在 Obsidian 中构建高效笔记模板，从 Templates 到 Templater！哔哩哔哩 bilibili](https://www.bilibili.com/video/BV1c64y1W7c2/)
