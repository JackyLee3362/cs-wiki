---
title: Copier
description: 支持模板升级回灌的项目模板生成与更新工具
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

[Copier](https://github.com/copier-org/copier) 是 [[cookiecutter]] 的现代替代品（Python，3k+ star），同样是「模板仓库 → 交互问答 → 生成项目」的流程，同样基于 [[jinja2]] 渲染。**杀手锏是模板升级**：`copier update` 可以把模板的新版本变化回灌（backport）到之前生成的项目里，并对用户改过的文件做智能三方合并。

被 pybamm 等知名项目从 cookiecutter 迁移过来的主要原因：copier 处于活跃开发维护状态，且解决了「生成即死」的问题。

## 核心概念

- **copier.yml**：问题定义文件，支持类型校验、默认值、条件提问（`when`）、多选（`choices`）等，比 cookiecutter.json 表达力强得多
- **.copier-answers.yml**：生成项目时自动落盘的答案记录文件，是后续 `update` 的依据，必须提交进 Git
- **Migrations**：`migrations/` 目录可放升级/降级迁移脚本，控制模板版本跨越时的额外动作
- **Jinja2 + 扩展**：通过 `--trust` 启用 jinja2_time 等时间类扩展

## 安装与使用

```sh
pipx install copier

# 生成项目
copier copy gh:org/template-repo my-project

# 模板升级后，回到项目目录更新（交互式确认合并）
copier update
```

## 与 cookiecutter 的关键差异

- 生成后的项目可以持续跟踪模板版本演进（cookiecutter 做不到）
- 问题定义支持类型与校验，cookiecutter 的 json 只有默认值
- 缺点：copier.yml 中不能像 cookiecutter 那样自由定义内部常量，部分场景需要额外 prompt 或扩展绕过

## 参考资料

- [GitHub - copier-org/copier: Library and command-line utility for rendering projects templates](https://github.com/copier-org/copier) #todo
- [pybamm-cookie 从 cookiecutter 迁移到 copier 的 PR 记录](https://github.com/pybamm-team/pybamm-cookie/pull/34) #todo
- 相关笔记：[[jinja2]]、[[cookiecutter]]
