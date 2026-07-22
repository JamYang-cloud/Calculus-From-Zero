# 微积分学习程序 — 架构设计文档 v0.1

> Phase 1 完成日期: 2026-07-21
> 状态: Phase 1 框架搭建完成，端到端验证通过

---

## 1. 项目概述

基于172个微积分课程单元（Obsidian Markdown格式），构建一个本地优先的Web学习应用，支持循序渐进的课程浏览、知识点搜索、题目追踪和函数图形可视化。

### 设计原则

- **本地优先**: 数据存储在本地SQLite，不依赖外部服务
- **内容与状态分离**: 课程内容来自Markdown文件（可版本控制），用户进度存储于数据库
- **可扩展**: ContentSource抽象层允许未来添加线性代数、概率论等学科
- **迁移友好**: Web应用架构可部署到服务器或打包为桌面/移动APP

---

## 2. 技术栈

| 层 | 技术 | 选型理由 |
|---|---|---|
| 前端框架 | React 19 + Vite | 生态成熟，KaTeX/Plotly集成好 |
| 路由 | react-router-dom v7 | SPA路由 |
| 数学渲染 | KaTeX (react-katex) | 渲染速度快，支持标准LaTeX |
| 函数图形 | Plotly.js (Phase 5) | 交互式科学绘图 |
| 后端框架 | FastAPI (Python 3.12) | 高性能异步，自动API文档 |
| 数据库 | SQLite + SQLAlchemy ORM | 零配置，支持未来迁移 |
| 全文搜索 | SQLite FTS5 | 内置全文索引，无需外部服务 |
| Markdown解析 | Python markdown库 + 自定义LaTeX保护 | 保持公式完整性 |

---

## 3. 项目结构

```
calculus-learning-app/
├── backend/                       # Python FastAPI 后端
│   ├── main.py                    # 应用入口，路由注册，生命周期
│   ├── requirements.txt           # Python依赖
│   ├── database/
│   │   ├── __init__.py
│   │   ├── database.py            # 数据库连接，会话管理
│   │   └── models.py              # SQLAlchemy模型定义
│   ├── parser/
│   │   ├── __init__.py
│   │   └── md_parser.py           # Markdown解析，内容源抽象层
│   └── routers/
│       ├── __init__.py
│       ├── units.py               # 课程单元API
│       ├── search.py              # 全文搜索API
│       ├── progress.py            # 学习进度与错题API
│       └── plot.py                # 函数图形API (Phase 5)
├── frontend/                      # React + Vite 前端
│   ├── index.html
│   ├── vite.config.js             # Vite配置（含API代理）
│   ├── package.json
│   └── src/
│       ├── main.jsx               # 入口
│       ├── App.jsx                # 路由定义
│       ├── styles/
│       │   └── index.css          # 全局样式
│       └── components/
│           ├── Layout/
│           │   └── AppLayout.jsx   # 导航栏布局
│           ├── CourseViewer/       # 课程浏览（核心模块）
│           │   ├── CourseViewer.jsx # 主容器：三栏布局
│           │   ├── UnitSidebar.jsx  # 左侧阶段/单元导航
│           │   └── UnitContent.jsx  # 中间内容+右侧目录
│           ├── KnowledgeMap/
│           │   └── KnowledgeMap.jsx # 知识地图
│           ├── Search/
│           │   └── SearchPage.jsx   # 全文搜索
│           ├── ErrorBook/
│           │   └── ErrorBook.jsx    # 错题本
│           ├── FunctionPlot/
│           │   └── FunctionPlot.jsx # 函数图形 (Phase 5占位)
│           └── Progress/
│               └── Dashboard.jsx    # 学习进度面板
├── data/                          # 运行时数据
│   ├── calculus_learning.db       # SQLite数据库（自动创建）
│   └── search_index.db            # FTS5搜索索引（自动创建）
├── design_docs/
│   └── architecture.md            # 本文档
└── venv/                          # Python虚拟环境
```

---

## 4. 数据架构

### 4.1 内容层（只读）

内容源: `/mnt/c/Users/jam08/OneDrive/文档/公众号写作/矩阵学习/微积分学习 从零开始/`

- 173个 `.md` 文件（第00-172单元）
- YAML frontmatter + Markdown正文 + LaTeX公式
- 通过 `ContentSource` 抽象层读取，不写入

### 4.2 状态层（SQLite）

```
unit_progress       — 学习进度（未开始/进行中/已完成）
exercise_errors     — 错题本（关联单元+题目）
search_history      — 搜索记录
user_preferences    — 键值对偏好存储（可扩展）
```

### 4.3 搜索索引（SQLite FTS5）

启动时从Markdown文件构建，字段: unit_id, title, stage_name, tags, body

---

## 5. API设计

### 5.1 课程单元

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/units/` | 所有单元列表（元数据） |
| GET | `/api/units/{unit_id}` | 单个单元完整内容 |
| GET | `/api/units/stages` | 14个学习阶段 |
| GET | `/api/units/stage/{id}` | 阶段详情+单元列表 |
| GET | `/api/units/knowledge-map` | 知识地图结构化数据 |
| GET | `/api/units/main-lines` | 八条知识主线 |

### 5.2 搜索

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/search/?q=...&stage=...` | 全文搜索 |
| POST | `/api/search/rebuild-index` | 重建索引 |

### 5.3 进度与错题

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/progress/units` | 全部进度 |
| PUT | `/api/progress/units/{id}` | 更新进度 |
| GET | `/api/progress/stats` | 进度统计 |
| GET | `/api/progress/errors` | 错题列表 |
| POST | `/api/progress/errors` | 添加错题 |
| PUT | `/api/progress/errors/{id}/review` | 标记已复习 |
| DELETE | `/api/progress/errors/{id}` | 删除错题 |

### 5.4 函数图形 (Phase 5)

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/plot/evaluate?expr=...` | 函数求值数据 |

---

## 6. 前端路由

| 路径 | 组件 | 说明 |
|------|------|------|
| `/` | → 重定向到 `/course` | |
| `/course` | CourseViewer | 课程浏览（默认显示第0单元） |
| `/course/:unitId` | CourseViewer | 课程浏览（指定单元） |
| `/map` | KnowledgeMap | 知识地图 |
| `/search` | SearchPage | 全文搜索 |
| `/errors` | ErrorBook | 错题本 |
| `/plot` | FunctionPlot | 函数图形（Phase 5） |
| `/dashboard` | Dashboard | 学习进度面板 |

---

## 7. 可扩展架构

### 7.1 ContentSource 抽象层

```python
class ContentSource:
    """新增学科只需实现此接口"""
    def list_units(self) -> list[dict]: ...
    def load_unit(self, unit_id: int) -> UnitContent: ...
    def get_stages(self) -> dict: ...

class ContentRegistry:
    """注册多个内容源"""
    def register(self, subject_id: str, source: ContentSource): ...
    def get(self, subject_id: str) -> ContentSource: ...
```

### 7.2 添加新学科（如线性代数）

1. 创建 `LinearAlgebraContentSource(ContentSource)` 
2. 注册: `content_registry.register("linear_algebra", source)`
3. 添加路由: `app.include_router(linear_algebra.router)`
4. 前端添加新路由和导航链接
5. 数据库模型无需修改（复用 unit_progress 等表）

### 7.3 打包为桌面APP（未来）

- Electron: 包装前端 + 内嵌后端
- 或 Capacitor: 直接将Web应用打包
- 或部署到服务器: 相同代码，配置反向代理

---

## 8. 运行方式

### 启动后端
```bash
cd calculus-learning-app
source venv/bin/activate
cd backend
python3 -m uvicorn main:app --host 127.0.0.1 --port 8001
```

### 启动前端
```bash
cd calculus-learning-app/frontend
npm run dev
```

### 访问
- 前端: http://localhost:3000
- API文档: http://localhost:8001/api/docs
- API直接访问: http://localhost:8001/

---

## 9. 开发阶段

| 阶段 | 内容 | 状态 |
|------|------|------|
| Phase 1 | 项目骨架 + MD解析 + 课程浏览 | ✅ 完成 |
| Phase 2 | 知识地图完善 + 进度追踪UI | 🔜 待开发 |
| Phase 3 | 搜索增强（拼音、标签过滤等） | 🔜 待开发 |
| Phase 4 | 错题本完整交互 | 🔜 待开发 |
| Phase 5 | 函数图形模块（Plotly+表达式解析） | 🔜 待开发 |
| Phase 6 | 打包优化 + 一键启动脚本 | 🔜 待开发 |

---

## 10. 已知问题与待优化

1. **习题分组提取**: 当前 `_extract_exercise_groups` 匹配 `## A组` 格式，但实际格式可能为 `## X、A组`，需要调整正则
2. **KaTeX渲染**: 前端使用正则分割HTML再渲染KaTeX，复杂公式可能渲染失败，可后续改用统一的LaTeX处理流程
3. **Vite chunk大小**: 生产构建超过500KB，后续可拆分代码
4. **搜索斜杠**: `/api/search` 与 `/api/search/` 的尾斜杠问题，已在搜索前端代码中修复

---

## 11. 文件清单

```
# Phase 1 创建的文件
backend/main.py                              — FastAPI应用入口
backend/requirements.txt                     — Python依赖
backend/database/__init__.py
backend/database/database.py                 — 数据库连接管理
backend/database/models.py                   — ORM模型
backend/parser/__init__.py
backend/parser/md_parser.py                  — Markdown解析 + 内容源
backend/routers/__init__.py
backend/routers/units.py                     — 课程API
backend/routers/search.py                    — 搜索API (FTS5)
backend/routers/progress.py                  — 进度与错题API
backend/routers/plot.py                      — 图形API (占位)

frontend/index.html                          — HTML入口
frontend/vite.config.js                      — Vite配置
frontend/package.json                        — NPM依赖
frontend/src/main.jsx                        — React入口
frontend/src/App.jsx                         — 路由定义
frontend/src/styles/index.css                — 全局样式
frontend/src/components/Layout/AppLayout.jsx  — 导航布局
frontend/src/components/CourseViewer/CourseViewer.jsx  — 课程主容器
frontend/src/components/CourseViewer/UnitSidebar.jsx   — 单元导航
frontend/src/components/CourseViewer/UnitContent.jsx   — 内容渲染
frontend/src/components/KnowledgeMap/KnowledgeMap.jsx   — 知识地图
frontend/src/components/Search/SearchPage.jsx           — 搜索页
frontend/src/components/ErrorBook/ErrorBook.jsx         — 错题本
frontend/src/components/FunctionPlot/FunctionPlot.jsx   — 图形页(占位)
frontend/src/components/Progress/Dashboard.jsx          — 进度面板

design_docs/architecture.md                  — 本文档
```
