---
title: dpkg
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

- Debian / Ubuntu 系统的底层包管理工具
- 直接操作 .deb 软件包文件
- 不自动解决依赖，通常配合 apt 使用
- 适合离线安装单个 deb 包的场景

## 常用命令

```sh
dpkg -i 包名.deb       # 安装 deb 包
dpkg -r 包名           # 移除软件包（保留配置）
dpkg -P 包名           # 彻底清除软件包
dpkg -l               # 列出已安装的包
dpkg -L 包名           # 查看包安装的文件列表
```
