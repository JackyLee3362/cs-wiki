---
title: String
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

# 串 String

字符串简称串，在 C++ 语言中使用关键字 `string` 来定义：

```cpp
string a = "this is a string";
```

## 存储结构

### 定长顺序存储

```cpp
#define MAXLEN 255
typedef struct {
    char ch[MAXLEN + 1];  // 一般下标从 1 开始，0 不用，可以简化一些算法
    int length;
} SString;
```

串的实际长度只能小于等于 MAXLEN，超过预定义长度的串值会被舍去，称为截断。

### 堆分配存储

### 块链存储

```cpp
#define CHUNKSIZE 80        // 块的大小可由用户自定义
typedef struct Chunk {
    char ch[CHUNKSIZE];     // 称为块
    struct Chunk *next;
} Chunk;

typedef struct {
    Chunk *head, *tail;     // 串的头指针和尾指针
    int curlen;             // 串的当前长度
} LString;                  // 字符串的块链结构
```

## 模式匹配

### BF 算法（简单模式匹配）

```cpp
int Index_BF(SString S, SString T, int pos) {
    int i = pos, j = 1;
    while (i <= S.length && j <= T.length) {
        if (S.ch[i] == T.ch[j]) {  // 比较成功则继续匹配下一个字符
            i++;
            j++;
        } else {                   // 比较不成功则回溯
            i = i - j + 2;
            j = 1;
        }
    }
    if (j > T.length) return i - T.length;
    else return 0;
}
```

### KMP 算法（改进的模式匹配）

KMP 算法通过 `next` 数组避免主串指针回溯，时间复杂度 $O(m+n)$（其中 $O(m)$ 来自求 `next` 数组，$O(n)$ 来自匹配过程），优于 BF 算法的 $O(mn)$。

```cpp
int Index_KMP(SString S, SString T, int pos) {
    int i = pos, j = 1;
    while (i <= S.length && j <= T.length) {
        if (j == 0 || S.ch[i] == T.ch[j]) {  // 比较成功则继续匹配
            i++;
            j++;
        } else
            j = next[j];                     // 比较不成功则按 next 回溯
    }
    if (j > T.length) return i - T.length;
    else return 0;
}
```

手算 `next` 数组的规则：

- `next[1] = 0`
- `next[2] = 1`
- `next[i]` = 前缀和后缀最大交集长度 + 1

KMP 算法可进一步优化为 `nextval` 数组。
