---
title: Spring IoC/DI Annotations
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring IoC/DI Annotations

### 3.4 注解开发依赖注入

Spring 为了使用注解简化开发，并没有提供`构造函数注入`、`setter注入`对应的注解，只提供了自动装配的注解实现。

这个时候再次运行 App，就会报错

![1630034272959](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022187.png)

此时，按照类型注入就无法区分到底注入哪个对象，解决方案:`按照名称注入`

- 先给两个 Dao 类分别起个名称

  ```java
  @Repository("bookDao")
  public class BookDaoImpl implements BookDao {
      public void save() {
          System.out.println("book dao save ..." );
      }
  }
  @Repository("bookDao2")
  public class BookDaoImpl2 implements BookDao {
      public void save() {
          System.out.println("book dao save ...2" );
      }
  }
  ```

  此时就可以注入成功，但是得思考个问题:

  - @Autowired 是按照类型注入的，给 BookDao 的两个实现起了名称，它还是有两个 bean 对象，为什么不报错?

  - @Autowired 默认按照类型自动装配，如果 IOC 容器中同类的 Bean 找到多个，就按照变量名和 Bean 的名称匹配。因为变量名叫`bookDao`而容器中也有一个`booDao`，所以可以成功注入。

  - 分析下面这种情况是否能完成注入呢?

    ![1630036236150](https://assets-1302294329.cos.ap-shanghai.myqcloud.com/2025/md/202505151022188.png)

  - 不行，因为按照类型会找到多个 bean 对象，此时会按照`bookDao`名称去找，因为 IOC 容器只有名称叫`bookDao1`和`bookDao2`,所以找不到，会报`NoUniqueBeanDefinitionException`

#### 3.4.3 注解实现按照名称注入

当根据类型在容器中找到多个 bean,注入参数的属性名又和容器中 bean 的名称不一致，这个时候该如何解决，就需要使用到`@Qualifier`来指定注入哪个名称的 bean 对象。

```java
@Service
public class BookServiceImpl implements BookService {
    @Autowired
    @Qualifier("bookDao1")
    private BookDao bookDao;

    public void save() {
        System.out.println("book service save ...");
        bookDao.save();
    }
}
```

@Qualifier 注解后的值就是需要注入的 bean 的名称。

==注意:@Qualifier 不能独立使用，必须和@Autowired 一起使用==
