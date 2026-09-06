---
title: yum
date: 2025-01-01
draft: false
author: JackyLee
tags:
  - 包管理
categories:
  - 命令行
comment: true
---

## 特点

- CentOS / RHEL / Fedora 等系统的默认包管理器
- 基于 RPM 包格式，自动解决依赖关系
- 使用软件仓库（repository）管理软件源
- 已被 dnf 逐步取代，但仍在大量生产环境中使用

## 常用命令

```sh
yum install 包名       # 安装软件包
yum remove 包名        # 卸载软件包
yum update             # 更新所有软件包
yum search 关键词      # 搜索软件包
yum list installed     # 列出已安装的包
```
