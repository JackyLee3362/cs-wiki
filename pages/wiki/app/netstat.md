---
title: netstat
date: 2025-07-04
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 安装

## 使用

```sh
netstat -nl | grep "端口"
```

## FAQ: 如何查找一个进程的 http 端口

```sh
# linux
netstat -tunlp
# -t 表示 tcp
# -u 表示 udp
# -n 表示 拒绝显示别名，能显示数字的端口全部转化为数字
# -l 表示 仅列出在Listen(监听)的服务状态
# -p 表示 显示建立相关链接的程序名PID

# 输出
Proto Recv-Q Send-Q Local Address       Foreign Address     State       PID/Program name
tcp        0      0 0.0.0.0:80          0.0.0.0:*           LISTEN      1234/nginx
tcp        0      0 127.0.0.1:3306      0.0.0.0:*           LISTEN      2345/mysqld
```

### Local Address 解释

0.0.0.0:xxxx 意思是监听所有本地 IP 地址的 xxxx 端口（即外网 IP、内网 IP、localhost 都包括）。
比如 0.0.0.0:80 表示该服务（如 nginx）监听本机所有网卡上的 80 端口，只要有请求来，不管用哪个网卡、本地还是远程，都能接受。

如果你看到 127.0.0.1:3306，就是只监听本地环回的 3306 端口，外网无法访问。

### Foreign Address 解释

Foreign Address 对于监听（LISTEN）状态通常显示为 `0.0.0.0:*`。
这里代表“还没有与任何远程主机建立连接”，或“可以接受来自任意 IP 的连接”。

- `*` 表示远程端口不限（任何端口都可以连接过来）。

## 参考资料
