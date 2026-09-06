---
title: spring-es
description:
date: 2026-09-06
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# ElasticSearch Demo 项目

## 🔎介绍

本项目主要是展示

1. es 的基本使用
2. es 与 Java 集成
3. es 和 MySQL 的同步

## ☕环境准备

### 🚀启动 elastic-search

 docker 中下载或者拉取 `elasticsearch:7.12.1` 版本，es 的版本非常重要，后续的插件也是需要对应版本才能正常运行

进入 `es-demo` 目录 `cd es-demo` 

这里有两种挂载路径，一种是相对路径，一种是绝对路径，由于我的项目是在 dropbox 目录下的，所以使用相对目录会有些问题，所以这里采用绝对路径

启动 docker，并输入 下面两个命令中的其中一个

相对路径挂载 volume

```sh
docker run -d --name es -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "discovery.type=single-node" -v ${pwd}/es-data:/usr/share/elasticsearch/data -v ${pwd}/es-plugins:/usr/share/elasticsearch/plugins --privileged --network es-net -p 9200:9200 -p 9300:9300 elasticsearch:7.12.1
```

绝对路径挂载 volume

```sh
docker run -d --name es -e "ES_JAVA_OPTS=-Xms512m -Xmx512m" -e "discovery.type=single-node" -v d:/es-tmp/es-data:/usr/share/elasticsearch/data -v d:/es-tmp/es-plugins:/usr/share/elasticsearch/plugins --privileged --network es-net -p 9200:9200 -p 9300:9300 elasticsearch:7.12.1
```
然后是添加插件，这里有两个插件需要添加

- 解压 res 目录中的 ik 分词器插件，放入 es-plugins 中
- 解压 res 目录中的 pinyin 分词器，放入 es-plugins 中

更改 `es-data` 和 `es-plugins` 的权限，改为已读

重启 docker 中的 es 项目

### 🚀启动 mysql 项目

如果没有 mysql，可以使用 docker 命令

```sh
# 拉取 mysql
docker pull mysql:lastest
# 运行 mysql 
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=$env:MYSQL_ROOT_PASSWORD -d mysql

# cmd 中，不能在 Powershell 中执行，否则密码就变成了 "%MYSQL_ROOT_PASSWORD%"
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=%MYSQL_ROOT_PASSWORD% -d mysql
```

使用 navicat 连接数据库后，创建 `hotel` 数据库，并执行脚本 `res/tb_hotel.sql`

### 🚀启动 mq 项目

启动 mq 项目

```sh
# 拉取 mq
docker pull rabbitmq:3-management

# 运行 mq
docker run -e RABBITMQ_DEFAULT_USER=mymq -e RABBITMQ_DEFAULT_PASS=123456 --name mq --hostname mq1 -p 15672:15672 -p 5672:5672 -d rabbitmq:3-management
```

## 🧪实验一：es 的基本使用

打开`vscode`，安装插件`Elasticsearch for VSCode`，选择 `es-client`，

然后依次对里面的进行测试



## 🧪实验二：es 和 Java 集成

使用 `hotel-demo` 文件夹中的 `test` 下的子文件进行测试

## 🧪实验三：es 和 MySQL 同步

使用 RabbitMQ 进行同步，文件使用 `hotel-admin`

启动 `hotel-admin` 项目（和 mysql 相关）

启动 `hotel-demo` 项目（和 es相关）

1. 通过【网页】对 hotel-admin 中的数据进行修改
2. 然后查看 es 是否也进行了更改
3. 这里其实可以有改进，就是增加事务的特性，因为 数据库 可能更新失败，所以必须要同时成功，或者同时失败，这里就涉及到了如何添加事务

todo: hotel-admin 中【新增】酒店会失败，为什么（大概是因为 entity/Hotel中的 id 是 INPUT ？）
