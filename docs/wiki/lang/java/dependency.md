---
title: dependency
description:
date: 2025-10-11
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## 常用配置项

```xml

<config>
  <!--常用继承-->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
  </dependency>

  <!--版本管理-->
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-dependencies</artifactId>
        <version>2.7.18</version>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <!--常用日志-->
  <dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.3.15</version>
  </dependency>

  <!--常用测试-->
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.12.2</version>
    <scope>test</scope>
  </dependency>

  <!--Lombok-->
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.28</version>
    <scope>provided</scope>
  </dependency>
</config>
```

## VSCode 开发

`Java: Configure Java Runtime`

### 设置编译路径

.vscode/setting.json 中添加

```json
{
  "java.home": "<YOUR_JAVA_HOME>",
  "java.configuration.runtimes": [
    {
      "name": "JavaSE-1.8",
      "path": "<YOUR_JAVA_HOME>/bin/java",
      "default": true
    }
  ]
}
```

### 配置编译器

java.configuration.updateBuildConfiguration 设置为 always 编译配置将在每次保存文件时自动更新。

## 参考资料

- [VSCode 配置 Java 开发 - CyrusHuang - 博客园](https://www.cnblogs.com/cyrushuang/p/18731652)
