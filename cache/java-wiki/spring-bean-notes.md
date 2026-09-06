---
title: Spring Bean Notes
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring Bean Notes

### p02 课程介绍

学什么 IoC 和 AOP

### p04 Spring系统架构

#### 08:28 SpringFramework 系统架构

![p04-08-28-SpringFramework系统架构](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251018.png)

### p05 核心概念

Ioc: Inversion of Control 控制反转：对象的控制建议权转移到外部

#### 02:59 IoC 解释

![p05-02-59-ioc解释](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251450.png)

#### 07:48 IoC 解释

![p05-07-48-ioc解释](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251729.png)

### p06 IoC 入门案例

#### 11:21 IoC 入门案例 xml

![p06-11-21-ioc入门案例xml](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008873.png)

#### 11:27 IoC 入门案例 xml2

![p06-11-27-ioc入门案例xml2](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251137.png)

#### pom.xml 的基本写法

```xml
<?xml version="1.0" encoding="utf-8" ?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>springbean</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</project>
```

### p07 DI 入门案例

#### 06:22 DI 入门案例

![p07-06-22-DI入门案例](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251372.png)

### p08 bean 基础配置

默认单例，更改为非单例`prototype`

```xml
<bean id="bookDao" class="com.example.dao.impl.BookDaoimpl" scope="prototype"/>
```

#### 01:02 bean 基础配置

![p08-01-02-bean基础配置](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008874.png)

#### 06:59 bean 作用范围配置

![p08-06-59-bean作用范围配置](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251889.png)

### p09 bean 实例化——构造方法

#### 06:14 实例化 bean 的三种方式构造方法（常用）

![p09-06-14-实例化bean的三种方式-构造方法（常用）](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150251601.png)

### p10 bean 实例化-静态工厂

#### 04:15 实例化 bean 的三种方式静态工厂（了解）

![p10-04-15-实例化bean的三种方式-静态工厂（了解）](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150252842.png)

### p11 实例工厂与 FactoryBean

#### 05:07 实例化 bean 的三种方式实例工厂（了解）

![p11-05-07-实例化bean的三种方式-实例工厂（了解）](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008875.png)

#### 10:11 实例化 bean 的第四种方式 FactoryBean

![p11-10-11-实例化bean的第四种方式-FactoryBean](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008876.png)

### p12 bean 的生命周期

#### 03:55 配置 init 和 destory 方法运行后的问题

![p12-03-55-配置init和destory方法运行后的问题](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008877.png)

#### 06:16 配置 init 和 destory 方法运行后的问题解决方案 1

![p12-06-16-配置init和destory方法运行后的问题-解决方案1](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008878.png)

#### 07:53 spring 标准配置 init 和 destory

![p12-07-53-spring标准配置init和destory](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008879.png)

#### 07:53 配置 init 和 destory 方法运行后的问题解决方案 2

![p12-07-53-配置init和destory方法运行后的问题-解决方案2](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008880.png)

#### 12:30 bean 生命周期

![p12-12-30-bean生命周期](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008881.png)

#### 13:40 bean 生命周期控制

![p12-13-40-bean生命周期控制](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008882.png)

#### 13:40 bean 销毁时期

![p12-13-40-bean销毁时期](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008883.png)

### p13 setter 注入

#### 02:18 依赖注入方式 4 种

![p13-02-18-依赖注入方式4种](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008884.png)

#### 07:52 依赖注入 setter 注入简单类型

![p13-07-52-依赖注入-setter注入-简单类型-案例](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008885.png)

#### 08:17 依赖注入 setter 注入引用类型

![p13-08-17-依赖注入-setter注入-引用类型](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008886.png)

#### 08:23 依赖注入 setter 注入简单类型

![p13-08-23-依赖注入-setter注入-简单类型](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008887.png)

### p14 构造器注入

#### 04:08 依赖注入构造器注入引用类型

![p14-04-08-依赖注入-构造器注入-引用类型](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008888.png)

#### 05:24 依赖注入构造器注入简单和引用类型

![p14-05-24-依赖注入-构造器注入-简单和引用类型](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008889.png)

#### 07:57 依赖注入构造器注入去掉 name

![p14-07-57-依赖注入-构造器注入-去掉name](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008890.png)

#### 14:21 依赖注入方式小结

![p14-14-21-依赖注入方式-小结](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008891.png)

### p15 自动装配

#### 02:46 自动装配 xml 配置怎么写

![p15-02-46-自动装配-xml配置怎么写](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008892.png)

#### 09:18 依赖自动装配特征

![p15-09-18-依赖自动装配特征](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008893.png)

### p16 集合注入

#### 02:30 集合注入 array 和 list

![p16-02-30-集合注入-array和list](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008894.png)

#### 03:55 集合注入 set 和 map

![p16-03-55-集合注入-set和map](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008895.png)

#### 04:50 集合注入 properties

![p16-04-50-集合注入-properties](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008896.png)

### p17 案例-数据源对象管理

#### 05:34 第三方 bean 管理

![p17-05-34-第三方bean管理](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008897.png)

#### 13:11 数据源对象管理

![p17-13-11-数据源对象管理](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008898.png)

### p18 加载 properties 文件

#### 02:38 开辟新的命名空间

![p18-02-38-开辟新的命名空间](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008899.png)

#### 04:58 properties 使用 bean 示例

![p18-04-58-properties使用bean示例](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008900.png)

#### 06:36 加载 properties 文件

![p18-06-36-加载properties文件](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008901.png)

#### 12:02 导入 properties 标准写法

![p18-12-02-导入properties标准写法](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008902.png)

#### 12:13 加载 properties 文件

![p18-12-13-加载properties文件](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008903.png)

### p19 容器

#### 05:25 创建容器三种方式

![p19-05-25-创建容器-三种方式](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008904.png)

#### 05:40 获取 bean 的三种方式

![p19-05-40-获取bean的三种方式](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008905.png)

#### 12:33 容器类层次结构图

![p19-12-33-容器类层次结构图](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008906.png)

#### 13:31 BeanFactory 初始化

![p19-13-31-BeanFactory初始化](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008907.png)

### p20 核心容器总结

#### 01:17 容器相关

![p20-01-17-容器相关](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008908.png)

#### 01:33 bean 相关

![p20-01-33-bean相关](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008909.png)

#### 03:05 依赖注入相关

![p20-03-05-依赖注入相关](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008910.png)

### p21 注解开发定义 bean

#### 00:58 注解开发

![p21-00-58-注解开发](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008911.png)

#### 06:52 注解开发定义 bean

![p21-06-52-注解开发定义bean](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008912.png)

### p22 纯注解开发模式

#### 04:23 纯注解开发

![p22-04-23-纯注解开发](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008913.png)

#### 05:50 纯注解开发加载容器

![p22-05-50-纯注解开发-加载容器](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008914.png)

### p23 注解开发 bean 作用范围与生命周期管理

#### 04:13 bean 生命周期

![p23-04-13-bean生命周期](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008915.png)

### p24 注解开发依赖注入

#### 05:34 依赖注入

![p24-05-34-依赖注入](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008916.png)

#### 06:22 依赖注入（如果存在两个 impl 怎么办，用 atQ）

![p24-06-22-依赖注入（如果存在两个impl怎么办，用atQ）](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008917.png)

#### 07:40 依赖注入简单类型 Value

![p24-07-40-依赖注入-简单类型Value](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008918.png)

#### 11:52 加载 properties 文件

![p24-11-52-加载properties文件](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008919.png)

### p25 注解开发管理第三方 bean

#### 00:30 第三方 bean 管理

![p25-00-30-第三方bean管理](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008920.png)

#### 04:54 第三方 bean 管理示例

![p25-04-54-第三方bean管理示例](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008921.png)

#### 07:15 拆分 Bean 到另一个配置类中

![p25-07-15-拆分Bean到另一个配置类中](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008922.png)

#### 07:35 第三方 bean 管理

![p25-07-35-第三方bean管理](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008923.png)

### p26 注解开发实现为第三方 bean 注入资源

#### 03:59 第三方 bean 依赖注入简单类型

![p26-03-59-第三方bean依赖注入-简单类型](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008924.png)

### p27 注解开发总结

#### 00:25 XML 配置对比注解配置（重点几个）

![p27-00-25-XML配置对比注解配置（重点几个）](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008925.png)

#### 04:25 XML 配置对比注解配置

![p27-04-25-XML配置对比注解配置](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008927.png)

### p28 spring 整合 mybatis 思路分析

#### 02:37 Spring 整合 MyBatis

![p28-02-37-Spring整合MyBatis](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008928.png)

#### 04:29 Spring 整合 MyBatis

![p28-04-29-Spring整合MyBatis](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008929.png)

#### 04:55 xml 配置

![p28-04-55-xml配置](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008930.png)

#### 05:05 xml 配置

![p28-05-05-xml配置](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008931.png)

### p29 spring 整合 MyBatis

#### 18:15 Spring 整合 MyBatis

![p29-18-15-Spring整合MyBatis](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008932.png)

### p30 Spring 整合 JUnit

#### 05:23 整合 Junit

![p30-05-23-整合Junit](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008933.png)

### p31 AOP 简介

#### 05:46 AOP 简介

![p31-05-46-AOP简介](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008934.png)

#### 10:21 AOP 核心概念

![p31-10-21-AOP核心概念](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008935.png)

#### 10:54 AOP 核心概念

![p31-10-54-AOP核心概念](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008936.png)

### p33 AOP 工作流程

#### 00:21 AOP 工作流程

![p33-00-21-AOP工作流程](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008937.png)

#### 06:02 AOP 工作流程

![p33-06-02-AOP工作流程](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008938.png)

### p37 AOP 通知获取数据

#### 08:39 aop 中如果增强鲁棒性

![p37-08-39-aop中如果增强鲁棒性](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008939.png)

#### 13:59 AOP 通知获取参数数据

![p37-13-59-AOP通知获取参数数据](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008940.png)

### p38 案例-百度网盘密码数据兼容处理

Service 类中

```java
    @Transactional
    public void transfer(Integer in, Integer out, Integer age) {
        userDao.inAge(in, age);
        int a = 1/0;
        userDao.outAge(out, age);
    }
```

### p42 spring 事务属性

#### 15:33 事务传播行为

![p42-15-33-事务传播行为](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008941.png)
