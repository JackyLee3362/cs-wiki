---
title: Windows Context Menu
date: 2024-10-20
draft: false
author: JackyLee
tags:
  - Windows
categories:
  - Windows
comment: true
---

## Intro 介绍

之前在 2024 年 2 月 9 号的时候，写过一些笔记，现在再细化一下

首先是 `win+r` 输入 `regedit` 打开注册表编辑器

## 右键背景打开

在注册表编辑器中使用 `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\background\shell` 中新建 `IDEA` 项 以及 `IDEA/command` 项

在 `IDEA` 项目中定义显示文本以及 `ico` 文件，`IDEA/command` 中定义具体的命令

## 右键项目打开

以 idea 为例，在 `HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell` 中新建 `IDEA` 项和 `IDEA/command` 项

![image.png](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2024/md/20241020170354.png)

## 注册表参数含义

- `%1` 表示文件路径，是当前文件的路径，可以是长路径，也可以是短路径
- `%L` 表示文件长路径，是当前文件的固定长路径
- `%V` 表示文件路径，在没有动作的前提下，通常也是

## Ref 参考文献

- [idea 添加目录 右键打开项目 - 陈同学 - 博客园](https://www.cnblogs.com/chencidi/p/14060921.html)
  > 2024/10/20-22:20
- [高级用户的 Windows 注册表 - Windows Server | Microsoft Learn](https://learn.microsoft.com/zh-cn/troubleshoot/windows-server/performance/windows-registry-advanced-users)
  > 2024/10/20-22:20
- [Windows 自定义右键菜单 | 愧怍](https://kuizuo.cn/docs/windows-custom-right-click-menu/)
- [Windows 下将“使用 VSCode 打开”添加至右键菜单\_add open with visual studio code to right click me-CSDN 博客](https://blog.csdn.net/ArthurCaoMH/article/details/89949447)
