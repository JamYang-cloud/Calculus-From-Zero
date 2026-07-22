import { useState, useEffect, useCallback } from 'react'
import katex from 'katex'

const API_BASE = '/api'

function FormulaReference() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSub, setSelectedSub] = useState(null)
  const [expandedSections, setExpandedSections] = useState({})

  useEffect(() => {
    fetch(`${API_BASE}/reference/formula`)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then(data => {
        const secs = data.sections || []
        setSections(secs)
        for (const sec of secs) {
          const subs = sec.subsections || []
          if (subs.length > 0) {
            setExpandedSections({ [sec.id]: true })
            setSelectedSub(subs[0])
            break
          }
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const renderFormula = useCallback((tex) => {
    try { return katex.renderToString(tex, { displayMode: true, throwOnError: false, trust: true }) }
    catch (e) { return `<code>${escapeHtml(tex)}</code>` }
  }, [])

  const renderInline = useCallback((text) => {
    let html = escapeHtml(text)
    // Inline $...$ formulas
    html = html.replace(/\$([^$]+?)\$/g, (_, tex) => {
      try { return katex.renderToString(tex, { displayMode: false, throwOnError: false, trust: true }) }
      catch (e) { return `<code>${escapeHtml(tex)}</code>` }
    })
    return html
  }, [])

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  if (loading) return <div style={s.loading}>加载中...</div>
  if (error) return <div style={s.error}>加载失败: {error}</div>

  return (
    <div style={s.container}>
      <div style={s.leftPanel}>
        <div style={s.panelHeader}>📐 公式概念速查</div>
        <div style={s.tree}>
          {sections.map(sec => {
            const subs = sec.subsections || []
            if (subs.length === 0) return null
            return (
              <div key={sec.id}>
                <div style={{...s.sectionTitle, fontWeight: expandedSections[sec.id] ? 700 : 500}}
                     onClick={() => toggleSection(sec.id)}>
                  <span style={s.expandIcon}>{expandedSections[sec.id] ? '▾' : '▸'}</span>
                  {sec.title}
                  <span style={s.countBadge}>{subs.length}</span>
                </div>
                {expandedSections[sec.id] && subs.map(sub => (
                  <div key={sub.id}
                    style={{...s.subItem,
                      background: selectedSub?.id === sub.id ? '#e8f0fe' : 'transparent',
                      borderLeft: selectedSub?.id === sub.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                      fontWeight: selectedSub?.id === sub.id ? 600 : 400,
                    }}
                    onClick={() => setSelectedSub(sub)}>
                    {sub.title}
                    <span style={s.conceptCount}>{sub.concepts?.length || 0}</span>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      {/* Right panel: interleaved concept name → formula → explanation */}
      <div style={s.rightPanel}>
        {selectedSub ? (
          <div style={s.contentArea}>
            <h2 style={s.detailTitle}>{selectedSub.title}</h2>
            {(selectedSub.concepts || []).map((c, ci) => (
              <div key={c.id || ci} style={s.conceptBlock}>
                <div style={s.conceptName}>{c.name}</div>
                {(c.formulas || []).map((tex, fi) => (
                  <div key={fi} style={s.formulaInline}
                    dangerouslySetInnerHTML={{ __html: renderFormula(tex) }} />
                ))}
                {c.explanation && (
                  <div style={s.explanationInline}
                    dangerouslySetInnerHTML={{ __html: renderInline(c.explanation.replace(c.name, '').trim()) }} />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={s.empty}>← 从左侧选择一个公式模块</div>
        )}
      </div>
    </div>
  )
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}

const s = {
  container: { display: 'flex', height: 'calc(100vh - 52px)', width: '100%' },
  leftPanel: {
    width: '260px', minWidth: '260px', flexShrink: 0,
    borderRight: '1px solid var(--color-border)', background: 'var(--color-surface)',
    overflowY: 'auto', display: 'flex', flexDirection: 'column',
  },
  panelHeader: {
    padding: '12px 16px', fontWeight: 700, fontSize: '15px',
    borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0,
    background: 'var(--color-surface)', zIndex: 1,
  },
  tree: { padding: '4px 0', flex: 1, overflowY: 'auto' },
  sectionTitle: {
    padding: '8px 16px', cursor: 'pointer', fontSize: '14px',
    color: 'var(--color-text)', userSelect: 'none', display: 'flex', alignItems: 'center', gap: '4px',
  },
  expandIcon: { fontSize: '10px', width: '14px', textAlign: 'center', color: 'var(--color-text-secondary)' },
  countBadge: {
    marginLeft: 'auto', fontSize: '10px', color: 'var(--color-text-secondary)',
    background: '#f0f2f5', padding: '1px 6px', borderRadius: '8px',
  },
  subItem: {
    padding: '7px 16px 7px 34px', fontSize: '13px', cursor: 'pointer',
    color: 'var(--color-text)', transition: 'background 0.15s',
    display: 'flex', alignItems: 'center',
  },
  conceptCount: { marginLeft: 'auto', fontSize: '10px', color: 'var(--color-text-secondary)' },
  rightPanel: { flex: '1 1 0%', minWidth: 0, overflowY: 'auto', background: 'var(--color-bg)' },
  contentArea: { maxWidth: '960px', margin: '0 auto', padding: '32px 40px' },
  detailTitle: {
    fontSize: '20px', fontWeight: 700, marginBottom: '24px',
    color: 'var(--color-text)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px',
  },
  conceptBlock: { marginBottom: '32px' },
  conceptName: {
    fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)',
    marginBottom: '8px', paddingBottom: '4px',
    borderBottom: '1px dashed var(--color-border)',
  },
  formulaInline: { marginBottom: '4px', overflowX: 'auto', fontSize: '15px' },
  explanationInline: {
    fontSize: '14px', lineHeight: 2, color: 'var(--color-text-secondary)',
    marginTop: '6px',
  },
  loading: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', fontSize: '16px', color: 'var(--color-text-secondary)' },
  error: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', fontSize: '16px', color: 'var(--color-accent)' },
  empty: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '15px', color: 'var(--color-text-secondary)' },
}

export default FormulaReference
