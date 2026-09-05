---
title: chezmoi
date: 2026-08-18
draft: true
author: JackyLee
tags:
  - 命令行
  - lang/golang
  - sync
  - 开源项目
  - 跨平台
categories:
comment: true
---

## 基本情况

- Go 单二进制，无依赖，跨平台 Linux/macOS/Windows
- 核心：**模板、按主机差异化、GPG加密敏感文件、幂等执行脚本**，不依赖符号链接，复制生成真实文件
- 适合：多台机器、不同系统、需要密钥/隐私配置、服务器+本地工作站混用

## 常用命令

- `chezmoi add`
- `chezmoi apply`
- `chezmoi diff`

## 仓库

- [twpayne/chezmoi: Manage your dotfiles across multiple diverse machines, securely.](https://github.com/twpayne/chezmoi)
