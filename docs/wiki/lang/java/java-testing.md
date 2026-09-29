---
title: Java Testing
description: Java 单元测试框架与工具
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - 测试
categories:
  - 编程语言
comment: true
---

> Java 测试生态包含 JUnit、Mockito、Spock 等多个框架，覆盖单元测试、集成测试和 Mock 测试。

## JUnit

### JUnit 4

JUnit 4 使用注解驱动测试，`@RunWith` 用于指定测试运行器：

```java
// 用 JUnit4 来运行
@RunWith(JUnit4.class)

// 让测试运行于 Spring 测试环境
@RunWith(SpringJUnit4ClassRunner.class)
// 如果 junit 版本 >= 4.12，建议
@RunWith(SpringRunner.class)

// Mock 测试
@RunWith(MockitoJUnitRunner.class)

// 参数化测试
@RunWith(Parameterized.class)

// 测试套件
@RunWith(Suite.class)
```

### JUnit 5

JUnit 5 引入了大量新特性，包括扩展模型、动态测试、参数化测试等。

## Spring + JUnit 整合

```java
// 设置类运行器
@RunWith(SpringJUnit4ClassRunner.class)
// 设置 Spring 环境对应的配置类
@ContextConfiguration(classes = {SpringConfiguration.class})
public class AccountServiceTest {
    @Autowired
    private AccountService accountService;

    @Test
    void testFindById(){
        System.out.println(accountService.findById(1));
    }
}
```

- 测试注解配置类：`@ContextConfiguration(classes = 配置类.class)`
- 测试配置文件：`@ContextConfiguration(locations={"classpath:applicationContext.xml"})`

## Mock / Stub / Spy

| 特性 | Mock | Stub | Spy |
|------|------|------|-----|
| 默认行为 | 无行为 | 无行为 | 执行真实方法 |
| 交互验证 | 支持 | 不支持 | 支持 |
| 返回值 | 需声明 | 需声明 | 可声明 |
| 真实逻辑 | 不执行 | 不执行 | 默认执行 |
| 适用场景 | 交互验证 | 预设返回值 | 部分替换/副作用验证 |

### Mock

完全模拟对象，所有方法调用默认无行为，只有你明确声明的交互才有响应。

```groovy
def service = Mock(UserService)
1 * service.getUser(1) >> new User(1, "foo")
```

### Stub

用于提供方法的预设返回值，隔离外部依赖。只关心返回什么，不关心调用次数。

```groovy
def service = Stub(UserService)
service.getUser(1) >> new User(1, "foo")
```

### Spy

部分模拟对象，默认会执行真实方法体，除非你明确声明某个方法要拦截。

```groovy
def list = Spy(ArrayList)
list.get(0) >> "foo" // 只有 get(0) 被替换
```

## 其他测试框架

- **Mockito**：Java 最流行的 Mock 框架
- **PowerMock**：扩展 Mockito，支持静态方法、私有方法 Mock
- **Spock**：基于 Groovy 的 BDD 风格测试框架

## 参考资料

- [Junit 的 @RunWith()：Runner，即 Junit 的运行器 - CSDN](https://blog.csdn.net/u011835956/article/details/113950577) #todo
- [单元测试 @Rollback 事务回滚避免脏数据 - 博客园](https://www.cnblogs.com/better-farther-world2099/articles/17115126.html) #todo
- [JUnit 5 tutorial - Learn how to write unit tests](https://www.vogella.com/tutorials/JUnit/article.html) #todo
- [Mockito 应用指南 | Java 教程](https://hezhiqiang8909.gitbook.io/java/docs/javalib/mockito) #todo
- [Powermock2.0.0 详细总结 - 博客园](https://www.cnblogs.com/AdaiCoffee/p/10700097.html) #todo
- [Spock 单测利器的写法-理莎](https://tech.taobao.org/news/tusv18) #todo
- [Spock 代码讲解-异常测试 - 老 K 的 Java 博客](https://javakk.com/292.html) #todo
- [spockframework/spock-example](https://github.com/spockframework/spock-example) #todo
- [深入了解 Spock 框架的注解 - 掘金](https://juejin.cn/post/7278973147474231356) #todo
- [Spock 框架 Mock 对象、方法经验总结 · 测试之家](https://testerhome.com/topics/32175) #todo
- [Spock 单元测试框架介绍以及在美团优选的实践 - 美团技术团队](https://tech.meituan.com/2021/08/06/spock-practice-in-meituan.html) #todo
- [Spock Framework Reference Documentation](https://spockframework.org/spock/docs/2.4-SNAPSHOT/all_in_one.html) #todo
- [@RunWith 注解的作用 - 博客园](https://www.cnblogs.com/Proximacentaurus/p/13696675.html) #todo
