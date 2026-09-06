---
title: JDBC PreparedStatement
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## PreparedStatement

> PreparedStatement 作用：
>
> - 预编译 SQL 语句并执行：预防 SQL 注入问题

对上面的作用中 SQL 注入问题大家肯定不理解。那我们先对 SQL 注入进行说明.

#### 3.6.1 SQL 注入

> SQL 注入是通过操作输入来修改事先定义好的 SQL 语句，用以达到执行代码对服务器进行攻击的方法。

在今天资料下的 `day03-JDBC\资料\2. sql注入演示` 中修改 `application.properties` 文件中的用户名和密码，文件内容如下：

```properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/test?useSSL=false&useUnicode=true&characterEncoding=UTF-8
spring.datasource.username=root
spring.datasource.password=1234
```

在 MySQL 中创建名为 `test` 的数据库

```sql
create database test;
```

在命令提示符中运行今天资料下的 `day03-JDBC\资料\2. sql注入演示\sql.jar` 这个 jar 包。

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244745.png" alt="image-20210725184701026" style="zoom:80%;" />

此时我们就能在数据库中看到 user 表

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244746.png" alt="image-20210725184817731" style="zoom:80%;" />

接下来在浏览器的地址栏输入 `localhost:8080/login.html` 就能看到如下页面

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244747.png" alt="image-20210725185024731" style="zoom:80%;" />

我们就可以在如上图中输入用户名和密码进行登陆。用户名和密码输入正确就登陆成功，跳转到首页。用户名和密码输入错误则给出错误提示，如下图

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244748.png" alt="image-20210725185320875" style="zoom:80%;" />

但是我可以通过输入一些特殊的字符登陆到首页。

用户名随意写，密码写成 `' or '1' ='1`

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244749.png" alt="image-20210725185603112" style="zoom:80%;" />

这就是 SQL 注入漏洞，也是很危险的。当然现在市面上的系统都不会存在这种问题了，所以大家也不要尝试用这种方式去试其他的系统。

那么该如何解决呢？这里就可以将 SQL 执行对象 `Statement` 换成 `PreparedStatement` 对象。

#### 3.6.2 代码模拟 SQL 注入问题

```java
@Test
void testLogin() throws  Exception {
    //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
    String url = "jdbc:mysql:///db1?useSSL=false";
    String username = "root";
    String password = "1234";
    Connection conn = DriverManager.getConnection(url, username, password);

    // 接收用户输入 用户名和密码
    String name = "sjdljfld";
    String pwd = "' or '1' = '1";
    String sql = "select * from tb_user where username = '"+name+"' and password = '"+pwd+"'";
    // 获取stmt对象
    Statement stmt = conn.createStatement();
    // 执行sql
    ResultSet rs = stmt.executeQuery(sql);
    // 判断登录是否成功
    if(rs.next()){
        System.out.println("登录成功~");
    }else{
        System.out.println("登录失败~");
    }

    //7. 释放资源
    rs.close();
    stmt.close();
    conn.close();
}
```

上面代码是将用户名和密码拼接到 sql 语句中，拼接后的 sql 语句如下

```sql
select * from tb_user where username = 'sjdljfld' and password = ''or '1' = '1'
```

从上面语句可以看出条件 `username = 'sjdljfld' and password = ''` 不管是否满足，而 `or` 后面的 `'1' = '1'` 是始终满足的，最终条件是成立的，就可以正常的进行登陆了。

接下来我们来学习 PreparedStatement 对象.

#### 3.6.3 PreparedStatement 概述

> PreparedStatement 作用：
>
> - 预编译 SQL 语句并执行：预防 SQL 注入问题

- 获取 PreparedStatement 对象

  ```java
  // SQL语句中的参数值，使用？占位符替代
  String sql = "select * from user where username = ? and password = ?";
  // 通过Connection对象获取，并传入对应的sql语句
  PreparedStatement pstmt = conn.prepareStatement(sql);
  ```

- 设置参数值

  上面的 sql 语句中参数使用 ? 进行占位，在之前之前肯定要设置这些 ? 的值。

  > PreparedStatement 对象：setXxx(参数 1，参数 2)：给 ? 赋值
  >
  > - Xxx：数据类型 ； 如 setInt (参数 1，参数 2)
  >
  > - 参数：
  >
  >   - 参数 1： ？的位置编号，从 1 开始
  >
  >   - 参数 2： ？的值

- 执行 SQL 语句

  > executeUpdate(); 执行 DDL 语句和 DML 语句
  >
  > executeQuery(); 执行 DQL 语句
  >
  > ==注意：==
  >
  > - 调用这两个方法时不需要传递 SQL 语句，因为获取 SQL 语句执行对象时已经对 SQL 语句进行预编译了。

#### 3.6.4 使用 PreparedStatement 改进

```java
 @Test
void testPreparedStatement() throws  Exception {
    //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
    String url = "jdbc:mysql:///db1?useSSL=false";
    String username = "root";
    String password = "1234";
    Connection conn = DriverManager.getConnection(url, username, password);

    // 接收用户输入 用户名和密码
    String name = "zhangsan";
    String pwd = "' or '1' = '1";

    // 定义sql
    String sql = "select * from tb_user where username = ? and password = ?";
    // 获取pstmt对象
    PreparedStatement pstmt = conn.prepareStatement(sql);
    // 设置？的值
    pstmt.setString(1,name);
    pstmt.setString(2,pwd);
    // 执行sql
    ResultSet rs = pstmt.executeQuery();
    // 判断登录是否成功
    if(rs.next()){
        System.out.println("登录成功~");
    }else{
        System.out.println("登录失败~");
    }
    //7. 释放资源
    rs.close();
    pstmt.close();
    conn.close();
}
```

执行上面语句就可以发现不会出现 SQL 注入漏洞问题了。那么 PreparedStatement 又是如何解决的呢？它是将特殊字符进行了转义，转义的 SQL 如下：

```sql
select * from tb_user where username = 'sjdljfld' and password = '\'or \'1\' = \'1'
```

#### 3.6.5 PreparedStatement 原理

> PreparedStatement 好处：
>
> - 预编译 SQL，性能更高
> - 防止 SQL 注入：==将敏感字符进行转义==

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244750.png" alt="image-20210725195756848" style="zoom:80%;" />

Java 代码操作数据库流程如图所示：

- 将 sql 语句发送到 MySQL 服务器端

- MySQL 服务端会对 sql 语句进行如下操作

  - 检查 SQL 语句

    检查 SQL 语句的语法是否正确。

  - 编译 SQL 语句。将 SQL 语句编译成可执行的函数。

    检查 SQL 和编译 SQL 花费的时间比执行 SQL 的时间还要长。如果我们只是重新设置参数，那么检查 SQL 语句和编译 SQL 语句将不需要重复执行。这样就提高了性能。

  - 执行 SQL 语句

接下来我们通过查询日志来看一下原理。

- 开启预编译功能

  在代码中编写 url 时需要加上以下参数。而我们之前根本就没有开启预编译功能，只是解决了 SQL 注入漏洞。

  ```sql
  useServerPrepStmts=true
  ```

- 配置 MySQL 执行日志（重启 mysql 服务后生效）

  在 mysql 配置文件（my.ini）中添加如下配置

  ```
  log-output=FILE
  general-log=1
  general_log_file="D:\mysql.log"
  slow-query-log=1
  slow_query_log_file="D:\mysql_slow.log"
  long_query_time=2
  ```

- java 测试代码如下：

  ```java
   /**
     * PreparedStatement原理
     * @throws Exception
     */
  @Test
  void testPreparedStatement2() throws  Exception {

      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      // useServerPrepStmts=true 参数开启预编译功能
      String url = "jdbc:mysql:///db1?useSSL=false&useServerPrepStmts=true";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);

      // 接收用户输入 用户名和密码
      String name = "zhangsan";
      String pwd = "' or '1' = '1";

      // 定义sql
      String sql = "select * from tb_user where username = ? and password = ?";

      // 获取pstmt对象
      PreparedStatement pstmt = conn.prepareStatement(sql);

      Thread.sleep(10000);
      // 设置？的值
      pstmt.setString(1,name);
      pstmt.setString(2,pwd);
      ResultSet rs = null;
      // 执行sql
      rs = pstmt.executeQuery();

      // 设置？的值
      pstmt.setString(1,"aaa");
      pstmt.setString(2,"bbb");
      // 执行sql
      rs = pstmt.executeQuery();

      // 判断登录是否成功
      if(rs.next()){
          System.out.println("登录成功~");
      }else{
          System.out.println("登录失败~");
      }

      //7. 释放资源
      rs.close();
      pstmt.close();
      conn.close();
  }
  ```

- 执行 SQL 语句，查看 `D:\mysql.log` 日志如下:

  ![image-20210725202829738](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244751.png)

  上图中第三行中的 `Prepare` 是对 SQL 语句进行预编译。第四行和第五行是执行了两次 SQL 语句，而第二次执行前并没有对 SQL 进行预编译。

> ==小结：==
>
> - 在获取 PreparedStatement 对象时，将 sql 语句发送给 mysql 服务器进行检查，编译（这些步骤很耗时）
> - 执行时就不用再进行这些步骤了，速度更快
> - 如果 sql 模板一样，则只需要进行一次检查、编译
