---
title: Spring Concepts
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring Concepts

#### 2.1.1 Spring 家族

- [Spring | Home](https://spring.io/)

  - web 开发、微服务、分布式系统
  - Spring 全家桶: 查看官网 project 查看所有技术

    - 关注 `Spring Framework`、`SpringBoot`和`SpringCloud`:
    - Spring Framework:Spring 框架，是 Spring 中最早最核心的技术，也是所有其他技术的基础。
    - SpringBoot:Spring 是来简化开发，而 SpringBoot 是来帮助 Spring 在简化的基础上能更快速进行开发。
    - SpringCloud:这个是用来做分布式之微服务架构的相关开发。

    - 其他的比如也比较流行，如 SpringData,SpringSecurity 等

#### 2.1.2 了解 Spring 发展史

接下来我们介绍下 Spring Framework 这个技术是如何来的呢?

![image-20210729171926576](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020916.png)

Spring 发展史

- IBM(IT 公司-国际商业机器公司)在 1997 年提出了 EJB 思想,早期的 JAVAEE 开发大都基于该思想。
- Rod Johnson(Java 和 J2EE 开发领域的专家)在 2002 年出版的`Expert One-on-One J2EE Design and Development`,书中有阐述在开发中使用 EJB 该如何做。
- Rod Johnson 在 2004 年出版的`Expert One-on-One J2EE Development without EJB`,书中提出了比 EJB 思想更高效的实现方案，并且在同年将方案进行了具体的落地实现，这个实现就是 Spring1.0。
- 随着时间推移，版本不断更新维护，目前最新的是 Spring5
  - Spring1.0 是纯配置文件开发
  - Spring2.0 为了简化开发引入了注解开发，此时是配置文件加注解的开发方式
  - Spring3.0 已经可以进行纯注解开发，使开发效率大幅提升，我们的课程会以注解开发为主
  - Spring4.0 根据 JDK 的版本升级对个别 API 进行了调整
  - Spring5.0 已经全面支持 JDK8，现在 Spring 最新的是 5 系列所以建议大家把 JDK 安装成 1.8 版

### 2.2 Spring 系统架构

前面我们说 spring 指的是 Spring Framework,那么它其中都包含哪些内容以及我们该如何学习这个框架?

针对这些问题，我们将从`系统架构图`和`课程学习路线`来进行说明:

#### 2.2.1 系统架构图

![image-20210729172153796](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020917.png)

Spring Framework 的 5 版本目前没有最新的架构图，而最新的是 4 版本，所以接下来主要研究的是 4 的架构图

![1629720945720](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020918.png)

1. 核心层
   - Core Container:核心容器，这个模块是 Spring 最核心的模块，其他的都需要依赖该模块
2. AOP 层
   - AOP:面向切面编程，它依赖核心层容器，目的是==在不改变原有代码的前提下对其进行功能增强==
   - Aspects:AOP 是思想,Aspects 是对 AOP 思想的具体实现
3. 数据层
   - Data Access:数据访问，Spring 全家桶中有对数据访问的具体实现技术
   - Data Integration:数据集成，Spring 支持整合其他的数据层解决方案，比如 Mybatis
   - Transactions:事务，Spring 中事务管理是 Spring AOP 的一个具体实现，也是后期学习的重点内容
4. Web 层
   - 这一层的内容将在 SpringMVC 框架具体学习
5. Test 层
   - Spring 主要整合了 Junit 来完成单元测试和集成测试

#### 2.2.2 学习路线

介绍完 Spring 的体系结构后，从中我们可以得出对于 Spring 的学习主要包含四部分内容，分别是:

- IOC / DI
- AOP
- AOP 的具体应用,事务管理
- IOC/DI 的具体应用,整合 Mybatis

## 2.3 Spring 核心概念

### 2.3.2 IOC、IOC 容器、Bean、DI

1. ==IOC（Inversion of Control）控制反转==

(1)什么是控制反转呢？

- 使用对象时，由主动 new 产生对象转换为由==外部==提供对象，此过程中对象创建控制权由程序转移到外部，此思想称为控制反转。
  - 业务层要用数据层的类对象，以前是自己`new`的
  - 现在自己不 new 了，交给`别人[外部]`来创建对象
  - `别人[外部]`就反转控制了数据层对象的创建权
  - 这种思想就是控制反转
  - 别人[外部]指定是什么呢?继续往下学

(2)Spring 和 IOC 之间的关系是什么呢?

- Spring 技术对 IOC 思想进行了实现
- Spring 提供了一个容器，称为==IOC 容器==，用来充当 IOC 思想中的"外部"
- IOC 思想中的`别人[外部]`指的就是 Spring 的 IOC 容器

(3)IOC 容器的作用以及内部存放的是什么?

- IOC 容器负责对象的创建、初始化等一系列工作，其中包含了数据层和业务层的类对象
- 被创建或被管理的对象在 IOC 容器中统称为==Bean==
- IOC 容器中放的就是一个个的 Bean 对象

(4)当 IOC 容器中创建好 service 和 dao 对象后，程序能正确执行么?

- 不行，因为 service 运行需要依赖 dao 对象
- IOC 容器中虽然有 service 和 dao 对象
- 但是 service 对象和 dao 对象没有任何关系
- 需要把 dao 对象交给 service,也就是说要绑定 service 和 dao 对象之间的关系

像这种在容器中建立对象与对象之间的绑定关系就要用到 DI:

2. ==DI（Dependency Injection）依赖注入==

![1629735078619](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151020922.png)

(1)什么是依赖注入呢?

- 在容器中建立 bean 与 bean 之间的依赖关系的整个过程，称为依赖注入
  - 业务层要用数据层的类对象，以前是自己`new`的
  - 现在自己不 new 了，靠`别人[外部其实指的就是IOC容器]`来给注入进来
  - 这种思想就是依赖注入

(2)IOC 容器中哪些 bean 之间要建立依赖关系呢?

- 这个需要程序员根据业务需求提前建立好关系，如业务层需要依赖数据层，service 就要和 dao 建立依赖关系

介绍完 Spring 的 IOC 和 DI 的概念后，我们会发现这两个概念的最终目标就是:==充分解耦==，具体实现靠:

- 使用 IOC 容器管理 bean (IOC)
- 在 IOC 容器内将有依赖关系的 bean 进行关系绑定 (DI)
- 最终结果为:使用对象时不仅可以直接从 IOC 容器中获取，并且获取到的 bean 已经绑定了所有的依赖关系.

#### 2.3.3 核心概念小结

1. 什么是 IOC/DI 思想?

- IOC:控制反转，控制反转的是对象的创建权
- DI:依赖注入，绑定对象与对象之间的依赖关系

2. 什么是 IOC 容器?

Spring 创建了一个容器用来存放所创建的对象，这个容器就叫 IOC 容器

3. 什么是 Bean?

容器中所存放的一个个对象就叫 Bean 或 Bean 对象

## 5 DI 相关内容

前面我们已经完成了 bean 相关操作的讲解，接下来就进入第二个大的模块`DI依赖注入`，首先来介绍下 Spring 中有哪些注入方式?

我们先来思考

- 向一个类中传递数据的方式有几种?
  - 普通方法(set 方法)
  - 构造方法
- 依赖注入描述了在容器中建立 bean 与 bean 之间的依赖关系的过程，如果 bean 运行需要的是数字或字符串呢?
  - 引用类型
  - 简单类型(基本数据类型与 String)

Spring 就是基于上面这些知识点，为我们提供了两种注入方式，分别是:

- setter 注入
  - 简单类型
  - ==引用类型==
- 构造器注入
  - 简单类型
  - 引用类型

#### 5.1.3 注入简单数据类型

### 5.2 构造器注入

介绍完 setter 注入和构造器参数两种注入方式，具体我们该如何选择呢?

1. 强制依赖使用构造器进行，使用 setter 注入有概率不进行注入导致 null 对象出现
   - 强制依赖指对象在创建的过程中必须要注入指定的参数
2. 可选依赖使用 setter 注入进行，灵活性强
   - 可选依赖指对象在创建过程中注入的参数可有可无
3. Spring 框架倡导使用构造器，第三方框架内部大多数采用构造器注入的形式进行数据初始化，相对严谨
4. 如果有必要可以两者同时使用，使用构造器注入完成强制依赖的注入，使用 setter 注入完成可选依赖的注入
5. 实际开发过程中还要根据实际情况分析，如果受控对象没有提供 setter 方法就必须使用构造器注入
6. **==自己开发的模块推荐使用 setter 注入==**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
            http://www.springframework.org/schema/beans
            http://www.springframework.org/schema/beans/spring-beans.xsd
            http://www.springframework.org/schema/context
            http://www.springframework.org/schema/context/spring-context.xsd">
    <!--方式一 -->
    <context:property-placeholder location="jdbc.properties,jdbc2.properties" system-properties-mode="NEVER"/>
    <!--方式二-->
    <context:property-placeholder location="*.properties" system-properties-mode="NEVER"/>
    <!--方式三 -->
    <context:property-placeholder location="classpath:*.properties" system-properties-mode="NEVER"/>
    <!--方式四-->
    <context:property-placeholder location="classpath*:*.properties" system-properties-mode="NEVER"/>
</beans>
```

**说明:**

- 方式一:可以实现，如果配置文件多的话，每个都需要配置
- 方式二:`*.properties`代表所有以 properties 结尾的文件都会被加载，可以解决方式一的问题，但是不标准
- 方式三:标准的写法，`classpath:`代表的是从根路径下开始查找，但是只能查询当前项目的根路径
- 方式四:不仅可以加载当前项目还可以加载当前项目所依赖的所有项目的根路径下的 properties 配置文件

#### 1.2.3 加载 properties 文件小结

本节主要讲解的是 properties 配置文件的加载，需要掌握的内容有:

- 如何开启`context`命名空间

  ![1629980280952](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022166.png)

- 如何加载 properties 配置文件

  ```xml
  <context:property-placeholder location="" system-properties-mode="NEVER"/>
  ```

- 如何在 applicationContext.xml 引入 properties 配置文件中的值

  ```
  ${key}
  ```
