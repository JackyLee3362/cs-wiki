---
title: Windows Environment Variables
date: 2024-02-03
draft: false
author: JackyLee
tags:
  - Windows
categories:
  - Windows
comment: true
---

## 优先级

优先级：用户变量 > 系统变量

Path 优先级：系统变量 > 用户变量

## 一些常见的变量

todo

## 查看用户的环境变量

```sh
Get-ChildItem Env:PATH
$env:PATH -split";"
```

## 查看系统的环境变量

```sh
Get-ChildItem Env: -Scope Machine
```

## 添加环境变量

> [!Note]
> 只是临时的，永久修改需要操作注册表，建议直接图形化界面修改

```sh
$env:PATH += ";C:\Program Files\MyApp"
```

## 修改环境变量

```sh
$env:PATH = $env:PATH -replace "C:\\Program Files\\MyApp", "D:\\MyApp"
```

## 删除环境变量

> [!Warning]
> 此操作不可逆，谨慎使用！

```sh
Remove-Item Env:TEST_VAR
```

## 参考

- [如何在 PowerShell 中查找、添加、修改和删除环境变量：解决手动设置环境变量后报命令失效的问题\_powershell 查看环境变量-CSDN 博客](https://blog.csdn.net/Da_zhenzai/article/details/130238775)
- [环境变量的用户变量与系统变量的区别 - 知乎](https://zhuanlan.zhihu.com/p/93719752)
