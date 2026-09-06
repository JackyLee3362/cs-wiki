---
title: Spring Transaction
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring Transaction

### 6.1 Spring 事务简介

#### 6.1.1 相关概念介绍

- 事务作用：在数据层保障一系列的数据库操作同成功同失败
- Spring 事务作用：在数据层或业务层保障一系列的数据库操作同成功同失败

Spring 为了管理事务，提供了一个平台事务管理器`PlatformTransactionManager`

![1630243651541](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021781.png)

commit 是用来提交事务，rollback 是用来回滚事务。

PlatformTransactionManager 只是一个接口，Spring 还为其提供了一个具体的实现:

![1630243993380](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021782.png)

从名称上可以看出，我们只需要给它一个 DataSource 对象，它就可以帮你去在业务层管理事务。其内部采用的是 JDBC 的事务。所以说如果你持久层采用的是 JDBC 相关的技术，就可以采用这个事务管理器来管理你的事务。而 Mybatis 内部采用的就是 JDBC 的事务，所以后期我们 Spring 整合 Mybatis 就采用的这个 DataSourceTransactionManager 事务管理器。

#### 6.1.2 转账案例-需求分析

接下来通过一个案例来学习下 Spring 是如何来管理事务的。

先来分析下需求:

需求: 实现任意两个账户间转账操作

需求微缩: A 账户减钱，B 账户加钱

为了实现上述的业务需求，我们可以按照下面步骤来实现下:
①：数据层提供基础操作，指定账户减钱（outMoney），指定账户加钱（inMoney）

②：业务层提供转账操作（transfer），调用减钱与加钱的操作

③：提供 2 个账号和操作金额执行转账操作

④：基于 Spring 整合 MyBatis 环境搭建上述操作

#### 6.1.3 转账案例-环境搭建

##### 步骤 1:准备数据库表

之前我们在整合 Mybatis 的时候已经创建了这个表,可以直接使用

```sql
create database spring_db character set utf8;
use spring_db;
create table tbl_account(
    id int primary key auto_increment,
    name varchar(35),
    money double
);
insert into tbl_account values(1,'Tom',1000);
insert into tbl_account values(2,'Jerry',1000);
```

##### 步骤 2:创建项目导入 jar 包

项目的 pom.xml 添加相关依赖

```xml
<dependencies>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>5.2.10.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.1.16</version>
    </dependency>

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

    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
      <version>5.2.10.RELEASE</version>
    </dependency>

    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis-spring</artifactId>
      <version>1.3.0</version>
    </dependency>

    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>

    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>5.2.10.RELEASE</version>
    </dependency>

  </dependencies>
```

##### 步骤 3:根据表创建模型类

```java
public class Account implements Serializable {

    private Integer id;
    private String name;
    private Double money;
	//setter...getter...toString...方法略
}
```

##### 步骤 4:创建 Dao 接口

```java
public interface AccountDao {

    @Update("update tbl_account set money = money + #{money} where name = #{name}")
    void inMoney(@Param("name") String name, @Param("money") Double money);

    @Update("update tbl_account set money = money - #{money} where name = #{name}")
    void outMoney(@Param("name") String name, @Param("money") Double money);
}
```

##### 步骤 5:创建 Service 接口和实现类

```java
public interface AccountService {
    /**
     * 转账操作
     * @param out 传出方
     * @param in 转入方
     * @param money 金额
     */
    public void transfer(String out,String in ,Double money) ;
}

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountDao accountDao;

    public void transfer(String out,String in ,Double money) {
        accountDao.outMoney(out,money);
        accountDao.inMoney(in,money);
    }

}
```

##### 步骤 6:添加 jdbc.properties 文件

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/spring_db?useSSL=false
jdbc.username=root
jdbc.password=root
```

##### 步骤 7:创建 JdbcConfig 配置类

```java
public class JdbcConfig {
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String userName;
    @Value("${jdbc.password}")
    private String password;

    @Bean
    public DataSource dataSource(){
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(url);
        ds.setUsername(userName);
        ds.setPassword(password);
        return ds;
    }
}
```

##### 步骤 8:创建 MybatisConfig 配置类

```java
public class MybatisConfig {

    @Bean
    public SqlSessionFactoryBean sqlSessionFactory(DataSource dataSource){
        SqlSessionFactoryBean ssfb = new SqlSessionFactoryBean();
        ssfb.setTypeAliasesPackage("com.itheima.domain");
        ssfb.setDataSource(dataSource);
        return ssfb;
    }

    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer(){
        MapperScannerConfigurer msc = new MapperScannerConfigurer();
        msc.setBasePackage("com.itheima.dao");
        return msc;
    }
}
```

##### 步骤 9:创建 SpringConfig 配置类

```java
@Configuration
@ComponentScan("com.itheima")
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class,MybatisConfig.class})
public class SpringConfig {
}

```

##### 步骤 10:编写测试类

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = SpringConfig.class)
public class AccountServiceTest {

    @Autowired
    private AccountService accountService;

    @Test
    void testTransfer() throws IOException {
        accountService.transfer("Tom","Jerry",100D);
    }

}
```

最终创建好的项目结构如下:

![1630247220645](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021783.png)

#### 6.1.4 事务管理

上述环境，运行单元测试类，会执行转账操作，`Tom`的账户会减少 100，`Jerry`的账户会加 100。

这是正常情况下的运行结果，但是如果在转账的过程中出现了异常，如:

```java
@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountDao accountDao;

    public void transfer(String out,String in ,Double money) {
        accountDao.outMoney(out,money);
        int i = 1/0;
        accountDao.inMoney(in,money);
    }

}
```

这个时候就模拟了转账过程中出现异常的情况，正确的操作应该是转账出问题了，`Tom`应该还是 900，`Jerry`应该还是 1100，但是真正运行后会发现，并没有像我们想象的那样，`Tom`账户为 800 而`Jerry`还是 1100,100 块钱凭空消息了，银行乐疯了。如果把转账换个顺序，银行就该哭了。

不管哪种情况，都是不允许出现的，对刚才的结果我们做一个分析:

①：程序正常执行时，账户金额 A 减 B 加，没有问题

②：程序出现异常后，转账失败，但是异常之前操作成功，异常之后操作失败，整体业务失败

当程序出问题后，我们需要让事务进行回滚，而且这个事务应该是加在业务层上，而 Spring 的事务管理就是用来解决这类问题的。

Spring 事务管理具体的实现步骤为:

##### 步骤 1:在需要被事务管理的方法上添加注解

```java
public interface AccountService {
    /**
     * 转账操作
     * @param out 传出方
     * @param in 转入方
     * @param money 金额
     */
    //配置当前接口方法具有事务
    public void transfer(String out,String in ,Double money) ;
}

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountDao accountDao;
	@Transactional
    public void transfer(String out,String in ,Double money) {
        accountDao.outMoney(out,money);
        int i = 1/0;
        accountDao.inMoney(in,money);
    }

}
```

==注意:==

@Transactional 可以写在接口类上、接口方法上、实现类上和实现类方法上

- 写在接口类上，该接口的所有实现类的所有方法都会有事务
- 写在接口方法上，该接口的所有实现类的该方法都会有事务
- 写在实现类上，该类中的所有方法都会有事务
- 写在实现类方法上，该方法上有事务
- ==建议写在实现类或实现类的方法上==

##### 步骤 2:在 JdbcConfig 类中配置事务管理器

```java
public class JdbcConfig {
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String userName;
    @Value("${jdbc.password}")
    private String password;

    @Bean
    public DataSource dataSource(){
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName(driver);
        ds.setUrl(url);
        ds.setUsername(userName);
        ds.setPassword(password);
        return ds;
    }

    //配置事务管理器，mybatis使用的是jdbc事务
    @Bean
    public PlatformTransactionManager transactionManager(DataSource dataSource){
        DataSourceTransactionManager transactionManager = new DataSourceTransactionManager();
        transactionManager.setDataSource(dataSource);
        return transactionManager;
    }
}
```

**注意：**事务管理器要根据使用技术进行选择，Mybatis 框架使用的是 JDBC 事务，可以直接使用`DataSourceTransactionManager`

##### 步骤 3：开启事务注解

在 SpringConfig 的配置类中开启

```java
@Configuration
@ComponentScan("com.itheima")
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class,MybatisConfig.class
//开启注解式事务驱动
@EnableTransactionManagement
public class SpringConfig {
}

```

##### 步骤 4:运行测试类

会发现在转换的业务出现错误后，事务就可以控制回顾，保证数据的正确性。

##### 知识点 1：@EnableTransactionManagement

| 名称 | @EnableTransactionManagement             |
| ---- | ---------------------------------------- |
| 类型 | 配置类注解                               |
| 位置 | 配置类定义上方                           |
| 作用 | 设置当前 Spring 环境中开启注解式事务支持 |

##### 知识点 2：@Transactional

| 名称 | @Transactional                                                                   |
| ---- | -------------------------------------------------------------------------------- |
| 类型 | 接口注解 类注解 方法注解                                                         |
| 位置 | 业务层接口上方 业务层实现类上方 业务方法上方                                     |
| 作用 | 为当前业务层方法添加事务（如果设置在类或接口上方则类或接口中所有方法均添加事务） |

### 6.2 Spring 事务角色

这节中我们重点要理解两个概念，分别是`事务管理员`和`事务协调员`。

1. 未开启 Spring 事务之前:

![1630248794837](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021784.png)

- AccountDao 的 outMoney 因为是修改操作，会开启一个事务 T1
- AccountDao 的 inMoney 因为是修改操作，会开启一个事务 T2
- AccountService 的 transfer 没有事务，
  - 运行过程中如果没有抛出异常，则 T1 和 T2 都正常提交，数据正确
  - 如果在两个方法中间抛出异常，T1 因为执行成功提交事务，T2 因为抛异常不会被执行
  - 就会导致数据出现错误

2. 开启 Spring 的事务管理后

![1630249111055](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021785.png)

- transfer 上添加了@Transactional 注解，在该方法上就会有一个事务 T
- AccountDao 的 outMoney 方法的事务 T1 加入到 transfer 的事务 T 中
- AccountDao 的 inMoney 方法的事务 T2 加入到 transfer 的事务 T 中
- 这样就保证他们在同一个事务中，当业务层中出现异常，整个事务就会回滚，保证数据的准确性。

通过上面例子的分析，我们就可以得到如下概念:

- 事务管理员：发起事务方，在 Spring 中通常指代业务层开启事务的方法
- 事务协调员：加入事务方，在 Spring 中通常指代数据层方法，也可以是业务层方法

==注意:==

目前的事务管理是基于`DataSourceTransactionManager`和`SqlSessionFactoryBean`使用的是同一个数据源。

### 6.3 Spring 事务属性

上一节我们介绍了两个概念，事务的管理员和事务的协同员，对于这两个概念具体做什么的，我们待会通过案例来使用下。除了这两个概念，还有就是事务的其他相关配置都有哪些，就是我们接下来要学习的内容。

在这一节中，我们主要学习三部分内容`事务配置`、`转账业务追加日志`、`事务传播行为`。

#### 6.3.1 事务配置

![1630250069844](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021786.png)

上面这些属性都可以在`@Transactional`注解的参数上进行设置。

- readOnly：true 只读事务，false 读写事务，增删改要设为 false,查询设为 true。

- timeout:设置超时时间单位秒，在多长时间之内事务没有提交成功就自动回滚，-1 表示不设置超时时间。

- rollbackFor:当出现指定异常进行事务回滚

- noRollbackFor:当出现指定异常不进行事务回滚

  - 思考:出现异常事务会自动回滚，这个是我们之前就已经知道的

  - noRollbackFor 是设定对于指定的异常不回滚，这个好理解

  - rollbackFor 是指定回滚异常，对于异常事务不应该都回滚么，为什么还要指定?

    - 这块需要更正一个知识点，并不是所有的异常都会回滚事务，比如下面的代码就不会回滚

      ```java
      public interface AccountService {
          /**
           * 转账操作
           * @param out 传出方
           * @param in 转入方
           * @param money 金额
           */
          //配置当前接口方法具有事务
          public void transfer(String out,String in ,Double money) throws IOException;
      }

      @Service
      public class AccountServiceImpl implements AccountService {

          @Autowired
          private AccountDao accountDao;
      	@Transactional
          public void transfer(String out,String in ,Double money) throws IOException{
              accountDao.outMoney(out,money);
              //int i = 1/0; //这个异常事务会回滚
              if(true){
                  throw new IOException(); //这个异常事务就不会回滚
              }
              accountDao.inMoney(in,money);
          }

      }
      ```

- 出现这个问题的原因是，Spring 的事务只会对`Error异常`和`RuntimeException异常`及其子类进行事务回顾，其他的异常类型是不会回滚的，对应 IOException 不符合上述条件所以不回滚

  - 此时就可以使用 rollbackFor 属性来设置出现 IOException 异常不回滚

    ```java
    @Service
    public class AccountServiceImpl implements AccountService {

        @Autowired
        private AccountDao accountDao;
    	 @Transactional(rollbackFor = {IOException.class})
        public void transfer(String out,String in ,Double money) throws IOException{
            accountDao.outMoney(out,money);
            //int i = 1/0; //这个异常事务会回滚
            if(true){
                throw new IOException(); //这个异常事务就不会回滚
            }
            accountDao.inMoney(in,money);
        }

    }
    ```

- rollbackForClassName 等同于 rollbackFor,只不过属性为异常的类全名字符串

- noRollbackForClassName 等同于 noRollbackFor，只不过属性为异常的类全名字符串

- isolation 设置事务的隔离级别

  - DEFAULT :默认隔离级别, 会采用数据库的隔离级别
  - READ_UNCOMMITTED : 读未提交
  - READ_COMMITTED : 读已提交
  - REPEATABLE_READ : 重复读取
  - SERIALIZABLE: 串行化

介绍完上述属性后，还有最后一个事务的传播行为，为了讲解该属性的设置，我们需要完成下面的案例。

#### 6.3.2 转账业务追加日志案例

##### 6.3.2.1 需求分析

在前面的转案例的基础上添加新的需求，完成转账后记录日志。

- 需求：实现任意两个账户间转账操作，并对每次转账操作在数据库进行留痕
- 需求微缩：A 账户减钱，B 账户加钱，数据库记录日志

基于上述的业务需求，我们来分析下该如何实现:

①：基于转账操作案例添加日志模块，实现数据库中记录日志

②：业务层转账操作（transfer），调用减钱、加钱与记录日志功能

需要注意一点就是，我们这个案例的预期效果为:

==无论转账操作是否成功，均进行转账操作的日志留痕==

##### 6.3.2.2 环境准备

该环境是基于转账环境来完成的，所以环境的准备可以参考`6.1.3的环境搭建步骤`，在其基础上，我们继续往下写

###### 步骤 1:创建日志表

```sql
create table tbl_log(
   id int primary key auto_increment,
   info varchar(255),
   createDate datetime
)
```

###### 步骤 2:添加 LogDao 接口

```java
public interface LogDao {
    @Insert("insert into tbl_log (info,createDate) values(#{info},now())")
    void log(String info);
}

```

###### 步骤 3:添加 LogService 接口与实现类

```java
public interface LogService {
    void log(String out, String in, Double money);
}
@Service
public class LogServiceImpl implements LogService {

    @Autowired
    private LogDao logDao;
	@Transactional
    public void log(String out,String in,Double money ) {
        logDao.log("转账操作由"+out+"到"+in+",金额："+money);
    }
}
```

###### 步骤 4:在转账的业务中添加记录日志

```java
public interface AccountService {
    /**
     * 转账操作
     * @param out 传出方
     * @param in 转入方
     * @param money 金额
     */
    //配置当前接口方法具有事务
    public void transfer(String out,String in ,Double money)throws IOException ;
}
@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountDao accountDao;
    @Autowired
    private LogService logService;
	@Transactional
    public void transfer(String out,String in ,Double money) {
        try{
            accountDao.outMoney(out,money);
            accountDao.inMoney(in,money);
        }finally {
            logService.log(out,in,money);
        }
    }

}
```

###### 步骤 5:运行程序

- 当程序正常运行，tbl_account 表中转账成功，tbl_log 表中日志记录成功

- 当转账业务之间出现异常(int i =1/0),转账失败，tbl_account 成功回滚，但是 tbl_log 表未添加数据
- 这个结果和我们想要的不一样，什么原因?该如何解决?
- 失败原因:日志的记录与转账操作隶属同一个事务，同成功同失败
- 最终效果:无论转账操作是否成功，日志必须保留

#### 6.3.3 事务传播行为

![1630253779575](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021787.png)

对于上述案例的分析:

- log 方法、inMoney 方法和 outMoney 方法都属于增删改，分别有事务 T1,T2,T3
- transfer 因为加了@Transactional 注解，也开启了事务 T
- 前面我们讲过 Spring 事务会把 T1,T2,T3 都加入到事务 T 中
- 所以当转账失败后，所有的事务都回滚，导致日志没有记录下来
- 这和我们的需求不符，这个时候我们就想能不能让 log 方法单独是一个事务呢?

要想解决这个问题，就需要用到事务传播行为，所谓的事务传播行为指的是:

事务传播行为：事务协调员对事务管理员所携带事务的处理态度。

具体如何解决，就需要用到之前我们没有说的`propagation属性`。

##### 1.修改 logService 改变事务的传播行为

```java
@Service
public class LogServiceImpl implements LogService {

    @Autowired
    private LogDao logDao;
	//propagation设置事务属性：传播行为设置为当前操作需要新事务
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(String out,String in,Double money ) {
        logDao.log("转账操作由"+out+"到"+in+",金额："+money);
    }
}
```

运行后，就能实现我们想要的结果，不管转账是否成功，都会记录日志。

##### 2.事务传播行为的可选值

![1630254257628](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021788.png)

对于我们开发实际中使用的话，因为默认值需要事务是常态的。根据开发过程选择其他的就可以了，例如案例中需要新事务就需要手工配置。其实入账和出账操作上也有事务，采用的就是默认值。

## 参考资料
