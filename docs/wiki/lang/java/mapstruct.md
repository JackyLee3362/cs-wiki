---
title: MapStruct
description: Java 对象映射框架
date: 2026-09-07
draft: true
author: JackyLee
tags:
  - java
  - 映射
categories:
  - 编程语言
comment: true
---

> MapStruct 是一个 Java 注解处理器，用于自动生成类型安全、高性能的 Bean 映射代码。

## 核心特性

- **编译时生成**：无运行时依赖，性能接近手写代码
- **类型安全**：编译期检查映射正确性
- **灵活配置**：支持自定义转换、忽略字段、嵌套映射

## 基本用法

```java
@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDto toDto(User user);
}
```

## 参考资料

- [mapstruct/mapstruct-examples: Examples for using MapStruct](https://github.com/mapstruct/mapstruct-examples) #todo
- [JackyLee3362/mapstruct-examples](https://github.com/JackyLee3362/mapstruct-examples/tree/note) #todo
