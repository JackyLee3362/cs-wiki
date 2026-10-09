---
title: curl
date: 2025-11-20
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
update_date: 2026-10-09
---

## 简介

curl 用于通过 URL 收发数据，常用于下载文件和检查 HTTP 接口。
Windows PowerShell 中显式写 curl.exe 可避开旧版 PowerShell 的同名别名。

## 安装

```sh
# Ubuntu / Debian
sudo apt update
sudo apt install curl
# 查看版本
curl --version
```

Windows 可先运行 curl.exe --version；
macOS 可先运行 curl --version。
若不存在，再按 [官方安装入口](https://curl.se/download.html)选择对应平台。

## 查看帮助

```sh
tldr curl
man curl
curl --manual
```

- [curl 参数手册](https://curl.se/docs/manpage.html)

## 查看响应头

```sh
curl -I https://example.com
# -I 发送 HEAD 请求，只查看响应头。
```

## 查看网页返回内容

```sh
curl https://example.com
curl -i https://example.com
# -i 在正常响应中同时显示响应头和正文。
curl -v https://example.com
# -v 输出连接过程，排查域名、代理和 TLS 问题。
```

## 下载文件

```sh
curl -fSL https://example.com -o example.html
curl --connect-timeout 5 --max-time 30 https://example.com
```

- -f 遇到 HTTP 错误状态时返回失败。
- -L 跟随重定向；-o 明确指定输出文件名。
- -s 隐藏进度；配合 -S 保留错误消息，脚本中常用 -fsSL。

## 探活

运维经典的探活操作

```sh
curl -s -o /dev/null -w "%{http_code}\n" https://example.com
# -s: slient 模式
# -o: 输出模式
# -w: "%{http_code}\n" 返回响应的状态码
```

## 调试本地 JSON 接口

以下假定已有服务监听 3000 端口，路径需按实际接口修改：

```sh
curl -i http://127.0.0.1:3000/health
curl -i -H 'Content-Type: application/json' \
  --data '{"title":"test"}' http://127.0.0.1:3000/notes
```

--data 默认使用 POST。Windows PowerShell 遇到 JSON 引号差异时，把请求体保存为 body.json，再用 curl.exe --data-binary '@body.json'，并指定 Content-Type。分享 -v 输出前，应去掉其中的凭据与 Cookie。

## 参考资料

### 官方资源

- [官网](https://curl.se/)
- [GitHub 仓库](https://github.com/curl/curl)
- [官方文档](https://curl.se/docs/manpage.html)

### 相关文章

- [Nginx](docs/app/network/nginx.md)
- [Caddy](docs/app/network/caddy.md)
