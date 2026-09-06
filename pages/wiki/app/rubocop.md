---
title: rubocop
date: 2026-09-05
draft: false
author: JackyLee
tags:
  - lint
  - Ruby
categories:
  - 命令行
comment: true
---

## 特点

- Ruby 社区事实标准的代码风格检查与静态分析工具
- 基于 Ruby Style Guide，规则可配置、可扩展
- 自带自动修复（`-a` / `-A`），可集成 Rake、Rails、编辑器
- 也可用于 Ruby on Rails 项目（rubocop-rails）

## 安装

```sh
gem install rubocop
```

## 用法

```sh
# 检查
rubocop

# 自动修复安全的问题
rubocop -a

# 自动修复所有问题（含不安全）
rubocop -A
```

## 参考资料

- [RuboCop 官网](https://rubocop.org/)
- [rubocop/rubocop - GitHub](https://github.com/rubocop/rubocop)
