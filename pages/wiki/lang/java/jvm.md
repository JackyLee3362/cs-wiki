---
title: JVM
description: Java 虚拟机核心知识
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - jvm
categories:
  - 编程语言
comment: true
---

> JVM（Java Virtual Machine）是 Java 程序的运行时环境，理解 JVM 对排查性能问题和内存泄漏至关重要。

## 内存布局

JVM 运行时数据区主要包括：

- **堆（Heap）**：对象实例和数组，GC 的主要区域
- **虚拟机栈（VM Stack）**：线程私有，存储栈帧（局部变量、操作数栈、动态链接）
- **本地方法栈（Native Method Stack）**：Native 方法执行
- **方法区（Method Area）**：类信息、常量、静态变量（JDK 8 后为元空间 Metaspace）
- **程序计数器（PC Register）**：当前线程执行的字节码行号指示器

## 类加载机制

### 类加载器层次

1. **Bootstrap ClassLoader**：加载 `JAVA_HOME/lib` 下的核心类
2. **Extension ClassLoader**：加载 `ext` 目录下的扩展类
3. **Application ClassLoader**：加载 classpath 下的用户类
4. **自定义 ClassLoader**：继承 `ClassLoader` 实现特定加载逻辑

### 双亲委派模型

类加载器优先将请求委派给父加载器，只有父加载器无法完成时才自己加载。优点：避免核心类被篡改，避免重复加载。

## 垃圾回收（GC）

### 垃圾判断算法

- **引用计数法**：无法解决循环引用问题
- **可达性分析**：从 GC Roots 出发，不可达的对象被回收

### 常用垃圾收集器

| 收集器 | 算法 | 适用场景 | 特点 |
|--------|------|----------|------|
| Serial | 复制/标记-整理 | 单线程、小内存 | 简单高效 |
| Parallel | 复制/标记-整理 | 高吞吐、后台计算 | JDK 8 默认 |
| CMS | 标记-清除 | 低延迟、Web 应用 | 并发收集，碎片多 |
| G1 | 标记-整理 + 复制 | 大堆、平衡吞吐与延迟 | 分区管理，可预测停顿 |
| ZGC | 染色指针 | 超大堆、极低延迟 | JDK 11+，亚毫秒停顿 |

## 常用 JVM 参数

```sh
# 堆内存设置
-Xms512m -Xmx512m

# 元空间设置
-XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m

# GC 日志
-XX:+PrintGCDetails -XX:+PrintGCDateStamps

# 指定 GC 收集器
-XX:+UseG1GC
```

## 参考资料

- [static{}静态代码块与{}普通代码块之间的区别 - Rooker - 博客园](https://www.cnblogs.com/lukelook/p/11183155.html) #todo
- [一看你就懂，超详细java中的ClassLoader详解-CSDN博客](https://blog.csdn.net/briblue/article/details/54973413) #todo
- [自定义一个类加载器 - 五月的仓颉 - 博客园](https://www.cnblogs.com/xrq730/p/4847337.html) #todo
- [GC - Java 垃圾回收器之G1详解 | Java 全栈知识体系](https://pdai.tech/md/java/jvm/java-jvm-gc-g1.html) #todo
- [配置-Dfile.encoding=UTF-8文件编码-CSDN博客](https://blog.csdn.net/m0_56550199/article/details/127761560) #todo
- [Java对象的内存布局 - JaJian - 博客园](https://www.cnblogs.com/jajian/p/13681781.html) #todo
- [class常量池、运行时常量池 和 字符串常量池 的区别-CSDN博客](https://blog.csdn.net/xiaojin21cen/article/details/105300521) #todo
- [Java八股文（2022最新整理） - 知乎](https://zhuanlan.zhihu.com/p/549668569) #todo
