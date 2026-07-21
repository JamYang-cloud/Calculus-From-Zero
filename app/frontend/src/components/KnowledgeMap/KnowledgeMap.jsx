import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = '/api'

const MAIN_LINE_COLORS = {
  '函数主线': '#4fc3f7',
  '极限连续主线': '#ba68c8',
  '导数主线': '#4cd964',
  '积分主线': '#ff6b6b',
  '级数泰勒主线': '#f5a623',
  '微分方程主线': '#26c6da',
  '多元微积分主线': '#ab47bc',
  '二重积分主线': '#78909c',
  '全部': '#8d6e63',
}

function KnowledgeMap() {
  const navigate = useNavigate()
  const [mapData, setMapData] = useState(null)
  const [stageProgress, setStageProgress] = useState([])
  const [view, setView] = useState('grid')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/units/knowledge-map`).then(r => r.json()),
      fetch(`${API_BASE}/progress/stages`).then(r => r.json()),
    ]).then(([map, prog]) => {
      setMapData(map)
      setStageProgress(prog.stages || [])
    }).finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="map-page"><div className="loading">加载中...</div></div>
  if (!mapData) return <div className="map-page"><div className="empty-state">无法加载知识地图</div></div>

  const progressMap = {}
  stageProgress.forEach(s => { progressMap[s.stage_id] = s })

  const totalCompleted = Object.values(progressMap).reduce((a, s) => a + s.completed, 0)
  const totalUnits = Object.values(progressMap).reduce((a, s) => a + s.total, 0)

  return (
    <div className="map-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title" style={{ margin: 0 }}>🗺️ 微积分知识地图</h1>
        <div style={{ display: 'flex', gap: '8px' }}>
          <ViewToggle active={view === 'grid'} onClick={() => setView('grid')} label="阶段总览" />
          <ViewToggle active={view === 'mainline'} onClick={() => setView('mainline')} label="知识主线" />
        </div>
      </div>

      {view === 'mainline' ? (
        <MainLineView mapData={mapData} progressMap={progressMap}
          onStageClick={(sid) => {
            const stage = mapData.stages.find(s => s.stage_id === sid)
            if (stage?.units[0]) navigate(`/course/${stage.units[0].unit_id}`)
          }} />
      ) : (
        <GridView mapData={mapData} progressMap={progressMap} navigate={navigate}
          totalCompleted={totalCompleted} totalUnits={totalUnits} />
      )}
    </div>
  )
}

function ViewToggle({ active, onClick, label }) {
  return (
    <button onClick={onClick} style={{
      padding: '6px 16px', border: active ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
      borderRadius: '20px', background: active ? '#ebf0ff' : 'transparent',
      cursor: 'pointer', fontSize: '13px', color: active ? 'var(--color-primary)' : 'var(--color-text-secondary)',
      fontWeight: active ? 600 : 400, transition: 'all 0.15s',
    }}>{label}</button>
  )
}

function GridView({ mapData, progressMap, navigate, totalCompleted, totalUnits }) {
  return (
    <>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <MiniStat label="总阶段" value={14} />
        <MiniStat label="总单元" value={totalUnits} color="var(--color-primary)" />
        <MiniStat label="已完成" value={totalCompleted} color="var(--color-success)" />
        <MiniStat label="完成度" value={`${totalUnits > 0 ? Math.round(totalCompleted / totalUnits * 100) : 0}%`} color="var(--color-warning)" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
        {mapData.stages.map(stage => {
          const prog = progressMap[stage.stage_id] || { completion_pct: 0, completed: 0, total: stage.unit_count }
          const color = MAIN_LINE_COLORS[stage.main_line] || 'var(--color-primary)'
          return (
            <div key={stage.stage_id} onClick={() => navigate(`/course/${stage.units[0]?.unit_id}`)} style={{
              background: 'var(--color-surface)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)', padding: '18px', cursor: 'pointer',
              transition: 'box-shadow 0.15s',
            }} onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
               onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <span style={{ fontSize: '11px', color, fontWeight: 600 }}>阶段 {stage.stage_id}</span>
                  <h3 style={{ fontSize: '15px', margin: '4px 0' }}>{stage.name}</h3>
                </div>
                <span style={{ fontSize: '20px', fontWeight: 700, color: prog.completion_pct === 100 ? 'var(--color-success)' : 'var(--color-text-secondary)' }}>
                  {prog.completion_pct}%
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>{stage.core_task}</p>
              <div style={{ height: '6px', background: '#e9ecef', borderRadius: '3px', overflow: 'hidden', marginBottom: '8px' }}>
                <div style={{ height: '100%', width: `${prog.completion_pct}%`, background: color, borderRadius: '3px', transition: 'width 0.3s' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#999' }}>
                <span>{prog.completed}/{prog.total} 课</span>
                <span style={{ background: '#f5f7fa', padding: '2px 8px', borderRadius: '10px' }}>{stage.main_line}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

function MainLineView({ mapData, progressMap, onStageClick }) {
  const lineStages = {}
  mapData.stages.forEach(stage => {
    const line = stage.main_line
    if (!lineStages[line]) lineStages[line] = []
    lineStages[line].push(stage)
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {Object.entries(lineStages).map(([line, stages]) => {
        const color = MAIN_LINE_COLORS[line] || '#999'
        return (
          <div key={line}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '4px', height: '20px', background: color, borderRadius: '2px' }} />
              <h2 style={{ fontSize: '16px', margin: 0, color }}>{line}</h2>
              <span style={{ fontSize: '12px', color: '#999' }}>
                {stages.reduce((a, s) => a + s.unit_count, 0)} 课
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {stages.map(stage => {
                const prog = progressMap[stage.stage_id] || { completion_pct: 0, completed: 0, total: stage.unit_count }
                return (
                  <div key={stage.stage_id} onClick={() => onStageClick(stage.stage_id)} style={{
                    background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius)', padding: '12px 16px', cursor: 'pointer',
                    minWidth: '200px', flex: '0 1 auto', transition: 'box-shadow 0.15s',
                  }} onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                     onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                    <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      {stage.stage_id}: {stage.name}
                    </div>
                    <div style={{ height: '4px', background: '#e9ecef', borderRadius: '2px', marginBottom: '4px' }}>
                      <div style={{ height: '100%', width: `${prog.completion_pct}%`, background: color, borderRadius: '2px', transition: 'width 0.3s' }} />
                    </div>
                    <span style={{ fontSize: '11px', color: '#999' }}>{prog.completed}/{prog.total} · {prog.completion_pct}%</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MiniStat({ label, value, color = '#666' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color }}>
      <span style={{ fontSize: '20px', fontWeight: 700 }}>{value}</span>
      <span style={{ color: '#999' }}>{label}</span>
    </div>
  )
}

export default KnowledgeMap
