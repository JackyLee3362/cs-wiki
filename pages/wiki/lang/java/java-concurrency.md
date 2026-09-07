---
title: Java Concurrency
description: Java 并发编程核心知识
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 并发
categories:
  - 编程语言
comment: true
---

> Java 并发编程（JUC）是 Java 高级开发的核心领域，涉及锁、原子类、线程池、并发集合等。

## 核心概念

### 锁的升级机制

JDK 1.6 之后引入了偏向锁、轻量级锁、重量级锁的锁升级机制，以减少无竞争情况下的同步开销。

| 锁类型 | 适用场景 | 开销 |
|--------|----------|------|
| 偏向锁 | 无竞争的单线程访问 | 最低 |
| 轻量级锁 | 低竞争、短持有 | 较低 |
| 重量级锁 | 高竞争、长持有 | 高（需要操作系统介入）|

### AQS（AbstractQueuedSynchronizer）

AQS 是 JUC 包中锁和同步器的底层框架，ReentrantLock、CountDownLatch、Semaphore 等都基于 AQS 实现。

核心思想：
- 使用一个 int 类型的 state 变量表示同步状态
- 使用 FIFO 双向队列管理等待线程
- 通过 CAS 操作 state 实现原子性

### volatile

volatile 保证可见性和有序性，但不保证原子性。适用于一写多读的场景。

### 常用并发工具

- **ReentrantLock**：可重入互斥锁，支持公平/非公平、可中断、超时获取
- **CountDownLatch**：等待一组线程完成
- **CyclicBarrier**：线程互相等待到达屏障
- **Semaphore**：控制同时访问的线程数量
- **CompletableFuture**：异步编程，支持链式组合

## 参考资料

- [互斥锁（mutex）的底层原理是什么？ - 知乎](https://www.zhihu.com/question/332113890/answer/2443011003) #todo
- [java偏向锁，轻量级锁与重量级锁为什么会相互膨胀? - 知乎](https://www.zhihu.com/question/53826114/answer/236363126) #todo
- [偏向锁 10 连问，被问懵圈了。。 - 知乎](https://zhuanlan.zhihu.com/p/610973663) #todo
- [从ReentrantLock的实现看AQS的原理及应用 - 美团技术团队](https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html) #todo
- [AQS - Lz_蚂蚱 - 博客园](https://www.cnblogs.com/leizia/p/18523403#shouldparkafterfailedacquire) #todo
- [Java并发编程：volatile关键字解析 - Matrix海子 - 博客园](https://www.cnblogs.com/dolphin0520/p/3920373.html) #todo
