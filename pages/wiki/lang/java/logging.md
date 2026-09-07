---
title: Java Logging
description: Java 日志框架体系
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 日志
categories:
  - 编程语言
comment: true
---

> Java 日志体系采用门面 + 实现的架构，SLF4J 是主流日志门面，Logback 和 Log4j2 是主流实现。

## 日志体系结构

```
应用层
  ├── SLF4J（门面）
  │     ├── Logback（实现）
  │     ├── Log4j2（实现）
  │     └── java.util.logging（实现）
```

## 主流框架

| 框架 | 类型 | 特点 |
|------|------|------|
| SLF4J | 门面 | 统一日志 API，支持桥接其他日志 |
| Logback | 实现 | SLF4J 原生实现，性能优秀，Spring Boot 默认 |
| Log4j2 | 实现 | 异步日志性能极佳，支持插件化 |
| JUL | 实现 | JDK 内置，无需额外依赖 |

## Spring Boot 默认配置

Spring Boot 默认使用 `SLF4J + Logback`，可通过 `logback.xml` 或 `application.yml` 配置日志级别和输出格式。

## 参考资料

- [万字长文带你了解 Java 日志框架使用 - 程序员晓凡 - 博客园](https://www.cnblogs.com/xiezhr/p/18358066) #todo
- [Java 日志框架的依赖设置备查(SLF4J, Log4j, Logback) - 博客园](https://www.cnblogs.com/morvenhuang/p/17658961.html) #todo
- [Java 日志框架：logback 详解 - 博客园](https://www.cnblogs.com/xrq730/p/8628945.html) #todo
- [logback.xml 配置文件详解 - 景岳 - 博客园](https://www.cnblogs.com/xxoome/p/8479164.html) #todo
- [Logback 配置样例 - 掘金](https://juejin.cn/post/6844904036580196359) #todo
- [Logback 指南](https://jishu.dev/2022/05/03/logback/) #todo
- [第三章：logback 的配置](https://logbackcn.gitbook.io/logback/03-di-san-zhang-logback-de-pei-zhi) #todo
- [Java 日志框架解析：汇总及最佳实践-阿里云开发者社区](https://developer.aliyun.com/article/768396) #todo
- [深入掌握 Java 日志体系 - 掘金](https://juejin.cn/post/6905026199722917902) #todo
- [Configuration file :: Apache Log4j](https://logging.apache.org/log4j/2.x/manual/configuration.html) #todo
- [Chapter 6: Layouts](https://logback.qos.ch/manual/layouts.html#logger) #todo
