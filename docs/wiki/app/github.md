---
title: github
date: 2025-05-15
draft: true
author: JackyLee
tags:
  - app/website
categories:
comment: true
---

## Github 的一些功能

- [ ] github action
- [ ] github bot
- [ ] github issue

## Github 帮助手册

- [GitHub Docs](https://docs.github.com/zh)
- [GitHub Docs](https://docs.github.com/en)
- [GitHub Copilot 激活教程](https://docs.qq.com/doc/DRUdFWlhvT2JXWXhT)
- [新手该如何使用 GitHub？ - 知乎](https://www.zhihu.com/question/21669554/answer/1749427979)
- [如何使用 GitHub？ - 知乎](https://www.zhihu.com/question/20070065/answer/517839193)
- [如何使用 GitHub？ - 知乎](https://www.zhihu.com/question/20070065/answer/1879847761)

github 漫游指南

- [phodal/github: GitHub 漫游指南- a Chinese ebook on how to build a good project on Github. Explore the users' behavior. Find some thing interest.](https://github.com/phodal/github)

## Github Wiki

### 如何创建

在 Github 中开启，然后创建 Wiki 页面

### 本地修改

```sh
git clone https://github.com/{user-name}/{your-project}.wiki.git
```

注意：文件不能超过 5000 个，否则得上 Github

### 边栏和脚注

分别是 `_Sidebar.md` 和 `_Footer.md`

### 使用 Wiki 的例子

- 非常搞笑，dotenv 全写了什么项目用他的库: [theskumar/python-dotenv: Reads key-value pairs from a .env file and can set them as environment variables. It helps in developing applications following the 12-factor principles.](https://github.com/theskumar/python-dotenv/wiki)

## FAQ

### 云服务器加速 github 的方法?

```sh
git config --global url."https://mirror.ghproxy.com/https://github.com/".insteadOf "https://github.com/"
git config --global protocol.https.allow always
```

## 参考资料

- [你都用 Github Action 做出过哪些骚操作？](https://www.zhihu.com/question/9592632820/answer/83623719862)
- README 文档: [关于自述文件 - GitHub 文档](https://docs.github.com/zh/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [有关在 GitHub 上编写的快速入门 - GitHub 文档](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)

- [氢气球 - 有稳定且容易操作的方法打开github吗？ - 知乎](https://www.zhihu.com/question/663081131/answer/1972356909483926871)
  - 概要: github无法打开的本质就是DNS污染，域名指向了错误的ip，那么可以通过改host解决。 1.win+e打开资源管理器，然后进入C:\Windows\System32\drivers\etc这个路径下，里面有个文件host。 [图片] 2.右键属性，把只读关了。 [图片] 3.打开方式里选择记事本，编辑这个文件。为了保证什么时候看这个都是有效的，我说过程和思路。 3.1首先在 http://Bing.com 里去分别搜索 多地点ping的在线网站 这个的意思就是，你打不开它，但是全世界有这么多人…
  - 点赞: 159
- [HelloGitHub - 节省 60% Token 的新数据格式「GitHub 热点速览」 - 知乎](https://zhuanlan.zhihu.com/p/1974023024262026805)
  - 概要: 我最近琐事缠身，连续好几周没发「GitHub 热点速览」了，这样不行得赶紧续上。 首先映入眼帘的是可节省 60% Token 的新数据序列化格式 TOON，其官方开源的 TypeScript 实现在 GitHub 上一周便斩获了 3.5k Star，而且热度还在持续上涨。Snapchat 团队开源的跨平台 UI 框架 Valdi，不仅能够用 TypeScript 写跨平台 UI 而且无需重新编译即可在毫秒内看到改动效果。话说我也有看走眼的时候...TrendRadar 是一款基于 AI 的全网热点资…
  - 点赞: 29

- [白露未晞me - 为什么手机端GitHub可以直连，而电脑端不行？ - 知乎](https://www.zhihu.com/question/1977545151833453281/answer/1979141625314834201)
  - 概要: 我之前也发现了这个情况，还专门研究了一下。可以给你简单分享一下我的结论（仅供参考）。 简要回答一般认为，GFW主要在国际出口处做了几个处理： IP / 端口封锁：通俗点说就是把某些海外IP (或者IP段)直接加到了黑名单，这样路由层就直接丢包了。DNS污染 / DNS注入：举个形象的例子帮助你理解，就是比如看到有人在用明文DNS查询某些域名的时候(像是http://github.com ，http://facebook.com )，在路上插入假 DNS 响应，把域名…
  - 点赞: 175
