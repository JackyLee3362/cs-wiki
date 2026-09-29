---
title: ARP
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

ARP（Address Resolution Protocol，地址解析协议）是一种网络层协议，用于将 IP 地址解析为对应的 MAC 地址，以便在同一局域网内发送数据帧。

## 工作原理

1. 主机需要发送 IP 数据报到同一局域网内的另一台主机
2. 检查 ARP 缓存表，若已有映射则直接使用
3. 若缓存中没有，发送 ARP 请求广播（目标 MAC 为 FF-FF-FF-FF-FF-FF）
4. 目标主机收到请求后，单播回复 ARP 响应
5. 请求主机收到响应后，更新 ARP 缓存并发送数据

## 特点

- 解决同一局域网内 IP 地址到 MAC 地址的映射
- ARP 请求广播发送，ARP 响应单播发送
- 跨网段通信时，ARP 解析的是下一跳路由器的 MAC 地址
- RARP（反向 ARP）用于 MAC 地址解析 IP 地址（已很少使用）
