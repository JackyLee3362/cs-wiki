---
title: springboot
description:
date: 2025-11-01
update_date:
draft: true
author: JackyLee
tags:
categories:
  - app/framework
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

- [程序员老鬼 - 有些公司为什么禁止 SpringBoot 项目使用 Tomcat？ - 知乎](https://www.zhihu.com/question/588619979/answer/17948112955)
  - 概要: 谢邀！ 说到底，Spring Boot 和 Tomcat 这对 CP 被拆散的根本原因，是 Tomcat 的设计在某些高并发场景下已经显得力不从心，尤其是在需要高效、稳定的长连接环境中。 从源码来看，Spring Boot 内嵌 Tomcat 实现的核心是`spring-boot-starter-tomcat`包。启动时，Spring Boot 会初始化`TomcatServletWebServerFactory`，创建内嵌的 Tomcat 容器，方便开发却也限制了并发性能。Tomcat 底层虽然支持 NIO（非阻塞 I/O）和 APR（原生 API），但这些都是“…
  - 点赞: 101

- [Spring Boot Test 的详细使用教程 - gongchengship - 博客园](https://www.cnblogs.com/gongchengship/p/18540901)
- [程序员小富 - springcloud技术体系里有gateway网关，那还需要nginx吗？ - 知乎](https://www.zhihu.com/question/4940651958/answer/1981425456470316356)
  - 概要: 我能理解你这个疑问，Nginx 能做反向代理，Gateway 也能做，既然功能重叠，为什么还要两层？ 这么想其实是因为看问题的视角局限在了功能上，从架构上看，这两者的定位很清晰的，Nginx 是网络流量网关，Spring Cloud Gateway 是业务网关。 它们不仅不是竞争关系，而是上下游的协作关系。 微服务架构的流量链路中，它们处于不同的层级，正常流程应该是：用户 -> Nginx -> Spring Cloud Gateway -> 微服务 看下边这个图就很容易理解…
  - 点赞: 201

## 参考资料
