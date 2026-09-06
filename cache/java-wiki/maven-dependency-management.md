---
title: Maven Dependency Management
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Maven Dependency Management

我们现在已经能把项目拆分成一个个独立的模块，当在其他项目中想要使用独立出来的这些模块，只需要在其pom.xml使用<dependency>标签来进行jar包的引入即可。

<dependency>其实就是依赖，关于依赖管理里面都涉及哪些内容，我们就一个个来学习下:

* 依赖传递
* 可选依赖
* 排除依赖

我们先来说说什么是依赖:

依赖指当前项目运行所需的jar，一个项目可以设置多个依赖。

格式为:

```xml
<!--设置当前项目所依赖的所有jar-->
<dependencies>
    <!--设置具体的依赖-->
    <dependency>
        <!--依赖所属群组id-->
        <groupId>org.springframework</groupId>
        <!--依赖所属项目id-->
        <artifactId>spring-webmvc</artifactId>
        <!--依赖版本号-->
        <version>5.2.10.RELEASE</version>
    </dependency>
</dependencies>
```

### 2.1 依赖传递与冲突问题

回到我们刚才的项目案例中，打开Maven的面板，你会发现:

![](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013731.png)

在项目所依赖的这些jar包中，有一个比较大的区别就是**有的依赖前面有箭头`>`,有的依赖前面没有。**

那么这个箭头所代表的含义是什么?

打开前面的箭头，你会发现这个jar包下面还包含有其他的jar包

![1630819455928](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013732.png)

你会发现有两个`maven_03_pojo`的依赖被加载到Dependencies中，那么`maven_04_dao`中的`maven_03_pojo`能不能使用呢?

要想验证非常简单，只需要把`maven_02_ssm`项目中pom.xml关于`maven_03_pojo`的依赖注释或删除掉

![1630819768305](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013733.png)

在Dependencies中移除自己所添加`maven_03_pojo`依赖后，打开BookServiceImpl的类，你会发现Book类依然存在，可以被正常使用

![1630819826163](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013734.png)

这个特性其实就是我们要讲解的==依赖传递==。

依赖是具有传递性的:

![1630853726532](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013735.png)

**说明:**A代表自己的项目；B,C,D,E,F,G代表的是项目所依赖的jar包；D1和D2 E1和E2代表是相同jar包的不同版本

(1) A依赖了B和C,B和C有分别依赖了其他jar包，所以在A项目中就可以使用上面所有jar包，这就是所说的依赖传递

(2) 依赖传递有直接依赖和间接依赖

* 相对于A来说，A直接依赖B和C,间接依赖了D1,E1,G，F,D2和E2
* 相对于B来说，B直接依赖了D1和E1,间接依赖了G
* 直接依赖和间接依赖是一个相对的概念

(3)因为有依赖传递的存在，就会导致jar包在依赖的过程中出现冲突问题，具体什么是冲突?Maven是如何解决冲突的?

这里所说的==依赖冲突==是指项目依赖的某一个jar包，有多个不同的版本，因而造成类包版本冲突。

情况一: 在`maven_02_ssm`的pom.xml中添加两个不同版本的Junit依赖:

```xml
<dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
</dependencies>
```

![1630820964663](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013736.png)

通过对比，会发现一个结论

* 特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的。

情况二: 路径优先：当依赖中出现相同的资源时，层级越深，优先级越低，层级越浅，优先级越高

* A通过B间接依赖到E1
* A通过C间接依赖到E2
* A就会间接依赖到E1和E2,Maven会按照层级来选择，E1是2度，E2是3度，所以最终会选择E1

情况三: 声明优先：当资源在相同层级被依赖时，配置顺序靠前的覆盖配置顺序靠后的

* A通过B间接依赖到D1
* A通过C间接依赖到D2
* D1和D2都是两度，这个时候就不能按照层级来选择，需要按照声明来，谁先声明用谁，也就是说B在C之前声明，这个时候使用的是D1，反之则为D2

但是对应上面这些结果，大家不需要刻意去记它。因为不管Maven怎么选，最终的结果都会在Maven的`Dependencies`面板中展示出来，展示的是哪个版本，也就是说它选择的就是哪个版本，如:

![1630853443920](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013737.png)

如果想更全面的查看Maven中各个坐标的依赖关系，可以点击Maven面板中的`show Dependencies`

![1630853519736](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013738.png)

在这个视图中就能很明显的展示出jar包之间的相互依赖关系。

### 2.2 可选依赖和排除依赖

依赖传递介绍完以后，我们来思考一个问题，

![1630854436435](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013739.png)

* maven_02_ssm 依赖了 maven_04_dao
* maven_04_dao 依赖了 maven_03_pojo
* 因为现在有依赖传递，所以maven_02_ssm能够使用到maven_03_pojo的内容
* 如果说现在不想让maven_02_ssm依赖到maven_03_pojo，有哪些解决方案?

**说明:**在真实使用的过程中，maven_02_ssm中是需要用到maven_03_pojo的，我们这里只是用这个例子描述我们的需求。因为有时候，maven_04_dao出于某些因素的考虑，就是不想让别人使用自己所依赖的maven_03_pojo。

#### 方案一:可选依赖

* 可选依赖指对外隐藏当前所依赖的资源---不透明

在`maven_04_dao`的pom.xml,在引入`maven_03_pojo`的时候，添加`optional`

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_03_pojo</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--可选依赖是隐藏当前工程所依赖的资源，隐藏后对应资源将不具有依赖传递-->
    <optional>true</optional>
</dependency>
```

此时BookServiceImpl就已经报错了,说明由于maven_04_dao将maven_03_pojo设置成可选依赖，导致maven_02_ssm无法引用到maven_03_pojo中的内容，导致Book类找不到。

![1630854923484](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013740.png)

#### 方案二:排除依赖

* 排除依赖指主动断开依赖的资源，被排除的资源无需指定版本---不需要

前面我们已经通过可选依赖实现了阻断maven_03_pojo的依赖传递，对于排除依赖，则指的是已经有依赖的事实，也就是说maven_02_ssm项目中已经通过依赖传递用到了maven_03_pojo，此时我们需要做的是将其进行排除，所以接下来需要修改maven_02_ssm的pom.xml

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_04_dao</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--排除依赖是隐藏当前资源对应的依赖关系-->
    <exclusions>
        <exclusion>
            <groupId>com.itheima</groupId>
            <artifactId>maven_03_pojo</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

这样操作后，BookServiceImpl中的Book类一样也会报错。

当然`exclusions`标签带`s`说明我们是可以依次排除多个依赖到的jar包，比如maven_04_dao中有依赖junit和mybatis,我们也可以一并将其排除。

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_04_dao</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--排除依赖是隐藏当前资源对应的依赖关系-->
    <exclusions>
        <exclusion>
            <groupId>com.itheima</groupId>
            <artifactId>maven_03_pojo</artifactId>
        </exclusion>
        <exclusion>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
        </exclusion>
        <exclusion>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

介绍我这两种方式后，简单来梳理下，就是

* `A依赖B,B依赖C`,`C`通过依赖传递会被`A`使用到，现在要想办法让`A`不去依赖`C`
* 可选依赖是在B上设置`<optional>`,`A`不知道有`C`的存在，
* 排除依赖是在A上设置`<exclusions>`,`A`知道有`C`的存在，主动将其排除掉。
