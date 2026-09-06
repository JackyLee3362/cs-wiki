---
title: Instruction Pipeline
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

指令流水线（Instruction Pipeline）是将指令执行过程分解为多个阶段，使多条指令重叠执行的技术，是提高 CPU 吞吐率的核心机制。

## 五级流水线

1. **IF**（取指，Instruction Fetch）
2. **ID**（译码，Instruction Decode）
3. **OF**（取操作数，Operand Fetch）
4. **EX**（执行，Execute）
5. **WB**（写回，Write Back）

## 性能指标

- **吞吐率** $TP = \frac{n}{T_k}$，最大 $TP_{max} = \frac{1}{\Delta t}$
- **加速比** $SP = \frac{nm}{m+n-1}$
- **效率**：各功能段的利用率

## 高级流水线

- **超标量流水线**：每个时钟周期发射多条指令
- **超流水线**：进一步细分流水线阶段
- **超长指令字 VLIW**：编译器静态调度多条指令并行执行

## 相关问题

见 [[pipeline-hazard]]。
