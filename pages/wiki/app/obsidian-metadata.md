---
title: obsidian-metadata
date: 2026-09-05
draft: true
author: JackyLee
tags:
  - 命令行
  - obsidian
  - python
categories:
  - 命令行
comment: true
---

`obsidian-metadata` 是一个 Python 命令行工具，
用来批量更新 Obsidian vault 里的元数据（metadata）。
它通过交互式菜单操作，覆盖了 frontmatter、行内字段（inline metadata）和标签（tag）的查看、添加、重命名、删除、移动、转置与批量导入导出。

> [!warning] 使用前先备份
> 这个工具会直接修改 vault 里的 Markdown 文件，一旦 commit 就无法撤销。强烈建议在提交改动前先备份整个 vault。在「commit」之前，工具不会对文件做任何实际修改。

## 安装

需要 Python 3.10 及以上。它是一个 CLI 工具，推荐用隔离环境安装：

```sh
# pipx（推荐，独立环境）
pipx install obsidian-metadata

# uv tool
uv tool install obsidian-metadata

# 或直接 pip
pip install obsidian-metadata
```

## 配置文件

首次运行时会在 `~/.obsidian_metadata.toml` 自动创建配置文件。可以用 `--config-file` 指定其他位置。

```toml
["Vault One"] # vault 名称

    # vault 的路径
    # Windows 用户注意：路径分隔符必须用 \\，例如 "C:\\Users\\username\\Documents\\Obsidian"
    path = "/path/to/vault"

    # 索引元数据时要忽略的文件夹
    exclude_paths = [".git", ".obsidian"]

    # 新 metadata 的插入位置，三选一：
    #    TOP:          紧跟在 frontmatter 之后
    #    AFTER_TITLE:  在 frontmatter 后的第一个标题之后
    #    BOTTOM:       笔记底部
    insert_location = "BOTTOM"

["Vault Two"]
    path = "/path/to/second_vault"
    exclude_paths = [".git", ".obsidian", "daily_notes"]
    insert_location = "AFTER_TITLE"
```

配置了多个 vault 时，工具会提示你选择一个。也可以用 `--vault-path` 参数在运行时直接指定 vault，绕过配置文件。

## 启动交互式菜单

安装后直接在终端运行：

```sh
obsidian-metadata
```

会进入一个交互式子命令菜单，所有操作都在里面完成。

## 常用 CLI 参数

```sh
# 直接指定 vault 路径（绕过配置文件）
obsidian-metadata --vault-path "/path/to/vault"

# 只预览改动，不做任何破坏性修改
obsidian-metadata --dry-run

# 指定配置文件位置
obsidian-metadata --config-file /path/to/config.toml

# 导入 / 导出 CSV、JSON
obsidian-metadata --import-csv updates.csv
obsidian-metadata --export-csv export.csv
obsidian-metadata --export-json export.json
obsidian-metadata --export-template template.csv

# 日志与详细程度
obsidian-metadata --log-to-file --log-file app.log
obsidian-metadata --verbose 2
```

## 查看元数据

在「Inspect Metadata」菜单里可以查看 vault 中的全部元数据：

- 查看所有 metadata
- 只看 frontmatter
- 只看行内 metadata
- 只看行内 tag

## 过滤范围

处理前可以用「Filter Notes in Scope」限定范围，支持多个过滤条件叠加：

- 路径过滤（正则）：按路径或文件名限定
- 元数据过滤：按某个 key 或 key/value 对限定
- 标签过滤：按正文里的 tag 限定
- 列出/清除过滤条件
- 列出范围内的笔记

## 添加元数据

「Add Metadata」可以向 frontmatter、行内字段或正文 tag 添加新元数据。

```sh
# 添加新 metadata 到 frontmatter
# 添加新的行内 metadata（插入位置由 insert_location 决定，默认 Bottom）
# 添加新的行内 tag（插入位置同样由 insert_location 决定）
```

添加行内 metadata / tag 时，`insert_location` 配置项决定了插入到笔记的哪个位置。

## 重命名元数据

「Rename Metadata」支持：

- 重命名一个 key 及其所有关联值
- 重命名某个 key 下的特定值
- 重命名正文里的 tag

## 删除元数据

「Delete Metadata」支持：

- 删除一个 key 及其所有关联值
- 删除某个 key 下的特定值
- 删除正文里的 tag

## 移动与转置

「Move Inline Metadata」把行内 metadata 移动到指定位置：

- 移到顶部（frontmatter 之后）
- 移到标题之后（第一个 markdown 标题下方）
- 移到底部

「Transpose Metadata」在行内 metadata 和 frontmatter 之间互转：

- 转置全部 metadata（frontmatter ↔ 行内）
- 转置某个 key 及其所有值
- 转置某个具体的 key:value 对

转置到行内时，插入位置由 `insert_location` 决定。

## 批量更新（CSV）

批量更新通过导入 CSV 完成，列头必须小写。列定义如下：

1. `path` - 笔记相对于 vault 根目录的路径
2. `type` - 元数据类型：`frontmatter`、`inline_metadata` 或 `tag`
3. `key` - 要添加的 key（tag 类型留空）
4. `value` - 要添加到 key 的值

```csv
path,type,key,value
folder 1/note1.md,frontmatter,fruits,apple
folder 1/note1.md,frontmatter,fruits,banana
folder 1/note1.md,inline_metadata,cars,toyota
folder 1/note1.md,inline_metadata,cars,honda
folder 1/note1.md,tag,,tag1
folder 1/note1.md,tag,,tag2
```

批量导入的行为需要留意：

- 只会更新 CSV 中匹配到路径的笔记
- 匹配笔记的**所有**元数据都会被改成 CSV 里的值
- 已有元数据会被重写，位置和格式可能变化
- 行内 tag 会忽略 `key` 列的值

可以用 `--export-template` 命令导出模板（包含所有笔记及其元数据），填好后再用 `--import-csv` 导入。

## 导出

「Export Metadata」支持把元数据导出成多种格式：

- 按元数据类型导出 CSV
- 按笔记路径导出 CSV
- 按元数据类型导出 JSON

## 提交与备份

所有改动在 commit 之前都不会写入磁盘。提交前可以：

- 「Review Changes」查看将要做的改动 diff
- 「Commit Changes」把改动写入磁盘（**不可撤销**）

「Vault Actions」菜单里可以创建或删除 vault 的备份。

## 已知限制

不支持多层（嵌套）frontmatter。

```yaml
# 这样没问题
---
key: "value"
key2:
    - one
    - two
    - three
key3: ["foo", "bar", "baz"]
key4: value

# 这样会出问题
---
key1:
    key2:
        - one
        - two
        - three
    key3:
        - one
        - two
        - three
---
```

## 参考资料

- [GitHub - natelandau/obsidian-metadata](https://github.com/natelandau/obsidian-metadata)
- [obsidian-metadata · PyPI](https://pypi.org/project/obsidian-metadata/)
