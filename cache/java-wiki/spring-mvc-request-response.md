---
title: Spring MVC Request & Response
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring MVC Request & Response

前面我们已经完成了入门案例相关的知识学习，接来了我们就需要针对 SpringMVC 相关的知识点进行系统的学习，之前我们提到过，SpringMVC 是 web 层的框架，主要的作用是接收请求、接收数据、响应结果，所以这一章节是学习 SpringMVC 的重点内容，我们主要会讲解四部分内容:

- 请求映射路径
- 请求参数
- 日期类型参数传递
- 响应 json 数据

### 4.1 设置请求映射路径

#### 4.1.1 环境准备

- 创建一个 Web 的 Maven 项目

- pom.xml 添加 Spring 依赖

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>

  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itheima</groupId>
    <artifactId>springmvc_03_request_mapping</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
      <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>3.1.0</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.2.10.RELEASE</version>
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

- 创建对应的配置类

  ```java
  public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {

      protected Class<?>[] getServletConfigClasses() {
          return new Class[]{SpringMvcConfig.class};
      }
      protected String[] getServletMappings() {
          return new String[]{"/"};
      }
      protected Class<?>[] getRootConfigClasses() {
          return new Class[0];
      }
  }

  @Configuration
  @ComponentScan("com.itheima.controller")
  public class SpringMvcConfig {
  }

  ```

- 编写 BookController 和 UserController

  ```java
  @Controller
  public class UserController {

      @RequestMapping("/save")
      @ResponseBody
      public String save(){
          System.out.println("user save ...");
          return "{'module':'user save'}";
      }

      @RequestMapping("/delete")
      @ResponseBody
      public String save(){
          System.out.println("user delete ...");
          return "{'module':'user delete'}";
      }
  }

  @Controller
  public class BookController {

      @RequestMapping("/save")
      @ResponseBody
      public String save(){
          System.out.println("book save ...");
          return "{'module':'book save'}";
      }
  }
  ```

最终创建好的项目结构如下:

![1630466431549](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019960.png)

把环境准备好后，启动 Tomcat 服务器，后台会报错:

![1630466555934](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019961.png)

从错误信息可以看出:

- UserController 有一个 save 方法，访问路径为`http://localhost/save`
- BookController 也有一个 save 方法，访问路径为`http://localhost/save`
- 当访问`http://localhost/saved`的时候，到底是访问 UserController 还是 BookController?

#### 4.1.2 问题分析

团队多人开发，每人设置不同的请求路径，冲突问题该如何解决?

解决思路:为不同模块设置模块名作为请求路径前置

对于 Book 模块的 save,将其访问路径设置`http://localhost/book/save`

对于 User 模块的 save,将其访问路径设置`http://localhost/user/save`

这样在同一个模块中出现命名冲突的情况就比较少了。

#### 4.1.3 设置映射路径

##### 步骤 1:修改 Controller

```java
@Controller
public class UserController {

    @RequestMapping("/user/save")
    @ResponseBody
    public String save(){
        System.out.println("user save ...");
        return "{'module':'user save'}";
    }

    @RequestMapping("/user/delete")
    @ResponseBody
    public String save(){
        System.out.println("user delete ...");
        return "{'module':'user delete'}";
    }
}

@Controller
public class BookController {

    @RequestMapping("/book/save")
    @ResponseBody
    public String save(){
        System.out.println("book save ...");
        return "{'module':'book save'}";
    }
}
```

问题是解决了，但是每个方法前面都需要进行修改，写起来比较麻烦而且还有很多重复代码，如果/user 后期发生变化，所有的方法都需要改，耦合度太高。

##### 步骤 2:优化路径配置

优化方案:

```java
@Controller
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/save")
    @ResponseBody
    public String save(){
        System.out.println("user save ...");
        return "{'module':'user save'}";
    }

    @RequestMapping("/delete")
    @ResponseBody
    public String save(){
        System.out.println("user delete ...");
        return "{'module':'user delete'}";
    }
}

@Controller
@RequestMapping("/book")
public class BookController {

    @RequestMapping("/save")
    @ResponseBody
    public String save(){
        System.out.println("book save ...");
        return "{'module':'book save'}";
    }
}
```

**注意:**

- 当类上和方法上都添加了`@RequestMapping`注解，前端发送请求的时候，要和两个注解的 value 值相加匹配才能访问到。
- @RequestMapping 注解 value 属性前面加不加`/`都可以

扩展小知识:

对于 PostMan 如何觉得字小不好看，可以使用`ctrl+=`调大，`ctrl+-`调小。

### 4.2 请求参数

请求路径设置好后，只要确保页面发送请求地址和后台 Controller 类中配置的路径一致，就可以接收到前端的请求，接收到请求后，如何接收页面传递的参数?

关于请求参数的传递与接收是和请求方式有关系的，目前比较常见的两种请求方式为：

- GET
- POST

针对于不同的请求前端如何发送，后端如何接收?

#### 4.2.1 环境准备

- 创建一个 Web 的 Maven 项目

- pom.xml 添加 Spring 依赖

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>

  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itheima</groupId>
    <artifactId>springmvc_03_request_mapping</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
      <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>3.1.0</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.2.10.RELEASE</version>
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

- 创建对应的配置类

  ```java
  public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {

      protected Class<?>[] getServletConfigClasses() {
          return new Class[]{SpringMvcConfig.class};
      }
      protected String[] getServletMappings() {
          return new String[]{"/"};
      }
      protected Class<?>[] getRootConfigClasses() {
          return new Class[0];
      }
  }

  @Configuration
  @ComponentScan("com.itheima.controller")
  public class SpringMvcConfig {
  }

  ```

- 编写 UserController

  ```java
  @Controller
  public class UserController {

      @RequestMapping("/commonParam")
      @ResponseBody
      public String commonParam(){
          return "{'module':'commonParam'}";
      }
  }
  ```

* 编写模型类，User 和 Address

  ```java
  public class Address {
      private String province;
      private String city;
      //setter...getter...略
  }
  public class User {
      private String name;
      private int age;
      //setter...getter...略
  }
  ```

最终创建好的项目结构如下:

![1630467830654](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019962.png)

#### 4.2.2 参数传递

##### GET 发送单个参数

发送请求与参数:

```
http://localhost/commonParam?name=itcast
```

![1630467921300](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019963.png)

接收参数：

```java
@Controller
public class UserController {

    @RequestMapping("/commonParam")
    @ResponseBody
    public String commonParam(String name){
        System.out.println("普通参数传递 name ==> "+name);
        return "{'module':'commonParam'}";
    }
}
```

##### GET 发送多个参数

发送请求与参数:

```
http://localhost/commonParam?name=itcast&age=15
```

![1630468045733](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019964.png)

接收参数：

```java
@Controller
public class UserController {

    @RequestMapping("/commonParam")
    @ResponseBody
    public String commonParam(String name,int age){
        System.out.println("普通参数传递 name ==> "+name);
        System.out.println("普通参数传递 age ==> "+age);
        return "{'module':'commonParam'}";
    }
}
```

##### GET 请求中文乱码

如果我们传递的参数中有中文，你会发现接收到的参数会出现中文乱码问题。

发送请求:`http://localhost/commonParam?name=张三&age=18`

控制台:

![1630480536510](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019965.png)

出现乱码的原因相信大家都清楚，Tomcat8.5 以后的版本已经处理了中文乱码的问题，但是 IDEA 中的 Tomcat 插件目前只到 Tomcat7，所以需要修改 pom.xml 来解决 GET 请求中文乱码问题

```xml
<build>
    <plugins>
      <plugin>
        <groupId>org.apache.tomcat.maven</groupId>
        <artifactId>tomcat7-maven-plugin</artifactId>
        <version>2.1</version>
        <configuration>
          <port>80</port><!--tomcat端口号-->
          <path>/</path> <!--虚拟目录-->
          <uriEncoding>UTF-8</uriEncoding><!--访问路径编解码字符集-->
        </configuration>
      </plugin>
    </plugins>
  </build>
```

##### POST 发送参数

发送请求与参数:

![1630480812809](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019966.png)接收参数：

和 GET 一致，不用做任何修改

```java
@Controller
public class UserController {

    @RequestMapping("/commonParam")
    @ResponseBody
    public String commonParam(String name,int age){
        System.out.println("普通参数传递 name ==> "+name);
        System.out.println("普通参数传递 age ==> "+age);
        return "{'module':'commonParam'}";
    }
}
```

##### POST 请求中文乱码

发送请求与参数:

![1630480964421](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019967.png)

接收参数:

控制台打印，会发现有中文乱码问题。

![1630481008109](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019968.png)

解决方案:配置过滤器

```java
public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
    protected Class<?>[] getRootConfigClasses() {
        return new Class[0];
    }

    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringMvcConfig.class};
    }

    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    //乱码处理
    @Override
    protected Filter[] getServletFilters() {
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        return new Filter[]{filter};
    }
}
```

CharacterEncodingFilter 是在 spring-web 包中，所以用之前需要导入对应的 jar 包。

### 4.3 五种类型参数传递

前面我们已经能够使用 GET 或 POST 来发送请求和数据，所携带的数据都是比较简单的数据，接下来在这个基础上，我们来研究一些比较复杂的参数传递，常见的参数种类有:

- 普通参数
- POJO 类型参数
- 嵌套 POJO 类型参数
- 数组类型参数
- 集合类型参数

这些参数如何发送，后台改如何接收?我们一个个来学习。

#### 4.3.1 普通参数

- 普通参数:url 地址传参，地址参数名与形参变量名相同，定义形参即可接收参数。

![1630481585729](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019969.png)

如果形参与地址参数名不一致该如何解决?

发送请求与参数:

```
http://localhost/commonParamDifferentName?name=张三&age=18
```

后台接收参数:

```java
@RequestMapping("/commonParamDifferentName")
@ResponseBody
public String commonParamDifferentName(String userName , int age){
    System.out.println("普通参数传递 userName ==> "+userName);
    System.out.println("普通参数传递 age ==> "+age);
    return "{'module':'common param different name'}";
}
```

因为前端给的是`name`,后台接收使用的是`userName`,两个名称对不上，导致接收数据失败:

![1630481772035](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019970.png)

解决方案:使用@RequestParam 注解

```java
@RequestMapping("/commonParamDifferentName")
    @ResponseBody
    public String commonParamDifferentName(@RequestPaam("name") String userName , int age){
        System.out.println("普通参数传递 userName ==> "+userName);
        System.out.println("普通参数传递 age ==> "+age);
        return "{'module':'common param different name'}";
    }
```

**注意:写上@RequestParam 注解框架就不需要自己去解析注入，能提升框架处理性能**

#### 4.3.2 POJO 数据类型

简单数据类型一般处理的是参数个数比较少的请求，如果参数比较多，那么后台接收参数的时候就比较复杂，这个时候我们可以考虑使用 POJO 数据类型。

- POJO 参数：请求参数名与形参对象属性名相同，定义 POJO 类型形参即可接收参数

此时需要使用前面准备好的 POJO 类，先来看下 User

```java
public class User {
    private String name;
    private int age;
    //setter...getter...略
}
```

发送请求和参数:

![1630482186745](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019971.png)

后台接收参数:

```java
//POJO参数：请求参数与形参对象中的属性对应即可完成参数传递
@RequestMapping("/pojoParam")
@ResponseBody
public String pojoParam(User user){
    System.out.println("pojo参数传递 user ==> "+user);
    return "{'module':'pojo param'}";
}
```

**注意:**

- POJO 参数接收，前端 GET 和 POST 发送请求数据的方式不变。
- ==请求参数 key 的名称要和 POJO 中属性的名称一致，否则无法封装。==

#### 4.3.3 嵌套 POJO 类型参数

如果 POJO 对象中嵌套了其他的 POJO 类，如

```java
public class Address {
    private String province;
    private String city;
    //setter...getter...略
}
public class User {
    private String name;
    private int age;
    private Address address;
    //setter...getter...略
}
```

- 嵌套 POJO 参数：请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套 POJO 属性参数

发送请求和参数:

![1630482363291](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019972.png)

后台接收参数:

```java
//POJO参数：请求参数与形参对象中的属性对应即可完成参数传递
@RequestMapping("/pojoParam")
@ResponseBody
public String pojoParam(User user){
    System.out.println("pojo参数传递 user ==> "+user);
    return "{'module':'pojo param'}";
}
```

**注意:**

==请求参数 key 的名称要和 POJO 中属性的名称一致，否则无法封装==

#### 4.3.4 数组类型参数

举个简单的例子，如果前端需要获取用户的爱好，爱好绝大多数情况下都是多个，如何发送请求数据和接收数据呢?

- 数组参数：请求参数名与形参对象属性名相同且请求参数为多个，定义数组类型即可接收参数

发送请求和参数:

![1630482999626](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019973.png)

后台接收参数:

```java
  //数组参数：同名请求参数可以直接映射到对应名称的形参数组对象中
    @RequestMapping("/arrayParam")
    @ResponseBody
    public String arrayParam(String[] likes){
        System.out.println("数组参数传递 likes ==> "+ Arrays.toString(likes));
        return "{'module':'array param'}";
    }
```

#### 4.3.5 集合类型参数

数组能接收多个值，那么集合是否也可以实现这个功能呢?

发送请求和参数:

![1630484283773](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019974.png)

后台接收参数:

```java
//集合参数：同名请求参数可以使用@RequestParam注解映射到对应名称的集合对象中作为数据
@RequestMapping("/listParam")
@ResponseBody
public String listParam(List<String> likes){
    System.out.println("集合参数传递 likes ==> "+ likes);
    return "{'module':'list param'}";
}
```

运行会报错，

![1630484339065](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019975.png)

错误的原因是:SpringMVC 将 List 看做是一个 POJO 对象来处理，将其创建一个对象并准备把前端的数据封装到对象中，但是 List 是一个接口无法创建对象，所以报错。

解决方案是:使用`@RequestParam`注解

```java
//集合参数：同名请求参数可以使用@RequestParam注解映射到对应名称的集合对象中作为数据
@RequestMapping("/listParam")
@ResponseBody
public String listParam(@RequestParam List<String> likes){
    System.out.println("集合参数传递 likes ==> "+ likes);
    return "{'module':'list param'}";
}
```

- 集合保存普通参数：请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam 绑定参数关系
- 对于简单数据类型使用数组会比集合更简单些。

### 知识点 1：@RequestParam

| 名称     | @RequestParam                                          |
| -------- | ------------------------------------------------------ |
| 类型     | 形参注解                                               |
| 位置     | SpringMVC 控制器方法形参定义前面                       |
| 作用     | 绑定请求参数与处理器方法形参间的关系                   |
| 相关参数 | required：是否为必传参数 <br/>defaultValue：参数默认值 |

### 4.4 JSON 数据传输参数

前面我们说过，现在比较流行的开发方式为异步调用。前后台以异步方式进行交换，传输的数据使用的是==JSON==,所以前端如果发送的是 JSON 数据，后端该如何接收?

对于 JSON 数据类型，我们常见的有三种:

- json 普通数组（["value1","value2","value3",...]）
- json 对象（{key1:value1,key2:value2,...}）
- json 对象数组（[{key1:value1,...},{key2:value2,...}]）

对于上述数据，前端如何发送，后端如何接收?

#### JSON 普通数组

###### 步骤 1:pom.xml 添加依赖

SpringMVC 默认使用的是 jackson 来处理 json 的转换，所以需要在 pom.xml 添加 jackson 依赖

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.9.0</version>
</dependency>
```

###### 步骤 2:PostMan 发送 JSON 数据

![1630485135061](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019976.png)

###### 步骤 3:开启 SpringMVC 注解支持

在 SpringMVC 的配置类中开启 SpringMVC 的注解支持，这里面就包含了将 JSON 转换成对象的功能。

```java
@Configuration
@ComponentScan("com.itheima.controller")
//开启json数据类型自动转换
@EnableWebMvc
public class SpringMvcConfig {
}
```

###### 步骤 4:参数前添加@RequestBody

```java
//使用@RequestBody注解将外部传递的json数组数据映射到形参的集合对象中作为数据
@RequestMapping("/listParamForJson")
@ResponseBody
public String listParamForJson(@RequestBody List<String> likes){
    System.out.println("list common(json)参数传递 list ==> "+likes);
    return "{'module':'list common for json param'}";
}
```

###### 步骤 5:启动运行程序

![1630492624684](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019977.png)

JSON 普通数组的数据就已经传递完成，下面针对 JSON 对象数据和 JSON 对象数组的数据该如何传递呢?

#### JSON 对象数据

我们会发现，只需要关注请求和数据如何发送?后端数据如何接收?

请求和数据的发送:

```json
{
  "name": "itcast",
  "age": 15
}
```

![1630493105450](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019978.png)

后端接收数据：

```java
@RequestMapping("/pojoParamForJson")
@ResponseBody
public String pojoParamForJson(@RequestBody User user){
    System.out.println("pojo(json)参数传递 user ==> "+user);
    return "{'module':'pojo for json param'}";
}
```

启动程序访问测试

![1630493233550](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019979.png)

**说明:**

address 为 null 的原因是前端没有传递数据给后端。

如果想要 address 也有数据，我们需求修改前端传递的数据内容:

```json
{
  "name": "itcast",
  "age": 15,
  "address": {
    "province": "beijing",
    "city": "beijing"
  }
}
```

再次发送请求，就能看到 address 中的数据

![1630493450694](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019980.png)

#### JSON 对象数组

集合中保存多个 POJO 该如何实现?

请求和数据的发送:

```json
[
  { "name": "itcast", "age": 15 },
  { "name": "itheima", "age": 12 }
]
```

![1630493501205](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019981.png)

后端接收数据:

```java
@RequestMapping("/listPojoParamForJson")
@ResponseBody
public String listPojoParamForJson(@RequestBody List<User> list){
    System.out.println("list pojo(json)参数传递 list ==> "+list);
    return "{'module':'list pojo for json param'}";
}
```

启动程序访问测试

![1630493561137](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019982.png)

**小结**

SpringMVC 接收 JSON 数据的实现步骤为:

(1)导入 jackson 包

(2)使用 PostMan 发送 JSON 数据

(3)开启 SpringMVC 注解驱动，在配置类上添加@EnableWebMvc 注解

(4)Controller 方法的参数前添加@RequestBody 注解

#### 知识点 1：@EnableWebMvc

| 名称 | @EnableWebMvc               |
| ---- | --------------------------- |
| 类型 | ==配置类注解==              |
| 位置 | SpringMVC 配置类定义上方    |
| 作用 | 开启 SpringMVC 多项辅助功能 |

#### 知识点 2：@RequestBody

| 名称 | @RequestBody                                                               |
| ---- | -------------------------------------------------------------------------- |
| 类型 | ==形参注解==                                                               |
| 位置 | SpringMVC 控制器方法形参定义前面                                           |
| 作用 | 将请求中请求体所包含的数据传递给请求参数，此注解一个处理器方法只能使用一次 |

#### @RequestBody 与@RequestParam 区别

- 区别

  - @RequestParam 用于接收 url 地址传参，表单传参【application/x-www-form-urlencoded】
  - @RequestBody 用于接收 json 数据【application/json】

- 应用
  - 后期开发中，发送 json 格式数据为主，@RequestBody 应用较广
  - 如果发送非 json 格式数据，选用@RequestParam 接收请求参数

### 4.5 日期类型参数传递

前面我们处理过简单数据类型、POJO 数据类型、数组和集合数据类型以及 JSON 数据类型，接下来我们还得处理一种开发中比较常见的一种数据类型，`日期类型`

日期类型比较特殊，因为对于日期的格式有 N 多中输入方式，比如:

- 2088-08-18
- 2088/08/18
- 08/18/2088
- ......

针对这么多日期格式，SpringMVC 该如何接收，它能很好的处理日期类型数据么?

#### 步骤 1:编写方法接收日期数据

在 UserController 类中添加方法，把参数设置为日期类型

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date)
    System.out.println("参数传递 date ==> "+date);
    return "{'module':'data param'}";
}
```

#### 步骤 2:启动 Tomcat 服务器

查看控制台是否报错，如果有错误，先解决错误。

#### 步骤 3:使用 PostMan 发送请求

使用 PostMan 发送 GET 请求，并设置 date 参数

`http://localhost/dataParam?date=2088/08/08`

![1630494320917](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019983.png)

#### 步骤 4:查看控制台

![1630494443738](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019984.png)

通过打印，我们发现 SpringMVC 可以接收日期数据类型，并将其打印在控制台。

这个时候，我们就想如果把日期参数的格式改成其他的，SpringMVC 还能处理么?

#### 步骤 5:更换日期格式

为了能更好的看到程序运行的结果，我们在方法中多添加一个日期参数

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date,Date date1)
    System.out.println("参数传递 date ==> "+date);
    return "{'module':'data param'}";
}
```

使用 PostMan 发送请求，携带两个不同的日期格式，

`http://localhost/dataParam?date=2088/08/08&date1=2088-08-08`

![1630494565970](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019985.png)

发送请求和数据后，页面会报 400，控制台会报出一个错误

Resolved [org.springframework.web.method.annotation.==MethodArgumentTypeMismatchException==: Failed to convert value of type 'java.lang.String' to required type 'java.util.Date'; nested exception is org.springframework.core.convert.==ConversionFailedException==: Failed to convert from type [java.lang.String] to type [java.util.Date] for value '2088-08-08'; nested exception is java.lang.IllegalArgumentException]

从错误信息可以看出，错误的原因是在将`2088-08-08`转换成日期类型的时候失败了，原因是 SpringMVC 默认支持的字符串转日期的格式为`yyyy/MM/dd`,而我们现在传递的不符合其默认格式，SpringMVC 就无法进行格式转换，所以报错。

解决方案也比较简单，需要使用`@DateTimeFormat`

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date,
                        @DateTimeFormat(pattern="yyyy-MM-dd") Date date1)
    System.out.println("参数传递 date ==> "+date);
	System.out.println("参数传递 date1(yyyy-MM-dd) ==> "+date1);
    return "{'module':'data param'}";
}
```

重新启动服务器，重新发送请求测试，SpringMVC 就可以正确的进行日期转换了

![1630495221038](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019986.png)

#### 步骤 6:携带时间的日期

接下来我们再来发送一个携带时间的日期，看下 SpringMVC 该如何处理?

先修改 UserController 类，添加第三个参数

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date,
                        @DateTimeFormat(pattern="yyyy-MM-dd") Date date1,
                        @DateTimeFormat(pattern="yyyy/MM/dd HH:mm:ss") Date date2)
    System.out.println("参数传递 date ==> "+date);
	System.out.println("参数传递 date1(yyyy-MM-dd) ==> "+date1);
	System.out.println("参数传递 date2(yyyy/MM/dd HH:mm:ss) ==> "+date2);
    return "{'module':'data param'}";
}
```

使用 PostMan 发送请求，携带两个不同的日期格式，

`http://localhost/dataParam?date=2088/08/08&date1=2088-08-08&date2=2088/08/08 8:08:08`

![1630495347289](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019987.png)

重新启动服务器，重新发送请求测试，SpringMVC 就可以将日期时间的数据进行转换

![1630495507353](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019988.png)

#### 知识点 1：@DateTimeFormat

| 名称     | @DateTimeFormat                 |
| -------- | ------------------------------- |
| 类型     | ==形参注解==                    |
| 位置     | SpringMVC 控制器方法形参前面    |
| 作用     | 设定日期时间型数据格式          |
| 相关属性 | pattern：指定日期时间格式字符串 |

#### 内部实现原理

讲解内部原理之前，我们需要先思考个问题:

- 前端传递字符串，后端使用日期 Date 接收
- 前端传递 JSON 数据，后端使用对象接收
- 前端传递字符串，后端使用 Integer 接收
- 后台需要的数据类型有很多中
- 在数据的传递过程中存在很多类型的转换

问:谁来做这个类型转换?

答:SpringMVC

问:SpringMVC 是如何实现类型转换的?

答:SpringMVC 中提供了很多类型转换接口和实现类

在框架中，有一些类型转换接口，其中有:

- (1) Converter 接口

```java
/**
*	S: the source type
*	T: the target type
*/
public interface Converter<S, T> {
    @Nullable
    //该方法就是将从页面上接收的数据(S)转换成我们想要的数据类型(T)返回
    T convert(S source);
}
```

**注意:Converter 所属的包为`org.springframework.core.convert.converter`**

Converter 接口的实现类

![1630496385398](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019989.png)

框架中有提供很多对应 Converter 接口的实现类，用来实现不同数据类型之间的转换,如:

请求参数年龄数据（String→Integer）

日期格式转换（String → Date）

- (2) HttpMessageConverter 接口

该接口是实现对象与 JSON 之间的转换工作

**==注意:SpringMVC 的配置类把@EnableWebMvc 当做标配配置上去，不要省略==**

### 4.6 响应

SpringMVC 接收到请求和数据后，进行一些了的处理，当然这个处理可以是转发给 Service，Service 层再调用 Dao 层完成的，不管怎样，处理完以后，都需要将结果告知给用户。

比如:根据用户 ID 查询用户信息、查询用户列表、新增用户等。

对于响应，主要就包含两部分内容：

- 响应页面
- 响应数据
  - 文本数据
  - json 数据

因为异步调用是目前常用的主流方式，所以我们需要更关注的就是如何返回 JSON 数据，对于其他只需要认识了解即可。

#### 4.6.1 环境准备

- 创建一个 Web 的 Maven 项目

- pom.xml 添加 Spring 依赖

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>

  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itheima</groupId>
    <artifactId>springmvc_05_response</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <dependencies>
      <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>3.1.0</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.2.10.RELEASE</version>
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

- 创建对应的配置类

  ```java
  public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
      protected Class<?>[] getRootConfigClasses() {
          return new Class[0];
      }

      protected Class<?>[] getServletConfigClasses() {
          return new Class[]{SpringMvcConfig.class};
      }

      protected String[] getServletMappings() {
          return new String[]{"/"};
      }

      //乱码处理
      @Override
      protected Filter[] getServletFilters() {
          CharacterEncodingFilter filter = new CharacterEncodingFilter();
          filter.setEncoding("UTF-8");
          return new Filter[]{filter};
      }
  }

  @Configuration
  @ComponentScan("com.itheima.controller")
  //开启json数据类型自动转换
  @EnableWebMvc
  public class SpringMvcConfig {
  }


  ```

- 编写模型类 User

  ```java
  public class User {
      private String name;
      private int age;
      //getter...setter...toString省略
  }
  ```

- webapp 下创建 page.jsp

  ```jsp
  <html>
  <body>
  <h2>Hello Spring MVC!</h2>
  </body>
  </html>
  ```

- 编写 UserController

  ```java
  @Controller
  public class UserController {


  }
  ```

最终创建好的项目结构如下:

![1630497314131](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019990.png)

#### 4.6.2 响应页面[了解]

##### 步骤 1:设置返回页面

```java
@Controller
public class UserController {

    @RequestMapping("/toJumpPage")
    //注意
    //1.此处不能添加@ResponseBody,如果加了该注入，会直接将page.jsp当字符串返回前端
    //2.方法需要返回String
    public String toJumpPage(){
        System.out.println("跳转页面");
        return "page.jsp";
    }

}
```

##### 步骤 2:启动程序测试

此处涉及到页面跳转，所以不适合采用 PostMan 进行测试，直接打开浏览器，输入

`http://localhost/toJumpPage`

![1630497496785](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019991.png)

#### 4.6.3 返回文本数据[了解]

##### 步骤 1:设置返回文本内容

```java
@Controller
public class UserController {

   	@RequestMapping("/toText")
	//注意此处该注解就不能省略，如果省略了,会把response text当前页面名称去查找，如果没有回报404错误
    @ResponseBody
    public String toText(){
        System.out.println("返回纯文本数据");
        return "response text";
    }

}
```

##### 步骤 2:启动程序测试

此处不涉及到页面跳转，因为我们现在发送的是 GET 请求，可以使用浏览器也可以使用 PostMan 进行测试，输入地址`http://localhost/toText`访问

![1630497741388](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019992.png)

#### 4.6.4 响应 JSON 数据

##### 响应 POJO 对象

```java
@Controller
public class UserController {

    @RequestMapping("/toJsonPOJO")
    @ResponseBody
    public User toJsonPOJO(){
        System.out.println("返回json对象数据");
        User user = new User();
        user.setName("itcast");
        user.setAge(15);
        return user;
    }

}
```

返回值为实体类对象，设置返回值为实体类类型，即可实现返回对应对象的 json 数据，需要依赖==@ResponseBody==注解和==@EnableWebMvc==注解

重新启动服务器，访问`http://localhost/toJsonPOJO`

![1630497954896](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019993.png)

##### 响应 POJO 集合对象

```java
@Controller
public class UserController {

    @RequestMapping("/toJsonList")
    @ResponseBody
    public List<User> toJsonList(){
        System.out.println("返回json集合数据");
        User user1 = new User();
        user1.setName("传智播客");
        user1.setAge(15);

        User user2 = new User();
        user2.setName("黑马程序员");
        user2.setAge(12);

        List<User> userList = new ArrayList<User>();
        userList.add(user1);
        userList.add(user2);

        return userList;
    }

}

```

重新启动服务器，访问`http://localhost/toJsonList`

![1630498084047](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019994.png)

#### 知识点 1：@ResponseBody

| 名称     | @ResponseBody                                                              |
| -------- | -------------------------------------------------------------------------- |
| 类型     | ==方法\类注解==                                                            |
| 位置     | SpringMVC 控制器方法定义上方和控制类上                                     |
| 作用     | 设置当前控制器返回值作为响应体,<br/>写在类上，该类的所有方法都有该注解功能 |
| 相关属性 | pattern：指定日期时间格式字符串                                            |

**说明:**

- 该注解可以写在类上或者方法上
- 写在类上就是该类下的所有方法都有@ReponseBody 功能
- 当方法上有@ReponseBody 注解后
  - 方法的返回值为字符串，会将其作为文本内容直接响应给前端
  - 方法的返回值为对象，会将对象转换成 JSON 响应给前端

此处又使用到了类型转换，内部还是通过 Converter 接口的实现类完成的，所以 Converter 除了前面所说的功能外，它还可以实现:

- 对象转 Json 数据(POJO -> json)
- 集合转 Json 数据(Collection -> json)
