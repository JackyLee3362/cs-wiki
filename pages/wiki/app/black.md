---
title: black
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - formatter
  - Python
categories:
  - 命令行
comment: true
---

## 特点

- Python 官方推荐的「无争议」代码格式化工具
- 风格固定、几乎无需配置，避免团队格式争论
- 兼容 PEP 8，自动处理引号、缩进、换行、逗号等
- 可配置行宽（默认 88），支持 `pyproject.toml`

## 安装

```sh
pip install black
# 或
uv add --dev black
```

## 用法

```sh
# 格式化
black .

# 只检查不修改
black --check .

# 查看会改哪些文件
black --diff .
```

## 配置

在 `pyproject.toml` 中：

```toml
[tool.black]
line-length = 100
```

## 参考资料

- [Black 文档](https://black.readthedocs.io/)
- [psf/black - GitHub](https://github.com/psf/black)
