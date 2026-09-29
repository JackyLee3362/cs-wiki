---
title: Design Pattern
date: 2022-04-18 12:17:00
draft: false
author: JackyLee
tags:
  - 概念
  - Design Pattern
categories:
  - 技术概念
comment: true
---

阅读建议:

- Design Patterns
- Element of Reusable Object-Oriented Software -- by GoF

UML: Unified Modeling Language 33min34s

## Behavioral Pattern 行为型模式

### Memento Pattern 备忘录模式

#### 假设有一个编辑器，如何解决 undo 的问题？

```java
public class Editor {
    private String content;
    // ...
    public undo(){
        // TODO
    }
}
```

1. 加一个变量`private String prevContent`，储存上次输入的值 -> 只能存储一次
2. 改为加一个列表`private List<String> prevContentList`，储存一系列值 -> 但是只能储存 content 变量的值
3. 增加一个类`public class EditorStatus` -> 违背了 oop 的 SRP（Single Responsibility Principle）
4. 再增加一个新类`public class History`

![image-20220418143710504](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653865.png)

![image-20220418143822518](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653866.png)

### State Pattern 状态模式

1. 比如 ps 中工具的选择
2. 同样的比如 UIControll

我们需要遵守 Open Closed Principle (Open for extension, Closed for modification)

![image-20220418154047342](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653867.png)

![image-20220418154347251](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653868.png)

![image-20220418154445770](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653869.png)

### Iterator Pattern 迭代器模式

应用：用于生成各种迭代器

下面的例子是手写迭代器的案例

一般来说，迭代器都是内部类实现的

![image-20220418204450202](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653870.png)

### Strategy Pattern 战略模式

首先来看一组案例

> 发现和我最近在做的命令行工具很相似，以及和前面的状态模式很相似

```java
package com.jacky.strategy;

public class ImageStorage {
    private String compressor;
    private String filter;

    public ImageStorage(String compressor, String filter) {
        this.compressor = compressor;
        this.filter = filter;
    }

    public void store(String fileName){
        // JPEG, PNG, ...
        if(compressor == "jpeg")
            System.out.println("compressing using JPEG");
        else if(compressor == "png")
            System.out.println("compressing using PNG");

        // B&W, High Contrast, ...
        if(filter == "b&w")
            System.out.println("filtering using B&W");
        else if(filter == "high-contrast")
            System.out.println("filtering using high-contrast");
    }
}
```

![image-20220418212341251](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653871.png)

### Template Method Pattern 模板模式

可以看到，部分方法已经被抽象类实现，其实这个就是模板模式

![image-20220418221815333](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653872.png)

![image-20220418222016798](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653873.png)

### Command Pattern 命令模式

![image-20220418225959895](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653874.png)

#### 实践：包含撤销命令的设计

![image-20220419002450334](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653875.png)

### Observer Pattern 观察者模式

![image-20220419132151941](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653876.png)

mosh 用图表举例，饼图会随着数据的变化而发生变化，有点像后台管理系统

![image-20220419144018859](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653877.png)

![image-20220419144124641](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653878.png)

同时也可以叫 Publisher - Subscriber 模式

#### 讨论如何传输数据

#### 推送模式

这样做的缺点是，我们预设了数据的类型，如果之后更改数据类型，就会发生错误

![image-20220419152909475](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653879.png)

#### 拉取模式

从数据源拉取数据，但是这样做的缺点是增加了耦合

![image-20220419153001936](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653880.png)

### Mediator Pattern 中介模式

![image-20220420100016654](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653881.png)

![image-20220420101229406](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653882.png)

上面的太过复杂

![image-20220420101216460](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653883.png)

![image-20220420101606406](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653884.png)

### Chain of Responsibility Pattern 责任链模式

比如我们要搭建一个 web 服务器

![image-20220420144440145](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653885.png)

### Visitor Pattern 访问者模式

应用：比如 vscode 中标签高亮

![image-20220420155256645](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653886.png)

![image-20220420155709449](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653887.png)

![image-20220420155738792](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653888.png)

## Structural 结构型模式

### Composite Pattern 组合模式

PowerPoint 中图形的组合

![image-20220421121547414](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653889.png)

![image-20220421121810359](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653890.png)

### Adaptor Pattern 适配器模式

![image-20220421123706091](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653891.png)

### Decorator Pattern 装饰器模式

![image-20220421125520980](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653892.png)

![image-20220421125609991](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653893.png)

### Façade Pattern 外观设计模式

![image-20220421133730562](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653894.png)

### Flyweight Pattern 享元模式、飞锤模式

![image-20220421142431096](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653895.png)

### Bridge Pattern 桥接模式

![image-20220421145159140](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653896.png)

### Proxy Model 代理模式

主要是解决懒加载的问题

![image-20220421150239031](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653897.png)

![image-20220421152017799](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653898.png)

![image-20220421152146956](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653899.png)

![image-20220421152206991](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202503141653900.png)

## Creational 创新型模式

### Factory Method 工厂方法

### Builder 生成器

### Prototype 原型

### Singleton 单例

### Abstract Factory 抽象工厂

## 参考资料

- [常用设计模式有哪些？](https://refactoringguru.cn/design-patterns/)
- [设计模式在实际开发中用的多吗？ - 知乎](https://www.zhihu.com/question/29477933/answer/2275614302)
