---
title: Nyquist Theorem
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

奈奎斯特定理（Nyquist's Theorem）指出：在理想低通信道下，信道的极限数据传输速率为：

$$极限数据传输速率 = 2W \log_2 V \quad (单位：b/s)$$

其中 $W$ 为信道带宽，$V$ 为码元离散电平数目。

## 采样定理

$$f_{采样} \ge 2 f_{最大频率}$$

即采样频率必须大于等于信号最高频率的两倍，才能无失真地恢复原始信号。

## 应用

- 用于计算无噪声信道的理论最大传输速率
- 是数字通信系统设计的理论基础
- 与香农定理结合可全面评估信道容量
