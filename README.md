# 计算机知识库

[访问知识库网站](https://wiki.jackylee.top) · [GitHub 项目](https://github.com/jackylee3362/cs-wiki)

使用官方 create-docusaurus classic JavaScript 模板初始化，基于 Docusaurus 3.10.2。

## 本地开发

推荐 Node.js 24（与 CI 一致）。

```sh
npm ci
npm start
```

默认地址：http://localhost:3000。依赖版本由 package-lock.json 固定，使用 npm ci 安装。

```sh
npm test
npm run build
npm run serve
```

构建产物在 build/。开发模式显示草稿，生产构建排除 draft: true 的文档。

本地查看生产构建：`npm run serve -- --host 127.0.0.1 --port 3000 --no-open`。浏览器访问 http://127.0.0.1:3000/。

## 内容维护

主页位于 src/pages/index.jsx，全宽 banner 实时绘制处理器与电路板，数据脉冲沿线路流动，正弦函数控制芯片浮动与投影视角，标题与“进入知识库”按钮叠在上方；动画默认自动播放；切换到后台时停止绘制。顶部右侧显示 GitHub 仓库图标，窄屏下也保持可见。原文档首页保留在 /overview/。搜索入口位于顶部导航栏最右侧，点击或使用 Ctrl+K 打开浮层，支持中文、英文；生产构建后运行 npm run serve 验证搜索。搜索不索引被排除的草稿。

- docs/：原 pages/ 的全部内容，保留目录结构，正文双链已迁移为标准 Markdown 链接。
- cache/：保持原样，不参与站点构建。
- 临时收集箱：[collection-note.local](../../Note.local/collection-note.local/README.md)，src/ 暂存待处理内容；用户确认后由目标仓库 skill 承接，全部分支验证完成后清理源项，不新增永久对话摘要。
- 内容分流：计算机通用知识 → cs-wiki，计算机随笔 → jackylee3362.github.io；公共知识 → common-wiki，日常随笔 → ob-note。一个事件可拆为知识与随笔，同一正文不复制。不再需要的内容经确认进入 archivebox（archive-note.local）；devops 历史内容逐步迁移。
- sidebars.js：基础知识按数据结构、计算机网络、计算机组成原理和操作系统分成独立侧边栏，顶部「基础」下拉菜单提供分类入口；章节通过 _category_.json 配置中文名称和顺序。wiki、自部署、工具比较、解决方案和工作按各自目录生成独立侧边栏；工作栏目位于 docs/work/，记录工作中遇到的问题。问题与解答保留总览入口和独立侧边栏。
- docusaurus.config.js：中文站点、根路径文档、数学公式与 Mermaid 配置。
- docs/lang/：顶部「语言」下拉菜单的内容目录，python、java、cpp、go、javascript、rust、html、css 各有独立目录、首页和自动生成的侧边栏。
- docs/self-hosted/：顶部「自部署」栏目的内容目录，按应用整理 compose.yaml、启动、备份恢复、运维与踩坑记录，Markdown 文档自动生成独立侧边栏。
- plugins/remark-project-links.mjs：让 Docusaurus 解析以项目根目录为基准的 docs/ 链接。
- link-migration-report.json：无法唯一定位目标的链接及候选文件，供人工核对。

文档内链接统一使用 `[名称](docs/目录/文件.md)`，标题锚点使用 `[名称](docs/目录/文件.md#标题)`。笔记嵌入转为跳转链接，不内嵌正文。代码块、行内代码和模板示例中的双链保持原样。

计算机通用知识由 `.agents/skills/cs-wiki-skill/SKILL.md` 承接，返回实际文件位置、网站页面与验证状态。collection 不保存完成后的对话摘要；所有分支验证成功后清除对应 src 源项，失败时保留未完成状态。

完善 wiki 工具条目时，在「参考资料」中提供官网、GitHub 仓库或源码镜像、官方文档、站内相关文章和其他参考链接；源码镜像需注明来源，原有外部链接保留并添加 #todo。

代码块统一使用三个反引号作为围栏，并标注语言，不使用波浪线围栏。

首页「进入知识库」链接到 docs/index.md 对应的 /overview/ 文档总览，展示 docs/ 下各栏目入口；基础知识分类从顶部「基础」菜单或首页「基础原理」进入。

迁移时优先按当前目录、文档根目录解析，再匹配唯一的路径后缀。缺失或歧义引用也转为标准链接，记录在检查报告中。构建时将 docs/ 路径转换为 Docusaurus 可解析的文件引用；缺失目标以及生产环境中的草稿目标只显示链接文字，避免生成无效站点导航。

原有 local:// 图片依赖作者电脑上的文件，迁移不会自动补齐。Markdown 链接和图片问题以构建警告报告，站点路由断链仍视为构建错误。

## 部署

.github/workflows/docusaurus.yml 在 PR 中测试并构建。推送到 main 或从 main 手动运行时，将 build/ 部署至现有阿里云 VPS 的 /opt/caddy/site/wiki/。沿用仓库 Secrets：

- ALIYUN_VPS_HOST
- ALIYUN_VPS_USER
- ALIYUN_VPS_SSH_KEY

网站域名为 [wiki.jackylee.top](https://wiki.jackylee.top)。本地迁移不会触发部署。

## 参考资料

- [cs-wiki 网站](http://wiki.jackylee.fun) #todo
- [Docusaurus 安装](https://docusaurus.io/docs/installation)
- [Docusaurus 部署](https://docusaurus.io/docs/deployment)
