---
title: 链表
alias:
  - Linked List
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

线性表的链式存储称为链表，其中单链表是最基本的形式。

## 单链表

结点类型定义：

```cpp
typedef struct LNode {       // 声明结点的类型和指向结点的指针类型
    ElemType data;           // 结点的数据域
    struct LNode *next;      // 结点的指针域
} LNode, *LinkList;          // LinkList 为指向结构体 LNode 的指针类型
```

通常用头指针来表示一个单链表。

### 基本操作

单链表的基本操作包括：

- 建立（头插法 / 尾插法），时间复杂度 $O(n)$
- 按序号查找结点值，时间复杂度 $O(n)$
- 按值查找表结点，时间复杂度 $O(n)$
- 插入结点，时间复杂度 $O(n)$（开销主要在查找第 i-1 个元素）
- 删除结点，时间复杂度 $O(n)$
- 求表长

## 双链表

结点类型定义：

```cpp
typedef struct DuLNode {
    ElemType data;
    struct DuLNode *prior, *next;
} DuLNode, *DuLinkList;
```

双链表在插入、删除时需要同时维护 `prior` 和 `next` 两个指针。

## 循环链表

- 循环单链表：最后一个结点的指针指向头结点
- 循环双链表：首尾结点的指针相互指向

## 静态链表

静态链表借助数组来描述线性表的链式存储，结点类型定义：

```cpp
#define MaxSize 100
typedef struct {
    ElemType data;
    int next;
} SlinkList[MaxSize];
```

## 顺序表与链表的比较

| 维度             | 顺序表               | 链表                               |
| ---------------- | -------------------- | ---------------------------------- |
| 存储（读写）方式 | 顺序存储，随机存取   | 链式存储，顺序存取                 |
| 查找             | $O(1)$（按下标）     | $O(n)$                             |
| 插入/删除        | $O(n)$（需移动元素） | $O(n)$（需查找位置），但仅修改指针 |
| 空间分配         | 需预分配，可能浪费   | 动态分配，按需申请                 |
