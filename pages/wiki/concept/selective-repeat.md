---
title: Selective Repeat
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

选择重传协议（Selective Repeat, SR）只重传出错或丢失的个别帧，而不是像 GBN 那样重传一批帧。

## 特点

- 发送窗口 + 接收窗口 $\le 2^n$
- 通常取发送窗口 = 接收窗口 = $2^{n-1}$
- 接收方可以暂存失序到达的正确帧
- 逐个确认，非累积确认
- 只重传出错或丢失的帧

## 与 GBN 对比

| 特性 | GBN | SR |
|------|-----|-----|
| 接收窗口 | 1 | > 1 |
| 缓存需求 | 无需缓存 | 需要缓存 |
| 重传量 | 大 | 小 |
| 复杂度 | 低 | 高 |
