---
title: Obsidian
date: 2024-09-26
draft: false
author: JackyLee
tags:
  - 笔记工具
  - Obsidian
categories:
  - 编辑器工具
comment: true
---

## 介绍

在无意中发现 obsidian 经过 2 年的更新，和我之前认识的完全不一样了，和 vscode 完全不一样。

两个软件的定位是有差异的，obsidian 是笔记软件，而 vscode 是 IDE。

之前一直因为移动端不能同步 vscode 仓库而困扰，现在 obsidian 在这方面完美解决了我的问题。

于是准备看看 obsidian 能不能解决我其他方面的诉求。

## 特点

- 本地优先，笔记数据完全由用户掌控
- 强大的双链引用和知识图谱视图
- 插件生态极其丰富，可高度定制工作流
- 完全基于 Markdown，格式开放无锁定
- 跨平台支持，桌面端与移动端体验一致
- 支持 vim 模式和多种编辑增强

## 需求

### 移动端同步

- [x] 使用 dropbox/坚果云 + remote sync 插件 ✅ 2024-09-26

### 想法能随时添加

- [x] 可以使用 Templater 和 QuickAdd 插件解决 ✅ 2024-09-26

### 文章数据库

- [x] 使用 markdown 的 yaml 管理 + dataview 插件 ✅ 2024-09-26

### ~~代码片段管理~~

原先的解决方案是使用 masscode 这个软件，但是问题是，这样又多一个软件，多了学习成本；是否可以通过插件解决？

暂时想到的方法是规定 markdown 的文章结构，然后使用搜索方法，然后复制。

## vim 使用

obsidian vimrc 配置 [.obsidian.vimrc](https://gist.github.com/kxxoling/dcc1c3a897e6735989f32b55ef069136)

## 内置功能

搜索功能

```query
embed foo search
```

## 插件

### 官方插件

- ![[obsidian-web-clipper#特点]]

### 第三方插件

- ![[obsidian-templater#特点]]
- ![[obsidian-dataview#特点]]
- ![[obsidian-local-rest-api#特点]]
- ![[obsidian-remote-save#特点]]
- ![[obsidian-buttons-maker#特点]]

### 其他推荐插件

- **QuickAdd**：快速创建笔记和执行命令
- **Image Converter**：图片格式转换和压缩
- **Git**：通过 Git 进行版本控制和备份
- **Longform**：长文写作和项目管理
- Easy Typing、Attach Flow、Vimrc Support 等中文用户友好插件

- [Obsidian 中有哪些好用的插件值得推荐？ - 知乎](https://www.zhihu.com/question/497487995/answer/3421591859)

## 推荐 Obsidian 的理由

- 图片工具箱：Image Converter
- 笔记模板：Templater
- 同步与备份：Git / Remote Save
- 长文写作：Longform

- [为什么 obsidian 适合用作个人笔记工具？ - 知乎](https://www.zhihu.com/question/459752615/answer/100277691925)

## 参考资料

- [2021 年新教程 - Obsidian 中文教程 - Obsidian Publish](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/2021%E5%B9%B4%E6%96%B0%E6%95%99%E7%A8%8B)
- [Home - Obsidian Help](https://help.obsidian.md/)
- [如何使用 Obsidian 软件？ - 知乎](https://www.zhihu.com/question/401972085/answer/3117613129)
- [墨七 - 最好的笔记软件是什么？ - 知乎](https://www.zhihu.com/question/499028200/answer/30348065192)

## FAQ

### obsidian 批量编辑 tag

> obsidian-metadata: [natelandau/obsidian-metadata: Batch updates to metadata in an Obsidian vault](https://github.com/natelandau/obsidian-metadata)
