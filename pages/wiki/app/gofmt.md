---
title: gofmt
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - formatter
  - Go
categories:
  - 命令行
comment: true
---

## 特点

- Go 官方自带的代码格式化工具
- 风格完全固定，全社区统一，从根源上消除格式争论
- 同时处理缩进、对齐、导入排序等（`gofmt` 本身不含导入排序，可配合 `goimports`）
- 随 Go 工具链一起安装，无需额外依赖

## 用法

```sh
# 格式化单个文件
gofmt -w main.go

# 格式化整个包
gofmt -w .

# 只查看差异，不修改
gofmt -d .
```

## 与 goimports 配合

`goimports` 在 `gofmt` 基础上自动增删 import 并分组：

```sh
go install golang.org/x/tools/cmd/goimports@latest
goimports -w .
```

## 参考资料

- [gofmt - Go 文档](https://pkg.go.dev/cmd/gofmt)
