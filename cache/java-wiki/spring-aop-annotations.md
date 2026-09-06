---
title: Spring AOP Annotations
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring AOP Annotations

### 通知

- @Around : 环绕通知，有参数`ProceedingJointPoint p`，要调用 `p.proceed()`继续执行，返回值要是`Object`
- @Before : 前置通知
- @After : 后置通知，无论有异常都会被执行
- @AfterReturning : 返回后通知，有异常不会被执行
- @AfterThrowing : 异常后通知，有异常后会被执行

### @PointCut

```java
public class Demo{
    // 抽取公共的切入点表达式
    // private: 只能在当前类中用
    // public : 其他外部切面类也可以使用
    @Pointcut("execution(* com.example.service.*.*(..))")
    private void pt() {
    }

    @Around("pt()")
    public Object Timer(ProceedingJoinPoint p)
            throws Throwable{
        // 执行前逻辑 ...
        Object o = p.proceed();
        // 执行后逻辑 ...
        return o;
    }
}
```

### 执行顺序

执行顺序和切面类的字典序有关，对于 Before 来说，字典类靠前的先执行，After 相反

@Order 注解在类上

```java
@Order(4) // 对于@Before越小越先执行，@After相反
class Demo{
    @Around("pt()")
    public Object Timer(ProceedingJoinPoint p)
            throws Throwable{
        // 执行前逻辑 ...
        Object o = p.proceed();
        // 执行后逻辑 ...
        return o;
    }
}
```
