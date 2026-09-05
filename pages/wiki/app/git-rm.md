---
title: git rm 移除文件
description:
date: 2026-09-05
update_date:
draft: false
author: JackyLee
tags:
  - Git
  - 版本管理
categories:
  - 命令行
comment: true
---
## 从暂存区移除文件

```sh
# 将文件从 Git 跟踪中移除，同时删除本地文件
git rm 文件名
```

## 仅从暂存区移除（保留本地文件）

```sh
# 取消对该文件的跟踪，但保留本地工作区的文件
git rm --cached 文件名
```

## 递归移除目录

```sh
# 移除整个目录及其内容
git rm -r 目录名/
```

## 强制移除

```sh
# 强制移除，即使文件有未提交的修改
git rm -f 文件名
```

## 常见场景

### 误将文件加入跟踪后取消

```sh
# 不小心 git add 了大文件或敏感文件，想取消跟踪但保留文件
git rm --cached 文件名
# 然后添加到 .gitignore 防止再次跟踪
echo "文件名" >> .gitignore
```
