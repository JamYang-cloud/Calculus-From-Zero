# 微积分学习程序 (Calculus Learning App)

一个基于 **React + FastAPI** 的微积分交互式学习程序，支持课程浏览、知识点搜索、错题管理、函数图形可视化。

## 🚀 快速启动

### 系统要求

- **WSL2 Ubuntu** 或 Linux
- Python 3.12+
- Node.js 20+
- Windows 用户可通过 WSL 运行

### 一键启动（推荐）

双击桌面 `启动微积分学习.bat`，自动启动后端 + 前端 + 浏览器。

### 手动启动

```bash
# 1. 后端（终端1）
cd app
python3 -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt
cd backend
python3 -m uvicorn main:app --host 127.0.0.1 --port 8001

# 2. 前端（终端2）
cd app/frontend
npm install
npm run dev -- --host 127.0.0.1

# 3. 浏览器打开
# http://localhost:3000
```

### 依赖安装

```bash
# Python
pip install fastapi uvicorn pypinyin markdown sqlalchemy

# Node.js
cd app/frontend && npm install
```

## 📖 功能介绍

| 功能 | 说明 |
|------|------|
| **课程浏览** | 三栏布局，14个阶段173个单元，Markdown + LaTeX渲染 |
| **知识地图** | 8条知识主线可视化，进度追踪 |
| **全文搜索** | 拼音 + 标签过滤，FTS5搜索引擎 |
| **错题本** | 练习标注 → 错题回顾 → 笔记编辑 → 复习追踪 |
| **函数图形** | 20个典型函数 + 参数调节 + 自定义输入 + 面积计算 + 导数切线 |
| **学习进度** | Dashboard展示阶段完成度 |

## 🏗 架构

```
app/
├── backend/              # Python FastAPI 后端
│   ├── main.py           # 入口
│   ├── database/         # SQLite ORM 模型
│   ├── parser/           # Markdown解析 + LaTeX保护
│   └── routers/          # API路由 (units/progress/search/plot)
├── frontend/             # React + Vite 前端
│   └── src/components/   # 各功能组件
└── data/                 # 运行时数据 (自动生成)
```

## 📁 源文件

课程教材 Markdown 文件位于仓库根目录（`微积分课程_第XX单元_Obsidian版.md`），共173个单元。程序启动时自动解析所有文件。

## 🔧 配置

- **教材路径**：`backend/main.py` 中配置 `CONTENT_ROOT`
- **后端端口**：默认 8001
- **前端端口**：默认 3000

## 📄 License

MIT
