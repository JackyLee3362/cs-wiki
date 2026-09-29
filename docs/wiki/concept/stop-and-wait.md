---
title: Stop-and-Wait
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

停等协议（Stop-and-Wait）是最简单的 ARQ 协议，发送方每发送一帧后必须停止发送，等待接收方的确认帧 ACK 到达后才能继续发送下一帧。

## 特点

- 发送窗口 = 1，接收窗口 = 1
- 实现简单，但信道利用率低
- 需要处理确认帧丢失、数据帧丢失、重复帧等问题

## 性能

信道利用率 = $rac{T_{帧}}{T_{帧} + 2T_{传播}}$，当传播时延较大时利用率很低。
