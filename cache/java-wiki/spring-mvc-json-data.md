---
title: Spring MVC JSON Data
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## JSON Data

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
