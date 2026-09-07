---
title: Java Dynamic Proxy
description: Java 动态代理机制
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 设计模式
categories:
  - 编程语言
comment: true
---

> Java 动态代理是一种无侵入式增强对象功能的技术，是 Spring AOP 的底层实现方式之一。

## 核心 API

`java.lang.reflect.Proxy` 提供了创建动态代理对象的方法：

```java
public static Object newProxyInstance(
    ClassLoader loader,           // 类加载器
    Class<?>[] interfaces,        // 代理对象实现的接口
    InvocationHandler h           // 调用处理器
)
```

## 三要素

1. **目标对象**：真正干活的对象
2. **代理对象**：包装目标对象，增强或拦截方法
3. **调用处理器**：`InvocationHandler.invoke()` 定义代理逻辑

## 应用场景

- **AOP 切面编程**：日志、事务、权限控制
- **RPC 远程调用**：Dubbo 等框架的接口代理
- **延迟加载**：按需初始化对象
- **方法拦截**：过滤非法调用

## 与 CGLIB 对比

| 特性 | JDK 动态代理 | CGLIB |
|------|-------------|-------|
| 依赖 | 接口 | 无（继承目标类）|
| 目标类 | 必须实现接口 | 可以是普通类 |
| 性能 | 稍慢（反射调用）| 更快（生成子类字节码）|
| Spring 默认 | 有接口时优先 | 无接口时使用 |

## 参考资料

- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
