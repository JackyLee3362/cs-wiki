---
title: Spring MVC Overview
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring MVC Overview

三层架构

![1630427303762](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019936.png)

- 浏览器发送请求给后端，后端使用 Servlet 来接收请求
- 如果所有的处理都交给 Servlet 来处理的话，所有的东西都耦合在一起，对后期的维护和扩展极为不利

- 将后端服务器 Servlet 拆分成三层，分别是 web、service 和 dao
- web 层主要由 servlet 来处理，负责页面请求和数据的收集以及响应结果给前端
  - service 层主要负责业务逻辑的处理
  - dao 层主要负责数据的增删改查操作
  - servlet 处理请求和数据的时候，存在的问题是一个 servlet 只能处理一个请求
- 针对 web 层进行了优化，采用了 MVC 设计模式，将其设计为 controller、view 和 model
  - controller 负责请求和数据的接收，接收后将其转发给 service 进行业务处理
  - service 根据需要会调用 dao 对数据进行增删改查
  - controller 根据需求组装成 Model 和 View, Model 和 View 组合起来生成页面转发给前端
- 这样做的好处就是 controller 可以处理多个请求，并对请求进行分发，执行不同的业务操作。

随着互联网的发展，上面的模式因为是同步调用，性能慢慢的跟不是需求，所以异步调用慢慢的走到了前台，是现在比较流行的一种处理方式。

![1630427769938](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019937.png)

- 因为是异步调用，所以后端不需要返回 view 视图，将其去除
- 前端如果通过异步调用的方式进行交互，后台就需要将返回的数据转换成 json 格式进行返回
- SpringMVC 主要负责的就是
  - controller 如何接收请求和数据
  - 如何将请求和数据转发给业务层
  - 如何将响应数据转换成 json 发回到前端
- SpringMVC 是一种基于 Java 实现 MVC 模型的轻量级 Web 框架

优点

- 使用简单、开发便捷(相比于 Servlet)
- 灵活性强
