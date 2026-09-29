---
title: syncthing
date: 2025-03-14
draft: true
author: JackyLee
tags:
  - app/server
categories:
comment: true
---

## 入门

win-dorm-jacky
VGZ4dhw\*xvc2qwn9pqe

- [Syncthing简易使用指南-开源P2P文件同步工具 - 知乎](https://zhuanlan.zhihu.com/p/598689238)

## 启动脚本

```powershell
Start-Process "$env:SYNCTHING\syncthing.exe" -ArgumentList "--no-console","--no-browser" -WindowStyle Hidden

# 然后多次运行后，如何查看对应端口号
tasklist | findstr /i sync
FileSyncHelper.exe            5904 Services                   0     27,884 K
syncthing.exe                 7076 Console                    1     20,172 K
syncthing.exe                 7544 Console                    1     47,296 K
syncthing.exe                21992 Console                    1     28,588 K
```

## 关闭脚本

```

```

## 最佳实践

- [【3C】Syncthing\_我的手機也想要終身免費相簿呀~~(Android篇)｜方格子 vocus](https://vocus.cc/article/649d1eecfd89780001ae7fa0)

## 参考资料

- 仓库地址：[syncthing/syncthing: Open Source Continuous File Synchronization](https://github.com/syncthing/syncthing)
- [一文搞定：Syncthing多平台文件同步工具安装全攻略 - HaiJaine - 博客园](https://www.cnblogs.com/HaiJaine/p/18339629)
