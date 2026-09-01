# 4.1 串的定义和实现

## 什么是串

字符串，简称串，在 c++语言中使用关键字 string 来定义

```cpp
string a = "this is a string";
```

## 串的存储结构

结构类型定义（本质上就是字符数组）

```cpp
#define MAXLEN 255
typedef struct{
    char ch[MAXLEN + 1]; // 一般下标从1开始，0不用，这样可以简便一些算法
    int length;
} SString;
```

- 串的实际长度只能小于等于 MAXLEN，超过预定义长度的串值会被舍去，称为截断
- 堆分配存储表示
- 块链存储表示

```cpp
#define CHUNKSIZE 80       // 块的大小可由用户自定义
typedef struct Chunk{
    char ch[CHUNKSIZE];    // 称为块
    struct Chunk* next;
} Chunk;

typedef struct{
    Chunk *head, *tail;    // 串的头指针和尾指针
    int curlen             // 串的当前长度
}LString;                   // 字符串的块链结构
```

串的基本操作，可以看下面两个链接

[c 语言的库：<cstring>](https://cplusplus.com/reference/cstring/)

[c++的库：<string>](https://cplusplus.com/reference/string/string/)

主要包括构造、销毁、清空、求串长、求字串等

<!-- - 串的基本操作
  - StrAssign(&T, chars)：串赋值
  - StrCompare(S, T)：串比较
  - StrLength(S)：求串长
  - Concat(&T, S1, S2)：串连结
  - SubString(&Sub, S, pos, len)：求子串
  - StrCopy(&T, S)：串拷贝
  - StrEmpty(S)：串判空
  - ClearString(&S)：清空串
  - Index(S,T,pos)：子串的位置
  - Repalce(&S, T, V)：串替换
  - StrInsert(&S, pos, T)：子串插入
  - StrDelete(&S, pos, len)：子串删除
  - DestoryString(&S)：串销毁 
  -->
