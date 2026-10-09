---
title: macOS 如何查看监听端口？
description: 使用 lsof 和 netstat 查看 macOS 的 TCP 监听端口及进程
date: 2026-10-09
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
  - macos
  - 网络
  - 端口
categories:
  - 命令行
comment: true
---

在终端运行以下命令，查看所有正在监听的 TCP 端口，以及对应进程：

```sh
sudo lsof -nP -iTCP -sTCP:LISTEN
```

只检查 8080 端口：

```sh
sudo lsof -nP -iTCP:8080 -sTCP:LISTEN
```

结果中的 `COMMAND` 是进程名，`PID` 是进程号，`NAME` 显示监听地址和端口。无结果表示该命令没有找到对应的 TCP 监听套接字；若不使用 `sudo`，可能看不到其他用户的进程。`127.0.0.1:8080` 只绑定本机 IPv4 环回地址，`*:8080` 则是通配地址；监听不等于其他设备一定能访问，仍需检查防火墙与网络路径。

只想查看 TCP 监听地址和端口，也可以运行：

```sh
netstat -an -p tcp | grep LISTEN
```

macOS 的 `netstat -p tcp` 用于指定协议，不显示 PID。UDP 没有 TCP 的 `LISTEN` 状态；如需查看已打开的 UDP 套接字，使用 `sudo lsof -nP -iUDP`。

工具详情：[lsof](docs/app/lsof.md)、[netstat](docs/app/netstat.md)。

## 参考资料

- [Apple 开源的 lsof 手册](https://github.com/apple-oss-distributions/lsof/blob/main/lsof/lsof.man)
- [Apple 开源的 netstat 手册](https://github.com/apple-oss-distributions/network_cmds/blob/main/netstat.tproj/netstat.1)
