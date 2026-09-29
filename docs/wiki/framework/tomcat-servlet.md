---
title: Tomcat & Servlet
description: Tomcat 服务器与 Servlet 规范
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - web
  - 服务器
categories:
  - 后端开发
comment: true
---

> Tomcat 是 Apache 基金会开源的 Servlet 容器，实现了 Java EE 的 Servlet 和 JSP 规范，是最常用的 Java Web 服务器之一。

## Servlet 体系结构

```
Servlet 接口
  └── GenericServlet 抽象类
        └── HttpServlet 抽象类
```

### Request 体系结构

```
ServletRequest 接口
  └── HttpServletRequest 接口
        └── org.apache.catalina.connector.RequestFacade 实现
```

## Servlet URL 映射规则

- `/user` — 精确匹配
- `/user/hello` — 精确匹配
- `/user/*` — 路径匹配
- `/*.do` — 扩展名匹配（匹配 `/foo.do`、`/bar.do`，不能写成 `/*.do`）
- `/*` — 全匹配

## web.xml 工作流程

浏览器输入 `localhost:8080/servlet/user` 后：

1. 通过 `localhost:8080` 找到 Tomcat 主机
2. Tomcat 从 webapp 中寻找 `servlet.war` 包下的 `web.xml`
3. 从 `web.xml` 解析 `servlet-mapping`，寻找 `/user` 路径对应的 `servlet-name`
4. 根据 `servlet-name` 寻找全类名的字节码并加载进内存（`Class.forName(...)`）
5. 调用该类的 `service` 方法
6. Tomcat 将 request 和 response 对象传给 `service` 方法

## 嵌入式 Tomcat

无需单独安装 Tomcat，直接在 Java 应用中嵌入：

```java
Tomcat tomcat = new Tomcat();
tomcat.setPort(8080);
tomcat.addWebapp("/", new File("src/main/webapp").getAbsolutePath());
tomcat.start();
```

## 参考资料

- [Apache Tomcat - Which Version Do I Want?](https://tomcat.apache.org/whichversion.html) #todo
- [Maven 项目+内嵌 tomcat+Servlet - 博客园](https://www.cnblogs.com/kendoziyu/p/embedded-tomcat-servlet.html) #todo
- [嵌入式 Tomcat 使用 - 博客园](https://www.cnblogs.com/lihw-study/p/17281721.html) #todo
- [VSCode Windows10 上配置 Tomcat 并部署 Maven 项目 - 知乎](https://zhuanlan.zhihu.com/p/586056834) #todo
- [Servlet 入门 - 廖雪峰的官方网站](https://liaoxuefeng.com/books/java/web/servlet-basic/index.html) #todo
- [tomcat 源码为啥不采用 netty 处理并发？ - 知乎](https://www.zhihu.com/question/53498767/answer/3507988674) #todo
- [为什么在 netty 的眼里 jdk 的许多实现都不是非常高效? - 知乎](https://www.zhihu.com/question/269619656/answer/3508007258) #todo
- [什么是 ssm 框架？ - 知乎](https://www.zhihu.com/question/328810338/answer/720393487) #todo
