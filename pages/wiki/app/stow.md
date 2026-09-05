---
title: stow
date: 2026-08-18
draft: true
author: JackyLee
tags:
  - 命令行
  - lang/perl
categories:
comment: true
---

- perl，纯符号链接方案。仓库目录放配置，stow 创建 symlink 指向家目录。
- 优点：极简，没有额外配置文件；修改仓库文件立刻生效。
- 缺点：**没有模板、没有加密、没有脚本执行**；只能静态文件；多机差异很难处理。

## 仓库

- [aspiers/stow: GNU Stow - mirror of savannah git repository occasionally with more bleeding-edge branches](https://github.com/aspiers/stow)
