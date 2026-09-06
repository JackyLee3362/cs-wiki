---
title: junit4-runwith
description:
date: 2025-10-09
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

```java
// 就是一个运行器
@RunWith

// 用 JUnit4 来运行
@RunWith(JUnit4.class)

// 让测试运行于 Spring 测试环境
@RunWith(SpringJUnit4ClassRunner.class)
// 如果 junit 版本 < 4.12 ，建议
@RunWith(SpringJUnit4ClassRunner.class)
// 如果 junit 版本 >= 4.12，建议
@RunWith(SpringRunner.class)

// 如果是 Mock
@RunWith(MockitoJUnitRunner.class)

// 参数化
@RunWith(Parameterized.class)

// 一套测试集合
@RunWith(Suite.class)
```

## 参考资料

- [@RunWith 注解的作用 - centaurus - 博客园](https://www.cnblogs.com/Proximacentaurus/p/13696675.html)
