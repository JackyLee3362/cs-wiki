---
title: Tree Traversal
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

# 二叉树的遍历 Tree Traversal

二叉树的遍历是按某种规则访问树中每个结点且仅访问一次的过程。

## 先序遍历 PreOrder

顺序：根结点 → 左子树 → 右子树。

```cpp
void PreOrder(BiTree T) {
    if (T != NULL) {
        visit(T);              // 访问根结点
        PreOrder(T->lchild);   // 遍历左子树
        PreOrder(T->rchild);   // 遍历右子树
    }
}
```

## 中序遍历 InOrder

顺序：左子树 → 根结点 → 右子树。

```cpp
void InOrder(BiTree T) {
    if (T != NULL) {
        InOrder(T->lchild);
        visit(T);
        InOrder(T->rchild);
    }
}
```

中序遍历的非递归实现（借助栈）：

```cpp
void InOrder2(BiTree T, SqStack S) {
    InitStack(S);
    BiTree p = T;
    while (p || !IsEmpty(S)) {
        if (p) {
            Push(S, p);
            p = p->lchild;
        } else {
            Pop(S, p);
            visit(p);
            p = p->rchild;
        }
    }
}
```

## 后序遍历 PostOrder

顺序：左子树 → 右子树 → 根结点。

```cpp
void PostOrder(BiTree T) {
    if (T != NULL) {
        PostOrder(T->lchild);
        PostOrder(T->rchild);
        visit(T);
    }
}
```

## 层次遍历

按层从上到下、从左到右访问，借助队列实现：

```cpp
void LevelOrder(BiTree T) {
    InitQueue(Q);
    BiTree p;
    EnQueue(Q, T);
    while (!IsEmpty(Q)) {
        DeQueue(Q, p);
        visit(p);
        if (p->lchild != NULL) EnQueue(Q, p->lchild);
        if (p->rchild != NULL) EnQueue(Q, p->rchild);
    }
}
```

## 由遍历序列构造二叉树

- 先序 + 中序 → 唯一的二叉树
- 后序 + 中序 → 唯一的二叉树
- 层序 + 中序 → 唯一的二叉树

## 线索二叉树

线索二叉树利用空链域存放前驱和后继指针，便于在遍历序列中快速定位结点的前驱与后继。
