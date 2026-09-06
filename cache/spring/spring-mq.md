---
title: spring-mq
description:
date: 2026-09-06
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# spring中的mq项目

windows 启动参考文章

```sh
# 通过 scoop 安装并进入 ~/scoop/apps/rabbitmq/current 文件夹
# 进入 sbin 目录

# 启动
./rabbitmq-server.bat

# 查看启动状态
./rabbitmqctl.bat status

# 可视化 http://127.0.0.1:15672/ 账号 guest 密码 guest
./rabbitmq-plugins.bat enable rabbitmq_management

# 停止服务
./rabbitmqctl.bat stop
```

- [windows环境的rabbitmq安装与启动下载资源： RabbitMQ，下载地址http://www.rabbitm - 掘金](https://juejin.cn/post/7021021196548309029)

## 环境准备

使用 docker 创建 mq

```shell
# 拉取 mq
docker pull rabbitmq:3-management

# 运行 mq
docker run -e RABBITMQ_DEFAULT_USER=mymq -e RABBITMQ_DEFAULT_PASS=123456 --name mq --hostname mq1 -p 15672:15672 -p 5672:5672 -d rabbitmq:3-management
```

## 实验一：简单队列

simple-queue，未使用 spring 集成

1. 运行 `consumer/test/java` 下的 `com.exmaple.mq.helloworld.ConsumerTest`
2. 运行 `publisher/test/java` 下的 `com.exmaple.mq.helloworld.PublisherTest`

## 实验二：使用 spring-amqp 实现简单队列

spring-amqp 是抽象层，spring-rabbit 是实现层

修改 consumer/publisher 的 `application.yaml` 的配置文件

1. 运行 `consumer/main/java` 下的 `com.example.mq.ConsumerApplication`
2. 运行 `publisher/test/java` 下的 `com.example.mq.spring.SpringAmqpTest`

## 实验三：working-queue 实验

work queue，工作队列，可以提高消息处理速度，避免消息堆积

了解消息预取机制，如何配置

```yaml
# application.yml
spring:
  rabbitmq:
    listener:
      simple:
        prefetch: 1
```

## 实验四：fanout-queue 实验

fanout 删除，广播模式的交换器

## 实验五：direct-queue 实验

需要绑定 key

## 实验六：topic-queue 实验

需要绑定 topic

## 实验七：object-queue 实验

需要自定义 Bean

```java
class SomeConfig{
    @Bean
    public MessageConverter messageConverter(){
        return new Jackson2JsonMessageConverter();
    }
}
```

## 问题

问 1：5672 端口和 15672 端口有什么区别

5672 是消息通信用，15672 是控制台和管理台

问 2：一般来说，是生产者还是消费者去创建 mq 队列呢？

项目中是消费者去创建的

## 参考

[RabbitMQ Tutorials | RabbitMQ](https://www.rabbitmq.com/tutorials)

黑马程序员 - 微服务 - MQ
