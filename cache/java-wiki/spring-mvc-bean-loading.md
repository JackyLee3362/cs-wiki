---
title: Spring MVC Bean Loading
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Bean Loading Control

#### 2.5.1 问题分析

入门案例的内容已经做完了，在入门案例中我们创建过一个`SpringMvcConfig`的配置类，再回想前面咱们学习 Spring 的时候也创建过一个配置类`SpringConfig`。这两个配置类都需要加载资源，那么它们分别都需要加载哪些内容?

我们先来看下目前我们的项目目录结构:

![1630459727575](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019949.png)

- config 目录存入的是配置类,写过的配置类有:

  - ServletContainersInitConfig
  - SpringConfig
  - SpringMvcConfig
  - JdbcConfig
  - MybatisConfig

- controller 目录存放的是 SpringMVC 的 controller 类
- service 目录存放的是 service 接口和实现类
- dao 目录存放的是 dao/Mapper 接口

controller、service 和 dao 这些类都需要被容器管理成 bean 对象，那么到底是该让 SpringMVC 加载还是让 Spring 加载呢?

- SpringMVC 加载其相关 bean(表现层 bean),也就是 controller 包下的类
- Spring 控制的 bean
  - 业务 bean(Service)
  - 功能 bean(DataSource,SqlSessionFactoryBean,MapperScannerConfigurer 等)

分析清楚谁该管哪些 bean 以后，接下来要解决的问题是如何让 Spring 和 SpringMVC 分开加载各自的内容。

在 SpringMVC 的配置类`SpringMvcConfig`中使用注解`@ComponentScan`，我们只需要将其扫描范围设置到 controller 即可，如

![1630460319004](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019950.png)

在 Spring 的配置类`SpringConfig`中使用注解`@ComponentScan`,当时扫描的范围中其实是已经包含了 controller,如:

![1630460408159](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019951.png)

从包结构来看的话，Spring 已经多把 SpringMVC 的 controller 类也给扫描到，所以针对这个问题该如何解决，就是咱们接下来要学习的内容。

概括的描述下咱们现在的问题就是==因为功能不同，如何避免 Spring 错误加载到 SpringMVC 的 bean?==

#### 2.5.2 思路分析

针对上面的问题，解决方案也比较简单，就是:

- 加载 Spring 控制的 bean 的时候排除掉 SpringMVC 控制的 bean

具体该如何排除：

- 方式一:Spring 加载的 bean 设定扫描范围为精准范围，例如 service 包、dao 包等
- 方式二:Spring 加载的 bean 设定扫描范围为 com.itheima,排除掉 controller 包中的 bean
- 方式三:不区分 Spring 与 SpringMVC 的环境，加载到同一个环境中[了解即可]

#### 2.5.4 环境准备

- 创建一个 Web 的 Maven 项目

- pom.xml 添加 Spring 依赖

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>

  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.itheima</groupId>
    <artifactId>springmvc_02_bean_load</artifactId>
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
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>1.1.16</version>
      </dependency>

      <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.6</version>
      </dependency>

      <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.47</version>
      </dependency>

      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.2.10.RELEASE</version>
      </dependency>

      <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis-spring</artifactId>
        <version>1.3.0</version>
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
  public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {
      protected WebApplicationContext createServletApplicationContext() {
          AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
          ctx.register(SpringMvcConfig.class);
          return ctx;
      }
      protected String[] getServletMappings() {
          return new String[]{"/"};
      }
      protected WebApplicationContext createRootApplicationContext() {
        return null;
      }
  }

  @Configuration
  @ComponentScan("com.itheima.controller")
  public class SpringMvcConfig {
  }

  @Configuration
  @ComponentScan("com.itheima")
  public class SpringConfig {
  }

  ```

- 编写 Controller，Service，Dao，Domain 类

  ```java
  @Controller
  public class UserController {

      @RequestMapping("/save")
      @ResponseBody
      public String save(){
          System.out.println("user save ...");
          return "{'info':'springmvc'}";
      }
  }

  public interface UserService {
      public void save(User user);
  }

  @Service
  public class UserServiceImpl implements UserService {
      public void save(User user) {
          System.out.println("user service ...");
      }
  }

  public interface UserDao {
      @Insert("insert into tbl_user(name,age)values(#{name},#{age})")
      public void save(User user);
  }
  public class User {
      private Integer id;
      private String name;
      private Integer age;
      //setter..getter..toString略
  }
  ```

最终创建好的项目结构如下:

![1630461261820](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019952.png)

#### 2.5.5 设置 bean 加载控制

方式一:修改 Spring 配置类，设定扫描范围为精准范围。

```java
@Configuration
@ComponentScan({"com.itheima.service","comitheima.dao"})
public class SpringConfig {
}
```

**说明:**

上述只是通过例子说明可以精确指定让 Spring 扫描对应的包结构，真正在做开发的时候，因为 Dao 最终是交给`MapperScannerConfigurer`对象来进行扫描处理的，我们只需要将其扫描到 service 包即可。

方式二:修改 Spring 配置类，设定扫描范围为 com.itheima,排除掉 controller 包中的 bean

```java
@Configuration
@ComponentScan(value="com.itheima",
    excludeFilters=@ComponentScan.Filter(
    	type = FilterType.ANNOTATION,
        classes = Controller.class
    )
)
public class SpringConfig {
}
```

- excludeFilters 属性：设置扫描加载 bean 时，排除的过滤规则

- type 属性：设置排除规则，当前使用按照 bean 定义时的注解类型进行排除

  - ANNOTATION：按照注解排除
  - ASSIGNABLE_TYPE:按照指定的类型过滤
  - ASPECTJ:按照 Aspectj 表达式排除，基本上不会用
  - REGEX:按照正则表达式排除
  - CUSTOM:按照自定义规则排除

  大家只需要知道第一种 ANNOTATION 即可

- classes 属性：设置排除的具体注解类，当前设置排除@Controller 定义的 bean

如何测试 controller 类已经被排除掉了?

```java
public class App{
	public static void main (String[] args){
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        System.out.println(ctx.getBean(UserController.class));
    }
}
```

如果被排除了，该方法执行就会报 bean 未被定义的错误

![1630462200947](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019953.png)

==注意:测试的时候，需要把 SpringMvcConfig 配置类上的@ComponentScan 注解注释掉，否则不会报错==

出现问题的原因是，

- Spring 配置类扫描的包是`com.itheima`
- SpringMVC 的配置类，`SpringMvcConfig`上有一个@Configuration 注解，也会被 Spring 扫描到
- SpringMvcConfig 上又有一个@ComponentScan，把 controller 类又给扫描进来了
- 所以如果不把@ComponentScan 注释掉，Spring 配置类将 Controller 排除，但是因为扫描到 SpringMVC 的配置类，又将其加载回来，演示的效果就出不来
- 解决方案，也简单，把 SpringMVC 的配置类移出 Spring 配置类的扫描范围即可。

最后一个问题，有了 Spring 的配置类，要想在 tomcat 服务器启动将其加载，我们需要修改 ServletContainersInitConfig

```java
public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {
    protected WebApplicationContext createServletApplicationContext() {
        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        ctx.register(SpringMvcConfig.class);
        return ctx;
    }
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
    protected WebApplicationContext createRootApplicationContext() {
      AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        ctx.register(SpringConfig.class);
        return ctx;
    }
}
```

对于上述的配置方式，Spring 还提供了一种更简单的配置方式，可以不用再去创建`AnnotationConfigWebApplicationContext`对象，不用手动`register`对应的配置类，如何实现?

```java
public class ServletContainersInitConfig extends AbstractAnnotationConfigDispatcherServletInitializer {

    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{SpringConfig.class};
    }

    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringMvcConfig.class};
    }

    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
}
```
