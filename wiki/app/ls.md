---
title: ls
date: 2025-09-29
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## ls -l 解释

```sh
> ls -l
total 8384
-rw-r--r--  1  user  group   4096  Jan 01 12:12  filename.txt
-rwxr-xr-x@ 1 jackylee  staff  103440  7  7  2018 jar
```

可以通过 `man ls` 查找 `The Long Format`

分别是

- file mode: 文件类型和权限
- number of links: 硬链接数量
- owner name: 拥有者
- group name: 组名
- number of bytes in the file:
- time
- pathname

文件类型和权限

```sh
# 第一个字符
# - 普通文件 🌟
# b Block special file. 设备文件
# c Character special file. 设备文件
# d 目录 🌟
# l 符号链接 🌟
# p FIFO
# s Socket
# Whiteout

# 第二个字符
# r 表示可读，- 表示非可读

# 第三个字符
# w 表示可写，- 表示非可写

# 第四个字符
# x 表示可执行，- 表示不可执行

[1:文件类型][3:拥有者权限][3:组用户权限][3:其他用户权限]
```

## 颜色

| 颜色                   | 描述                                       |
| ---------------------- | ------------------------------------------ |
| 无色                   | 文件或硬链接                               |
| 粗体蓝色               | 目录                                       |
| 粗体青色               | 指向文件的符号链接。                       |
| 粗体绿色               | 可执行文件（.sh 扩展名的脚本）             |
| 粗体红色               | 归档文件（主要是 tarball 或 zip 文件）     |
| 洋红色                 | 表示图像和视频文件                         |
| 青色                   | 音频文件                                   |
| 黄色配黑色背景         | 管道文件（称为 FIFO）                      |
| 粗体红色配黑色背景     | 损坏的符号链接                             |
| 无色（白色）配红色背景 | 表示设置用户 ID 文件                       |
| 黑色配黄色背景         | 表示设置组 ID 文件                         |
| 白色与蓝色背景         | 显示粘滞位目录                             |
| 蓝色配绿色背景         | 指向其他可写目录                           |
| 黑色配绿色背景         | 当目录同时具有粘滞位和其他可写目录的特征时 |

## 在 /usr/bin 下使用 `ls -l`

会发现拥有者是 root，组名是 wheel

```sh
# 使用该命令查看组名
grep wheel /etc/group
```

## 参考资料
