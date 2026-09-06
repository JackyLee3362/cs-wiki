---
title: JDBC Connection
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Connection

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
