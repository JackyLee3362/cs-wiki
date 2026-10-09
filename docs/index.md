---
title: 计算机知识库
slug: /overview
date: 2026-09-06
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
categories:
comment: true
---

👋 你好，我的朋友！

- [理论与原理](docs/theory/index.md)
- [语言](docs/lang/index.md)
- [应用与工具](docs/app/index.md)
- [开发框架与库](docs/framework/index.md)
- [工具比较](docs/compare/index.md)
- [解决方案](docs/solution/index.md)
  - [自部署](docs/solution/self-hosted/index.md)
- [工作](docs/work/index.md)
- [问题与解答](docs/issue/index.md)

- wiki 更像是固定的永久卡片
- faq 更像是对某个具体问题的分析

按技术主题整理概念、工具和语言，工具条目包含安装、验证与基本使用示例。

## 安装与入门

- [Docker](docs/app/container/docker/docker.md) 与 [Podman](docs/app/container/podman/index.md)：运行容器；Podman 另有[镜像构建](docs/app/container/podman/podman-build.md)和[多容器编排](docs/app/container/podman/podman-compose.md)。
- [Nginx](docs/app/network/nginx.md) 与 [Caddy](docs/app/network/caddy.md)：静态网站与反向代理。
- [Python](docs/app/devtools/python.md) 与 [Git](docs/app/git/git.md)：脚本开发与版本管理。
- [SQLite](docs/app/database/sqlite.md)：本地数据库。
- [curl](docs/app/network/curl.md)：下载与 HTTP 接口调试。
- [tar](docs/app/files/tar.md) 与 [restic](docs/app/backup/restic.md)：归档与备份。

## 命令行与工具

- [rclone](docs/app/backup/rclone.md) 与 [Syncthing](docs/app/backup/syncthing.md)：文件复制与设备同步。
- [Tailscale](docs/app/network/tailscale.md) 与 [OpenSSH](docs/app/network/ssh.md)：组网与远程连接。
- [autossh](docs/app/network/autossh.md)：断线后自动重建 SSH 隧道。
- [fzf](docs/app/terminal/fzf.md)：终端中的模糊查找。
- [uv](docs/app/devtools/uv.md)、[npm](docs/app/devtools/npm.md) 与 [pnpm](docs/app/devtools/pnpm.md)：项目环境与依赖管理。
- [Scoop](docs/app/windows/scoop.md) 与 [Homebrew](docs/app/macos/brew.md)：系统软件安装与维护。
- [Cryptomator](docs/app/security/cryptomator.md)：云盘文件客户端加密。
- [Signal](docs/app/communication/signal.md)：默认端到端加密的开源聊天软件。
- [World Monitor](docs/app/information/worldmonitor.md) 与 [TrendRadar](docs/app/information/trendradar.md)：资讯聚合与热点追踪。
- [Ansible](docs/app/ops/ansible.md)：批量配置与自动化运维。
- [Squid](docs/app/network/squid.md) 与 [Privoxy](docs/app/network/privoxy.md)：正向代理与请求过滤。
- [Mihomo](docs/app/network/mihomo.md)：代理内核使用与发行文件选型。
- [Harbor](docs/app/container/harbor.md)：私有镜像仓库与制品管理。
- [Homepage](docs/app/ops/homepage.md)：自托管服务导航与状态看板。
- [systemctl](docs/app/linux/systemctl.md) 与 [journalctl](docs/app/linux/journalctl.md)：服务管理与日志查询。
