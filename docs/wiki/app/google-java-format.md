---
title: google-java-format
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - formatter
  - Java
categories:
  - 命令行
comment: true
---

## 特点

- Google 官方出品的 Java 代码格式化工具
- 遵循 Google Java Style Guide，风格固定、无需配置
- 可配合 IDE 插件、Maven / Gradle 插件、pre-commit 使用
- 与 Checkstyle 的 google_checks 配置保持一致

## 集成

### Gradle

```groovy
plugins {
    id 'com.github.sherter.google-java-format' version '0.9'
}
```

### Maven

```xml
<plugin>
  <groupId>com.coveo</groupId>
  <artifactId>fmt-maven-plugin</artifactId>
</plugin>
```

## 用法

```sh
# 下载 jar 后
java -jar google-java-format-1.22.0-all-deps.jar --replace src/**/*.java
```

## 参考资料

- [google-java-format - GitHub](https://github.com/google/google-java-format)
