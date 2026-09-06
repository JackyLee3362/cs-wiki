---
title: Maven Properties
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Maven Properties

在这一章节内容中，我们将学习两个内容，分别是

* 属性
* 版本管理

属性中会继续解决分模块开发项目存在的问题，版本管理主要是认识下当前主流的版本定义方式。

### 4.1 属性

#### 4.1.1 问题分析

讲解内容之前，我们还是先来分析问题:

前面我们已经在父工程中的dependencyManagement标签中对项目中所使用的jar包版本进行了统一的管理，但是如果在标签中有如下的内容:

![1630947403475](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013750.png)

你会发现，如果我们现在想更新Spring的版本，你会发现我们依然需要更新多个jar包的版本，这样的话还是有可能出现漏改导致程序出问题，而且改起来也是比较麻烦。

问题清楚后，我们需要解决的话，就可以参考咱们java基础所学习的变量，声明一个变量，在其他地方使用该变量，当变量的值发生变化后，所有使用变量的地方，就会跟着修改，即:

![1630947749661](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013751.png)

#### 4.1.2 解决步骤

##### 步骤1:父工程中定义属性

```xml
<properties>
    <spring.version>5.2.10.RELEASE</spring.version>
    <junit.version>4.12</junit.version>
    <mybatis-spring.version>1.3.0</mybatis-spring.version>
</properties>
```

##### 步骤2:修改依赖的version

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>${spring.version}</version>
</dependency>
```

此时，我们只需要更新父工程中properties标签中所维护的jar包版本，所有子项目中的版本也就跟着更新。当然除了将spring相关版本进行维护，我们可以将其他的jar包版本也进行抽取，这样就可以对项目中所有jar包的版本进行统一维护，如:

```xml
<!--定义属性-->
<properties>
    <spring.version>5.2.10.RELEASE</spring.version>
    <junit.version>4.12</junit.version>
    <mybatis-spring.version>1.3.0</mybatis-spring.version>
</properties>
```

### 4.2 配置文件加载属性

Maven中的属性我们已经介绍过了，现在也已经能够通过Maven来集中管理Maven中依赖jar包的版本。但是又有新的需求，就是想让Maven对于属性的管理范围能更大些，比如我们之前项目中的`jdbc.properties`，这个配置文件中的属性，能不能也来让Maven进行管理呢?

答案是肯定的，具体的实现步骤为:

##### 步骤1:父工程定义属性

```xml
<properties>
   <jdbc.url>jdbc:mysql://127.1.1.1:3306/ssm_db</jdbc.url>
</properties>
```

##### 步骤2:jdbc.properties文件中引用属性

在jdbc.properties，将jdbc.url的值直接获取Maven配置的属性

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=${jdbc.url}
jdbc.username=root
jdbc.password=root
```

##### 步骤3:设置maven过滤文件范围

Maven在默认情况下是从当前项目的`src\main\resources`下读取文件进行打包。现在我们需要打包的资源文件是在maven_02_ssm下,需要我们通过配置来指定下具体的资源目录。

```xml
<build>
    <resources>
        <!--设置资源目录-->
        <resource>
            <directory>../maven_02_ssm/src/main/resources</directory>
            <!--设置能够解析${}，默认是false -->
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

**说明:**directory路径前要添加`../`的原因是maven_02_ssm相对于父工程的pom.xml路径是在其上一层的目录中，所以需要添加。

修改完后，注意maven_02_ssm项目的resources目录就多了些东西，如下:

![1630977419627](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013752.png)



##### 步骤4:测试是否生效

测试的时候，只需要将maven_02_ssm项目进行打包，然后观察打包结果中最终生成的内容是否为Maven中配置的内容。

![1630977885030](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013753.png)

上面的属性管理就已经完成，但是有一个问题没有解决，因为不只是maven_02_ssm项目需要有属性被父工程管理，如果有多个项目需要配置，该如何实现呢?

方式一:

```xml
<build>
    <resources>
        <!--设置资源目录，并设置能够解析${}-->
        <resource>
            <directory>../maven_02_ssm/src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>../maven_03_pojo/src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
        ...
    </resources>
</build>
```

可以配，但是如果项目够多的话，这个配置也是比较繁琐

方式二:

```xml
<build>
    <resources>
        <!--
			${project.basedir}: 当前项目所在目录,子项目继承了父项目，
			相当于所有的子项目都添加了资源目录的过滤
		-->
        <resource>
            <directory>${project.basedir}/src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

**说明:**打包的过程中如果报如下错误:

![1630948929828](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013754.png)

原因就是Maven发现你的项目为web项目，就会去找web项目的入口web.xml[配置文件配置的方式]，发现没有找到，就会报错。

解决方案1：在maven_02_ssm项目的`src\main\webapp\WEB-INF\`添加一个web.xml文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
         version="3.1">
</web-app>
```

解决方案2: 配置maven打包war时，忽略web.xml检查

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.2.3</version>
            <configuration>
                <failOnMissingWebXml>false</failOnMissingWebXml>
            </configuration>
        </plugin>
    </plugins>
</build>
```

上面我们所使用的都是Maven的自定义属性，除了${project.basedir},它属于Maven的内置系统属性。

在Maven中的属性分为:

- 自定义属性（常用）
- 内置属性
- Setting属性
- Java系统属性
- 环境变量属性

![1630981519370](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013755.png)

具体如何查看这些属性:

在cmd命令行中输入`mvn help:system`

![1630981585748](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013756.png)

具体使用，就是使用 `${key}`来获取，key为等号左边的，值为等号右边的，比如获取红线的值，对应的写法为 `${java.runtime.name}`。

### 4.3 版本管理

关于这个版本管理解决的问题是，在Maven创建项目和引用别人项目的时候，我们都看到过如下内容:

![1630982018031](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013757.png)

这里面有两个单词，SNAPSHOT和RELEASE，它们所代表的含义是什么呢?

我们打开Maven仓库地址`https://mvnrepository.com/`

![1630983148662](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013758.png)

在我们jar包的版本定义中，有两个工程版本用的比较多:

- SNAPSHOT（快照版本）
  - 项目开发过程中临时输出的版本，称为快照版本
  - 快照版本会随着开发的进展不断更新
- RELEASE（发布版本）
  - 项目开发到一定阶段里程碑后，向团队外部发布较为稳定的版本，这种版本所对应的构件文件是稳定的
  - 即便进行功能的后续开发，也不会改变当前发布版本内容，这种版本称为发布版本

除了上面的工程版本，我们还经常能看到一些发布版本:

* alpha版:内测版，bug多不稳定内部版本不断添加新功能
* beta版:公测版，不稳定(比alpha稳定些)，bug相对较多不断添加新功能
* 纯数字版

对于这些版本，大家只需要简单认识下即可。
