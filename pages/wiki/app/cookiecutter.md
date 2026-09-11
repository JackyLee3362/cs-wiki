---
title: Cookiecutter
description: 最流行的 Python 项目模板生成器，从模板一键创建项目骨架
date: 2026-09-10
draft: true
author: JackyLee
tags:
  - python
  - 脚手架
  - 模板
categories:
  - 命令行
comment: true
---

## 概述

[Cookiecutter](https://github.com/cookiecutter/cookiecutter) 是最流行的项目模板生成工具（Python，2 万+ star）：输入一个模板仓库（Git 地址、本地目录或 ZIP），交互式回答几个问题，即可生成一个渲染好的项目骨架。底层使用 [[jinja2]] 做模板渲染。

核心概念：

- **模板（Template）**：一个目录结构即模板，文件名和文件内容都可以包含 `{{cookiecutter.xxx}}` 变量（甚至目录名可以整体用 Jinja 条件控制）
- **cookiecutter.json**：模板的变量定义文件，声明每个问题的默认值；`_` 前缀的键不提示用户、仅作内部变量
- **Hooks**：`hooks/post_gen_project.py` 等钩子脚本可在生成后执行清理、条件删除文件等逻辑
- **模板生态**：[awesome-cookiecutter](https://github.com/cookiecutter/awesome-cookiecutter) 收录了 Python、Django、Flask、Datascience 等几乎所有领域的现成模板

## 安装与使用

```sh
pipx install cookiecutter

# 从 GitHub 模板生成交互式项目
cookiecutter gh:audreyr/cookiecutter-pypackage

# 从本地模板生成，跳过所有提问使用默认值
cookiecutter --no-input /path/to/template
```

## 局限

- **一次性生成**：生成后模板升级无法回灌到已有项目（没有 `update` 机制），需要升级时要重开项目或手工迁移 → 这是 [[copier]] 出现的直接原因
- 纯 Jinja2 渲染，复杂逻辑只能写在 hooks 里

## 参考资料

- [GitHub - cookiecutter/cookiecutter: A cross-platform command-line utility that creates projects from templates](https://github.com/cookiecutter/cookiecutter) #todo
- [awesome-cookiecutter 模板列表](https://github.com/cookiecutter/awesome-cookiecutter) #todo
- [mdklatt/cookiecutter-python-app: Cookiecutter template for a Python application project](https://github.com/mdklatt/cookiecutter-python-app) #todo
- 相关笔记：[[jinja2]]、[[copier]]
