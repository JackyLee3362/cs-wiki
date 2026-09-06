---
title: Spring AOP Params & Data
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

## Params & Data Access

#### 4.3.1 需求分析

打印所有方法执行时间 + 签名

```java
@Component
@Aspect
public class ProjectAdvice {
    //配置业务层的所有方法
    @Pointcut("execution(* edu.note.service.*Service.*(..))")
    private void servicePt(){}
    //@Around("ProjectAdvice.servicePt()") 可以简写为下面的方式
    @Around("servicePt()")
    public void runSpeed(ProceedingJoinPoint pjp){
        //获取执行签名信息
        Signature signature = pjp.getSignature();
        //通过签名获取执行操作名称(接口名)
        String className = signature.getDeclaringTypeName();
        //通过签名获取执行操作名称(方法名)
        String methodName = signature.getName();

        long start = System.currentTimeMillis();
        for (int i = 0; i < 10000; i++) {
           pjp.proceed();
        }
        long end = System.currentTimeMillis();
        System.out.println("万次执行："+ className+"."+methodName+"---->" +(end-start) + "ms");
    }
}
```

##### 步骤 7:运行单元测试类

前面我们介绍通知类型的时候总共讲了五种，那么对于这五种类型都会有参数，返回值和异常吗?

我们先来一个个分析下:

- 获取切入点方法的参数，所有的通知类型都可以获取参数
  - JoinPoint：适用于前置、后置、返回后、抛出异常后通知
  - ProceedingJoinPoint：适用于环绕通知
- 获取切入点方法返回值，前置和抛出异常后通知是没有返回值，后置通知可有可无，所以不做研究
  - 返回后通知
  - 环绕通知
- 获取切入点方法运行异常信息，前置和返回后通知是不会有，后置通知可有可无，所以不做研究
  - 抛出异常后通知
  - 环绕通知

#### 4.4.1 环境准备

- 创建一个 Maven 项目

- pom.xml 添加 Spring 依赖

  ```xml
  <dependencies>
      <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.2.10.RELEASE</version>
      </dependency>
      <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjweaver</artifactId>
        <version>1.9.4</version>
      </dependency>
    </dependencies>
  ```

- 添加 BookDao 和 BookDaoImpl 类

  ```java
  public interface BookDao {
      public String findName(int id);
  }
  @Repository
  public class BookDaoImpl implements BookDao {

      public String findName(int id) {
          System.out.println("id:"+id);
          return "itcast";
      }
  }
  ```

#### 4.4.2 获取参数

##### 非环绕通知获取方式

在方法上添加 JoinPoint,通过 JoinPoint 来获取参数

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @Before("pt()")
    public void before(JoinPoint jp) {
        Object[] args = jp.getArgs();
        System.out.println(Arrays.toString(args));
        System.out.println("before advice ..." );
    }
    // ...
}
```

运行 App 类，可以获取如下内容，说明参数 100 已经被获取

![1630233291929](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021768.png)

**思考:方法的参数只有一个，为什么获取的是一个数组?**

因为参数的个数是不固定的，所以使用数组更通配些。

如果将参数改成两个会是什么效果呢?

(1)修改 BookDao 接口和 BookDaoImpl 实现类

```java
public interface BookDao {
    public String findName(int id,String password);
}
@Repository
public class BookDaoImpl implements BookDao {

    public String findName(int id,String password) {
        System.out.println("id:"+id);
        return "itcast";
    }
}
```

(2)修改 App 类，调用方法传入多个参数

```java
public class App {
    public static void main(String[] args) {
        ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringConfig.class);
        BookDao bookDao = ctx.getBean(BookDao.class);
        String name = bookDao.findName(100,"itheima");
        System.out.println(name);
    }
}
```

(3)运行 App，查看结果,说明两个参数都已经被获取到

![1630233548743](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021769.png)

##### 环绕通知获取方式

环绕通知使用的是 ProceedingJoinPoint，因为 ProceedingJoinPoint 是 JoinPoint 类的子类，所以对于 ProceedingJoinPoint 类中应该也会有对应的`getArgs()`方法，我们去验证下:

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @Around("pt()")
    public Object around(ProceedingJoinPoint pjp)throws Throwable {
        Object[] args = pjp.getArgs();
        System.out.println(Arrays.toString(args));
        Object ret = pjp.proceed();
        return ret;
    }
	//其他的略
}
```

运行 App 后查看运行结果，说明 ProceedingJoinPoint 也是可以通过 getArgs()获取参数

![1630233974310](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021770.png)

**注意:**

- pjp.proceed()方法是有两个构造方法，分别是:

  ![1630234756123](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021771.png)

  - 调用无参数的 proceed，当原始方法有参数，会在调用的过程中自动传入参数

  - 所以调用这两个方法的任意一个都可以完成功能

  - 但是当需要修改原始方法的参数时，就只能采用带有参数的方法,如下:

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @Around("pt()")
    public Object around(ProceedingJoinPoint pjp) throws Throwable{
        Object[] args = pjp.getArgs();
        System.out.println(Arrays.toString(args));
        args[0] = 666;
        Object ret = pjp.proceed(args);
        return ret;
    }
  //其他的略
}
```

有了这个特性后，我们就可以在环绕通知中对原始方法的参数进行拦截过滤，避免由于参数的问题导致程序无法正确运行，保证代码的健壮性。

#### 4.4.3 获取返回值

对于返回值，只有返回后`AfterReturing`和环绕`Around`这两个通知类型可以获取，具体如何获取?

##### 环绕通知获取返回值

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @Around("pt()")
    public Object around(ProceedingJoinPoint pjp) throws Throwable{
        Object[] args = pjp.getArgs();
        System.out.println(Arrays.toString(args));
        args[0] = 666;
        Object ret = pjp.proceed(args);
        return ret;
    }
	//其他的略
}
```

上述代码中，`ret`就是方法的返回值，我们是可以直接获取，不但可以获取，如果需要还可以进行修改。

##### 返回后通知获取返回值

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @AfterReturning(value = "pt()",returning = "ret")
    public void afterReturning(Object ret) {
        System.out.println("afterReturning advice ..."+ret);
    }
	//其他的略
}
```

==注意:==

(1)参数名的问题

![1630237320870](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021772.png)

(2)afterReturning 方法参数类型的问题

参数类型可以写成 String，但是为了能匹配更多的参数类型，建议写成 Object 类型

(3)afterReturning 方法参数的顺序问题

![1630237586682](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021773.png)

运行 App 后查看运行结果，说明返回值已经被获取到

![1630237372286](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021774.png)

#### 4.4.4 获取异常

对于获取抛出的异常，只有抛出异常后`AfterThrowing`和环绕`Around`这两个通知类型可以获取，具体如何获取?

##### 环绕通知获取异常

这块比较简单，以前我们是抛出异常，现在只需要将异常捕获，就可以获取到原始方法的异常信息了

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @Around("pt()")
    public Object around(ProceedingJoinPoint pjp){
        Object[] args = pjp.getArgs();
        System.out.println(Arrays.toString(args));
        args[0] = 666;
        Object ret = null;
        try{
            ret = pjp.proceed(args);
        }catch(Throwable throwable){
            t.printStackTrace();
        }
        return ret;
    }
	//其他的略
}
```

在 catch 方法中就可以获取到异常，至于获取到异常以后该如何处理，这个就和你的业务需求有关了。

##### 抛出异常后通知获取异常

```java
@Component
@Aspect
public class MyAdvice {
    @Pointcut("execution(* edu.note.dao.BookDao.findName(..))")
    private void pt(){}

    @AfterThrowing(value = "pt()",throwing = "t")
    public void afterThrowing(Throwable t) {
        System.out.println("afterThrowing advice ..."+t);
    }
	//其他的略
}
```

如何让原始方法抛出异常，方式有很多，

```java
@Repository
public class BookDaoImpl implements BookDao {

    public String findName(int id,String password) {
        System.out.println("id:"+id);
        if(true){
            throw new NullPointerException();
        }
        return "itcast";
    }
}
```

==注意:==

![1630239939043](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021775.png)

运行 App 后，查看控制台，就能看的异常信息被打印到控制台

![1630239997560](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021776.png)

至此，AOP 通知如何获取数据就已经讲解完了，数据中包含`参数`、`返回值`、`异常(了解)`。
