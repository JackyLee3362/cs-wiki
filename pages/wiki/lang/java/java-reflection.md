---
title: Java Reflection
description: Java 反射机制与泛型擦除
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 反射
categories:
  - 编程语言
comment: true
---

> Java 反射（Reflection）允许程序在运行时检查和操作类、方法、字段等，是框架开发（如 Spring）的基础技术。

## 核心 API

- `Class<T>`：类的元数据对象
- `Field`：类的字段
- `Method`：类的方法
- `Constructor<T>`：类的构造方法

## 典型用途

- 框架中的依赖注入和 AOP
- 序列化/反序列化（JSON 库）
- 动态代理
- 单元测试中的私有方法调用

## 泛型擦除

Java 泛型在编译期进行类型检查，编译后类型信息被擦除（Type Erasure）。例如 `List<String>` 和 `List<Integer>` 在运行时都是 `List`。

### 利用反射绕过泛型检查

由于泛型信息在字节码中保留，反射可以在运行时绕过编译期泛型限制：

```java
List<Integer> list = new ArrayList<>();
list.add(123);

// 通过反射添加字符串
Class<?> clazz = list.getClass();
Method method = clazz.getMethod("add", Object.class);
method.invoke(list, "aaa"); // 成功添加
```

### 字符串不可变的本质

`String` 底层是 `private final byte[] value`，不可变的原因：
- `final` 修饰 value 引用不可变
- `private` 且无对外访问方法，外界无法修改

> 注：JDK 高版本已屏蔽通过反射修改 String 内部数组的操作。

## 参考资料

- [Java 基础 - 反射机制详解 | Java 全栈知识体系](https://pdai.tech/md/java/basic/java-basic-x-reflection.html) #todo
- [java 是不是可以通过代码动态代码生成技术来代替大部分反射调用？ - 知乎](https://www.zhihu.com/question/1250420263/answer/10247479734) #todo
- [深入浅出 Java 8 Lambda 表达式 - 姚春辉 - 博客园](https://www.cnblogs.com/yaochunhui/p/15954098.html) #todo
