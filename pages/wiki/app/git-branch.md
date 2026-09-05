---
title: git-branch
date: 2026-08-19
draft: true
author: JackyLee
tags:
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 查看当前分支

```sh
# 查看当前分支
git branch
git branch --list
```

## 显示所有分支

```sh
git branch --all
```

## 创建分支

```sh
git branch 分支名
```

## 强制移动分支指针

```sh
# 让 main 分支强制指向 HEAD 前 3 个提交
git branch -f main HEAD~3
```

## 查看关联信息

```sh
git branch -vv
```

## 取消关联上游

```sh
git branch --unset-upstream
```

## 本地新建远程对应分支

```sh
# git 本地新建远程对应分支
git checkout -b local-branch-name origin/remote-branch-name
```
