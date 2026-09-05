---
title: conda
date: 2023-08-22
draft: true
author: JackyLee
tags:
  - 命令行
  - python
  - 包管理软件
categories:
  - wiki/命令行
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 环境变量配置

```sh
~/Anaconda #（Python需要）
~/Anaconda/Scripts #（conda自带脚本）
~/Anaconda/Library/mingw-w64/bin #（使用C with python的时候）
~/Anaconda/Library/usr/bin
~/Anaconda/Library/bin #（jupyter notebook动态库）
```

## conda 信息

如何检查？cmd 中输入 `python` 回车，`conda --version` 回车，`conda info` 回车

## conda 环境管理

创建环境

```sh
# 创建环境
conda create --name {env_name} [python==3.10]
conda create --name 环境名 # 可以使用中文名

# 重命名环境
conda rename --name 旧环境名 -d 新环境名

# 删除环境
#   第一步：退出环境
conda deactivate
#   第二步：删除环境
conda remove -n  {env_name} --all
# 或者
conda env remove -name 环境名

# 环境迁移/环境克隆
conda create --name {新环境名字} --clone {被克隆的环境名}

# 查看当前环境
conda env list
conda info -e

# 导出已有环境
conda env export > environment.yaml

# 根据配置文件创建环境
conda env create -f environment.yaml

# 顺便贴个pip的 导出/加载
pip freeze > requirements.txt
pip install -r requirements.txt

# 激活环境
conda activate {环境名}
```

## conda 查看/激活环境

```sh
conda info --envs
activate {env_name} # 主环境叫 base
```

## conda 升级

```sh
conda update -n base -c defaults conda
```

## conda 换源

```sh
# 显示源
conda config --show channels
conda config --show-sources
# 添加中科大源
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/cloud/
# 删除中科大源
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/cloud/conda-forge/
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/cloud/msys2/
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/cloud/bioconda/
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/cloud/menpo/
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/cloud/
```

## conda 配置文件

或者在 `~/.condarc` 中直接修改

```sh
channels:
  - defaults
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
show_channel_urls: True
```

## 本地离线安装

```sh
conda install --use-local [package_name]
# 比如 conda install --use-local pytorch-1.2.0-py3.5_cuda100_cudnn7_1.tar.bz2
```

## 版本

```sh
conda -V
```

## 帮助

```sh
conda --help
```

## conda 包管理

```sh
# 查看当前环境下的所有包
conda list

# 搜索包
conda search tqdm
conda search tqdm=4.65
# 安装包
conda install 包名
# 删除包
conda uninstall 包名
# 给指定环境安装包
conda install -n 环境名 -c 渠道名 包名
# 寻找不同渠道的包（Channel
conda search -c conda-forge
conda search -c conda-forge mkdocs
```

## conda 重置环境

- [Python|conda重置环境 - Weltㅤ - 博客园](https://www.cnblogs.com/tangjielin/p/16793557.html)

## FAQ

conda 环境问题

- [修复 Powershell 7.5 使用 Conda 异常和 Oh-My-Posh 不显示 Conda 环境问题 - Nativus' Space](https://naiv.fun/Ops/118.html)

## 参考资料

- [anaconda | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)
- [Miniconda 和 poetry 搭建 Python 开发环境（支持多版本、依赖管理） | StarryLand](https://rollingstarky.github.io/2021/05/19/build-python-development-environment-with-miniconda-and-poetry/)
