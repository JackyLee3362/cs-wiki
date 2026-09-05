---
title: poetry
date: 2025-04-30
draft: true
author: JackyLee
tags:
  - 命令行
  - 包管理软件
  - python
categories:
  - wiki/命令行
comment: true
---

## 配置文件

```sh
poetry config virtualenvs.in-project true
```

## 一般语法

```sh
# 初始化项目
poetry init
# 安装环境
poetry install
# 添加包
poetry add [package]
poetry add [package] --dev
poetry add [package] --D
# 删除包
poetry remove [package]
# 更新包
poetry update
# 使用环境
poetry env use [python命令]
poetry env info
# 查看配置
poetry config --list
# 查看包
poetry show
```

## 导出 requirements.txt

安装插件

```sh
# 安装插件的一般语法
pipx inject poetry poetry-plugin
# 此处我们安装
pipx inject poetry-plugin-export
# 导出
poetry export -f requirements.txt --output requirements.txt
# 或者这个🌟推荐这个！
poetry export --without-hashes --without dev -f requirements.txt -o requirements.txt
# 或者这个
poetry export --without-hashes --format=requirements.txt > requirements.txt
```

- poetry-plugin-export 官方仓库：[python-poetry/poetry-plugin-export: Poetry plugin to export the dependencies to various formats](https://github.com/python-poetry/poetry-plugin-export)
- [Plugins | Documentation | Poetry - Python dependency management and packaging made easy](https://python-poetry.org/docs/plugins/#using-plugins)

## 版本管理

```sh
# ^
poetry add django@^4.2.9 包含 4.x.x
poetry add django@~4.2.9 包含 4.2.x
poetry add "django>=4.2.9" 无上限
poetry add django==4.2.9 固定版本

```

## poetry 将包安装在哪里

```
使用 poetry config --list 查看
$env:APPDATA\pypoetry\venv\Lib\site-packages
```

## 参考资料

- [Python 套件管理器——Poetry 完全入門指南 - Code and Me](https://blog.kyomind.tw/python-poetry/)
- [Python 依赖管理及打包利器-Poetry 简介 Poetry 是一个包管理和打包的工具。 在 Python 中，对于初 - 掘金](https://juejin.cn/post/6999405667261874183)
