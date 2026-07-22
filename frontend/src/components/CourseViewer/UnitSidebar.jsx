function UnitSidebar({ stages, units, currentUnitId, expandedStages, onToggleStage, onSelectUnit, progress }) {
  const progressMap = {}
  if (progress) {
    progress.forEach(p => { progressMap[p.unit_id] = p.status })
  }

  if (!stages.length) {
    return (
      <aside className="sidebar">
        <div className="loading">加载中...</div>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">课程阶段</div>
      {stages.map(stage => {
        const stageUnits = units.filter(
          u => u.unit_id >= stage.unit_range_start && u.unit_id <= stage.unit_range_end
        )
        const isExpanded = expandedStages[stage.stage_id]

        return (
          <div key={stage.stage_id} className="stage-group">
            <div className="stage-header" onClick={() => onToggleStage(stage.stage_id)}>
              <span>
                <span className="stage-num">阶段 {stage.stage_id}</span>
                {stage.name}
              </span>
              <span style={{ fontSize: '11px', color: '#999' }}>
                {isExpanded ? '▾' : '▸'}
              </span>
            </div>
            {isExpanded && (
              <div className="unit-list">
                {stageUnits.map(unit => {
                  const status = progressMap[unit.unit_id] || '未开始'
                  const icon = status === '已完成' ? '✅' : status === '进行中' ? '🔄' : '○'
                  const color = status === '已完成' ? 'var(--color-success)' :
                                status === '进行中' ? 'var(--color-warning)' : '#ccc'
                  return (
                    <div
                      key={unit.unit_id}
                      className={`unit-item ${currentUnitId === unit.unit_id ? 'active' : ''}`}
                      onClick={() => onSelectUnit(unit.unit_id)}
                    >
                      <span className="unit-num" style={{ color }}>{icon} 第{unit.unit_id}单元</span>
                      <span>{unit.title?.replace(/^第\s*\d+\s*单元[：:]\s*/, '') || ''}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </aside>
  )
}

export default UnitSidebar
