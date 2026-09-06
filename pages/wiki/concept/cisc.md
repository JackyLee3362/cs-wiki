---
title: CISC
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 计算机组成原理
categories:
  - 计算机科学
comment: true
---

## 定义

CISC（Complex Instruction Set Computer，复杂指令集计算机）是一种指令集架构设计理念，指令数量多、寻址方式丰富、指令长度可变。

## 特点

- 指令数量多（数百条）
- 寻址方式多
- 指令长度可变
- 采用微程序控制器
- 部分复杂指令使用频率低

## 代表

x86 架构（Intel、AMD）

## 与 RISC 对比

| 特性 | CISC | RISC |
|------|------|------|
| 指令数 | 多 | 少 |
| 指令长度 | 可变 | 固定 |
| 寻址方式 | 多 | 少 |
| 控制器 | 微程序 | 硬布线 |
| 通用寄存器 | 较少 | 较多 |
| 设计目标 | 减少程序代码量 | 提高指令执行速度 |
