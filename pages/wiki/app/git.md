---
title: git
date: 2026-08-19
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 常用命令

### 一、仓库基础操作

![[git-init#初始化本地仓库]]

![[git-clone#克隆远程仓库到本地]]

### 二、提交与修改

![[git-status#查看当前状态]]

![[git-add#添加文件]]

[[git-config]]

### 二、仓库

```sh
# 添加到暂存区
git add .
# 从暂存区移除
git rm --cached [文件]

# 提交
git commit -m
# 推送
git push
# 拉取
git pull
# 切换分支
git checkout
# 切换分支
git switch
# 查看状态
git status
# 查看状态(简洁版)
git status -s

# 查看仓库创建了多久
git log --reverse
# 查看仓库大小
git count-objects -vH
```

[[git-init]]
[[git-add]]
[[git-branch]]

## FAQ

### Git 如何恢复本地分支

[[git-reflog#恢复本地已删除分支]]

### git如何对历史搜索

### 本地 Git 仓库删除大 object

- [Git - git-gc Documentation](https://git-scm.com/docs/git-gc/zh_HANS-CN)
- [git仓库清理--"保姆级"教程这是一篇关于Git仓库清理的文章; 或许你现在还用不到里面的操作;但是看完保证你会有不少 - 掘金](https://juejin.cn/post/7024922528514572302)

最简单的方法，删除远程仓库，重新上传并重新提交，缺点是会丢失历史数据，

2025-09-27 由于之前加入 rime-ice 仓库，导致仓库过大，只好按照这个方法

- [git项目大小优化笔记,删除历史提交中的大文件 - 凉游浅笔深画眉 - 博客园](https://www.cnblogs.com/fuhua/p/15527023.html#git%E9%A1%B9%E7%9B%AE%E5%A4%A7%E5%B0%8F%E4%BC%98%E5%8C%96%E7%AC%94%E8%AE%B0%E5%88%A0%E9%99%A4%E5%8E%86%E5%8F%B2%E6%8F%90%E4%BA%A4%E4%B8%AD%E7%9A%84%E5%A4%A7%E6%96%87%E4%BB%B6)

- [git仓库清理--"保姆级"教程这是一篇关于Git仓库清理的文章; 或许你现在还用不到里面的操作;但是看完保证你会有不少 - 掘金](https://juejin.cn/post/7024922528514572302)

### git 文件名大小写敏感

> 2025-03-22 clone joyful-pandas 遇到

![20250322002110-2025-03-22](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/20250322002110-2025-03-22.png)

原因是 windows 系统大小写不敏感，而 git 大小写敏感

- [Windows 大小写不敏感导致的 git 冲突 | Finisky Garden](https://finisky.github.io/git-is-case-sensitive-while-file-system-is-not/)

### git CR/CRLF 是怎么解决的？

### 前言

平常使用 `git add .` 或者 `git push|pull|clone` 等命令，已经无法满足各种奇怪的需求了，

在使用 Github 的时候，由于对【本地分支】和【远程分支】理解不够深刻，难免会出现各种问题

所以本文章持续记录使用 Git 时遇到的各种复杂场景

### 1 本地分支相关

#### 1.1 签出会覆盖本地修改

场景描述：

通常我会在 `dev` 分支上操作，然后细粒度地提交 commit，上传到 github 上形成一个 pull-request，然后 `main` 再接受 pr，合并成一个

但是有时候会忘记切换分支（比如现在就是），直接在 main 上更改

在 vscode 的状态栏就会出现 `*`，此时想换到 `dev` 分支

直接切换会出现

!签出会覆盖本地修改的图片

该提示下的三个选项分别是什么意思呢？

1. 储藏并签出：希望【暂存区】仍然在当前分支，然后切换到另一个分支
2. 迁移更改：希望将【暂存区】的内容切换到另一个分支，可能要处理冲突问题
3. 强制签出：（不推荐）直接放弃当前分支（比如 `main`）未提交的 `commmit`，然后切换为分支 `dev`

所以该场景我们需要的是【迁移更改】

## 参考资料

- [深入理解 git 合并操作 | Shall We Code?](https://waynerv.com/posts/git-merge-intro/)
- [github/gitignore: A collection of useful .gitignore templates](https://github.com/github/gitignore)
- [GitHub does dotfiles - dotfiles.github.io](https://dotfiles.github.io/)

- [为什么 Git 的教程都那么繁杂？ - 知乎](https://www.zhihu.com/question/594294987/answer/3614054565)
- [在开发过程中使用 git rebase 还是 git merge，优缺点分别是什么？ - 知乎](https://www.zhihu.com/question/36509119/answer/2949504859)
- [为什么 Git 的教程都那么繁杂？ - 知乎](https://www.zhihu.com/question/594294987/answer/3027078087)
- [想法：git 问题](https://www.zhihu.com/pin/1885383452485997432?native=0)
- [lenck - 为什么要先 git add 才能 git commit ？ - 知乎](https://www.zhihu.com/question/19946553/answer/1937683960948856692)
  - 概要: 前言你是否也曾有过这样的经历：熟练地敲下 git add . 和 git commit -m &#34;...&#34;，感觉自己已经掌握了版本控制的奥秘。但当 merge 冲突的红色警告占满屏幕，或者当你想撤销一次错误的提交时，心中是否会涌起一丝恐慌？git reset --hard 就像一个充满诱惑又极其危险的红色按钮，你渴望按下它，却又害怕它会摧毁一切。如果这听起来很熟悉，那么恭喜你，这篇文章正是为你量身打造的。许多教程教会了我们 如何 使用 Git 命令，但很少有…
  - 点赞: 474

- [Null - 中国的高校计算机教育存在哪些问题？ - 知乎](https://www.zhihu.com/question/265513614/answer/3343125574)
  - 概要: 1.校园网不带梯子 2.不教 git，make 等现代工具链 3.代码量不足，课程报告过多，杂七杂八的课太多，比如物理实验 4.教材老旧，ppt 跟着老旧，念他的人不免的也老旧。 5.核心课程缺失或者不重视，比如编译原理，有的学校甚至不开 6.Coding 和计算机原理和数学原理没法很好的融合统一，Coding 的课没数学原理，数学原理的课没计算机，计算机原理的课没 coding。 7. 课程报告，毕业设计能不能别再用什么 word 了，小报告 markdown 大报告 latex…
  - 点赞: 4339

- [一个小号 - 在开发过程中使用 git rebase 还是 git merge，优缺点分别是什么？ - 知乎](https://www.zhihu.com/question/36509119/answer/1990894567)
  - 概要: rebase 和 merge 不是二选一的关系，要协同使用，毕竟作者设计出两个命令不是让你挑一个来用的。 一个最简单的模型，从 master 分支 checkout 出几个本地 feature 分支，你或者你的团队在协同开发某个 feature-a 时，可能别人已把 feature-b 的代码 merge 回 master 了，所以应该及时将 master 的改动 rebase 到你的本地分支，顺便 fix conflicts。即： $ git switch feature-a $ git rebase master fix conflicts... $ git reba…
  - 点赞: 1613

- [七哥在成长 - 如何克服解决 Git 冲突的恐惧症？ - 知乎](https://www.zhihu.com/question/27507789/answer/2500277042)
  - 概要: 最近新入职，在提交 pr，然后 code review 后，关于分支合并我产生了一个小问题，那就是 squash merge 和 rebase merge 到底有什么区别呢？ 公司为什么要求使用 git rebase merge 呢？之前我们都是直接一把梭 git merge 分支名来合并。 [图片] 带着这两个疑问我们以一个实际的开发场景来搞明白 merge, squash merge, 和 rebase merge 之间的区别，接着往后看吧。举个例子，如果我们有一个项目，它包含一个 master 主分支，有 3 个提交，分别…
  - 点赞: 159
- [quink - 5 分钟学不会 git - 知乎](https://zhuanlan.zhihu.com/p/1906160397867810885)

- [Git 入门图文教程(1.5W 字 40 图)🔥🔥--深入浅出、图文并茂 - 安木夕 - 博客园](https://www.cnblogs.com/anding/p/16987769.html)
- [git bash 报错 fatal: detected dubious ownership in repository at 的解决方法 - Clotho_Lee - 博客园](https://www.cnblogs.com/live41/p/17290417.html)
- [linux - "git submodule update" failed with 'fatal: detected dubious ownership in repository at...' - Stack Overflow](https://stackoverflow.com/questions/72978485/git-submodule-update-failed-with-fatal-detected-dubious-ownership-in-reposit)

- [rcbb.cc - 为什么 Git 的教程都那么繁杂？ - 知乎](https://www.zhihu.com/question/594294987/answer/1896625057062704247)
  - 概要: 团队开发中，遵循一个合理、清晰的 Git 规范，是非常重要的。 否则，每个人都提交一堆杂乱无章的 commit 和 分支，项目很快就会变得难以协调和维护。 分支规范 master：主分支。主分支，始终与正式环境代码保持一致。 不能将代码直接 commit 到该分支，仅合并 develop 在测试服验证完成的代码。 develop：开发分支。开发分支，在测试环境验证过的分支请求合并到该分支。 不能将代码直接 commit 到该分支，合并 feature、fixbug 分…
  - 点赞: 331
- [小高笔记 - 为什么 Git 的教程都那么繁杂？ - 知乎](https://www.zhihu.com/question/594294987/answer/90657535810)
  - 概要: 我认为在实际工作中，不会用到那么复杂的 git 命令，只需要记住几个常用的 git 命令即可，以下是每个常用 Git 命令的 具体使用场景示例，我会用贴近实际开发的案例说明，让你快速掌握每个命令的用法：一、仓库基础操作 初始化本地仓库：git init # 进入你的项目文件夹 cd my-project # 初始化本地仓库 git init 克隆远程仓库到本地：git clone # 克隆远程仓库到本地 git clone https://github.com/user/repo.git # 克隆指定分支 git …
  - 点赞: 675

- [Cv大法代码酱 - 为什么要先 git add 才能 git commit ？ - 知乎](https://www.zhihu.com/question/19946553/answer/1968639801591854084)
  - 概要: 谢邀。 这个问题我带的实习生几乎人手问一遍，有些工作三五年的老同事，虽然天天用，但你要是冷不丁问他，他可能也得愣一下，然后憋出一句“规定就是这样呗”。 这问题，问得是真好。它一针见血地戳到了Git设计的核心灵魂。你以为这是个操作问题，其实这是个哲学问题。 今天我就豁出去了，把压箱底的经验和思考都掏出来，争取用人话把这事儿给你讲透。这篇回答可能有点长，信息量也大，但我保证，你耐心看完，不仅能彻底明白为啥…
  - 点赞: 500
