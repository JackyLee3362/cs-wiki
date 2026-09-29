---
title: Critical Section
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 操作系统
categories:
  - 计算机科学
comment: true
---

## 定义

临界区（Critical Section）是访问临界资源的那段代码。临界资源是一次仅允许一个进程使用的资源。

## 临界资源访问过程

```c
do{
  entry section;      // 进入区：申请进入临界区
  critical section;   // 临界区：访问临界资源
  exit section;       // 退出区：释放临界区
  remainder section;  // 剩余区：其他代码
} while(true)
```

## 同步机制原则

- **空闲让进**：临界区空闲时，允许请求进入的进程立即进入
- **忙则等待**：已有进程进入临界区，其他进程必须等待
- **有限等待**：保证请求进程在有限时间内进入临界区
- **让权等待**：不能进入临界区的进程应立即释放 CPU（非必须）

## 实现方法

- 软件方法：单标志法、双标志法、Peterson 算法
- 硬件方法：中断屏蔽、TestAndSet 指令、Swap 指令
- 信号量方法
- 管程方法
