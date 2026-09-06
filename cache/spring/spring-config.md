---
title: spring-config
description:
date: 2023-05-17
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 配置优先级

1. 命令行(--xxx=xxx)
2. java 属性 (-Dxxx=xxx)
3. properties
4. yml
5. yaml

## 配置文件优先级

application.properties > application.yml > application.yaml

```ini
# properties的写法
server.port=8081
server.address=127.0.0.1
```

## 代码中读取配置内容

- `@Value`
- `Environment`
- `@ConfigurationProperties`

先看`@Value`方法

```yml
person:
  name: Mike
  age: 18
address:
  - shanghai
  - beijing
```

```java
@Value("${person.name}")
private String personName;

@Value("${person.age}")
private int age;

@Value("${address[0]}")
private String address;

```

总结：获取单个属性方便，多个属性都要注入很麻烦

再看`Environment`

```java

@Autowired
private Environment env;

@RequestMapping("/helloenv")
public String helloEnv() {
    String name = env.getProperty("name");
    return "Hello, SpringBoot" + name;
}
```

最后看`@ConfigurationProperties`

```java
// yml配置文件中
person:
name:Mike
age:18

// Person类中
@Component
@ConfigurationProperties(prefix = "person") // 重点在这
public class Person {
    private String name;
    private int age;
}

// Controller中
@Autowired
private Person person;
```

## profile

开发、测试、生产环境

### 多文件方式

- 开发 application-dev.properties
- 测试 application-test.properties
- 生产 application-pro.properties

```conf
# 在application.properties中
spring.profile.active=dev # 要和文件后缀保持一致
```

### yml 多文档

```yml
---
server:
  port: 8081
# spring:
#   profiles: dev # 目前这种被弃用了
spring:
  config:
    activate:
      on-profile: dev
---
server:
  port: 8082
spring:
  config:
    activate:
      on-profile: test
---
server:
  port: 8083
spring:
  config:
    activate:
      on-profile: prod
---
spring:
  profiles:
    active: prod # dev/test
```

### 配置 configuration

虚拟机参数：右上角 - Edit Configuration - VM options - `-Dspring.profiles.active=test`

命令行参数：右上角 - Edit Configuration - program arguments - `--spring.profiles.active=prod`

这样的方式有什么好处呢？我们打包完以后，进入打包目录，然后输入命令
`java -jar [jar包名字] --spring.profiles.active=prod`，即可换成生产环境

## 内部配置的加载顺序

- `file:./config/`：当前项目下的/config 目录下（点击`Project`，再点击`Project Files`，切换为
  `Project Files`视图
- `file:./`：当前项目的根目录
- `classpath:/config/`：classpath 的/config 目录（在`resources`创建`config`文件夹
- `classpath:/`：classpath 的根目录（就是默认的`application.properties`文件）

## 外部配置加载顺序

[官方网站 docs](https://docs.spring.io/spring-boot/docs/current/reference/html/)

[External config](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config)

```cmd
java -jar [jar包名字] --spring.config.location=[文件绝对路径]

```

## Spring 整合其他框架

### 需求：整合 Junit

实现步骤

- 搭建 SpringBoot 工程
- 引入 start-test 起步依赖
- 编写测试类
- 添加测试相关注解
  - @RunWith(SpringRunner.class)
  - @SpringBootTest(classes=启动类.class)
- 编写测试方法

```java
// 在src中定义一个UserServices类
@Service
public class UserServices {

    public void add() {
        System.out.println("add...");
    }
}

// 在test中
@SpringBootTest(classes = HelloWorldApplication.class) // 如果test文件中子文件和src相同，则只需要写@SpringBootTest
public class UserServicesTest {

    @Autowired
    private UserServices userServices;

    @Test
    void testAdd() {
        userServices.add();
    }
}

```

## 参考资料

- [黑马程序员 SpringBoot 教程，6 小时快速入门 Java 微服务架构 Spring Boot\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Lq4y1J77x)
