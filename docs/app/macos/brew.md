---
title: Homebrew
date: 2025-11-18
draft: false
author: JackyLee
tags:
  - wiki
  - 包管理
  - macOS
categories:
  - 命令行
comment: true
update_date: 2026-10-09
---

## 安装与验证

Homebrew 管理 macOS 和 Linux 的软件包。先确认符合官方支持条件，再从 [官方安装文档](https://docs.brew.sh/Installation)取得安装命令。

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

完成后执行安装器输出的 Next steps，配置当前 Shell 环境；不同平台的安装路径不同，不应直接照搬另一台电脑的路径。

```sh
brew --version
brew doctor
brew --prefix
```

## 基本使用：查找、安装与更新

```sh
brew search ripgrep
brew info ripgrep
brew install ripgrep
rg --version
brew list
brew update
brew outdated
brew upgrade ripgrep
```

update 更新软件清单，outdated 查看可更新软件，upgrade 才更新已安装软件。升级单个软件便于确认影响。

## Formula、Cask 与 Tap

- Formula 通常用于命令行软件及依赖。
- Cask 用于 macOS 图形应用等安装包，使用 brew install --cask 应用名。
- Tap 是额外的软件清单来源，可用 brew tap 查看；增加第三方 Tap 前应了解来源。

```sh
brew deps ripgrep
brew uses --installed ripgrep
brew tap
```

PATH 未生效时，先检查安装器给出的 shellenv 步骤和 Shell 启动文件。网络问题与 PATH 问题应分开排查。

## 特点

- 面向 macOS 和 Linux 的软件包管理器
- 通过 Formula 和 Cask 安装支持的软件
- 使用 Ruby 编写，社区生态极其丰富
- 支持 cask 安装图形界面应用
- 自动处理依赖和更新

## 常用命令

```sh
tldr brew

# 安装软件包或安装包
brew install 软件包

# 更新三连
brew outdated
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

Tap 是提供额外 Formula 或 Cask 的清单仓库，见上方“Formula、Cask 与 Tap”。

### 2026-08-22: brew vendor-install ruby 是什么?

这是 Homebrew 在安装/更新过程中，自动下载它自身依赖的 Ruby 运行时。

背景：

- Homebrew 的部分核心逻辑是用 Ruby 写的
- 它不依赖系统自带的 Ruby，而是自己维护一个 vendored 版本
- vendor-install 就是把这个内置 Ruby 下载到 Homebrew 自己的目录下

### 2026-08-22: 由于网络问题更新失败，如何解决？

- [Homebrew | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/) #todo

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

## 参考资料

### 官方资源

- [官网](https://brew.sh/)
- [GitHub 仓库](https://github.com/Homebrew/brew)
- [官方文档](https://docs.brew.sh/)

### 相关文章

- [fzf](docs/app/terminal/fzf.md)
- [uv](docs/app/devtools/uv.md)

### 其他参考链接

- [Homebrew | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/) #todo
- [原笔记链接](https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git) #todo
- [原笔记链接](https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git) #todo
- [Homebrew 安装](https://docs.brew.sh/Installation) #todo
- [Homebrew 命令手册](https://docs.brew.sh/Manpage) #todo
