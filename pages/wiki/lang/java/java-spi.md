---
title: Java SPI
description: Java Service Provider Interface 机制
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 扩展机制
categories:
  - 编程语言
comment: true
---

> SPI（Service Provider Interface）是 Java 内置的服务发现机制，允许第三方为接口提供实现，广泛应用于框架扩展（如 JDBC、SLF4J、Spring Boot 自动配置）。

## 核心原理

1. 定义接口（由核心框架提供）
2. 第三方实现该接口
3. 在 `META-INF/services/接口全限定名` 文件中列出实现类
4. 通过 `ServiceLoader.load(接口.class)` 加载所有实现

## 典型应用

- **JDBC**：`java.sql.Driver` 由各数据库厂商实现
- **SLF4J**：日志门面通过 SPI 绑定具体实现（Logback、Log4j2）
- **Spring Boot**：自动配置通过 `spring.factories` 和 SPI 机制加载

## 与 Spring IOC 的区别

| 特性 | Java SPI | Spring IOC |
|------|----------|------------|
| 配置方式 | META-INF/services 文件 | XML / 注解 / Java Config |
| 灵活性 | 低（一次性加载全部）| 高（条件注入、生命周期管理）|
| 适用场景 | 框架扩展点 | 应用内依赖管理 |

## 参考资料

- [Java SPI 机制详解 | JavaGuide](https://javaguide.cn/java/basis/spi.html#service-provider-interface) #todo
- [Java常用机制 - SPI机制详解 | Java 全栈知识体系](https://pdai.tech/md/java/advanced/java-advanced-spi.html) #todo
