---
title: spring-redis
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

# README

## 实验目的

- 学会搭建 redis 环境
- 理解 RedisTemplate 依赖的环境
- 使用 RedisTemplate 相应的 Api 和 Redis 交互

## 环境搭建

在 docker 中启动 redis，使用带端口的这行命令

```sh
# 拉取 redis
docker pull redis

# 官方：最简单的
# docker run --name some-redis -d redis

# 官方：带配置项的
# docker run --name some-redis -d redis redis-server --save 60 1 --loglevel warning

# 带端口的
docker run --name some-redis -p 6379:6379 -d redis

# 交互
# docker exec -it <容器名称或容器ID> bash
```

## 实验1

查看 5 种基本数据结构在Java中的使用，运行并理解

[单元测试代码](src/test/java/com/example/redis/RedisDemoApplicationTests.java)

## 实验2

运行主程序，使用请求

[程序入口](src/main/java/com/example/redis/RedisDemoApplication.java)

## 参考

苍穹外卖 - day05 - 10 在 Spring 中操作 redis
