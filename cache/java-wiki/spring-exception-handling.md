---
title: Spring Exception Handling
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring Exception Handling

### @RestControllerAdvice 和 @ExceptionHandler

```java
@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(Exception.class)
    public Result handlerException(Exception e){
        e.printStackTrace();
        return Result.error("操作错误，请练习管理员");
    }
}
```
