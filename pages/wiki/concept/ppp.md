---
title: PPP
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

PPP（Point-to-Point Protocol，点对点协议）是数据链路层最常用的广域网协议之一，用于通过串行线路进行点对点通信。

## 特点

- 面向字节的协议（对比 HDLC 面向比特）
- 提供差错检测但不提供纠错，不可靠传输
- 不使用序号和确认机制
- 仅支持点对点链路，不支持多点线路
- 支持全双工链路
- 两端可运行不同网络层协议

## 组成部分

1. **LCP**（Link Control Protocol）：链路控制协议，建立、配置、测试数据链路连接
2. **NCP**（Network Control Protocol）：网络控制协议，支持不同网络层协议
3. **封装方法**：将 IP 数据报封装到串行链路，受 MTU 限制

## 帧格式

- 标志字段 0x7E
- 地址字段 0xFF
- 控制字段 0x03
- 协议字段 2B
- 信息字段 0~1500B
- FCS 字段

## 认证方式

- PAP（Password Authentication Protocol）
- CHAP（Challenge-Handshake Authentication Protocol）
