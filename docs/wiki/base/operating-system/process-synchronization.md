---
title: 进程同步
alias:
  - Process Synchronization
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 操作系统
categories:
  - 计算机科学
comment: true
---

## 基本概念

- 临界资源：一次仅允许一个进程使用的资源
- 临界区（critical section）：访问临界资源的代码。临界区访问分为进入区、临界区、退出区、剩余区

```c
do{
  entry section;    // 进入区
  critical section; // 临界区
  exit section;     // 退出区
  remainder section;// 剩余区
} while(true)
```

- 同步：直接制约关系（相互合作）
- 互斥：间接制约关系（共享资源竞争）

同步机制应遵循的原则：

- 空闲让进
- 忙则等待
- 有限等待：保证请求访问的进程能在有限时间内进入临界区
- 让权等待：不能进入临界区时应立即释放处理器，防止忙等待

## 实现临界区互斥的基本方法

- 软件实现方法：单标志法、双标志法先检查、双标志法后检查、Peterson 算法
- 硬件实现方法：
  - 中断屏蔽方法（关中断）
  - 硬件指令方法：TestAndSet 指令、Swap 指令
  - 优点：适用于任意数目的进程（单/多处理机），简单且容易验证正确性
  - 缺点：等待进入临界区时耗费处理机时间，不能实现让权等待

## 信号量机制

信号量只能被两个标准原语 wait(S) 和 signal(S)（P 操作和 V 操作）访问。

整型信号量：

```c
wait(S){
  while(S <= 0);
  S--;
}

signal(S){
  S++;
}
```

记录型信号量：

```c
typedef struct{
  int value;            // 资源数目
  struct process *L;    // 等待队列
} semaphore;
```

```c
void wait(semaphore S){   // 相当于申请资源
  S.value--;
  if(S.value < 0){
    add this process to S.L;
    block(S.L);
  }
}

void signal(semaphore S){ // 相当于释放资源
  S.value++;
  if(S.value <= 0){
    remove a process P from S.L;
    wakeup(P);
  }
}
```

利用信号量实现同步：

```c
semaphore S = 0;
P1(){
  x;      // 语句 x
  V(S);   // 告诉进程 2，语句 x 已完成
}
P2(){
  P(S);   // 检查语句 x 是否运行完成
  y;      // 检查无误，运行语句 y
}
```

利用信号量实现互斥：`P(S)` → 临界区 → `V(S)`（P、V 在同一进程中，S 初值为 1）。利用信号量还可实现前驱关系。

## 管程 Monitor

统一管理共享资源的所有访问，实现进程互斥。管程由代表共享资源的数据结构及对该数据结构实施操作的一组过程组成的资源管理程序。组成：

- 管程的名称
- 局部于管程内部的共享结构数据说明
- 对该数据结构进行操作的一组过程（或函数）
- 对局部于管程内部的共享数据设置初始值的语句

条件变量（condition）：`x.wait`、`x.signal`。

## 经典同步问题

- 生产者-消费者问题：类似管道通信中的 read 和 write
- 读者-写者问题
- 哲学家进餐问题
- 吸烟者问题
