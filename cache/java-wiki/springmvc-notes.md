---
title: Spring MVC Notes
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring MVC Notes

### p44 SpringMVC 简介

#### 00:37 SpringMVC 入门案例

![p44-00-37-SpringMVC入门案例](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008942.png)

#### 11:59 ServletContainerInitConfig 类中的配置

![image-20230522134715587](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008943.png)

#### 18:30 ServletContainerInitConfig 类中的配置

![image-20230522142052418](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008944.png)

### p45 入门案例工作流程

#### 2:49 Spring 和 SpringMVC 的 Config 分开加载

![image-20230522142819558](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008945.png)

#### 4:17 SpringMVC 工作流程

![image-20230522142513948](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008946.png)

### P46 bean 加载控制

#### 9:30 第二种过滤方法

注释掉的是第一种

![image-20230522145042184](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008947.png)

#### 17:21 ServletContainerInitConf 类的配置

![image-20230522145509625](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008948.png)

### p49 get 请求与 post 请求发送普通参数

#### 05:32 GET 请求

![image-20230522151043251](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008949.png)

#### 5:46 POST 请求参数

![image-20230522151436641](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008950.png)

#### 8:41 过滤器

![image-20230522151907026](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008951.png)

### p50 5 种参数类型传递

#### 2:24 形参名和 Get 请求过来的名字不一样时怎么处理？

加`@RequestParam('name')`注解

![image-20230522152554136](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008952.png)

### p51 json 数据传递

- 第一步：`pom.xml`导入`jackyson-databind`坐标
- 第二步：`SpringMvcConfif`加上`@EnableWebMvc`

### p52 日期型参数传递

#### 04:04 日期格式的传递

![image-20230524131118353](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008953.png)

#### 05:31 日期格式的传递

#### ![image-20230524131214708](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008954.png)7:47 类型转换器

![image-20230524131518444](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008955.png)

### P53 响应

如果不加`@ResponseBody`，返回的就是页面

#### 07：20

![image-20230524132707659](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008956.png)

#### 09：04

转换接口

![image-20230524132903475](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008957.png)

### P54 REST 风格简介

#### 06:28 REST 风格

![image-20230524133336262](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008958.png)

### p55 RESTful 入门案例

#### 07:56 请求方法

![image-20230524140010247](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008959.png)

#### 08:31 路径变量

![image-20230524140042380](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008960.png)

#### 09：28 三个参数的区别

![image-20230524140141097](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008961.png)

### p58 基于 RESTful 页面数据交互

#### 6：30 静态资源的访问，设置 MVC 不处理

![image-20230524143325418](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008962.png)

### p63 表现层与前端数据传输

#### 12：52

![image-20230525151510510](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008963.png)

### p64 异常处理器

#### 2:10 异常处理器

![image-20230525151650619](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008964.png)

#### 8：00 spring 自带的异常处理器

![image-20230525152515965](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008965.png)

### p65 项目异常处理

#### 3:12

![image-20230525154718629](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008966.png)

#### 04:07

![image-20230525154755929](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008967.png)

#### 18:47 异常处理步骤

![image-20230525155600344](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008968.png)

### p66 前后台协议联调 未看

### p67 前后台协议联调 未看

### p68 前后台协议联调 未看

### p69 前后台协议联调 未看

### p70 前后台协议联调 未看

### p71 拦截器简介

#### 3:58 其实就是拦截器

![image-20230525181514426](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008969.png)

### p72 拦截器入门案例

#### 13:34

![image-20230525184845407](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008970.png)

#### 16:03

![image-20230525185122775](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008971.png)

### p74 拦截器-拦截器链配置

#### 05:41

![image-20230525185855055](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151008972.png)
