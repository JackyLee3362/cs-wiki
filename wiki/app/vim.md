---
title: vim
date: 2024-02-20
update_date:
  - 2024-10-16
  - 2024-12-20
  - 2025-03-22
draft: true
author: JackyLee
tags:
  - app/command-line
  - 命令行
categories:
  - wiki/命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 基本操作

| 键位 | 默认行为                         |
| ---- | -------------------------------- |
| w    | 下一个字首                       |
| e    | 字尾                             |
| b    | 上一个字首                       |
| gg   | 文首                             |
| G    | 文尾                             |
| %    | 在匹配的括号来回跳转             |
| f/F  | 向前向后查询<br>`,`和`;`前后移动 |
| t/T  | 向前向后查询                     |

- s 无行为 `noremap s <Nop>`

## 块操作

| 键位 | 默认行为                 | 配置文件中的行为 | 更改默认行为的配置 |
| ---- | ------------------------ | ---------------- | ------------------ |
| diw  | 删除字                   |                  |                    |
| daw  | 删除字以及前后空行       |                  |                    |
| di"  | 删除引号内的内容         |                  |                    |
| da"  | 删除引号以及引号内的内容 |                  |                    |

前面的 `d` 表示删除，可以换成别的

- `c` 表示删除并进入插入模式
- `v` 表示选中

引号`"` 还可以换成

- 方括号 `[`
- 单引号 `'`
- html 标签 `t`

### 查找和替换

/ 向后查找 n 表示下一个，N 表示前一个
? 向前查找

## 寄存器

- [vim 快速粘贴之寄存器的使用 【转载】 - 有你~你是美好滴 - 博客园](https://www.cnblogs.com/zhrngM/p/14087163.html)
- [Vim 实用技巧进阶(第 10 章:复制和粘贴) - Practical.Vim.2nd.Edition • xu3352's Tech Blog](https://xu3352.github.io/linux/2018/11/01/practical-vim-skills-chapter-10)

- Vim 复制粘贴与寄存器
- 在 Vim 中的复制，删除，替换等操作的临时内容，都会存储在寄存器中

### 1 无名寄存器("")

两个双引号，Vim 中叫做无名寄存器。
x,s,d,c,y 等操作，如果不指定寄存器，都是将临时内容放到这个寄存器中，也就是相当于一个默认寄存器。
可以通过 :reg 来查看当前寄存器的值，操作一下，然后查寄存器内容，就明白了。
例如：
复制当前行(yy)，并粘贴(p)。
这里 y 命令会将当前行内容放入寄存器""，按 p 时，会到寄存器""中取内容。

### 2 复制专用寄存器("0)

通过 y 命令复制的内容，会保存到寄存器 0 中。
寄存器的使用是通过"后面跟寄存器名字。
例如：
复制当前行(yy)，
又做了几次删除单词操作(dw)
但是只想粘贴刚才复制的行，那么就不能用无名寄存器""去粘贴了，不能直接 p 进行粘贴，需要用"0p，指定使用寄存器 0，因为"0 里只存放 y 命令存入的内容。

### 3 删除专用寄存器("1-"9)

通过 d 或 c 命令，删掉的内容，会保存打"1-"9 这 9 个寄存器中。
最新删除的内容，会在"1 中，其他顺延。
例如：
删除当前行(yy)
删除当前行(yy)
想复制第一次删除的行，"2p

### 4 命名寄存器("a-"z)

可以将重要内容放到命名寄存器"a-"z 中，一共 26 个。
例如：
把当前行放入寄存器"j 里，"jyy
复制寄存器"j 的内容， "jp

### 5 黑洞寄存器("\_d)

放到这个寄存器的内容，将不会放到任何其他寄存器中，相当于彻底删除内容。
例如：
彻底删除当前行，不放入任何寄存器，"\_dd

### 6 系统剪贴板("+)

通过"+寄存器可以把内容复制到系统剪贴板，也可以从系统剪贴板粘贴内容但 Vim 中。
例如：
复制当前行到系统剪贴板中，"+yy
复制系统剪贴板到 vim 中，"+p

总之，如果要使用一个寄存器，按以下形式 `[双引号][寄存器名][命令]`

## 宏命令

`q` 录制宏命令

```sh
# 录制命令并记录在 d 中
qd
# 开始录制---------
Hdt-j@d
# 结束录制
q
```

1. 其中 `Hdt-` 是普通操作
2. `j` 是换到下一行
3. 然后继续调用 `@d` 直到行尾

## 正则替换

vim: 用 \{-} 代替 \* 表示贪婪匹配

## 插件

- vim-easymotion
- vim-surround
- 文件树

## surround

- 添加 `ys`：`ysiw'`
- 替换 `cs`: `cst`
- 删除 `ds`: `ds"`

官方仓库： [tpope/vim-surround: surround.vim: Delete/change/add parentheses/quotes/XML-tags/much more with ease](https://github.com/tpope/vim-surround)
[vim-surround 使用指南，vim-surround 如何使用](https://gist.github.com/wilon/ac1fc66f4a79e7b0c161c80877c75c94)

## NeoVim

- [韦易笑 - 要从 vim 切换到 neovim 吗？ - 知乎](https://www.zhihu.com/question/517490969/answer/87006875538): 答主认为不要，觉得 neovim 太多小 bug
- [你们的 vim 配置都换成 lua 了吗？ - 知乎](https://www.zhihu.com/question/445290918/answer/2351039201)
- [一些编程环境的配置 (Neovim + Alacritty + Oh-My-Zsh + tmux) - 知乎](https://zhuanlan.zhihu.com/p/675947763)

## VsCode vim

- [Simple Vim - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=jpotterm.simple-vim) vscode 中的 vim: 2024-10-20 22:21
- [VSCodeVim/Vim: :star: Vim for Visual Studio Code](https://github.com/VSCodeVim/Vim)~~：不使用了

## IntelliJ vim

- [我的 IntelliJ IDEA Vim 插件配置 | Verne in GitHub](https://einverne.github.io/post/2020/12/my-idea-vimrc-config.html)
- [全网最详细 IDEAvim 配置(.ideavimrc)\_idea vim-CSDN 博客](https://blog.csdn.net/Leivzy/article/details/132001375)
- [How do I tell IntelliJ IdeaVim to re-source the .ideavimrc - Stack Overflow](https://stackoverflow.com/questions/46719530/how-do-i-tell-intellij-ideavim-to-re-source-the-ideavimrc)
- [ideavim/doc/IdeaVim Plugins.md at master · JetBrains/ideavim](https://github.com/JetBrains/ideavim/blob/master/doc/IdeaVim%20Plugins.md): 2024-10-20 22:21
- [IDEA + Vim = 起飞 - 知乎](https://zhuanlan.zhihu.com/p/419108493)

## vim 键位设计原则

vim 不使用 ctrl/cmd 键位，ctrl/cmd 键位让位于应用

## ~~VimScript~~

- [前言 · 笨方法学 Vimscript · 看云](https://www.kancloud.cn/kancloud/learn-vimscript-the-hard-way/49321): 不使用 vim-script 了

## 弃用

- [vscode Vim 与 终端 Vim 配置 - Niku's Blog](https://www.nikunokoya.com/posts/vscodevim/#%E6%88%91%E7%9A%84-terminal-vim-%E9%85%8D%E7%BD%AE)
- [如何评价 Vim9？ - 知乎](https://www.zhihu.com/question/364528657/answer/2702570787)
- [如何评价 Vim9？ - 知乎](https://www.zhihu.com/question/364528657/answer/3222052719)
- ~~2024/10/20-22:20 - [daipeihust/im-select: 📟 Switch your input method through terminal](https://github.com/daipeihust/im-select)~~
- ~~[justinmk/vim-sneak: The missing motion for Vim :athletic_shoe:](https://github.com/justinmk/vim-sneak)~~: vim 跳转插件，不用了

## 参考资料

- [Vim 有什么奇技淫巧？ - 知乎](https://www.zhihu.com/question/27478597/answer/2777381978)
- [Vim 到底可以配置得多漂亮? - 知乎](https://www.zhihu.com/question/26248191/answer/2945715717)
- [138 条 Vim 命令、操作、快捷键全集 - 知乎](https://zhuanlan.zhihu.com/p/58361985)
- [为什么还有人用 VIM？ - 知乎](https://www.zhihu.com/question/547708456/answer/3046107298)
- [为什么还有人用 VIM？ - 知乎](https://www.zhihu.com/question/547708456/answer/99822539469)
- [Vim 到底可以配置得多漂亮? - 知乎](https://www.zhihu.com/question/26248191/answer/3214084410)
- [vim 自定义指导(一)——自动补齐括号+tap 跳出括号 - 知乎](https://zhuanlan.zhihu.com/p/572560110)
- [精通 VIM ，此文就够了 - 知乎](https://zhuanlan.zhihu.com/p/68111471)
- [编辑神器 Vim 新教程出炉，GitHub 3400 星，复杂命令轻松搞定 - 知乎](https://zhuanlan.zhihu.com/p/222675885)
- [为什么看似简陋的 vim 在熟练的人手中如此的神乎其技？ - 知乎](https://www.zhihu.com/question/433183204/answer/2304897093)
- [VIM 这么难用，为啥这么多人热衷？ - 知乎](https://www.zhihu.com/question/437735833/answer/1664533942)
- [VIM 学习笔记 命令行模式 (Command-line Mode) - 知乎](https://zhuanlan.zhihu.com/p/76531156)
- [有什么使用 Vim 的小技巧可以分享？ - 知乎](https://www.zhihu.com/question/636018229/answer/3386613023)
- [为什么看似简陋的 vim 在熟练的人手中如此的神乎其技？ - 知乎](https://www.zhihu.com/question/433183204/answer/1712185019)
- [VIM 这么难用，为啥这么多人热衷？ - 知乎](https://www.zhihu.com/question/437735833/answer/1733228460)
- [Vim 编辑器好用吗? - 知乎](https://www.zhihu.com/question/321998349/answer/820964957)
- [有哪些好用到爆的 vim 插件？ - 知乎](https://www.zhihu.com/question/23590572/answer/1076021258)
- [VIM 这么难用，为啥这么多人热衷？ - 知乎](https://www.zhihu.com/question/437735833/answer/2160324348)
- [Tutorial · fatih/vim-go Wiki](https://github.com/fatih/vim-go/wiki/Tutorial)
- [Vim Awesome](https://vimawesome.com/)

## 附录

### vim服务器配置

```ini
" 设置语法高亮
syntax enable
syntax on

" 设置在光标距离窗口顶部或底部一定行数时，开始滚动屏幕内容的行为
set scrolloff=5
set cursorline

"Vim 会在您输入搜索模式的过程中逐步匹配并高亮显示匹配的文本
set incsearch

" 禁用命令超时 / 禁用映射超时
set notimeout

"--在搜索时忽略大小写
set ignorecase

"--将搜索匹配的文本高亮显示
set hlsearch

" 设置显示行号(或者set nu) , 取消用set nonumber/nu!
set number
set relativenumber

" 剪贴板设置
set clipboard=unnamed

" 行间移动
noremap J <C-d>
noremap K <C-u>

" 行内移动
noremap H ^
" noremap L $ 取消 $
noremap L g_

" 复制
noremap sp "0p
```
