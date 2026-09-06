---
title: MyBatis Insert
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Insert

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240486.png" alt="image-20210729214917317" style="zoom:70%;" />

如上图是我们平时在添加数据时展示的页面，而我们在该页面输入想要的数据后添加 `提交` 按钮，就会将这些数据添加到数据库中。接下来我们就来实现添加数据的操作。

- 编写接口方法

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240487.png" alt="image-20210729215351651" style="zoom:80%;" />

  参数：除了 id 之外的所有的数据。id 对应的是表中主键值，而主键我们是 ==自动增长== 生成的。

- 编写 SQL 语句

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240488.png" alt="image-20210729215537167" style="zoom:80%;" />

- 编写测试方法并执行

明确了该功能实现的步骤后，接下来我们进行具体的操作。

#### 1.6.1 编写接口方法

在 `BrandMapper` 接口中定义添加方法。

```java
 /**
   * 添加
   */
void add(Brand brand);
```

#### 1.6.2 编写 SQL 语句

在 `BrandMapper.xml` 映射配置文件中编写添加数据的 `statement`

```xml
<insert id="add">
    insert into tb_brand (brand_name, company_name, ordered, description, status)
    values (#{brandName}, #{companyName}, #{ordered}, #{description}, #{status});
</insert>
```

#### 1.6.3 编写测试方法

在 `test/java` 下的 `edu.note.mapper` 包下的 `MybatisTest类中` 定义测试方法

```java
@Test
void testAdd() throws IOException {
    //接收参数
    int status = 1;
    String companyName = "波导手机";
    String brandName = "波导";
    String description = "手机中的战斗机";
    int ordered = 100;

    //封装对象
    Brand brand = new Brand();
    brand.setStatus(status);
    brand.setCompanyName(companyName);
    brand.setBrandName(brandName);
    brand.setDescription(description);
    brand.setOrdered(ordered);

    //1. 获取SqlSessionFactory
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    //2. 获取SqlSession对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //SqlSession sqlSession = sqlSessionFactory.openSession(true); //设置自动提交事务，这种情况不需要手动提交事务了
    //3. 获取Mapper接口的代理对象
    BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);
    //4. 执行方法
    brandMapper.add(brand);
    //提交事务
    sqlSession.commit();
    //5. 释放资源
    sqlSession.close();
}
```

执行结果如下：

![image-20210729220348255](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240489.png)

#### 1.6.4 添加-主键返回

在数据添加成功后，有时候需要获取插入数据库数据的主键（主键是自增长）。

比如：添加订单和订单项，如下图就是京东上的订单

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240490.png" alt="image-20210729221207962" style="zoom:80%;" />

订单数据存储在订单表中，订单项存储在订单项表中。

- 添加订单数据

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240491.png" alt="image-20210729221049462" style="zoom:80%;" />

- 添加订单项数据，订单项中需要设置所属订单的 id

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240492.png" alt="image-20210729221058898" style="zoom:80%;" />

明白了什么时候 `主键返回` 。接下来我们简单模拟一下，在添加完数据后打印 id 属性值，能打印出来说明已经获取到了。

我们将上面添加品牌数据的案例中映射配置文件里 `statement` 进行修改，如下

```xml
<insert id="add" useGeneratedKeys="true" keyProperty="id">
    insert into tb_brand (brand_name, company_name, ordered, description, status)
    values (#{brandName}, #{companyName}, #{ordered}, #{description}, #{status});
</insert>
```

> 在 insert 标签上添加如下属性：
>
> - useGeneratedKeys：是够获取自动增长的主键值。true 表示获取
> - keyProperty ：指定将获取到的主键值封装到哪儿个属性里
