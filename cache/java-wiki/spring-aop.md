---
title: Spring AOP
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring AOP

- AOP(Aspect Oriented Programming)面向切面编程，一种**编程范式**，指导开发者如何组织程序结构。
- OOP(Object Oriented Programming)面向对象编程

### 1.2 AOP 作用

- 作用:在不惊动原始设计的基础上为其进行功能增强，
前面咱们有技术就可以实现这样的功能即代理模式。

前面咱们有技术就可以实现这样的功能即`代理模式`。

### 1.3 AOP 核心概念

为了能更好的理解 AOP 的相关概念，我们准备了一个环境，整个环境的内容我们暂时可以不用关注，最主要的类为:`BookDaoImpl`

说了这么多，Spring 到底是如何实现的呢?

![1630144353462](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021741.png)

(1)前面一直在强调，Spring 的 AOP 是对一个类的方法在不进行任何修改的前提下实现增强。对于上面的案例中 BookServiceImpl 中有`save`,`update`,`delete`和`select`方法,这些方法我们给起了一个名字叫==连接点==

(2)在 BookServiceImpl 的四个方法中，`update`和`delete`只有打印没有计算万次执行消耗时间，但是在运行的时候已经有该功能，那也就是说`update`和`delete`方法都已经被增强，所以对于需要增强的方法我们给起了一个名字叫==切入点==

(3)执行 BookServiceImpl 的 update 和 delete 方法的时候都被添加了一个计算万次执行消耗时间的功能，将这个功能抽取到一个方法中，换句话说就是存放共性功能的方法，我们给起了个名字叫==通知==

(4)通知是要增强的内容，会有多个，切入点是需要被增强的方法，也会有多个，那哪个切入点需要添加哪个通知，就需要提前将它们之间的关系描述清楚，那么对于通知和切入点之间的关系描述，我们给起了个名字叫==切面==

(5)通知是一个方法，方法不能独立存在需要被写在一个类中，这个类我们也给起了个名字叫==通知类==

至此 AOP 中的核心概念就已经介绍完了，总结下:

- 连接点(JoinPoint)：程序执行过程中的任意位置，粒度为执行方法、抛出异常、设置变量等
  - 在 SpringAOP 中，理解为方法的执行
- 切入点(Pointcut):匹配连接点的式子
  - 在 SpringAOP 中，一个切入点可以描述一个具体方法，也可也匹配多个方法
    - 一个具体的方法:如 edu.note.dao 包下的 BookDao 接口中的无形参无返回值的 save 方法
    - 匹配多个方法:所有的 save 方法，所有的 get 开头的方法，所有以 Dao 结尾的接口中的任意方法，所有带有一个参数的方法
  - 连接点范围要比切入点范围大，是切入点的方法也一定是连接点，但是是连接点的方法就不一定要被增强，所以可能不是切入点。
- 通知(Advice):在切入点处执行的操作，也就是共性功能
  - 在 SpringAOP 中，功能最终以方法的形式呈现
- 通知类：定义通知的类
- 切面(Aspect):描述通知与切入点的对应关系。

### 3.1 AOP 工作流程

由于 AOP 是基于 Spring 容器管理的 bean 做的增强，所以整个工作过程需要从 Spring 加载 bean 说起:

#### 流程 1:Spring 容器启动

- 容器启动就需要去加载 bean,哪些类需要被加载呢?
- 需要被增强的类，如:BookServiceImpl
- 通知类，如:MyAdvice
- 注意此时 bean 对象还没有创建成功

#### 流程 2:读取所有切面配置中的切入点

![1630151682428](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021746.png)

- 上面这个例子中有两个切入点的配置，但是第一个`ptx()`并没有被使用，所以不会被读取。

#### 流程 3:初始化 bean

判定 bean 对应的类中的方法是否匹配到任意切入点

- 注意第 1 步在容器启动的时候，bean 对象还没有被创建成功。

- 要被实例化 bean 对象的类中的方法和切入点进行匹配

  ![1630152538083](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021747.png)

  - 匹配失败，创建原始对象,如`UserDao`
    - 匹配失败说明不需要增强，直接调用原始对象的方法即可。
  - 匹配成功，创建原始对象（目标对象）的代理对象,如:`BookDao`
    - 匹配成功说明需要对其进行增强
    - 对哪个类做增强，这个类对应的对象就叫做目标对象
    - 因为要对目标对象进行功能增强，而采用的技术是动态代理，所以会为其创建一个代理对象
    - 最终运行的是代理对象的方法，在该方法中会对原始方法进行功能增强

#### 验证容器中是否为代理对象

为了验证 IOC 容器中创建的对象和我们刚才所说的结论是否一致，首先先把结论理出来:

- 如果目标对象中的方法会被增强，那么容器中将存入的是目标对象的代理对象
- 如果目标对象中的方法不被增强，那么容器中将存入的是目标对象本身。

### 3.2 AOP 核心概念

在上面介绍 AOP 的工作流程中，我们提到了两个核心概念，分别是:

- 目标对象(Target)：原始功能去掉共性功能对应的类产生的对象，这种对象是无法直接完成最终工作的
- 代理(Proxy)：目标对象无法直接完成工作，需要对其进行功能回填，通过原始对象的代理对象实现

上面这两个概念比较抽象，简单来说，

目标对象就是要增强的类(如:BookServiceImpl 类)对应的对象，也叫原始对象，不能说它不能运行，只能说它在运行的过程中对于要增强的内容是缺失的。

SpringAOP 是在不改变原有设计(代码)的前提下对其进行增强的，它的底层采用的是代理模式实现的，所以要对原始对象进行增强，就需要对原始对象创建代理对象，在代理对象中的方法把通知(如:MyAdvice 中的 method 方法)内容加进去，就实现了增强,
这就是我们所说的代理(Proxy)。

## 4，AOP 配置管理

### 4.1 AOP 切入点表达式 p34

前面的案例中，有涉及到如下内容:

![1630155937718](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021750.png)

对于 AOP 中切入点表达式，我们总共会学习三个内容，分别是`语法格式`、`通配符`和`书写技巧`。

#### 4.1.1 语法格式

首先我们先要明确两个概念:

- 切入点:要进行增强的方法
- 切入点表达式:要进行增强的方法的描述方式

对于切入点的描述，我们其实是有两中方式的，先来看下前面的例子

![1630156172790](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021751.png)

描述方式一：执行 edu.note.dao 包下的 BookDao 接口中的无参数 update 方法

```java
execution(void edu.note.dao.BookDao.update())
```

描述方式二：执行 edu.note.dao.impl 包下的 BookDaoImpl 类中的无参数 update 方法

```java
execution(void edu.note.dao.impl.BookDaoImpl.update())
```

因为调用接口方法的时候最终运行的还是其实现类的方法，所以上面两种描述方式都是可以的。

对于切入点表达式的语法为:

- 切入点表达式标准格式：动作关键字(访问修饰符 返回值 包名.类/接口名.方法名(参数) 异常名）

对于这个格式，我们不需要硬记，通过一个例子，理解它:

```java
execution(public User edu.note.service.UserService.findById(int))
```

- execution：动作关键字，描述切入点的行为动作，例如 execution 表示执行到指定切入点
- public: 访问修饰符,还可以是 public，private 等，可以省略
- User：返回值，写返回值类型
- edu.note.service：包名，多级包使用点连接
- UserService:类/接口名称
- findById：方法名
- int: 参数，直接写参数的类型，多个类型用逗号隔开
- 异常名：方法定义中抛出指定异常，可以省略

#### 4.1.2 通配符

`*`:单个独立的任意符号，可以独立出现，也可以作为前缀或者后缀的匹配符出现

```java
execution(public * edu.note.*.UserService.find*(*))
```

匹配 edu.note 包下的任意包中的 UserService 类或接口中所有 find 开头的带有一个参数的方法

`..`：多个连续的任意符号，可以独立出现，常用于简化包名与参数的书写

```java
execution(public User com..UserService.findById(..))
```

匹配 com 包下的任意包中的 UserService 类或接口中所有名称为 findById 的方法

`+`：专用于匹配子类类型

```java
execution(* *..*Service+.*(..))
```

这个使用率较低，描述子类的，咱们做 JavaEE 开发，继承机会就一次，使用都很慎重，所以很少用它。`*Service+`，表示所有以 Service 结尾的接口的子类。

```java
execution(void edu.note.dao.BookDao.update())
匹配接口，能匹配到
execution(void edu.note.dao.impl.BookDaoImpl.update())
匹配实现类，能匹配到
execution(* edu.note.dao.impl.BookDaoImpl.update())
返回值任意，能匹配到
execution(* edu.note.dao.impl.BookDaoImpl.update(*))
返回值任意，但是update方法必须要有一个参数，无法匹配，要想匹配需要在update接口和实现类添加参数
execution(void com.*.*.*.*.update())
返回值为void,com包下的任意包三层包下的任意类的update方法，匹配到的是实现类，能匹配
execution(void com.*.*.*.update())
返回值为void,com包下的任意两层包下的任意类的update方法，匹配到的是接口，能匹配
execution(void *..update())
返回值为void，方法名是update的任意包下的任意类，能匹配
execution(* *..*(..))
匹配项目中任意类的任意方法，能匹配，但是不建议使用这种方式，影响范围广
execution(* *..u*(..))
匹配项目中任意包任意类下只要以u开头的方法，update方法能满足，能匹配
execution(* *..*e(..))
匹配项目中任意包任意类下只要以e结尾的方法，update和save方法能满足，能匹配
execution(void com..*())
返回值为void，com包下的任意包任意类任意方法，能匹配，*代表的是方法
execution(* edu.note.*.*Service.find*(..))
将项目中所有业务层方法的以find开头的方法匹配
execution(* edu.note.*.*Service.save*(..))
将项目中所有业务层方法的以save开头的方法匹配
```

后面两种更符合我们平常切入点表达式的编写规则

#### 4.1.3 书写技巧 17min21

对于切入点表达式的编写其实是很灵活的，那么在编写的时候，有没有什么好的技巧让我们用用:

- 所有代码按照标准规范开发，否则以下技巧全部失效
- 描述切入点通**==常描述接口==**，而不描述实现类,如果描述到实现类，就出现紧耦合了
- 访问控制修饰符针对接口开发均采用 public 描述（**==可省略访问控制修饰符描述==**）
- 返回值类型对于增删改类使用精准类型加速匹配，对于查询类使用\*通配快速描述
- **==包名==**书写**==尽量不使用..匹配==**，效率过低，常用\*做单个包描述匹配，或精准匹配
- **==接口名/类名==**书写名称与模块相关的**==采用\*匹配==**，例如 UserService 书写成\*Service，绑定业务层接口名
- **==方法名==**书写以**==动词==**进行**==精准匹配==**，名词采用*匹配，例如 getById 书写成 getBy*,selectAll 书写成 selectAll
- 参数规则较为复杂，根据业务方法灵活调整
- 通常**==不使用异常==**作为**==匹配==**规则

### 4.2 AOP 通知类型 p35

前面的案例中，有涉及到如下内容:

![1630164718080](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021753.png)

它所代表的含义是将`通知`添加到`切入点`方法执行的==前面==。

除了这个注解外，还有没有其他的注解，换个问题就是除了可以在前面加，能不能在其他的地方加?

#### 4.2.1 类型介绍

我们先来回顾下 AOP 通知:

- AOP 通知描述了抽取的共性功能，根据共性功能抽取的位置不同，最终运行代码时要将其加入到合理的位置

通知具体要添加到切入点的哪里?

共提供了 5 种通知类型:

- 前置通知
- 后置通知
- **==环绕通知(重点)==**
- 返回后通知(了解)
- 抛出异常后通知(了解)

为了更好的理解这几种通知类型，我们来看一张图

![1630166147697](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021754.png)

1. 前置通知，追加功能到方法执行前,类似于在代码 1 或者代码 2 添加内容
2. 后置通知,追加功能到方法执行后,不管方法执行的过程中有没有抛出异常都会执行，类似于在代码 5 添加内容
3. 返回后通知,追加功能到方法执行后，只有方法正常执行结束后才进行,类似于在代码 3 添加内容，如果方法执行抛出异常，返回后通知将不会被添加
4. 抛出异常后通知,追加功能到方法抛出异常后，只有方法执行出异常才进行,类似于在代码 4 添加内容，只有方法抛出异常后才会被添加
5. 环绕通知,环绕通知功能比较强大，它可以追加功能到方法执行的前后，这也是比较常用的方式，它可以实现其他四种通知类型的功能，具体是如何实现的，需要我们往下学习。

### 通知类型总结

#### 知识点 1：@After

| 名称 | @After                                                                     |
| ---- | -------------------------------------------------------------------------- |
| 类型 | 方法注解                                                                   |
| 位置 | 通知方法定义上方                                                           |
| 作用 | 设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法后运行 |

#### 知识点 2：@AfterReturning

| 名称 | @AfterReturning                                                                      |
| ---- | ------------------------------------------------------------------------------------ |
| 类型 | 方法注解                                                                             |
| 位置 | 通知方法定义上方                                                                     |
| 作用 | 设置当前通知方法与切入点之间绑定关系，当前通知方法在原始切入点方法正常执行完毕后执行 |

#### 知识点 3：@AfterThrowing

| 名称 | @AfterThrowing                                                                       |
| ---- | ------------------------------------------------------------------------------------ |
| 类型 | 方法注解                                                                             |
| 位置 | 通知方法定义上方                                                                     |
| 作用 | 设置当前通知方法与切入点之间绑定关系，当前通知方法在原始切入点方法运行抛出异常后执行 |

#### 知识点 4：@Around

| 名称 | @Around                                                                      |
| ---- | ---------------------------------------------------------------------------- |
| 类型 | 方法注解                                                                     |
| 位置 | 通知方法定义上方                                                             |
| 作用 | 设置当前通知方法与切入点之间的绑定关系，当前通知方法在原始切入点方法前后运行 |

==**环绕通知注意事项**==

1. 环绕通知必须依赖形参 ProceedingJoinPoint 才能实现对原始方法的调用，进而实现原始方法调用前后同时添加通知
2. 通知中如果未使用 ProceedingJoinPoint 对原始方法进行调用将跳过原始方法的执行
3. 对原始方法的调用可以不接收返回值，通知方法设置成 void 即可，如果接收返回值，最好设定为 Object 类型
4. 原始方法的返回值如果是 void 类型，通知方法的返回值类型可以设置成 void,也可以设置成 Object
5. 由于无法预知原始方法运行后是否会抛出异常，因此环绕通知方法必须要处理 Throwable 异常

介绍完这么多种通知类型，具体该选哪一种呢?

我们可以通过一些案例加深下对通知类型的学习。

### 4.3 业务层接口执行效率

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

### 4.5 百度网盘密码数据兼容处理

#### 4.5.1 需求分析

需求: 对百度网盘分享链接输入密码时尾部多输入的空格做兼容处理。

![1630240203033](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021777.png)

问题描述:

- 点击链接，会提示，请输入提取码，如下图所示

  ![1630240528228](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151021778.png)

- 当我们从别人发给我们的内容中复制提取码的时候，有时候会多复制到一些空格，直接粘贴到百度的提取码输入框

- 但是百度那边记录的提取码是没有空格的

- 这个时候如果不做处理，直接对比的话，就会引发提取码不一致，导致无法访问百度盘上的内容

- 所以多输入一个空格可能会导致项目的功能无法正常使用。

- 此时我们就想能不能将输入的参数先帮用户去掉空格再操作呢?

答案是可以的，我们只需要在业务方法执行之前对所有的输入参数进行格式处理——trim()

- 是对所有的参数都需要去除空格么?

也没有必要，一般只需要针对字符串处理即可。

- 以后涉及到需要去除前后空格的业务可能会有很多，这个去空格的代码是每个业务都写么?

可以考虑使用 AOP 来统一处理。

- AOP 有五种通知类型，该使用哪种呢?

我们的需求是将原始方法的参数处理后在参与原始方法的调用，能做这件事的就只有环绕通知。

综上所述，我们需要考虑两件事:
①：在业务方法执行之前对所有的输入参数进行格式处理——trim()
②：使用处理后的参数调用原始方法——环绕通知中存在对原始方法的调用

#### 4.5.2 环境准备

- 创建一个 Maven 项目

##### 步骤 2:编写通知类

```java
@Component
@Aspect
public class DataAdvice {
    @Pointcut("execution(boolean edu.note.service.*Service.*(*,*))")
    private void servicePt(){}

}
```

##### 步骤 3:添加环绕通知

```java
@Component
@Aspect
public class DataAdvice {
    @Pointcut("execution(boolean edu.note.service.*Service.*(*,*))")
    private void servicePt(){}

    @Around("DataAdvice.servicePt()")
    // @Around("servicePt()")这两种写法都对
    public Object trimStr(ProceedingJoinPoint pjp) throws Throwable {
        Object ret = pjp.proceed();
        return ret;
    }

}
```

##### 步骤 4:完成核心业务，处理参数中的空格

```java
@Component
@Aspect
public class DataAdvice {
    @Pointcut("execution(boolean edu.note.service.*Service.*(*,*))")
    private void servicePt(){}

    @Around("DataAdvice.servicePt()")
    // @Around("servicePt()")这两种写法都对
    public Object trimStr(ProceedingJoinPoint pjp) throws Throwable {
        //获取原始方法的参数
        Object[] args = pjp.getArgs();
        for (int i = 0; i < args.length; i++) {
            //判断参数是不是字符串
            if(args[i].getClass().equals(String.class)){
                args[i] = args[i].toString().trim();
            }
        }
        //将修改后的参数传入到原始方法的执行中
        Object ret = pjp.proceed(args);
        return ret;
    }

}
```

### 5.1 AOP 的核心概念

- 概念：AOP(Aspect Oriented Programming)面向切面编程，一种编程范式
- 作用：在不惊动原始设计的基础上为方法进行功能==增强==
- 核心概念
  - 代理（Proxy）：SpringAOP 的核心本质是采用代理模式实现的
  - 连接点（JoinPoint）：在 SpringAOP 中，理解为任意方法的执行
  - 切入点（Pointcut）：匹配连接点的式子，也是具有共性功能的方法描述
  - 通知（Advice）：若干个方法的共性功能，在切入点处执行，最终体现为一个方法
  - 切面（Aspect）：描述通知与切入点的对应关系
  - 目标对象（Target）：被代理的原始对象成为目标对象

### 5.2 切入点表达式

- 切入点表达式标准格式：动作关键字(访问修饰符 返回值 包名.类/接口名.方法名（参数）异常名)

  ```
  execution(* edu.note.service.*Service.*(..))
  ```

- 切入点表达式描述通配符：

  - 作用：用于快速描述，范围描述
  - `*`：匹配任意符号（常用）
  - `..` ：匹配多个连续的任意符号（常用）
  - `+`：匹配子类类型

- 切入点表达式书写技巧

  1.按==标准规范==开发 2.查询操作的返回值建议使用\*匹配 3.减少使用..的形式描述包
  4.==对接口进行描述==，使用\*表示模块名，例如 UserService 的匹配描述为\*Service 5.方法名书写保留动词，例如 get，使用\*表示名词，例如 getById 匹配描述为 getBy\* 6.参数根据实际情况灵活调整

### 5.3 五种通知类型

- 前置通知
- 后置通知
- 环绕通知（重点）
  - 环绕通知依赖形参 ProceedingJoinPoint 才能实现对原始方法的调用
  - 环绕通知可以隔离原始方法的调用执行
  - 环绕通知返回值设置为 Object 类型
  - 环绕通知中可以对原始方法调用过程中出现的异常进行处理
- 返回后通知
- 抛出异常后通知

### 5.4 通知中获取参数

- 获取切入点方法的参数，所有的通知类型都可以获取参数
  - JoinPoint：适用于前置、后置、返回后、抛出异常后通知
  - ProceedingJoinPoint：适用于环绕通知
- 获取切入点方法返回值，前置和抛出异常后通知是没有返回值，后置通知可有可无，所以不做研究
  - 返回后通知
  - 环绕通知
- 获取切入点方法运行异常信息，前置和返回后通知是不会有，后置通知可有可无，所以不做研究
  - 抛出异常后通知
  - 环绕通知
