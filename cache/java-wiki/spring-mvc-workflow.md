---
title: Spring MVC Workflow
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Workflow

为了更好的使用 SpringMVC,我们将 SpringMVC 的使用过程总共分两个阶段来分析，分别是`启动服务器初始化过程`和`单次请求过程`

![1630432494752](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019945.png)

#### 2.4.1 启动服务器初始化过程

1. 服务器启动，执行 ServletContainersInitConfig 类，初始化 web 容器

   - 功能类似于以前的 web.xml

2. 执行 createServletApplicationContext 方法，创建了 WebApplicationContext 对象

   - 该方法加载 SpringMVC 的配置类 SpringMvcConfig 来初始化 SpringMVC 的容器

3. 加载 SpringMvcConfig 配置类

   ![1630433335744](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019946.png)

4. 执行@ComponentScan 加载对应的 bean

   - 扫描指定包及其子包下所有类上的注解，如 Controller 类上的@Controller 注解

5. 加载 UserController，每个@RequestMapping 的名称对应一个具体的方法

   ![1630433398932](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019947.png)

   - 此时就建立了 `/save` 和 save 方法的对应关系

6. 执行 getServletMappings 方法，设定 SpringMVC 拦截请求的路径规则

   ![1630433510528](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019948.png)

   - `/`代表所拦截请求的路径规则，只有被拦截后才能交给 SpringMVC 来处理请求

#### 2.4.2 单次请求过程

1. 发送请求`http://localhost/save`
2. web 容器发现该请求满足 SpringMVC 拦截规则，将请求交给 SpringMVC 处理
3. 解析请求路径/save
4. 由/save 匹配执行对应的方法 save(）
   - 上面的第五步已经将请求路径和方法建立了对应关系，通过/save 就能找到对应的 save 方法
5. 执行 save()
6. 检测到有@ResponseBody 直接将 save()方法的返回值作为响应体返回给请求方
