---
title: uv
date: 2025-04-26
update_date:
  - 2025-09-06
  - 2026-09-05
draft: false
author: JackyLee
tags:
  - 包管理
categories:
  - 命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 安装 uv

```sh
brew install uv
# 或
pipx install uv
```

## 初始化项目

```sh
uv init
```

## 依赖管理

```sh
# 添加依赖
uv add [包名称]

# 移除依赖
uv remove [包名称]

# 同步依赖（第三方项目 / 已有项目）
uv sync

# 查看依赖树
uv tree
```

## 虚拟环境

```sh
# 指定 Python 版本创建环境
uv venv --python 3.13

# 激活环境（Linux / macOS）
source .venv/bin/activate

# 激活环境（Windows）
.venv\Scripts\activate
```

> [!note]
> 也可以用 miniforge / miniconda / mamba 新建 python 环境。

## FAQ

### 环境里没有 pip

> [!note]
> uv 创建的虚拟环境默认**不包含 pip**。

uv 本身就是包管理器，设计上就是让你用 `uv` 命令装包，而不是再通过 `pip` 安装。所以激活 `.venv` 后 `which pip` 找不到是正常现象，不是环境坏了。

```sh
# 激活环境后，查看环境里有哪些可执行文件（默认没有 pip）
source .venv/bin/activate
ls .venv/bin/
```

### 用 uv 代替 pip

```sh
# 安装包（等价于 pip install）
uv pip install [包名称]

# 安装包并写入 pyproject.toml
uv add [包名称]
```

### 安装 pip 到环境

```sh
# 把 pip 装进当前 .venv 环境
uv pip install pip

# 之后就能用了
python -m pip --version
```

### PEP 668 报错

直接用系统 / Homebrew 的 Python 执行 `pip install` 时，会报：

```
error: externally-managed-environment
```

原因是 Homebrew 安装的 Python 被标记为「外部管理环境」，pip 默认拒绝往系统级 Python 里装包，以防破坏 Homebrew 环境。

> [!warning]
> 不要用 `--break-system-packages` 绕过，会污染 Homebrew 环境。

正确做法是使用 uv 或虚拟环境：

```sh
# 用 uv 管理（推荐）
uv add [包名称]

# 或手动建虚拟环境
python3 -m venv ~/.venvs/[环境名]
source ~/.venvs/[环境名]/bin/activate
pip install [包名称]
```

## uv 包来源

```sh
# 官方源
https://pypi.org/simple

# 国内 清华源
https://pypi.tuna.tsinghua.edu.cn/simple

# 国内 阿里云
https://mirrors.aliyun.com/pypi/simple/
```

## 导入 requirements.txt

```sh
uv add -r requirements.txt
```

## 参考资料

- [Python 包管理不再头疼：uv 工具快速上手 - wang_yb - 博客园](https://www.cnblogs.com/wang_yb/p/18635441)
- [Python 虚拟环境工具对比：venv、conda、和 uv，我为什么最终选择了 uv？](https://zhuanlan.zhihu.com/p/1896161993444017735)
