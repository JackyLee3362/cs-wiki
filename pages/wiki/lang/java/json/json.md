---
title: json
description:
date: 2025-03-14
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## json

- [fastjson到底做错了什么？为什么会被频繁爆出漏洞？ - 知乎](https://zhuanlan.zhihu.com/p/157211675?from_voters_page=true)
- [jackson学习之二：jackson-core-CSDN博客](https://blog.csdn.net/boling_cavalry/article/details/108571629)
- [Jackson工具类使用及配置指南、高性能配置_jackson配置类-CSDN博客](https://blog.csdn.net/zzhongcy/article/details/120066586)

- [可乐 - Spring Boot Jackson 和 Fast JSON 用哪个好啊 - 知乎](https://www.zhihu.com/question/501897937/answer/3374600944)

  - 概要: 我最近也遇到了这个问题，之前用的都是 Fastjson 的静态方法，很方便。但是 Spring 框架中都使用的是 Jackson，我就想也试试 Jackson。 发现 Jackson 功能很强大，但是比较麻烦。刚开始使用的时候因为用惯了 Fastjson 的静态方法，十分不习惯，先要 new 一个 ObjectMapper，因为它的方法都是抛出异常的，调用时还要用 try-catch 包住，不方便，就像这样。 String subject; try { subject = new ObjectMapper().writeValueAsString(new User()); …
  - 点赞: 447
## 参考资料
