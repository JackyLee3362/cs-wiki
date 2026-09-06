---
title: MyBatis Spring Integration Steps
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Integration Steps

Mybatis 的基础环境我们已经准备好了，接下来就得分析下在上述的内容中，哪些对象可以交给 Spring 来管理?

- Mybatis 程序核心对象分析

  ![1630137189480](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022194.png)

  从图中可以获取到，真正需要交给 Spring 管理的是==SqlSessionFactory==

- 整合 Mybatis，就是将 Mybatis 用到的内容交给 Spring 管理，分析下配置文件

  ![1630137388717](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022195.png)

  **说明:**

  - 第一行读取外部 properties 配置文件，Spring 有提供具体的解决方案`@PropertySource`,需要交给 Spring
  - 第二行起别名包扫描，为 SqlSessionFactory 服务的，需要交给 Spring
  - 第三行主要用于做连接池，Spring 之前我们已经整合了 Druid 连接池，这块也需要交给 Spring
  - 前面三行一起都是为了创建 SqlSession 对象用的，那么用 Spring 管理 SqlSession 对象吗?回忆下 SqlSession 是由 SqlSessionFactory 创建出来的，所以只需要将 SqlSessionFactory 交给 Spring 管理即可。
  - 第四行是 Mapper 接口和映射文件[如果使用注解就没有该映射文件]，这个是在获取到 SqlSession 以后执行具体操作的时候用，所以它和 SqlSessionFactory 创建的时机都不在同一个时间，可能需要单独管理。

### 6.2 Spring 整合 Mybatis

前面我们已经分析了 Spring 与 Mybatis 的整合，大体需要做两件事，

第一件事是:Spring 要管理 MyBatis 中的 SqlSessionFactory

第二件事是:Spring 要管理 Mapper 接口的扫描

具体该如何实现，具体的步骤为:

### 步骤 1:项目中导入整合需要的 jar 包

```xml
<dependency>
    <!--Spring操作数据库需要该jar包-->
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.2.10.RELEASE</version>
</dependency>
<dependency>
    <!--
		Spring与Mybatis整合的jar包
		这个jar包mybatis在前面，是Mybatis提供的
	-->
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.0</version>
</dependency>
```

### 步骤 2:创建 Spring 的主配置类

```java
//配置类注解
@Configuration
//包扫描，主要扫描的是项目中的AccountServiceImpl类
@ComponentScan("edu.note")
public class SpringConfig {
}

```

### 步骤 3:创建数据源的配置类

在配置类中完成数据源的创建

```java
public class JdbcConfig {
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String userName;
    @Value("${jdbc.password}")
    private String password;

    @Bean
    public DataSource dataSource(){
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(url);
        ds.setUsername(userName);
        ds.setPassword(password);
        return ds;
    }
}
```

### 步骤 4:主配置类中读 properties 并引入数据源配置类

```java
@Configuration
@ComponentScan("edu.note")
@PropertySource("classpath:jdbc.properties")
@Import(JdbcConfig.class)
public class SpringConfig {
}

```

### 步骤 5:创建 Mybatis 配置类并配置 SqlSessionFactory

```java
public class MybatisConfig {
    //定义bean，SqlSessionFactoryBean，用于产生SqlSessionFactory对象
    @Bean
    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){
        SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();
        //设置模型类的别名扫描
        ssfb.setTypeAliasesPackage("edu.note.domain");
        //设置数据源
        ssfb.setDataSource(dataSource);
        return ssfb;
    }
    //定义bean，返回MapperScannerConfigurer对象
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage("edu.note.dao");
        return msc;
    }
}
```

**说明:**

- 使用 SqlSessionFactoryBean 封装 SqlSessionFactory 需要的环境信息

  ![1630138835057](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022196.png)

  - SqlSessionFactoryBean 是前面我们讲解 FactoryBean 的一个子类，在该类中将 SqlSessionFactory 的创建进行了封装，简化对象的创建，我们只需要将其需要的内容设置即可。
  - 方法中有一个参数为 dataSource,当前 Spring 容器中已经创建了 Druid 数据源，类型刚好是 DataSource 类型，此时在初始化 SqlSessionFactoryBean 这个对象的时候，发现需要使用 DataSource 对象，而容器中刚好有这么一个对象，就自动加载了 DruidDataSource 对象。

- 使用 MapperScannerConfigurer 加载 Dao 接口，创建代理对象保存到 IOC 容器中

  ![1630138916939](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022197.png)

  - 这个 MapperScannerConfigurer 对象也是 MyBatis 提供的专用于整合的 jar 包中的类，用来处理原始配置文件中的 mappers 相关配置，加载数据层的 Mapper 接口类
  - MapperScannerConfigurer 有一个核心属性 basePackage，就是用来设置所扫描的包路径

### 步骤 6:主配置类中引入 Mybatis 配置类

```java
@Configuration
@ComponentScan("edu.note")
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class,MybatisConfig.class})
public class SpringConfig {
}
```

### 步骤 7:编写运行类

在运行类中，从 IOC 容器中获取 Service 对象，调用方法获取结果

```java
public class App2 {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);

        AccountService accountService = ctx.getBean(AccountService.class);

        Account ac = accountService.findById(1);
        System.out.println(ac);
    }
}

```

### 步骤 8:运行程序

![1630139036627](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022198.png)

支持 Spring 与 Mybatis 的整合就已经完成了，其中主要用到的两个类分别是:

- SqlSessionFactoryBean
- MapperScannerConfigurer
