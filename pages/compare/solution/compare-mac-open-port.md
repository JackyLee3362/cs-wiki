---
title: compare-mac-open-port
description: macOS 查看开放端口与修改开放端口的完整方案
date: 2026-09-10
draft: true
author: JackyLee
tags:
  - macos
  - 网络
  - 端口
categories:
  - 命令行
comment: true
---

[[lsof]]
[[netstat]]
[[macos]]

## 核心认知

macOS 与 Linux 的防火墙模型不同：**没有「默认全部关闭、逐端口开放」的概念**。端口是否开放取决于有没有进程去监听它——服务绑定端口即开放；防火墙（应用级 socketfilterfw / 包过滤 pf）只负责「放行或拦截」。因此「修改开放端口」分三类操作：换服务监听端口、释放被占用端口、防火墙放行/封禁。

## 查看开放的端口

### lsof（最常用）

```sh
# 查看所有监听中的 TCP 端口
sudo lsof -iTCP -sTCP:LISTEN -n -P

# 查看某个端口被谁占用
lsof -i :8080

# 按进程名过滤
sudo lsof -iTCP -sTCP:LISTEN -n -P | grep idea
```

- `-n`：不做域名反解，输出更快
- `-P`：不把端口号转成服务名（显示 8080 而不是 http-alt）
- 输出中 `LISTEN` 行即开放端口，最后一列为进程名与 PID

### 其他手段

```sh
# netstat（macOS 版参数与 Linux 不同，无 -p）
netstat -anv | grep LISTEN

# nmap 扫描本机（需 brew install nmap）
nmap localhost

# 实时网络监控
nettop -p tcp
```

图形化方式：活动监视器（Activity Monitor）→「网络」标签页，可按进程查看网络活动。

## 修改开放端口

### 1. 改服务监听的端口（最常见）

端口由服务自己绑定，换端口 = 改应用配置或启动参数：

```sh
python -m http.server 9000        # 示例：让服务监听 9000
```

### 2. 释放被占用的端口

```sh
# 找到占用进程并结束
lsof -ti :8080 | xargs kill -9

# 杀掉后验证
lsof -i :8080
```

### 3. 防火墙放行/封禁

macOS 防火墙是**应用级**的（基于进程签名放行，而非端口号）：

```sh
# 应用级防火墙（对应 系统设置 → 网络 → 防火墙）
/usr/libexec/ApplicationFirewall/socketfilterfw --getglobalstate
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Applications/MyServer.app
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /Applications/MyServer.app
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --blockapp /Applications/MyServer.app
```

需要按端口号精确控制（封禁/转发）时用包过滤 **pf**：

```sh
# 封禁 8080 入站：向 /etc/pf.conf 追加规则
# block in on en0 proto tcp from any to any port 8080

# 端口转发：80 → 8080（免 sudo 运行 80 端口服务的常用手法）
# rdr pass on en0 inet proto tcp from any to any port 80 -> 127.0.0.1 port 8080

# 加载并启用
sudo pfctl -f /etc/pf.conf
sudo pfctl -e          # 启用；-d 禁用
sudo pfctl -s info     # 查看状态
sudo pfctl -s rules    # 查看已加载规则
```

## 排错清单

- 端口明明在 LISTEN 但外部访问不通 → 检查防火墙是否拦截、是否监听在 `127.0.0.1` 而非 `0.0.0.0`
- `Address already in use` → 用 `lsof -i :端口` 找到占用者，确认是否复用旧进程
- 局域网设备访问不到 → 路由器/宿主机（虚拟机 NAT）端口转发问题，与 macOS 本机无关

## 参考资料

- [macOS 查看、占用和释放端口的方法 - 掘金](https://juejin.cn/post/7170907429222420511) #todo
- [Mac 上检测和关闭占用端口的进程 - 少数派](https://sspai.com/post/93323) #todo
- [macOS 修改开放端口 - CSDN](https://blog.csdn.net/one2_three/article/details/135537044) #todo
- [Mac 防火墙 socketfilterfw 命令详解](https://www.jianshu.com/p/b7e14a03bd8e) #todo
