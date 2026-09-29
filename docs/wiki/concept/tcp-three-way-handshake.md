---
title: TCP Three Way Handshake
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 计算机网络
categories:
  - 计算机网络
comment: true
---

## 定义

TCP 三次握手（Three-Way Handshake）是 TCP 连接建立的过程，通过交换三个报文段来同步双方的序列号和确认号，确保双方收发能力正常。

## 过程

```
客户端                    服务器
  |    SYN=1, seq=x       |
  | --------------------> |
  |                       |
  |  SYN=1, ACK=1, seq=y  |
  |   ack=x+1             |
  | <-------------------- |
  |                       |
  |    ACK=1, seq=x+1     |
  |    ack=y+1            |
  | --------------------> |
```

1. **第一次握手**：客户端发送 SYN=1，seq=x
2. **第二次握手**：服务器发送 SYN=1, ACK=1，seq=y，ack=x+1
3. **第三次握手**：客户端发送 ACK=1，seq=x+1，ack=y+1

## 为什么是三次？

- 防止历史重复连接请求导致错误
- 同步双方初始序列号
- 确认双方收发能力正常

## 四次挥手

连接释放需要四次握手（Four-Way Wave）：

1. 客户端发送 FIN=1，seq=u
2. 服务器发送 ACK=1，seq=v，ack=u+1
3. 服务器发送 FIN=1，seq=w，ack=u+1
4. 客户端发送 ACK=1，seq=u+1，ack=w+1
