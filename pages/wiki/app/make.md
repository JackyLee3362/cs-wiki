---
title: make
date: 2024-12-19
draft: true
author: JackyLee
tags:
categories:
  - 命令行
comment: true
---

## 介绍

> 我的理解是有点类似 script 脚本，windows 需要先下载 make 工具
>
> 但是在 win 上用的不舒服，很多不对的

```Makefile
# Project management tasks.

VENV = .venv
PYTHON = . $(VENV)/bin/activate && python
PYTEST = $(PYTHON) -m pytest

$(VENV)/.make-update: pyproject.toml
    python -m venv $(VENV)
    $(PYTHON) -m pip install -U pip  # needs to be updated first
    $(PYTHON) -m pip install -e ".[dev]"
    touch $@

.PHONY: dev
dev: $(VENV)/.make-update

.PHONY: docs
docs: dev
    $(PYTHON) -m sphinx -M html docs docs/_build

.PHONY: test-unit
test-unit: dev
    $(PYTEST) tests/unit/

.PHONY: check
check: test-unit
```

## 参考资料

1. [makefile 中文][makefile介绍 — 跟我一起写Makefile 1.0 文档]

[makefile介绍 — 跟我一起写Makefile 1.0 文档]: https://seisman.github.io/how-to-write-makefile/introduction.html "makefile介绍 — 跟我一起写Makefile 1.0 文档"
