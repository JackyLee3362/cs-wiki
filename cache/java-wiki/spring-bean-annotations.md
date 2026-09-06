---
title: Spring Bean Annotations
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring Bean Annotations

@Scale

- 默认单例，应用启动时创建，可以用@Lazy 延迟初始化
- @Scale("prototype") 非单例

## SpringBean 中的条件注解

比如存在"com.example.Student"才会加入 IOC 容器中

@ConditionalOnClass(name="com.example.Student")

---

不存在该类型的 bean，才会加入到容器中

@ConditionalOnMissingBean

用途：一般是用户自定义 Bean，就不加载默认的 Bean 了

---

@ConditionalOnProperty(name="name",havingValue="jacky")

判断配置文件中是否有对应的值，有就加载 Bean 到 IOC 容器中

用途：在 Spring 中整合第三方库的时候，只有在配置中声明了对应的 Bean 对象

## AOP

### 知识点1：@EnableAspectJAutoProxy  

| 名称 | @EnableAspectJAutoProxy |
| ---- | ----------------------- |
| 类型 | 配置类注解              |
| 位置 | 配置类定义上方          |
| 作用 | 开启注解格式AOP功能     |

### 知识点2：@Aspect

| 名称 | @Aspect               |
| ---- | --------------------- |
| 类型 | 类注解                |
| 位置 | 切面类定义上方        |
| 作用 | 设置当前类为AOP切面类 |

### 知识点3：@Pointcut   

| 名称 | @Pointcut                   |
| ---- | --------------------------- |
| 类型 | 方法注解                    |
| 位置 | 切入点方法定义上方          |
| 作用 | 设置切入点方法              |
| 属性 | value（默认）：切入点表达式 |

### 知识点4：@Before

| 名称 | @Before                                                      |
| ---- | ------------------------------------------------------------ |
| 类型 | 方法注解                                                     |
| 位置 | 通知方法定义上方                                             |
| 作用 | 设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法前运行 |


## 参考资料

- [Spring 高级之注解@PropertySource 详解（超详细）\_propetysource-CSDN 博客](https://blog.csdn.net/qq_40837310/article/details/106587158)
