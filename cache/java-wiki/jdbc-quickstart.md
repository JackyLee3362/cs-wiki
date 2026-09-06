---
title: JDBC Quickstart
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# JDBC Quickstart

先来看看通过 Java 操作数据库的流程

- 第一步：编写 Java 代码
- 第二步：Java 代码将 SQL 发送到 MySQL 服务端
- 第三步：MySQL 服务端接收到 SQL 语句并执行该 SQL 语句
- 第四步：将 SQL 语句执行的结果返回给 Java 代码

### 2.1 编写代码步骤

- 创建工程，导入驱动 jar 包

```java
// 注册驱动
Class.forName("com.mysql.jdbc.Driver");
// 获取连接
// Java 代码需要发送 SQL 给 MySQL 服务端，就需要先建立连接
Connection conn = DriverManager.getConnection(url, username, password);
// 定义 SQL 语句
String sql =  "update…" ;
// 执行 sql 对象
// 执行 SQL 语句需要 SQL 执行对象，而这个执行对象就是 Statement 对象
Statement stmt = conn.createStatement();
// 执行 sql
stmt.executeUpdate(sql);
```

- 处理返回结果
- 释放资源

### 2.2 具体操作

- 编写代码如下

```java
/**
 * JDBC快速入门
 */
public class JDBCDemo {

    public static void main(String[] args) throws Exception {
        //1. 注册驱动
        //Class.forName("com.mysql.jdbc.Driver");
        //2. 获取连接
        String url = "jdbc:mysql://127.0.0.1:3306/db1";
        String username = "root";
        String password = "1234";
        Connection conn = DriverManager.getConnection(url, username, password);
        //3. 定义sql
        String sql = "update account set money = 2000 where id = 1";
        //4. 获取执行sql的对象 Statement
        Statement stmt = conn.createStatement();
        //5. 执行sql
        int count = stmt.executeUpdate(sql);//受影响的行数
        //6. 处理结果
        System.out.println(count);
        //7. 释放资源
        stmt.close();
        conn.close();
    }
}
```
