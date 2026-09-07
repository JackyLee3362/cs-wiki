---
title: Download Tools
description: 下载工具对比
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - download
  - 下载工具
categories:
  - 应用软件
comment: true
---

> 下载工具涵盖通用多线程下载、视频/流媒体抓取、文档下载等多种场景，是日常获取网络资源的基础软件。

## 工具概览

| 工具 | 类型 | 开源 | 价格 | 平台 | 核心特点 |
| :--- | :--- | :--: | :--- | :--- | :--- |
| [Lux](https://github.com/iawia002/lux) | 命令行下载器 | ✅ | 免费 | 全平台 | 一行命令下载多平台视频，支持 B站、YouTube 等 |
| [IDM](https://www.internetdownloadmanager.com/) | 多线程下载 | ❌ | 付费 | Windows | 32 线程加速，浏览器集成最强，嗅探视频流 |
| [NDM](https://www.neatdownloadmanager.com/) | 多线程下载 | ❌ | 免费 | Windows / macOS | IDM 界面风格，32 线程，完全免费，支持 macOS |
| [Motrix](https://motrix.app/) | 图形化下载器 | ✅ | 免费 | 全平台 | 基于 aria2，支持 HTTP/BT/磁力链，界面美观 |
| [aria2](https://aria2.github.io/) | 命令行下载器 | ✅ | 免费 | 全平台 | 轻量高效，支持 HTTP/FTP/BT/磁力，常作后端 |
| [冰点文库下载器](http://www.bingdian001.com/) | 文档下载 | ❌ | 免费 | Windows | 下载百度/豆丁/道客巴巴等文库文档，仅 5.9MB |
| [哔哩下载姬](https://github.com/yaobiao131/downkyi) | 视频下载 | ✅ | 免费 | Windows | 轻量 853KB，支持 B站视频及 4K 画质下载 |
| [yt-dlp](https://github.com/yt-dlp/yt-dlp) | 命令行下载器 | ✅ | 免费 | 全平台 | youtube-dl 活跃分支，支持 1000+ 站点 |

## 按场景推荐

### 通用多线程下载

日常浏览器下载速度受限时，Windows 首选 **IDM**（功能最全，浏览器嗅探最强）。如果追求免费或需要 macOS 支持，**NDM** 是 IDM 的最佳免费替代；喜欢现代界面且需要同时支持 BT/磁力的用户，推荐 **Motrix**。

### 命令行与自动化下载

开发者或喜欢脚本化的用户，推荐 **Lux**（国内视频站点支持最好，使用极简）或 **yt-dlp**（全球站点覆盖最广，社区最活跃）。需要作为其他应用下载后端时，**aria2** 是标准选择。

### 文库与文档下载

需要下载百度文库、豆丁、道客巴巴等平台的文档时，**冰点文库下载器**是经典工具，体积小巧且免安装。注意该工具已停止官方更新，但流传版本仍可正常使用。

### 流媒体与视频下载

专门下载 B站视频，**哔哩下载姬**（DownKyi）是最轻量的专用工具；如果还需要覆盖 YouTube、Twitter 等平台，**yt-dlp** 或 **Lux** 更为通用。

## 参考资料
