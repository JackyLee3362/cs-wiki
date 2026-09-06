---
title: MyBatis Select Detail
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Select Detail

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240473.png" alt="image-20210729180118287" style="zoom:80%;" />

有些数据的属性比较多，在页面表格中无法全部实现，而只会显示部分，而其他属性数据的查询可以通过 `查看详情` 来进行查询，如上图所示。

查看详情功能实现步骤：

- 编写接口方法：Mapper 接口

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240474.png" alt="image-20210729180604529" style="zoom:80%;" />

  - 参数：id

    查看详情就是查询某一行数据，所以需要根据 id 进行查询。而 id 以后是由页面传递过来。

  - 结果：Brand

    根据 id 查询出来的数据只要一条，而将一条数据封装成一个 Brand 对象即可

- 编写 SQL 语句：SQL 映射文件

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240475.png" alt="image-20210729180709318" style="zoom:80%;" />

- 执行方法、进行测试

#### 1.3.1 编写接口方法

在 `BrandMapper` 接口中定义根据 id 查询数据的方法

```java
/**
  * 查看详情：根据Id查询
  */
Brand selectById(int id);
```

#### 1.3.2 编写 SQL 语句

在 `BrandMapper.xml` 映射配置文件中编写 `statement`，使用 `resultMap` 而不是使用 `resultType`

```xml
<select id="selectById"  resultMap="brandResultMap">
    select *
    from tb_brand where id = #{id};
</select>
```

> 注意：上述 SQL 中的 #{id}先这样写，一会我们再详细讲解

#### 1.3.3 编写测试方法

在 `test/java` 下的 `edu.note.mapper` 包下的 `MybatisTest类中` 定义测试方法

```java
 @Test
void testSelectById() throws IOException {
    //接收参数，该id以后需要传递过来
    int id = 1;

    //1. 获取SqlSessionFactory
    String resource = "mybatis-config.xml";
    InputStream inputStream = Resources.getResourceAsStream(resource);
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

    //2. 获取SqlSession对象
    SqlSession sqlSession = sqlSessionFactory.openSession();

    //3. 获取Mapper接口的代理对象
    BrandMapper brandMapper = sqlSession.getMapper(BrandMapper.class);

    //4. 执行方法
    Brand brand = brandMapper.selectById(id);
    System.out.println(brand);

    //5. 释放资源
    sqlSession.close();
}
```

执行测试方法结果如下：

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240476.png" alt="image-20210729182223137" style="zoom:70%;" />

#### 1.3.4 参数占位符

查询到的结果很好理解就是 id 为 1 的这行数据。而这里我们需要看控制台显示的 SQL 语句，能看到使用？进行占位。说明我们在映射配置文件中的写的 `#{id}` 最终会被？进行占位。接下来我们就聊聊映射配置文件中的参数占位符。

mybatis 提供了两种参数占位符：

- #{} ：执行 SQL 时，会将 #{} 占位符替换为？，将来自动设置参数值。从上述例子可以看出使用#{} 底层使用的是 `PreparedStatement`

- ${} ：拼接 SQL。底层使用的是 `Statement`，会存在 SQL 注入问题。如下图将 映射配置文件中的 #{} 替换成 ${} 来看效果

  ```xml
  <select id="selectById"  resultMap="brandResultMap">
      select *
      from tb_brand where id = ${id};
  </select>
  ```

  重新运行查看结果如下：

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240477.png" alt="image-20210729184156019" style="zoom:70%;" />

> ==注意：==从上面两个例子可以看出，以后开发我们使用 #{} 参数占位符。

#### 1.3.5 parameterType 使用

对于有参数的 mapper 接口方法，我们在映射配置文件中应该配置 `ParameterType` 来指定参数类型。只不过该属性都可以省略。如下图：

```xml
<select id="selectById" parameterType="int" resultMap="brandResultMap">
    select *
    from tb_brand where id = ${id};
</select>
```

#### 1.3.6 SQL 语句中特殊字段处理

以后肯定会在 SQL 语句中写一下特殊字符，比如某一个字段大于某个值，如下图

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240478.png" alt="image-20210729184756094" style="zoom:80%;" />

可以看出报错了，因为映射配置文件是 xml 类型的问题，而 > < 等这些字符在 xml 中有特殊含义，所以此时我们需要将这些符号进行转义，可以使用以下两种方式进行转义

- 转义字符

  下图的 `&lt;` 就是 `<` 的转义字符。

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240479.png" alt="image-20210729185128686" style="zoom:60%;" />

- <![CDATA[内容]]>

  <img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150240480.png" alt="image-20210729185030318" style="zoom:60%;" />
