---
title: Java JSON Processing
description: Java JSON 序列化与反序列化
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - json
categories:
  - 编程语言
comment: true
---

> Java 生态中主要的 JSON 处理库包括 Jackson、Fastjson、Gson 等。

## 主流库对比

| 库 | 性能 | 安全性 | Spring 默认 | 特点 |
|----|------|--------|-------------|------|
| Jackson | 高 | 高 | 是 | 功能最全面，生态最好 |
| Fastjson | 极高 | 漏洞历史多 | 否 | 阿里出品，静态方法方便 |
| Gson | 中 | 高 | 否 | Google 出品，API 简洁 |

## Jackson 核心用法

```java
ObjectMapper mapper = new ObjectMapper();

// 对象转 JSON
String json = mapper.writeValueAsString(user);

// JSON 转对象
User user = mapper.readValue(json, User.class);
```

## Fastjson 漏洞问题

Fastjson 因反序列化漏洞被频繁爆出安全问题，建议生产环境优先使用 Jackson。

## 参考资料

- [fastjson到底做错了什么？为什么会被频繁爆出漏洞？ - 知乎](https://zhuanlan.zhihu.com/p/157211675?from_voters_page=true) #todo
- [jackson学习之二：jackson-core-CSDN博客](https://blog.csdn.net/boling_cavalry/article/details/108571629) #todo
- [Jackson之 ObjectMapper 配置详解 - 掘金](https://juejin.cn/post/7364698043910225931) #todo
- [Jackson 使用详解 - 掘金](https://juejin.cn/post/6844904166809157639) #todo
- [Jackson工具类使用及配置指南、高性能配置-CSDN博客](https://blog.csdn.net/zzhongcy/article/details/120066586) #todo
- [Spring Boot Jackson 和 Fast JSON 用哪个好啊 - 知乎](https://www.zhihu.com/question/501897937/answer/3374600944) #todo
- [Jsonunit 比较 jsondiff - 博客园](https://www.cnblogs.com/lbzwd/p/18364026) #todo
