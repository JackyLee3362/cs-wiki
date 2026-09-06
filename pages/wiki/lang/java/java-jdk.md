---
title: java-jdk
description:
date: 2025-12-13
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## jdk 8

- [Overview (Java Platform SE 8 )](https://docs.oracle.com/javase/8/docs/api/index.html)
- [Java Platform Standard Edition 8 Documentation](https://docs.oracle.com/javase/8/docs/)
- [Java 8 Predicate with Examples - GeeksforGeeks](https://www.geeksforgeeks.org/java-8-predicate-with-examples/)

## jdk 17

- [IfElseZhang - jdk17 record 关键字的作用是什么? - 知乎](https://www.zhihu.com/question/497623999/answer/88264365141)

  - 概要: Java Record 和 Lombok 关系不大，不建议像问题描述中一样通过 Lombok 的“滤镜”来看 Java Record。 我们最好尽量通过第一手信息来认知某个技术概念。网络上固然有很多优秀的解释，但视作补充材料，甄别后再“吸收”会更合适一点。 基于这个理念，我在知乎上输出的每一个回答或文章都会附带一个尽可能参考文献列表；大家可以将我的内容当作“目录”，以此为脉络，逐个追溯各原始文档。 Java Record 隶属于 Project Amber [1]，…
  - 点赞: 63

- [酱油君 - OpenJDK、Temurin、GraalVM...Java 到底该装哪个？ - 知乎](https://zhuanlan.zhihu.com/p/1941543946317723577)
  - 概要: Oracle JDK 要收费？Temurin、Corretto 又是什么？别再为选哪个 JDK 头疼了，一篇文章说清各大 Java 发行版的门道，顺便搞定 Java 环境部署出错 问题。一个兢兢业业的程序员，刚 git clone 下来一个新项目，准备大展拳脚，结果上来就被现实一顿暴击——Unsupported major.minor version。得，JDK 版本不对。行，切一下版本呗？结果终端里冷冰冰地甩来一句：&#39;JAVA_HOME&#39; not found。血压是不是瞬间就上来了？只要是写 Java 的，谁没跟这破环…
  - 点赞: 20

## jdk 21

- [吃菠萝不吃菠萝蜜 - 现在 java 开发需要升级到 21 吗？ - 知乎](https://www.zhihu.com/question/644317537/answer/1932909251258476418)
  - 概要: 今年 3 月，把核心业务 jdk8+springboot2.1.12 升到了 jdk21+springboot3.4.3 主要有以下问题： LifeCycle 的改动，生命周期变了服务优雅启停问题，关联 1 天坑，hibernate6 对 Instant 的处理发生了变化，时区一直无法+8，研究了很久无解，Instant 全部改成了 LocalDateTime 伤筋动骨，天坑，有大神知道怎么搞指导下 feign 拼接方式变化，拼出来 &#34;http://&#34;+&#34;https://&#34; 难搞 hibernate 自定义 ID 生成器不兼容问题，无法灵活指定主键 idswagger2 文档…
  - 点赞: 97

## 参考资料
