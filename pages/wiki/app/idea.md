---
title: idea
date: 2026-08-17
update_date:
  - 2025-02-26
  - 2025-11-04
draft: true
author: JackyLee
tags:
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## IDEA 实时模板

### 常用实时模板

- `sout`
- `.var`
- `.field` 快速定义成员变量
- `.format` 快速格式化字符串
- `.notnull/.nn/.null` 快速判断（非）空
- `.not` 快速取反判断
- `.for/.fori/.forr` 快速遍历集合
- `.return` 快速返回值
- `.synchronized` 快速生成同步锁
- `.lambda/.opt` 快速生成 Lambda 以及 Optional 语句

- [Intellij IDEA 智能补全的 10 个姿势，太牛逼了。。 - Java 技术栈 - 博客园](https://www.cnblogs.com/javastack/p/11230120.html)

### 实时模板

> 设置 - 编辑器 - 实时代码

[官方文档](https://www.jetbrains.com/help/idea/using-live-templates.html)

1. 创建自定义模板组
2. 创建自定义模板
3. 定义缩写(比如 auth)，写描述
4. 选择语言(比如 Java)

举例

```java
/*
 * author JackyLee
 * date $DATA$
 **/
```

此时需要设置变量 `$DATA$`，关于变量的设置，可以看[这个链接](https://www.jetbrains.com/help/idea/using-live-templates.html)

此时还有个问题，就是生成的代码 date
下面会有波浪线，看这个[解决方案](https://blog.csdn.net/qq_43719388/article/details/117172841)

## IDEA 调试

## IntelliJ DEBUG 模式启动

### 调试技巧

- [全网最实用的 IDEA Debug 调试技巧（超详细案例） - 知乎](https://zhuanlan.zhihu.com/p/504760944)

### 调试很慢的原因

- [解决 idea java debug 时步进代码需要比较长时间才响应的问题idea 优化代码执行时间-CSDN 博客](https://blog.csdn.net/eddy615/article/details/135024856)

### idea 调试时指定变量

```sh
spring.profiles.active=dev
```

使用配置时，指定 `有效指定配置文件` 中输入 `prod` 或者 `test` 之类的环境

- [Idea配置springboot多环境的切换的五种方案-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1431881)

## IDEA 分析

### 性能分析

IntelliJ Profiler

在 idea-ultimate 中才有的功能

配置 > java 分析器 > IntelliJ Profiler / Async Profiler

- [性能分析简介 | IntelliJ IDEA 文档](https://www.jetbrains.com/zh-cn/help/idea/profiler-intro.html#available-tools)

### 查找未使用的代码

### 数据流分析

鼠标放在变量上 -> 分析 -> 此处流出/流入的数据

### 依赖结构矩阵 DSM Dependence Structure Matrices

- 数字: 表示该 模块/类 被依赖的数量
- 绿色 -(依赖)-> 黄色

### 分析向后依赖关系

展现的就是分析 A 模块被哪些模块依赖了

### 循环依赖关系

### 分析参考

- [恕我直言，IDEA 的这个分析功能，只有不到 10％的程序员知道…… - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/news/581519)
- [创建和打开快照 | IntelliJ IDEA 文档](https://www.jetbrains.com/zh-cn/help/idea/create-a-profiling-report.html#start-session)
- [Java 程序性能分析利器：IDEA Profiler，相见恨晚 - 耗子哥信徒 - 博客园](https://www.cnblogs.com/xushengbin/p/18100300)
- [使用 IntelliJ Profiler 分析性能瓶颈](https://flounder.dev/zh/posts/profile-idea-with-idea/)

### Async Profiler

- [「每日一技」IDEA 集成 Async Profiler - 知乎](https://zhuanlan.zhihu.com/p/81886875)
- [async-profiler/async-profiler: Sampling CPU and HEAP profiler for Java featuring AsyncGetCallTrace + perf_events](https://github.com/async-profiler/async-profiler)

## 参考资料

- [IntelliJ IDEA 常用设置(配置)吐血整理。首次安装必需「建议收藏」-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2062466)
- [IntelliJ IDEA 中文网](https://intellijidea.com.cn/)
- [IntelliJ IDEA 最新变化](https://www.jetbrains.com/zh-cn/idea/whatsnew/?utm_source=product&utm_medium=link&utm_campaign=IU&utm_content=2023.3)
- [你认为IDEA中对你帮助最大的一款插件是什么? - 知乎](https://www.zhihu.com/question/391670848/answer/3231159089)
- [IntelliJ IDEA 中有什么让你相见恨晚的技巧？ - 知乎](https://www.zhihu.com/question/300830746/answer/2836522148)
