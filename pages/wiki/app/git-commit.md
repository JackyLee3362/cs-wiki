---
title: git-commit
date: 2024-12-20
update_date:
  - 2025-03-12
  - 2025-05-15
  - 2025-09-23
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

## 提交

```sh
# 将暂存区内容纳入Git提交记录
git commit -m "message"
# git add . 和 git commit -m "message" 合在一起
git commit -am "message"
```

## FAQ

### 如何修改最新的 commit message

```sh
git commit --amend
git commit --amend -m 'new message'
git commit --amend -m "new message"
```

### 如何修改中间的 commit message

```sh
git log --oneline

git rebase -i [start-point] [endpoint]
# 或者
git rebase -i HEAD^3
```

## 最佳实践

文件中搜索 Rime

## 语义化提交

- [语义化版本 2.0.0 | Semantic Versioning](https://semver.org/lang/zh-CN/)
- [语义化提交 · Git 学习笔记](https://git.book.trendsoft.org/attachments/semantic_commit.html)
- [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)

## Git-Emoji

- [gitmoji | An emoji guide for your commit messages](https://gitmoji.dev/)
- [Git-emoji 中文版 – 就是这个范儿](https://www.thisfaner.com/o/git-emoji/)
- [GitHub - hooj0/git-emoji-guide: :pencil2: git commit emoji guide Git提交注释使用表情指北](https://github.com/hooj0/git-emoji-guide)
- [Commit 格式规范 - Apache Doris](https://doris.apache.org/zh-CN/community/how-to-contribute/commit-format-specification/)

## 参考资料

- [如何写好 Git commit log? - 知乎](https://www.zhihu.com/question/21209619/answer/52395262030)
- [如何规范你的 Git commit？ - 知乎](https://zhuanlan.zhihu.com/p/182553920)
- [Git commits 历史是如何做到如此清爽的？ - 知乎](https://www.zhihu.com/question/61283395/answer/186725319)
- [Git commits 历史是如何做到如此清爽的？ - 阿杰鲁 的回答 - 知乎](https://www.zhihu.com/question/61283395/answer/2402507648)
- [2020 你应该知道的 Git Commit 规范-阿里云开发者社区](https://developer.aliyun.com/article/929807)
- [tbaggery - A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [如何规范你的 Git commit？](https://zhuanlan.zhihu.com/p/182553920)
- [在实际开发项目中如何用好 git？ - 知乎](https://www.zhihu.com/question/60110166/answer/2561561742)
- [有什么 Git 经典操作场景？ - 知乎](https://www.zhihu.com/question/577630603/answer/2837131423)
- [血泪教训之请不要再轻视 Git —— 我在工作中是如何使用 Git 的 - 知乎](https://zhuanlan.zhihu.com/p/250493093)
