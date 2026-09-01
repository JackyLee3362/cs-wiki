---
title: docker
date: 2025-02-26
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

## 介绍

## docker代理

编辑 `/etc/docker/daemon.json`，配置多个镜像源做容灾：

```json
{
  "registry-mirrors": [
    "https://docker.xuanyuan.me",
    "https://docker.1ms.run",
    "https://docker.m.daocloud.io",
    "https://hub.rat.dev"
  ]
}
```

然后重启

```sh
sudo systemctl daemon-reload
sudo systemctl restart docker

#验证
docker info | grep -A 5 "Registry Mirrors"
```

- [配置镜像加速器-容器镜像服务(ACR)-阿里云帮助中心](https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images#df2f013a1ez0f)
- [容器镜像服务控制台](https://cr.console.aliyun.com/cn-beijing/instances/mirrors)

## mac 替代品

- [GitHub - apple/container: A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silicon.](https://github.com/apple/container)

## FAQ

### docker 常用日志

```sh
sudo journalctl -u docker --no-pager -n 50 | grep -i "daemon.json\|mirror\|error\|warn"
```

## 参考资料

- [将Docker Desktop（WSL 2 方式）文件存储移出系统盘 - 简书](https://www.jianshu.com/p/dfbb3e9ecf8a)
- [Windows Docker 代理设置 - 知乎](https://zhuanlan.zhihu.com/p/586645526)
- [5分钟实现用docker搭建Redis集群模式和哨兵模式 | iBit程序猿](https://ibit.tech/archives/docker-redis-pattern)
- [Docker | Appsmith](https://docs.appsmith.com/getting-started/setup/installation-guides/docker)
- [在Docker中安装MySQL并修改 my.cnf 配置文件-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1831208)
- [各位都在用Docker跑些什么呢？ - 知乎](https://www.zhihu.com/question/603336478/answer/18868755776)
- [各位都在用Docker跑些什么呢？ - 知乎](https://www.zhihu.com/question/603336478/answer/3406593764)
