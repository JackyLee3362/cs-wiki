---
title: Maven Profiles
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Maven Profiles

这一节中，我们会讲两个内容，分别是`多环境开发`和`跳过测试`

### 5.1 多环境开发

![1630983617755](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013759.png)

* 我们平常都是在自己的开发环境进行开发，
* 当开发完成后，需要把开发的功能部署到测试环境供测试人员进行测试使用，
* 等测试人员测试通过后，我们会将项目部署到生成环境上线使用。
* 这个时候就有一个问题是，不同环境的配置是不相同的，如不可能让三个环境都用一个数据库，所以就会有三个数据库的url配置，
* 我们在项目中如何配置?
* 要想实现不同环境之间的配置切换又该如何来实现呢?

maven提供配置多种环境的设定，帮助开发者在使用过程中快速切换环境。具体实现步骤:

#### 步骤1:父工程配置多个环境,并指定默认激活环境

```xml
<profiles>
    <!--开发环境-->
    <profile>
        <id>env_dep</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.1.1.1:3306/ssm_db</jdbc.url>
        </properties>
        <!--设定是否为默认启动环境-->
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    <!--生产环境-->
    <profile>
        <id>env_pro</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.2.2.2:3306/ssm_db</jdbc.url>
        </properties>
    </profile>
    <!--测试环境-->
    <profile>
        <id>env_test</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.3.3.3:3306/ssm_db</jdbc.url>
        </properties>
    </profile>
</profiles>
```

#### 步骤2:执行安装查看env_dep环境是否生效

![1630983967960](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013760.png)

查看到的结果为:

![](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013753.png)

#### 步骤3:切换默认环境为生产环境

```xml
<profiles>
    <!--开发环境-->
    <profile>
        <id>env_dep</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.1.1.1:3306/ssm_db</jdbc.url>
        </properties>
    </profile>
    <!--生产环境-->
    <profile>
        <id>env_pro</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.2.2.2:3306/ssm_db</jdbc.url>
        </properties>
        <!--设定是否为默认启动环境-->
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    <!--测试环境-->
    <profile>
        <id>env_test</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.3.3.3:3306/ssm_db</jdbc.url>
        </properties>
    </profile>
</profiles>
```

#### 步骤4:执行安装并查看env_pro环境是否生效

查看到的结果为`jdbc:mysql://127.2.2.2:3306/ssm_db`

![](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013761.png)

虽然已经能够实现不同环境的切换，但是每次切换都是需要手动修改，如何来实现在不改变代码的前提下完成环境的切换呢?

#### 步骤5:命令行实现环境切换

![1630984476202](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013762.png)

#### 步骤6:执行安装并查看env_test环境是否生效

查看到的结果为`jdbc:mysql://127.3.3.3:3306/ssm_db`

![](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013763.png)

所以总结来说，对于多环境切换只需要两步即可:

* 父工程中定义多环境

  ```xml
  <profiles>
  	<profile>
      	<id>环境名称</id>
          <properties>
          	<key>value</key>
          </properties>
          <activation>
          	<activeByDefault>true</activeByDefault>
          </activation>
      </profile>
      ...
  </profiles>
  ```

* 使用多环境(构建过程)

  ```
  mvn 指令 -P 环境定义ID[环境定义中获取]
  ```

### 5.2 跳过测试

前面在执行`install`指令的时候，Maven都会按照顺序从上往下依次执行，每次都会执行`test`,

对于`test`来说有它存在的意义，

* 可以确保每次打包或者安装的时候，程序的正确性，假如测试已经通过在我们没有修改程序的前提下再次执行打包或安装命令，由于顺序执行，测试会被再次执行，就有点耗费时间了。
* 功能开发过程中有部分模块还没有开发完毕，测试无法通过，但是想要把其中某一部分进行快速打包，此时由于测试环境失败就会导致打包失败。

遇到上面这些情况的时候，我们就想跳过测试执行下面的构建命令，具体实现方式有很多：

#### 方式一:IDEA工具实现跳过测试

![1630985300814](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013765.png)

图中的按钮为`Toggle 'Skip Tests' Mode`,

Toggle翻译为切换的意思，也就是说在测试与不测试之间进行切换。

点击一下，出现测试画横线的图片，如下:

![1630985411766](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013766.png)

说明测试已经被关闭，再次点击就会恢复。

这种方式最简单，但是有点"暴力"，会把所有的测试都跳过，如果我们想更精细的控制哪些跳过哪些不跳过，就需要使用配置插件的方式。

#### 方式二:配置插件实现跳过测试

在父工程中的pom.xml中添加测试插件配置

```xml
<build>
    <plugins>
        <plugin>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.12.4</version>
            <configuration>
                <skipTests>false</skipTests>
                <!--排除掉不参与测试的内容-->
                <excludes>
                    <exclude>**/BookServiceTest.java</exclude>
                </excludes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

skipTests:如果为true，则跳过所有测试，如果为false，则不跳过测试

excludes：哪些测试类不参与测试，即排除，针对skipTests为false来设置的

includes: 哪些测试类要参与测试，即包含,针对skipTests为true来设置的

#### 方式三:命令行跳过测试

![1630986926124](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151013767.png)

使用Maven的命令行，`mvn 指令 -D skipTests`

注意事项:

* 执行的项目构建指令必须包含测试生命周期，否则无效果。例如执行compile生命周期，不经过test生命周期。
* 该命令可以不借助IDEA，直接使用cmd命令行进行跳过测试，需要注意的是cmd要在pom.xml所在目录下进行执行。
