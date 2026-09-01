---
title: obsidian
date: 2024-09-26
update_time:
  - 2025-12-13
draft: true
author: JackyLee
tags:
  - app/gui
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 介绍

在无意中发现 obsidian 经过 2 年的更新，和我之前认识的完全不一样了，和 vscode 完全不一样。

两个软件的定位是有差异的，obsidian 是笔记软件，而 vscode 是 IDE。

之前一直因为移动端不能同步 vscode 仓库而困扰，现在 obsidian 在这方面完美解决了我的问题。

于是准备看看 obsidian 能不能解决我其他方面的诉求。

## 需求

### 移动端同步

- [x] 使用 dropbox/坚果云 + remote sync 插件 ✅ 2024-09-26

### 想法能随时添加

- [x] 可以使用 Templater 和 QuickAdd 插件解决 ✅ 2024-09-26

### 文章数据库

- [x] 使用 markdown 的 yaml 管理 + dataview 插件 ✅ 2024-09-26

### ~~代码片段管理~~

原先的解决方案是使用 masscode 这个软件，但是问题是，这样又多一个软件，多了学习成本；
是否可以通过插件解决？

暂时想到的方法是规定 markdown 的文章结构，然后使用搜索方法，然后复制

```dataview
TABLE WITHOUT ID en as "英文", cn as "中文"
FROM csv("db/weekend.csv")
limit 4
```

```dataview
LIST
```

语法搞定了，然后就是在移动端如何方便地查看

## vim 使用

obsidian vimrc 配置 [.obsidian.vimrc](https://gist.github.com/kxxoling/dcc1c3a897e6735989f32b55ef069136)

## 内置功能

搜索功能

```query
embed foo search
```

## 参考文献

- [ ] [usememos/memos: An open-source, lightweight note-taking solution. The pain-less way to create your meaningful notes.](https://github.com/usememos/memos)➕2023-09-27 01:30:33
  - 开源自己部署的日记
- [ ] [Obsidian 达人成长之路 2：使用终极工具 Dataview 释放笔记库的潜力 · JavaScript API - 掘金](https://juejin.cn/post/7372768355777839104)➕2024-09-27 01:45:36
- [ ] [Obs137 ｜用 Dataviewjs 讀取 CSV 資料以繪製統計圖表 – 簡睿隨筆](https://jdev.tw/blog/8190/obs137%EF%BD%9Cload-csv-by-dataview-integrates-charts)➕2024-09-27 02:05:16

---

## 官方插件 WebClipper

## 第三方插件 Templater

> 2024-10-17

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

## Local Rest API

> 2024-10-17

### 添加到每日笔记

```http
POST /periodic/daily/ HTTP/1.1

[^{{date "H:m"}}]: [{{page.title}}]({{page.url}})
```

### 创建快照

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

- [Local Rest API for Obsidian: Interactive API Documentation](https://coddingtonbear.github.io/obsidian-local-rest-api/)➕2024-10-18 00:43:18

## 第三方插件 DataView

> 2024-10-08

```dataview
list
from #obsidian
```

```dataview
LIST
FROM "res"
WHERE !completed
```

## 第三方同步插件 Remote Save

> 2024-10-18

## 第三方插件 Buttons Maker

> 2024-10-24

### 命令按钮

```button
name 添加每日待办
type command
action QuickAdd: 添加每日待办
```

^button-2vga

### 链接按钮

```button
name 打开百度
type link
action https://baidu.com
```

^button-mi60

### 模板按钮

```button
name 111
type line template
action Callout-Insert
```

^button-rl6u

```button
name 模板按钮
type template
action Callout-Insert
```

^button-xj1x

### 文本按钮

```button
name 添加自定义文本
type append text
action 炉石传说酒馆战棋
```

^button-atxo

### 计算按钮

```button
name 计算数字
type calculate
action 1000 + $LineNumber
```

^button-5omj

### Swap 按钮

```button
name 集成按钮
swap 2vga
```

^button-ywcm

### 复制剪贴板按钮

```button
name 复制到剪贴板
type copy
action 《复制到剪贴板的文本》
```

^button-z1rc

## 推荐 ob 的理由

里面主要推荐了几个插件

- 图片工具箱：Image Converter
- 笔记模板：Templater
- 同步与备份：Git
- 长文写作：Longform

- [为什么 obsidian 适合用作个人笔记工具？ - 知乎](https://www.zhihu.com/question/459752615/answer/100277691925)

## 参考资料

- [2021 年新教程 - Obsidian 中文教程 - Obsidian Publish](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/2021%E5%B9%B4%E6%96%B0%E6%95%99%E7%A8%8B)
- [Home - Obsidian Help](https://help.obsidian.md/)
- [Obsidian 同步 Remotely Save S3 配置指南 - 超光速](https://www.ftls.xyz/posts/obsidiannote/)
- [在 Obsidian 中构建高效笔记模板，从 Templates 到 Templater！哔哩哔哩 bilibili](https://www.bilibili.com/video/BV1c64y1W7c2/)
- [如何使用 Obsidian 软件？ - 知乎](https://www.zhihu.com/question/401972085/answer/3117613129)
- [一键收藏网址和内容到 ob | obsidian 文档咖啡豆版](https://coffeetea.top/zh/best-practices/onekey-webclip.html)

- [yaoyaohu - Obsidian中有哪些好用的插件值得推荐？ - 知乎](https://www.zhihu.com/question/497487995/answer/3421591859)
  - 概要: 用 Obsidian 快两年了～在一轮轮缩减后留下了以下对我必不可少的插件： 插件说明easy-typing-obsidian极大地提升中文用户在 OB 中的编辑体验AttachFlow极大提升 Obsidian 附件编辑管理体验Vimrc Support, Vim Input Method Switch, Word Splitting for Simplified Chinese in Edit Mode and Vim Modevim 三件套解决部分中文痛点：Execute Code笔记内运行代码：支持几十种语言Latex Suite极大提升书写数学公式体验Full calendar和…
  - 点赞: 104

- [墨七 - 最好的笔记软件是什么？ - 知乎](https://www.zhihu.com/question/499028200/answer/30348065192): 这篇文章还是有可圈可点的地方