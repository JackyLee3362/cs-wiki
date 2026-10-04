---
title: Docker
date: 2025-02-26
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
update_date: 2026-09-29
---

## 安装与验证

Windows、macOS 使用 [Docker Desktop](https://docs.docker.com/desktop/)安装器；
Windows 需满足所选 WSL2 或 Hyper-V 后端的要求。
Linux 服务器按 [Docker Engine 官方安装说明](https://docs.docker.com/engine/install/)配置对应发行版的软件仓库。

Ubuntu 完成官方仓库配置后，安装软件包：

```sh
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo systemctl enable --now docker
sudo docker run --rm hello-world
docker compose version
```

## 基本使用：运行 Web 容器

```sh
# 启动 docker 命令
sudo docker run -d --name wiki-demo -p 127.0.0.1:8080:80 nginx:alpine
# 查看 docker 运行时
sudo docker ps
# 查看日志
sudo docker logs --tail 50 wiki-demo
sudo docker inspect wiki-demo
curl -I http://127.0.0.1:8080
sudo docker stop wiki-demo
sudo docker start wiki-demo
sudo docker rm -f wiki-demo
```

端口映射的顺序是主机地址:主机端口:容器端口。此示例只监听本机；删除容器会丢失未持久化的数据，演示容器中没有业务数据。

## 镜像、容器与持久化

镜像是创建容器的模板，容器是运行实例。需要跨容器重建保留的数据应使用命名卷或明确的挂载目录；备份时同时记录配置和数据。

```sh
sudo docker images
sudo docker ps -a
sudo docker volume ls
```

多服务应用可在 compose.yaml 中记录镜像、端口和挂载，再通过 docker compose up -d 启动。


## Docker 基本概念

镜像、容器、网络和存储卷是 Docker 的主要组成部分。

## 镜像加速配置（原有笔记）

以下保留原有镜像源配置，地址可用性尚待验证。镜像加速与 HTTP 代理是不同的配置；使用前应确认服务来源和可用性。编辑 `/etc/docker/daemon.json` 时，合并已有键值，避免覆盖其他配置：

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

- [配置镜像加速器-容器镜像服务(ACR)-阿里云帮助中心](https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images#df2f013a1ez0f) #todo
- [容器镜像服务控制台](https://cr.console.aliyun.com/cn-beijing/instances/mirrors) #todo

## mac 替代品

- [GitHub - apple/container: A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silicon.](https://github.com/apple/container) #todo

## FAQ

### docker 常用日志

```sh
sudo journalctl -u docker --no-pager -n 50 | grep -i "daemon.json\|mirror\|error\|warn"
```

## 参考资料

### 官方资源

- [官网](https://www.docker.com/)
- [GitHub 仓库：Docker CLI](https://github.com/docker/cli)
- [官方文档](https://docs.docker.com/)
- [GitHub 仓库：Moby（Docker Engine 上游）](https://github.com/moby/moby)

### 相关文章

- [Podman](docs/wiki/app/docker/podman/index.md)
- [Caddy](docs/wiki/app/caddy.md)

### 其他参考链接

- [将Docker Desktop（WSL 2 方式）文件存储移出系统盘 - 简书](https://www.jianshu.com/p/dfbb3e9ecf8a) #todo
- [Windows Docker 代理设置 - 知乎](https://zhuanlan.zhihu.com/p/586645526) #todo
- [5分钟实现用docker搭建Redis集群模式和哨兵模式 | iBit程序猿](https://ibit.tech/archives/docker-redis-pattern) #todo
- [Docker | Appsmith](https://docs.appsmith.com/getting-started/setup/installation-guides/docker) #todo
- [在Docker中安装MySQL并修改 my.cnf 配置文件-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1831208) #todo
- [各位都在用Docker跑些什么呢？ - 知乎](https://www.zhihu.com/question/603336478/answer/18868755776) #todo
- [各位都在用Docker跑些什么呢？ - 知乎](https://www.zhihu.com/question/603336478/answer/3406593764) #todo

- [配置镜像加速器-容器镜像服务(ACR)-阿里云帮助中心](https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images#df2f013a1ez0f) #todo
- [容器镜像服务控制台](https://cr.console.aliyun.com/cn-beijing/instances/mirrors) #todo
- [GitHub - apple/container: A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silicon.](https://github.com/apple/container) #todo
- [原笔记链接](https://docker.xuanyuan.me) #todo
- [原笔记链接](https://docker.1ms.run) #todo
- [原笔记链接](https://docker.m.daocloud.io) #todo
- [原笔记链接](https://hub.rat.dev) #todo
- [Docker Engine Ubuntu 安装](https://docs.docker.com/engine/install/ubuntu/) #todo
- [Docker Desktop 文档](https://docs.docker.com/desktop/) #todo
