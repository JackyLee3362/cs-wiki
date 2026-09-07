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

## 参考资料

- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
