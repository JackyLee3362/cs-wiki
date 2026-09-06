---
title: Stack
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

# 栈 Stack

栈（Stack）是只允许在一端进行插入或删除操作的线性表。

```
|     |  <-- 栈顶（top）
|     |
| ... |
|  b  |
|  a  |  <-- 栈底（bottom）
+-----+
```

## 特性

- 后进先出（Last In First Out, LIFO）
- 栈顶（top）：允许插入和删除的一端
- 栈底（bottom）：不允许操作的一端

## 数学性质

$n$ 个不同元素依次进栈，出栈序列的个数为卡特兰数（Catalan Number）：

$$
\frac{1}{n+1}C_{2n}^{n}
$$

## 基本操作

| 操作 | 说明 |
| --- | --- |
| InitStack(&S) | 初始化栈 |
| StackEmpty(S) | 判断 S 是否为空栈 |
| Push(&S, e) | 入栈（压栈） |
| Pop(&S, &e) | 出栈（弹栈） |
| GetTop(S, &e) | 读取栈顶元素 |
| DestroyStack(&S) | 销毁栈 |

## 顺序存储结构

```cpp
#define MAXSIZE 100
typedef struct {
    ElemType data[MAXSIZE];
    int top;  // 栈顶指针
} SqStack;
```

顺序栈的基本运算包括：初始化、判栈空、入栈、出栈、读栈顶元素。

## 链式存储结构

```cpp
typedef struct StackNode {
    SElemType data;
    struct StackNode *next;
} StackNode, *LinkStack;
```

## 应用

栈常用于括号匹配、表达式求值（中缀转后缀）、递归调用等场景。
