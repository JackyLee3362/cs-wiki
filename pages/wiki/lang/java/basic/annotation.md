---
title: annotation
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

# 1. 注解

## 1.4 自定义注解（了解）

自定义注解单独存在是没有什么意义的，一般会跟反射结合起来使用，会用发射去解析注解。

针对于注解，只要掌握会使用别人已经写好的注解即可。

关于注解的解析，一般是在框架的底层已经写好了。

## 1.5 特殊属性（掌握）

value：

  当注解中只有"一个属性",并且属性名是"value",使用注解时,可以省略value属性名

代码示例：

## 1.7 模拟JUnit自带的@Test注解（了解）

代码示例：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MyTest {
}

public class MyTestMethod {

    @MyTest
    public void method1(){
        System.out.println("method1");
    }

    public void method2(){
        System.out.println("method2");
    }

    @MyTest
    public void method3(){
        System.out.println("method3");
    }
}

public class MyTestDemo {
    public static void main(String[] args) throws ClassNotFoundException, IllegalAccessException, InstantiationException, InvocationTargetException {
        //1,获取class对象
        Class clazz = Class.forName("com.itheima.test2.MyTestMethod");

        //获取对象
        Object o = clazz.newInstance();

        //2.获取所有方法
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            //method依次表示类里面的每一个方法
            method.setAccessible(true);
            //判断当前方法有没有MyTest注解
            if(method.isAnnotationPresent(MyTest.class)){
                method.invoke(o);
            }
        }
    }
}
```
