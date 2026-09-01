---
title: mvn
date: 2025-08-11
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## tldr mvn

可以查看 mvn 的一些基本用法

## 查看依赖树

```sh
# 基本用法
mvn dependency:tree
# 查看特定依赖的路径（用于定位某个 JAR 包是从哪里引入的）：
mvn dependency:tree -Dincludes=groupId:artifactId
# 将依赖树输出到文件（方便查看大型项目）：
mvn dependency:tree -DoutputFile=tree.txt
# 只看依赖树的简略结构（排除掉所有传递依赖的详细展示）
mvn dependency:tree -Dverbose
#
```

## mvn validate

## mvn test 测试命令

```sh
# 测试某个具体的方法
mvn test -Dtest=完整类名#方法名
# 特定模块中运行
mvn test -pl [模块] -Dtest=类名#方法名
# 参数说明
# -B: 无交互模式
# -U: 强制更新快照
# -am: also-make 除了构建测试模块，还需构建依赖模块
# -Dmaven.test.failure.ignore: 设为 true 时，测试失败不影响构建流程
# -Dsurefire.runOrder=random: 确保测试类的执行顺序是随机的，是Surefire插件的选项之一
mvn test -B -U -am -Dmaven.test.failure.ignore -DfailIfNoTests=false -Dsurefire.runOrder=random -Dtest=完整类名#方法名
```

## mvn test 测试

### maven build 参数说明

id: 指定唯一标识

phase: 关联的生命周期阶段，比如 `test-compile`

goal/goals: 关联指定的生命周期目标

configuration: 配置

### mvn deploy

对某个模块进行远程部署

```sh
mvn deploy -f "/path/to/pom.xml"
```

## maven 插件

### maven-jar-plugin

[Apache Maven JAR Plugin – Manifest customization](https://maven.apache.org/plugins/maven-jar-plugin/examples/manifest-customization.html)

[Apache Maven Archiver – Reference](https://maven.apache.org/shared/maven-archiver/index.html)

## 参考资料

- [01. 单元测试学习与项目介绍 - 学城](https://km.sankuai.com/page/327757205)
- [Maven 最全教程，看了必懂 - 知乎](https://zhuanlan.zhihu.com/p/62841181)
- [Maven Repository: Search/Browse/Explore](https://mvnrepository.com/)
