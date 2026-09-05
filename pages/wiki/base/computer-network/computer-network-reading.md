---
title: Computer Network Reading
date: 2025-03-02
draft: false
author: JackyLee
tags:
  - 基础知识
  - 计算机网络
categories:
  - 计算机科学
comment: true
---

## 介绍

- [对于网工而言，订阅哪些信息源最能让你跟上前沿？ - 知乎](https://www.zhihu.com/question/499098374/answer/2240379856)
- [万字 45 张图详解 MAC 地址、IP 地址、ARP、TCP/UDP 协议 - 知乎](https://zhuanlan.zhihu.com/p/363054051)
- [为什么在 B 站上许多人学习闫令琪老师讲的《现代计算机图形学入门》？ - 知乎](https://www.zhihu.com/question/548954682/answer/2989339266)
- [http 协议在 ip 协议之上对吗？ - 知乎](https://www.zhihu.com/question/609936298/answer/3124385394)
- [tcp 为什么要三次握手，两次不行吗？为什么？ - 知乎](https://www.zhihu.com/question/429915921/answer/2682855827)
- [TCP/IP、Http、Socket 的区别? - 知乎](https://www.zhihu.com/question/39541968/answer/2353101443)
- [不管黑客用了多少跳板，最终是不是可以通过网络运营商找出真实 IP？ - 知乎](https://www.zhihu.com/question/37470941/answer/2479388715)
- [OSI 七层模型中，每一层的数据包都是谁生成和解包的？ - 知乎](https://www.zhihu.com/question/27581238/answer/104888752)
- [CDN 是什么？使用 CDN 有什么优势？ - 知乎](https://www.zhihu.com/question/36514327/answer/1604554133)
- [0.0.0.0 和 255.255.255.255 这两个 IP 地址到底有啥用？ - 知乎](https://www.zhihu.com/question/267097519/answer/318401587)
- [如何禁止本地网络访问抖音？ - 知乎](https://www.zhihu.com/question/269706186/answer/2206752949)
- [怎么能禁止访问所有关于 360 的网站? - 知乎](https://www.zhihu.com/question/511526903/answer/2390421599)
- [OpenID 和 OAuth 有什么区别？ - 知乎](https://www.zhihu.com/question/19628327/answer/3619782343)
- [电视机为什么有大流量上传? - 知乎](https://www.zhihu.com/question/610220718/answer/3102592905)
- [聊天记录会自己泄露吗？ - 知乎](https://www.zhihu.com/question/572306707/answer/2942443743)
- [网络游戏为什么会有外挂？ - 知乎](https://www.zhihu.com/question/635777111/answer/3339444687)

### 浏览器收藏

- [图解网络介绍 | 小林 coding](https://www.xiaolincoding.com/network/)
- [计算机网络常见面试题总结(上) | JavaGuide](https://javaguide.cn/cs-basics/network/other-network-questions.html)
- [理解 OAuth 2.0 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
- [真正“搞”懂 HTTP 协议 13 之 HTTP2 - Zaking - 博客园](https://www.cnblogs.com/zaking/p/17106495.html)
- [HTTP/2 中的 HTTP 语义](https://halfrost.com/http2-http-semantics/)
- [随时随地连接、保护、构建 | Cloudflare](https://www.cloudflare.com/zh-cn/)
- [OSI 七层协议模型、TCP/IP 四层模型学习笔记 - 好就分享 - 博客园](https://www.cnblogs.com/Robin-YB/p/6668762.html)
- [cpolar - secure introspectable tunnels to localhost](https://dashboard.cpolar.com/login)
- [从零开始学习 CTF——CTF 是什么\_ctf 学习-CSDN 博客](https://blog.csdn.net/ewyherayh/article/details/106497636)
- [Download Burp Suite Community Edition - PortSwigger](https://portswigger.net/burp/communitydownload)
- [用虚拟机 VMware 中浏览器上网，公司 IT 能监控到你的上网记录吗? - 知乎](https://www.zhihu.com/question/523630039/answer/2462973114)
- [弈心的想法 抓包的信息差 - 知乎](https://www.zhihu.com/pin/1845188955202543617)
- [大家用的内网穿透工具收费高不高？ - 知乎](https://www.zhihu.com/question/506738984/answer/2931302444)
- [11 款轻量、简洁、免费无限制内网穿透工具 - 知乎](https://zhuanlan.zhihu.com/p/664934877)

## 参考资料

- [琴梨梨 OvO - 我应该设置多少 kb 才能让他不能玩游戏？ - 知乎](https://www.zhihu.com/question/629492783/answer/3317933965)

  - 概要: 最有效的办法其实是禁用 udp 禁用 udp 可以干掉绝大多数游戏，以及让部分游戏能登录但不能进入对局 但是你的孩子可能会意外觉醒 udp over tcp 的技能 别问我怎么知道的，我之前就读的布村郊区不知名大学校园网就是屏蔽全部 udp，游戏全都连不上，少部分能登录不能进入对局，基于 wireguard 的代理也不能用（wireguard 也是 udp），于是我直接在住的地方拿旧手机跑了一个 trojan 中转，在学校里连接 trojan 中转打游戏，丝滑流畅，因为 trojan 是…
  - 点赞: 3107

- [花宝宝 - Nginx 如何防御 DDOS 攻击？ - 知乎](https://www.zhihu.com/question/586533803/answer/1986733765687521879)
  - 概要: 先泼盆冷水： Nginx防不了真正的DDOS。被打过一次就知道了。当年公司网站被攻击，带宽直接打满100M，Nginx进程连TCP握手都完成不了，配置写得再好也白搭。最后找云厂商上了高防才扛住。 但Nginx能防的是 应用层攻击，也就是CC攻击（Challenge Collapsar）。这类攻击不靠带宽取胜，而是用大量HTTP请求耗尽你的服务器资源——CPU、内存、连接数、PHP-FPM进程池等。下面说说怎么配。 一、先搞清楚能防什么攻击类型协议层Nginx能防吗…
  - 点赞: 144