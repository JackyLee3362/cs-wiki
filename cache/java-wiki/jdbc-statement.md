---
title: JDBC Statement
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Statement

#### 3.3.1 概述

Statement 对象的作用就是用来执行 SQL 语句。而针对不同类型的 SQL 语句使用的方法也不一样。

- 执行 DDL、DML 语句

  ![image-20210725175151272](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244741.png)

- 执行 DQL 语句

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244742.png" alt="image-20210725175131533" style="zoom:80%;" />

  该方法涉及到了 `ResultSet` 对象，而这个对象我们还没有学习，一会再重点讲解。

#### 3.3.2 代码实现

- 执行 DML 语句

  ```java
  /**
    * 执行DML语句
    * @throws Exception
    */
  @Test
  void testDML() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);
      //3. 定义sql
      String sql = "update account set money = 3000 where id = 1";
      //4. 获取执行sql的对象 Statement
      Statement stmt = conn.createStatement();
      //5. 执行sql
      int count = stmt.executeUpdate(sql);//执行完DML语句，受影响的行数
      //6. 处理结果
      //System.out.println(count);
      if(count > 0){
          System.out.println("修改成功~");
      }else{
          System.out.println("修改失败~");
      }
      //7. 释放资源
      stmt.close();
      conn.close();
  }
  ```

- 执行 DDL 语句

  ```java
  /**
    * 执行DDL语句
    * @throws Exception
    */
  @Test
  void testDDL() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);
      //3. 定义sql
      String sql = "drop database db2";
      //4. 获取执行sql的对象 Statement
      Statement stmt = conn.createStatement();
      //5. 执行sql
      int count = stmt.executeUpdate(sql);//执行完DDL语句，可能是0
      //6. 处理结果
      System.out.println(count);

      //7. 释放资源
      stmt.close();
      conn.close();
  }
  ```

  > 注意：
  >
  > - 以后开发很少使用 java 代码操作 DDL 语句
