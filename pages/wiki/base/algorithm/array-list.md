---
title: Array List
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

# 顺序表 Array List

线性表的顺序存储称为顺序表（Sequence List），表中元素的逻辑顺序与其物理顺序相同。

## 结构类型定义

- 静态分配
- 动态分配

```cpp
// C 的动态分配语句
L.data = (ElemType*)malloc(sizeof(ElemType) * InitSize);

// C++ 的动态分配语句
L.data = new ElemType[InitSize];
```

## 基本操作的实现

### 插入操作

- 最好情况：表尾插入，时间复杂度 $O(1)$
- 最坏情况：表头插入，时间复杂度 $O(n)$
- 平均情况：时间复杂度 $O(n)$

```cpp
bool ListInsert(SqList &L, int i, ElemType e) {
    if (i < 1 || i > L.length + 1)   // i 值不合法
        return false;
    else if (L.length >= MAXSIZE)    // 当前存储空间已满
        return false;
    for (int j = L.length; j >= i; j--)
        L.elem[j] = L.elem[j - 1];   // 插入位置及之后位置后移
    L.elem[i - 1] = e;               // 将新元素放入第 i 个位置
    L.length++;                      // 表长增加 1
    return true;
}
```

### 删除操作

- 最好情况：删除表尾元素，时间复杂度 $O(1)$
- 最坏情况：删除表头元素，时间复杂度 $O(n)$
- 平均情况：时间复杂度 $O(n)$

```cpp
bool ListDelete(SqList &L, int i, ElemType &e) {
    if (i < 1 || i > L.length)       // 判断 i 值是否合理
        return false;
    e = L.data[i - 1];
    for (int j = i; j < L.length; j++)
        L.elem[j - 1] = L.elem[j];
    L.length--;
    return true;
}
```

### 按值查找（顺序查找）

- 最好情况：查找元素在表头，时间复杂度 $O(1)$
- 最坏情况：查找元素在表尾（或不存在），时间复杂度 $O(n)$
- 平均情况：时间复杂度 $O(n)$
