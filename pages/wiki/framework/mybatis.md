---
title: MyBatis
description: MyBatis 持久层框架核心概念
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - orm
  - 数据库
categories:
  - 后端开发
comment: true
---

> MyBatis 是一款优秀的持久层框架，支持自定义 SQL、存储过程以及高级映射，避免了几乎所有的 JDBC 代码和手动设置参数。

## 核心概念

- **SqlSessionFactory**：创建 SqlSession 的工厂，应用级单例
- **SqlSession**：数据库会话，线程不安全，每次请求后关闭
- **Mapper 接口**：定义 SQL 操作，MyBatis 通过动态代理生成实现类
- **Mapper XML**：存放 SQL 语句，与 Mapper 接口方法绑定

## 两种开发方式

### XML 配置方式

SQL 写在 XML 文件中，通过 namespace 与接口全限定名绑定。

### 注解方式

直接在 Mapper 接口方法上使用 `@Select`、`@Insert`、`@Update`、`@Delete` 注解写 SQL。

## 动态 SQL

MyBatis 提供强大的动态 SQL 支持：

- `<if>`：条件判断
- `<where>` / `<set>`：智能去除多余关键字
- `<foreach>`：循环遍历（IN 条件、批量插入）
- `<choose>` / `<when>` / `<otherwise>`：多分支选择

## 参数传递

- 单参数：直接使用 `#{参数名}`
- 多参数：使用 `@Param` 注解指定名称，或封装为对象/Map

## 与 Spring 整合

通过 `mybatis-spring` 整合，将 SqlSessionFactory 和 Mapper 扫描交由 Spring 容器管理：

```java
@Bean
public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource) {
    SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
    factoryBean.setDataSource(dataSource);
    factoryBean.setTypeAliasesPackage("com.example.domain");
    return factoryBean;
}

@Bean
public MapperScannerConfigurer mapperScannerConfigurer() {
    MapperScannerConfigurer msc = new MapperScannerConfigurer();
    msc.setBasePackage("com.example.dao");
    return msc;
}
```

## 单独开发 MyBatis 配置

### 核心配置文件 SqlMapConfig.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <properties resource="jdbc.properties"></properties>
    <typeAliases>
        <package name="com.example.domain"/>
    </typeAliases>
    <environments default="mysql">
        <environment id="mysql">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <package name="com.example.dao"/>
    </mappers>
</configuration>
```

### XML 映射文件规范

- XML 映射文件的名称与 Mapper 接口名称一致，并且将 XML 映射文件和 Mapper 接口放置在相同包下（同包同名）
- XML 映射文件的 namespace 属性为 Mapper 接口全限定名一致
- XML 映射文件中的 SQL 语句的 id 与 Mapper 接口中的方法名一致，并保持返回类型一致

## 代码生成器

```sh
mvn mybatis-generator:generate
```

## 参考资料

- [深入剖析 MyBatis 核心原理 - 开篇词](https://learn.lianglianglee.com/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90%20MyBatis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86-%e5%ae%8c/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%20%e9%a2%86%e7%95%a5%20MyBatis%20%e8%ae%be%e8%ae%a1%e6%80%9d%e7%bb%b4%ef%bc%8c%e7%aa%81%e7%a0%b4%e6%8c%81%e4%b9%85%e5%8c%96%e6%8a%80%e6%9c%af%e7%93%b6%e9%a2%88.md) #todo
- [Mybatis3 详解（一）Mybatis 的介绍 - 博客园](https://www.cnblogs.com/tanghaorong/p/13856465.html) #todo
- [homejim/mybatis-examples: mybatis 使用示例](https://github.com/homejim/mybatis-examples) #todo
- [baomidou/mybatis-plus-samples: MyBatis-Plus Samples](https://github.com/baomidou/mybatis-plus-samples) #todo
- [mybatis generator 生成带 Lombok 注解和数据库注释的实体 - 掘金](https://juejin.cn/post/6958692982363160607) #todo
- [通过 MyBatis 拦截器实现完整 SQL 打印：从原理到实战 - 知乎](https://zhuanlan.zhihu.com/p/1923860725945861775) #todo
- [MyBatis 的好帮手-MybatisX - 掘金](https://juejin.cn/post/7262721189647925308) #todo
- [SpringBoot 使用 H2 内存数据库单元测试 - 腾讯云](https://cloud.tencent.com/developer/article/1870289) #todo
- [springboot 单元测试 h2 数据回滚 - 51CTO](https://blog.51cto.com/u_16099341/10175054) #todo
- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
