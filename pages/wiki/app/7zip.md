---
title: 7zip
date: 2026-08-17
draft: true
author: JackyLee
tags:
  - app/command-line
categories: 
cover:
  # image: 图片链接
  # alt: 文字内容
comment: true
---

## 基本使用

一个高压缩率的文件归档器。
更多信息：<https://manned.org/7z>.

## 版本

```bash
7z -version
```

## 帮助

```bash
7z --help
```

## tldr

```shell
# 归档一个文件或目录：
7z a 归档文件.7z 文件或目录

# 对已存在的归档文件加密（包括文件名）：
7z a 加密文件.7z -p密码 -mhe=on 归档文件.7z

# 提取一个已存在的 7z 文件，并保持原来的目录结构：
7z x 归档文件.7z

# 提取一个归档文件到指定的输出目录：
7z x 归档文件.7z -o输出目录

# 提取一个归档文件到标准输出：
7z x 归档文件.7z -so

# 使用指定的类型来归档文件：
7z a -t7z|bzip2|gzip|lzip|tar|zip 归档文件 文件或目录

# 列出一个归档文件的内容：
7z l 归档文件.7z
```

输出

```bash
7-Zip 22.01 (x64) : Copyright (c) 1999-2022 Igor Pavlov : 2022-07-15

Usage: 7z <command> [<switches>...] <archive_name> [<file_names>...] [@listfile]

<Commands>
  a : Add files to archive
  b : Benchmark
  d : Delete files from archive
  e : Extract files from archive (without using directory names)
  h : Calculate hash values for files
  i : Show information about supported formats
  l : List contents of archive
  rn : Rename files in archive
  t : Test integrity of archive
  u : Update files to archive
  x : eXtract files with full paths

<Switches>
  -- : Stop switches and @listfile parsing
  -ai[r[-|0]]{@listfile|!wildcard} : Include archives
  -ax[r[-|0]]{@listfile|!wildcard} : eXclude archives
  -ao{a|s|t|u} : set Overwrite mode
  -an : disable archive_name field
  -bb[0-3] : set output log level
  -bd : disable progress indicator
  -bs{o|e|p}{0|1|2} : set output stream for output/error/progress line
  -bt : show execution time statistics
  -i[r[-|0]]{@listfile|!wildcard} : Include filenames
  -m{Parameters} : set compression Method
    -mmt[N] : set number of CPU threads
    -mx[N] : set compression level: -mx1 (fastest) ... -mx9 (ultra)
  -o{Directory} : set Output directory
  -p{Password} : set Password
  -r[-|0] : Recurse subdirectories for name search
  -sa{a|e|s} : set Archive name mode
  -scc{UTF-8|WIN|DOS} : set charset for for console input/output
  -scs{UTF-8|UTF-16LE|UTF-16BE|WIN|DOS|{id}} : set charset for list files
  -scrc[CRC32|CRC64|SHA1|SHA256|*] : set hash function for x, e, h commands
  -sdel : delete files after compression
  -seml[.] : send archive by email
  -sfx[{name}] : Create SFX archive
  -si[{name}] : read data from stdin
  -slp : set Large Pages mode
  -slt : show technical information for l (List) command
  -snh : store hard links as links
  -snl : store symbolic links as links
  -sni : store NT security information
  -sns[-] : store NTFS alternate streams
  -so : write data to stdout
  -spd : disable wildcard matching for file names
  -spe : eliminate duplication of root folder for extract command
  -spf : use fully qualified file paths
  -ssc[-] : set sensitive case mode
  -sse : stop archive creating, if it can't open some input file
  -ssp : do not change Last Access Time of source files while archiving
  -ssw : compress shared files
  -stl : set archive timestamp from the most recently modified file
  -stm{HexMask} : set CPU thread affinity mask (hexadecimal number)
  -stx{Type} : exclude archive type
  -t{Type} : Set type of archive
  -u[-][p#][q#][r#][x#][y#][z#][!newArchiveName] : Update options
  -v{Size}[b|k|m|g] : Create volumes
  -w[{path}] : assign Work directory. Empty path means a temporary directory
  -x[r[-|0]]{@listfile|!wildcard} : eXclude filenames
  -y : assume Yes on all queries
```

## 🧪实验2：压缩与解压

### 压缩

```bash
# 默认压缩成 foobar.7z
7z a foobar foo
# 指定压缩格式为zip
7z a -tzip foobar foo
# 压缩多个文件
7z a foobar foo bar
```

### 解压

```bash
# 解压到当前目录
7z x foobar.7z

# 解压到指定目录
# 相对路径
7z x foobar.7z -otmp       # 解压到当前目录的tmp
7z x foobar.7z -o"./tmp"   # ~
7z x foobar.7z -o"../tmp"  # 解压到上级目录
# 绝对路径
7z x foobar.7z -oD:\tmp
7z x foobar.7z -oD:/tmp
# 失效命令
7z x foobar.7z -o./tmp
7z x foobar.7z -o./

# 如果路径不存在会递归创建
7z x foobar.7z -o"./tmp/foo/bar"
```

## 参考资料

- [为什么7-Zip至今没取代ZIP？ - 知乎](https://www.zhihu.com/question/61923557/answer/2463906401)
- [知名压缩软件 xz 被发现有后门，影响有多大？如何应对？ - 知乎](https://www.zhihu.com/question/650826484/answer/3449022153)