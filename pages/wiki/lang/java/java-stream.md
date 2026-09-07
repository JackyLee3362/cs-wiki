---
title: Java Stream API
description: Java 8 Stream API 与函数式编程
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 函数式编程
categories:
  - 编程语言
comment: true
---

> Java 8 引入的 Stream API 和 Lambda 表达式极大简化了集合操作，支持声明式数据处理。

## 核心概念

### 函数式接口

只有一个抽象方法的接口，可用 Lambda 表达式实例化：

| 接口 | 方法签名 | 用途 |
|------|----------|------|
| `Consumer<T>` | `void accept(T t)` | 消费数据 |
| `Supplier<T>` | `T get()` | 生成数据 |
| `Function<T,R>` | `R apply(T t)` | 转换数据 |
| `Predicate<T>` | `boolean test(T t)` | 条件判断 |

### PECS 原则

- **Producer extends**：向外提供数据用 `<? extends T>`
- **Consumer super**：消费数据用 `<? super T>`

## Stream 常用操作

### 中间操作（惰性求值）

- `filter(Predicate)`：过滤
- `map(Function)`：映射
- `flatMap(Function)`：扁平化映射（如 `Stream<List<T>> → Stream<T>`）
- `sorted()`：排序
- `distinct()`：去重

### 终结操作

- `collect(Collector)`：收集结果
- `reduce(BinaryOperator)`：归约
- `forEach(Consumer)`：遍历
- `count()` / `max()` / `min()`：聚合

## 示例

```java
// flatMap：将 Stream<List<Integer>> 转为 Stream<Integer>
Stream.of(List.of(1,2,3), List.of(4,5,6))
    .flatMap(List::stream)
    .forEach(System.out::println);
```

## 参考资料

- [【Java 8 新特性】Java 8 Collectors 示例-CSDN 博客](https://blog.csdn.net/qq_31635851/article/details/116057696) #todo
- [深入浅出 Java 8 Lambda 表达式 - 姚春辉 - 博客园](https://www.cnblogs.com/yaochunhui/p/15954098.html) #todo
