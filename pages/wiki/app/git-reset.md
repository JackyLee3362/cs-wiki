---
title: git-reset
date: 2025-09-23
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

## 撤销本地暂存

```sh
git reset HEAD .
```

## 本地撤销提交

这个是将原来的提交撤回，适用本地

```sh
git reset [位置]
# 最常用
git reset HEAD^
git reset HEAD~2
# 来自 vs-git
git reset --soft HEAD~

# 区别
## 保留原始代码
git reset --soft
## 不保留原始代码
git reset --hard
```

- `--soft` 会将 HEAD 移动到指定的提交，但不会更改工作目录或暂存区的内容。这意味着被重置的提交将会被移除，但所有的更改仍然会保留在暂存区（index）中。你可以在此基础上进行新的提交。

## FAQ

### 如何将 branch 回退到之前的记录？

![git图片](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/20250224172551-2025-02-24.png)

```sh
git branch -f main HEAD~3
```

- `HEAD~`: 的是当前 HEAD 的前 n 个提交。最常用的是 `HEAD~1`（等同于 `HEAD~`），表示当前提交的父提交。
- `HEAD~2`: 表示当前提交的祖父提交（即父提交的父提交）
- `HEAD~` 和 `HEAD^` 的主要区别
  - 多父提交的处理:
    - `HEAD~` 只考虑线性历史，即无论提交是否是合并提交，`HEAD~n` 始终表示当前提交的第 n 个祖先提交。
    - `HEAD^` 在处理合并提交时特别有用，因为合并提交有多个父提交。`HEAD^` 和 `HEAD^1` 是第一个父，`HEAD^2` 是第二个父。
  - 可读性:
    - `HEAD~` 更适合用于简单的线性历史，通常用于表示相对位置的语法。
    - `HEAD^` 更适合用于需要区分父提交（特别是在合并提交时）的情况。

### 远程还原提交

新建一个提交，和之前的提交反向操作

```sh
git revert [位置]
git revert HEAD
```

## cherry pick

```sh
git cherry-pick C2 C4
```

![20250225111242-2025-02-25](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/20250225111242-2025-02-25.png)

## 移除暂存区的文件

来自 vs-git: 移除暂存区的文件

```sh
git rm --cached -r -- .
```
