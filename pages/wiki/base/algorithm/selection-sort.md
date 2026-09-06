---
title: 选择排序
alias:
  - Selection Sort
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

选择排序的基本思想是每一趟在待排序元素中选取关键字最小（或最大）的元素，放到已排序序列的末尾。

## 简单选择排序

```cpp
void SelectSort(int A[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (A[j] < A[min]) min = j;   // 找到最小元素下标
        if (min != i) swap(A[i], A[min]);
    }
}
```

## 复杂度

- 时间复杂度：$O(n^2)$（与初始序列无关）
- 稳定性：不稳定
- 空间复杂度：$O(1)$
