# 文档架构

正文以知识、选型、实践三类组织。本轮已将基础课程、原 base 与 concept 迁入 `theory`，将自部署迁入 `solution/self-hosted`；将 `compare` 中的选型对比按主题迁入 `app`（新建 database、selfhost、network、devtools、media、files、terminal、system、productivity 目录），开发库比较迁入 `framework`，概念比较迁入 `theory`，流程文档迁入 `solution`；随后取消 `wiki/` 层级，将 `wiki/app`、`wiki/framework`、`wiki/model`、`wiki/skill`、`wiki/theory` 平移至 `docs/` 顶层，并将原 `docs/lang` 并入 `wiki/lang`（现为 `docs/lang`）。大类名称与部分子分类仍待确定。

## 已落地的目录职责

只展示 `docs/`；结构依据 `tree /A` 输出整理，最多展开三层，省略叶子文档与无正文的空目录。应用细分不在此逐个展开。

```text
docs/                                   # 知识正文根目录
+---index.md                            # 站点总览，聚合栏目入口
+---articles.md                         # 历史文章索引，待并入相应栏目
+---app                                 # 软件、命令和平台条目
+---framework                           # 开发框架与库
+---model                               # 模型原理与特性
+---skill                               # 独立技术技能；完整任务流程归实践类
+---theory                              # 基础课程、概念与原理，已完成迁移
|   +---artificial-intelligence     # 人工智能与机器学习
|   +---computer-network            # 计算机网络
|   +---computer-organization       # 计算机组成原理
|   +---data-engineering            # 数据仓库与数据处理
|   +---data-structures             # 数据结构与算法
|   +---distributed-systems         # 分布式系统
|   +---information-theory          # 信息论
|   +---operating-system            # 操作系统
|   +---product                     # 产品与业务概念，归档位置待复核
|   +---reading                     # 基础知识阅读入口
|   +---security                    # 密码学、认证与访问控制
|   +---software-engineering        # 编译原理、设计模式与软件工程
|   \---theory-of-computation       # 计算理论
+---lang                                # 语言条目，原 docs/lang 与 wiki/lang 已合并
+---compare                             # 外部资料收集页（moc 系列），选型对比已按主题归入 app/framework/theory
|   \---software                        # moc 收集页与 collection 清单
+---solution                            # 任务步骤、系统方案与排查方法，名称暂用
|   \---self-hosted                     # 自部署配置、启动验证、备份恢复与运维
+---work                                # 混合历史内容，按下方方案逐篇归档
\---issue                               # 仅有问题入口，拟并入实践类
```

`index.md` 聚合入口，`_category_.json` 设置分类名称与排序。课程章节和独立条目在学科内共存，原有正文与引用保留；26 组同名但不同正文的概念条目暂用 `-concept.md` 区分，待逐篇合并精简。

## 正文引用方向

```text
compare  ───> app/theory/framework      # 收集页引用产品事实与原理
solution ───> compare/app               # 实践引用已有选型结论
solution ───> app/theory                 # 实践引用工具用法与基础原理
```

主题目录内可共存条目页与 compare 选型页（如 `app/browser/`），选型页就近引用同目录条目，无需跨类依赖。

wiki 不重复维护比较结论或完整实践流程；compare 不复制工具教程；solution 不复述原理。索引导航可跨类关联，不视为正文依赖。现有反向引用后续逐篇整理。（注：wiki 目录已拍平，本段职责约定适用于 app/theory/framework 等知识目录。）

## work 与 issue 的分类方案

- `work/mysql.md`、`work/redis.md`：归对应 `app` 的专题问答；与已有正文核对，避免重复。
- `work/microservices.md`：原理归 `theory/distributed-systems`，设计步骤归实践类；整篇迁移前先拆分内容。
- `work/moc-color-颜色.md`：提取日志配色配置，归对应工具或开发主题。
- `work/程序员.md`、`work/独立开发.md` 和两篇阅读材料：混有技术、职业与个人内容，逐项分流，不整体塞进某一知识目录。
- `work/index.md`：全部内容归档完成后删除该入口，不再按“工作场景”建分类。
- `issue/index.md`：当前无独立问题正文，拟删除入口；以后可复用的排查文章归实践类，现场日志归私有记录。

以上为待执行方案，本轮未搬迁 work、issue；lang 已完成合并。迁移直接更新站内引用和导航，不设置旧网址兼容入口。

## 大类命名建议

建议 `wiki / decisions / guides`，对应知识、选型和实践。`decisions` 比 compare 更强调选择结论，`guides` 能覆盖部署、任务步骤和排查；现有 compare、solution 暂不改名。

`doc`、`article` 和 `post` 是文体名称，无法区分三类职责。若更喜欢“专题分析＋实战手册”，可选 `wiki / analysis / handbook`；正式改名时同步迁移所有引用。
