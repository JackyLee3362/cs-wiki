---
title: RIP
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

RIP（Routing Information Protocol，路由信息协议）是一种分布式的基于距离向量的内部网关协议（IGP）。

## 特点

- 仅和相邻路由器交换信息
- 交换的信息是当前路由器所知道的全部路由表
- 按规定时间间隔交换（默认 30 秒）
- 采用「跳数 Hop Count」作为距离度量
- 最大可用距离为 15，16 表示不可达

## 优缺点

- 优点：实现简单，开销小
- 缺点：网络规模受限，慢收敛，「坏消息传得慢」

## 协议层次

RIP 是应用层协议，使用 **UDP** 传输数据（端口 520）。
