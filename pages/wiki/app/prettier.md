---
title: prettier
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - formatter
  - JavaScript
  - Markdown
categories:
  - 命令行
comment: true
---

## 特点

- 「有主张」（opinionated）的代码格式化工具，几乎不需要配置
- 支持 JS / TS / JSON / CSS / SCSS / HTML / Markdown / YAML 等多种语言
- 社区事实标准，与 ESLint 配合使用（lint 管逻辑、prettier 管格式）
- 提供 CLI、编辑器插件、pre-commit、CI 等多种集成方式

## 安装

```sh
npm install -D prettier
```

## 用法

```sh
# 格式化单个文件
npx prettier --write src/index.js

# 格式化整个目录
npx prettier --write "src/**/*.{js,ts,json,css,md}"
```

## 与 ESLint 配合

安装 `eslint-config-prettier` 关闭与 prettier 冲突的规则：

```sh
npm install -D eslint-config-prettier
```

## 参考资料

- [Prettier 官网](https://prettier.io/)
- [prettier/prettier - GitHub](https://github.com/prettier/prettier)
