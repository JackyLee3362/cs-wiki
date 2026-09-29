---
title: Nginx
date: 2025-04-28
draft: false
author: JackyLee
tags:
  - wiki
  - app/server
  - docker服务
  - 反向代理
categories:
comment: true
update_date: 2026-09-29
---

## 简介

Nginx 是 Web 服务器，也常用作静态文件服务器和反向代理。以下示例以 Ubuntu / Debian 的发行版软件包为例。

## 安装与验证

```sh
sudo apt update
sudo apt install nginx
sudo systemctl enable --now nginx
nginx -v
sudo nginx -t
curl -I http://127.0.0.1
```

nginx -t 显示配置校验成功，HTTP 请求返回响应，即完成基本验证。80 端口已被占用时，需要调整监听端口或停止冲突服务。

## 本地静态网站

把构建产物放到 /var/www/wiki，确保 Nginx 工作进程可读取文件。新建 /etc/nginx/conf.d/wiki.conf：

```nginx
server {
    listen 127.0.0.1:8080;
    server_name localhost;
    root /var/www/wiki;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

目录型静态站点的页面通常位于 path/index.html；这里保留真实的 404，便于发现无效链接。

## 反向代理

如果应用监听在本机 3000 端口，可在 server 块中使用以下 location，替换前面的静态文件 location：

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## 检查与重载

```sh
sudo nginx -t
sudo systemctl reload nginx
curl -I http://127.0.0.1:8080
sudo journalctl -u nginx -n 50 --no-pager
sudo tail -n 50 /var/log/nginx/error.log
```

先校验再重载。403 通常与目录权限或缺少首页有关；502 应检查上游进程、端口及容器网络。本文的本地 HTTP 示例没有配置公网 HTTPS。


## 参考资料

- [Nginx 能做什么好玩的事情？ - 知乎](https://www.zhihu.com/question/21483073/answer/3633575553) #todo

- [GitHub Daily - 可视化配置 Nginx，29000+ GitHub Star！ - 知乎](https://zhuanlan.zhihu.com/p/1966885079688155393) #todo
  - 概要: 作为一名程序员经常折腾服务器，但一直有个挺让人头疼的事。 那就是每次要给新服务配置反向代理，都得去 Nginx 配置文件，还要手动申请 SSL 证书。 这种重复性的工作应该要有个工具来帮我们完成，而且 Nginx 复杂配置规则，新手上手学习还得花费大量时间。 近日，我在 GitHub 上找到了， Nginx Proxy Manager 这款带可视化界面的 Nginx 管理工具，已斩获 29000+ Star。 [图片] 作者在 README 文件介绍中说到：“ so easy that a monkey…
  - 点赞: 62

- [GitHub Daily - Nginx 能做什么好玩的事情？ - 知乎](https://www.zhihu.com/question/21483073/answer/1974165265085395696) #todo
  - 概要: 偶然间看到这个问题，看了一圈大家的回答，都在说 Nginx 能做什么。 但今天我想从另一个角度跟大家聊聊，怎么让 Nginx 使用变得更加简单一点，让初学者也能轻松上手。 之前我自己有一台服务器，上面跑了好几个用 Docker 启动的小服务，比如博客、网盘、还有些自己写的工具。 每次新增服务，最头疼的就是配置 Nginx 的反向代理，需要先 SSH 连上服务器，找到 nginx.conf 文件，接着 vim 编辑修改文件，写 server、location、proxy…
  - 点赞: 80

- [Nginx 入门指南](https://nginx.org/en/docs/beginners_guide.html)
- [Nginx 安装说明](https://nginx.org/en/docs/install.html)
