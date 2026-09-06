---
title: Shannon Theorem
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

香农定理（Shannon's Theorem）指出：在有噪声的信道中，信道的极限数据传输速率为：

$$极限数据传输速率 = W \log_2(1 + S/N) \quad (单位：b/s)$$

其中 $W$ 为信道带宽（Hz），$S/N$ 为信噪比（信号功率与噪声功率之比）。

## 信噪比

信噪比通常用分贝（dB）表示：

$$信噪比(dB) = 10 \log_{10}(S/N)$$

## 应用

- 用于计算有噪声信道的理论最大传输速率
- 指出了通过提高带宽或信噪比来增加信道容量的方法
- 是信息论的基础定理之一
