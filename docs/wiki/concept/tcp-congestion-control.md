---
title: TCP Congestion Control
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

TCP 拥塞控制（Congestion Control）是 TCP 防止网络拥塞的机制，通过动态调整发送窗口大小来控制数据注入网络的速率。

## 关键参数

- **cwnd（拥塞窗口）**：发送方根据网络拥塞程度设置的窗口大小
- **rwnd（接收窗口）**：接收方通告的窗口大小
- **ssthresh（慢开始门限）**：慢开始和拥塞避免的分界点
- **发送窗口上限** = min(rwnd, cwnd)

## 算法

### 慢开始（Slow Start）

- cwnd 从 1 开始，每经过一个 RTT 翻倍
- 当 cwnd < ssthresh 时使用
- 呈指数增长

### 拥塞避免（Congestion Avoidance）

- 当 cwnd >= ssthresh 时使用
- 每经过一个 RTT，cwnd 加 1
- 呈线性增长

### 快重传（Fast Retransmit）

- 收到 3 个重复 ACK 时，立即重传丢失报文
- 无需等待重传计时器超时

### 快恢复（Fast Recovery）

- 收到 3 个重复 ACK 后，ssthresh = cwnd / 2，cwnd = ssthresh
- 直接进入拥塞避免阶段，而非慢开始
