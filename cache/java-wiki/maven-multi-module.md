---
title: Maven Multi-Module
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Maven Multi-Module Development

### 1.1 分模块开发设计

(1)按照功能拆分

我们现在的项目都是在一个模块中，比如前面的SSM整合开发。虽然这样做功能也都实现了，但是也存在了一些问题，我们拿银行的项目为例来聊聊这个事。

* 网络没有那么发达的时候，我们需要到银行柜台或者取款机进行业务操作
* 随着互联网的发展,我们有了电脑以后，就可以在网页上登录银行网站使用U盾进行业务操作
* 再来就是随着智能手机的普及，我们只需要用手机登录APP就可以进行业务操作

上面三个场景出现的时间是不相同的，如果非要把三个场景的模块代码放入到一个项目，那么当其中某一个模块代码出现问题，就会导致整个项目无法正常启动，从而导致银行的多个业务都无法正常班理。所以我们会==按照功能==将项目进行拆分。

(2)按照模块拆分

比如电商的项目中，有订单和商品两个模块，订单中需要包含商品的详细信息，所以需要商品的模型类，商品模块也会用到商品的模型类，这个时候如果两个模块中都写模型类，就会出现重复代码，后期的维护成本就比较高。我们就想能不能将它们公共的部分抽取成一个独立的模块，其他模块要想使用可以像添加第三方jar包依赖一样来使用我们自己抽取的模块，这样就解决了代码重复的问题,这种拆分方式就说我们所说的==按照模块==拆分。

![1630768703430](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013715.png)

经过两个案例的分析，我们就知道:

* 将原始模块按照功能拆分成若干个子模块，方便模块间的相互调用，接口共享。

刚刚我们说了可以将domain层进行拆分，除了domain层，我们也可以将其他的层也拆成一个个对立的模块，如:

![1630768869208](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013716.png)

这样的话，项目中的每一层都可以单独维护，也可以很方便的被别人使用。关于分模块开发的意义，我们就说完了，说了这么多好处，那么该如何实现呢?

### 1.2 分模块开发实现

前面我们已经完成了SSM整合，接下来，咱们就基于SSM整合的项目来实现对项目的拆分。

#### 1.2.1 环境准备

将`资料\maven_02_ssm`部署到IDEA中，将环境快速准备好，部署成功后，项目的格式如下:

![1630769969416](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013717.png)

#### 1.2.2 抽取domain层

##### 步骤1:创建新模块

创建一个名称为`maven_03_pojo`的jar项目,为什么项目名是从02到03这样创建，原因后面我们会提到，这块的名称可以任意。

![1630771178137](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013718.png)

##### 步骤2:项目中创建domain包

在`maven_03_pojo`项目中创建`com.itheima.domain`包，并将`maven_02_ssm`中Book类拷贝到该包中

![1630771371487](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013719.png)

##### 步骤3:删除原项目中的domain包

删除后，`maven_02_ssm`项目中用到`Book`的类中都会有红色提示，如下:

![1630771505703](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013720.png)

**说明:**出错的原因是`maven_02_ssm`中已经将Book类删除，所以该项目找不到Book类，所以报错

要想解决上述问题，我们需要在`maven_02_ssm`中添加`maven_03_pojo`的依赖。

##### 步骤4:建立依赖关系

在`maven_02_ssm`项目的pom.xml添加`maven_03_pojo`的依赖

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_03_pojo</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

因为添加了依赖，所以在`maven_02_ssm`中就已经能找到Book类，所以刚才的报红提示就会消失。

##### 步骤5:编译`maven_02_ssm`项目

编译`maven_02_ssm`你会在控制台看到如下错误

![1630771987325](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013721.png)

错误信息为：不能解决`maven_02_ssm`项目的依赖问题，找不到`maven_03_pojo`这个jar包。

为什么找不到呢?

原因是Maven会从本地仓库找对应的jar包，但是本地仓库又不存在该jar包所以会报错。

在IDEA中是有`maven_03_pojo`这个项目，所以我们只需要将`maven_03_pojo`项目安装到本地仓库即可。

##### 步骤6:将项目安装本地仓库

将需要被依赖的项目`maven_03_pojo`，使用maven的install命令，把其安装到Maven的本地仓库中。

![1630773180969](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013722.png)

安装成功后，在对应的路径下就看到安装好的jar包

![1630773262441](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013723.png)

**说明:**具体安装在哪里，和你们自己电脑上Maven的本地仓库配置的位置有关。

当再次执行`maven_02_ssm`的compile的命令后，就已经能够成功编译。

#### 1.2.3 抽取Dao层

##### 步骤1:创建新模块

创建一个名称为`maven_04_dao`的jar项目

![1630773580067](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013724.png)

##### 步骤2:项目中创建dao包

在`maven_04_dao`项目中创建`com.itheima.dao`包，并将`maven_02_ssm`中BookDao类拷贝到该包中

![1630773695062](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013725.png)

在`maven_04_dao`中会有如下几个问题需要解决下:

![1630773958756](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013726.png)

* 项目`maven_04_dao`的BookDao接口中Book类找不到报错

  * 解决方案在`maven_04_dao`项目的pom.xml中添加`maven_03_pojo`项目

    ```xml
    <dependencies>
        <dependency>
            <groupId>com.itheima</groupId>
            <artifactId>maven_03_pojo</artifactId>
            <version>1.0-SNAPSHOT</version>
        </dependency>
    </dependencies>
    ```

* 项目`maven_04_dao`的BookDao接口中，Mybatis的增删改查注解报错

  * 解决方案在`maven_04_dao`项目的pom.xml中添加`mybatis`的相关依赖

    ```xml
    <dependencies>
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.6</version>
        </dependency>
    
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.47</version>
        </dependency>
    </dependencies>
    ```

##### 步骤3:删除原项目中的dao包

删除Dao包以后，因为`maven_02_ssm`中的BookServiceImpl类中有使用到Dao的内容，所以需要在`maven_02_ssm`的pom.xml添加`maven_04_dao`的依赖

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_04_dao</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

此时在`maven_02_ssm`项目中就已经添加了`maven_03_pojo`和`maven_04_dao`包

![1630774696344](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013727.png)

再次对`maven_02_ssm`项目进行编译，又会报错，如下:

![1630774780211](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013728.png)

和刚才的错误原因是一样的，maven在仓库中没有找到`maven_04_dao`,所以此时我们只需要将`maven_04_dao`安装到Maven的本地仓库即可。

##### 步骤4:将项目安装到本地仓库

将需要被依赖的项目`maven_04_dao`，使用maven的install命令，把其安装到Maven的本地仓库中。

![1630774917743](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013729.png)

安装成功后，在对应的路径下就看到了安装好对应的jar包

![1630774946856](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013730.png)

当再次执行`maven_02_ssm`的compile的指令后，就已经能够成功编译。

#### 1.2.4 运行测试并总结

将抽取后的项目进行运行，测试之前的增删改查功能依然能够使用。

所以对于项目的拆分，大致会有如下几个步骤:

(1) 创建Maven模块

(2) 书写模块代码

分模块开发需要先针对模块功能进行设计，再进行编码。不会先将工程开发完毕，然后进行拆分。拆分方式可以按照功能拆也可以按照模块拆。

(3)通过maven指令安装模块到本地仓库(install 指令)

团队内部开发需要发布模块功能到团队内部可共享的仓库中(私服)，私服我们后面会讲解。
