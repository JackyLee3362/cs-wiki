---
title: MyBatis CRUD (Annotation)
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# MyBatis CRUD with Annotation

使用注解开发会比配置文件开发更加方便。如下就是使用注解进行开发

```java
@Select(value = "select * from tb_user where id = #{id}")
public User select(int id);
```

> ==注意：==
>
> - 注解是用来替换映射配置文件方式配置的，所以使用了注解，就不需要再映射配置文件中书写对应的 `statement`

Mybatis 针对 CURD 操作都提供了对应的注解，已经做到见名知意。如下：

- 查询 ：@Select
- 添加 ：@Insert
- 修改 ：@Update
- 删除 ：@Delete

接下来我们做一个案例来使用 Mybatis 的注解开发

**代码实现：**

- 将之前案例中 `UserMapper.xml` 中的 根据 id 查询数据 的 `statement` 注释掉

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240499.png" alt="image-20210805235229938" style="zoom:70%;" />

- 在 `UserMapper` 接口的 `selectById` 方法上添加注解

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240500.png" alt="image-20210805235405070" style="zoom:70%;" />

- 运行测试程序也能正常查询到数据

我们课程上只演示这一个查询的注解开发，其他的同学们下来可以自己实现，都是比较简单。

==注意：==在官方文档中 `入门` 中有这样的一段话：

![image-20210805234302849](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240501.png)

所以，==注解完成简单功能，配置文件完成复杂功能。==

而我们之前写的动态 SQL 就是复杂的功能，如果用注解使用的话，就需要使用到 Mybatis 提供的 SQL 构建器来完成，而对应的代码如下：

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240502.png" alt="image-20210805234842497" style="zoom:70%;" />

上述代码将 java 代码和 SQL 语句融到了一块，使得代码的可读性大幅度降低。

## 参考资料
