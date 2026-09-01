# 2.1 线性表的定义和基本操作

<!-- ### 线性表的定义

- 线性表是具有相同数据类型的 n(n≥0) 个数据元素的有限序列
- 特点
  - 表中元素个数有限
  - 表中元素具有逻辑上的顺序性，表中元素有其先后次序
  - 表中元素都是数据元素，每个元素都是单个元素
  - 表中元素的数据类型都相同，这意味着每个元素占有相同大小的存储空间
  - 表中元素具有抽象性 -->

## 什么是线性表？🤔

有点像函数

函数：一个 x 值只能对应一个 y 值
线性表：一个索引值只能有一个映射值

## 线性表的基本操作

详细文档可以参考 c++容器[list 的相关函数](https://cplusplus.com/reference/list/list/)

[c++代码示例](../code/2.1.list.cpp)

- 初始化 构造器 constructor
- 求表长 length()或 size()
- 清空 empty()
- 获取元素
- 插入
- 删除
- ...

<!-- - InitList(&L) ：初始化表，构造一个空的线性表
- DestroyList(&L) ：销毁线性表
- ClearList(&L) ：清空线性表
- ListEmpty(&L) ：置空线性表
- ListLength(L) ： 求线性表长度
- GetElem(L, i, &e) ： 获取元素
- LocateElem(L, e, compare())
- PriorElem(L, cur_e, &pre_e) ： 获取元素的前驱
- NextElem(L,cur_e,&next_e) ： 获得元素的后继
- ListInsert(&L,i,e) ：插入
- ListDelete(&L,i&e) ：删除
- ListTraverse(&L, vistited()) ：遍历 -->
