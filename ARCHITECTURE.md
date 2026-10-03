# 项目架构

本仓库使用 Docusaurus。`docs/` 是知识正文，`src/` 是站点界面；文档按内容归类，同一主题优先更新已有条目。

## 文档目录

| 路径 | 用途 |
| --- | --- |
| `docs/index.md` | 知识库总览与各栏目的入口。 |
| `docs/bases/` | 数据结构、网络、组成原理、操作系统等基础知识。 |
| `docs/lang/` | 编程语言的系统性学习内容。 |
| `docs/wiki/` | 工具、概念、框架等可独立查阅的知识条目；工具通常放在 `app/`。 |
| `docs/self-hosted/` | 自部署应用的配置、启动、备份与运维。 |
| `docs/compare/` | 工具、服务和方案的横向比较与选型。 |
| `docs/solution/` | 面向具体目标的可复用操作方案。 |
| `docs/work/` | 工作相关的知识与实践。 |
| `docs/issue/` | 问题与解答。 |

各栏目由 `sidebars.js` 定义入口和侧边栏。新增文档先选择现有分类；跨栏目内容用链接关联，不复制正文。调整目录时同步检查索引、导航和站内链接。

## 站点与维护目录

| 路径 | 用途 |
| --- | --- |
| `src/pages/`、`src/components/`、`src/theme/`、`src/css/` | 页面、组件、主题覆盖和样式。 |
| `docusaurus.config.js` | 站点、文档路由与插件配置。 |
| `plugins/` | Markdown、链接和元数据处理。 |
| `tests/` | 内容处理与链接规则的测试。 |
| `.github/workflows/` | 构建与部署流程。 |
| `cache/` | 保留的缓存资料，不参与站点构建。 |

`README.md` 说明开发与部署；`CONTRIBUTING.md` 说明贡献流程；`AGENTS.md` 给出简要维护规则。`.docusaurus/`、`build/` 和 `node_modules/` 是生成目录，不在其中维护源码。