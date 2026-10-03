# 文档架构（重设计草案）

只描述 `docs/` 的目标结构与归档边界。目录树依据实际 `tree /A` 输出整理，最多展开三层，每个展示项都有说明；规划目录明确标注，尚未执行正文迁移。

## 目标目录

```text
 docs/                              # 唯一知识正文根目录
 +---index.md                       # 总览，只聚合栏目入口
 +---bases                          # 按课程章节学习基础原理
 |   +---computer-network           # 计算机网络
 |   +---computer-organization      # 计算机组成原理
 |   +---data-structures            # 数据结构与算法
 |   \---operating-system          # 操作系统
 +---lang                           # 语言语法、标准与工程实践
 |   +---cpp                        # C++
 |   +---css                        # CSS
 |   +---go                         # Go
 |   +---html                       # HTML
 |   +---java                       # Java
 |   +---javascript                 # JavaScript
 |   +---python                     # Python
 |   +---rust                       # Rust
 |   +---shell                      # Shell，规划从 wiki/lang 迁入
 |   +---sql                        # SQL，规划从 wiki/lang 迁入
 |   \---其他语言目录              # 按实际内容建立，如 YAML、TOML、XML
 +---wiki                           # 按主题查询独立知识条目
 |   +---app                        # 软件、命令与平台；按应用集中维护
 |   |   \---<应用>/               # 按实际名称建目录，集中用法与部署
 |   +---concept                    # 基础课程体系之外的技术概念
 |   +---framework                  # 开发框架与组件体系
 |   +---model                      # 模型原理与特性；产品客户端归 app
 |   \---skill                     # 独立技术技能；完整任务流程归 solution
 +---compare                        # 多个选项的差异、取舍与选型
 |   +---dev                        # 开发库、技术与架构比较
 |   +---service                    # 服务端与自托管服务比较
 |   +---software                   # 客户端与通用软件比较
 |   \---solution                  # 备份、组网等整体方案比较
 \---solution                      # 跨工具操作方案、排查步骤与实践手册
```

各栏目用 `index.md` 聚合入口，`_category_.json` 设置分类名称和排序；叶子文档按主题维护，不逐篇列出。单篇应用条目可直接使用 `<应用>.md`，正文较多时拆为应用目录中的 `index.md`、`deployment.md` 等。

## 归档边界

- 基础课程知识放 `bases`，语言学习放 `lang`；`wiki` 按工具、平台和独立技术主题组织。
- 基础概念只维护一份正文，例如虚拟内存归 `bases/operating-system`，其他条目引用它。
- 单应用的安装、用法、部署、升级和恢复集中在 `wiki/app`；`self-hosted` 不再作为独立目标分类。
- `service`、`cli`、`gui` 是可重叠的工具属性，不据此拆散同一应用正文。
- “选哪个”放 `compare`；“完成一个任务、排查一个问题”放 `solution`，通过链接引用相关应用。
- 只保存通用知识，具体现场、操作经过与个人经历归对应私有记录或随笔仓库。

## 待迁移内容

1. `wiki/base` 归入 `bases`；`wiki/concept` 中属于基础课程的条目同时核对，合并重复内容并保留独特正文。
2. `wiki/lang` 按语言归入 `lang`；解释器、编译器的工具用法仍归 `wiki/app`。
3. `self-hosted` 的应用正文归相应应用目录，跨工具方案归 `solution`；`compare/sop` 的操作步骤也归 `solution`。
4. `work` 逐篇按主题归档，现场与个人内容单独确认去向；`issue` 的通用排查内容并入 `solution`。
5. 移除迁空目录和空的 `docs/docs`，同步栏目入口、导航及引用，保留旧网址兼容入口。
6. 运行链接测试和生产构建，检查导航、草稿排除和旧链接；完成后将本草案改为实际架构。
