---
title: Manchester Encoding
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

曼彻斯特编码（Manchester Encoding）是一种自同步的数字编码方式，每位数据中间都有跳变，跳变既作为时钟信号又作为数据信号。

## 特点

- 每位数据中间都有电平跳变
- 从高到低跳变表示 1，从低到高跳变表示 0（或相反）
- 自带时钟同步信息，无需额外传输时钟信号
- 以太网（Ethernet）采用曼彻斯特编码
- 编码效率为 50%（即波特率是比特率的两倍）

## 差分曼彻斯特编码

差分曼彻斯特编码（Differential Manchester Encoding, DME）是曼彻斯特编码的改进：

- 每位数据中间都有跳变（仅用于时钟同步）
- 位开始处是否有跳变表示数据：有跳变表示 0，无跳变表示 1
- 抗干扰能力更强
