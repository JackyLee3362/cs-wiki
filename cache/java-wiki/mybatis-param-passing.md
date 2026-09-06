---
title: MyBatis Param Passing
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Param Passing

Mybatis 接口方法中可以接收各种各样的参数，如下：

- 多个参数
- 单个参数：单个参数又可以是如下类型
  - POJO 类型
  - Map 集合类型
  - Collection 集合类型
  - List 集合类型
  - Array 类型
  - 其他类型

#### 1.10.1 多个参数

如下面的代码，就是接收两个参数，而接收多个参数需要使用 `@Param` 注解，那么为什么要加该注解呢？这个问题要弄明白就必须来研究 Mybatis 底层对于这些参数是如何处理的。

```java
User select(@Param("username") String username,@Param("password") String password);
```

```xml
<select id="select" resultType="user">
	select *
    from tb_user
    where
    	username=#{username}
    	and password=#{password}
</select>
```

我们在接口方法中定义多个参数，Mybatis 会将这些参数封装成 Map 集合对象，值就是参数值，而键在没有使用 `@Param` 注解时有以下命名规则：

- 以 arg 开头 ：第一个参数就叫 arg0，第二个参数就叫 arg1，以此类推。如：

  > map.put("arg0"，参数值 1);
  >
  > map.put("arg1"，参数值 2);

- 以 param 开头 ： 第一个参数就叫 param1，第二个参数就叫 param2，依次类推。如：

  > map.put("param1"，参数值 1);
  >
  > map.put("param2"，参数值 2);

**代码验证：**

- 在 `UserMapper` 接口中定义如下方法

  ```java
  User select(String username,String password);
  ```

- 在 `UserMapper.xml` 映射配置文件中定义 SQL

  ```xml
  <select id="select" resultType="user">
  	select *
      from tb_user
      where
      	username=#{arg0}
      	and password=#{arg1}
  </select>
  ```

  或者

  ```xml
  <select id="select" resultType="user">
  	select *
      from tb_user
      where
      	username=#{param1}
      	and password=#{param2}
  </select>
  ```

- 运行代码结果如下

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240497.png" alt="image-20210805230303461" style="zoom:80%;" />

  在映射配合文件的 SQL 语句中使用用 `arg` 开头的和 `param` 书写，代码的可读性会变的特别差，此时可以使用 `@Param` 注解。

在接口方法参数上使用 `@Param` 注解，Mybatis 会将 `arg` 开头的键名替换为对应注解的属性值。

**代码验证：**

- 在 `UserMapper` 接口中定义如下方法，在 `username` 参数前加上 `@Param` 注解

  ```java
  User select(@Param("username") String username, String password);
  ```

  Mybatis 在封装 Map 集合时，键名就会变成如下：

  > map.put("username"，参数值 1);
  >
  > map.put("arg1"，参数值 2);
  >
  > map.put("param1"，参数值 1);
  >
  > map.put("param2"，参数值 2);

- 在 `UserMapper.xml` 映射配置文件中定义 SQL

  ```xml
  <select id="select" resultType="user">
  	select *
      from tb_user
      where
      	username=#{username}
      	and password=#{param2}
  </select>
  ```

- 运行程序结果没有报错。而如果将 `#{}` 中的 `username` 还是写成 `arg0`

  ```xml
  <select id="select" resultType="user">
  	select *
      from tb_user
      where
      	username=#{arg0}
      	and password=#{param2}
  </select>
  ```

- 运行程序则可以看到错误

  ![image-20210805231727206](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240498.png)

==结论：以后接口参数是多个时，在每个参数上都使用 `@Param` 注解。这样代码的可读性更高。==

#### 1.10.2 单个参数

- POJO 类型

  直接使用。要求 `属性名` 和 `参数占位符名称` 一致

- Map 集合类型

  直接使用。要求 `map集合的键名` 和 `参数占位符名称` 一致

- Collection 集合类型

  Mybatis 会将集合封装到 map 集合中，如下：

  > map.put("arg0"，collection 集合);
  >
  > map.put("collection"，collection 集合;

  ==可以使用 `@Param` 注解替换 map 集合中默认的 arg 键名。==

- List 集合类型

  Mybatis 会将集合封装到 map 集合中，如下：

  > map.put("arg0"，list 集合);
  >
  > map.put("collection"，list 集合);
  >
  > map.put("list"，list 集合);

  ==可以使用 `@Param` 注解替换 map 集合中默认的 arg 键名。==

- Array 类型

  Mybatis 会将集合封装到 map 集合中，如下：

  > map.put("arg0"，数组);
  >
  > map.put("array"，数组);

  ==可以使用 `@Param` 注解替换 map 集合中默认的 arg 键名。==

- 其他类型

  比如 int 类型，`参数占位符名称` 叫什么都可以。尽量做到见名知意
