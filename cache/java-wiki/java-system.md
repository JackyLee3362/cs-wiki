---
title: Java System Class
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# System Class

## 2.1 概述

> tips：了解内容

查看API文档，我们可以看到API文档中关于System类的定义如下：

![1576049347968](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292244993.png)

System类所在包为java.lang包，因此在使用的时候不需要进行导包。并且System类被final修饰了，因此该类是不能被继承的。

System包含了系统操作的一些常用的方法。比如获取当前时间所对应的毫秒值，再比如终止当前JVM等等。

要想使用System类我们就需要先创建该类的对象，那么创建对象就需要借助于构造方法。因此我们就需要首先查看一下API文档，看看API文档中针对System类有没有提供对应的构造方法。通过API文档来

查看一下System类的成员，如下所示：

![1576049535584](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202508292244994.png)

在API文档中没有体现可用的构造方法，因此我们就不能直接通过new关键字去创建System类的对象。同时我们发现System类中的方法都是静态的，因此在使用的时候我们可以直接通过类名去调用（Nested

Class Summary内部类或者内部接口的描述）。

## 2.2 常见方法

> tips：重点讲解内容

<font color="red" size="3">**常见方法介绍**</font>

我们要学习的System类中的常见方法如下所示：

```java
public static long currentTimeMillis()            // 获取当前时间所对应的毫秒值（当前时间为0时区所对应的时间即就是英国格林尼治天文台旧址所在位置）
public static void exit(int status)                // 终止当前正在运行的Java虚拟机，0表示正常退出，非零表示异常退出
public static native void arraycopy(Object src,int srcPos,Object dest,int destPos,int length); // 进行数值元素copy
```

<font color="red" size="3">**案例演示**</font>

接下来我们就来通过一些案例演示一下这些方法的特点。

<font color="blue" size="2">**案例1**</font>：演示currentTimeMillis方法

```java
public class SystemDemo01 {

    public static void main(String[] args) {

        // 获取当前时间所对应的毫秒值
        long millis = System.currentTimeMillis();

        // 输出结果
        System.out.println("当前时间所对应的毫秒值为：" + millis);

    }

}
```

运行程序进行测试，控制台的输出结果如下：

```java
当前时间所对应的毫秒值为：1576050298343
```

获取到当前时间的毫秒值的意义：我们常常来需要统计某一段代码的执行时间。此时我们就可以在执行这段代码之前获取一次时间，在执行完毕以后再次获取一次系统时间，然后计算两个时间的差值，

这个差值就是这段代码执行完毕以后所需要的时间。如下代码所示：

```java
public class SystemDemo2 {
    public static void main(String[] args) {
        //判断1~100000之间有多少个质数

        long start = System.currentTimeMillis();

        for (int i = 1; i <= 100000; i++) {
            boolean flag = isPrime2(i);
            if (flag) {
                System.out.println(i);
            }
        }
        long end = System.currentTimeMillis();
        //获取程序运行的总时间
        System.out.println(end - start); //方式一：1514 毫秒  方式二：71毫秒
    }

    //以前判断是否为质数的方式
    public static boolean isPrime1(int number) {
        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    //改进之后判断是否为质数的方式（效率高）
    public static boolean isPrime2(int number) {
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
```

<font color="blue" size="2">**案例2**</font>：演示exit方法

```java
public class SystemDemo01 {

    public static void main(String[] args) {

        // 输出
        System.out.println("程序开始执行了.....");

        // 终止JVM
        System.exit(0);

        // 输出
        System.out.println("程序终止了..........");

    }

}
```

运行程序进行测试，控制台输出结果如下：

```java
程序开始执行了.....
```

此时可以看到在控制台只输出了"程序开始了..."，由于JVM终止了，因此输出"程序终止了..."这段代码没有被执行。

<font color="blue" size="2">**案例3**</font>：演示arraycopy方法

方法参数说明：

```java
// src: 	 源数组
// srcPos：  源数值的开始位置
// dest：    目标数组
// destPos： 目标数组开始位置
// length:   要复制的元素个数
public static native void arraycopy(Object src,int srcPos,Object dest,int destPos,int length); 
```

代码如下所示：

```java
public class SystemDemo01 {

    public static void main(String[] args) {

        // 定义源数组
        int[] srcArray = {23, 45, 67, 89, 14, 56};

        // 定义目标数组
        int[] desArray = new int[10];

        // 进行数组元素的copy: 把srcArray数组中从0索引开始的3个元素，从desArray数组中的1索引开始复制过去
        System.arraycopy(srcArray, 0, desArray, 1, 3);

        // 遍历目标数组
        for (int x = 0; x < desArray.length; x++) {
            if (x != desArray.length - 1) {
                System.out.print(desArray[x] + ", ");
            } else {
                System.out.println(desArray[x]);
            }

        }

    }

}
```

运行程序进行测试，控制台输出结果如下所示：

```java
0,23,45,67,0,0,0,0,0,0
```

通过控制台输出结果我们可以看到，数组元素的确进行复制了。

使用这个方法我们也可以完成数组元素的删除操作，如下所示：

```java
public class SystemDemo02 {
    public static void main(String[] args) {
        // 定义一个数组
        int[] srcArray = {23, 45, 67, 89, 14, 56};
        // 删除数组中第3个元素(67)：要删除67这个元素，我们只需要将67后面的其他元素依次向前进行移动即可
        System.arraycopy(srcArray, 3, srcArray, 2, 3);
        // 遍历srcArray数组
        for (int x = 0; x < srcArray.length; x++) {
            if (x != desArray.length - 1) {
                System.out.print(srcArray[x] + ", ");
            } else {
                System.out.println(srcArray[x]);
            }
        }
    }
}
```

运行程序进行测试，控制台的输出结果如下所示：

```java
23,45,89,14,56,56 
```

通过控制台输出结果我们可以看到此时多出了一个56元素，此时我们只需要将最后一个位置设置为0即可。如下所示：

```java
public class SystemDemo02 {
    public static void main(String[] args) {
        // 定义一个数组
        int[] srcArray = {23, 45, 67, 89, 14, 56};
        // 删除数组中第3个元素(67)：要删除67这个元素，我们只需要将67后面的其他元素依次向前进行移动即可
        System.arraycopy(srcArray, 3, srcArray, 2, 3);
        // 将最后一个位置的元素设置为0
        srcArray[srcArray.length - 1] = 0;
        // 遍历srcArray数组
        for (int x = 0; x < srcArray.length; x++) {
            if (x != srcArray.length - 1) {
                System.out.print(srcArray[x] + ", ");
            } else {
                System.out.println(srcArray[x]);
            }
        }
    }
}
```

运行程序进行测试，控制台输出结果如下所示：

```java
23,45,89,14,56,0
```

此时我们可以看到元素"67"已经被删除掉了。67后面的其他元素依次向前进行移动了一位。

**arraycopy方法底层细节：**

1.如果数据源数组和目的地数组都是基本数据类型，那么两者的类型必须保持一致，否则会报错

2.在拷贝的时候需要考虑数组的长度，如果超出范围也会报错

3.如果数据源数组和目的地数组都是引用数据类型，那么子类类型可以赋值给父类类型

代码示例：

```java
public class SystemDemo3 {
    public static void main(String[] args) {
        //public static void arraycopy(数据源数组，起始索引，目的地数组，起始索引，拷贝个数) 数组拷贝
        //细节:
        //1.如果数据源数组和目的地数组都是基本数据类型，那么两者的类型必须保持一致，否则会报错
        //2.在拷贝的时候需要考虑数组的长度，如果超出范围也会报错
        //3.如果数据源数组和目的地数组都是引用数据类型，那么子类类型可以赋值给父类类型

        day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student s1 = new day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student("zhangsan", 23);
        day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student s2 = new day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student("lisi", 24);
        day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student s3 = new day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student("wangwu", 25);

        day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student[] arr1 = {s1, s2, s3};
        day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Person[] arr2 = new day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Person[3];
        //把arr1中对象的地址值赋值给arr2中
        System.arraycopy(arr1, 0, arr2, 0, 3);

        //遍历数组arr2
        for (int i = 0; i < arr2.length; i++) {
            day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student stu = (day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Student) arr2[i];
            System.out.println(stu.getName() + "," + stu.getAge());
        }
    }
}

class Person {
    private String name;
    private int age;

    public Person() {
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /**
     * 获取
     *
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * 设置
     *
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取
     *
     * @return age
     */
    public int getAge() {
        return age;
    }

    /**
     * 设置
     *
     * @param age
     */
    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return "Person{name = " + name + ", age = " + age + "}";
    }
}


class Student extends day15_面向对象进阶_抽象类_接口_内部类.代码.代码.oop_abstract.a01abstractdemo1.Person {

    public Student() {
    }

    public Student(String name, int age) {
        super(name, age);
    }
}
```
