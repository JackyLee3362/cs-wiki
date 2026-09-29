---
title: Banker's Algorithm
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 概念
  - 操作系统
categories:
  - 计算机科学
comment: true
---

## 定义

银行家算法（Banker's Algorithm）是 Dijkstra 提出的一种死锁避免算法，通过模拟资源分配来检测系统是否处于安全状态。

## 数据结构

- **Max**：最大需求矩阵，Max[i,j] 表示进程 i 对资源 j 的最大需求
- **Allocation**：分配矩阵，Allocation[i,j] 表示进程 i 已分配到资源 j 的数量
- **Need**：需求矩阵，Need = Max - Allocation
- **Available**：可用资源向量

## 安全性算法

1. 初始化 Work = Available，Finish = false
2. 寻找满足条件的进程：Finish[i] == false 且 Need[i] ≤ Work
3. 若找到，Work = Work + Allocation[i]，Finish[i] = true，重复步骤 2
4. 若所有进程 Finish 均为 true，则系统处于安全状态

## 特点

- 只在安全状态下分配资源
- 需要预先知道进程的最大资源需求
- 资源分配较保守，利用率可能较低
