---
title: Syncthing
date: 2025-03-14
draft: false
author: JackyLee
tags:
  - wiki
  - app/server
categories:
comment: true
update_date: 2026-10-09
---

## 简介

Syncthing 在设备间同步文件夹。设备通过设备 ID 建立信任，每个共享文件夹通过文件夹 ID 匹配；它不要求文件先上传到统一的云盘。

## 安装与验证

从 [官方下载页](https://syncthing.net/downloads/)选择 Windows、macOS 或 Linux 的程序包。解压后启动 syncthing，打开 [本地管理界面](http://127.0.0.1:8384)。

```sh
syncthing --version
syncthing
```

Ubuntu / Debian 也可使用发行版软件包：

```sh
sudo apt update
sudo apt install syncthing
syncthing
```

服务应只启动一个实例。管理界面默认用于本机访问，首次运行时按提示设置管理账号。

## 基本使用：同步两个设备

1. 在两台设备上启动 Syncthing，从“显示 ID”取得各自设备 ID。
2. 在设备 A 添加设备 B，设备 B 接受连接请求。
3. 在 A 创建用于测试的空目录，添加为共享文件夹并勾选 B。
4. B 接受文件夹请求，为它选择本地目录；两端保持同一个文件夹 ID。
5. 在 A 新建 test.txt，确认 B 收到，再修改内容检查同步状态。

开始同步已有目录前，先保留一份独立副本；删除操作也会传播到其他设备。

## 忽略文件与版本管理

在共享目录设置忽略模式，例如忽略临时产物：

```text
node_modules
.venv
build
*.tmp
```

忽略规则并不自动在所有设备上共享，应分别确认。可在文件夹设置中启用文件版本管理，以保留从其他设备同步过来的旧版本。持续同步不能代替独立备份。

## 日常排查

设备离线时检查双方是否运行、设备 ID 是否正确、网络是否可达；“不同步”时检查文件夹 ID、暂停状态、文件权限和忽略规则。关闭程序可在管理界面选择“操作 → 关闭”；前台启动时按 Ctrl+C。

## 参考资料

### 官方资源

- [官网](https://syncthing.net/)
- [GitHub 仓库](https://github.com/syncthing/syncthing)
- [官方文档](https://docs.syncthing.net/)

### 相关文章

- [rclone](docs/app/backup/rclone.md)
- [restic](docs/app/backup/restic.md)

### 其他参考链接

- [Syncthing简易使用指南-开源P2P文件同步工具 - 知乎](https://zhuanlan.zhihu.com/p/598689238) #todo
- [【3C】Syncthing\_我的手機也想要終身免費相簿呀~~(Android篇)｜方格子 vocus](https://vocus.cc/article/649d1eecfd89780001ae7fa0) #todo
- [syncthing/syncthing: Open Source Continuous File Synchronization](https://github.com/syncthing/syncthing) #todo
- [一文搞定：Syncthing多平台文件同步工具安装全攻略 - HaiJaine - 博客园](https://www.cnblogs.com/HaiJaine/p/18339629) #todo
- [Syncthing 下载](https://syncthing.net/downloads/) #todo
- [官方入门指南](https://docs.syncthing.net/intro/getting-started.html) #todo
- [忽略文件](https://docs.syncthing.net/users/ignoring.html) #todo
