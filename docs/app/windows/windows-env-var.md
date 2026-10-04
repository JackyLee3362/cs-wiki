---
title: Windows Environment Variables
date: 2024-02-03
update_date: 2026-10-03
draft: false
author: JackyLee
tags:
  - wiki
  - Windows
categories:
  - Windows
comment: true
---

## 优先级

优先级：用户变量 > 系统变量

Path 优先级：系统变量 > 用户变量

## 一些常见的变量

| 变量 | 含义 | 常见默认路径 |
| --- | --- | --- |
| `USERPROFILE` | 当前用户的配置文件根目录 | `C:\Users\<用户名>` |
| `LOCALAPPDATA` | 当前用户的本地应用数据目录 | `%USERPROFILE%\AppData\Local` |
| `APPDATA` | 当前用户的漫游应用数据目录 | `%USERPROFILE%\AppData\Roaming` |

CMD 使用 `%变量名%`，PowerShell 使用 `$env:变量名`；资源管理器地址栏和 `Win+R` 支持 `%USERPROFILE%`、`%LOCALAPPDATA%`。

```powershell
$env:USERPROFILE
$env:LOCALAPPDATA
```

```cmd
echo %USERPROFILE%
echo %LOCALAPPDATA%
```

## 查看当前进程和用户的环境变量

```powershell
Get-ChildItem Env:PATH
$env:PATH -split";"
[Environment]::GetEnvironmentVariables('User')
```

`Env:` 与 `$env:` 查看当前进程的环境，包含继承的变量；`User` 查看持久化用户变量，两者并非同一份列表。

## 查看系统的环境变量

```powershell
[Environment]::GetEnvironmentVariables('Machine')
```

## 添加环境变量

> [!Note]
> 只是临时的，永久修改需要操作注册表，建议直接图形化界面修改

```powershell
$env:PATH += ";C:\Program Files\MyApp"
```

## 修改环境变量

```powershell
$env:PATH = $env:PATH -replace "C:\\Program Files\\MyApp", "D:\\MyApp"
```

## 删除环境变量

> [!Warning]
> 此操作不可逆，谨慎使用！

```powershell
Remove-Item Env:TEST_VAR
```

## 参考

- [Microsoft：已知文件夹与默认路径](https://learn.microsoft.com/en-us/windows/win32/shell/knownfolderid)
- [Microsoft：PowerShell 环境变量及作用域](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables)
- [如何在 PowerShell 中查找、添加、修改和删除环境变量：解决手动设置环境变量后报命令失效的问题\_powershell 查看环境变量-CSDN 博客](https://blog.csdn.net/Da_zhenzai/article/details/130238775)
- [环境变量的用户变量与系统变量的区别 - 知乎](https://zhuanlan.zhihu.com/p/93719752)
