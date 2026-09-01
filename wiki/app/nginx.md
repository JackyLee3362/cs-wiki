---
title: nginx
date: 2025-04-28
draft: true
author: JackyLee
tags:
  - app/server
  - docker服务
  - 反向代理
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 参考资料

- [Nginx 能做什么好玩的事情？ - 知乎](https://www.zhihu.com/question/21483073/answer/3633575553)

- [GitHub Daily - 可视化配置 Nginx，29000+ GitHub Star！ - 知乎](https://zhuanlan.zhihu.com/p/1966885079688155393)
  - 概要: 作为一名程序员经常折腾服务器，但一直有个挺让人头疼的事。 那就是每次要给新服务配置反向代理，都得去 Nginx 配置文件，还要手动申请 SSL 证书。 这种重复性的工作应该要有个工具来帮我们完成，而且 Nginx 复杂配置规则，新手上手学习还得花费大量时间。 近日，我在 GitHub 上找到了， Nginx Proxy Manager 这款带可视化界面的 Nginx 管理工具，已斩获 29000+ Star。 [图片] 作者在 README 文件介绍中说到：“ so easy that a monkey…
  - 点赞: 62

- [GitHub Daily - Nginx 能做什么好玩的事情？ - 知乎](https://www.zhihu.com/question/21483073/answer/1974165265085395696)
  - 概要: 偶然间看到这个问题，看了一圈大家的回答，都在说 Nginx 能做什么。 但今天我想从另一个角度跟大家聊聊，怎么让 Nginx 使用变得更加简单一点，让初学者也能轻松上手。 之前我自己有一台服务器，上面跑了好几个用 Docker 启动的小服务，比如博客、网盘、还有些自己写的工具。 每次新增服务，最头疼的就是配置 Nginx 的反向代理，需要先 SSH 连上服务器，找到 nginx.conf 文件，接着 vim 编辑修改文件，写 server、location、proxy…
  - 点赞: 80
