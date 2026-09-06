---
title: Spring MVC REST Intro
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## REST Intro

- ==REST==（Representational State Transfer），表现形式状态转换,它是一种软件架构==风格==

  当我们想表示一个网络资源的时候，可以使用两种方式:

  - 传统风格资源描述形式
    - `http://localhost/user/getById?id=1` 查询 id 为 1 的用户信息
    - `http://localhost/user/saveUser` 保存用户信息
  - REST 风格描述形式
    - `http://localhost/user/1`
    - `http://localhost/user`

传统方式一般是一个请求 url 对应一种操作，这样做不仅麻烦，也不安全，因为会程序的人读取了你的请求 url 地址，就大概知道该 url 实现的是一个什么样的操作。

查看 REST 风格的描述，你会发现请求地址变的简单了，并且光看请求 URL 并不是很能猜出来该 URL 的具体功能

所以 REST 的优点有:

- 隐藏资源的访问行为，无法通过地址得知对资源是何种操作
- 书写简化

但是我们的问题也随之而来了，一个相同的 url 地址即可以是新增也可以是修改或者查询，那么到底我们该如何区分该请求到底是什么操作呢?

- 按照 REST 风格访问资源时使用==行为动作==区分对资源进行了何种操作
  - `http://localhost/users` 查询全部用户信息 GET（查询）
  - `http://localhost/users/1` 查询指定用户信息 GET（查询）
  - `http://localhost/users` 添加用户信息 POST（新增/保存）
  - `http://localhost/users` 修改用户信息 PUT（修改/更新）
  - `http://localhost/users/1` 删除用户信息 DELETE（删除）

请求的方式比较多，但是比较常用的就 4 种，分别是`GET`,`POST`,`PUT`,`DELETE`。

按照不同的请求方式代表不同的操作类型。

- 发送 GET 请求是用来做查询
- 发送 POST 请求是用来做新增
- 发送 PUT 请求是用来做修改
- 发送 DELETE 请求是用来做删除

但是==注意==:

- 上述行为是约定方式，约定不是规范，可以打破，所以称 REST 风格，而不是 REST 规范
  - REST 提供了对应的架构方式，按照这种架构设计项目可以降低开发的复杂性，提高系统的可伸缩性
  - REST 中规定 GET/POST/PUT/DELETE 针对的是查询/新增/修改/删除，但是我们如果非要用 GET 请求做删除，这点在程序上运行是可以实现的
  - 但是如果绝大多数人都遵循这种风格，你写的代码让别人读起来就有点莫名其妙了。
- 描述模块的名称通常使用复数，也就是加 s 的格式描述，表示此类资源，而非单个资源，例如:users、books、accounts......

清楚了什么是 REST 风格后，我们后期会经常提到一个概念叫`RESTful`，那什么又是 RESTful 呢?

- 根据 REST 风格对资源进行访问称为==RESTful==。

后期我们在进行开发的过程中，大多是都是遵从 REST 风格来访问我们的后台服务，所以可以说咱们以后都是基于 RESTful 来进行开发的。
