---
title: neovim
date: 2025-04-28
update_date:
  - 2025-10-11

draft: true
author: JackyLee
tags:
categories:
  - 命令行
comment: true
---

## 安装与启动

```sh
# windows
scoop install neovim
# mac
brew install neovim
# linux
dnf install neovim
```

## 使用方法

## 命令模式

### 内置命令

```sh
# 查看 Lazy 插件信息
:Lazy
# 查看 Lazy 额外信息
:LazyExtras
# 查看寄存器
:h registers
# 行替换
:2,5s/<from>/<to>/g
# 全局替换
:%s/<from>/<to>/g
# 新建一个 tab
:tabnew
:tabnext
:tabprevious
:tabclose
```

### Lua 命令

```sh
# 查看配置文件路径
:= vim.fn.stdpath("config")
# 查看全局配置变
:= vim.opt.xxx
# 查看 lazyVim 的数据文件
:= vim.fn.stdpath("data")
```

## 快捷键

- ctrl + / 显示命令面板
- ctrl + hjkl 移动焦点
- H 显示/隐藏部分文件，比如 .gitignore
- shift + h/l 切换 tab
- space + b + d 关闭 :tab(buffer)
- qa 退出 nvim

- s 快速跳转
- f 查找下一个，使用 f/; 和 F/, 跳到下一个/上一个
- gd 跳转定义
- gc 注释
- `>>` 和 `<<` 缩进/取消缩进
- `[` 和 `]` + e 下一个/上一个错误
- `[` 和 `]` + a 函数参数跳转
- diw/ciw/viw 或者 `di"/ci"/vi"`
- u 撤销 ctrl+r 重做

- 空格+空格 选择最近文件
- 命令模式中 `:= vim.fn.stdpath("config")`

api: `vim.keymap.set(mode, lhs, rhs, opts)`

- mode: n 普通模式/v 可视模式 /i 输入模式 /c 命令模式 / (table)
- lhs/rhs: `ctrl+a` -> `<C-a>` / `alt+a` -> `A-a`
- opts:
  - `silent` 是否在 command line 中显示命令，默认是 false
  - `remap` 是否递归显示，默认 false

> lua 中 table 包括 `{1, 2, 3}`, `{1, 2, a=3}` 和 `{a=1, b=2, c=3}`

### Buffer 相关命令

```sh
:buffers
# 切换到具体数字
:buffer [数字]

# vim 中分屏操作
:vsplit  # 左右分屏
:split  # 上下分屏

# 移动 window 光标
# <C-w>+hjkl

# 关闭窗口
# <C-w>+c

# 关闭所有其他窗口
# <C-w>+o

# 查看帮助文档
:h :buffers
# 此时查看 buffers 没有帮助文档
# 要显示所有 buffers，需要使用 buffers!
```

## 快捷键设置

### 宏操作

```sh
<C-a> 数字+1
<C-x> 数字-1
```

## 插件

### Nvim-tree

:NvimTreeToggle

- 或者命令 :w 文件名
- 新建文件使用 `a`
- 复制 y
- 剪切 x
- 重命名 r

## 替换模式

```sh
# 命令模式下使用
:help pattern
```

总之使用 `:s/\v(...)/`

## 插件

- [hat0uma/csvview.nvim: A Neovim plugin for CSV file editing.](https://github.com/hat0uma/csvview.nvim?tab=readme-ov-file)

## 多配置启动

```sh
alias v='nvim' # default Neovim config
alias vz='NVIM_APPNAME=nvim-lazyvim nvim' # LazyVim
alias vc='NVIM_APPNAME=nvim-nvchad nvim' # NvChad
alias vk='NVIM_APPNAME=nvim-kickstart nvim' # Kickstart
alias va='NVIM_APPNAME=nvim-astrovim nvim' # AstroVim
alias vl='NVIM_APPNAME=nvim-lunarvim nvim' # LunarVim
alias vl='NVIM_APPNAME=nvim-learn nvim' # 学习 nvim 目录，读取 ~/.config/vim-learn 目录下的配置
```

## 参考资料

- [neovim 入门指南(一)：基础配置 - youngxhui - 博客园](https://www.cnblogs.com/youngxhui/p/17730419.html)
- [vscode-nvim - 云崖君 - 博客园](https://www.cnblogs.com/YunyaSir/p/15523927.html)
- [wsdjeg - 要从 vim 切换到 neovim 吗？ - 知乎](https://www.zhihu.com/question/517490969/answer/1957800602127008220)
  - 概要: 2025 年 10 月 11 日更新： 看到 telescope 最近半年几乎没有什么更新，而且似乎也太复杂了。因此自己写了一个模糊筛选插件： picker.nvim 目前支持功能：文件搜索、ctags outline 筛选、mru。此外 bookmakers.nvim 插件和 rooter.nvim 插件都提供了拓展。已经切换到纯 Lua 配置的 Neovim 环境了。并且大部分核心插件使用自己开发的。 算起来应该是从 nvim v0.1.0 就开始使用了，并且那时候也算是深度 vim 用户，由于早期的 vim 并不支持…
  - 点赞: 15

- [姜绍彬的博客](https://shaobin-jiang.github.io/blog/posts/neovim-beginner-guide/update/)
- [🚀 入门指南 | LazyVim](https://lazyvim-github-io.vercel.app/zh-Hans/)
- [neovim/INSTALL.md at master · neovim/neovim](https://github.com/neovim/neovim/blob/master/INSTALL.md)
