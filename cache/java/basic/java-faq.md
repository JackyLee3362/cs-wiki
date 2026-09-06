---
title: java-faq
description:
date: 2026-04-19
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## @Autowird 与 @Resource的区别

(面试题)

- @Autowired 是spring框架提供的注解，而@Resource是JDK提供的注解
- @Autowired 默认是按照类型注入，而@Resource是按照名称注入

发生冲突可以使用以下注解处理

- @Primary:当存在多个相同类型的Bean注入时，加上@Primary注解，来确定默认的实现。 
- @Qualifier:指定当前要注入的bean对象。 在@Qualifier的value属性中，指定注入的bean的名称。
- @Resource:是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。

## 经常看到一些`Class<?>`，表示什么意思呢？和`Class<T>`的区别是什么？

ChatGPT回答

Class<?> 和 Class<T> 都表示Java中的类类型，但有一些微妙的区别。

Class<?>： 这是一个通配符类型（Wildcard Type）。<?> 表示任意类型，但是你不知道具体是哪种类型。

这样的声明通常用于表示你对类型没有具体的限制，但仍然想要使用类类型的情况。这是一个在Java中广泛使用的模糊类型。

```java
Class<?> clazz = SomeClass.class;
```

在这里，clazz 可以表示任意类型的类，但在具体的使用中，你可能需要进行类型检查或者使用反射来获取更多的信息。

Class<T>： 这是一个泛型类型（Generic Type）。<T> 表示你可以指定具体的类型参数。这样的声明允许你明确地知道你正在处理的是哪一种类型。

```java
Class<String> stringClass = String.class;
```

在这里，stringClass 是表示 String 类的类类型。这种声明方式通常用于在编译时强制类型检查，并允许你在代码中直接使用具体类型的方法和属性。

总的来说，Class<?> 是一个更加灵活、模糊的类型，适用于对类型没有具体要求的情况。而 Class<T> 是一个明确指定了类型参数的泛型类型，适用于在编译时进行类型检查和使用特定类型的情况。

## 参考资料
