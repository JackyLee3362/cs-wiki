---
title: lsof
date: 2025-07-04
update_date: 2026-10-09
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
---

`lsof` 列出进程打开的文件，也可查询网络套接字。macOS 查看所有正在监听的 TCP 端口：

```sh
sudo lsof -nP -iTCP -sTCP:LISTEN
```

只查 8080 端口：

```sh
sudo lsof -nP -iTCP:8080 -sTCP:LISTEN
```

输出中的 `COMMAND` 是进程名，`PID` 是进程号，`NAME` 包含本地监听地址和端口。`-iTCP` 限定 TCP；`-sTCP:LISTEN` 只保留监听状态；`-n` 和 `-P` 分别避免域名和服务名解析。查询其他用户的进程时使用 `sudo`。

UDP 没有 TCP 的 `LISTEN` 状态。查看已打开的 UDP 套接字可用：

```sh
sudo lsof -nP -iUDP
```

相关问题：[macOS 如何查看监听端口？](docs/issue/macos-listening-ports.md)

## 参考资料

- [Apple 开源的 lsof 手册](https://github.com/apple-oss-distributions/lsof/blob/main/lsof/lsof.man)
