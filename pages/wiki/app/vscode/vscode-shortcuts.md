---
title: VSCode 快捷键
date: 2026-02-14
draft: false
author: JackyLee
tags:
  - VSCode
  - IDE
  - 快捷键
categories:
  - 编辑器工具
comment: true
---

## 命令

- ctrl+p term 显示已打开终端
- ctrl+p edt 显示已打开编辑的文件
- ctrl+p view

## 快捷键设置 when 表达式

```sh
# 之前设置了 f5 运行 sql 脚本，但是在 python 文件中也生效
# 使用 when 表达式可以规避这个
# 设置当文件为 sql 时才生效
editorLangId == 'sql'
```

## 快捷设置

- 设置快捷键 `ctrl+k, ctrl+s`

## 搜索功能

- 在文件树中搜索：激活文件树面板`ctrl+shift+e`， `ctrl + alt + f`
- 在文件中搜索 `ctrl + f`
- 全文搜索 `ctrl + shift + f`

- [User interface](https://code.visualstudio.com/docs/getstarted/userinterface#_advanced-tree-navigation)

## 命令面板

- 命令 `ctrl+shift+p`
- 搜索文件`ctrl + p` 或者 `ctrl + e`
- 转到编辑器中的符号 `ctrl + shift + o`
- 转到工作区中的符号 `ctrl + t`

## 智能提示

- `alt+space`
- `ctrl+space`
- `ctrl+shift+space`

## 禅模式

`ctrl+k, z`

## 和 vim 的映射

TODO 不是很理解里面的覆盖关系

## 触发建议

alt+/：原来是 ctrl+space，但是和系统冲突，改为 alt+/

## 输入法的一些问题

1. vim 插件，输入法中文抖动问题，暂时没有解决
2. 中文括号【】和引号""问题，能不能有插件可以解决这个问题？
