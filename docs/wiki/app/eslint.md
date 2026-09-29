---
title: eslint
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - JavaScript
categories:
  - 命令行
comment: true
---

## 特点

- JavaScript / TypeScript 社区最流行的静态代码检查工具
- 规则可插拔，支持自定义规则与共享配置（如 eslint-config-airbnb）
- 生态庞大，与 Prettier、TypeScript、编辑器深度集成
- 同时支持代码风格检查与潜在 bug 检测

## 安装

```sh
npm install -D eslint
```

## 初始化配置

```sh
npx eslint --init
```

## 用法

```sh
# 检查单个文件
npx eslint src/index.js

# 检查整个目录
npx eslint src/

# 自动修复部分问题
npx eslint src/ --fix
```

## 参考资料

- [ESLint 官网](https://eslint.org/)
- [eslint/eslint - GitHub](https://github.com/eslint/eslint)
