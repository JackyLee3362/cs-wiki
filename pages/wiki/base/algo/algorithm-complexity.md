---
title: Algorithm Complexity Analysis
date: 2023-01-02
draft: false
author: JackyLee
tags:
  - 基础知识
  - 算法
categories:
  - 计算机科学
comment: true
---

## 时间复杂度分析

渐进分析 Asymptotic analysis

### 上界 O-natation: Upper-Bound

如果存在 $c>0,n_0>0$，对于所有的 $n\ge n_0$ 都有 $0\le f(n) \le cg(n)$，则$f(n) = O(g(n))$

比如说 $2n^2 = O(n^3)$，我们取$c=1,n_0=2$

### 下界 Ω-notation (lower bounds)

如果存在 $c>0,n_0>0$，对于所有的 $n\ge n_0$ 都有 $0\le cg(n) \le f(n)$，则 $f(n) = Ω(g(n))$

比如说 $\sqrt{n} = \Omega(\lg n)$，我们取$c=1,n_0=16$

### 渐进界 Θ-notation (tight bounds)

如果存在 $c_1>0,c_2>0,n_0>0$，对于所有的 $n\ge n_0$ 都有 $0\le c_1g(n) \le f(n) \le c_2g(n)$

比如说 $n^2+2n = Θ(n^2)$

正确性分析与证明、时间复杂度分析、空间复杂度分析、最坏情况分析、平均情况分析、聚合分析
