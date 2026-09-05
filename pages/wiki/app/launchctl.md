---
title: launchctl
date: 2025-10-22
draft: true
author: JackyLee
tags:
  - 命令行
categories: 
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---


## launchd 和 launchctl

- launchd 是后台的系统服务管理进程，是运行的核心。
- launchctl 则是用户接口工具，允许你管理和操控由 launchd 运行的进程和服务。

不能直接控制 launchd，只能通过 launchctl 发送命令。

## 遇到的问题，完全杀不死的一个 java 进程

```sh
# 找到 Java 进程号
jps -l

# 根据进程号找到守护进程，如果守护进程是 1 ，则说明是 launchd 启动的
ps -ef | grep 进程号

# 找到 xxx.xxx.xxx
launchctl list | grep 进程号
# 输出> 69817 -9 homebrew.mxcl.tomcat

# 然后
launchctl unload xxx.plist
# 比如 launchctl unload homebrew.mxcl.tomcat.plist 就行
```

## 如果一直报错，比如 launchctl unload failed 5 input/output error

```sh
launchctl remove unload homebrew.mxcl.tomcat
```

## Mac 的守护进程目录

```sh
~/Library/LaunchAgents  # 用户的进程
/Library/LaunchAgents   # 管理员设置的用户进程
/Library/LaunchDaemons  # 管理员提供的系统守护进程
/System/Library/LaunchAgents    # Mac操作系统提供的用户进程
/System/Library/LaunchDaemons   # Mac操作系统提供的系统守护进程
```

## 参考资料

- [Mac 系统的 launchd、守护进程 daemon（2013 笔记整理） - timelyxyz - 博客园](https://www.cnblogs.com/timelyxyz/p/3586136.html)
