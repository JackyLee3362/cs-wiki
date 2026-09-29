---
title: fzf
description:
date: 2026-08-22
update_date: 2026-09-29
draft: false
author: JackyLee
tags:
  - wiki
  - 命令行
categories:
comment: true
---

## 简介

fzf 是命令行模糊选择器：把多行文本交给它，输入部分字符缩小候选项，再选择一行输出。它可以处理文件路径、命令历史或任意文本列表。

## 安装与验证

```sh
# macOS，需已有 Homebrew
brew install fzf
# Ubuntu / Debian
sudo apt update
sudo apt install fzf
fzf --version
```

Windows 已安装 Scoop 时使用 scoop install fzf，也可从官方仓库的 Releases 下载程序。

## 基本使用

在包含文件的目录运行 fzf，输入关键词，方向键切换，Enter 确认，Esc 取消。

```sh
# Bash / Zsh：从自定义列表选择
printf '%s\n' docker python git | fzf
# 从当前目录的文件中选择
find . -type f | fzf
# 用明确的分隔符处理包含空格或换行的文件名
find . -type f -print0 | fzf --read0 --print0
```

PowerShell 示例：

```powershell
Get-ChildItem -File -Recurse | ForEach-Object { $_.FullName } | fzf
```

## Shell 快捷键

较新的 fzf 可以输出 Shell 集成脚本；按已安装版本的官方说明启用。Bash 可用 eval "$(fzf --bash)"，Zsh 可用 source <(fzf --zsh)。Ctrl+R 用于历史搜索，Ctrl+T 用于文件选择。旧版发行包可能采用不同的集成方式。

## 参考资料

### 官方资源

- [官网](https://junegunn.github.io/fzf/)
- [GitHub 仓库](https://github.com/junegunn/fzf)
- [官方文档](https://github.com/junegunn/fzf#readme)

### 相关文章

- [Git](docs/wiki/app/git/git.md)
- [Homebrew](docs/wiki/app/brew.md)

### 其他参考链接

- [junegunn/fzf: :cherry_blossom: A command-line fuzzy finder](https://github.com/junegunn/fzf) #todo
