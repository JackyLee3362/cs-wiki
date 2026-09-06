---
title: SSM Integration
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# SSM Integration

前面我们已经把`Mybatis`、`Spring`和`SpringMVC`三个框架进行了学习，今天主要的内容就是把这三个框架整合在一起完成我们的业务功能开发，具体如何来整合，我们一步步来学习。

### 1.1 流程分析

(1) 创建工程

- 创建一个 Maven 的 web 工程
- pom.xml 添加 SSM 需要的依赖 jar 包
- 编写 Web 项目的入口配置类，实现`AbstractAnnotationConfigDispatcherServletInitializer`重写以下方法
  - getRootConfigClasses() ：返回 Spring 的配置类->需要==SpringConfig==配置类
  - getServletConfigClasses() ：返回 SpringMVC 的配置类->需要==SpringMvcConfig==配置类
  - getServletMappings() : 设置 SpringMVC 请求拦截路径规则
  - getServletFilters() ：设置过滤器，解决 POST 请求中文乱码问题

(2)SSM 整合[==重点是各个配置的编写==]

- SpringConfig
  - 标识该类为配置类 @Configuration
  - 扫描 Service 所在的包 @ComponentScan
  - 在 Service 层要管理事务 @EnableTransactionManagement
  - 读取外部的 properties 配置文件 @PropertySource
  - 整合 Mybatis 需要引入 Mybatis 相关配置类 @Import
    - 第三方数据源配置类 JdbcConfig
      - 构建 DataSource 数据源，DruidDataSouroce,需要注入数据库连接四要素， @Bean @Value
      - 构建平台事务管理器，DataSourceTransactionManager,@Bean
    - Mybatis 配置类 MybatisConfig
      - 构建 SqlSessionFactoryBean 并设置别名扫描与数据源，@Bean
      - 构建 MapperScannerConfigurer 并设置 DAO 层的包扫描
- SpringMvcConfig
  - 标识该类为配置类 @Configuration
  - 扫描 Controller 所在的包 @ComponentScan
  - 开启 SpringMVC 注解支持 @EnableWebMvc

(3)功能模块[与具体的业务模块有关]

- 创建数据库表
- 根据数据库表创建对应的模型类
- 通过 Dao 层完成数据库表的增删改查(接口+自动代理)
- 编写 Service 层[Service 接口+实现类]
  - @Service
  - @Transactional
  - 整合 Junit 对业务层进行单元测试
    - @RunWith
    - @ContextConfiguration
    - @Test
- 编写 Controller 层
  - 接收请求 @RequestMapping @GetMapping @PostMapping @PutMapping @DeleteMapping
  - 接收数据 简单、POJO、嵌套 POJO、集合、数组、JSON 数据类型
    - @RequestParam
    - @PathVariable
    - @RequestBody
  - 转发业务层
    - @Autowired
  - 响应结果
    - @ResponseBody

### 1.2 整合配置

掌握上述的知识点后，接下来，我们就可以按照上述的步骤一步步的来完成 SSM 的整合。

#### 步骤 1：创建 Maven 的 web 项目

可以使用 Maven 的骨架创建

![1630561266760](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020806.png)

#### 步骤 2:添加依赖

pom.xml 添加 SSM 所需要的依赖 jar 包

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.itheima</groupId>
  <artifactId>springmvc_08_ssm</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>war</packaging>

  <dependencies>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>5.2.10.RELEASE</version>
    </dependency>

    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
      <version>5.2.10.RELEASE</version>
    </dependency>

    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>5.2.10.RELEASE</version>
    </dependency>

    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis</artifactId>
      <version>3.5.6</version>
    </dependency>

    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis-spring</artifactId>
      <version>1.3.0</version>
    </dependency>

    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>5.1.47</version>
    </dependency>

    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.1.16</version>
    </dependency>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>3.1.0</version>
      <scope>provided</scope>
    </dependency>

    <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-databind</artifactId>
      <version>2.9.0</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.tomcat.maven</groupId>
        <artifactId>tomcat7-maven-plugin</artifactId>
        <version>2.1</version>
        <configuration>
          <port>80</port>
          <path>/</path>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>


```

#### 步骤 3:创建项目包结构

![1630561591931](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020807.png)

- config 目录存放的是相关的配置类
- controller 编写的是 Controller 类
- dao 存放的是 Dao 接口，因为使用的是 Mapper 接口代理方式，所以没有实现类包
- service 存的是 Service 接口，impl 存放的是 Service 实现类
- resources:存入的是配置文件，如 Jdbc.properties
- webapp:目录可以存放静态资源
- test/java:存放的是测试类

#### 步骤 4:创建 SpringConfig 配置类

```java
@Configuration
@ComponentScan({"com.itheima.service"})
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class,MyBatisConfig.class})
@EnableTransactionManagement
public class SpringConfig {
}
```

#### 步骤 5:创建 JdbcConfig 配置类

```java
public class JdbcConfig {
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String username;
    @Value("${jdbc.password}")
    private String password;

    @Bean
    public DataSource dataSource(){
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName(driver);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;
    }

    @Bean
    public PlatformTransactionManager transactionManager(DataSource dataSource){
        DataSourceTransactionManager ds = new DataSourceTransactionManager();
        ds.setDataSource(dataSource);
        return ds;
    }
}
```

#### 步骤 6:创建 MybatisConfig 配置类

```java
public class MyBatisConfig {
    @Bean
    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource);
        factoryBean.setTypeAliasesPackage("com.itheima.domain");
        return factoryBean;
    }

    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage("com.itheima.dao");
        return msc;
    }
}
```

#### 步骤 7:创建 jdbc.properties

在 resources 下提供 jdbc.properties,设置数据库连接四要素

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/ssm_db
jdbc.username=root
jdbc.password=root
```

#### 步骤 8:创建 SpringMVC 配置类

```java
@Configuration
@ComponentScan("com.itheima.controller")
@EnableWebMvc
public class SpringMvcConfig {
}
```

#### 步骤 9:创建 Web 项目入口配置类

```java
public class ServletConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
    //加载Spring配置类
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{SpringConfig.class};
    }
    //加载SpringMVC配置类
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringMvcConfig.class};
    }
    //设置SpringMVC请求地址拦截规则
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
    //设置post请求中文乱码过滤器
    @Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("utf-8");
        return new Filter[]{filter};
    }
}

```

至此 SSM 整合的环境就已经搭建好了。在这个环境上，我们如何进行功能模块的开发呢?

### 1.3 功能模块开发

> 需求:对表 tbl_book 进行新增、修改、删除、根据 ID 查询和查询所有

#### 步骤 1:创建数据库及表

```sql
create database ssm_db character set utf8;
use ssm_db;
create table tbl_book(
  id int primary key auto_increment,
  type varchar(20),
  name varchar(50),
  description varchar(255)
)

insert  into `tbl_book`(`id`,`type`,`name`,`description`) values (1,'计算机理论','Spring实战 第五版','Spring入门经典教程，深入理解Spring原理技术内幕'),(2,'计算机理论','Spring 5核心原理与30个类手写实践','十年沉淀之作，手写Spring精华思想'),(3,'计算机理论','Spring 5设计模式','深入Spring源码刨析Spring源码中蕴含的10大设计模式'),(4,'计算机理论','Spring MVC+Mybatis开发从入门到项目实战','全方位解析面向Web应用的轻量级框架，带你成为Spring MVC开发高手'),(5,'计算机理论','轻量级Java Web企业应用实战','源码级刨析Spring框架，适合已掌握Java基础的读者'),(6,'计算机理论','Java核心技术 卷Ⅰ 基础知识(原书第11版)','Core Java第11版，Jolt大奖获奖作品，针对Java SE9、10、11全面更新'),(7,'计算机理论','深入理解Java虚拟机','5个纬度全面刨析JVM,大厂面试知识点全覆盖'),(8,'计算机理论','Java编程思想(第4版)','Java学习必读经典，殿堂级著作！赢得了全球程序员的广泛赞誉'),(9,'计算机理论','零基础学Java(全彩版)','零基础自学编程的入门图书，由浅入深，详解Java语言的编程思想和核心技术'),(10,'市场营销','直播就这么做:主播高效沟通实战指南','李子柒、李佳奇、薇娅成长为网红的秘密都在书中'),(11,'市场营销','直播销讲实战一本通','和秋叶一起学系列网络营销书籍'),(12,'市场营销','直播带货:淘宝、天猫直播从新手到高手','一本教你如何玩转直播的书，10堂课轻松实现带货月入3W+');
```

#### 步骤 2:编写模型类

```java
public class Book {
    private Integer id;
    private String type;
    private String name;
    private String description;
    //getter...setter...toString省略
}
```

#### 步骤 3:编写 Dao 接口

```java
public interface BookDao {

//    @Insert("insert into tbl_book values(null,#{type},#{name},#{description})")
    @Insert("insert into tbl_book (type,name,description) values(#{type},#{name},#{description})")
    public void save(Book book);

    @Update("update tbl_book set type = #{type}, name = #{name}, description = #{description} where id = #{id}")
    public void update(Book book);

    @Delete("delete from tbl_book where id = #{id}")
    public void delete(Integer id);

    @Select("select * from tbl_book where id = #{id}")
    public Book getById(Integer id);

    @Select("select * from tbl_book")
    public List<Book> getAll();
}
```

#### 步骤 4:编写 Service 接口和实现类

```java
@Transactional
public interface BookService {
    /**
     * 保存
     * @param book
     * @return
     */
    public boolean save(Book book);

    /**
     * 修改
     * @param book
     * @return
     */
    public boolean update(Book book);

    /**
     * 按id删除
     * @param id
     * @return
     */
    public boolean delete(Integer id);

    /**
     * 按id查询
     * @param id
     * @return
     */
    public Book getById(Integer id);

    /**
     * 查询全部
     * @return
     */
    public List<Book> getAll();
}
```

```java
@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookDao bookDao;

    public boolean save(Book book) {
        bookDao.save(book);
        return true;
    }

    public boolean update(Book book) {
        bookDao.update(book);
        return true;
    }

    public boolean delete(Integer id) {
        bookDao.delete(id);
        return true;
    }

    public Book getById(Integer id) {
        return bookDao.getById(id);
    }

    public List<Book> getAll() {
        return bookDao.getAll();
    }
}
```

**说明:**

- bookDao 在 Service 中注入的会提示一个红线提示，为什么呢?

  - BookDao 是一个接口，没有实现类，接口是不能创建对象的，所以最终注入的应该是代理对象
  - 代理对象是由 Spring 的 IOC 容器来创建管理的
  - IOC 容器又是在 Web 服务器启动的时候才会创建
  - IDEA 在检测依赖关系的时候，没有找到适合的类注入，所以会提示错误提示
  - 但是程序运行的时候，代理对象就会被创建，框架会使用 DI 进行注入，所以程序运行无影响。

- 如何解决上述问题?

  - 可以不用理会，因为运行是正常的

  - 设置错误提示级别

    ![](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020808.png)

#### 步骤 5:编写 Contorller 类

```java
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public boolean save(@RequestBody Book book) {
        return bookService.save(book);
    }

    @PutMapping
    public boolean update(@RequestBody Book book) {
        return bookService.update(book);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable Integer id) {
        return bookService.delete(id);
    }

    @GetMapping("/{id}")
    public Book getById(@PathVariable Integer id) {
        return bookService.getById(id);
    }

    @GetMapping
    public List<Book> getAll() {
        return bookService.getAll();
    }
}
```

对于图书模块的增删改查就已经完成了编写，我们可以从后往前写也可以从前往后写，最终只需要能把功能实现即可。

接下来我们就先把业务层的代码使用`Spring整合Junit`的知识点进行单元测试:

### 1.4 单元测试

#### 步骤 1:新建测试类

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class BookServiceTest {

}
```

#### 步骤 2:注入 Service 类

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class BookServiceTest {

    @Autowired
    private BookService bookService;


}
```

#### 步骤 3:编写测试方法

我们先来对查询进行单元测试。

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class BookServiceTest {

    @Autowired
    private BookService bookService;

    @Test
    void testGetById(){
        Book book = bookService.getById(1);
        System.out.println(book);
    }

    @Test
    void testGetAll(){
        List<Book> all = bookService.getAll();
        System.out.println(all);
    }

}
```

根据 ID 查询，测试的结果为:

![1630600844191](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020809.png)

查询所有，测试的结果为:

![1630600927486](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020810.png)

### 1.5 PostMan 测试

#### 新增

`http://localhost/books`

```json
{
  "type": "类别测试数据",
  "name": "书名测试数据",
  "description": "描述测试数据"
}
```

![1630652582425](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020811.png)

#### 修改

`http://localhost/books`

```json
{
  "id": 13,
  "type": "类别测试数据",
  "name": "书名测试数据",
  "description": "描述测试数据"
}
```

![1630652758221](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020812.png)

#### 删除

`http://localhost/books/14`

![1630652796605](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020813.png)

#### 查询单个

`http://localhost/books/1`

![1630652837682](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020814.png)

#### 查询所有

`http://localhost/books`

![1630652867493](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020815.png)
