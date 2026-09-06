---
title: JDBC Connection Pool
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# JDBC Connection Pool

### 4.1 数据库连接池简介

> - 数据库连接池是个容器，负责分配、管理数据库连接(Connection)
>
> - 它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个；
>
> - 释放空闲时间超过最大空闲时间的数据库连接来避免因为没有释放数据库连接而引起的数据库连接遗漏
> - 好处
>   - 资源重用
>   - 提升系统响应速度
>   - 避免数据库连接遗漏

之前我们代码中使用连接是没有使用都创建一个 Connection 对象，使用完毕就会将其销毁。这样重复创建销毁的过程是特别耗费计算机的性能的及消耗时间的。

而数据库使用了数据库连接池后，就能达到 Connection 对象的复用，如下图

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244752.png" alt="image-20210725210432985" style="zoom:80%;" />

连接池是在一开始就创建好了一些连接（Connection）对象存储起来。用户需要连接数据库时，不需要自己创建连接，而只需要从连接池中获取一个连接进行使用，使用完毕后再将连接对象归还给连接池；这样就可以起到资源重用，也节省了频繁创建连接销毁连接所花费的时间，从而提升了系统响应的速度。

### 4.2 数据库连接池实现

- 标准接口：==DataSource==

  官方(SUN) 提供的数据库连接池标准接口，由第三方组织实现此接口。该接口提供了获取连接的功能：

  ```java
  Connection getConnection()
  ```

  那么以后就不需要通过 `DriverManager` 对象获取 `Connection` 对象，而是通过连接池（DataSource）获取 `Connection` 对象。

- 常见的数据库连接池

  - DBCP
  - C3P0
  - Druid

  我们现在使用更多的是 Druid，它的性能比其他两个会好一些。

- Druid（德鲁伊）

  - Druid 连接池是阿里巴巴开源的数据库连接池项目

  - 功能强大，性能优秀，是 Java 语言最好的数据库连接池之一

### 4.3 Driud 使用

> - 导入 jar 包 druid-1.1.12.jar
> - 定义配置文件
> - 加载配置文件
> - 获取数据库连接池对象
> - 获取连接

现在通过代码实现，首先需要先将 druid 的 jar 包放到项目下的 lib 下并添加为库文件

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244753.png" alt="image-20210725212911980" style="zoom:80%;" />

项目结构如下：

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244754.png" alt="image-20210725213210091" style="zoom:80%;" />

编写配置文件如下：

```properties
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql:///db1?useSSL=false&useServerPrepStmts=true
username=root
password=1234
# 初始化连接数量
initialSize=5
# 最大连接数
maxActive=10
# 最大等待时间
maxWait=3000
```

使用 druid 的代码如下：

```java
/**
 * Druid数据库连接池演示
 */
public class DruidDemo {

    public static void main(String[] args) throws Exception {
        //1.导入jar包
        //2.定义配置文件
        //3. 加载配置文件
        Properties prop = new Properties();
        prop.load(new FileInputStream("jdbc-demo/src/druid.properties"));
        //4. 获取连接池对象
        DataSource dataSource = DruidDataSourceFactory.createDataSource(prop);

        //5. 获取数据库连接 Connection
        Connection connection = dataSource.getConnection();
        System.out.println(connection); //获取到了连接后就可以继续做其他操作了

        //System.out.println(System.getProperty("user.dir"));
    }
}
```
