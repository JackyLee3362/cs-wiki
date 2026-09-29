---
title: Java Network Programming
description: Java 网络编程基础
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - 网络
categories:
  - 编程语言
comment: true
---

> Java 网络编程基于 Socket API，支持 TCP 和 UDP 两种传输协议。

## 网络编程三要素

- **IP 地址**：网络中设备的唯一标识（IPv4 / IPv6）
- **端口**：设备上应用程序的唯一标识（0~65535，1024 以下为系统保留）
- **协议**：数据传输的规则（TCP / UDP）

## TCP vs UDP

| 特性 | TCP | UDP |
|------|-----|-----|
| 连接 | 面向连接 | 无连接 |
| 可靠性 | 可靠传输，保证顺序 | 不保证可靠 |
| 开销 | 较大（三次握手、四次挥手）| 较小 |
| 适用场景 | 文件传输、HTTP、数据库 | 音视频、实时游戏、DNS |

### TCP 三次握手

1. 客户端发送 SYN 到服务器
2. 服务器回复 SYN+ACK
3. 客户端发送 ACK，连接建立

### TCP 四次挥手

1. 主动方发送 FIN
2. 被动方回复 ACK
3. 被动方发送 FIN
4. 主动方回复 ACK，连接关闭

## Java API

- `InetAddress`：IP 地址封装
- `Socket` / `ServerSocket`：TCP 客户端/服务端
- `DatagramSocket` / `DatagramPacket`：UDP 通信

## 参考资料

- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
