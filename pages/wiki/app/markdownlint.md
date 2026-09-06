---
title: markdownlint
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - Markdown
categories:
  - 命令行
comment: true
---

## 特点

- Markdown 文件书写规范检查工具
- 检查标题层级、列表格式、链接、空白、行尾空格等
- 提供 Node CLI、VS Code 插件、GitHub Action 等多种形态
- 规则以 `MD0xx` 编号，可在配置文件中逐条启用/禁用

## 安装

```sh
npm install -g markdownlint-cli
```

## 用法

```sh
# 检查
markdownlint "**/*.md"

# 自动修复
markdownlint "**/*.md" --fix
```

## 配置

项目根目录创建 `.markdownlint.json`：

```json
{
  "MD013": false,
  "MD033": false
}
```

## 参考资料

- [markdownlint 文档](https://github.com/DavidAnson/markdownlint)
