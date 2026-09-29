---
title: 二叉树
alias:
  - Binary Tree
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - 基础知识
  - 数据结构
categories:
  - 计算机科学
comment: true
---

二叉树是每个结点至多只有两棵子树，且子树有左右之分的树。

## 几个特殊的二叉树

- 满二叉树（Full Binary Tree）：高度为 $h$ 且有 $2^h-1$ 个结点的二叉树
- 完全二叉树（Complete Binary Tree）：深度为 $h$ 的具有 $n$ 个结点的二叉树，当且仅当其每一个结点都与深度为 $h$ 的满二叉树中编号 $1 \sim n$ 的结点一一对应
- 二叉排序树（Binary Search Tree, BST）：左子树所有结点的关键字均小于根结点，右子树所有结点的关键字均大于根结点，且左右子树又各是一棵二叉排序树
- 平衡二叉树（Balanced Binary Tree, AVL）：任一结点的左、右子树深度之差不超过 1

## 性质

- 非空二叉树上的叶子结点数等于度为 2 的结点数加 1，即 $n_0 = n_2 + 1$
- 非空二叉树第 $k$ 层上至多有 $2^{k-1}$ 个结点
- 高度为 $h$ 的二叉树至多有 $2^h-1$ 个结点
- 对完全二叉树按从上到下、从左到右编号 $1, 2, \dots, n$：
  - 当 $i > 1$ 时，结点 $i$ 的双亲编号为 $\lfloor i/2 \rfloor$
  - 当 $2i \le n$ 时，结点 $i$ 的左孩子编号为 $2i$
  - 当 $2i+1 \le n$ 时，结点 $i$ 的右孩子编号为 $2i+1$
  - 结点 $i$ 所在层次为 $\lfloor \log_2 i \rfloor + 1$
- 具有 $n$（$n > 0$）个结点的完全二叉树的高度为 $\lceil \log_2(n+1) \rceil$ 或 $\lfloor \log_2 n \rfloor + 1$

## 存储结构

### 顺序存储

完全二叉树和满二叉树采用顺序存储比较合适；对于一般的二叉树，需要添加并不存在的空结点。

```cpp
#define MAXSIZE 100
typedef TElemType SqBiTree[MAXSIZE];
SqBiTree bt;
```

### 链式存储（二叉链表）

```cpp
typedef struct BiTNode {
    TElemType data;
    struct BiTNode *lchild, *rchild;
} BiTNode, *BiTree;
```

在含有 $n$ 个结点的二叉链表中，含有 $n+1$ 个空链域。

三叉链表在二叉链表基础上增加了指向双亲的 `parent` 指针。
