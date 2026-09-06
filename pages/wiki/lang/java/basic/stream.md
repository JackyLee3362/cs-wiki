---
title: stream
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

# Mosh-Java

## P15-3 -3.5 Lambda Expressions and Functional Interfaces


```java
// Consumer.java
...
	default Consumer<T> andThen(Consumer<? super T> after) {
        Objects.requireNonNull(after);
        return (T t) -> { accept(t); after.accept(t); };
    }
...
```

这里要搞清楚的问题是为什么用 `<? super T>`，首先`T`是一个泛型，可以先不管，我们看返回值有个方法调用`after.accept(t)`，如果不是`T`的父类，假设传进去的是一个`T`的子类，传进去的`t`是`T`类型，不一定能调用子类的`accept`方法，所以一定是一个父类的



看了`Function.java`的源码，感觉参数值要用`<? super T>`，返回值要用`<? extend T>`，为什么呢

- 首先看参数值，参数值是设置的，自己定的，所以是`set`，所以要用`super`
- 返回值，外部是要接受的，接受就要用`extend`

## P16-3 -3.6 Streams

如何将`Stream<List<Integer>>`转化为`Stream<Integer>`？

```java
var stream = Stream.of(List.of(1,2,3), List.of(4,5,6))

stream
    .flatMap(list->list.stream())
    .forEach(item -> System.out.println(item))
```
