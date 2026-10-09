---
title: netstat
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

`netstat` 显示网络连接和套接字状态。macOS 与 Linux 的选项不同。

## macOS：查看 TCP 监听端口

```sh
netstat -an -p tcp | grep LISTEN
```

`-a` 包含监听套接字，`-n` 用数字显示地址和端口，macOS 的 `-p tcp` 指定协议，**不是显示 PID**。需要进程名和 PID 时使用 [lsof](docs/app/lsof.md)。

UDP 没有 `LISTEN` 状态；可用 `netstat -an -p udp` 查看 UDP 套接字，但结果不能按 `LISTEN` 过滤。

## Linux：查看监听端口及进程

```sh
netstat -tunlp
```

Linux 下 `-t` / `-u` 选择 TCP / UDP，`-n` 显示数字地址，`-l` 只列监听套接字，`-p` 显示关联进程。该组合**不能直接照搬到 macOS**。

示例输出：

```text
Proto Recv-Q Send-Q Local Address       Foreign Address     State       PID/Program name
tcp        0      0 0.0.0.0:80          0.0.0.0:*           LISTEN      1234/nginx
tcp        0      0 127.0.0.1:3306      0.0.0.0:*           LISTEN      2345/mysqld
```

### Local Address 解释

`0.0.0.0:80` 表示监听本机所有 IPv4 地址的 80 端口；能否从其他设备访问还取决于防火墙和网络路径。

`127.0.0.1:3306` 只监听本机 IPv4 环回地址，其他设备不能直接通过该地址连接。

### Foreign Address 解释

监听套接字尚未与某个远端连接，所以 `Foreign Address` 通常显示为 `0.0.0.0:*`；它不表示已经对外可达。

相关问题：[macOS 如何查看监听端口？](docs/issue/macos-listening-ports.md)

## 参考资料

- [Apple 开源的 netstat 手册](https://github.com/apple-oss-distributions/network_cmds/blob/main/netstat.tproj/netstat.1)
