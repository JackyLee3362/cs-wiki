---
title: JDBC DriverManager
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## DriverManager

DriverManager（驱动管理类）作用：

- 注册驱动

  ![image-20210725171339346](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244734.png)

  registerDriver 方法是用于注册驱动的，但是我们之前做的入门案例并不是这样写的。而是如下实现

  ```sql
  Class.forName("com.mysql.jdbc.Driver");
  ```

  我们查询 MySQL 提供的 Driver 类，看它是如何实现的，源码如下：

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244735.png" alt="image-20210725171635432" style="zoom:70%;" />

  在该类中的静态代码块中已经执行了 `DriverManager` 对象的 `registerDriver()` 方法进行驱动的注册了，那么我们只需要加载 `Driver` 类，该静态代码块就会执行。而 `Class.forName("com.mysql.jdbc.Driver");` 就可以加载 `Driver` 类。

  > ==提示：==
  >
  > - MySQL 5 之后的驱动包，可以省略注册驱动的步骤
  > - 自动加载 jar 包中 META-INF/services/java.sql.Driver 文件中的驱动类

- 获取数据库连接

  ![image-20210725171355278](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244736.png)

  参数说明：

  - url ： 连接路径

    > 语法：jdbc:mysql://ip 地址(域名):端口号/数据库名称?参数键值对 1&参数键值对 2…
    >
    > 示例：jdbc:mysql://127.0.0.1:3306/db1
    >
    > ==细节：==
    >
    > - 如果连接的是本机 mysql 服务器，并且 mysql 服务默认端口是 3306，则 url 可以简写为：jdbc:mysql:///数据库名称?参数键值对
    >
    > - 配置 useSSL=false 参数，禁用安全连接方式，解决警告提示

  - user ：用户名
  - password ：密码
