---
title: everything
date: 2026-08-17
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## everything 使用

[高效搜索神器 Everything 最全使用技巧(一篇看全)及详细功能帮助教程(更新第 10 次) —— 知乎](https://www.zhihu.com/tardis/zm/art/409783518)

[everything](https://zhuanlan.zhihu.com/p/409431144)

## 高级搜索

必含单词：`nopath:java`，则`jav.md`无法匹配

必含短语 ...

任一单词 ...

不含单词 ...

## 搜索某文件下的内容

语法

```cmd
D:\path\to\dir file
```

或者帮助-语法帮助

## 指定搜索日期

```everything
dateaccessed:<date> 或 da:<date> 指定访问时间
datecreated:<date> 或 dc:<date> 指定创建日期
datemodified:<date>或 dm:<date> 指定修改日期 如搜索最近 24 小时修改 dm:last1days
daterun:<date>或 dr:<date>指定打开或运行日期
```

## 大小过滤

size:>1mb

## 场景

查找拓展名为 js，且创建时间是在 2022/1-2022/4 月的文件

```cmd
ext:js dc:2022/1-2022/4
```

## 参考资料

- [利用 Everything 1.5 进行代码管理 - 讨论分享 - 小众软件官方论坛](https://meta.appinn.net/t/topic/51153)
