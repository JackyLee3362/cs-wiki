---
title: scoop
date: 2025-05-14
draft: true
author: JackyLee
tags:
  - 命令行
  - 包管理软件
categories:
comment: true
---

Scoop 是一款 Windows 操作系统的 CLI 安装器

## 基本使用

```sh
# 查找所有的应用
scoop list

# 查看状态
# 1. 查看哪些软件需要升级
scoop status

# 查看应用信息
scoop info xxx

# 升级 scoop 或者包
scoop update
scoop update xxx
# 升级所有
scoop update --all

# 安装
scoop install xxx

# 卸载
scoop uninstall xxx
```

## 所有命令

```sh
scoop
alias      Manage scoop aliases
bucket     Manage Scoop buckets
cache      Show or clear the download cache
cat        Show content of specified manifest.
checkup    Check for potential problems
cleanup    Cleanup apps by removing old versions
config     Get or set configuration values
create     Create a custom app manifest
depends    List dependencies for an app, in the order they'll be installed
download   Download apps in the cache folder and verify hashes
export     Exports installed apps, buckets (and optionally configs) in JSON format
help       Show help for a command
hold       Hold an app to disable updates
home       Opens the app homepage
import     Imports apps, buckets and configs from a Scoopfile in JSON format
info       Display information about an app
install    Install apps
list       List installed apps
prefix     Returns the path to the specified app
reset      Reset an app to resolve conflicts
search     Search available apps
shim       Manipulate Scoop shims
status     Show status and check for new app versions
unhold     Unhold an app to enable updates
uninstall  Uninstall an app
update     Update apps, or Scoop itself
virustotal Look for app's hash or url on virustotal.com
which      Locate a shim/executable (similar to 'which' on Linux)
```

## 应用

使用 Scoop 安装 YesPlayMusic

![20250514232101-2025-05-14](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/20250514232101-2025-05-14.png)

- [qier222/YesPlayMusic: 高颜值的第三方网易云播放器，支持 Windows / macOS / Linux](https://github.com/qier222/YesPlayMusic?tab=readme-ov-file#%EF%B8%8F-%E5%AE%89%E8%A3%85)

## FAQ

如何设置 scoop 代理? TODO

## 参考资料

- 项目地址：[Scoop](https://scoop.sh/)
- 仓库地址：[ScoopInstaller/Scoop: A command-line installer for Windows.](https://github.com/ScoopInstaller/Scoop)
- [Scoop 安装常用工具 - 灵火 - 博客园](https://www.cnblogs.com/fires/p/18727717)
- [GitHub - killsen/scoop-dev: 使用 Scoop 搭建 Windows 统一开发环境](https://github.com/killsen/scoop-dev)
- [使用 scoop 安装管理 windows 软件（2）：github 加速 - 知乎](https://zhuanlan.zhihu.com/p/460912224)
