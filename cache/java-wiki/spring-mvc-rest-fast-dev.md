---
title: Spring MVC REST Fast Dev
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## REST Fast Development

做完了 RESTful 的开发，你会发现==好麻烦==，麻烦在哪?

![1630507339724](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151019999.png)

问题 1：每个方法的@RequestMapping 注解中都定义了访问路径/books，重复性太高。

问题 2：每个方法的@RequestMapping 注解中都要使用 method 属性定义请求方式，重复性太高。

问题 3：每个方法响应 json 都需要加上@ResponseBody 注解，重复性太高。

对于上面所提的这三个问题，具体该如何解决?

```java
@RestController //@Controller + ReponseBody
@RequestMapping("/books")
public class BookController {

	//@RequestMapping(method = RequestMethod.POST)
    @PostMapping
    public String save(@RequestBody Book book){
        System.out.println("book save..." + book);
        return "{'module':'book save'}";
    }

    //@RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        System.out.println("book delete..." + id);
        return "{'module':'book delete'}";
    }

    //@RequestMapping(method = RequestMethod.PUT)
    @PutMapping
    public String update(@RequestBody Book book){
        System.out.println("book update..." + book);
        return "{'module':'book update'}";
    }

    //@RequestMapping(value = "/{id}",method = RequestMethod.GET)
    @GetMapping("/{id}")
    public String getById(@PathVariable Integer id){
        System.out.println("book getById..." + id);
        return "{'module':'book getById'}";
    }

    //@RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public String getAll(){
        System.out.println("book getAll...");
        return "{'module':'book getAll'}";
    }

}
```

对于刚才的问题，我们都有对应的解决方案：

问题 1：每个方法的@RequestMapping 注解中都定义了访问路径/books，重复性太高。

```
将@RequestMapping提到类上面，用来定义所有方法共同的访问路径。
```

问题 2：每个方法的@RequestMapping 注解中都要使用 method 属性定义请求方式，重复性太高。

```
使用@GetMapping  @PostMapping  @PutMapping  @DeleteMapping代替
```

问题 3：每个方法响应 json 都需要加上@ResponseBody 注解，重复性太高。

```
1.将ResponseBody提到类上面，让所有的方法都有@ResponseBody的功能
2.使用@RestController注解替换@Controller与@ResponseBody注解，简化书写
```

#### 知识点 1：@RestController

| 名称 | @RestController                                                                          |
| ---- | ---------------------------------------------------------------------------------------- |
| 类型 | ==类注解==                                                                               |
| 位置 | 基于 SpringMVC 的 RESTful 开发控制器类定义上方                                           |
| 作用 | 设置当前控制器类为 RESTful 风格，<br/>等同于@Controller 与@ResponseBody 两个注解组合功能 |

#### 知识点 2：@GetMapping @PostMapping @PutMapping @DeleteMapping

| 名称     | @GetMapping @PostMapping @PutMapping @DeleteMapping                                                |
| -------- | -------------------------------------------------------------------------------------------------- |
| 类型     | ==方法注解==                                                                                       |
| 位置     | 基于 SpringMVC 的 RESTful 开发控制器方法定义上方                                                   |
| 作用     | 设置当前控制器方法请求访问路径与请求动作，每种对应一个请求动作，<br/>例如@GetMapping 对应 GET 请求 |
| 相关属性 | value（默认）：请求访问路径                                                                        |
