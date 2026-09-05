---
title: Windows Registry
date: 2025-01-01
draft: false
author: JackyLee
tags:
  - Windows
categories:
  - Windows
comment: true
---

# 注册表语法

## 注册表`.reg`文件的基本语法

对单个的注册表项

```reg
[<Hive name>\<Key name>\<Subkey name>]
"Value name"=<Value type>:<Value data>
```

注册表语法举例

```reg
Windows Registry Editor Version 5.00
 
[HKEY_CLASSES_ROOT/..test]
@="Default项的文本"
"reg_binary_test"=hex:E0,31
"reg_dword_test"=dword:000000ff
"reg_expand_sz_test"=hex(2):30,00,31,00
"reg_multi_sz_test"=hex(7):30,00,31,00
```

## 代码示例

`createKey.reg`文件，双击执行

```reg

Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\demoTest\command]
@="默认的值"
"reg_binary_test"=hex:E0,31
"reg_dword_test"=dword:000000ff
"reg_expand_sz_test"=hex(2):30,00,31,00
"reg_multi_sz_test"=hex(7):30,00,31,00

```

`deleteKey.reg`文件，双击执行

```reg
Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\*\shell\demoTest\command]

[-HKEY_CLASSES_ROOT\*\shell\demoTest\]
```

## 最佳实践

如果可以右键执行想要的脚本，效率就会大大提升

[增加系统右键菜单，执行bat文件 - jack_Meng - 博客园](https://www.cnblogs.com/mq0036/p/8398594.html)

## 参考

[REG - Windows 注册表文件](https://docs.fileformat.com/zh/executable/reg/)

[Windows10添加自定义右键菜单VS Code-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2232830)
