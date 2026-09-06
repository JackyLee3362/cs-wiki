--
type: basic-note
title: mvn-pom
author: JackyLee
create_time: 2025-09-29
update_time:
tags:
description:
---

## parent 标签

```xml
<parent>
    <groupId></groupId>
    <artifactId></artifactId>
    <version></version>
</parent>
```

常见的 spring-parent

spring 2.x 支持 Java8 最新为 2.7.18

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.7.18</version>
    <!--<relativePath/> -->
</parent>
```

## 测试插件

groovy，这是 1.x 版本的最新版本，更新于 2019-05-05

```xml
<!-- https://mvnrepository.com/artifact/org.spockframework/spock-core -->
<dependency>
    <groupId>org.spockframework</groupId>
    <artifactId>spock-core</artifactId>
    <version>1.3-groovy-2.5</version>
    <scope>test</scope>
</dependency>
<!-- 集成 spring -->
<dependency>
    <groupId>org.spockframework</groupId>
    <artifactId>spock-spring</artifactId>
    <version>${spock.version}</version>
    <scope>test</scope>
</dependency>
```

## 参考资料
