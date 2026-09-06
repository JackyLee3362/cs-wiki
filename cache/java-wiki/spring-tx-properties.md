---
title: Spring Tx Properties
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Transaction Properties

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
