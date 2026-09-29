---
title: pnpm
date: 2026-09-01
draft: false
author: JackyLee
tags:
  - wiki
  - 包管理
  - JavaScript
categories:
  - 命令行
comment: true
---

## 特点

- Node.js 的高性能包管理器
- 基于内容寻址存储，磁盘空间占用极小
- 严格的依赖隔离，避免幽灵依赖
- 支持 monorepo 工作区管理
- 兼容 npm 生态，迁移成本低

## 增加代理

```sh
# 开启代理
pnpm config set proxy http://127.0.0.1:7897
pnpm config set https-proxy http://127.0.0.1:7897

# 关闭代理
pnpm config set proxy
pnpm config set https-proxy
```
