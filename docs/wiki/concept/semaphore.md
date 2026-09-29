---
title: Semaphore
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

信号量（Semaphore）是荷兰计算机科学家 Dijkstra 提出的一种用于进程同步与互斥的机制，通过两个原子操作 P（wait）和 V（signal）来访问。

## 整型信号量

```c
wait(S){
  while(S <= 0);  // 忙等待
  S--;
}

signal(S){
  S++;
}
```

## 记录型信号量

```c
typedef struct{
  int value;
  struct process *L;
} semaphore;
```

- `wait(S)`：S.value--，若小于 0 则阻塞当前进程
- `signal(S)`：S.value++，若小于等于 0 则唤醒等待队列中的进程

## 应用

- **互斥**：初始值为 1 的信号量保护临界区
- **同步**：初始值为 0 的信号量实现前驱关系
- **资源计数**：初始值为资源总数的信号量管理有限资源
