"""
API route for function plotting data.

Phase 1: placeholder — returns sample data for a given expression.
Phase 5: integrates with sympy/numpy for actual function evaluation.
"""
from fastapi import APIRouter, Query

router = APIRouter(prefix="/api/plot", tags=["plot"])


@router.get("/evaluate")
def evaluate_function(
    expr: str = Query(..., description="Function expression, e.g. 'sin(x) + x^2'"),
    x_min: float = Query(-10.0),
    x_max: float = Query(10.0),
    points: int = Query(200, ge=50, le=2000),
):
    """
    Evaluate a function expression over a range.
    
    Phase 1: Returns placeholder data structure.
    Phase 5: Uses sympy to parse and numpy to evaluate.
    """
    # Placeholder — will be replaced with actual evaluation in Phase 5
    return {
        "expression": expr,
        "x_range": [x_min, x_max],
        "points": points,
        "status": "placeholder",
        "message": "Function plotting will be implemented in Phase 5",
        "data": {
            "x": [],
            "y": [],
        },
    }
