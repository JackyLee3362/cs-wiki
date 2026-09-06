---
title: spring-web-controller
description:
date: 2025-10-14
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 执行顺序

- 有张图不错[【Spring MVC 系列】静态资源处理_springmvc静态资源处理-CSDN博客](https://blog.csdn.net/zzuhkp/article/details/121604937)

嵌套关系

- tomcat
  - servlet
    - web app
      - foo-controller
      - bar-controller
      - ...

```ascii
┌─────────────────────────────────────────────┐
│ web container                               │
│    ┌──────────────────────────────┐         │
│    │ servlet-context              │         │
│    │ ┌─────────────────────────┐  │         │
│    │ │ web-application-context │  │         │
│    │ │                         │  │         │
│    │ │ ┌───────────────────┐   │  │         │
│    │ │ │                   │   │  │         │
│    │ │ │  user-controller  │   │  │         │
│    │ │ │                   │   │  │         │
│    │ │ └───────────────────┘   │  │         │
│    │ └─────────────────────────┘  │         │
│    └──────────────────────────────┘         │
└─────────────────────────────────────────────┘
```

- [Spring Boot Test 的详细使用教程 - gongchengship - 博客园](https://www.cnblogs.com/gongchengship/p/18540901)

## junit4 测试参考

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
class 测试类
```

## 参考资料
