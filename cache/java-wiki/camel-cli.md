---
type: basic-note
title: camel-cli
create_time: 2025-03-14
update_time:
tags:
description:
---

## Version

- Camel 2.25.4: Java8
- Camel 3.0.0: Java8 + Java11
- Camel 3.14.7: Java8 + Java11
- Camel 3.15.0: Java11
- Camel 3.16.0: Java11
- Camel 3.17.0+: Java11 + Java17

- [Releases - Apache Camel](https://camel.apache.org/releases/)

## Camel

一般来说一个应用里面会有一个 CamelContext 对象。
一个典型的 Camel 应用按照下面几个步骤执行。

- 创建一个 CamelContext 对象。
- 向 CamelContext 对象中添加自定义的 Endpoints 或者是 Components。
- 向 CamelContext 对象中添加路由规则(Routes)以及控制策略。
- 同时加载 classpath 中的数据格式(Data formats)，语言模块(Languages)以及类型转换模块(Type Converters)。
- 调用 CamelContext 的 start() 方法，这样可以启动 Camel 内部有关消息发送，接收，以及处理所使用的线程。
- 当调用 CamelContext 的 stop() 方法时，Camel 会将妥善关闭所有 Endpoint 和 Camel 内部的线程。

- 组件定义解析后的 DSL 要交给哪个端点
- 端点定义了
- new 组件以后将组件加入 camelContext 中
- 在定义路由 builder 时会解析 DSL 并找到对应的组件

## 阅读材料

- 官网: [Apache-Camel](http://devgou.com/article/Apache-Camel/)
- ✨ 官方案例:[apache/camel-examples: Apache Camel Examples](https://github.com/apache/camel-examples/tree/main)

- [Apache Camel 详解 - BlogMemory - 博客园](https://www.cnblogs.com/huangdh/p/17750049.html)
- [认识学习 Apache Camel 及其重要组件目录 什么是 Apache Camel 特定领域的语言 应用集成的四种方法 A - 掘金](https://juejin.cn/post/7116743200651345927)
- [自定义 Camel 组件 | 油腻中年大叔](https://www.coding-daddy.com/eip/camel-component-custom.html)

- Camel Demo: [Simba-cheng/ApacheCamelDemo: Apache Camel Demo (Learning Sample Demo)](https://github.com/Simba-cheng/ApacheCamelDemo)
- Github Camel 书籍: [GitHub - camelinaction/camelinaction2: :camel: This project hosts the source code for the examples of the Camel in Action 2nd ed book written by Claus Ibsen and Jonathan Anstey.](https://github.com/camelinaction/camelinaction2)

- [架构设计：系统间通信（36）——Apache Camel 快速入门（上）-CSDN 博客](https://blog.csdn.net/yinwenjie/article/details/51692340)

- [Camel 的 SEDA、Direct 和 VM 组件指南 - yiwenzhang - 博客园](https://www.cnblogs.com/d1012181765/p/15352890.html)

- ✅(已读)[Camel 实战第二版 第一章 初识 Camel - 简书](https://www.jianshu.com/p/7237d8d8ddc3)
- ✅(已读)[Camel 基本概念 - Willem Jiang's Blog](https://willemjiang.github.io/2019/04/2019-04-29-basic-camel-concepts/)
