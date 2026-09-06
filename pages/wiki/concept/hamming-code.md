---
title: Hamming Code
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

海明码（Hamming Code）是一种纠错编码，通过在数据位中插入冗余校验位，不仅可以检测错误，还能定位并纠正单比特错误。

## 原理

- 在 $2^k$ 的位置插入校验位（第 1、2、4、8...位）
- 每个校验位负责校验特定位置的数据位
- 校验位的值使对应组的奇偶性为偶（或奇）
- 接收方通过重新计算校验位，确定错误位置

## 特点

- 能纠正单比特错误，检测双比特错误
- 冗余度较高，适合短距离、低误码率信道
- 常用于内存 ECC（Error-Correcting Code）
