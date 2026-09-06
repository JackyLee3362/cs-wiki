---
title: JDBC API
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# JDBC API

### 3.1 DriverManager

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

### 3.2 Connection

Connection（数据库连接对象）作用：

- 获取执行 SQL 的对象
- 管理事务

#### 3.2.1 获取执行对象

- 普通执行 SQL 对象

  ```sql
  Statement createStatement()
  ```

  入门案例中就是通过该方法获取的执行对象。

- 预编译 SQL 的执行 SQL 对象：防止 SQL 注入

  ```sql
  PreparedStatement  prepareStatement(sql)
  ```

  通过这种方式获取的 `PreparedStatement` SQL 语句执行对象是我们一会重点要进行讲解的，它可以防止 SQL 注入。

- 执行存储过程的对象

  ```sql
  CallableStatement prepareCall(sql)
  ```

  通过这种方式获取的 `CallableStatement` 执行对象是用来执行存储过程的，而存储过程在 MySQL 中不常用，所以这个我们将不进行讲解。

#### 3.2.2 事务管理

先回顾一下 MySQL 事务管理的操作：

- 开启事务 ： BEGIN; 或者 START TRANSACTION;
- 提交事务 ： COMMIT;
- 回滚事务 ： ROLLBACK;

> MySQL 默认是自动提交事务

接下来学习 JDBC 事务管理的方法。

Connection 几口中定义了 3 个对应的方法：

- 开启事务

  ![image-20210725173444628](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244737.png)

  参与 autoCommit 表示是否自动提交事务，true 表示自动提交事务，false 表示手动提交事务。而开启事务需要将该参数设为为 false。

- 提交事务

  ![image-20210725173618636](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244738.png)

- 回滚事务

  ![image-20210725173648674](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244740.png)

具体代码实现如下：

```sql
/**
 * JDBC API 详解：Connection
 */
public class JDBCDemo3_Connection {

    public static void main(String[] args) throws Exception {
        //1. 注册驱动
        //Class.forName("com.mysql.jdbc.Driver");
        //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
        String url = "jdbc:mysql:///db1?useSSL=false";
        String username = "root";
        String password = "1234";
        Connection conn = DriverManager.getConnection(url, username, password);
        //3. 定义sql
        String sql1 = "update account set money = 3000 where id = 1";
        String sql2 = "update account set money = 3000 where id = 2";
        //4. 获取执行sql的对象 Statement
        Statement stmt = conn.createStatement();

        try {
            // ============开启事务==========
            conn.setAutoCommit(false);
            //5. 执行sql
            int count1 = stmt.executeUpdate(sql1);//受影响的行数
            //6. 处理结果
            System.out.println(count1);
            int i = 3/0;
            //5. 执行sql
            int count2 = stmt.executeUpdate(sql2);//受影响的行数
            //6. 处理结果
            System.out.println(count2);

            // ============提交事务==========
            //程序运行到此处，说明没有出现任何问题，则需求提交事务
            conn.commit();
        } catch (Exception e) {
            // ============回滚事务==========
            //程序在出现异常时会执行到这个地方，此时就需要回滚事务
            conn.rollback();
            e.printStackTrace();
        }

        //7. 释放资源
        stmt.close();
        conn.close();
    }
}
```

### 3.3 Statement

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

### 3.4 ResultSet

#### 3.4.1 概述

ResultSet（结果集对象）作用：

- ==封装了 SQL 查询语句的结果。==

而执行了 DQL 语句后就会返回该对象，对应执行 DQL 语句的方法如下：

```sql
ResultSet  executeQuery(sql)：执行DQL 语句，返回 ResultSet 对象
```

那么我们就需要从 `ResultSet` 对象中获取我们想要的数据。`ResultSet` 对象提供了操作查询结果数据的方法，如下：

> boolean next()
>
> - 将光标从当前位置向前移动一行
> - 判断当前行是否为有效行
>
> 方法返回值说明：
>
> - true ： 有效航，当前行有数据
> - false ： 无效行，当前行没有数据

> xxx getXxx(参数)：获取数据
>
> - xxx : 数据类型；如： int getInt(参数) ；String getString(参数)
> - 参数
>   - int 类型的参数：列的编号，从 1 开始
>   - String 类型的参数： 列的名称

如下图为执行 SQL 语句后的结果

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244743.png" alt="image-20210725181320813" style="zoom:80%;" />

一开始光标指定于第一行前，如图所示红色箭头指向于表头行。当我们调用了 `next()` 方法后，光标就下移到第一行数据，并且方法返回 true，此时就可以通过 `getInt("id")` 获取当前行 id 字段的值，也可以通过 `getString("name")` 获取当前行 name 字段的值。如果想获取下一行的数据，继续调用 `next()` 方法，以此类推。

#### 3.4.2 代码实现

```java
/**
  * 执行DQL
  * @throws Exception
  */
@Test
void testResultSet() throws  Exception {
    //1. 注册驱动
    //Class.forName("com.mysql.jdbc.Driver");
    //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
    String url = "jdbc:mysql:///db1?useSSL=false";
    String username = "root";
    String password = "1234";
    Connection conn = DriverManager.getConnection(url, username, password);
    //3. 定义sql
    String sql = "select * from account";
    //4. 获取statement对象
    Statement stmt = conn.createStatement();
    //5. 执行sql
    ResultSet rs = stmt.executeQuery(sql);
    //6. 处理结果， 遍历rs中的所有数据
    /* // 6.1 光标向下移动一行，并且判断当前行是否有数据
        while (rs.next()){
            //6.2 获取数据  getXxx()
            int id = rs.getInt(1);
            String name = rs.getString(2);
            double money = rs.getDouble(3);

            System.out.println(id);
            System.out.println(name);
            System.out.println(money);

            System.out.println("--------------");

        }*/
    // 6.1 光标向下移动一行，并且判断当前行是否有数据
    while (rs.next()){
        //6.2 获取数据  getXxx()
        int id = rs.getInt("id");
        String name = rs.getString("name");
        double money = rs.getDouble("money");

        System.out.println(id);
        System.out.println(name);
        System.out.println(money);

        System.out.println("--------------");
    }

    //7. 释放资源
    rs.close();
    stmt.close();
    conn.close();
}
```

### 3.5 案例

- 需求：查询 account 账户表数据，封装为 Account 对象中，并且存储到 ArrayList 集合中

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150244744.png" alt="image-20210725182352433" style="zoom:80%;" />

- 代码实现

  ```java
  /**
    * 查询account账户表数据，封装为Account对象中，并且存储到ArrayList集合中
    * 1. 定义实体类Account
    * 2. 查询数据，封装到Account对象中
    * 3. 将Account对象存入ArrayList集合中
    */
  @Test
  void testResultSet2() throws  Exception {
      //1. 注册驱动
      //Class.forName("com.mysql.jdbc.Driver");
      //2. 获取连接：如果连接的是本机mysql并且端口是默认的 3306 可以简化书写
      String url = "jdbc:mysql:///db1?useSSL=false";
      String username = "root";
      String password = "1234";
      Connection conn = DriverManager.getConnection(url, username, password);

      //3. 定义sql
      String sql = "select * from account";

      //4. 获取statement对象
      Statement stmt = conn.createStatement();

      //5. 执行sql
      ResultSet rs = stmt.executeQuery(sql);

      // 创建集合
      List<Account> list = new ArrayList<>();

      // 6.1 光标向下移动一行，并且判断当前行是否有数据
      while (rs.next()){
          Account account = new Account();

          //6.2 获取数据  getXxx()
          int id = rs.getInt("id");
          String name = rs.getString("name");
          double money = rs.getDouble("money");

          //赋值
          account.setId(id);
          account.setName(name);
          account.setMoney(money);

          // 存入集合
          list.add(account);
      }

      System.out.println(list);

      //7. 释放资源
      rs.close();
      stmt.close();
      conn.close();
  }
  ```

### 3.6 PreparedStatement

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
