---
title: mybatis
description:
date: 2023-05-23
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 使用插件生成

```sh
mvn mybatis-generator:generate
```

- [mybatis generator 生成带 Lombok 注解和数据库注释的实体主要流程 重写一个生成实体的方法 然后编译之 - 掘金](https://juejin.cn/post/6958692982363160607)

## 参考文献

- [00 开篇词 领略 MyBatis 设计思维，突破持久化技术瓶颈](https://learn.lianglianglee.com/%e4%b8%93%e6%a0%8f/%e6%b7%b1%e5%85%a5%e5%89%96%e6%9e%90%20MyBatis%20%e6%a0%b8%e5%bf%83%e5%8e%9f%e7%90%86-%e5%ae%8c/00%20%e5%bc%80%e7%af%87%e8%af%8d%20%20%e9%a2%86%e7%95%a5%20MyBatis%20%e8%ae%be%e8%ae%a1%e6%80%9d%e7%bb%b4%ef%bc%8c%e7%aa%81%e7%a0%b4%e6%8c%81%e4%b9%85%e5%8c%96%e6%8a%80%e6%9c%af%e7%93%b6%e9%a2%88.md)
- [Mybatis3 详解（一）----Mybatis 的介绍 - 唐浩荣 - 博客园](https://www.cnblogs.com/tanghaorong/p/13856465.html)
- [homejim/mybatis-examples: mybatis 使用示例](https://github.com/homejim/mybatis-examples)
- [baomidou/mybatis-plus-samples: MyBatis-Plus Samples](https://github.com/baomidou/mybatis-plus-samples)

## 使用配置文件

- XML 映射文件的名称与 Mapper 接口名称一致，并且将 XML 映射文件和 Mapper 接口放置在相同包下（同包同名）
- XML 映射文件的 namespace 属性为 Mappper 接口全限定名一致
- XML 映射文件中的 SQL 语句的 id 与 Mapper 接口中的方法名一致，并保持返回类型一致

## 单独开发 Mybatis 配置文件

SqlMapConfig.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <properties resource="jdbc.properties"></properties>
    <typeAliases>
        <package name="com.example.domain"/>
    </typeAliases>
    <environments default="mysql">
        <environment id="mysql">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <package name="com.example.dao"/>
    </mappers>
</configuration>
```

jdbc.properties

```conf
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/test?useSSL=false&serverTimezone=UTC
jdbc.username=root
jdbc.password=jackylee1997
```

主函数

```java
public class AppForAnnotation {
    public static void main(String[] args) throws IOException {
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
        InputStream inputStream = Resources.getResourceAsStream("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(inputStream);
        UserDao userDao;
        SqlSession sqlSession = sqlSessionFactory.openSession();
        userDao = sqlSession.getMapper(UserDao.class);

        System.out.println(userDao);
        System.out.println(userDao.getClass());
        userDao.findAll();
        sqlSession.close();
    }
}
```

## Spring 集合 Mybatis

SpringConfig

```java
@Configuration
@ComponentScan("com.example")
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class, MybatisConfig.class}) // 主要是加MybatisConfig.class
public class SpringConfig {
}
```

MybatisConfig.java（主要是加这个配置类，固定格式）

```java
public class MybatisConfig {
    // 主要是扫描类型别名的包
    @Bean
    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){
        SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();
        ssfb.setTypeAliasesPackage("com.example.domain");
        ssfb.setDataSource(dataSource);
        return ssfb;
    }

    // 扫描bean设的包
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage("com.example.dao");
        return msc;
    }
}
```

主函数

```java
public class AppMybatisSpring {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);

        UserService userService = ctx.getBean(UserService.class);

        userService.save();
        List<User> userList = userService.findAll();
        userList.forEach(System.out::println);
    }
}
```


## 参考资料

- [辣椒炒肉 - 通过 MyBatis 拦截器实现完整 SQL 打印：从原理到实战 - 知乎](https://zhuanlan.zhihu.com/p/1923860725945861775)

  - 概要: None
  - 点赞: 11

- [MyBatis 的好帮手-MybatisX 你是否碰见过这样的情况：Dao/Mapper 层无法一键跳转到对应 Xml 中 - 掘金](https://juejin.cn/post/7262721189647925308)
