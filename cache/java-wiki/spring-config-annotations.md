---
title: Spring Config Annotations
description:
date: 2026-09-07
update_date:
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# Spring Config Annotations

### @Value

获得配置文件中的值

```java
class Demo{
    @Value("${aliyun.oss.bucketName}")
    private String bucketName;
}
```

在`application.properties`中获得

```properties
aliyun.oss.bucketName=tlias-jacky
# 如果是获取环境变量
aliyun.oss.envBucketName=${BUCKET_NAME}
```

### @ConfigurationProperties

1. 首先必须 yml 中的配置名与类中的变量名保持一致
2. 引入依赖，有了这个依赖，就会有相应的提示信息

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
</dependency>
```

```yml
aliyun:
  oss:
    endpoint: https://oss-cn-beijing.aliyuncs.com
    accessKey: ${OSS_ACCESS_KEY_ID}
    accessKeySecret: ${OSS_ACCESS_KEY_SECRET}
    bucketName: tlias-jacky
```

```java
@Data
@Component
@ConfigurationProperties(prefix="aliyun.oss")
public class AliOSSUtils{
    private String endpoint;
    private String accessKey;
    private String accessKeySecret;
    private String bucketName;

}
```
