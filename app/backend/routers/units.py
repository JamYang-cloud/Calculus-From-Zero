"""
API routes for course units.

Provides:
  - List all units with metadata
  - Get single unit with rendered HTML
  - Stage information
  - Knowledge map structure
"""
import os
from fastapi import APIRouter, HTTPException
from parser.md_parser import CalculusContentSource, STAGES, MAIN_LINES, content_registry, StageInfo

router = APIRouter(prefix="/api/units", tags=["units"])


# ─── Content source initialization ─────────────────────────────

CONTENT_DIR = os.environ.get(
    "CALCULUS_CONTENT_DIR",
    "/mnt/c/Users/jam08/OneDrive/文档/公众号写作/矩阵学习/微积分学习 从零开始"
)

_calculus_source = CalculusContentSource(CONTENT_DIR)
content_registry.register("calculus", _calculus_source)

# Cache unit list (reload on restart)
_unit_list_cache = None


def _get_unit_list():
    global _unit_list_cache
    if _unit_list_cache is None:
        _unit_list_cache = _calculus_source.list_units()
    return _unit_list_cache


# ─── API endpoints ─────────────────────────────────────────────

@router.get("/")
def list_units():
    """List all available course units with metadata."""
    return {
        "total": len(_get_unit_list()),
        "units": _get_unit_list(),
    }


@router.get("/stages")
def list_stages():
    """Return all learning stages with their unit ranges."""
    stages = []
    for sid, info in STAGES.items():
        stages.append({
            "stage_id": sid,
            "name": info.name,
            "unit_range_start": info.unit_range[0],
            "unit_range_end": info.unit_range[1],
            "core_task": info.core_task,
            "main_line": info.main_line,
        })
    return {"stages": stages}


@router.get("/main-lines")
def list_main_lines():
    """Return the eight knowledge main lines."""
    return {
        "main_lines": [
            {"id": i, "name": name}
            for i, name in enumerate(MAIN_LINES)
        ]
    }


@router.get("/knowledge-map")
def knowledge_map():
    """
    Return structured knowledge map data for frontend visualization.
    Combines stages, main lines, and unit metadata.
    """
    stages_data = []
    for sid, info in STAGES.items():
        stage_units = [
            u for u in _get_unit_list()
            if info.unit_range[0] <= u["unit_id"] <= info.unit_range[1]
        ]
        stages_data.append({
            "stage_id": sid,
            "name": info.name,
            "core_task": info.core_task,
            "main_line": info.main_line,
            "unit_range": list(info.unit_range),
            "unit_count": len(stage_units),
            "units": stage_units,
        })
    
    return {
        "stages": stages_data,
        "main_lines": [
            {
                "name": name,
                "stages": [
                    s["stage_id"] for s in stages_data
                    if s["main_line"] == name
                ],
            }
            for name in MAIN_LINES
        ],
    }


@router.get("/stage/{stage_id}")
def get_stage(stage_id: int):
    """Get detailed information about a specific stage."""
    if stage_id not in STAGES:
        raise HTTPException(status_code=404, detail=f"Stage {stage_id} not found")
    
    info = STAGES[stage_id]
    stage_units = [
        u for u in _get_unit_list()
        if info.unit_range[0] <= u["unit_id"] <= info.unit_range[1]
    ]
    
    return {
        "stage_id": stage_id,
        "name": info.name,
        "core_task": info.core_task,
        "main_line": info.main_line,
        "unit_range": list(info.unit_range),
        "units": stage_units,
    }


@router.get("/{unit_id}")
def get_unit(unit_id: int):
    """
    Get a single unit with full rendered content.
    
    Returns:
      - meta: unit metadata (title, tags, stage)
      - html_body: rendered HTML with protected LaTeX
      - learning_objectives: extracted objectives
      - exercise_groups: extracted exercise groups
      - prerequisites: prerequisites for next unit
      - navigation: prev/next unit IDs
    """
    content = _calculus_source.load_unit(unit_id)
    if content is None:
        raise HTTPException(status_code=404, detail=f"Unit {unit_id} not found")
    
    all_units = _get_unit_list()
    unit_ids = [u["unit_id"] for u in all_units]
    
    try:
        current_idx = unit_ids.index(unit_id)
    except ValueError:
        current_idx = -1
    
    return {
        "meta": {
            "unit_id": content.meta.unit_id,
            "title": content.meta.title,
            "tags": content.meta.tags,
            "stage": content.meta.stage,
            "stage_name": STAGES.get(content.meta.stage, StageInfo(0, "", (0,0), "", "")).name,
        },
        "html_body": content.html_body,
        "math_tokens": content.math_tokens,
        "learning_objectives": content.learning_objectives,
        "exercise_groups": content.exercise_groups,
        "prerequisites": content.prerequisites,
        "navigation": {
            "prev_unit": unit_ids[current_idx - 1] if current_idx > 0 else None,
            "next_unit": unit_ids[current_idx + 1] if current_idx < len(unit_ids) - 1 else None,
            "total_units": len(unit_ids),
        },
    }


@router.get("/subject/{subject_id}/list")
def list_subject_units(subject_id: str):
    """Extension point: list units for a registered subject."""
    source = content_registry.get(subject_id)
    if source is None:
        raise HTTPException(status_code=404, detail=f"Subject '{subject_id}' not registered")
    return {"subject": subject_id, "units": source.list_units()}
