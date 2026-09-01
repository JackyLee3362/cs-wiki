---
title: git-sub-module
date: 2025-09-23
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

## 子模块

```sh
# 添加子模块
git submodule add [某个github仓库]
```

## 场景

删除 `gitmodules`

```shell
# 取消关联
git submodule deinit -f <submodule-path>
# 删除 .gitmodules 文件
rm .gitmodules # linux
del .gitmodules
# 更新 Git 的索引以反映文件的删除
git rm --cached .gitmodules
# 提交
git commit -m "Remove .gitmodules file"
```

## 参考资料
