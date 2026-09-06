---
title: Java Objects Class
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Objects Class

## 5.1 概述

> tips：了解内容

查看API文档，我们可以看到API文档中关于Objects类的定义如下：

![1576058492444](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292244006.png)

Objects类所在包是在java.util包下，因此在使用的时候需要进行导包。并且Objects类是被final修饰的，因此该类不能被继承。

Objects类提供了一些对象常见操作的方法。比如判断对象是否相等，判断对象是否为null等等。

接下来我们来查看一下API文档，看一下Objects类中的成员，如下所示：

![1576058659628](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292244007.png)

我们可以发现Objects类中无无参构造方法，因此我们不能使用new关键字去创建Objects的对象。同时我们可以发现Objects类中所提供的方法都是静态的。因此我们可以通过类名直接去调用这些方法。

## 5.2 常见方法

> tips：重点讲解内容

<font color="red" size="3">**常见方法介绍**</font>

我们要重点学习的Objects类中的常见方法如下所示：

```java
public static String toString(Object o)                    // 获取对象的字符串表现形式
public static boolean equals(Object a,Object b)            // 比较两个对象是否相等
public static boolean isNull(Object obj)                    // 判断对象是否为null
public static boolean nonNull(Object obj)                    // 判断对象是否不为null
```

我们要了解的Objects类中的常见方法如下所示：

```java
public static<T> T requireNonNull(T obj)                    // 检查对象是否不为null,如果为null直接抛出异常；如果不是null返回该对象；
public static<T> T requireNonNullElse(T obj,T defaultObj) // 检查对象是否不为null，如果不为null，返回该对象；如果为null返回defaultObj值
public static<T> T requireNonNullElseGet(T obj,Supplier<?extends T> supplier)    // 检查对象是否不为null，如果不为null，返回该对象；如果															 // 为null,返回由Supplier所提供的值
```

上述方法中的T可以理解为是Object类型。

<font color="red" size="3">**案例演示**</font>

接下来我们就来通过一些案例演示一下Objects类中的这些方法特点。

<font color="blue" size="2">**案例1**</font>：演示重点学习方法

实现步骤：

1. 创建一个学生类，提供两个成员变量（name ， age）；并且提供对应的无参构造方法和有参构造方法以及get/set方法，并且重写toString方法和equals方法
2. 创建一个测试类（ObjectsDemo01）, 在该类中编写测试代码

如下所示：

Student类

```java
public class Student {

    private String name;       // 姓名
    private String age;        // 年龄

    // 其他代码略
    ...

}
```

ObjectsDemo01测试类

```java
import day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student;

public class ObjectsDemo01 {

    public static void main(String[] args) {

        // 调用方法
        method_04();

    }

    // 测试nonNull方法
    public static void method_04() {

        // 创建一个学生对象
        Student s1 = new Student("itheima", "14");

        // 调用Objects类中的nonNull方法
        boolean result = Objects.nonNull(s1);

        // 输出结果
        System.out.println(result);

    }

    // 测试isNull方法
    public static void method_03() {

        // 创建一个学生对象
        Student s1 = new Student("itheima", "14");

        // 调用Objects类中的isNull方法
        boolean result = Objects.isNull(s1);

        // 输出结果
        System.out.println(result);

    }

    // 测试equals方法
    public static void method_02() {

        // 创建两个学生对象
        Student s1 = new Student("itheima", "14");
        Student s2 = new Student("itheima", "14");

        // 调用Objects类中的equals方法，比较两个对象是否相等
        boolean result = Objects.equals(s1, s2);     // 如果Student没有重写Object类中的equals方法，此处比较的还是对象的地址值

        // 输出结果
        System.out.println(result);

    }

    // 测试toString方法
    public static void method_01() {

        // 创建一个学生对象
        Student s1 = new Student("itheima", "14");

        // 调用Objects中的toString方法,获取s1对象的字符串表现形式
        String result = Objects.toString(s1);       // 如果Student没有重写Object类中的toString方法，此处还是返回的对象的地址值

        // 输出结果
        System.out.println(result);

    }

}
```

<font color="blue" size="2">**案例2**</font>：演示需要了解的方法

```java
import day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student;

public class ObjectsDemo02 {

    public static void main(String[] args) {

        // 调用方法
        method_03();

    }

    // 演示requireNonNullElseGet
    public static void method_03() {

        // 创建一个学生对象
        Student s1 = new Student("itheima", "14");

        // 调用Objects对象的requireNonNullElseGet方法,该方法的第二个参数是Supplier类型的，查看源码我们发现Supplier是一个函数式接口,
        // 那么我们就可以为其传递一个Lambda表达式，而在Supplier接口中所定义的方法是无参有返回值的方法，因此具体调用所传入的Lambda表达式如下所示
        Student student = Objects.requireNonNullElseGet(s1, () -> {
            return new Student("itcast", "14");
        });

        // 输出
        System.out.println(student);

    }

    // 演示requireNonNullElse
    public static void method_02() {

        // 创建一个学生对象
        Student s1 = new Student("itheima", "14");

        // 调用Objects对象的requireNonNullElse方法
        Student student = Objects.requireNonNullElse(s1, new Student("itcast", "14"));

        // 输出
        System.out.println(student);

    }

    // 演示requireNonNull
    public static void method_01() {

        // 创建一个学生对象
        Student s1 = new Student("itheima", "14");

        // 调用Objects对象的requireNonNull方法
        Student student = Objects.requireNonNull(s1);

        // 输出
        System.out.println(student);

    }

}
```

注：了解性的方法可以可以作为扩展视频进行下发。
