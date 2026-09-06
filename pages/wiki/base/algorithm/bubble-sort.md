---
title: Bubble Sort
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

# 冒泡排序 Bubble Sort

冒泡排序属于交换排序，通过相邻元素两两比较交换，使最大（或最小）的元素像气泡一样逐渐「冒」到序列的一端。

## 基本思想

每一趟从前往后（或从后往前）比较相邻元素，若逆序则交换，每趟确定一个元素的最终位置。

```cpp
void BubbleSort(int A[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool flag = false;                 // 标记本趟是否发生交换
        for (int j = n - 1; j > i; j--)
            if (A[j] < A[j - 1]) {
                swap(A[j], A[j - 1]);
                flag = true;
            }
        if (!flag) return;                 // 本趟未交换，已有序
    }
}
```

## 复杂度

- 最好情况（已有序）：$O(n)$
- 最坏情况（逆序）：$O(n^2)$
- 平均情况：$O(n^2)$
- 稳定性：稳定
- 空间复杂度：$O(1)$
