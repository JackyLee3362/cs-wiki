---
title: Prim's Algorithm
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 数据结构
categories:
  - 计算机科学
comment: true
---

## 定义

Prim 算法（普里姆算法）是求解连通无向图最小生成树（MST）的贪心算法。

## 算法思想

1. 从任意起始顶点开始，将其加入 MST
2. 在所有连接 MST 内顶点与 MST 外顶点的边中，选择权值最小的边
3. 将该边及对应顶点加入 MST
4. 重复步骤 2-3，直到所有顶点都加入 MST

## 时间复杂度

- 邻接矩阵：$O(V^2)$
- 邻接表 + 优先队列：$O(E \log V)$

## 与 Kruskal 算法对比

| 特性 | Prim | Kruskal |
|------|------|---------|
| 思想 | 加点法 | 加边法 |
| 适用 | 稠密图 | 稀疏图 |
| 时间复杂度 | $O(V^2)$ / $O(E\log V)$ | $O(E\log E)$ |
| 关键操作 | 选择最小边连接树 | 按权排序 + 并查集 |
