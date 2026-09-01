# 3.1 栈 Stack

## 栈的基本概念

- 栈的定义
  - 栈是只允许在一端进行插入或删除操作的线性表
  - 特性：后进先出 Last In First Out, LIFO
  - 栈的数学性质：卡特兰数 Catalan Number
    - $\frac 1{n+1}C^n_{2n}$

```
|     |  <-- 栈顶（top)
|     |
| ... |
|  b  |
|  a  |  <-- 栈底（bottom）
+-----+
```

## 栈的基本操作

- InitStack(&S)：初始化操作
- DestroyStack(&S)：销毁栈操作 []
- StackEmpty(S)：判定 S 是否为空栈
- StackLength(S)：求栈的长度 [cpp::std::stack::size](https://cplusplus.com/reference/stack/stack/size/)
- GetTop(S, &e)：取栈顶元素 [cpp::std::stack::top](https://cplusplus.com/reference/stack/stack/top/)
- ClearStack(&S)：栈置空操作 [cpp::std::stack::empty](https://cplusplus.com/reference/stack/stack/empty/)
- Push(&S, e)：入栈操作（压栈）[cpp::std::stack::push](https://cplusplus.com/reference/stack/stack/push/)
- Pop(&S, &e)：出栈操作（弹栈）

## 栈的顺序存储结构

- 结点的类型定义

```cpp
#define MAXSIZE 100
typedef struct {
  ElemType data[MAXSIZE];
  int top;  // 栈顶指针
} SqStack;
```

- 顺序栈的基本运算
  - 初始化
  - 判栈空
  - 入栈
  - 出栈
  - 读栈顶元素
- 共享栈

- 栈的链式存储结构

结点的类型定义

```cpp
typedef struct StackNode {
  SElemType data;
  struct StackNode *next;
} StackNode, *LinkStack;
```

<!-- ### 习题

### 14【2010】若元素 abcdef 一次进栈，允许出栈、退栈操作交替进行，但不允许连续 3 次进行退栈操作，不可能得到的出栈序列是

A d c e b f a
B c b d a e f
C b c a e f d
D a f e d c b→D

### 15【2018】

### 16【2009】

### 22【2013】

### 24【2011】

### 26【2017】

### 28【2020】 -->
