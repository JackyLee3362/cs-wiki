---
title: Spring MVC
description: Spring MVC 核心概念与工作流程
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - spring
  - web
categories:
  - 后端开发
comment: true
---

> Spring MVC 是基于 Java 实现 MVC 模型的轻量级 Web 框架，是 Spring Framework 的 Web 层解决方案。

## 三层架构与 MVC

### 三层架构

- **Web 层（Controller）**：接收请求、收集数据、返回响应
- **Service 层**：业务逻辑处理
- **DAO 层**：数据持久化操作

### MVC 设计模式

- **Model**：数据模型
- **View**：视图（现代 Web 中多为 JSON 数据）
- **Controller**：请求分发与处理

随着前后端分离的发展，Spring MVC 主要负责 Controller 层，将数据以 JSON 格式返回给前端。

## 核心工作流程

### 服务器初始化

1. 启动服务器，初始化 Web 容器（`DispatcherServlet`）
2. 创建 `WebApplicationContext`，加载 Spring MVC 配置类
3. `@ComponentScan` 扫描并加载 Controller Bean
4. 建立请求路径与方法的映射关系（`@RequestMapping`）
5. 配置请求拦截规则（`/` 拦截所有请求）

### 单次请求处理

1. 发送请求，由 `DispatcherServlet` 接收
2. 解析请求路径，匹配对应的 Controller 方法
3. 执行方法，处理请求参数和业务逻辑
4. 若方法有 `@ResponseBody`，直接将返回值序列化为 JSON 响应

## 常用注解

| 注解 | 用途 |
|------|------|
| `@Controller` / `@RestController` | 标识控制器类 |
| `@RequestMapping` | 映射请求路径 |
| `@GetMapping` / `@PostMapping` / `@PutMapping` / `@DeleteMapping` | REST 风格映射 |
| `@RequestParam` | 绑定请求参数 |
| `@PathVariable` | 绑定 URL 路径变量 |
| `@RequestBody` | 绑定请求体 JSON 到对象 |
| `@ResponseBody` | 将返回值序列化为 JSON |

## REST 风格

使用 HTTP 方法表示对资源的操作：

| HTTP 方法 | 操作 |
|-----------|------|
| GET | 查询资源 |
| POST | 新建资源 |
| PUT | 修改资源 |
| DELETE | 删除资源 |

## 拦截器（Interceptor）

拦截器用于在请求处理前后执行通用逻辑，如权限校验、日志记录等。

- 实现 `HandlerInterceptor` 接口
- 通过 `addInterceptors` 配置拦截路径

## 参考资料

- [Spring MVC 通过注解完成运行配置 - 51CTO](https://www.51cto.com/article/754191.html) #todo
- [SpringMVC 解析（一）概览 - 博客园](https://www.cnblogs.com/yuhushen/p/15787827.html) #todo
- [SpringMVC 解析（二）DispatcherServlet - 博客园](https://www.cnblogs.com/yuhushen/p/15874653.html) #todo
- [Spring MVC 静态资源处理 - CSDN](https://blog.csdn.net/zzuhkp/article/details/121604937) #todo
- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
