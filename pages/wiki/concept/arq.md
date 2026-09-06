---
title: ARQ
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

自动重传请求（ARQ, Automatic Repeat reQuest）是数据链路层和传输层常用的差错控制方法，通过接收方请求发送方重传出错或丢失的数据帧来实现可靠传输。

## 常见类型

- [[stop-and-wait|停等协议]]
- [[go-back-n|后退 N 帧协议 GBN]]
- [[selective-repeat|选择重传协议 SR]]

## 核心机制

- 确认帧 ACK
- 超时重传
- 序号机制
