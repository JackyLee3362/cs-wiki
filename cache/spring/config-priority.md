---
title: config-priority
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

# 配置优先级

> 优先级： 命令行参数 >  系统属性参数 > properties参数 > yml参数 > yaml参数

结论：（从高到低）
1. 命令行参数（--xxx=xxx）
2. java系统属性（-Dxxx=xxx） 
3. application.properties 
4. application.yml 
5. application.yaml（忽略）


## 实验1：配置文件优先级


```
// application.properties
server.port=8081

//  application.yml
server:
  port: 8082

// application.yaml
server:
  port: 8082
```

注意事项：虽然springboot支持多种格式配置文件，但是在项目开发时，推荐统一使用一种格式的配置。（yml是主流）

## 实验2：命令行优先级

在SpringBoot项目当中除了以上3种配置文件外，SpringBoot为了增强程序的扩展性，除了支持配置文件的配置方式以外，还支持另外两种常见的配置方式：

1 Java系统属性配置 （格式： -Dkey=value）

```shell
-Dserver.port=9000
```

2 命令行参数 （格式：--key=value）

```shell
--server.port=10010
```

那在idea当中运行程序时，如何来指定Java系统属性和命令行参数呢？

编辑启动程序的配置信息
- 
- VM Option 指定java系统属性配置 `-Dserver.port=9000`
- Program arguments 指定命令行参数 `--server.port=10010`

如果项目已经打包上线了，这个时候又如何来设置Java系统属性和命令行参数呢？

```shell
java -Dserver.port=9000 -jar XXXXX.jar --server.port=10010
```

下面我们来演示下打包程序运行时指定Java系统属性和命令行参数：

1. 执行maven打包指令package，把项目打成jar文件
2. 使用命令：java -jar 方式运行jar文件程序

项目打包：

运行jar程序：

同时设置Java系统属性和命令行参数

```shell
java -Dserver.port=9000 -jar springboot-web-config-0.0.1-SNAPSHOT.jar --server.port=10010
```

仅设置Java系统属性

```shell
java -Dserver.port=9000 -jar springboot-web-config-0.0.1-SNAPSHOT.jar --server.port=10010
```
