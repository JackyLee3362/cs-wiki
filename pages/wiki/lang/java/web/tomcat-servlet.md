---
title: tomcat-servlet
description:
date: 2025-10-23
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 嵌入式 tomcat

- [Maven 项目+内嵌 tomcat+Servlet - 极客子羽 - 博客园](https://www.cnblogs.com/kendoziyu/p/embedded-tomcat-servlet.html)
- [嵌入式 Tomcat 使用 - 不安分的黑娃 - 博客园](https://www.cnblogs.com/lihw-study/p/17281721.html)

## web-servlet 注解

可以写 `/user` 或者 `/user/hello` 或者 `/user/*` 甚至 `/*`

也可以写 `*.do` 可以匹配 `/foo.do` 或者 `/bar.do`(不要写成 `/*.do`，会报错)

## servlet 体系结构

- Servlet 接口
- GenericServlet 抽象类
- HttpServlet 抽象类

### Request 体系结构

- ServletRequest 接口
  | 继承
- HttpServletRequest 接口
  | 继承
- org.apache.catalina.connector.RequestFacade 实现

## web.xml 作用

我们浏览器输入 `localhost:8080/servlet/user`

1. 通过 `localhost:8080` 找到 tomcat 主机
2. tomcat 从 webapp 中寻找 servlet.war 包下寻找 web.xml
3. 从 web.xml 解析并从 servlet-mapping 中寻找 `/user`，并找到 servlet-name
4. 根据 servlet-name 寻找全类名的字节码并加载进内存 (Class.forName(...))
5. 调用该类的 service 方法
6. tomcat 将 request 和 response 对象传给 service 方法, 并调用该方法
7. 我们可以设置 response 对象

tomcat 负责创建对象并调用方法
使用了动态代理技术

- 查看下载哪个版本的 tomcat [Apache Tomcat® - Which Version Do I Want?](https://tomcat.apache.org/whichversion.html)
- [【VScode】Windows10 上用 Community Server Connector 配置 Tomcat 并部署 Maven 项目 - 知乎](https://zhuanlan.zhihu.com/p/586056834)

- [Servlet 入门 - Java 教程 - 廖雪峰的官方网站](https://liaoxuefeng.com/books/java/web/servlet-basic/index.html)

## 参考资料

- [江小北 - tomcat 源码为啥不采用 netty 处理并发？ - 知乎](https://www.zhihu.com/question/53498767/answer/3507988674)
  - 概要: 行，兄弟，这个问题有点意思。其实 Tomcat 选择不用 Netty 而用 JDK NIO 处理并发请求，是有它的一套道理的。咱们得从多个角度来分析这个问题： 1. 历史原因首先，得说说历史背景。Tomcat 是个老牌子了，从上世纪 90 年代就有了。当初设计的时候，Netty 还没出现呢，那时候大家都用 JDK 自带的 API 来处理网络编程。Tomcat 在发展过程中，一直是基于 JDK NIO 的，后来随着 Java 版本的升级，JDK NIO 也不断改进，Tomcat 的架构也逐渐稳定下来。改变这…
  - 点赞: 207

- [江小北 - 为什么在 netty 的眼里 jdk 的许多实现都不是非常高效? - 知乎](https://www.zhihu.com/question/269619656/answer/3508007258)
  - 概要: 作为一个在 Java 领域摸爬滚打了十年的老兵，我来聊聊为什么 Netty 觉得 JDK 的很多实现不够高效。其实，这主要是因为两者的设计目标和使用场景不同。 JDK 追求的是通用性，而 Netty 则专注于高并发和网络通信。我们可以通过几个具体的例子来看看它们在实现上的区别。 1. ThreadLocal 实现 JDK 的 ThreadLocal 采用的是非波拉契散列法和开放寻址。这种设计可以保证在大多数情况下，数据在内存中的分布更均匀，减少了碰撞的可能性。但在高并发场…
  - 点赞: 466
