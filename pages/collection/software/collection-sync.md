---
title: Awesome 同步类工具
date: 2025-11-01
update_date:
  - 2026-08-15
draft: true
author: JackyLee
tags:
categories:
  - 软件
cover:
  #   image:
  hidden: false
comment: true
showtoc: true
tocopen: false
---

## 网盘类

- [[nextcloud]]
- FileRun

## 同步类

- [[copyparty]]
- rsync
- NFS
- SMB
- syncthing: [[syncthing]]
- [[rclone]]

同步投屏四件套：

- Syncthing, Localsend, Scrcpy, Spacedesk
- Syncthing：跨平台的文件同步工具，我的所有电脑、手机、平板都在用
- LocalSend：跨平台的局域网传输工具，会用水果给你的设备取名，非常有爱
- Scrcpy：安卓投屏工具，很快很清晰，支持
- USBSpacedesk：可以把平板电脑当成 PC 的扩展屏使用

## anlink

手机电脑投屏工具

免费的手机投屏到电脑的工具，可以在电脑上操作手机，用鼠标点击，同步无延迟，画质好，还没有水印，投屏时手机可以息屏，电脑正常操作，也可以手机点开视频在电脑上看。

## chfsgui

局域网文件互传工具

电脑文件快速发送到手机，还在用微信文件传输助手吗，若是几百 m，几 g 的大文件那就非常慢了，用这个工具不仅传输速度超级快，还不用担心隐私问题，只需要手机和电脑在同一个网络就行，非常方便。

## FileGee

跨盘备份
【FileGee】定义任务，定义目的和源，速度快，稳定。

可以镜像，或者双向同步的，只不过我很少用，我拿它做备份工具，而不是同步工具。

##

## 参考资料

- 文件传输解决方案[怎么将超大的文件传输给别人？ - 知乎](https://www.zhihu.com/question/334217095/answer/1956003579182714961)
- [怎么将超大的文件传输给别人？ - 知乎](https://www.zhihu.com/question/334217095/answer/2746874302)
- [找不到北 - 怎么将超大的文件传输给别人？ - 知乎](https://www.zhihu.com/question/334217095/answer/1956003579182714961)
  - 概要: 两边电脑打开，python 打开，IPv6 拉个 socket，直接传，完事。 两边电脑打开，python 打开，路由/光猫改 NAT1，从机开 Natter，IPv4 拉个 socket，直接传，完事。 两边电脑打开，python 打开，从机开 ngrok，IPv4 拉个 socket，直接传，完事。 两边电脑打开，IPv6 拉个 ftp 服务器，直接传，完事。 两边电脑打开，路由/光猫改 NAT1，从机开 Natter，IPv4 拉个 ftp 服务器，直接传，完事。 两边电脑打开，从机开 ngrok，IPv4 拉个 ftp 服务器，直接传，完…
  - 点赞: 1173
