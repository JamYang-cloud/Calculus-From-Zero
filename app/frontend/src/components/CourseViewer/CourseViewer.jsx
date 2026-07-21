import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UnitSidebar from './UnitSidebar'
import UnitContent from './UnitContent'

const API_BASE = '/api'

/** Convert {{MATH_xxx}} back to readable LaTeX using token map */
function convertPlaceholders(text, tokens) {
  if (!text || !tokens) return text || ''
  let result = text
  tokens.forEach(t => {
    const placeholder = `{{MATH_${t.placeholder}}}`
    if (t.is_block) {
      result = result.replace(placeholder, `\n$$\n${t.tex}\n$$\n`)
    } else {
      result = result.replace(placeholder, `$${t.tex}$`)
    }
  })
  return result
}

function CourseViewer() {
  const { unitId } = useParams()
  const navigate = useNavigate()

  const [units, setUnits] = useState([])
  const [stages, setStages] = useState([])
  const [currentUnit, setCurrentUnit] = useState(null)
  const [expandedStages, setExpandedStages] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [progress, setProgress] = useState([])

  // Load unit list, stages, and progress on mount
  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/units/`).then(r => r.json()),
      fetch(`${API_BASE}/units/stages`).then(r => r.json()),
      fetch(`${API_BASE}/progress/units`).then(r => r.json()),
    ])
      .then(([unitsData, stagesData, progressData]) => {
        setUnits(unitsData.units || [])
        setStages(stagesData.stages || [])
        setProgress(progressData.progress || [])
        if (unitId) {
          const stage = stagesData.stages.find(
            s => s.unit_range_start <= parseInt(unitId) && parseInt(unitId) <= s.unit_range_end
          )
          if (stage) setExpandedStages({ [stage.stage_id]: true })
        }
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  // Load current unit content
  useEffect(() => {
    const id = unitId || units[0]?.unit_id || '0'
    if (!id) return

    setLoading(true)
    fetch(`${API_BASE}/units/${id}`)
      .then(r => {
        if (!r.ok) throw new Error(`Unit ${id} not found`)
        return r.json()
      })
      .then(data => {
        setCurrentUnit(data)
        const stage = stages.find(
          s => s.unit_range_start <= data.meta.unit_id && data.meta.unit_id <= s.unit_range_end
        )
        if (stage && !expandedStages[stage.stage_id]) {
          setExpandedStages(prev => ({ ...prev, [stage.stage_id]: true }))
        }
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [unitId, units])

  const handleUnitSelect = useCallback((id) => {
    navigate(`/course/${id}`)
  }, [navigate])

  const handleToggleStage = useCallback((stageId) => {
    setExpandedStages(prev => ({ ...prev, [stageId]: !prev[stageId] }))
  }, [])

  const handlePrevUnit = useCallback(() => {
    if (currentUnit?.navigation?.prev_unit != null) {
      navigate(`/course/${currentUnit.navigation.prev_unit}`)
    }
  }, [currentUnit, navigate])

  const handleNextUnit = useCallback(() => {
    if (currentUnit?.navigation?.next_unit != null) {
      navigate(`/course/${currentUnit.navigation.next_unit}`)
    }
  }, [currentUnit, navigate])

  const handleMarkComplete = useCallback(async (unitId, newStatus) => {
    await fetch(`${API_BASE}/progress/units/${unitId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
    const res = await fetch(`${API_BASE}/progress/units`)
    const data = await res.json()
    setProgress(data.progress || [])
  }, [])

  const handleAddError = useCallback(async (unitId, group, number, questionText, answerText) => {
    // Convert {{MATH_xxx}} placeholders to readable text using the current unit's math_tokens
    const mathTokens = currentUnit?.math_tokens || []
    const readableQuestion = convertPlaceholders(questionText, mathTokens)
    const readableAnswer = convertPlaceholders(answerText, mathTokens)
    
    await fetch(`${API_BASE}/progress/errors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        unit_id: unitId,
        exercise_group: group,
        exercise_number: number,
        question_text: readableQuestion,
        answer_text: readableAnswer,
        user_note: '',
      }),
    })
  }, [currentUnit])

  if (error) {
    return (
      <div className="three-col">
        <div className="main-content">
          <div className="empty-state">
            <div className="icon">⚠️</div>
            <p>加载失败: {error}</p>
            <p style={{ fontSize: '13px' }}>请确认后端服务已启动 (http://127.0.0.1:8001)</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="three-col">
      <UnitSidebar
        stages={stages}
        units={units}
        currentUnitId={currentUnit?.meta?.unit_id}
        expandedStages={expandedStages}
        onToggleStage={handleToggleStage}
        onSelectUnit={handleUnitSelect}
        progress={progress}
      />
      <UnitContent
        unit={currentUnit}
        loading={loading}
        onPrevUnit={handlePrevUnit}
        onNextUnit={handleNextUnit}
        onMarkComplete={handleMarkComplete}
        onAddError={handleAddError}
        progress={progress}
      />
    </div>
  )
}

export default CourseViewer
