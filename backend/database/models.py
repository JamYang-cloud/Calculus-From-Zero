"""
SQLAlchemy models for the calculus learning app.

Design principle: Content (units) is read from markdown files.
This database stores only user state: progress, errors, preferences.
This clean separation allows content to be version-controlled independently.
"""
import datetime
from sqlalchemy import Column, Integer, String, DateTime, Text, Float
from database.database import Base


class UnitProgress(Base):
    """Tracks user's progress through course units."""
    __tablename__ = "unit_progress"

    id = Column(Integer, primary_key=True, autoincrement=True)
    unit_id = Column(Integer, nullable=False, unique=True, index=True)
    status = Column(String(20), nullable=False, default="未开始")  # 未开始, 进行中, 已完成
    completed_at = Column(DateTime, nullable=True)
    time_spent_minutes = Column(Float, default=0.0)
    notes = Column(Text, nullable=True, default="")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)


class ExerciseError(Base):
    """Tracks exercises marked as 'wrong' for later review (错题本)."""
    __tablename__ = "exercise_errors"

    id = Column(Integer, primary_key=True, autoincrement=True)
    unit_id = Column(Integer, nullable=False, index=True)
    exercise_group = Column(String(50), nullable=True)  # e.g. "A组", "B组"
    exercise_number = Column(Integer, nullable=True)
    question_text = Column(Text, nullable=True)
    answer_text = Column(Text, nullable=True, default="")
    user_note = Column(Text, nullable=True, default="")
    review_count = Column(Integer, default=0)
    reviewed_at = Column(DateTime, nullable=True)
    marked_at = Column(DateTime, default=datetime.datetime.utcnow)


class SearchHistory(Base):
    """Records user search queries for analytics."""
    __tablename__ = "search_history"

    id = Column(Integer, primary_key=True, autoincrement=True)
    query = Column(String(500), nullable=False)
    clicked_unit_id = Column(Integer, nullable=True)
    searched_at = Column(DateTime, default=datetime.datetime.utcnow)


class UserPreference(Base):
    """Key-value store for user preferences. Extensible."""
    __tablename__ = "user_preferences"

    id = Column(Integer, primary_key=True, autoincrement=True)
    key = Column(String(100), nullable=False, unique=True, index=True)
    value = Column(Text, nullable=True)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)
