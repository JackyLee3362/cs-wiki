---
title: Spring Framework
description: Spring 框架核心概念
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - spring
  - 框架
categories:
  - 后端开发
comment: true
---

> Spring Framework 是 Java 企业级开发的事实标准，核心包括 IoC 容器、AOP 面向切面编程和声明式事务管理。

## Spring 家族

- **Spring Framework**：核心框架，所有其他技术的基础
- **Spring Boot**：简化 Spring 应用开发和配置
- **Spring Cloud**：微服务架构解决方案
- **Spring Data / Security**：数据访问、安全等专项框架

## IoC / DI

### IoC（控制反转）

使用对象时，由主动 `new` 产生对象转换为由外部提供对象，对象创建控制权由程序转移到外部容器。

### DI（依赖注入）

在容器中建立 bean 与 bean 之间的依赖关系的整个过程。

### 注入方式选择

| 方式 | 适用场景 | 推荐度 |
|------|----------|--------|
| Setter 注入 | 可选依赖 | 推荐（自己开发的模块）|
| 构造器注入 | 强制依赖 | 推荐（第三方框架主流）|

## AOP（面向切面编程）

在不惊动原始设计的基础上为其进行功能增强，底层采用代理模式实现。

### 核心概念

| 概念 | 说明 |
|------|------|
| 连接点（JoinPoint）| 程序执行过程中的任意位置，如方法执行 |
| 切入点（Pointcut）| 匹配连接点的表达式，定义哪些方法需要增强 |
| 通知（Advice）| 增强的具体逻辑，如日志、事务 |
| 切面（Aspect）| 描述通知与切入点的对应关系 |
| 目标对象（Target）| 被增强的原始对象 |
| 代理（Proxy）| 对目标对象进行功能增强后的对象 |

### AOP 工作流程

1. Spring 容器启动，加载目标类和通知类
2. 读取切入点配置，匹配目标方法
3. 匹配成功则创建代理对象，匹配失败创建原始对象

## 事务管理

Spring 提供声明式事务管理，通过 `@Transactional` 注解实现。

### 事务配置属性

| 属性 | 说明 |
|------|------|
| readOnly | true 只读事务，false 读写事务 |
| timeout | 超时时间（秒），-1 表示不限制 |
| rollbackFor | 指定异常触发回滚 |
| noRollbackFor | 指定异常不触发回滚 |
| isolation | 隔离级别（DEFAULT / READ_UNCOMMITTED / READ_COMMITTED / REPEATABLE_READ / SERIALIZABLE）|
| propagation | 传播行为 |

### 事务传播行为

| 行为 | 说明 |
|------|------|
| REQUIRED | 默认，加入当前事务，无则新建 |
| REQUIRES_NEW | 挂起当前事务，创建新事务 |
| SUPPORTS | 有事务则加入，无则以非事务执行 |
| NOT_SUPPORTED | 挂起当前事务，以非事务执行 |
| NEVER | 不允许在事务中执行 |

### @Transactional 放置位置建议

- 写在实现类或实现类方法上（避免接口继承导致的事务失效）

## 依赖注入注解对比

| 注解 | 来源 | 注入方式 |
|------|------|----------|
| `@Autowired` | Spring | 按类型注入 |
| `@Resource` | JDK | 按名称注入 |
| `@Qualifier` | Spring | 配合 `@Autowired` 指定 bean 名称 |
| `@Primary` | Spring | 同类型多个 bean 时的默认选择 |

## Spring Boot 扩展

### 自定义 Starter

Spring Boot 通过 `spring.factories` 或 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 文件注册自动配置类，实现第三方 Starter 的按需加载。

### 返回 JSON 与数据封装

Spring Boot 默认使用 Jackson 进行 JSON 序列化。接口返回数据时，通常需要统一封装为结果对象（包含 code、message、data 字段），以便前后端协作。

## 参考资料

- [Spring 官网](https://spring.io/) #todo
- [Spring @DateTimeFormat 文档](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/format/annotation/DateTimeFormat.html) #todo
- [Spring @PropertySource 注解详解](https://blog.csdn.net/qq_40837310/article/details/106587158) #todo
- [深入浅出 JMS 基本概念](https://www.cnblogs.com/binarylei/p/8686277.html) #todo
- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
- [Spring Boot Reference Guide - Custom Starter](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/htmlsingle/#boot-features-custom-starter) #todo
- [spring-boot-starters 里为什么没有代码 - CSDN](https://blog.csdn.net/javadeaihaozhe/article/details/107105549) #todo
- [<后端初学者>Spring Boot 返回 JSON 数据及数据封装 - 掘金](https://juejin.cn/post/6873288147820609550) #todo
- [SpringBoot 实现 WebMvcConfigurationSupport 导致自定义的 JSON 时间返回格式不生效 - CSDN](https://blog.csdn.net/DiligentOrange/article/details/106869878) #todo
