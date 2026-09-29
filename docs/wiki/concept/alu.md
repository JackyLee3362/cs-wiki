---
title: ALU
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

ALU（Arithmetic Logic Unit，算术逻辑单元）是运算器的核心部件，负责执行算术运算和逻辑运算。

## 组成

- **加法器**：一位全加器、串行加法器、并行加法器
- **移位器**：逻辑移位、算术移位、循环移位
- **标志寄存器**：零标志 ZF、进位标志 CF、溢出标志 OF、符号标志 SF

## 一位全加器

- 和：$S_i = A_i \oplus B_i \oplus C_{i-1}$
- 进位：$C_i = A_i B_i + (A_i \oplus B_i) C_{i-1}$

## 并行加法器进位方式

- **串行进位**：逐级传递，速度慢
- **并行进位**：先行进位（CLA），速度快但电路复杂
- **组内并行、组间串行**：多级先行进位（BCLA），折中方案
