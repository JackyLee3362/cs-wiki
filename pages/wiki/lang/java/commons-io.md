---
title: Apache Commons IO
description: Apache Commons IO 常用工具类速查
date: 2026-09-07
draft: false
author: JackyLee
tags:
  - java
  - 工具库
categories:
  - 编程语言
comment: true
---

> Apache Commons IO 是 Java IO 操作的工具库，简化了文件读写、流操作等常见任务。

## IOUtils

### 拷贝

```java
IOUtils.copy(InputStream input, OutputStream output)
IOUtils.copyLarge(Reader input, Writer output) // 适合大文件
```

### 流转字符串/字节数组

```java
IOUtils.toString(InputStream input, String encoding)
IOUtils.toByteArray(InputStream input)
```

### 读写行

```java
IOUtils.readLines(Reader input)
IOUtils.writeLines(Collection<?> lines, String lineEnding, Writer writer)
```

### 比较

```java
IOUtils.contentEquals(InputStream input1, InputStream input2)
```

## FileUtils

### 复制

```java
FileUtils.copyDirectory(File srcDir, File destDir)
FileUtils.copyFile(File srcFile, File destFile)
FileUtils.copyURLToFile(URL source, File destination) // 下载文件
```

### 移动与删除

```java
FileUtils.moveDirectory(File srcDir, File destDir)
FileUtils.deleteDirectory(File directory)
FileUtils.cleanDirectory(File directory)
FileUtils.forceDelete(File file)
FileUtils.deleteQuietly(File file) // 不抛异常
```

### 读写文件

```java
FileUtils.readFileToString(File file, String encoding)
FileUtils.writeStringToFile(File file, String data, String encoding)
FileUtils.readLines(File file, String encoding)
```

### 目录操作

```java
FileUtils.forceMkdir(File directory)
FileUtils.iterateFiles(File directory, String[] extensions, boolean recursive)
FileUtils.listFiles(File directory, String[] extensions, boolean recursive)
```

## FilenameUtils

```java
FilenameUtils.getExtension(String filename)      // 获取扩展名
FilenameUtils.getBaseName(String filename)       // 去除目录和后缀
FilenameUtils.getName(String filename)           // 获取文件名
FilenameUtils.removeExtension(String filename)   // 移除扩展名
FilenameUtils.separatorsToUnix(String path)      // 转换分隔符
FilenameUtils.wildcardMatch(String filename, String wildcardMatcher) // 通配符匹配
```
