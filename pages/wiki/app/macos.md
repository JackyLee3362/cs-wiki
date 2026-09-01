---
title: macos
description:
date: 2025-04-28
update_date:
  - 2025-08-01
  - 2025-11-01
  - 2025-11-27
draft: true
author: JackyLee
tags:
  - app/operating-system
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## FAQ

### mac浏览器 Home 和 End 的问题

mac home 键，按下一次是到首页，再按一次是到行首，end 键同理，需要改造
解决方案一: 使用 karabiner 绑定，绑定 `cmd + <-` 和 `cmd + ->`

### brew 安装 chromedriver 后无法启动

到 chromedriver 安装目录下

```sh
xattr -d com.apple.quarantine chromedriver
```

- [（mac）无法打开“chromedriver”，因为无法验证开发者 - yimu-yimu - 博客园](https://www.cnblogs.com/may18/p/15237666.html)

## 参考资料

- [Feng Li - 为什么 macOS 软件生态不敌 Windows? - 知乎](https://www.zhihu.com/question/630055595/answer/64015789789)
  - 概要: 因为微软的一代目们懂得吃小亏占大便宜这个道理。首先从战略的层面来说，做生态是最重要的。没有哪个企业家会忽视生态建设，但是真正能做到能做好的，寥寥无几。 因为做生态意味着，长久的付出，以及与之对应的巨大的风险。不是所有的企业家都能做出这样的决策，并有能力有运气执行下来。 那我们来看看 Windows 为了生态建设，做了哪些对的事情。 首先是技术信息的分享。本世纪初，国内公认的 Windows 开发的顶级书籍包括《Windows 核…
  - 点赞: 817

- [黄联樵 - 有哪些是你用上了 mac 才知道的事？ - 知乎](https://www.zhihu.com/question/545108671/answer/3001554660)
  - 概要: 用上了高端的 Mac（已退货）才知道：原来文件夹里面的文件，你看到是 8 个，其实可能有 12 个。其中 3 个图标重叠在一起了，另外一个被拖动到屏幕外面了。 用上了高端的 Mac（已退货）才知道：原来鼠标灵敏度有问题是因为系统内置了鼠标加速度，只能用控制台来关闭。关闭之后发现高端的 magic 鼠标只有 400 左右的 dpi，因为瞬移鼠标这种 FPS 爆头操作习惯，容易打翻桌面上一缕阳光下的卡布奇诺。 用上了高端的 Mac（已退货）才知道：让窗口饱满…
  - 点赞: 7212
- [不逢春 - Mac 用户必看！ .DS_Store 文件彻底删除+禁用生成 2025 最全攻略 - 知乎](https://zhuanlan.zhihu.com/p/1926963355161190495)
  - 概要: None
  - 点赞: 49
- [qianguyihao/Mac-list: Mac 软件清单、Mac 使用技巧整理，正在不断完善中。努力做到最全。](https://github.com/qianguyihao/Mac-list?tab=readme-ov-file)
- [你会从 mac 转向 Windows 吗？](https://www.zhihu.com/question/395451767/answer/3570380937)
- [有哪些你用得很爽的 macOS 软件？ - 知乎](https://www.zhihu.com/question/309803858/answer/3620106696)
- [在 macOS 中关闭应用窗口，为什么默认设定不是完全退出？ - 知乎](https://www.zhihu.com/question/21143701/answer/2521552530)
- [(效率人生)程序员必备工具 Dash - 知乎](https://zhuanlan.zhihu.com/p/543028383)
- [macOS 上有哪些值得推荐的常用软件？ - 知乎](https://www.zhihu.com/question/19550256/answer/1992428647)
- [你会从 mac 转向 Windows 吗？ - 知乎](https://www.zhihu.com/question/395451767/answer/36840618896)
