---
title: RestTemplate
description: Spring HTTP 客户端
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - http
  - spring
categories:
  - 编程语言
comment: true
---

> RestTemplate 是 Spring Framework 提供的同步 HTTP 客户端，用于调用 RESTful 服务。

## 状态

Spring 官方已宣布弃用 RestTemplate，推荐使用 `WebClient`（响应式 HTTP 客户端）。

## 基本用法

```java
RestTemplate restTemplate = new RestTemplate();
String result = restTemplate.getForObject("https://api.example.com/users", String.class);
```

## 参考资料

- [Java 技术栈 - 突发！Spring 宣布弃用 RestTemplate！！ - 知乎](https://zhuanlan.zhihu.com/p/1959935615270384451) #todo
- [总结：使用 RestTemplate 发送 HTTP 请求 - 腾讯云](https://cloud.tencent.com/developer/article/1825637) #todo
