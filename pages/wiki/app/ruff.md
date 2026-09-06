---
title: ruff
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - Python
categories:
  - 命令行
comment: true
---

## 特点

- 用 Rust 编写的极速 Python linter，比传统工具快几个数量级
- 可同时替代 flake8、isort、pyupgrade、pydocstyle 等多个工具
- Astral 公司出品，与 uv 同源
- 支持自动修复（`--fix`），内置大量规则

## 安装

```sh
pip install ruff
# 或
uv add --dev ruff
# 或
brew install ruff
```

## 用法

```sh
# 检查
ruff check .

# 自动修复
ruff check . --fix

# 代码格式化（ruff format 相当于 black）
ruff format .
```

## 参考资料

- [Ruff 文档](https://docs.astral.sh/ruff/)
- [astral-sh/ruff - GitHub](https://github.com/astral-sh/ruff)
