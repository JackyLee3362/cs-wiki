---
title: Spring Boot
description: Spring Boot 简化开发与配置
date: 2025-11-01
update_date:
draft: false
author: JackyLee
tags:
  - java
  - spring
  - 框架
categories:
  - 后端开发
comment: true
---

> Spring Boot 是 Spring Framework 的扩展，旨在简化 Spring 应用的初始搭建和开发过程，提供自动配置、内嵌服务器和开箱即用的 Starter。

## 配置优先级

Spring Boot 配置按以下优先级从高到低：

1. 命令行参数（`--xxx=xxx`）
2. Java 系统属性（`-Dxxx=xxx`）
3. `application.properties`
4. `application.yml`
5. `application.yaml`

### 内部配置加载顺序

- `file:./config/`：当前项目下的 config 目录
- `file:./`：当前项目的根目录
- `classpath:/config/`：classpath 的 config 目录
- `classpath:/`：classpath 的根目录（默认的 `application.properties`）

### 外部配置

```sh
java -jar app.jar --spring.config.location=[文件绝对路径]
```

[外部配置官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config)

## 读取配置的方式

| 方式 | 适用场景 |
|------|----------|
| `@Value("${key}")` | 单个属性注入 |
| `Environment` | 动态获取 |
| `@ConfigurationProperties(prefix="xxx")` | 批量属性绑定到对象 |

## Profile 多环境配置

### 多文件方式

- `application-dev.properties` — 开发环境
- `application-test.properties` — 测试环境
- `application-prod.properties` — 生产环境

在 `application.properties` 中激活：

```properties
spring.profiles.active=dev
```

### YAML 多文档方式

```yml
---
server:
  port: 8081
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
spring:
  profiles:
    active: dev
```

## 自动配置原理

- Spring Boot 2.7 之前：`META-INF/spring.factories`
- Spring Boot 2.7+：`META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`

## 单元测试

```java
@SpringBootTest(classes = Application.class)
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    void testAdd() {
        userService.add();
    }
}
```

## 参考资料

- [Spring Boot 官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/) #todo
- [Spring Boot 外部配置](https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config) #todo
- [Spring Boot Reference Guide](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/htmlsingle/#boot-features-custom-starter) #todo
- [程序员老鬼 - 有些公司为什么禁止 SpringBoot 项目使用 Tomcat？ - 知乎](https://www.zhihu.com/question/588619979/answer/17948112955) #todo
- [Spring Boot Test 的详细使用教程 - 博客园](https://www.cnblogs.com/gongchengship/p/18540901) #todo
- [程序员小富 - springcloud 技术体系里有 gateway 网关，那还需要 nginx 吗？ - 知乎](https://www.zhihu.com/question/4940651958/answer/1981425456470316356) #todo
- [windows 环境的 rabbitmq 安装与启动 - 掘金](https://juejin.cn/post/7021021196548309029) #todo
- [RabbitMQ Tutorials](https://www.rabbitmq.com/tutorials) #todo
- [黑马程序员 SpringBoot 教程](https://www.bilibili.com/video/BV1Lq4y1J77x) #todo
