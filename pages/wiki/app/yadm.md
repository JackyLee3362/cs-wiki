---
title: yadm
date: 2026-08-18
draft: true
author: JackyLee
tags:
  - 命令行
  - lang/bash
  - 
categories:
comment: true
---

## 基本信息

- bash 脚本，底层就是 git，把家目录当作 git 仓库
- 特点：直接在 `~` 修改文件，不用拷贝到仓库目录；支持模板、加密；不需要维护符号链接
- 适合：习惯直接在家目录改配置，不想来回拷贝文件；不喜欢大量 symlink
- 缺点：模板语法弱，跨平台复杂场景不如 chezmoi

## 仓库

- [yadm-dev/yadm: Yet Another Dotfiles Manager](https://github.com/yadm-dev/yadm)
