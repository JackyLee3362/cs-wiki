---
title: Spring MVC Interceptor Concept
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Interceptor Concept

讲解拦截器的概念之前，我们先看一张图:

![1630676280170](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020842.png)

(1)浏览器发送一个请求会先到 Tomcat 的 web 服务器

(2)Tomcat 服务器接收到请求以后，会去判断请求的是静态资源还是动态资源

(3)如果是静态资源，会直接到 Tomcat 的项目部署目录下去直接访问

(4)如果是动态资源，就需要交给项目的后台代码进行处理

(5)在找到具体的方法之前，我们可以去配置过滤器(可以配置多个)，按照顺序进行执行

(6)然后进入到到中央处理器(SpringMVC 中的内容)，SpringMVC 会根据配置的规则进行拦截

(7)如果满足规则，则进行处理，找到其对应的 controller 类中的方法进行执行,完成后返回结果

(8)如果不满足规则，则不进行处理

(9)这个时候，如果我们需要在每个 Controller 方法执行的前后添加业务，具体该如何来实现?

这个就是拦截器要做的事。

- 拦截器（Interceptor）是一种动态拦截方法调用的机制，在 SpringMVC 中动态拦截控制器方法的执行
- 作用:
  - 在指定的方法调用前后执行预先设定的代码
  - 阻止原始方法的执行
  - 总结：拦截器就是用来做增强

看完以后，大家会发现

- 拦截器和过滤器在作用和执行顺序上也很相似

所以这个时候，就有一个问题需要思考:拦截器和过滤器之间的区别是什么?

- 归属不同：Filter 属于 Servlet 技术，Interceptor 属于 SpringMVC 技术
- 拦截内容不同：Filter 对所有访问进行增强，Interceptor 仅针对 SpringMVC 的访问进行增强

![1630676903190](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020843.png)
