---
title: golangci-lint
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - Go
categories:
  - 命令行
comment: true
---

## 特点

- Go 生态的一站式 lint 聚合器
- 集成大量 linter（staticcheck、govet、errcheck、ineffassign 等）
- 并行执行，速度快；配置集中在一个 `.golangci.yml`
- 与 CI/CD、编辑器深度集成

## 安装

```sh
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
# 或
brew install golangci-lint
```

## 用法

```sh
golangci-lint run
```

## 参考资料

- [golangci-lint 文档](https://golangci-lint.run/)
- [golangci/golangci-lint - GitHub](https://github.com/golangci/golangci-lint)
