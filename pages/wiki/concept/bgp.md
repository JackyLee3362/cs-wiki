---
title: BGP
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

BGP（Border Gateway Protocol，边界网关协议）是外部网关协议（EGP）的事实标准，用于自治系统（AS）之间的路由选择。

## 特点

- 应用层协议，基于 **TCP**（端口 179）
- 路径向量协议，不仅记录距离还记录完整路径
- 支持策略路由，可基于多种属性做路由决策
- 可靠传输，使用 TCP 保证

## 关键概念

- **自治系统 AS**（Autonomous System）：同一管理机构管理的路由器集合
- **域内路由**：AS 内部使用 IGP（如 RIP、OSPF）
- **域间路由**：AS 之间使用 EGP（BGP）

## 三种路由协议对比

| 协议 | 类型 | 算法 | 传输 | 应用场景 |
|------|------|------|------|----------|
| RIP | IGP | 距离向量 | UDP | 小型网络 |
| OSPF | IGP | 链路状态 | IP | 大型网络 |
| BGP | EGP | 路径向量 | TCP | AS 之间 |
