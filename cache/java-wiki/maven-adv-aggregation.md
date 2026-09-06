---
title: Maven Adv Aggregation
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Aggregation

分模块设计与开发之后啊，我们的项目被拆分为多个模块，而模块之间的关系，可能错综复杂。 那就比如我们当前的案例项目，结构如下（相对还是比较简单的）：

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956244.png" alt="image-20230113142520463" style="zoom:67%;" />

此时，tlias-web-management 模块的父工程是 tlias-parent，该模块又依赖了 tlias-pojo、tlias-utils 模块。 那此时，我们要想将 tlias-web-management 模块打包，是比较繁琐的。因为在进行项目打包时，maven 会从本地仓库中来查找 tlias-parent 父工程，以及它所依赖的模块 tlias-pojo、tlias-utils，而本地仓库目前是没有这几个依赖的。

所以，我们再打包 tlias-web-management 模块前，需要将 tlias-parent、tlias-pojo、tlias-utils 分别执行 install 生命周期安装到 maven 的本地仓库，然后再针对于 tlias-web-management 模块执行 package 进行打包操作。

那此时，大家试想一下，如果开发一个大型项目，拆分的模块很多，模块之间的依赖关系错综复杂，那此时要进行项目的打包、安装操作，是非常繁琐的。 而我们接下来，要讲解的 maven 的聚合就是来解决这个问题的，通过 maven 的聚合就可以轻松实现项目的一键构建（清理、编译、测试、打包、安装等）。

#### 2.2.1 介绍

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956245.png" alt="image-20230113151533948" style="zoom:80%;" />

- **聚合：**将多个模块组织成一个整体，同时进行项目的构建。
- **聚合工程：**一个不具有业务功能的“空”工程（有且仅有一个 pom 文件） 【PS：一般来说，继承关系中的父工程与聚合关系中的聚合工程是同一个】
- **作用：**快速构建项目（无需根据依赖关系手动构建，直接在聚合工程上构建即可）

#### 2.2.2 实现

在 maven 中，我们可以在聚合工程中通过 `<moudules>` 设置当前聚合工程所包含的子模块的名称。我们可以在 tlias-parent 中，添加如下配置，来指定当前聚合工程，需要聚合的模块：

```java
<!--聚合其他模块-->
<modules>
    <module>../tlias-pojo</module>
    <module>../tlias-utils</module>
    <module>../tlias-web-management</module>
</modules>
```

那此时，我们要进行编译、打包、安装操作，就无需在每一个模块上操作了。只需要在聚合工程上，统一进行操作就可以了。

**测试：**执行在聚合工程 tlias-parent 中执行 package 打包指令

![image-20230113153347978](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956246.png)

那 tlias-parent 中所聚合的其他模块全部都会执行 package 指令，这就是通过聚合实现项目的一键构建（一键清理 clean、一键编译 compile、一键测试 test、一键打包 package、一键安装 install 等）。
