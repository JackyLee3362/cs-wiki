---
title: tar
date: 2025-06-30
draft: false
author: JackyLee
tags:
  - wiki
categories:
  - 命令行
comment: true
update_date: 2026-09-29
---

## 安装与验证

tar 将多个文件组织为归档；压缩通常由 gzip 等工具完成。Linux、macOS 一般已提供 tar，先检查版本或帮助：

```sh
tar --version
tar --help
# Ubuntu / Debian 缺少命令时
sudo apt update
sudo apt install tar
```

Windows 可先检查 tar.exe --version。不同平台可能是 GNU tar 或 bsdtar，高级选项以本机帮助为准。

## 基本使用：打包、查看与恢复

假定当前目录已有 notes 子目录，先创建压缩包，再检查其中的路径：

```sh
tar -czf notes.tar.gz notes
tar -tzf notes.tar.gz
mkdir restore-test
tar -xzf notes.tar.gz -C restore-test
```

- c 创建归档，t 列出内容，x 解包，三者分别使用。
- z 使用 gzip，f 指定归档文件名，C 指定目标目录。
- v 是可选的详细输出，不影响打包结果。

把归档放在源目录之外，避免把输出文件再次打包。解包到独立目录便于检查，也能避免覆盖当前文件。tar 本身不提供密码加密。


## 创建归档文件

将文件 file1、file2 和 directory 打包到一个名为 archive.tar 的归档文件中。

```sh
tar -cvf archive.tar file1 file2 directory
-c: 创建新的归档文件
-v: 显示详细输出，列出被添加到归档中的文件
-f: 指定归档文件的名称
```

## 解压归档文件

解压名为 archive.tar 的归档文件，还原其中包含的文件和目录。

```sh
tar -xvf archive.tar
-x: 解压归档文件
-v: 显示详细输出，列出被解压的文件
-f: 指定要解压的归档文件的名称
```

## 参考资料

### 官方资源

- [官网](https://www.gnu.org/software/tar/)
- [GitHub 源码镜像（非官方）](https://github.com/gnu-mirror-unofficial/tar)
- [官方文档](https://www.gnu.org/software/tar/manual/)

### 相关文章

- [restic](docs/app/backup/restic.md)
- [rclone](docs/app/rclone.md)

### 其他参考链接

- [GNU tar 官方手册](https://www.gnu.org/software/tar/manual/) #todo
