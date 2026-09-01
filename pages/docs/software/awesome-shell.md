---
title: awesome-shell
date: 2025-11-02
draft: true
author: JackyLee
tags:
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## shell 分类

- sh: 全称是 Bourne shell，由 AT&T 公司的 Steve Bourne 开发，为了纪念他，就用他的名字命名了。sh 是 UNIX 上的标准 shell，很多 UNIX 版本都配有 sh。sh 是第一个流行的 shell。
- zsh: 很多人的 mac 中会使用 zsh 而不是 bash，一大半是因为 oh-my-zsh 这个配置集，它兼容 bash，还有自动补全等好用的功能。
- csh: 之后另一个广为流传的 shell 是由柏克莱大学的 Bill Joy 设计的，这个 shell 的语法有点类似 C 语言，所以才得名为 C shell ，简称为 csh。
- tcsh: csh 的增强版，加入了命令补全功能，提供了更加强大的语法支持。
- ash: ash 一个简单的轻量级的 Shell，占用资源少，适合运行于低内存环境，但是与下面讲到的 bash shell 完全兼容。
- bash: 由 GNU 组织开发，保持了对 sh shell 的兼容性，是各种 Linux 发行版默认配置的 shell。bash 兼容 sh 意味着，针对 sh 编写的 shell 代码可以不加修改地在 bash 中运行。尽管如此，bash 和 sh 还是有一些不同之处：一方面，bash 扩展了一些命令和参数；另一方面，bash 并不完全和 sh 兼容，它们有些行为并不一致，但在大多数企业运维的情况下区别不大，特殊场景可以使用 bash 代替 sh。

- [shell 有哪些？Zsh 和 Bash 的区别是什么？ - 简书](https://www.jianshu.com/p/a891af6f87e0)

## 常用的 shell 命令

```sh
echo hello
cat /etc/shells
```

## 工具

### MobaXterm

MobaXterm，同样免费版，比 Xshell 强大得多，SSH、SFTP、VNC、RDP 一站式服务，还支持 Multi-Exec，体会一下指挥千军万马的感觉。

### Run-Command

Run-Command，命令行增强工具

启动程序后，按 win+r 后会弹出菜单，提供选择，很多命令又长又难记，还有些对应功能都不清楚，有个这样的可视化的菜单点击起来更方便，软件体积也非常小，不到 1m，绿色单文件。

### pure-bible

- [dylanaraps/pure-sh-bible: 📖 A collection of pure POSIX sh alternatives to external processes.](https://github.com/dylanaraps/pure-sh-bible)
- [dylanaraps/pure-bash-bible: 📖 A collection of pure bash alternatives to external processes.](https://github.com/dylanaraps/pure-bash-bible)
  pure-sh-bible 和 pure-bash-bible，收集汇总了编写 bash 脚本经常会使用到的一些代码片段，以帮助开发者更快的搭建好自己的脚本工具

### openssh-server

- [现在为什么没有黑客了？ - 知乎](https://www.zhihu.com/question/457785980/answer/3089573431)

### hacker-scripts

- [NARKOZ/hacker-scripts: Based on a true story](https://github.com/narkoz/hacker-scripts)
- [有哪些好笑的关于程序员的笑话？ - 知乎](https://www.zhihu.com/question/19909094/answer/2479321850)

## 参考资料

- [star - 觉得 java 后端非常无聊怎么办 - 知乎](https://www.zhihu.com/question/634287230/answer/77913149181)
  - 概要: [图片] [图片] java 开发的，可以看看： https://github.com/TermoraDev/termora
  - 点赞: 184
