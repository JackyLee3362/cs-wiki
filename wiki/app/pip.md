---
title: pip
date: 2024-02-17
update_date:
  - 2025-02-11
draft: true
author: JackyLee
tags:
  - app/command-line
categories:
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 安装

- [pip install 官方教程](https://pip.pypa.io/en/stable/user_guide/#installing-packages)
- [pip 官方命令大全](https://pip.pypa.io/en/stable/cli/)

```sh
# 直接安装最新版
pip install [package]
# 安装指定版本
pip install requests==2.9.0
# 安装 >=2.9.0 版本
pip install requests>=2.9.0

# 安装 >=2.9.0, < 2.10.0 版本
pip install requests==2.9.*

# 安装 >=2.9.0, < 3.0.0 版本
pip install requests~=2.9.0 # 同上
# 指定源安装
pip install --index https://pypi.mirrors.ustc.edu.cn/simple/ [package]
```

## 升级

```sh
# 升级包
pip install --upgrade [package]

```

## 配置文件

```sh
~/.pip/pip.conf
```

## 卸载

```sh
pip uninstall [package]
```

## pip 自升级

```sh
python -m pip install --upgrade pip
```

## pip 如果安装失败（没有使用管理员权限安装）

```sh
py -m ensurepip --upgrade
```

## pip 查看版本

```sh
pip show pip
pip --version
```

## pip 换源

### 设置代理

```shell
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
proxy     = http://localhost:7890
```

### 永久

在 `C:\User\{User_name}\pip\pip.ini` 下面复制

```shell
# 阿里源
[global]
index-url = http://mirrors.aliyun.com/pypi/simple/
[install]
trusted-host = mirrors.aliyun.com
# 中科大源
[global]
index-url = https://pypi.mirrors.ustc.edu.cn/simple/
[install]
trusted-host = pypi.mirrors.ustc.edu.cn
# 清华大学源
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
[install]
trusted-host = mirrors.tsinghua.com
# 豆瓣源
[global]
index-url = http://pypi.douban.com/simple/
[install]
trusted-host = mirrors.douban.com
```

### 临时

```sh
# 清华大学：https://pypi.tuna.tsinghua.edu.cn/simple
# 阿里云：http://mirrors.aliyun.com/pypi/simple/
# 豆瓣：http://pypi.douban.com/simple/

pip install -i [url] [package-name]
```

## 手动安装本地包

```sh
python -m pip install "C:\Users\xxx\Downloads\d2l-1.0.0b0-py3-none-any.whl"
```

## pip 发布

```sh
pip install setuptools, wheel, twine
```

## 参考资料
