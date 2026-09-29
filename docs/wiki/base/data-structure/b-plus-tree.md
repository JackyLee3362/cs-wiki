---
title: b-plus-tree
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## B+ 树的基本概念

B+ 树是 B 树的变体，特点是：

- 非叶结点仅起索引作用，不存储实际记录
- 所有关键字都在叶子结点中出现
- 叶子结点之间通过指针链接，支持顺序查找

B+ 树常用于关系数据库系统的索引。
