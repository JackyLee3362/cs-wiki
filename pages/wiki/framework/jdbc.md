---
title: JDBC
description: Java 数据库连接规范
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - 数据库
categories:
  - 后端开发
comment: true
---

> JDBC（Java Database Connectivity）是 Java 语言操作关系型数据库的一套标准 API，由 sun 公司定义接口，各数据库厂商提供驱动实现。

## 核心接口

| 接口/类 | 作用 |
|---------|------|
| `DriverManager` | 管理数据库驱动，获取连接 |
| `Connection` | 数据库连接 |
| `Statement` | 执行静态 SQL |
| `PreparedStatement` | 执行预编译 SQL（防 SQL 注入）|
| `ResultSet` | 封装查询结果集 |

## JDBC 本质

- 官方定义一套操作所有关系型数据库的规则（接口）
- 各数据库厂商实现这套接口，提供数据库驱动 jar 包
- 开发者面向 JDBC 接口编程，真正执行的是驱动中的实现类

## 连接池

直接使用 JDBC 每次创建/关闭连接开销大，生产环境使用连接池：

| 连接池 | 特点 |
|--------|------|
| HikariCP | 性能最高，Spring Boot 2.0+ 默认 |
| Druid | 阿里出品，带监控功能 |
| c3p0 | 老牌连接池，配置较复杂 |

## 参考资料

- [黑马程序员 SSM 课程](https://www.bilibili.com/video/BV1Fi4y1S7ix) #todo
