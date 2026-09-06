---
title: DHCP
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

DHCP（Dynamic Host Configuration Protocol，动态主机配置协议）是一种应用层协议，基于 UDP，用于自动分配 IP 地址及其他网络配置参数给网络中的主机。

## 工作原理

采用 C/S（客户/服务器）模型：

1. **Discover**：客户端广播 DHCP 发现报文
2. **Offer**：服务器响应 DHCP 提供报文
3. **Request**：客户端广播 DHCP 请求报文
4. **Acknowledge**：服务器发送 DHCP 确认报文

## 分配的参数

- IP 地址
- 子网掩码
- 默认网关
- DNS 服务器地址
- 租用期（Lease Time）

## 特点

- 自动分配，减少手动配置工作量
- 支持地址重用，提高地址利用率
- 支持静态绑定（为特定 MAC 地址分配固定 IP）
