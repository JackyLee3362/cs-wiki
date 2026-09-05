---
title: git-sparse-checkout
date: 2025-03-29
update_date:
  - 2025-11-14
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

## 稀疏检出

允许你只检出（checkout）某些目录或者文件，而不是仓库中的全部内容。
适合于大型仓库（如 Monorepo）——你只关心或需要工作区中的某个子目录或文件，而不是整个仓库。

场景：如果想对某个仓库提交代码，但是整个项目又太大，只想拉取其中的一部分，可以采用稀疏拉取方案

## 稀疏拉取

```sh
# 拉取分支
git clone --filter=blob:none --no-checkout [仓库地址] --branch [分支]
# --filter=blob:none: 只克隆 Git 仓库的元数据、提交记录和树结构，不会下载所有内容，文件实际内容将在后续需要时下载
# --no-checkout 克隆仓库后，不会自动把文件检出到工作区（不会自动生成工作目录下的代码文件）。
#               仓库只会保留 .git 信息和所有历史对象，但不会创建源代码文件。
# --branch 指定分支，减少不必要的数据传输和存储
# 我们将得到一个“轻量未检出”的仓库

# 进入仓库
cd [仓库目录]

# 在本地的仓库中开启稀疏检出（Sparse Checkout）模式
# 默认是在当前仓库的 .git/config 里设置，不会影响全局配置。
git config core.sparsecheckout true

# 🌟稀疏检出，希望工作区保留的路径（文件或文件夹），可以是一个或多个
git sparse-checkout set xxx yyy/
# 这里的含义就是 xxx 就是某个文件，yyy/就是某个目录

# 检出 main
git checkout main
```

## 参考资料
