---
title: Maven Private Repository
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

这一节，我们主要学习的内容是:

* 私服简介
* 私服仓库分类
* 资源上传与下载

首先来说一说什么是私服?

### 6.1 私服简介

团队开发现状分析

![1630987192620](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013768.png)

(1)张三负责ssm_crm的开发，自己写了一个ssm_pojo模块，要想使用直接将ssm_pojo安装到本地仓库即可

(2)李四负责ssm_order的开发，需要用到张三所写的ssm_pojo模块，这个时候如何将张三写的ssm_pojo模块交给李四呢?

(3)如果直接拷贝，那么团队之间的jar包管理会非常混乱而且容器出错，这个时候我们就想能不能将写好的项目上传到中央仓库，谁想用就直接联网下载即可

(4)Maven的中央仓库不允许私人上传自己的jar包,那么我们就得换种思路，自己搭建一个类似于中央仓库的东西，把自己的内容上传上去，其他人就可以从上面下载jar包使用

(5)这个类似于中央仓库的东西就是我们接下来要学习的==私服==

所以到这就有两个概念，一个是私服，一个是中央仓库

私服:公司内部搭建的用于存储Maven资源的服务器

远程仓库:Maven开发团队维护的用于存储Maven资源的服务器

所以说:

* 私服是一台独立的服务器，用于解决团队内部的资源共享与资源同步问题

搭建Maven私服的方式有很多，我们来介绍其中一种使用量比较大的实现方式:

* Nexus
  * Sonatype公司的一款maven私服产品
  * 下载地址：https://help.sonatype.com/repomanager3/download

### 6.2 私服安装

#### 步骤1:下载解压

将`资料\latest-win64.zip`解压到一个空目录下。

![1630988572349](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013769.png)

#### 步骤2:启动Nexus

![1630988673245](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013770.png)

使用cmd进入到解压目录下的`nexus-3.30.1-01\bin`,执行如下命令:

```
nexus.exe /run nexus
```

看到如下内容，说明启动成功。

![1630988939301](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013771.png)

#### 步骤3:浏览器访问

访问地址为:

```
http://localhost:8081
```

![1630988857125](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013772.png)

#### 步骤4:首次登录重置密码

![1630988983159](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013773.png)

输入用户名和密码进行登录，登录成功后，出现如下页面

![1630989052183](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013774.png)

点击下一步，需要重新输入新密码，为了和后面的保持一致，密码修改为`admin`

![1630989094756](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013775.png)

设置是否运行匿名访问

![1630989122737](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013776.png)

点击完成

![1630989136097](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013777.png)

至此私服就已经安装成功。如果要想修改一些基础配置信息，可以使用:

- 修改基础配置信息
  - 安装路径下etc目录中nexus-default.properties文件保存有nexus基础配置信息，例如默认访问端口。
- 修改服务器运行配置信息
  - 安装路径下bin目录中nexus.vmoptions文件保存有nexus服务器启动对应的配置信息，例如默认占用内存空间。

### 6.3 私服仓库分类

私服资源操作流程分析:

![1630989320979](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013778.png)

(1)在没有私服的情况下，我们自己创建的服务都是安装在Maven的本地仓库中

(2)私服中也有仓库，我们要把自己的资源上传到私服，最终也是放在私服的仓库中

(3)其他人要想使用你所上传的资源，就需要从私服的仓库中获取

(4)当我们要使用的资源不是自己写的，是远程中央仓库有的第三方jar包，这个时候就需要从远程中央仓库下载，每个开发者都去远程中央仓库下速度比较慢(中央仓库服务器在国外)

(5)私服就再准备一个仓库，用来专门存储从远程中央仓库下载的第三方jar包，第一次访问没有就会去远程中央仓库下载，下次再访问就直接走私服下载

(6)前面在介绍版本管理的时候提到过有`SNAPSHOT`和`RELEASE`，如果把这两类的都放到同一个仓库，比较混乱，所以私服就把这两个种jar包放入不同的仓库

(7)上面我们已经介绍了有三种仓库，一种是存放`SNAPSHOT`的，一种是存放`RELEASE`还有一种是存放从远程仓库下载的第三方jar包，那么我们在获取资源的时候要从哪个仓库种获取呢?

(8)为了方便获取，我们将所有的仓库编成一个组，我们只需要访问仓库组去获取资源。

所有私服仓库总共分为三大类:

宿主仓库hosted 

- 保存无法从中央仓库获取的资源
  - 自主研发
  - 第三方非开源项目,比如Oracle,因为是付费产品，所以中央仓库没有

代理仓库proxy 

- 代理远程仓库，通过nexus访问其他公共仓库，例如中央仓库

仓库组group 

- 将若干个仓库组成一个群组，简化配置
- 仓库组不能保存资源，属于设计型仓库

![1630990244010](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013779.png)

### 6.4 本地仓库访问私服配置

* 我们通过IDEA将开发的模块上传到私服，中间是要经过本地Maven的
* 本地Maven需要知道私服的访问地址以及私服访问的用户名和密码
* 私服中的仓库很多，Maven最终要把资源上传到哪个仓库?
* Maven下载的时候，又需要携带用户名和密码到私服上找对应的仓库组进行下载，然后再给IDEA

![1630990538229](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013780.png)

上面所说的这些内容，我们需要在本地Maven的配置文件`settings.xml`中进行配置。

#### 步骤1:私服上配置仓库

![1630991211000](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013781.png)

**说明:**

第5，6步骤是创建itheima-snapshot仓库

第7，8步骤是创建itheima-release仓库

#### 步骤2:配置本地Maven对私服的访问权限

```xml
<servers>
    <server>
        <id>itheima-snapshot</id>
        <username>admin</username>
        <password>admin</password>
    </server>
    <server>
        <id>itheima-release</id>
        <username>admin</username>
        <password>admin</password>
    </server>
</servers>
```

#### 步骤3:配置私服的访问路径

```xml
<mirrors>
    <mirror>
        <!--配置仓库组的ID-->
        <id>maven-public</id>
        <!--*代表所有内容都从私服获取-->
        <mirrorOf>*</mirrorOf>
        <!--私服仓库组maven-public的访问路径-->
        <url>http://localhost:8081/repository/maven-public/</url>
    </mirror>
</mirrors>
```

为了避免阿里云Maven私服地址的影响，建议先将之前配置的阿里云Maven私服镜像地址注释掉，等练习完后，再将其恢复。

![1630991535107](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013782.png)

至此本地仓库就能与私服进行交互了。

### 6.5 私服资源上传与下载

本地仓库与私服已经建立了连接，接下来我们就需要往私服上上传资源和下载资源，具体的实现步骤为:

#### 步骤1:配置工程上传私服的具体位置

```xml
 <!--配置当前工程保存在私服中的具体位置-->
<distributionManagement>
    <repository>
        <!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码-->
        <id>itheima-release</id>
         <!--release版本上传仓库的具体地址-->
        <url>http://localhost:8081/repository/itheima-release/</url>
    </repository>
    <snapshotRepository>
        <!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码-->
        <id>itheima-snapshot</id>
        <!--snapshot版本上传仓库的具体地址-->
        <url>http://localhost:8081/repository/itheima-snapshot/</url>
    </snapshotRepository>
</distributionManagement>
```

#### 步骤2:发布资源到私服

![1630992305191](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013783.png)

或者执行Maven命令

```
mvn deploy
```

**注意:**

要发布的项目都需要配置`distributionManagement`标签，要么在自己的pom.xml中配置，要么在其父项目中配置，然后子项目中继承父项目即可。

发布成功，在私服中就能看到:

![1630992513299](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013784.png)

现在发布是在itheima-snapshot仓库中，如果想发布到itheima-release仓库中就需要将项目pom.xml中的version修改成RELEASE即可。

如果想删除已经上传的资源，可以在界面上进行删除操作:

![1630992952378](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013785.png)

如果私服中没有对应的jar，会去中央仓库下载，速度很慢。可以配置让私服去阿里云中下载依赖。

![1630993028454](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013786.png)

至此私服的搭建就已经完成，相对来说有点麻烦，但是步骤都比较固定，后期大家如果需要的话，就可以参考上面的步骤一步步完成搭建即可。
