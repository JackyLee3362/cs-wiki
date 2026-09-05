---
title: Union Find
date: 2023-01-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 算法
  - 数据结构
categories:
  - 计算机科学
comment: true
---

python 代码实现

```python
"""
disjoint set
并查集是一种非常好的数据结构
"""

from __future__ import annotations

class UnionFind:
    """
    >>> uf = UnionFind(5)
    >>> len(uf.rank)
    6
    >>> uf.find(2)
    2
    >>> uf.union(1, 3)
    >>> uf.find(1)
    1
    >>> uf.is_connected(1, 3)
    True
    """
    def __init__(self, n: int) -> None:
        self.uf = list(range(n+1))
        self.rank = [1] * (n+1) # 规模

    def find(self, x: int) -> int:
        r = x
        while self.uf[x] != x:
            x = self.uf[x]
        # 路径压缩
        while r != x:
          self.uf[r], r = x, self.uf[r]
        return x

    def union(self, x: int, y: int) -> None:
        fx = self.find(x)
        fy = self.find(y)
        if fx == fy:
            return
        if self.rank[fx] < self.rank[fy]: # 小规模往大规模合并
            self.rank[fy] += self.rank[fx]
            self.uf[fx] = fy
        else:
            self.rank[fx] += self.rank[fy]
            self.uf[fy] = fx
        return

    def is_connected(self, x: int, y: int) -> bool:
        return self.find(x) == self.find(y)

if __name__ == '__main__':

    import doctest
    doctest.testmod(verbose=True)
```
