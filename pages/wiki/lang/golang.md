---
title: golang
description: 
date: 2025-11-01
update_date:
draft: true
author: JackyLee
tags:
categories: 
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---


- [有哪些不错的 golang 开源项目？ - 知乎](https://www.zhihu.com/question/48821269/answer/1992872634)

## 参考资料

- [Go、Rust、Nim 等新兴语言，为什么都抛弃了 constructor? - 知乎](https://www.zhihu.com/question/36586808/answer/2203430219)
- [为什么 go 和 rust 语言都舍弃了继承？ - 知乎](https://www.zhihu.com/question/511958588/answer/3137705299)
- [花宝宝 - Go仅一行代码位置变更，性能差12倍，这是为什么？ - 知乎](https://www.zhihu.com/question/1983394937543366516/answer/1987466092352915071)
  - 概要: 两个字： 伪共享。这玩意儿是并行计算里最阴的性能杀手，代码逻辑完全正确，race detector也检测不出来，但性能就是差十几倍。 先说你这两种写法的区别： 慢的： localCount := 0 // 外面声明 wg.Go(func() { for i := start; i < end; i++ { if x*x+y*y < 0.25 { localCount++ } } })快的： wg.Go(func() { localCount := 0 // 里面声明 for i := start; i < end; i++ { if x*x+y*y < 0.25 { localCount++ } } })看着差不多对吧…
  - 点赞: 500
- [花宝宝 - 为什么要使用 Go 语言？Go 语言的优势在哪里？ - 知乎](https://www.zhihu.com/question/21409296/answer/1996129638326489885)
  - 概要: 部署爽到哭Go编译出来就一个二进制文件，没有依赖。 不用装JVM，不用管Python版本，不用配Node环境，不用担心服务器上的glibc版本对不对。把文件扔上去， ./app 就跑起来了。Docker镜像可以用scratch（空镜像）做基础，一个Go应用镜像可以压到10MB以下。Java那边动辄几百MB的镜像，看着都心疼。 做运维的同事跟我说，自从后端换成Go，他半夜被叫起来处理环境问题的次数少了一大半。 并发写起来不费脑子其他语言写并发，线程池、…
  - 点赞: 140
  - from zhihu collection 2026.01
- [花宝宝 - Go 语言到底适合干什么？ - 知乎](https://www.zhihu.com/question/296426314/answer/1991869519933764050)
  - 概要: 先回答你的困惑：用Go写业务CRUD确实不舒服，这不是你的问题。 但Go本来也不是干这个的。 Go解决的是什么问题你想象一下2007年Google的处境： 服务器上跑的是C++，性能好但开发慢、编译慢、容易出bug。 脚本用Python，写得快但性能差、部署麻烦。 两个极端，中间缺一个东西： 开发效率接近Python，运行效率接近C++，部署像脚本一样简单。Go就是填这个坑的。 所以Go的设计取舍很明确： 要GC，不想手动管内存要静态类型，编译期查…
  - 点赞: 246
  - from zhihu collection 2026.01
- [某不科学的超电磁炮 - 有没有大佬说一下go怎么速成，求求求？ - 知乎](https://www.zhihu.com/question/1951324779341647977/answer/1953911764455495096)
  - 概要: go官网有新手教程，写完以后做一个mit6.824
  - 点赞: 120
  - from zhihu collection 2026.01