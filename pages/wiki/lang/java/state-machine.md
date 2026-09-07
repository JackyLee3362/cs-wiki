---
title: Java State Machine
description: Java 状态机框架选型
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 状态机
categories:
  - 编程语言
comment: true
---

> 状态机（State Machine）用于管理对象在有限状态之间的流转，常见于订单、审批、设备控制等场景。

## 常用框架对比

| 框架 | 适用场景 | 特点 | 维护状态 |
|------|----------|------|----------|
| **Spring StateMachine** | Spring 项目 + 复杂流程 | 与 Spring 生态深度集成 | 活跃 |
| **Squirrel-Foundation** | 轻量项目 + 高性能 | 无依赖，性能好 | 2022 年更新 |
| **COLA StateMachine** | 高并发 + 分布式 | 阿里出品，轻量 | 活跃 |
| **Stateful4j** | 简单状态 + 快速原型 | API 简洁 | 2014 年停止更新 |
| **Apache SCXML** | 跨平台 + 标准配置 | 基于 W3C SCXML 标准 | 活跃 |
| **Akka FSM** | 分布式集群 + 响应式 | Actor 模型 | 活跃 |

## 选型建议

- **Spring 项目首选**：Spring StateMachine
- **追求轻量高性能**：Squirrel-Foundation 或 COLA StateMachine
- **需要可视化配置**：Apache SCXML
- **已有 Akka 生态**：Akka FSM
