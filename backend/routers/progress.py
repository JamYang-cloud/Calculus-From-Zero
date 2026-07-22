"""
API routes for user progress tracking and exercise error management.

Operations: read/write unit progress, exercise error book (错题本),
search history.
"""
import datetime
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from database.database import get_db
from database.models import UnitProgress, ExerciseError, SearchHistory

router = APIRouter(prefix="/api/progress", tags=["progress"])


# ─── Request/Response models ───────────────────────────────────

class ProgressUpdate(BaseModel):
    status: str = Field(..., pattern="^(未开始|进行中|已完成)$")
    notes: str = ""

class ErrorAdd(BaseModel):
    unit_id: int
    exercise_group: str = ""
    exercise_number: int = 0
    question_text: str = ""
    answer_text: str = ""
    user_note: str = ""

class HistoryAdd(BaseModel):
    query: str
    clicked_unit_id: int = None


# ─── Unit progress routes ──────────────────────────────────────

@router.get("/units")
def get_all_progress(db: Session = Depends(get_db)):
    """Get progress status for all units."""
    records = db.query(UnitProgress).all()
    return {
        "progress": [
            {
                "unit_id": r.unit_id,
                "status": r.status,
                "completed_at": r.completed_at.isoformat() if r.completed_at else None,
                "time_spent_minutes": r.time_spent_minutes,
                "notes": r.notes,
            }
            for r in records
        ]
    }


@router.get("/units/{unit_id}")
def get_unit_progress(unit_id: int, db: Session = Depends(get_db)):
    """Get progress for a specific unit."""
    record = db.query(UnitProgress).filter(UnitProgress.unit_id == unit_id).first()
    if record is None:
        return {"unit_id": unit_id, "status": "未开始", "completed_at": None}
    return {
        "unit_id": record.unit_id,
        "status": record.status,
        "completed_at": record.completed_at.isoformat() if record.completed_at else None,
        "time_spent_minutes": record.time_spent_minutes,
        "notes": record.notes,
    }


@router.put("/units/{unit_id}")
def update_unit_progress(unit_id: int, data: ProgressUpdate, db: Session = Depends(get_db)):
    """Update progress status for a unit."""
    record = db.query(UnitProgress).filter(UnitProgress.unit_id == unit_id).first()
    
    if record is None:
        record = UnitProgress(unit_id=unit_id, status=data.status, notes=data.notes)
        db.add(record)
    else:
        record.status = data.status
        if data.notes:
            record.notes = data.notes
    
    if data.status == "已完成" and record.completed_at is None:
        record.completed_at = datetime.datetime.utcnow()
    
    db.commit()
    return {"unit_id": unit_id, "status": data.status, "updated": True}


@router.get("/stats")
def get_progress_stats(db: Session = Depends(get_db)):
    """Get overall progress statistics."""
    total_units = 172  # Total calculus units
    completed = db.query(UnitProgress).filter(UnitProgress.status == "已完成").count()
    in_progress = db.query(UnitProgress).filter(UnitProgress.status == "进行中").count()
    total_errors = db.query(ExerciseError).count()
    unreviewed_errors = db.query(ExerciseError).filter(ExerciseError.review_count == 0).count()
    
    return {
        "total_units": total_units,
        "completed": completed,
        "in_progress": in_progress,
        "not_started": total_units - completed - in_progress,
        "completion_pct": round(completed / total_units * 100, 1) if total_units > 0 else 0,
        "total_errors": total_errors,
        "unreviewed_errors": unreviewed_errors,
    }


@router.get("/stages")
def get_stage_progress(db: Session = Depends(get_db)):
    """Get progress summary per stage for knowledge map and dashboard."""
    from parser.md_parser import STAGES

    all_progress = db.query(UnitProgress).all()
    progress_map = {p.unit_id: p.status for p in all_progress}

    stages_data = []
    for stage_id, info in STAGES.items():
        start, end = info.unit_range
        total = end - start + 1
        completed = sum(1 for uid in range(start, end + 1) if progress_map.get(uid) == "已完成")
        in_progress = sum(1 for uid in range(start, end + 1) if progress_map.get(uid) == "进行中")

        stages_data.append({
            "stage_id": stage_id,
            "name": info.name,
            "core_task": info.core_task,
            "main_line": info.main_line,
            "unit_range": [start, end],
            "total": total,
            "completed": completed,
            "in_progress": in_progress,
            "not_started": total - completed - in_progress,
            "completion_pct": round(completed / total * 100, 1) if total > 0 else 0,
        })

    return {"stages": stages_data}


# ─── Exercise error (错题本) routes ────────────────────────────

@router.get("/errors")
def get_errors(
    unit_id: int = None,
    unreviewed_only: bool = False,
    db: Session = Depends(get_db)
):
    """Get exercise errors, optionally filtered."""
    query = db.query(ExerciseError)
    if unit_id is not None:
        query = query.filter(ExerciseError.unit_id == unit_id)
    if unreviewed_only:
        query = query.filter(ExerciseError.review_count == 0)
    
    errors = query.order_by(ExerciseError.marked_at.desc()).limit(200).all()
    
    return {
        "total": len(errors),
        "errors": [
            {
                "id": e.id,
                "unit_id": e.unit_id,
                "exercise_group": e.exercise_group,
                "exercise_number": e.exercise_number,
                "question_text": e.question_text,
                "answer_text": e.answer_text or "",
                "user_note": e.user_note or "",
                "review_count": e.review_count,
                "reviewed_at": e.reviewed_at.isoformat() if e.reviewed_at else None,
                "marked_at": e.marked_at.isoformat() if e.marked_at else None,
            }
            for e in errors
        ],
    }


@router.post("/errors")
def add_error(data: ErrorAdd, db: Session = Depends(get_db)):
    """Add an exercise to the error book."""
    error = ExerciseError(
        unit_id=data.unit_id,
        exercise_group=data.exercise_group,
        exercise_number=data.exercise_number,
        question_text=data.question_text,
        answer_text=data.answer_text,
        user_note=data.user_note,
    )
    db.add(error)
    db.commit()
    db.refresh(error)
    return {"id": error.id, "message": "Error added to 错题本"}


@router.put("/errors/{error_id}/review")
def mark_error_reviewed(error_id: int, db: Session = Depends(get_db)):
    """Mark an exercise error as reviewed."""
    error = db.query(ExerciseError).filter(ExerciseError.id == error_id).first()
    if error is None:
        raise HTTPException(status_code=404, detail="Error record not found")
    
    error.review_count += 1
    error.reviewed_at = datetime.datetime.utcnow()
    db.commit()
    
    return {"id": error_id, "review_count": error.review_count, "message": "Marked as reviewed"}


@router.put("/errors/{error_id}")
def update_error_note(error_id: int, data: dict, db: Session = Depends(get_db)):
    """Update the user note for an error entry."""
    error = db.query(ExerciseError).filter(ExerciseError.id == error_id).first()
    if error is None:
        raise HTTPException(status_code=404, detail="Error record not found")
    
    error.user_note = data.get("user_note", "")
    db.commit()
    return {"id": error_id, "message": "Note updated"}


@router.delete("/errors/{error_id}")
def delete_error(error_id: int, db: Session = Depends(get_db)):
    """Remove an error from the error book."""
    error = db.query(ExerciseError).filter(ExerciseError.id == error_id).first()
    if error is None:
        raise HTTPException(status_code=404, detail="Error record not found")
    db.delete(error)
    db.commit()
    return {"id": error_id, "message": "Removed from 错题本"}


# ─── Search history routes ─────────────────────────────────────

@router.post("/search-history")
def add_search_history(data: HistoryAdd, db: Session = Depends(get_db)):
    """Record a search query for analytics."""
    history = SearchHistory(query=data.query, clicked_unit_id=data.clicked_unit_id)
    db.add(history)
    db.commit()
    return {"message": "Search recorded"}
