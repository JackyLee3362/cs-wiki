---
title: Maven Private Repository (Advanced)
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Maven Private Repository

前面我们在讲解多模块开发的时候，我们讲到我们所拆分的模块是可以在同一个公司各个项目组之间进行资源共享的。这个模块的资源共享，就需要通过我们接下来所讲解的 Maven 的私服来实现。

首先我们先介绍一下什么是私服，以及它的作用是什么。再来介绍一下我们如何将每位模块打包上传到私服，以及从私服当中来下载。

### 3.1 场景

在介绍什么是私服之前，我们先来分析一下同一个公司，两个项目组之间如何基于私服进行资源的共享。

假设现在有两个团队，A 和 B。 A 开发了一个模块 tlias-utils，模块开发完毕之后，将模块打成 jar 包，并安装到了 A 的本地仓库。

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956247.png" alt="image-20230113155325805" style="zoom:80%;" />

那此时，该公司的 B 团队开发项目时，要想使用 tlias-utils 中提供的工具类，该怎么办呢？ 对于 maven 项目来说，是不是在 pom.xml 文件中引入 tlias-utils 的坐标就可以了呢？

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956248.png" alt="image-20230113155657972" style="zoom:80%;" />

大家可以思考一下，当 B 团队在 maven 项目的 pom.xml 配置文件中引入了依赖的坐标之后，maven 是如何查找这个依赖的？ 查找顺序为：

1). 本地仓库：本地仓库中是没有这个依赖 jar 包的。

2). 远程中央仓库：由于该模块时自己公司开发的，远程仓库中也没有这个依赖。

因为目前 tlias-utils 这个依赖，还在 A 的本地仓库中的。 B 电脑上的 maven 项目，是不可能找得到 A 电脑上 maven 本地仓库的 jar 包的。 那此时，大家可能会有一个想法：因为 A 和 B 都会连接中央仓库，我们可以将 A 本地仓库的 jar 包，直接上传到中央仓库，然后 B 从中央仓库中下载 tlias-utils 这个依赖。

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956249.png" alt="image-20230113160351850" style="zoom:67%;" />

这个想法很美好，但是现实很残酷。这个方案是行不通的，因为中央仓库全球只有一个，不是什么人都可以往中央仓库中来上传 jar 包的，我们是没有权限操作的。

那此时，maven 的私服就出场了，私服其实就是架设在公司局域网内部的一台服务器，就是一种特殊的远程仓库。

有了私服之后，各个团队就可以直接来连接私服了。 A 连接上私服之后，他就可以把 jar 包直接上传到私服当中。我公司自己内部搭建的服务器，我是不是有权限操作呀，把 jar 包上传到私服之后，我让 B 团队的所有开发人员也连接同一台私服。连接上这一台私服之后，他就会根据坐标的信息，直接从私服当中将对应的 jar 包下载到自己的本地仓库，这样就可以使用到依赖当中所提供的一些工具类了。这样我们就可以通过私服来完成资源的共享。

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956250.png" alt="image-20230113160713806" style="zoom:80%;" />

而如果我们在项目中需要使用其他第三方提供的依赖，如果本地仓库没有，也会自动连接私服下载，如果私服没有，私服此时会自动连接中央仓库，去中央仓库中下载依赖，然后将下载的依赖存储在私服仓库及本地仓库中。

### 3.2 介绍

- **私服：**是一种特殊的远程仓库，它是架设在局域网内的仓库服务，用来代理位于外部的中央仓库，用于解决团队内部的资源共享与资源同步问题。
- **依赖查找顺序：**
  - 本地仓库
  - 私服仓库
  - 中央仓库
- **注意事项：**私服在企业项目开发中，一个项目/公司，只需要一台即可（无需我们自己搭建，会使用即可）。

![image-20230113161116701](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956251.png)

### 3.3 资源上传与下载

#### 3.3.1 步骤分析

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956252.png" alt="image-20230113163307239" style="zoom:80%;" />

资源上传与下载，我们需要做三步配置，执行一条指令。

第一步配置：在 maven 的配置文件中配置访问私服的用户名、密码。

第二步配置：在 maven 的配置文件中配置连接私服的地址(url 地址)。

第三步配置：在项目的 pom.xml 文件中配置上传资源的位置(url 地址)。

配置好了上述三步之后，要上传资源到私服仓库，就执行执行 maven 生命周期：deploy。

> 私服仓库说明：
>
> - RELEASE：存储自己开发的 RELEASE 发布版本的资源。
> - SNAPSHOT：存储自己开发的 SNAPSHOT 发布版本的资源。
> - Central：存储的是从中央仓库下载下来的依赖。

> 项目版本说明：
>
> - RELEASE(发布版本)：功能趋于稳定、当前更新停止，可以用于发行的版本，存储在私服中的 RELEASE 仓库中。
> - SNAPSHOT(快照版本)：功能不稳定、尚处于开发中的版本，即快照版本，存储在私服的 SNAPSHOT 仓库中。

#### 3.3.2 具体操作

为了模拟企业开发，这里我准备好了一台服务器（192.168.150.101），私服已经搭建好了，我们可以访问私服测试：http://192.168.150.101:8081

<img src="https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956253.png" alt="image-20230113164217830" style="zoom:80%;" />

私服准备好了之后，我们要做如下几步配置：

**1.设置私服的访问用户名/密码（在自己 maven 安装目录下的 conf/settings.xml 中的 servers 中配置）**

```xml
<server>
    <id>maven-releases</id>
    <username>admin</username>
    <password>admin</password>
</server>

<server>
    <id>maven-snapshots</id>
    <username>admin</username>
    <password>admin</password>
</server>
```

**2.设置私服依赖下载的仓库组地址（在自己 maven 安装目录下的 conf/settings.xml 中的 mirrors、profiles 中配置）**

```xml
<mirror>
    <id>maven-public</id>
    <mirrorOf>*</mirrorOf>
    <url>http://192.168.150.101:8081/repository/maven-public/</url>
</mirror>
```

```xml
<profile>
    <id>allow-snapshots</id>
        <activation>
        	<activeByDefault>true</activeByDefault>
        </activation>
    <repositories>
        <repository>
            <id>maven-public</id>
            <url>http://192.168.150.101:8081/repository/maven-public/</url>
            <releases>
            	<enabled>true</enabled>
            </releases>
            <snapshots>
            	<enabled>true</enabled>
            </snapshots>
        </repository>
    </repositories>
</profile>
```

**3.IDEA 的 maven 工程的 pom 文件中配置上传（发布）地址(直接在 tlias-parent 中配置发布地址)**

```xml
<distributionManagement>
    <!-- release版本的发布地址 -->
    <repository>
        <id>maven-releases</id>
        <url>http://192.168.150.101:8081/repository/maven-releases/</url>
    </repository>

    <!-- snapshot版本的发布地址 -->
    <snapshotRepository>
        <id>maven-snapshots</id>
        <url>http://192.168.150.101:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

配置完成之后，我们就可以在 tlias-parent 中执行**deploy**生命周期，将项目发布到私服仓库中。

![image-20230113164850129](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956254.png)

通过日志，我们可以看到，这几个模块打的 jar 包确实已经上传到了私服仓库中（由于当前我们的项目是 SNAPSHOT 版本，所以 jar 包是上传到了 snapshot 仓库中）。

那接下来，我们再来打开私服来看一下：

![image-20230113215053410](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202510120956255.png)

我们看到，我们项目中的这几个模块，在私服中都有了。 那接下来，当其他项目组的开发人员在项目中，就可以直接通过依赖的坐标，就可以完成引入对应的依赖，此时本地仓库没有，就会自动从私服仓库中下载。

> 备注说明：
>
> - 课上演示的时候，为了模拟真实的线上环境，老师使用了一台服务器 192.168.150.101，并在服务器上安装了 maven 的私服。 而这台服务器大家并不能直接访问。
>
> - 同学们如果要测试使用私服进行资源的上传和下载。可以参照如下步骤，启动给大家准备的本地私服操作：
>
>   - 解压： 资料中提供的压缩包 apache-maven-nexus.zip
>   - 进入目录： apache-maven-nexus\nexus-3.39.0-01\bin
>
>   - 启动服务：双击 start.bat
>   - 访问服务：localhost:8081
>   - 私服配置说明：将上述配置私服信息的 192.168.150.101 改为 localhost
