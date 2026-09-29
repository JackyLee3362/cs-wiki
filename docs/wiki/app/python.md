---
title: Python
date: 2025-09-29
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
update_date: 2026-09-29
---

## 简介

Python 是通用编程语言，可用于脚本、自动化和数据处理。解释器负责运行代码，pip 管理第三方包，venv 为不同项目隔离依赖。

## 安装与验证

Windows、macOS 从 [Python 官网](https://www.python.org/downloads/)选择对应安装程序。Windows 安装后的命令入口可能是 py 或 python，以安装器说明为准。

Ubuntu / Debian：

```sh
sudo apt update
sudo apt install python3 python3-venv python3-pip
python3 --version
```

Windows PowerShell 验证：

```powershell
python --version
python -m pip --version
```

若 python 命令不存在，先确认安装器是否添加命令入口，并重新打开终端；Linux 示例中的 python3 与虚拟环境内的 python 对应同一套解释器。

## 基本使用

保存 hello.py，内容为 print("Hello, Python!")，然后执行：

```sh
python hello.py
python -c "print(1 + 2)"
```

Linux 未激活虚拟环境时用 python3。直接运行解释器可进入交互模式，输入 exit() 退出。

## 项目虚拟环境

在项目目录创建独立环境：

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install requests
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt
deactivate
```

Windows PowerShell 不需要激活也能直接使用环境：

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install requests
.\.venv\Scripts\python.exe hello.py
```

把 .venv 加入 .gitignore；记录依赖而不提交整个虚拟环境。使用 python -m pip 可确保包安装到当前解释器。

## 参考资料

- [Python 虚拟环境教程](https://docs.python.org/3/tutorial/venv.html)
- [Windows 安装与命令入口](https://docs.python.org/3/using/windows.html)
