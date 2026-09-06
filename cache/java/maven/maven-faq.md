---
title: maven-faq
description:
date: 2025-10-12
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## maven 生命周期

![alt text](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510121004071.png)

## 01-Maven-阿里云私服地址

```xml
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

## 02-Maven-pom 文件结构

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <!-- POM模型版本 -->
    <modelVersion>4.0.0</modelVersion>

    <!-- 当前项目坐标 -->
    <groupId>com.example</groupId>
    <artifactId>maven_project1</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!-- 打包方式 -->
    <packaging>jar</packaging>

</project>
```

## 03-Maven-排除依赖

```xml
<dependency>
    <groupId>com.example</groupId>
    <artifactId>maven-projectB</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--排除依赖, 主动断开依赖的资源-->
    <exclusions>
    	<exclusion>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

# 04-Maven-依赖范围

![alt text](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510121004072.png)

如上图所示，给 junit 依赖通过 scope 标签指定依赖的作用范围。 那么这个依赖就只能作用在测试环境，其他环境下不能使用。

scope 标签的取值范围：

| **scope**值      | **主程序** | **测试程序** | **打包（运行）** | **范例**    |
| ---------------- | ---------- | ------------ | ---------------- | ----------- |
| compile(default) | Y          | Y            | Y                | log4j       |
| test             | -          | Y            | -                | junit       |
| provided         | Y          | Y            | -                | servlet-api |
| runtime          | -          | Y            | Y                | jdbc 驱动   |

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.10</version>
    <scope>test</scope>
</dependency>
```

# 06-Maven-更新依赖索引

有时候给 idea 配置完 maven 仓库信息后，在 idea 中依然搜索不到仓库中的 jar 包。这是因为仓库中的 jar 包索引尚未更新到 idea 中。这个时候我们就需要更新 idea 中 maven 的索引了，具体做法如下：

打开设置----搜索 maven----Repositories----选中本地仓库-----点击 Update

# Maven-清理仓库

初始情况下，我们的本地仓库是没有任何 jar 包的，此时会从私服去下载（如果没有配置，就直接从中央仓库去下载），可能由于网络的原因，jar 包下载不完全，这些不完整的 jar 包都是以 lastUpdated 结尾。此时，maven 不会再重新帮你下载，需要你删除这些以 lastUpdated 结尾的文件，然后 maven 才会再次自动下载这些 jar 包。

如果本地仓库中有很多这样的以 lastUpadted 结尾的文件，可以定义一个批处理文件，在其中编写如下脚本来删除：

也可以用 python 脚本

```bat
set REPOSITORY_PATH=E:\develop\apache-maven-3.6.1\mvn_repo
rem 正在搜索...

del /s /q %REPOSITORY_PATH%\*.lastUpdated

rem 搜索完毕
pause
```

操作步骤如下：

1. 定义批处理文件 del_lastUpdated.bat (直接创建一个文本文件，命名为 del_lastUpdated，后缀名直接改为 bat 即可 )
2. 在上面的 bat 文件上**右键---》编辑** 。修改文件：

修改完毕后，双击运行即可删除 maven 仓库中的残留文件。

## 配置文件

```sh
M2_HOME/conf/setting.xml
```

### 本地仓库修改

```xml
<localRepository>D:/path/to/repository</localRepository>
```

## 最佳实践：springboot 的 pom 文件

### 最佳实践：打包 springboot 项目

### 遇到的问题

```bash
cd /path/to/maven/project
mvn package
java -jar xxx.jar包

# 输出
.\xxx.jar中没有主清单属性
```

### 打包需要的插件

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <version>${spring-boot.version}</version>
    <configuration>
        <mainClass>com.example.SpringWebSimpleDemoApplication</mainClass>
        <!--一定要把这个注释掉 ！-->
        <!--<skip>true</skip>-->
    </configuration>
    <executions>
        <execution>
            <id>repackage</id>
            <goals>
                <goal>repackage</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

配置好以后

```bash
mvn clean package
```

## 参考资料
