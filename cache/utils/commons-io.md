---
title: commons-io
description:
date: 2026-09-06
update_date:
  - 2026-09-06
draft: true
author: JackyLee
tags:
categories:
comment: true
---

# 1，IOUtils（数据相关）

### 拷贝方法：

copy方法有多个重载方法，满足不同的输入输出流

IOUtils.copy(InputStream input, OutputStream output)

IOUtils.copy(InputStream input, OutputStream output, int bufferSize)//可指定缓冲区大小

IOUtils.copy(InputStream input, Writer output, String inputEncoding)//可指定输入流的编码表

IOUtils.copy(Reader input, Writer output)

IOUtils.copy(Reader input, OutputStream output, String outputEncoding)//可指定输出流的编码表



### 拷贝大文件的方法：

// 这个方法适合拷贝较大的数据流，比如2G以上

IOUtils.copyLarge(Reader input, Writer output) // 默认会用1024*4的buffer来读取

IOUtils.copyLarge(Reader input, Writer output, char[] buffer)//可指定缓冲区大小

 

### 将输入流转换成字符串

IOUtils.toString(Reader input)

IOUtils.toString(byte[] input, String encoding)

IOUtils.toString(InputStream input, Charset encoding)

IOUtils.toString(InputStream input, String encoding)

IOUtils.toString(URI uri, String encoding)

IOUtils.toString(URL url, String encoding)

 

### 将输入流转换成字符数组

IOUtils.toByteArray(InputStream input)

IOUtils.toByteArray(InputStream input, int size)

IOUtils.toByteArray(URI uri)

IOUtils.toByteArray(URL url)

IOUtils.toByteArray(URLConnection urlConn)

IOUtils.toByteArray(Reader input, String encoding)

 

### 字符串读写

IOUtils.readLines(Reader input)

IOUtils.readLines(InputStream input, Charset encoding)

IOUtils.readLines(InputStream input, String encoding)

IOUtils.writeLines(Collection<?> lines, String lineEnding, Writer writer)

IOUtils.writeLines(Collection<?> lines, String lineEnding, OutputStream output, Charset encoding)

IOUtils.writeLines(Collection<?> lines, String lineEnding, OutputStream output, String encoding)





### 从一个流中读取内容

IOUtils.read(InputStream input, byte[] buffer)

IOUtils.read(InputStream input, byte[] buffer, int offset, int length) IOUtils.read(Reader input, char[] buffer)

IOUtils.read(Reader input, char[] buffer, int offset, int length)





### 把数据写入到输出流中

IOUtils.write(byte[] data, OutputStream output)

IOUtils.write(byte[] data, Writer output, Charset encoding)

IOUtils.write(byte[] data, Writer output, String encoding)

IOUtils.write(char[] data, Writer output)

IOUtils.write(char[] data, OutputStream output, Charset encoding)

IOUtils.write(char[] data, OutputStream output, String encoding)

IOUtils.write(String data, Writer output)

IOUtils.write(CharSequence data, Writer output)

 

### 从一个流中读取内容，如果读取的长度不够，就会抛出异常

IOUtils.readFully(InputStream input, int length)

IOUtils.readFully(InputStream input, byte[] buffer)

IOUtils.readFully(InputStream input, byte[] buffer, int offset, int length) IOUtils.readFully(Reader input, char[] buffer)

IOUtils.readFully(Reader input, char[] buffer, int offset, int length)



### 比较

IOUtils.contentEquals(InputStream input1, InputStream input2) // 比较两个流是否相等

IOUtils.contentEquals(Reader input1, Reader input2)

IOUtils.contentEqualsIgnoreEOL(Reader input1, Reader input2) // 比较两个流，忽略换行符

 

### 其他方法

IOUtils.skip(InputStream input, long toSkip) // 跳过指定长度的流

IOUtils.skip(Reader input, long toSkip)

IOUtils.skipFully(InputStream input, long toSkip) // 如果忽略的长度大于现有的长度，就会抛出异常

IOUtils.skipFully(Reader input, long toSkip)

 

# 2，FileUtils（文件/文件夹相关）

### 复制文件夹

FileUtils.copyDirectory(File srcDir, File destDir) // 复制文件夹（文件夹里面的文件内容也会复制）

FileUtils.copyDirectory(File srcDir, File destDir, FileFilter filter) // 复制文件夹，带有文件过滤功能

FileUtils.copyDirectoryToDirectory(File srcDir, File destDir) // 以子目录的形式将文件夹复制到到另一个文件夹下

 

### 复制文件

FileUtils.copyFile(File srcFile, File destFile) // 复制文件

FileUtils.copyFile(File input, OutputStream output) // 复制文件到输出流

FileUtils.copyFileToDirectory(File srcFile, File destDir) // 复制文件到一个指定的目录

FileUtils.copyInputStreamToFile(InputStream source, File destination) // 把输入流里面的内容复制到指定文件

FileUtils.copyURLToFile(URL source, File destination) // 把URL 里面内容复制到文件(可以下载文件)

FileUtils.copyURLToFile(URL source, File destination, int connectionTimeout, int readTimeout)

 

### 把字符串写入文件

FileUtils.writeStringToFile(File file, String data, String encoding)

FileUtils.writeStringToFile(File file, String data, String encoding, boolean append)

### 把字节数组写入文件

FileUtils.writeByteArrayToFile(File file, byte[] data)

FileUtils.writeByteArrayToFile(File file, byte[] data, boolean append) FileUtils.writeByteArrayToFile(File file, byte[] data, int off, int len) FileUtils.writeByteArrayToFile(File file, byte[] data, int off, int len, boolean append)



### 把集合里面的内容写入文件

// encoding：文件编码，lineEnding：每行以什么结尾

FileUtils.writeLines(File file, Collection<?> lines)

FileUtils.writeLines(File file, Collection<?> lines, boolean append)

FileUtils.writeLines(File file, Collection<?> lines, String lineEnding)

FileUtils.writeLines(File file, Collection<?> lines, String lineEnding, boolean append)

FileUtils.writeLines(File file, String encoding, Collection<?> lines)

FileUtils.writeLines(File file, String encoding, Collection<?> lines, boolean append)

FileUtils.writeLines(File file, String encoding, Collection<?> lines, String lineEnding)

FileUtils.writeLines(File file, String encoding, Collection<?> lines, String lineEnding, boolean append)



### 往文件里面写内容

FileUtils.write(File file, CharSequence data, Charset encoding)

FileUtils.write(File file, CharSequence data, Charset encoding, boolean append)

FileUtils.write(File file, CharSequence data, String encoding)

FileUtils.write(File file, CharSequence data, String encoding, boolean append)

 

### 文件移动

FileUtils.moveDirectory(File srcDir, File destDir) // 文件夹在内的所有文件都将移动FileUtils.moveDirectoryToDirectory(File src8, File destDir, boolean createDestDir) // 以子文件夹的形式移动到另外一个文件下

FileUtils.moveFile(File srcFile, File destFile) // 移动文件

FileUtils.moveFileToDirectory(File srcFile, File destDir, boolean createDestDir) // 以子文件的形式移动到另外一个文件夹下

FileUtils.moveToDirectory(File src8, File destDir, boolean createDestDir) // 移动文件或者目录到指定的文件夹内

 

### 清空和删除文件夹

FileUtils.deleteDirectory(File directory) // 删除文件夹，包括文件夹和文件夹里面所有的文件

FileUtils.cleanDirectory(File directory) // 清空文件夹里面的所有的内容

FileUtils.forceDelete(File file) // 删除，会抛出异常

FileUtils.deleteQuietly(File file) // 删除，不会抛出异常

 

### 创建文件夹

FileUtils.forceMkdir(File directory) // 创建文件夹(可创建多级)

FileUtils.forceMkdirParent(File file) // 创建文件的父级目录

 

### 获取文件输入/输出流

FileUtils.openInputStream(File file)

FileUtils.openOutputStream(File file)

### 读取文件

FileUtils.readFileToByteArray(File file) // 把文件读取到字节数组

FileUtils.readFileToString(File file, Charset encoding) // 把文件读取成字符串

FileUtils.readFileToString(File file, String encoding)

FileUtils.readLines(File file, Charset encoding) // 把文件读取成字符串集合

FileUtils.readLines(File file, String encoding)

 

### 测试两个文件的修改时间

FileUtils.isFileNewer(File file, Date date)

FileUtils.isFileNewer(File file, File reference)

FileUtils.isFileNewer(File file, long timeMillis)

FileUtils.isFileOlder(File file, Date date)

FileUtils.isFileOlder(File file, File reference)

FileUtils.isFileOlder(File file, long timeMillis)

 

 

### 文件/文件夹的迭代

FileUtils.iterateFiles(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)

FileUtils.iterateFiles(File directory, String[] extensions, boolean recursive)

FileUtils.iterateFilesAndDirs(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)

FileUtils.lineIterator(File file)

FileUtils.lineIterator(File file, String encoding)

 

FileUtils.listFiles(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)

FileUtils.listFiles(File directory, String[] extensions, boolean recursive)

FileUtils.listFilesAndDirs(File directory, IOFileFilter fileFilter, IOFileFilter dirFilter)

 

### 其他

FileUtils.isSymlink(File file) // 判断是否是符号链接

FileUtils.directoryContains(File directory, File child) // 判断文件夹内是否包含某个文件或者文件夹

 FileUtils.sizeOf(File file) // 获取文件或者文件夹的大小

FileUtils.getTempDirectory()// 获取临时目录文件

FileUtils.getTempDirectoryPath()// 获取临时目录路径

FileUtils.getUserDirectory()// 获取用户目录文件

FileUtils.getUserDirectoryPath()// 获取用户目录路径

FileUtils.touch(File file) // 创建文件

FileUtils.contentEquals(File file1, File file2) // 比较两个文件内容是否相同


# FilenameUtils（文件名/后缀名相关）

FilenameUtils.concat(String basePath, String fullFilenameToAdd) // 合并目录和文件名为文件全路径

FilenameUtils.getBaseName(String filename) // 去除目录和后缀后的文件名

FilenameUtils.getExtension(String filename) // 获取文件的后缀

FilenameUtils.getFullPath(String filename) // 获取文件的目录

FilenameUtils.getName(String filename) // 获取文件名

FilenameUtils.getPath(String filename) // 去除盘符后的路径

FilenameUtils.getPrefix(String filename) // 盘符

FilenameUtils.indexOfExtension(String filename) // 获取最后一个.的位置

FilenameUtils.indexOfLastSeparator(String filename) // 获取最后一个/的位置

FilenameUtils.normalize(String filename) // 获取当前系统格式化路径

FilenameUtils.removeExtension(String filename) // 移除文件的扩展名

FilenameUtils.separatorsToSystem(String path) // 转换分隔符为当前系统分隔符

FilenameUtils.separatorsToUnix(String path) // 转换分隔符为linux系统分隔符

FilenameUtils.separatorsToWindows(String path) // 转换分隔符为windows系统分隔符

FilenameUtils.equals(String filename1, String filename2) // 判断文件路径是否相同，非格式化

FilenameUtils.equalsNormalized(String filename1, String filename2) // 判断文件路径是否相同，格式化

FilenameUtils.directoryContains(String canonicalParent, String canonicalChild) // 判断目录下是否包含指定文件或目录

FilenameUtils.isExtension(String filename, String extension) // 判断文件扩展名是否包含在指定集合(数组、字符串)中

FilenameUtils.wildcardMatch(String filename, String wildcardMatcher) // 判断文件扩展名是否和指定规则匹配	
