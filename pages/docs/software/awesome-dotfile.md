---
title: awesome-dotfile
date: 2026-08-18
draft: true
author: JackyLee
tags:
categories:
comment: true
description: Dotbot 同类 dotfiles 管理工具
---

## 1. Chezmoi（最主流，生产首选）

[[chezmoi]]

- 和 dotbot对比：dotbot 侧重 symlink；chezmoi 支持模板变量、条件、加密，能力强很多；上手略重。

## 2. dotbot

[[dotbot]]

## 3. Yadm（Yet Another Dotfiles Manager）

[[yadm]]

## 4. GNU Stow（经典老牌）

[[stow]]

> dotbot 很多人是从 stow 转过去，dotbot = stow + yaml配置 + 脚本执行能力。

## 5. RCM（rcm）

[[rcm]]

## 6. Homesick

- Github：<https://github.com/thoughtbot/homesick>
- ruby，把 dotfiles 当作 castle 仓库，clone + symlink。比较老，现在用的人少。

## 简单对比

- chezmoi：单二进制，模板+变量+加密+条件脚本，功能最全
- dotbot：yaml配置，symlink+脚本，无模板无加密
- GNU stow：纯symlink，零配置文件，无脚本无模板
- yadm：git原生，在家目录直接编辑，简单模板
- rcm:

## 选型参考

1. 简单、只做链接+少量脚本，不想学新语法：**dotbot / stow**
2. 多机器、跨系统、需要模板、加密密钥、服务器大量机器：**chezmoi（强烈推荐）**
3. 想直接在家目录编辑文件，不想管理symlink：**yadm**
4. 纯静态配置，零工具依赖：**GNU Stow**
