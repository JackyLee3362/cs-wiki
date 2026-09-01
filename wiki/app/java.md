---
title: java
date: 2024-02-11
update_date:
  - 2025-03-14
  - 2025-06-30
draft: true
author: JackyLee
tags:
  - app/command-line
  - java
  - 开发
  - 编程语言
categories:
  - wiki/命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## JDK 安装

[华为云 jdk 安装](https://repo.huaweicloud.com/java/jdk/)

- [如何在 vscode 中配置 java 运行环境？ - 知乎](https://www.zhihu.com/question/278838022/answer/1709832515)
- [Linux 下安装 Java 环境三种方式（tar.gz、rpm、yum） - 蚂蚁小哥 - 博客园](https://www.cnblogs.com/antLaddie/p/17599359.html)

## java 语言级别

1. java8: 新增有 lambda 语法
2. java11
3. java17
4. java21

### 项目语言级别

### maven 项目的语言级别

```xml
<!-- Maven 中的一个配置参数，它指定了编译Java 源代码时使用的版本 -->
<maven.compiler.source>17</maven.compiler.source>
<maven.compiler.target>17</maven.compiler.target>
```

如果我环境中的 java 是 8，但是像上图所示，显示了 17，则会编译错误（无效的发行版 17）

如果我环境中的 java 是 17，上面也是 17，则会编译出 17 的版本，但是无法给 java8 的运行，所以需要改为 8

### 字节码版本

基本可以认为 jdk 版本 + 44 = 字节码版本

| JDK 版本    | 字节码版本 |
| ----------- | ---------- |
| Java 1.0    | 45.0       |
| Java 1.1    | 45.3       |
| Java 1.2    | 46.0       |
| Java 1.3    | 47.0       |
| Java 1.4    | 48.0       |
| Java 5      | 49.0       |
| Java 6      | 50.0       |
| Java 7      | 51.0       |
| **Java 8**  | **52.0**   |
| Java 9      | 53.0       |
| Java 10     | 54.0       |
| **Java 11** | **55.0**   |
| Java 12     | 56.0       |
| Java 13     | 57.0       |
| Java 14     | 58.0       |
| Java 15     | 59.0       |
| Java 16     | 60.0       |
| **Java 17** | **61.0**   |
| Java 18     | 62.0       |

### java 的错误顺序：按照调用栈输出

```java
public class Hello {

    public static void main(String[] args) {
        test1();
    }

    public static void test1() {
        test2();
    }

    public static void test2() {
        try {
            int a = 1 / 0;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

//
// java.lang.ArithmeticException: / by zero
//         at Hello.test2(Hello.java:12)
//         at Hello.test1(Hello.java:7)
//         at Hello.main(Hello.java:4)
```

## DEBUG

### VSCODE DEBUG 模式启动

这是 macos/vscode 启动

```sh
/usr/bin/env/Library/Java/JavaVirtualMachines/jdk1.8.0_202.jdk/Contents/Home/bin/java \
-agentlib:jdwp=transport=dt_socket,server=n,suspend=y,address=localhost:63729 \
-Dspring.jmx.enabled=true \
-Dmanagement.endpoints.jmx.exposure.include=\* \
-Dspring.application.admin.enabled=true
-Dspring.boot.project.name=xy-cbc-apply-server
-Djava.rmi.server.hostname=localhost \
-Dcom.sun.management.jmxremote.port=45556 \
-Dcom.sun.management.jmxremote.authenticate=false \
-Dcom.sun.management.jmxremote.ssl=false \
-cp /var/folders/tp/wmn3r9fn2cl6wd240tfskg6r0000gn/T/cp_4356zpjxt53ldtvv9i7un8lo2.jar \
com.sankuai.meituan.cbc.apply.StartApp
```

### ATTACH 模式启动

## 参考资料
