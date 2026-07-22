"""
API routes for full-text search across course content.

Uses SQLite FTS5 for indexed search with future extension points
for different content sources and search backends.
"""
import os
import sqlite3
from fastapi import APIRouter, HTTPException, Query
from parser.md_parser import CalculusContentSource, STAGES, content_registry

router = APIRouter(prefix="/api/search", tags=["search"])

CONTENT_DIR = os.environ.get(
    "CALCULUS_CONTENT_DIR",
    "/mnt/c/Users/jam08/OneDrive/文档/公众号写作/矩阵学习/微积分学习 从零开始"
)

# FTS5 index database path
INDEX_DB = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(__file__))),
    "data", "search_index.db"
)


def _build_search_index():
    """Build or rebuild the FTS5 search index from markdown files."""
    os.makedirs(os.path.dirname(INDEX_DB), exist_ok=True)
    
    conn = sqlite3.connect(INDEX_DB)
    conn.execute("DROP TABLE IF EXISTS unit_search")
    conn.execute("""
        CREATE VIRTUAL TABLE unit_search USING fts5(
            unit_id,
            title,
            stage_name,
            tags,
            body,
            pinyin,
            prefix='2 3 5'
        )
    """)
    
    source = CalculusContentSource(CONTENT_DIR)
    units = source.list_units()
    
    for unit in units:
        content = source.load_unit(unit["unit_id"])
        if content is None:
            continue
        
        stage_name = STAGES.get(content.meta.stage, type("X", (), {"name": ""})()).name
        tags = " ".join(content.meta.tags)
        title = content.meta.title
        
        # Generate pinyin initial letters for Chinese search
        # e.g. "导数基础" → "daoshu jichu" initials → "dsjc"
        pinyin_text = _to_pinyin_initials(title + " " + tags)
        
        conn.execute(
            "INSERT INTO unit_search(unit_id, title, stage_name, tags, body, pinyin) VALUES(?, ?, ?, ?, ?, ?)",
            (str(content.meta.unit_id), title, stage_name, tags, content.raw_markdown, pinyin_text)
        )
    
    conn.commit()
    conn.close()


def _to_pinyin_initials(text):
    """Convert Chinese text to pinyin initial letters for search.
    Falls back gracefully if pypinyin is not installed."""
    try:
        from pypinyin import lazy_pinyin
        return " ".join(lazy_pinyin(text))
    except ImportError:
        # Simple fallback: extract ASCII words as-is
        import re
        return " ".join(re.findall(r'[a-zA-Z0-9]+', text))


@router.get("/tags")
def list_tags():
    """Return all unique tags across all units for filter UI."""
    _ensure_index()
    conn = sqlite3.connect(INDEX_DB)
    cursor = conn.execute("SELECT tags FROM unit_search")
    all_tags = set()
    for row in cursor:
        for t in row[0].split():
            if t.strip():
                all_tags.add(t.strip())
    conn.close()
    return {"tags": sorted(all_tags)}


def _ensure_index():
    """Build index if it doesn't exist."""
    if not os.path.exists(INDEX_DB):
        _build_search_index()


def _build_search_query(q):
    """Build FTS5 query string. For pinyin (ASCII-only) queries, 
    split into space-separated tokens with prefix matching."""
    import re
    if re.match(r'^[a-zA-Z\s]+$', q):
        tokens = q.split()
        # Each token gets prefix wildcard for matching across all FTS5 columns
        return " ".join(f"{t}*" for t in tokens)
    return q


@router.get("/")
def search(
    q: str = Query("", min_length=0, description="Search query (can be empty when filtering by tag)"),
    stage: int = Query(None, description="Filter by stage ID"),
    tag: str = Query(None, description="Filter by tag (exact match)"),
    limit: int = Query(20, ge=1, le=50),
):
    """Full-text search across all course units."""
    _ensure_index()
    
    conn = sqlite3.connect(INDEX_DB)
    
    # Build conditions: handle empty query (tag-only or stage-only search)
    conditions = []
    params = []
    
    if q.strip():
        fts5_query = _build_search_query(q)
        conditions.append("unit_search MATCH ?")
        params.append(fts5_query)
    else:
        # No text query — return all matching stage/tag filters
        conditions.append("1=1")
    
    if stage is not None and stage in STAGES:
        info = STAGES[stage]
        conditions.append("CAST(unit_id AS INTEGER) BETWEEN ? AND ?")
        params.extend([info.unit_range[0], info.unit_range[1]])
    
    if tag:
        conditions.append("tags MATCH ?")
        params.append(tag)
    
    where_clause = " AND ".join(conditions)
    sql = f"""
        SELECT unit_id, title, stage_name, tags,
               snippet(unit_search, 4, '<mark>', '</mark>', '...', 40) AS snippet
        FROM unit_search
        WHERE {where_clause}
        ORDER BY rank
        LIMIT ?
    """
    params.append(limit)
    cursor = conn.execute(sql, params)
    
    results = []
    for row in cursor:
        results.append({
            "unit_id": int(row[0]),
            "title": row[1],
            "stage_name": row[2],
            "tags": row[3].split(),
            "snippet": row[4],
        })
    
    conn.close()
    
    return {
        "query": q,
        "stage_filter": stage,
        "tag_filter": tag,
        "total": len(results),
        "results": results,
    }


@router.post("/rebuild-index")
def rebuild_index():
    """Manually trigger search index rebuild."""
    try:
        _build_search_index()
        return {"status": "ok", "message": "Search index rebuilt successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
