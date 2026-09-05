---
title: oh-my-posh
date: 2025-11-21
draft: true
author: JackyLee
tags:
  - 命令行
categories: 
comment: true
---


终端美化 oh-my-posh

## 安装

前置安装：windows 商店搜索`终端`或者`terminal`，点击安装

oh-my-posh 安装：命令行 winget

```sh
winget install JanDeDobbeleer.OhMyPosh -s winget
# 设置参数
$env:Path += ";$env:userprofile\AppData\Local\Programs\oh-my-posh\bin"
# 获得可执行文件目录
(Get-Command oh-my-posh).Source
```

## 配置

```sh
oh-my-posh get shell
# 如果是powershell执行如下命令
echo "oh-my-posh init pwsh | Invoke-Expression" > $profile
```

## oh-my-posh 的常用命令

```sh
code ~/Documents/WindowsPowerShell/Microsoft.PowerShell_profile.ps1
```

对于我的电脑来说，是以下地址

文档地址：`~/Documents/WindowsPowerShell/Microsoft.PowerShell_profile.ps1`

主题地址：`~/AppData/Local/Programs/oh-my-posh/themes`

当前主题：`~/AppData/Local/Programs/oh-my-posh/themes/amro.omp.jacky.json`

获得主题：`Get-PoshThemes`

### FAQ

Q1 但是安装好以后 conda 的环境不显示

- [Python | Oh My Posh](https://ohmyposh.dev/docs/segments/python)

Q2 `. $profile` 时 出现 `Get-PSReadLineKeyHandler : 找不到与参数名称“Key”匹配的参数。....` 错误

- [oh-my-posh 配置\_get-psreadlinekeyhandler : 找不到与参数名称“key”匹配的参数。-CSDN 博客](https://blog.csdn.net/thinszx/article/details/131857064)

```sh
Get-installedModule
Install-Module

Uninstall-Module oh-my-posh
Uninstall-Module posh-git
Uninstall-Module PSReadLine
```

### 参考文献

- [Home | Oh My Posh](https://ohmyposh.dev/) -[GitHub - ryanoasis/nerd-fonts: Iconic font aggregator, collection, & patcher. 3,600+ icons, 50+ patched fonts: Hack, Source Code Pro, more. Glyph collections: Font Awesome, Material Design Icons, Octicons, & more](https://github.com/ryanoasis/nerd-fonts)
- [配置和美化你的 powershell 终端 - 知乎](https://zhuanlan.zhihu.com/p/444165353)
- [Windows Terminal 美化（oh-my-posh3） - 知乎](https://zhuanlan.zhihu.com/p/354603010)
- [安裝新版 Oh My Posh 與插件來美化 PowerShell | 成功他媽．阿瑋](https://www.kwchang0831.dev/dev-env/pwsh/oh-my-posh)
- [JanDeDobbeleer/oh-my-posh2: A prompt theming engine for Powershell](https://github.com/JanDeDobbeleer/oh-my-posh2?tab=readme-ov-file#installation)
- [Powershell 中如何获取历史命令记录和自动补全 – Orz 小窍门](https://www.orztip.com/?p=850&article_title=powershell-get-history-and-auto-complete)
- [PowerShell 命令补全 - cralor - 博客园](https://www.cnblogs.com/cralor/p/17648531.html)
