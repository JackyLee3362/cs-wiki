---
title: Chocolatey
date: 2026-08-17
draft: false
author: JackyLee
tags:
  - 包管理
  - Windows
categories:
  - 命令行
comment: true
---

## 特点

- Windows 上最成熟的包管理器之一
- 支持 GUI 和 CLI 两种安装方式
- 社区仓库软件数量庞大
- 支持企业部署和内部仓库
- 适合批量部署 Windows 开发环境

## 安装

检查运行环境

```sh
Get-ExecutionPolicy
# 如果返回值是Restricted，则执行下面的语句
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## 查看安装后的日志

```cmd
// choco install mingw # 安装 mingw
C:\ProgramData\chocolatey\logs\chocolatey.log
```

## 参考

[Chocolatey Software | Chocolatey - The package manager for Windows](https://chocolatey.org/)
