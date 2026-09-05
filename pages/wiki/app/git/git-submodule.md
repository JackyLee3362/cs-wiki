---
title: git submodule 子模块
date: 2025-09-23
draft: false
author: JackyLee
tags:
  - Git
  - 版本管理
categories:
  - 命令行
comment: true
---
## 添加子模块

```sh
# 添加子模块
git submodule add [某个github仓库]
```

## 删除子模块

```shell
# 1. 逆初始化/取消关联: 删除 submodule 内部的 .git 配置
git submodule deinit -f 子模块路径

# 删除 .gitmodules 文件中的内容，如果没有子模块，直接删除
rm .gitmodules

# 更新 Git 的索引以反映文件的删除
git rm --cached .gitmodules

# 提交
git commit -m "Remove .gitmodules file"
```

## 参考资料
