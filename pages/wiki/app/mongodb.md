---
title: mongodb
date: 2026-07-11
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


## windows

```sh
# 安装
scoop install mongodb
# 安装位置: ~/scoop/apps/mongodb/current/bin

# 直接启动
mongod
# 指定数据目录启动
mongod --dbpath=D:/path/to/dir
## 指定配置文件启动
mongod --config NEW_CONFIG_FILE

# 客户端安装
scoop install mongosh

# 客户端直接连接
mongosh

# 指定连接
mongosh "mongodb://user:password@127.0.0.1:27017/dbname"
# 本地连接
mongosh mongodb://127.0.0.1:27017

# 简单命令
> show dbs;
```

### 配置文件参考

```conf
# mongodb.conf 文件
# 数据库路径
dbpath=C:\data\db

# 启用日志文件，默认启用
journal=true

# 日志输出文件路径
logpath=C:\data\log

# 错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true

# 这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=true

# 端口号 默认为27017
port=27017
```

## 参考资料
