---
title: checkstyle
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - Java
categories:
  - 命令行
comment: true
---

## 特点

- Java 生态经典的代码规范检查工具
- 检查命名、格式、注释、复杂度、导入顺序等编码规范
- 支持 XML 配置文件，可对接 Maven / Gradle 构建流程
- 常用作 CI 门禁，检查代码是否符合团队规范

## 集成

### Maven

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-checkstyle-plugin</artifactId>
</plugin>
```

### Gradle

```groovy
plugins {
    id 'checkstyle'
}
```

## 用法

```sh
mvn checkstyle:check
```

## 参考资料

- [Checkstyle 官网](https://checkstyle.org/)
- [checkstyle/checkstyle - GitHub](https://github.com/checkstyle/checkstyle)
