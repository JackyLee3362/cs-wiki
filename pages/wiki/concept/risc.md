---
title: RISC
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

RISC（Reduced Instruction Set Computer，精简指令集计算机）是一种指令集架构设计理念，通过减少指令种类、简化指令格式来提高执行效率。

## 特点

- 指令数量少（几十条）
- Load/Store 架构：只有 Load/Store 指令能访问内存
- 硬布线控制器
- 通用寄存器多
- 指令长度固定
- 有利于流水线执行
- 单周期指令为主

## 代表

ARM、MIPS、RISC-V、SPARC、PowerPC

## 优势

- 指令执行速度快
- 流水线效率高
- 功耗低（适合移动设备）
- 设计简单，芯片面积小
