# 2.2 线性表的顺序表示

## 顺序表的定义 Sequence List

- *线性表*的顺序存储 -> 顺序表
- 顺序表的特点是表中元素的逻辑顺序与其物理顺序相同
- 顺序表的结构类型定义

  - 静态分配
  - 动态分配
  - C 的动态分配语句
  - `L.data = (ElemType*)malloc(sizeof(ElemType)*InitSize;`
  - C++的动态分配语句
  - `L.data = new ElemType[InitSize];`

## 顺序表上基本操作的实现

- 插入操作
  - 最好情况：表尾插入，时间复杂度为$O(1)$
  - 最坏情况：表头插入，时间复杂度为$O(n)$
  <!-- - 平均情况：$E_{ins} = \frac 1{n+1} \sum^{n+1}_{i=1}(n-i+1) = \frac 1{n+1}(n+\cdots + 1 + 0) = \frac n2$ ，时间复杂度为$O(n)$ -->

```cpp
// 插入操作代码
bool ListInsert(SqList &L, int i, ElemType e) {
    if (i < 1 || i > L.length + 1 )          // i值不合法
        return false;
    else if (L.length >= MAXSIZE)            // 当前存储空间已满
        return false;
    for (int j = L.length ; j >= i ; j--)
        L.elem[j] = L.elem[j - 1];           // 插入位置及之后位置后移
    L.elem[i - 1] = e;                       // 将新元素放入第i个位置
    L.length++;                              //表长增加1
    return true;
}
```

- 删除操作
  - 最好情况：删除表尾元素，时间复杂度为$O(1)$
  - 最坏情况：删除表头元素，时间复杂度为$O(n)$
  - 平均情况：$E_{del} = \frac 1n \sum^n_{i=1}(n-i)=\frac 1n \frac {(n-1)n}2 = \frac{n-1}2$ ，时间复杂度为$O(n)$

```cpp
// 删除操作代码
bool ListDelete(SqList& L, int i, ElemType e) {
    if (i < 1 || i > L.length)             // 判断i值是否合理
        return false;
    e = L.data[i - 1];
    for (int j = i; j < L.length; j++)
        L.elem[j - 1] = L.elem[j];
    L.length--;
    return true;
}
```

- 按值查找（顺序查找）
  - 最好情况：查找的元素就在表头，时间复杂度为$O(1)$
  - 最坏情况：查找的元素在表尾（或不存在），时间复杂度为$O(n)$
  - 平均情况：$E_{find} = \frac 1n \sum^n_{i=1}i= \frac{n+1}2$ ，时间复杂度为$O(n)$

```cpp
// 按值查找（顺序查找）代码
int LocateElem(SqList &L, ElemType e){
    int i;
    for(i = 0; i < L.length; i++){
        // TODO
    }
}
```

## 习题

<!-- - 11 顺序表的插入算法中，当 n 个空间已满时，可再申请增加分配 m 个空间，若申请失败，则说明系统没有（）可分配的存储空间 →n+m 个连续
- 综合题 10【2010】
- 综合题 11【2011】
- 综合题 12【2013】
- 综合题 13【2018】
- 综合题 14【2020】这题有点问题，比如 S1=[8, -1]，S2=[10, 0]，S3=[12, 1]，则 D= 8，而不是 4 -->
