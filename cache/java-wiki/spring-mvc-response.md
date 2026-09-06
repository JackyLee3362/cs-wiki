---
title: Spring MVC Response
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Response

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
