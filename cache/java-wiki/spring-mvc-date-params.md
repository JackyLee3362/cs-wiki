---
title: Spring MVC Date Params
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Date Params

前面我们处理过简单数据类型、POJO 数据类型、数组和集合数据类型以及 JSON 数据类型，接下来我们还得处理一种开发中比较常见的一种数据类型，`日期类型`

日期类型比较特殊，因为对于日期的格式有 N 多中输入方式，比如:

- 2088-08-18
- 2088/08/18
- 08/18/2088
- ......

针对这么多日期格式，SpringMVC 该如何接收，它能很好的处理日期类型数据么?

#### 步骤 1:编写方法接收日期数据

在 UserController 类中添加方法，把参数设置为日期类型

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date)
    System.out.println("参数传递 date ==> "+date);
    return "{'module':'data param'}";
}
```

#### 步骤 2:启动 Tomcat 服务器

查看控制台是否报错，如果有错误，先解决错误。

#### 步骤 3:使用 PostMan 发送请求

使用 PostMan 发送 GET 请求，并设置 date 参数

`http://localhost/dataParam?date=2088/08/08`

![1630494320917](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019983.png)

#### 步骤 4:查看控制台

![1630494443738](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019984.png)

通过打印，我们发现 SpringMVC 可以接收日期数据类型，并将其打印在控制台。

这个时候，我们就想如果把日期参数的格式改成其他的，SpringMVC 还能处理么?

#### 步骤 5:更换日期格式

为了能更好的看到程序运行的结果，我们在方法中多添加一个日期参数

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date,Date date1)
    System.out.println("参数传递 date ==> "+date);
    return "{'module':'data param'}";
}
```

使用 PostMan 发送请求，携带两个不同的日期格式，

`http://localhost/dataParam?date=2088/08/08&date1=2088-08-08`

![1630494565970](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019985.png)

发送请求和数据后，页面会报 400，控制台会报出一个错误

Resolved [org.springframework.web.method.annotation.==MethodArgumentTypeMismatchException==: Failed to convert value of type 'java.lang.String' to required type 'java.util.Date'; nested exception is org.springframework.core.convert.==ConversionFailedException==: Failed to convert from type [java.lang.String] to type [java.util.Date] for value '2088-08-08'; nested exception is java.lang.IllegalArgumentException]

从错误信息可以看出，错误的原因是在将`2088-08-08`转换成日期类型的时候失败了，原因是 SpringMVC 默认支持的字符串转日期的格式为`yyyy/MM/dd`,而我们现在传递的不符合其默认格式，SpringMVC 就无法进行格式转换，所以报错。

解决方案也比较简单，需要使用`@DateTimeFormat`

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date,
                        @DateTimeFormat(pattern="yyyy-MM-dd") Date date1)
    System.out.println("参数传递 date ==> "+date);
	System.out.println("参数传递 date1(yyyy-MM-dd) ==> "+date1);
    return "{'module':'data param'}";
}
```

重新启动服务器，重新发送请求测试，SpringMVC 就可以正确的进行日期转换了

![1630495221038](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019986.png)

#### 步骤 6:携带时间的日期

接下来我们再来发送一个携带时间的日期，看下 SpringMVC 该如何处理?

先修改 UserController 类，添加第三个参数

```java
@RequestMapping("/dataParam")
@ResponseBody
public String dataParam(Date date,
                        @DateTimeFormat(pattern="yyyy-MM-dd") Date date1,
                        @DateTimeFormat(pattern="yyyy/MM/dd HH:mm:ss") Date date2)
    System.out.println("参数传递 date ==> "+date);
	System.out.println("参数传递 date1(yyyy-MM-dd) ==> "+date1);
	System.out.println("参数传递 date2(yyyy/MM/dd HH:mm:ss) ==> "+date2);
    return "{'module':'data param'}";
}
```

使用 PostMan 发送请求，携带两个不同的日期格式，

`http://localhost/dataParam?date=2088/08/08&date1=2088-08-08&date2=2088/08/08 8:08:08`

![1630495347289](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019987.png)

重新启动服务器，重新发送请求测试，SpringMVC 就可以将日期时间的数据进行转换

![1630495507353](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019988.png)

#### 知识点 1：@DateTimeFormat

| 名称     | @DateTimeFormat                 |
| -------- | ------------------------------- |
| 类型     | ==形参注解==                    |
| 位置     | SpringMVC 控制器方法形参前面    |
| 作用     | 设定日期时间型数据格式          |
| 相关属性 | pattern：指定日期时间格式字符串 |

#### 内部实现原理

讲解内部原理之前，我们需要先思考个问题:

- 前端传递字符串，后端使用日期 Date 接收
- 前端传递 JSON 数据，后端使用对象接收
- 前端传递字符串，后端使用 Integer 接收
- 后台需要的数据类型有很多中
- 在数据的传递过程中存在很多类型的转换

问:谁来做这个类型转换?

答:SpringMVC

问:SpringMVC 是如何实现类型转换的?

答:SpringMVC 中提供了很多类型转换接口和实现类

在框架中，有一些类型转换接口，其中有:

- (1) Converter 接口

```java
/**
*	S: the source type
*	T: the target type
*/
public interface Converter<S, T> {
    @Nullable
    //该方法就是将从页面上接收的数据(S)转换成我们想要的数据类型(T)返回
    T convert(S source);
}
```

**注意:Converter 所属的包为`org.springframework.core.convert.converter`**

Converter 接口的实现类

![1630496385398](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019989.png)

框架中有提供很多对应 Converter 接口的实现类，用来实现不同数据类型之间的转换,如:

请求参数年龄数据（String→Integer）

日期格式转换（String → Date）

- (2) HttpMessageConverter 接口

该接口是实现对象与 JSON 之间的转换工作

**==注意:SpringMVC 的配置类把@EnableWebMvc 当做标配配置上去，不要省略==**
