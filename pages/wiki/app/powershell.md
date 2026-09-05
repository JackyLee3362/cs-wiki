---
title: powershell
date: 2025-04-28
update_date:
  - 2025-07-27
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

## TODO

- oh-my-posh
- 重新安装 miniconda
- 学习并产出 powershell 7 的基本命令

## 介绍

- 仓库地址 [PowerShell/PowerShell: PowerShell for every system!](https://github.com/PowerShell/PowerShell)

## 安装与升级

```sh
# 使用 scoop 管理，但是 powershell 升级比较特殊，不能使用 scoop update pwsh
# 需要使用该命令
powershell.exe -Command scoop update pwsh

# 不推荐
winget install --id Microsoft.PowerShell --source winget

```

[在 Windows 上安装 PowerShell - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.5)

## 基础使用

### 查看当前版本信息

```sh
$psversiontable
# 或者
$PSVersionTable.PSVersion
```

### 打印环境变量

```sh
$env:XXX
# 打印路径
$env:PATH -split";"
# 如果是 CMD
echo %XXX%
echo %PATH%
```

### 打印显卡信息

```sh
nvidia-smi
```

### 显示历史补全

`$profile` 中新增

```sh
# 显示补全选项
Set-PSReadLineKeyHandler -Chord Tab -Function MenuComplete
# 列表式的历史记录补全
Set-PSReadLineOption -PredictionViewStyle ListView
```

### 设置别名

```sh
Set-Alias -Name 原命令 -Value 目标命令
# 比如将 where.exe 简化为 w
Set-Alias -Name w -Value where.exe
```

## FAQ

### 无法显示 Anaconda

- [Windows Powershell 无法切换 anaconda 的问题 - Do1phln - 博客园](https://www.cnblogs.com/cjjcn/p/16649967.html)

## 更改代码页

```sh
chcp 65001
```

## 获得当前系统信息

```sh
get-computerinfo
```

## 查看当前显卡占用情况

```sh
nvidia-smi
```

## powershell 中的命令

```sh
$env:PATH
$env:path -split";"
$env:OneDrive
```

## 批处理文件

[Windows 脚本编写 | This_Wei](https://www.wqf31415.xyz/2021/02/03/Windows脚本编写/#注释)

处理执行乱码问题

因为 codepage 的问题

可以用`chcp`查看`codepage`，utf-8 的是 65001(十进制)

[Powershell 改变默认编码\_修改 powershell 默认编码-CSDN 博客](https://blog.csdn.net/u014756245/article/details/100536552)

## 别名

```sh
# 获取别名
get-alias
# 比如有个命令叫 get-help，为其创建别名（临时）
new-alias -name gh -value get-help
```

[关于 Alias - PowerShell | Microsoft Learn](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_aliases?view=powershell-7.4)

## 历史记录

```sh
# 删除历史记录
del $env:appdata\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt
```

## cmd 用的比较少

### 打印环境变量

```sh
echo %PATH%
echo %OneDrive%
```

## 参考资料
