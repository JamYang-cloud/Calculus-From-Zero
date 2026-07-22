import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = '/api'

function Dashboard() {
  const navigate = useNavigate()
  const [stats, setStats] = useState(null)
  const [stages, setStages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/progress/stats`).then(r => r.json()),
      fetch(`${API_BASE}/progress/stages`).then(r => r.json()),
    ]).then(([s, p]) => {
      setStats(s)
      setStages(p.stages || [])
    }).finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="dashboard-page"><div className="loading">加载中...</div></div>

  return (
    <div className="dashboard-page">
      <h1 className="page-title">📊 学习进度</h1>

      {stats && (
        <>
          {/* Overview cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
            <StatCard label="总单元" value={stats.total_units} color="var(--color-text)" />
            <StatCard label="已完成" value={stats.completed} color="var(--color-success)" />
            <StatCard label="进行中" value={stats.in_progress} color="var(--color-warning)" />
            <StatCard label="未开始" value={stats.not_started} color="var(--color-text-secondary)" />
          </div>

          {/* Overall progress bar */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
              <span>总体完成度</span>
              <span>{stats.completion_pct}%</span>
            </div>
            <div style={{ height: '8px', background: '#e9ecef', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${stats.completion_pct}%`,
                background: 'var(--color-primary)', borderRadius: '4px', transition: 'width 0.3s',
              }} />
            </div>
          </div>

          {/* Stage progress bars */}
          {stages.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
                各阶段完成度
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {stages.map(stage => (
                  <div key={stage.stage_id} onClick={() => navigate(`/course/${stage.unit_range[0]}`)} style={{
                    display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                    padding: '8px 12px', borderRadius: 'var(--radius)',
                    transition: 'background 0.15s',
                  }} onMouseEnter={e => e.currentTarget.style.background = '#f8f9fa'}
                     onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <div style={{ width: '130px', fontSize: '13px', fontWeight: 500, flexShrink: 0 }}>
                      阶段{stage.stage_id}: {stage.name}
                    </div>
                    <div style={{ flex: 1, height: '6px', background: '#e9ecef', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${stage.completion_pct}%`,
                        background: stage.completion_pct === 100 ? 'var(--color-success)' : 'var(--color-primary)',
                        borderRadius: '3px', transition: 'width 0.3s',
                      }} />
                    </div>
                    <span style={{ fontSize: '12px', color: '#999', width: '90px', textAlign: 'right', flexShrink: 0 }}>
                      {stage.completed}/{stage.total} ({stage.completion_pct}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error stats */}
          <div style={{ marginBottom: '32px', display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ fontSize: '14px' }}>
              错题总数: <strong>{stats.total_errors}</strong>
            </div>
            <div style={{ fontSize: '14px', color: 'var(--color-accent)' }}>
              未复习: <strong>{stats.unreviewed_errors}</strong>
            </div>
            {stats.unreviewed_errors > 0 && (
              <button onClick={() => navigate('/errors')} style={{
                padding: '6px 16px', background: 'var(--color-accent)', color: 'white',
                border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '13px',
              }}>去复习 →</button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: 'var(--color-surface)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius)', padding: '20px', textAlign: 'center',
    }}>
      <div style={{ fontSize: '28px', fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>{label}</div>
    </div>
  )
}

export default Dashboard
