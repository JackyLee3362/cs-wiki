---
title: Compiler Principles
date: 2023-04-07
draft: false
author: JackyLee
tags:
  - 基础知识
  - 编译原理
categories:
  - 计算机科学
comment: true
---

## 哈工大课程笔记

### 第二章

#### 2.3

作业：无符号整数和浮点数的文法
无符号整数： 不能以 0 开头的整数
浮点数： 整数或者带小数点的数

### 第三章

#### 3.1 正则表达式

正则表达式的定义

#### 3.2 正则定义

#### 3.3 有穷自动机（Finite Automata，FA）

典型例子：电梯控制装置
输入带 input tape
读头 head
有穷控制器 finite control
转换图 Transition Graph
初试状态（开始状态）
终止状态（接收状态）
最长子串匹配原则（Longest String Matching Principle）

#### 3.4 有穷自动机的分类

确定的有穷自动机（DFA）
一个例子：转换图、转换表

非确定的有穷自动机（NFA）

正则文法 <=> 正则表达式 <=> 有穷自动机（FA）
DFA 的算法实现

#### 3.5 从正则表达式到有穷自动机

#### 3.6 从 NFA 到 DFA 的转换

例 1：不带 sigma 边的 NFA 到 DFA 的转换
例 2：带 sigma 边的 NFA 到 DFA 的转换
NFA 到 DFA 算法实现：子集构造法

#### 3.7 识别单词的 DFA

### 第四章

#### 4.1 自顶向下分析概述

Top-Down Parsing
最左推导 Left Most Derivation => 最左句型 left sentential form，逆过程是最右规约
最右推导 Right Most Derivation => 最右句型 right sentential form，逆过程是最左规约
规范推导：最右推导，规范规约：最左规约
但是由于扫描从左向右，所以采用最左推导
递归下降分析 recursive-descent parsing
回溯
预测分析 predictive parsing

#### 4.2 文法转换

A=>Aa 的形式称为直接左递归 immediate left recursive
A=>Aa 的形式称为左递归
两步或者两步以上称为间接左递归
消除直接左递归
把左递归转换为右递归（看例子）

消除间接左递归
消除左递归的算法

提取左公因子 Left Factoring
提取左公因子算法

#### 4.3 LL(1)文法

非终结符的后继符号集
产生式的可选集
串首终结符集

#### 4.4 FIRST 集和 FELLOW 集的计算

#### 4.5 递归的预测分析法

#### 4.6 非递归的预测分析法

#### 4.7 预测分析法中的错误处理

#### 4.8 自底向上的分析概述

#### 4.9 LR 分析法概述

#### 4.10 LR0 分析

#### 4.11 LR0 分析表构造

#### 4.12 SLR

#### 4.13 LR1 分析

#### 4.14 LALR 分析法

#### 4.15 二义性文法的 LR 分析

#### 4.16 LR 分析中的错误处理

### 第五章

#### 5.1 语法制导翻译概述

#### 5.2 语法制导定义

#### 5.3 SSD 的求值顺序

#### 5.4 S 属性定义与 L 属性定义

#### 5.5 语法制导翻译方案

#### 5.6 在非递归的预测分析过程中进行翻译

#### 5.7 在递归预测过程中进行翻译

#### 5.8 L 属性定义的自底向上翻译

### 第六章

#### 6.1 类型表达式

#### 6.2 声明语句的翻译

#### 6.3 简单赋值语句的翻译

#### 6.4 数组引用的翻译

#### 6.5 控制流语句 SDT

#### 6.6 布尔表达式 SDT

#### 6.7 控制流的例子

#### 6.8 布尔表达式的回填

#### 6.9 控制流语句的回填

#### 6.10 SWITCH 语句的翻译

#### 6.11 过程调用语句的翻译

### 第七章

#### 7.1 运行存储分配概述

#### 7.2 静态存储分配

#### 7.3 栈式存储分配

#### 7.4 调用序列和返回序列

#### 7.5 非局部数据的访问

#### 7.6 符号表

#### 7.7 符号表建立

### 第八章

#### 8.1 流图

#### 8.2 常用代码优化方案一

#### 8.3 常用代码优化方案二

#### 8.4 基本块的优化

#### 8.5 数据流分析

#### 8.6 到达定值分析

#### 8.7 到达定值方程的计算

#### 8.8 活跃变量分析

#### 8.9 可用表达式分析

#### 8.10 支配节点和回边

#### 8.11 自然循环及其识别

#### 8.12 删除全局？？表达式和赋值语句

#### 8.13 代码移动

#### 8.14 作用于归纳变量的强度削弱

#### 8.15 归纳变量的删除

### 第九章

#### 9.1 代码生成器的主要任务

#### 9.2 一个简单的目标机模型

#### 9.3 指令选择

#### 9.4 寄存器的选择

#### 9.5 寄存器选择函数 getReg 的设计

#### 9.6 窥孔优化

### 复习

[LL(1),LR(0),SLR(1),LALR(1),LR(1)对比与分析](https://www.cnblogs.com/henuliulei/p/10872483.html)


## 参考资料

- [【数理逻辑】谓词逻辑 ( 前束范式 | 前束范式转换方法 | 谓词逻辑基本等值式 | 换名规则 | 谓词逻辑推理定律 )-CSDN博客](https://blog.csdn.net/shulianghan/article/details/108858847)
- [【编译原理】5—语法分析Syntax Analysis——自底向上（SLR、LR(1)、LALR详细介绍）_slr分析法 自底向上-CSDN博客](https://blog.csdn.net/weixin_53580595/article/details/128123655)
- [正则表达式-＞NFA-＞DFA(C++实现)_c++ 存储dfa-CSDN博客](https://blog.csdn.net/Apale_8/article/details/108896081)
- AST 语法在线解析 [AST explorer](https://astexplorer.net/)
- [如何写一个简单的编译器？ - 知乎](https://www.zhihu.com/question/36756224/answer/2485871082)
- [如何写一个简单的编译器？ - 知乎](https://www.zhihu.com/question/36756224/answer/2609071892)
- [如何写一个简单的编译器？ - 知乎](https://www.zhihu.com/question/36756224/answer/88530013)
- [详解三大编译器：gcc、llvm 和 clang - 知乎](https://zhuanlan.zhihu.com/p/357803433)
- [如何写一个简单的编译器？ - 知乎](https://www.zhihu.com/question/36756224/answer/2485871082)
- [编译原理学了有什么用？ - 知乎](https://www.zhihu.com/question/21755487/answer/623091194)
- [学习《编译原理》完全没有头绪怎么办？ - 知乎](https://www.zhihu.com/question/26443913/answer/3529517945)
- [计算机本科生花大量时间写编译器，操作系统是不是不务正业？ - 知乎](https://www.zhihu.com/question/321433640/answer/678685204)
- [编译原理学了有什么用？ - 知乎](https://www.zhihu.com/question/21755487/answer/2638308610)
- [LLVM Tutorial: Table of Contents — LLVM 21.0.0git documentation](https://llvm.org/docs/tutorial/)