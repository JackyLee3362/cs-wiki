---
title: VSCode Markdown 支持
date: 2025-02-24
draft: false
author: JackyLee
tags:
  - VSCode
  - IDE
  - Markdown
categories:
  - 编辑器工具
comment: true
---

## markdown 和 vscode

## [文档内转到标题](https://code.visualstudio.com/Docs/languages/markdown#_go-to-header-in-file)

快捷键：ctrl+shift+O

如果活动编辑器支持符号，该快捷键就可以生效，语法为 `@symbol`，比如在.py 文件中

## [工作区内转到标题](https://code.visualstudio.com/Docs/languages/markdown#_go-to-header-in-workspace)

快捷键：ctrl+T

## [智能选择](https://code.visualstudio.com/Docs/languages/markdown#_smart-selection)

快捷键

- shift+alt+right：扩展
- shift+alt+left：收缩

## [预览模式](https://code.visualstudio.com/Docs/languages/markdown#_markdown-preview)

快捷键：

- ctrl+shift+V：预览模式
- ctrl+K V：动态预览

## 设置图片保存

```json
markdown.copy
// 项
**/*.md
// 值
${documentWorkspaceFolder}/assets
```

### 显示内置拓展

```sh
命令面板 ctrl + shift + p
> Show Build-in Extensions

或者

侧边栏拓展 ctrl + shift + x
搜索 @buildin
```

## 显示所有扩展

```sh
code --list-extensions
```
