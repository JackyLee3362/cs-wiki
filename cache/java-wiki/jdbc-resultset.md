---
title: JDBC ResultSet
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## ResultSet

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
