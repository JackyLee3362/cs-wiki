---
title: VSCode FAQ 常见问题
date: 2025-03-14
draft: false
author: JackyLee
tags:
  - VSCode
  - IDE
categories:
  - 编辑器工具
comment: true
---

## 如何设置命令行启动指定命令

> 比如启动 conda-init 命令

- [June 2019 (version 1.36)](https://code.visualstudio.com/updates/v1_36#_launch-terminals-with-clean-environments)

## Vscode 中文符号重复

```json
{
  "editor.experimentalEditContextEnabled": false
}
```

- [Chinese input repeats characters when using VSCodeVim in insert mode · Issue #9668 · VSCodeVim/Vim](https://github.com/VSCodeVim/Vim/issues/9668)

## 关闭 github copilot

```json
{
  "chat.extensionUnification.enabled": "false"
}
```

## 参考资料
