---
title: Maven
description: Java 项目构建与依赖管理工具
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 构建工具
  - 包管理
categories:
  - 后端开发
comment: true
---

> Maven 是 Java 项目的事实标准构建工具，提供依赖管理、项目构建、多模块支持等功能。

## 核心概念

### 坐标（GAV）

```xml
<groupId>com.example</groupId>    <!-- 组织/公司域名倒序 -->
<artifactId>demo</artifactId>     <!-- 项目名称 -->
<version>1.0.0</version>          <!-- 版本号 -->
```

### 依赖范围（Scope）

| scope | 主程序 | 测试 | 打包 | 典型用例 |
|-------|--------|------|------|----------|
| compile | ✓ | ✓ | ✓ | 默认，如 log4j |
| test | ✗ | ✓ | ✗ | junit |
| provided | ✓ | ✓ | ✗ | servlet-api（容器提供）|
| runtime | ✗ | ✓ | ✓ | JDBC 驱动 |

### 生命周期

Maven 有三套独立的生命周期：

- **clean**：清理项目（pre-clean → clean → post-clean）
- **default**：构建核心（validate → compile → test → package → verify → install → deploy）
- **site**：生成站点文档

## 多模块项目

### 聚合（Aggregation）

在一个父 POM 中通过 `<modules>` 声明子模块，一键构建所有模块。

### 继承（Inheritance）

子模块通过 `<parent>` 继承父 POM，统一管理依赖版本、插件配置。

### 聚合 vs 继承

| 特性 | 聚合 | 继承 |
|------|------|------|
| 作用 | 快速构建多模块 | 简化依赖配置、统一版本 |
| 配置位置 | 聚合工程的 pom.xml | 子模块的 pom.xml |
| 感知关系 | 聚合方知道所有模块 | 父模块不知道哪些子模块继承了自己 |
| 打包方式 | pom | pom |

### 依赖管理

在父 POM 中使用 `<dependencyManagement>` 统一声明依赖版本，子模块引入时无需写版本号。

## Profile 配置

通过 `<profiles>` 定义不同环境的构建配置（如开发、测试、生产环境的数据库连接）。

## parent 标签

Spring Boot 项目通常继承 `spring-boot-starter-parent` 来统一管理依赖版本：

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
</parent>
```

Spring Boot 2.x 系列最新版本为 2.7.18，支持 Java 8。

## 测试插件

### Spock 框架

```xml
<dependency>
    <groupId>org.spockframework</groupId>
    <artifactId>spock-core</artifactId>
    <version>1.3-groovy-2.5</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.spockframework</groupId>
    <artifactId>spock-spring</artifactId>
    <version>${spock.version}</version>
    <scope>test</scope>
</dependency>
```

## 常见问题

### 打包 Spring Boot 可执行 JAR

需要 `spring-boot-maven-plugin` 的 `repackage` goal：

```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <executions>
        <execution>
            <goals><goal>repackage</goal></goals>
        </execution>
    </executions>
</plugin>
```

### 清理损坏的依赖

删除本地仓库中以 `.lastUpdated` 结尾的文件，Maven 会自动重新下载：

```sh
# Windows
find %REPOSITORY_PATH% -name "*.lastUpdated" -delete

# macOS / Linux
find ~/.m2/repository -name "*.lastUpdated" -delete
```

## 参考资料

- [Maven 中央仓库搜索](https://mvnrepository.com/) #todo
- [Maven 阿里云镜像](http://maven.aliyun.com/nexus/content/groups/public/) #todo
- [Nexus Repository 下载](https://help.sonatype.com/repomanager3/download) #todo
- [Maven Surefire Plugin - Spock](https://maven.apache.org/surefire/maven-surefire-plugin/examples/spock.html) #todo
- [Maven Enforcer Plugin](https://maven.apache.org/enforcer/maven-enforcer-plugin/enforce-mojo.html) #todo
