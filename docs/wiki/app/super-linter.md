---
title: super-linter
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - CI/CD
  - GitHub Actions
categories:
  - 命令行
comment: true
---

## 特点

- GitHub 官方维护的多语言一站式 lint 方案
- 在 GitHub Action 中运行，自动识别语言并调用对应 linter
- 支持大量语言与格式（Shell、Python、JS、Markdown、YAML、Dockerfile 等）
- 适合多语言仓库统一做代码检查门禁

## 用法

在仓库创建 `.github/workflows/lint.yml`：

```yaml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: super-linter/super-linter@v7
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 参考资料

- [super-linter 文档](https://github.com/super-linter/super-linter)
