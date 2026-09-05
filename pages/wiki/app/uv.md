---
title: uv
date: 2025-04-26
update_date:
  - 2025-09-06
draft: true
author: JackyLee
tags:
categories:
  - 命令行cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 常用命令

```sh
pip install pipx
pipx install uv
uv init
uv tree
uv add [包名称]
uv remove [包名称]
uv sync

# 对于新项目
uv init

# 对于第三方项目
uv sync

# 对于已有项目
uv venv --python 3.13
# 激活环境 Linux
source .venv/bin/activate
# 激活环境 Windows
.venv\Scripts\activate

# 查看某个包的版本
poetry search [包名称]
```

- miniforge/miniconda/mamba 新建 python 环境
- uv pip 安装包

## uv 包来源

```sh
# 官方源
https://pypi.org/simple

# 国内 清华源
https://pypi.tuna.tsinghua.edu.cn/simple

# 国内 阿里云
https://mirrors.aliyun.com/pypi/simple/
```

## uv导入 requirements.txt

```sh
uv add -r requirements.txt
```

## 参考资料

- [Python 包管理不再头疼：uv 工具快速上手 - wang_yb - 博客园](https://www.cnblogs.com/wang_yb/p/18635441)
- [Python 虚拟环境工具对比：venv、conda、和 uv，我为什么最终选择了 uv？](https://zhuanlan.zhihu.com/p/1896161993444017735)
