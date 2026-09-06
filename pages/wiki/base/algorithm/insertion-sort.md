---
title: Insertion Sort
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 数据结构
  - 算法
categories:
  - 计算机科学
comment: true
---

# 插入排序 Insertion Sort

插入排序的基本思想是将待排序元素插入到已排好序的有序序列中的合适位置。

## 直接插入排序

```cpp
void InsertSort(int A[], int n) {
    int i, j;
    for (i = 2; i <= n; i++)
        if (A[i] < A[i - 1]) {
            A[0] = A[i];                 // A[0] 作为哨兵
            for (j = i - 1; A[0] < A[j]; j--)
                A[j + 1] = A[j];         // 后移
            A[j + 1] = A[0];             // 插入
        }
}
```

- 最好情况（已有序）：$O(n)$
- 最坏情况（逆序）：$O(n^2)$
- 平均情况：$O(n^2)$
- 稳定性：稳定
- 空间复杂度：$O(1)$

## 折半插入排序

在查找插入位置时采用折半查找，减少比较次数，但元素移动次数不变。

## 希尔排序 Shell Sort

希尔排序（缩小增量排序）将序列按增量分组，组内进行直接插入排序，然后逐步缩小增量，直至增量为 1。希尔排序的时间复杂度约为 $O(n^{1.3})$，是不稳定的排序。
