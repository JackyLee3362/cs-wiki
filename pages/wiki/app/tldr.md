---
title: tldr
date: 2025-07-03
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


## 安装

```sh
# node 安装
npm install tldr -g
# brew 安装(rust 客户端)
brew install tlrc
# 或者
pip3 install tldr
pipx install tldr

## 查看版本
tldr --version

# windows 安装
# ❌ scoop install tlrc
scoop install tealdeer
```

## 设置环境变量

```sh
#linux
export TLDR_LANGUAGE="zh"
export TLDR_CACHE_ENABLED=1

#windows
$env:TLDR_LANGUAGE="zh"
$env:TLDR_CACHE_ENABLED=1
```

[tldr-pages/tldr-node-client: Node.js command-line client for tldr pages](https://github.com/tldr-pages/tldr-node-client#configuration)

## 语言设置

设置环境变量`LANG`为 `zh_CN.UTF-8`

如果不成功运行以下命令

```shell
tldr --update
```

[tldr/CLIENT-SPECIFICATION.md at main · tldr-pages/tldr](https://github.com/tldr-pages/tldr/blob/main/CLIENT-SPECIFICATION.md#language)

## tldr 贡献

fork 仓库，然后按照 git sparse-checkout 进行

- [tldr-pages/tldr: 📚 Collaborative cheatsheets for console commands](https://github.com/tldr-pages/tldr) 查看其中的贡献标题
- [tldr/CONTRIBUTING.md at main · tldr-pages/tldr](https://github.com/tldr-pages/tldr/blob/main/CONTRIBUTING.md) 查看其中的贡献

## 主题设置

用户文件夹下新建`.tldrrc`

```json
{
  "themes": {
    "ocean": {
      "commandName": "bold, cyan",
      "mainDescription": "",
      "exampleDescription": "green",
      "exampleCode": "cyan",
      "exampleToken": "dim"
    },
    "myOwnCoolTheme": {
      "commandName": "bold, red",
      "mainDescription": "underline",
      "exampleDescription": "yellow",
      "exampleCode": "underline, green",
      "exampleToken": ""
    }
  },
  "theme": "ocean"
}
```

## 参考资料
