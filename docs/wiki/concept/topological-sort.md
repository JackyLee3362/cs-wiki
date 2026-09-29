---
title: Topological Sort
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

拓扑排序（Topological Sort）是对有向无环图（DAG）的顶点进行线性排序，使得对于图中的每条有向边 $(u, v)$，u 在排序中总位于 v 的前面。

## 算法思想（Kahn 算法）

1. 计算所有顶点的入度
2. 将入度为 0 的顶点入队
3. 依次出队，将顶点加入拓扑序列
4. 对每个出队顶点的邻接顶点，入度减 1，若入度变为 0 则入队
5. 重复步骤 3-4，直到队列为空

## 判定有向图是否有环

若拓扑序列中顶点数小于图中顶点数，则图存在环。

## 应用

- 任务调度（依赖关系处理）
- 编译顺序确定
- Makefile 依赖解析
- AOV 网（Activity On Vertex Network）
