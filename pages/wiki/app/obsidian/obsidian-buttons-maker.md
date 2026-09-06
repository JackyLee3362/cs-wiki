---
title: Obsidian Buttons Maker
date: 2024-10-24
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

第三方按钮插件，可在笔记中插入交互式按钮，执行命令、打开链接或插入模板。

## 命令按钮

```button
name 添加每日待办
type command
action QuickAdd: 添加每日待办
```

## 链接按钮

```button
name 打开百度
type link
action https://baidu.com
```

## 模板按钮

```button
name 模板按钮
type template
action Callout-Insert
```

## 文本按钮

```button
name 添加自定义文本
type append text
action 炉石传说酒馆战棋
```

## 计算按钮

```button
name 计算数字
type calculate
action 1000 + $LineNumber
```

## 复制剪贴板按钮

```button
name 复制到剪贴板
type copy
action 《复制到剪贴板的文本》
```

## 特点

- 支持多种按钮类型：命令、链接、模板、文本、计算、复制
- 可配合 Swap 功能实现按钮状态切换
- 简化重复操作，提升笔记工作流效率
