---
title: Segment Tree
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

## 线段树 Python 代码片段

```py
# https://oi-wiki.org/ds/seg/
def build(s, t, p):
    """
    对 [s,t] 区间建立线段树
    当前根的编号为 p
    """
    if s == t:
        d[p] = a[s]
        return
    m = s + ((t - s) >> 1)
    # 移位运算符的优先级小于加减法，所以加上括号
    # 如果写成 (s + t) >> 1 可能会超出 int 范围
    build(s, m, p * 2)
    build(m + 1, t, p * 2 + 1)
    # 递归对左右区间建树
    d[p] = d[p * 2] + d[(p * 2) + 1]


def getsum(l, r, s, t, p):
    """
    [l, r] 为查询区间
    [s, t] 为当前节点包含的区间
    p 为当前节点的编号
    """
    if l <= s and t <= r:
        return d[p]  # 当前区间为询问区间的子集时直接返回当前区间的和
    m = s + ((t - s) >> 1)
    sum = 0
    if l <= m:
        sum = sum + getsum(l, r, s, m, p * 2)
    # 如果左儿子代表的区间 [s, m] 与询问区间有交集, 则递归查询左儿子
    if r > m:
        sum = sum + getsum(l, r, m + 1, t, p * 2 + 1)
    # 如果右儿子代表的区间 [m + 1, t] 与询问区间有交集, 则递归查询右儿子
    return sum


def update(l, r, c, s, t, p):
    """
    [l, r] 为修改区间
    c 为被修改的元素的变化量
    [s, t] 为当前节点包含的区间
    p 为当前节点的编号
    """
    if l <= s and t <= r:
        d[p] = d[p] + (t - s + 1) * c
        b[p] = b[p] + c
        return
    # 当前区间为修改区间的子集时直接修改当前节点的值, 然后打标记, 结束修改
    m = s + ((t - s) >> 1)
    if b[p] and s != t:
        # 如果当前节点的懒标记非空, 则更新当前节点两个子节点的值和懒标记值
        d[p * 2] = d[p * 2] + b[p] * (m - s + 1)
        d[p * 2 + 1] = d[p * 2 + 1] + b[p] * (t - m)
        # 将标记下传给子节点
        b[p * 2] = b[p * 2] + b[p]
        b[p * 2 + 1] = b[p * 2 + 1] + b[p]
        # 清空当前节点的标记
        b[p] = 0
    if l <= m:
        update(l, r, c, s, m, p * 2)
    if r > m:
        update(l, r, c, m + 1, t, p * 2 + 1)
    d[p] = d[p * 2] + d[p * 2 + 1]


if __name__ == '__main__':
    a = [0, 10, 11, 12, 13, 14]  # 原数组，第一个数没用
    n = len(a)-1
    d = [0]*4*n  # 线段树
    b = [0]*4*n  # lazy标记
    build(1, n, 1)  # 建树
    s = getsum(1, 3, 1, n, 1)
    print("数组a", a)
    print("数组d", d)
    print("求和s", s)
```
