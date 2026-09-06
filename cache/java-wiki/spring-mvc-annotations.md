---
title: Spring MVC Annotations
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring MVC Annotations

### @DateTimeFormat

配合日期对象使用

- [DateTimeFormat (Spring Framework 6.2.4 API)](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/format/annotation/DateTimeFormat.html)

```java
@Contrller
class Controller{
    @GetMapping("/hello")
    public String hello(
    @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate begin,
    @DateTimeFormat(pattern="yyyy-MM-dd") LocalDate end){
        // 如果要查看具体 可以查看类 DateTimeFormatter
        return "hello, world";
    }
}
```

### @PathVariable

```java
@Controller
class Controller{
    @GetMapping("/hello/{id}")
    public String hello1(@PathVariable int id) {
        // 请求的路径类似 localhost:8080/hello/1
        return "hello, world1";
    }
    @GetMapping("hello/{ids}")
    public String hello2(@PathVariable int[] ids) {
        // 请求的路径类似 localhost:8080/hello/1,2,3
        // 这里也可以用【集合】来接收 List<Integer> ids
        return "hello, world2";
    }
}

```

### @RequestBody

接收 json 格式的参数

```java
@Controller
class Controller {
    @PostMapping("/hello")
    public String hello(@RequestBody Emp emp) {
        // 必须用对象来接收
        // 之前debug，参数是这样写的 (@RequestBody String name, int age, ...)
        // 会导致后面的参数全为null，然后name变成一整个json字符串
        return "hello";
    }
}
```

### @RequestParam

query 参数

```java
@Controller
class Controller {
    @GetMapping("/hello")
    public String page(
            @RequestParam(value = "pageNum", required = true, defaultValue = "1") int page,
            @RequestParam(value = "pageSize", required = true, defaultValue = "10") int pageSize) {
        // 列出来了@RequestParam的三个属性
        // value：表示在url的query-string部分的参数名，不写默认和后面接收的变量名一致
        return "hello";
    }
}
```

### @RequestPart
