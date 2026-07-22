import { useState, useEffect, useCallback } from 'react'
import katex from 'katex'

const API_BASE = '/api'

/**
 * ApplicationReference — 应用速查
 *
 * Split-panel: left = application domains + items,
 *             right = selected application detail (formulas + explanation).
 */
function ApplicationReference() {
  const [chapters, setChapters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)
  const [expanded, setExpanded] = useState({})

  useEffect(() => {
    fetch(`${API_BASE}/reference/applications`)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then(data => {
        const chaps = data.chapters || []
        setChapters(chaps)
        if (chaps.length > 0) {
          setExpanded({ [chaps[0].id]: true })
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  // ═══ KaTeX rendering ═══

  const renderFormula = useCallback((tex) => {
    try {
      return katex.renderToString(tex, { displayMode: true, throwOnError: false, trust: true })
    } catch (e) {
      return `<code>${escapeHtml(tex)}</code>`
    }
  }, [])

  const renderMarkdown = useCallback((text) => {
    let html = escapeHtml(text)

    // Render markdown tables: | col1 | col2 | ...
    html = html.replace(/((?:^\|.+\|\n?)+)/gm, (match) => {
      const rows = match.trim().split('\n').filter(r => r.includes('|'))
      if (rows.length < 2) return match
      // Skip separator row (|---|---|)
      const dataRows = rows.filter(r => !/^\|[\s\-:|]+\|$/.test(r))
      const cells = dataRows.map(r => r.split('|').map(c => c.trim()).filter(c => c))
      if (cells.length === 0) return match
      const thead = `<tr>${cells[0].map(c => `<th>${c}</th>`).join('')}</tr>`
      const tbody = cells.slice(1).map(row =>
        `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`
      ).join('')
      return `<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:14px;border:1px solid var(--color-border);"><thead style="background:#f5f7fa;">${thead}</thead><tbody>${tbody}</tbody></table>`
    })

    // Render $$...$$ formula blocks
    html = html.replace(/\$\$([^$]+?)\$\$/g, (_, tex) => {
      try {
        return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, trust: true })
      } catch (e) { return `<code>${escapeHtml(tex)}</code>` }
    })
    // Render inline $...$ formulas
    html = html.replace(/(?<!\$)\$(?!\$)([^$]+?)\$(?!\$)/g, (_, tex) => {
      try {
        return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false, trust: true })
      } catch (e) { return `<code>${escapeHtml(tex)}</code>` }
    })

    // Convert newlines
    html = html.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>')
    return `<p>${html}</p>`
  }, [])

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  if (loading) return <div style={styles.loading}>加载中...</div>
  if (error) return <div style={styles.error}>加载失败: {error}</div>

  return (
    <div style={styles.container}>
      {/* ── Left: Domain Tree ── */}
      <div style={styles.leftPanel}>
        <div style={styles.panelHeader}>🌍 现实应用速查</div>
        <div style={styles.tree}>
          {chapters.map(ch => (
            <div key={ch.id}>
              <div
                style={{
                  ...styles.chapterTitle,
                  fontWeight: expanded[ch.id] ? 700 : 500,
                }}
                onClick={() => toggle(ch.id)}
              >
                <span style={styles.expandIcon}>
                  {expanded[ch.id] ? '▾' : '▸'}
                </span>
                <span>{ch.icon} {ch.title}</span>
                <span style={styles.itemCount}>{ch.items?.length || 0}</span>
              </div>
              {expanded[ch.id] && (ch.items || []).map(item => (
                <div
                  key={item.id}
                  style={{
                    ...styles.itemRow,
                    background: selected?.id === item.id ? '#e8f0fe' : 'transparent',
                    borderLeft: selected?.id === item.id ? '3px solid var(--color-primary)' : '3px solid transparent',
                  }}
                  onClick={() => setSelected(item)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Application Detail ── */}
      <div style={styles.rightPanel}>
        {selected ? (
          <div>
            <h2 style={styles.detailTitle}>{selected.title}</h2>
            {(selected.formulas || []).length > 0 && (
              <div style={styles.formulaSection}>
                <h3 style={styles.sectionLabel}>核心公式</h3>
                {(selected.formulas || []).map((tex, i) => (
                  <div key={i} style={styles.formulaBlock}
                    dangerouslySetInnerHTML={{ __html: renderFormula(tex) }}
                  />
                ))}
              </div>
            )}
            {selected.detail && (
              <div style={styles.detailSection}>
                <h3 style={styles.sectionLabel}>详细说明</h3>
                <div style={styles.detailText}
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(selected.detail) }}
                />
              </div>
            )}
          </div>
        ) : (
          <div style={styles.empty}>← 从左侧选择一个应用场景</div>
        )}
      </div>
    </div>
  )
}


function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}


// ═══════════════════════════════════════════════════════════
// Styles
// ═══════════════════════════════════════════════════════════

const styles = {
  container: { display: 'flex', height: 'calc(100vh - 52px)', width: '100%', overflow: 'hidden' },
  leftPanel: {
    width: '280px', minWidth: '280px', borderRight: '1px solid var(--color-border)',
    background: 'var(--color-surface)', overflowY: 'auto', display: 'flex', flexDirection: 'column',
  },
  panelHeader: {
    padding: '12px 16px', fontWeight: 700, fontSize: '15px',
    borderBottom: '1px solid var(--color-border)', position: 'sticky', top: 0,
    background: 'var(--color-surface)', zIndex: 1,
  },
  tree: { padding: '4px 0', flex: 1, overflowY: 'auto' },
  chapterTitle: {
    padding: '8px 16px', cursor: 'pointer', fontSize: '14px',
    color: 'var(--color-text)', userSelect: 'none', display: 'flex', alignItems: 'center', gap: '6px',
  },
  expandIcon: { fontSize: '10px', width: '14px', textAlign: 'center', color: 'var(--color-text-secondary)' },
  itemCount: {
    marginLeft: 'auto', fontSize: '11px', background: '#f0f2f5',
    color: 'var(--color-text-secondary)', padding: '1px 8px', borderRadius: '10px',
  },
  itemRow: {
    padding: '7px 16px 7px 34px', fontSize: '13px', cursor: 'pointer',
    color: 'var(--color-text)', transition: 'background 0.15s',
  },
  rightPanel: { flex: '1 1 0%', minWidth: 0, overflowY: 'auto', background: 'var(--color-bg)', padding: '24px 36px' },
  detailTitle: {
    fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--color-text)',
    borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px',
  },
  sectionLabel: {
    fontSize: '14px', fontWeight: 600, color: 'var(--color-text-secondary)',
    marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px',
  },
  formulaSection: { marginBottom: '24px' },
  formulaBlock: {
    background: 'var(--color-surface)', borderRadius: 'var(--radius)', padding: '16px 20px',
    marginBottom: '12px', border: '1px solid var(--color-border)', overflowX: 'auto', fontSize: '15px',
  },
  detailSection: { marginTop: '8px' },
  detailText: { fontSize: '14px', lineHeight: 1.8, color: 'var(--color-text)' },
  loading: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', fontSize: '16px', color: 'var(--color-text-secondary)' },
  error: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', fontSize: '16px', color: 'var(--color-accent)' },
  empty: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '15px', color: 'var(--color-text-secondary)' },
}

export default ApplicationReference
