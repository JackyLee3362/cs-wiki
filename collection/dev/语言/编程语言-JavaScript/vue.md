---
type: basic-note
title: java-web
author: JackyLee
create_time: 2023-05-21
update_time:
tags:
description: 黑马程序员-JavaWeb学习笔记
---

黑马程序员 2023 新版 JavaWeb 开发教程，实现 javaweb 企业开发全流程（涵盖 Spring+MyBatis+SpringMVC+SpringBoot 等）[视频地址](https://www.bilibili.com/video/BV1m84y1w7Tb)

## VUE

### P30

#### 00:25 常用指令

![image-20230521170813102](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238153.png)

vue.js 下载网址：https://v2.cn.vuejs.org/v2/guide/installation.html

#### 3:50 v-bind 和 v-model 指令

![image-20230521171044684](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238154.png)

#### 10:08 事件绑定

![image-20230521172122950](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238155.png)

### p31

#### 0:11 v-if v-else-if v-else v-show

![image-20230521191812402](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238156.png)

#### 7:34 v-for

![image-20230521193112490](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238157.png)

#### 00:54 vue 的生命周期

![image-20230521195128616](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238158.png)

#### 1:22 vue 官方的生命周期

![image-20230521195205220](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238159.png)

### p36

#### 10:27 开发流程

![image-20230522094822678](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238160.png)

### p37

#### npm 设置

```cmd
# 配置全局路径
npm config set prefix "D:/Program/NodeJS" # 这里填node.js的安装目录
npm config get prefix
# 配置淘宝镜像
npm config set registry https://registry.npm.taobao.org
npm config get registry
# 安装脚手架
npm install -g @vue/cli
# 查看vue版本
vue --version
# 创建vue项目
vue create vue-project01
vue ui # 图形化界面，如果使用此法创建，且保存预设，预设在~./vuerc文件下
```

### p38

#### 8:25 VUE 项目的目录结构

![image-20230522110141242](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238161.png)

### p39

#### 6:43 Vue 项目开发流程

![image-20230522111742833](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238162.png)

### p40

#### 4:00 Element 快速入门

![image-20230522113213663](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238163.png)

### p49

#### 如何部署

npm build，将 dist 中的**内容**放到 nginx 安装目录中的 html 中

查看占用端口 `netstat -ano | findStr 80`

可以在 nginx 的安装目录下找到`nginx.conf`更改端口号

## Maven

### p51

#### maven 的安装

#### 8:53

![image-20230521144235318](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238164.png)

#### 11:27

![image-20230521145530511](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238165.png)

#### MAVEN 包自动设置

找到 maven 安装目录，里面有个 conf/setting.xml，搜索 LocalRepository，然后填写标签，我命名为 repository 目录

```xml
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

### p56

#### 1:03

![image-20230521163624723](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238166.png)

### p57

#### 02:33

![image-20230521164227416](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238167.png)

#### 10:47

![image-20230521164747873](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238168.png)

## MyBatis

### P119

#### 9:18 jdbc 和 MyBatis 的对比

![p119-09-18-jdbc和MyBatis的对比](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238169.png)

#### 10:17 jdbc 和 MyBatis 的对比

![p119-10-17-jdbc和MyBatis的对比](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238170.png)

### P120

#### 7:36 切换为 Druid 数据库连接池

![p120-07-36-切换为Druid数据库连接池](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238171.png)

### P121

#### 2:57 lombok 使用方法

![p121-02-57-lombok使用方法](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505150238172.png)

## 参考资料

- [Snowflyt - 你为什么选择 React 而不选择 Vue？ - 知乎](https://www.zhihu.com/question/294210442/answer/3453828000)

  - 概要: 很老的问题了，2024 年我站在自己的角度谈谈看法吧。（废话警告） 不算很久之前（大概是 2020-2021 年），当我初次在大学中接触前端领域时，周围的人都说想进大厂就学 React，并且互联网上也到处都是解析 React 函数式思想的文章——当时 React Hooks 推出才一两年，仍有大量项目基于 class component，而 Hooks 带来的更“纯粹”的“函数式编程”思想，在当时显得颇为独特与深奥。 显然，这只是前端娱乐圈现状的又一个缩影，在…
  - 点赞: 353
