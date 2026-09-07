---
title: Java Command Line Compile
description: Java 命令行编译与打包
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 构建
categories:
  - 编程语言
comment: true
---

> 抛开 IDE，使用 `javac`、`java`、`jar` 命令手动编译和运行 Java 项目。

## 基本编译

```sh
# 编译单个文件
javac -d out src/Main.java

# 编译整个项目（指定 classpath）
javac -cp src/main/java -d out src/main/java/note/compile/Main.java

# 运行
java -cp out edu.note.compile.Main
```

## 带依赖编译

```sh
# Windows
javac -cp "src;lib/*" -d out src/HelloWorld.java
java -cp "out;lib/*" HelloWorld

# macOS / Linux
javac -cp "src:lib/*" -d out src/HelloWorld.java
java -cp "out:lib/*" HelloWorld
```

## 打包 JAR

```sh
# 创建 jar 文件
jar cf target/app.jar -C out/ .

# 指定入口类打包（可执行 jar）
jar cfe target/app.jar com.example.Main -C out .
java -jar target/app.jar
```

## 参考资料

- [命令行编译运行Java项目Junying Shao's Blog](https://shaojunying.github.io/6644e3ad18df41f990932bcf62294e82.html) #todo
- [第1期：抛开IDE，了解一下javac如何编译 | 毛帅的博客](https://imshuai.com/using-javac) #todo
