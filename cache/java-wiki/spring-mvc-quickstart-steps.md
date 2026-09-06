---
title: Spring MVC Quickstart Steps
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Quickstart Steps

faq: Servlet 是如何进行开发的?

1. 创建 web 工程(Maven 结构)
2. 设置 tomcat 服务器，加载 web 工程(使用 tomcat 插件)
3. 导入包 (Servlet)
4. 定义处理请求的功能类(UserServlet)
5. 设置请求映射(配置映射关系)

faq: SpringMVC 是如何进行开发的?

1. 创建 web 工程(Maven 结构)
2. 设置 tomcat 服务器，加载 web 工程(tomcat 插件)
3. 导入坐标(SpringMVC Servlet)
4. 定义处理请求的功能类(UserController)
5. 设置请求映射(配置映射关系)
6. 将 SpringMVC 设定加载到 Tomcat 容器中

#### 步骤 3:导入 jar 包

将 pom.xml 中多余的内容删除掉，再添加 SpringMVC 需要的依赖

```xml
<!-- spring mvc 依赖 -->
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

<!-- plugin 插件 -->
<plugin>
  <groupId>org.apache.tomcat.maven</groupId>
  <artifactId>tomcat7-maven-plugin</artifactId>
  <version>2.1</version>
  <configuration>
    <port>80</port>
    <path>/</path>
  </configuration>
</plugin>

```

faq: servlet 的坐标为什么需要添加`<scope>provided</scope>`?

- scope 是 maven 中 jar 包依赖作用范围的描述，
- 如果不设置默认是`compile`在在编译、运行、测试时均有效
- 如果运行有效的话就会和 tomcat 中的 servlet-api 包发生冲突，导致启动报错

- provided 代表的是该包只在编译和测试的时候用，运行的时候无效直接使用 tomcat 中的，就避免冲突

#### 步骤 4:创建配置类

```java
@Configuration
@ComponentScan("com.itheima.controller")
public class SpringMvcConfig {
}
```

#### 步骤 5:创建 Controller 类

```java
@Controller
public class UserController {

    @RequestMapping("/save")
    public void save(){
        System.out.println("user save ...");
    }
}

```

#### 步骤 6:使用配置类替换 web.xml

将 web.xml 删除，换成 ServletContainersInitConfig

```java
public class ServletContainersInitConfig extends AbstractDispatcherServletInitializer {}
```

#### 步骤 7:配置 Tomcat 环境 + 启动运行项目

```sh
mvn tomcat7:run
```

#### 步骤 8:浏览器访问

浏览器输入`http://localhost/save`进行访问，会报如下错误:

#### ![1630430401561](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019942.png)

页面报错的原因是后台没有指定返回的页面，目前只需要关注控制台看`user save ...`有没有被执行即可。

#### 步骤 10:修改 Controller 返回值解决上述问题

前面我们说过现在主要的是前端发送异步请求，后台响应 json 数据，所以接下来我们把 Controller 类的 save 方法进行修改

```java
@Controller
public class UserController {

    @RequestMapping("/save")
    public String save(){
        System.out.println("user save ...");
        return "{'info':'springmvc'}";
    }
}

```

再次重启 tomcat 服务器，然后重新通过浏览器测试访问,会发现还是会报错，这次的错是 404

![1630430658028](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019943.png)

出错的原因是，如果方法直接返回字符串，springmvc 会把字符串当成页面的名称在项目中进行查找返回，因为不存在对应返回值名称的页面，所以会报 404 错误，找不到资源。

而我们其实是想要直接返回的是 json 数据，具体如何修改呢?

#### 步骤 11:设置返回数据为 json

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

```

再次重启 tomcat 服务器，然后重新通过浏览器测试访问，就能看到返回的结果数据

![1630430835628](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019944.png)

至此 SpringMVC 的入门案例就已经完成。

**注意事项**

- SpringMVC 是基于 Spring 的，在 pom.xml 只导入了`spring-webmvc`jar 包的原因是它会自动依赖 spring 相关坐标
- AbstractDispatcherServletInitializer 类是 SpringMVC 提供的快速初始化 Web3.0 容器的抽象类
- AbstractDispatcherServletInitializer 提供了三个接口方法供用户实现
  - createServletApplicationContext 方法，创建 Servlet 容器时，加载 SpringMVC 对应的 bean 并放入 WebApplicationContext 对象范围中，而 WebApplicationContext 的作用范围为 ServletContext 范围，即整个 web 容器范围
  - getServletMappings 方法，设定 SpringMVC 对应的请求映射路径，即 SpringMVC 拦截哪些请求
  - createRootApplicationContext 方法，如果创建 Servlet 容器时需要加载非 SpringMVC 对应的 bean,使用当前方法进行，使用方式和 createServletApplicationContext 相同。
  - createServletApplicationContext 用来加载 SpringMVC 环境
  - createRootApplicationContext 用来加载 Spring 环境
