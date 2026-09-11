---
title: degit
description: 从 Git 仓库拉取模板快照，不带提交历史的最简脚手架方式
date: 2026-09-10
draft: true
author: JackyLee
tags:
  - nodejs
  - git
  - 脚手架
categories:
  - 命令行
comment: true
---

## 概述

[degit](https://github.com/Rich-Harris/degit) 由 Svelte 作者 Rich Harris 开发（Node.js），解决一个极简问题：**把某个 Git 仓库的「最新快照」拷贝到本地目录，不带 `.git` 历史**。当你的「模板」就是一个普通仓库时，不需要 cookiecutter/copier 那套变量渲染，`degit` 是最轻的选择——Svelte、Vite 早期的官方脚手架提示就用了 degit。

工作方式：从 GitHub/GitLab/Bitbucket/Sourcehut 下载 tarball（不 clone），解压到目标目录，秒级完成。

## 使用

```sh
npx degit user/repo my-project            # 默认分支
npx degit user/repo#dev my-project        # 指定分支
npx degit user/repo#v2.0.0 my-project     # 指定 tag / commit
npx degit user/repo/subdir my-project     # 只取子目录

# 保留 .git 但将模板提交改为一次初始提交
npx degit --git user/repo my-project
# 强制覆盖非空目录
npx degit --force user/repo my-project
```

## 定位与局限

- **无变量渲染、无交互问答**：模板里写死什么就生成什么，想要参数化必须配合其他工具（如生成后再跑 `sed`，或换用 [[cookiecutter]]）
- **无升级机制**：与 [[copier]] 的 update 能力完全相反
- 适合「模板即成品」的团队：仓库里维护一个 golden template，新项目直接快照拉取

## 参考资料

- [GitHub - Rich-Harris/degit: makes copies of git repositories](https://github.com/Rich-Harris/degit) #todo
- 相关笔记：[[cookiecutter]]、[[copier]]
