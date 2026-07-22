"""
Calculus Learning App — Backend Server

FastAPI application serving:
  - Course unit browsing and rendering
  - Full-text search (FTS5)
  - Learning progress tracking
  - Exercise error book (错题本)
  - Function plotting (Phase 5)
  - Formula quick-reference (公式速查)
  - Application quick-reference (应用速查)

Extension points:
  - ContentSource registry for future subjects (linear algebra, probability)
  - Modular router architecture for new features

Run:
  cd backend && uvicorn main:app --reload --host 0.0.0.0 --port 8000
"""
import os
import sys

# Ensure backend directory is on path for imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import init_db
from routers import units, search, progress, plot, reference

# ─── App initialization ────────────────────────────────────────

app = FastAPI(
    title="微积分学习程序 API",
    description="Calculus Learning Application with progressive learning path, knowledge map, search, and reference modules.",
    version="0.2.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# CORS — allow frontend dev server (Vite default port 5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Router registration ───────────────────────────────────────
# Add new subject routers here for future expansion
app.include_router(units.router)
app.include_router(search.router)
app.include_router(progress.router)
app.include_router(plot.router)
app.include_router(reference.router)


# ─── Lifecycle events ──────────────────────────────────────────

@app.on_event("startup")
def startup():
    """Initialize database and build search index on startup."""
    init_db()
    # Build FTS5 search index
    try:
        from routers.search import _build_search_index
        _build_search_index()
        print("[OK] Search index built successfully")
    except Exception as e:
        print(f"[WARN] Search index build failed: {e}")
    
    # Verify content directory
    content_dir = os.environ.get(
        "CALCULUS_CONTENT_DIR",
        "/mnt/c/Users/jam08/OneDrive/文档/公众号写作/矩阵学习/微积分学习 从零开始"
    )
    if os.path.isdir(content_dir):
        unit_count = len([
            f for f in os.listdir(content_dir)
            if f.startswith("微积分课程_第") and f.endswith(".md")
        ])
        print(f"[OK] Content directory: {content_dir}")
        print(f"[OK] Found {unit_count} course units")
    else:
        print(f"[WARN] Content directory not found: {content_dir}")
        print("[WARN] Set CALCULUS_CONTENT_DIR environment variable to fix")


# ─── Root endpoint ─────────────────────────────────────────────

@app.get("/")
def root():
    """API root — returns available endpoints."""
    return {
        "app": "微积分学习程序",
        "version": "0.2.0",
        "endpoints": {
            "units": "/api/units/",
            "stages": "/api/units/stages",
            "knowledge_map": "/api/units/knowledge-map",
            "search": "/api/search?q=keyword",
            "progress": "/api/progress/units",
            "errors": "/api/progress/errors",
            "plot": "/api/plot/evaluate?expr=sin(x)&x_min=-10&x_max=10",
            "reference_formula": "/api/reference/formula",
            "reference_applications": "/api/reference/applications",
            "docs": "/api/docs",
        },
    }


# ─── Health check ──────────────────────────────────────────────

@app.get("/api/health")
def health_check():
    """Health check endpoint."""
    return {"status": "ok", "service": "calculus-learning-backend"}
