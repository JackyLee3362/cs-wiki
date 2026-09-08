---
title: Markdown Callout（GitHub Alerts）
description: GitHub Alerts 与 Obsidian Callout 语法详解
date: 2026-09-08
draft: true
author: JackyLee
tags:
  - markdown
  - github
  - obsidian
categories:
  - 编程语言
comment: true
---

## 概述

Callout（提示块）是一种基于引用块扩展的标记语法，用于在文档中渲染出带图标和颜色的醒目提示框。这个语法有两个主流变体，二者互相兼容：

- **GitHub Alerts**：GitHub 在 2023 年推出的官方扩展，仅支持 5 种大写类型，GitHub 网页、README 中直接渲染。
- **Obsidian Callout**：Obsidian 笔记软件的扩展语法，类型更丰富，支持折叠、自定义标题、嵌套和自定义样式。

基本结构相同：在 Markdown 引用块 `>` 的第一行写入 `[!类型]`，后续行即为提示内容。

## GitHub Alerts

GitHub 支持 5 种类型，且**必须大写**：

```markdown
> [!NOTE]
> 强调用户应关注的普通信息。

> [!TIP]
> 帮助用户更好地完成任务的实用建议。

> [!IMPORTANT]
> 用户完成任务所必需的关键信息。

> [!WARNING]
> 用户需要注意的风险信息。

> [!CAUTION]
> 可能导致负面后果的警告信息。
```

渲染效果（GitHub 上的实际样式）：

> [!NOTE]
> 强调用户应关注的普通信息。

> [!TIP]
> 帮助用户更好地完成任务的实用建议。

> [!IMPORTANT]
> 用户完成任务所必需的关键信息。

> [!WARNING]
> 用户需要注意的风险信息。

> [!CAUTION]
> 可能导致负面后果的警告信息。

注意：GitHub Alerts 中第一行的 `[!NOTE]` 之后的文字会被当作普通正文渲染，**不支持自定义标题**；类型标签本身也不可折叠。

## Obsidian Callout

Obsidian 支持的类型是 GitHub 的超集（类型**小写**，但实际大小写不敏感，类型名同样兼容 GitHub 的 5 种）：

| 类型 | 别名 | 用途 |
|------|------|------|
| `note` | — | 普通笔记（默认蓝色） |
| `abstract` | `summary`、`tldr` | 摘要 |
| `info` | — | 信息 |
| `todo` | — | 待办 |
| `tip` | `hint`、`important` | 提示 |
| `success` | `check`、`done` | 成功 |
| `question` | `help`、`faq` | 疑问 |
| `warning` | `caution`、`attention` | 警告 |
| `failure` | `fail`、`missing` | 失败 |
| `danger` | `error` | 危险 |
| `bug` | — | Bug |
| `example` | — | 示例 |
| `quote` | `cite` | 引用 |

### 自定义标题

在类型标记后追加文字即可替换默认标题；使用 `+` 显式展开、`-` 折叠（Foldable）：

```markdown
> [!tip] 自定义标题
> 类型标记后的文字会替换默认标题。

> [!faq]- 默认折叠的问答
> 类型后加 `-` 创建默认折叠的可折叠 Callout。

> [!tip]+ 默认展开的可折叠 Callout
> 类型后加 `+` 创建默认展开的可折叠 Callout。
```

### 嵌套

Callout 内可以继续嵌套 Callout 或其他 Markdown 元素（列表、代码块等）：

```markdown
> [!question]- 嵌套示例
> > [!note]- 内层 Callout
> > 嵌套的 Callout 内容。

````
代码块同样可以放在 Callout 内。
````
```

### Callout 内的代码块

包含代码块时需要注意代码块围栏的层级，内层使用比外层更多的反引号：

````markdown
> [!note]
> ````markdown
> 这里的代码块不会被解析为外层围栏的结束
> ````
````

## 兼容性对照

| 特性 | GitHub Alerts | Obsidian Callout |
|------|---------------|------------------|
| 类型数量 | 5 种（NOTE/TIP/IMPORTANT/WARNING/CAUTION） | 13 种 + 别名 |
| 大小写 | 必须大写 | 不敏感 |
| 自定义标题 | 不支持（标题后文字视为正文） | 支持 |
| 折叠 | 不支持 | 支持（`+` / `-`） |
| 嵌套 | 支持 | 支持 |
| 自定义类型 | 不支持 | 支持通过 CSS/插件扩展 |
| 其他渲染器 | Typora 1.8+ 支持（Obsidian 风格） | VSCode 需插件支持 |

写作建议：如果文档需要同时发布到 GitHub 与 Obsidian，优先使用两边都支持的 5 种核心类型（`note`、`tip`、`important`、`warning`、`caution`），并将标题写在正文首行而非类型标记之后。

## 参考资料

- [Creating alerts - GitHub Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)
- [Callouts - Obsidian Help](https://help.obsidian.md/callouts)
- [Obsidian Flavored Markdown](https://help.obsidian.md/syntax)
- 相关笔记：[[markdown]]
