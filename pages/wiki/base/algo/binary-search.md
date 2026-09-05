---
title: Binary Search
date: 2023-01-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 算法
categories:
  - 计算机科学
comment: true
---

python 代码实现

```python
def lower_bound(arr:list, target:int|float):
    """
    >>> arr = [1, 2, 3, 3, 3, 4, 5]
    >>> lower_bound(arr, 1)
    0
    >>> lower_bound(arr, 3)
    2
    >>> lower_bound(arr, 5)
    6
    >>> lower_bound(arr, 6)
    6
    """
    low = 0
    high = len(arr)-1

    while low < high:
        mid = (high+low) // 2
        if target < arr[mid]:
            high = mid
        elif target > arr[mid]:
            low = mid+1
        elif target == arr[mid]:
            high = mid
    return low

def upper_bound(arr:list, target:int|float):
    """
    >>> arr = [1, 2, 3, 3, 3, 4, 5]
    >>> upper_bound(arr, 3)
    5
    >>> upper_bound(arr, 1)
    1
    """
    low = 0
    high = len(arr)-1

    while low < high:
        mid = (high+low) // 2
        if target < arr[mid]:
            high = mid
        elif target > arr[mid]:
            low = mid+1
        elif target == arr[mid]:
            low = mid+1
    return low

if __name__ == '__main__':
    import doctest
    doctest.testmod(verbose=True)
```
