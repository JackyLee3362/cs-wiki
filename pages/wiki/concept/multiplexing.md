---
title: Multiplexing
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

多路复用（Multiplexing）是指在一条物理信道上同时传输多路信号的技术，以提高信道利用率。

## 分类

| 技术 | 英文 | 原理 |
|:---|:---|:---|
| 频分多路复用 | FDM | 不同信号占用不同频段 |
| 时分多路复用 | TDM | 不同信号轮流占用整个信道 |
| 统计时分多路复用 | STDM | 动态分配时隙，提高利用率 |
| 波分多路复用 | WDM | 光纤中不同波长的光信号复用 |
| 码分多路复用 | CDM | 不同信号使用正交码片序列 |

## 应用场景

- FDM：广播电台、有线电视
- TDM：数字电话系统
- WDM：光纤通信骨干网
- CDM：CDMA 移动通信
