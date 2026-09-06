---
title: FTP
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

FTP（File Transfer Protocol，文件传输协议）是互联网上使用最广泛的文件传输协议，属于应用层协议。

## 特点

- 使用 **TCP** 可靠传输
- 采用双连接方式：控制连接和数据连接
- 带外传输（Out-of-band）：控制信息和数据分开传输

## 两种连接

- **控制连接**：端口 21，在整个会话期间保持打开
- **数据连接**：端口 20，用于实际传输文件数据

## 两种传输模式

- **主动模式 PORT**：服务器主动连接客户端数据端口
- **被动模式 PASV**：客户端连接服务器开放的随机端口

## 相关协议

- **NFS**（Network File System）：网络文件系统
