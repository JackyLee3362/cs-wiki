---
title: MyBatis Delete
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Delete

![image-20210729224549305](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240495.png)

如上图所示，每行数据后面都有一个 `删除` 按钮，当用户点击了该按钮，就会将改行数据删除掉。那我们就需要思考，这种删除是根据什么进行删除呢？是通过主键 id 删除，因为 id 是表中数据的唯一标识。

接下来就来实现该功能。

#### 1.8.1 编写接口方法

在 `BrandMapper` 接口中定义根据 id 删除方法。

```java
/**
  * 根据id删除
  */
void deleteById(int id);
```

#### 1.8.2 编写 SQL 语句

在 `BrandMapper.xml` 映射配置文件中编写删除一行数据的 `statement`

```xml
<delete id="deleteById">
    delete from tb_brand where id = #{id};
</delete>
```

#### 1.8.3 编写测试方法

在 `test/java` 下的 `edu.note.mapper` 包下的 `MybatisTest类中` 定义测试方法

```java
 @Test
void testDeleteById() throws IOException {
    //接收参数
    int id = 6;

    //1. 获取SqlSessionFactory
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    //2. 获取SqlSession对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //SqlSession sqlSession = sqlSessionFactory.openSession(true);
    //3. 获取Mapper接口的代理对象
    BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);
    //4. 执行方法
    brandMapper.deleteById(id);
    //提交事务
    sqlSession.commit();
    //5. 释放资源
    sqlSession.close();
}
```

运行过程只要没报错，直接到数据库查询数据是否还存在。

### 1.9 批量删除

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240496.png" alt="image-20210729225713894" style="zoom:70%;" />

如上图所示，用户可以选择多条数据，然后点击上面的 `删除` 按钮，就会删除数据库中对应的多行数据。

#### 1.9.1 编写接口方法

在 `BrandMapper` 接口中定义删除多行数据的方法。

```java
/**
  * 批量删除
  */
void deleteByIds(int[] ids);
```

> 参数是一个数组，数组中存储的是多条数据的 id

#### 1.9.2 编写 SQL 语句

在 `BrandMapper.xml` 映射配置文件中编写删除多条数据的 `statement`。

编写 SQL 时需要遍历数组来拼接 SQL 语句。Mybatis 提供了 `foreach` 标签供我们使用

**foreach 标签**

用来迭代任何可迭代的对象（如数组，集合）。

- collection 属性：
  - mybatis 会将数组参数，封装为一个 Map 集合。
    - 默认：array = 数组
    - 使用@Param 注解改变 map 集合的默认 key 的名称
- item 属性：本次迭代获取到的元素。
- separator 属性：集合项迭代之间的分隔符。`foreach` 标签不会错误地添加多余的分隔符。也就是最后一次迭代不会加分隔符。
- open 属性：该属性值是在拼接 SQL 语句之前拼接的语句，只会拼接一次
- close 属性：该属性值是在拼接 SQL 语句拼接后拼接的语句，只会拼接一次

```xml
<delete id="deleteByIds">
    delete from tb_brand where id
    in
    <foreach collection="array" item="id" separator="," open="(" close=")">
        #{id}
    </foreach>
    ;
</delete>
```

> 假如数组中的 id 数据是{1,2,3}，那么拼接后的 sql 语句就是：
>
> ```sql
> delete from tb_brand where id in (1,2,3);
> ```

#### 1.9.3 编写测试方法

在 `test/java` 下的 `edu.note.mapper` 包下的 `MybatisTest类中` 定义测试方法

```java
@Test
void testDeleteByIds() throws IOException {
    //接收参数
    int[] ids = {5,7,8};

    //1. 获取SqlSessionFactory
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    //2. 获取SqlSession对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //SqlSession sqlSession = sqlSessionFactory.openSession(true);
    //3. 获取Mapper接口的代理对象
    BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);
    //4. 执行方法
    brandMapper.deleteByIds(ids);
    //提交事务
    sqlSession.commit();
    //5. 释放资源
    sqlSession.close();
}
```
