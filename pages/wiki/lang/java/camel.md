---
title: Apache Camel
description: Apache Camel 企业集成框架
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - 集成
categories:
  - 编程语言
comment: true
---

> Apache Camel 是一个基于 Enterprise Integration Patterns（企业集成模式）的开源集成框架，用于在不同系统间路由和转换数据。

## 核心概念

- **Endpoint**：消息的源头或目的地（如文件、队列、HTTP 接口）
- **Route**：定义消息从哪来到哪去的规则
- **Component**：与各种协议/系统对接的适配器（如 HTTP、JMS、FTP、Kafka）
- **Processor**：在路由中对消息进行处理
- **DSL**：领域特定语言，用于定义路由规则（Java DSL、Spring XML、YAML 等）

## 常用组件

| 组件 | 用途 |
|------|------|
| Direct | 同 JVM 内同步调用 |
| SEDA | 同 JVM 内异步队列 |
| VM | 同 CamelContext 内的异步队列 |
| File | 文件系统读写 |
| HTTP | HTTP 请求/响应 |
| JMS | 消息队列交互 |

## 参考资料

- [Apache Camel 官网](https://camel.apache.org/) #todo
- [Apache Camel Releases](https://camel.apache.org/releases/) #todo
- [Apache Camel 详解 - 博客园](https://www.cnblogs.com/huangdh/p/17750049.html) #todo
- [Camel 的 SEDA、Direct 和 VM 组件指南](https://www.cnblogs.com/d1012181765/p/15352890.html) #todo
- [Camel 基本概念 - Willem Jiang's Blog](https://willemjiang.github.io/2019/04/2019-04-29-basic-camel-concepts/) #todo
- [Camel 实战第二版 第一章 初识 Camel - 简书](https://www.jianshu.com/p/7237d8d8ddc3) #todo
- [认识学习 Apache Camel 及其重要组件 - 掘金](https://juejin.cn/post/7116743200651345927) #todo
- [自定义 Camel 组件](https://www.coding-daddy.com/eip/camel-component-custom.html) #todo
- [架构设计：系统间通信（36）——Apache Camel 快速入门 - CSDN](https://blog.csdn.net/yinwenjie/article/details/51692340) #todo
- [Camel Demo - GitHub](https://github.com/Simba-cheng/ApacheCamelDemo) #todo
- [Camel in Action 2nd ed 源码 - GitHub](https://github.com/camelinaction/camelinaction2) #todo
- [Apache Camel 官方示例 - GitHub](https://github.com/apache/camel-examples/tree/main) #todo
- [Apache Camel 详解 - devgou](http://devgou.com/article/Apache-Camel/) #todo
