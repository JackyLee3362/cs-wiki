---
title: brew
alias:
  - brew
date: 2025-11-18
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 常用命令

```sh
tldr brew

# 安装软件包或安装包
brew install 软件包

# 更新三连
brew outdate
brew update
brew upgrade

# 列出所有已安装的软件或安装包
brew list

# 显示软件包或安装包的信息
brew info 软件包
```

## tap

tldr brew tap

## ISSUE

### 2026-08-22: 什么是 tap

### 2026-08-22: brew vendor-install ruby 是什么?

这是 Homebrew 在安装/更新过程中，自动下载它自身依赖的 Ruby 运行时。

背景：

- Homebrew 的部分核心逻辑是用 Ruby 写的
- 它不依赖系统自带的 Ruby，而是自己维护一个 vendored 版本
- vendor-install 就是把这个内置 Ruby 下载到 Homebrew 自己的目录下

### 2026-08-22: 由于网络问题更新失败，如何解决？

- [Homebrew | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

```sh
# 切换到清华镜像
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
brew update
```

### 如何查找依赖项

查看软件包的可选依赖关系
有些软件包具有可选的依赖关系，可以使用 options 命令查看这些选项。例如：

```sh
brew options package_name
# 查找已安装的，依赖 xxx 的软件
brew uses --installed xxx
# 查找所有依赖 xxx 的软件
brew uses xxx
```
