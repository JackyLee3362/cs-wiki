---
title: Queue
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 数据结构
categories:
  - 计算机科学
comment: true
---

# 队列 Queue

队列（Queue）简称队，是一种操作受限的线性表，只允许在表的一端进行插入，而在另一端进行删除。

## 特性

- 先进先出（First In First Out, FIFO）
- 入队（进队）：在队尾插入元素
- 出队（离队）：在队头删除元素

## 基本操作

| 操作 | 说明 |
| --- | --- |
| InitQueue(&Q) | 初始化队列 |
| QueueEmpty(Q) | 判断队列是否为空 |
| EnQueue(&Q, e) | 入队（插入元素） |
| DeQueue(&Q, &e) | 出队（删除元素） |
| GetHead(Q, &e) | 读取队头元素 |

## 顺序存储结构（循环队列）

```cpp
#define MAXSIZE 100  // 最大队列长度
typedef struct {
    QElemType *base;  // 初始化的动态分配存储空间
    int front;        // 队头指针
    int rear;         // 队尾指针
} SqQueue;
```

循环队列利用模运算（%）将顺序队列首尾相连。为了区分队空和队满，常用三种方式：

- 牺牲一个单元来区分队空和队满
- 类型中增设表示元素个数的数据成员
- 类型中增设 tag 数据成员

## 链式存储结构

```cpp
typedef struct LinkNode {
    ElemType data;
    struct LinkNode *next;
} LinkNode;

typedef struct {
    LinkNode *front, *rear;
} LinkQueue;
```

## 双端队列

双端队列允许两端都可以进行入队和出队操作，其元素逻辑结构仍是线性结构：

- 输出受限的双端队列：允许在一端进行插入和删除，另一端只允许插入
- 输入受限的双端队列：允许在一端进行插入和删除，另一端只允许删除

## 应用

队列常用于层次遍历、操作系统缓冲区、广度优先搜索（BFS）等场景。
