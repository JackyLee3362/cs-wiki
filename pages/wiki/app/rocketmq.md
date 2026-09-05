---
title: rocketmq
date: 2025-11-02
draft: true
author: JackyLee
tags:
  - app/server
categories: 
comment: true
---


## RocketMQ

- [why 技术 - 大家都见过哪些让你虎躯一震的代码？ - 知乎](https://www.zhihu.com/question/287421003/answer/1944526317195343386)
  - 概要: 我之前看到一个奇怪的注释，就是下面这张图： [图片] 我们可以不用管具体的代码逻辑，只是单单看这个 for 循环。 在循环里面，专门有个变量 j，来记录当前循环次数。 第一次循环以及往后每 1000 次循环之后，进入一个 if 逻辑。 在这个 if 逻辑之上，标注了一个注释：prevent gc. prevent，这个单词如果不认识的同学记一下，考试肯定要考的： [图片] 这个注释翻译一下就是：防止 GC 线程进行垃圾回收。 具体的实现逻辑是这样的： [图片] 核心逻辑其实…
  - 点赞: 616

## 参考资料
