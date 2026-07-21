import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE = '/api'

function SearchPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [stageFilter, setStageFilter] = useState('')
  const [activeTags, setActiveTags] = useState([])  // tags currently selected
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [stages, setStages] = useState([])
  const [allTags, setAllTags] = useState([])

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/units/stages`).then(r => r.json()),
      fetch(`${API_BASE}/search/tags`).then(r => r.json()),
    ]).then(([s, t]) => {
      setStages(s.stages || [])
      setAllTags(t.tags || [])
    }).catch(() => {})
  }, [])

  // Build the effective query: user input + active tags
  const effectiveQuery = [query, ...activeTags].filter(Boolean).join(' ')

  const handleSearch = async (e) => {
    e?.preventDefault()
    if (!effectiveQuery.trim()) return

    setLoading(true)
    setSearched(true)
    try {
      const params = new URLSearchParams({ q: effectiveQuery })
      if (stageFilter) params.set('stage', stageFilter)
      const res = await fetch(`${API_BASE}/search/?${params}`)
      const data = await res.json()
      setResults(data)
    } catch (err) {
      setResults({ error: err.message })
    }
    setLoading(false)
  }

  // Tag chip: toggle — adds/removes from activeTags (doesn't search yet)
  const handleTagClick = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  // Remove a single active tag (from the search box area)
  const removeTag = (tag) => {
    setActiveTags(prev => prev.filter(t => t !== tag))
  }

  return (
    <div className="search-page">
      <h1 className="page-title">🔍 知识搜索</h1>

      <form onSubmit={handleSearch} style={{ marginBottom: '16px' }}>
        {/* Search box with active tags shown as chips inside */}
        <div style={{
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px',
          padding: '6px 12px', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)', background: 'white', marginBottom: '8px',
          minHeight: '42px',
        }}>
          {activeTags.map(tag => (
            <span key={tag} style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              padding: '2px 8px', background: '#ebf0ff', borderRadius: '12px',
              fontSize: '13px', color: 'var(--color-primary)', fontWeight: 500,
              whiteSpace: 'nowrap',
            }}>
              {tag}
              <button type="button" onClick={() => removeTag(tag)} style={{
                border: 'none', background: 'none', cursor: 'pointer',
                fontSize: '14px', color: '#999', padding: 0, lineHeight: 1,
              }}>×</button>
            </span>
          ))}
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="搜索概念、公式、知识点... (拼音: dao shu ji chu = 导数基础)"
            style={{
              flex: '1 1 80px', minWidth: 0, border: 'none', outline: 'none',
              fontSize: '15px', padding: '4px 0',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <select
            value={stageFilter}
            onChange={e => setStageFilter(e.target.value)}
            style={{
              padding: '8px 12px', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)', fontSize: '14px', background: 'white',
              cursor: 'pointer',
            }}
          >
            <option value="">全部阶段</option>
            {stages.map(s => (
              <option key={s.stage_id} value={s.stage_id}>阶段{s.stage_id}: {s.name}</option>
            ))}
          </select>
          <button type="submit" style={{
            padding: '8px 24px', background: 'var(--color-primary)', color: 'white',
            border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '15px',
          }}>搜索</button>
        </div>
      </form>

      {/* Tag chips — click to add to search, not to search directly */}
      {allTags.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '12px', color: '#999' }}>点击标签加入搜索条件 ({allTags.length}):</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '8px', maxHeight: '120px', overflowY: 'auto' }}>
            {allTags.map(tag => (
              <button
                key={tag} type="button"
                onClick={() => handleTagClick(tag)}
                style={{
                  padding: '2px 10px', fontSize: '12px', borderRadius: '12px', cursor: 'pointer',
                  border: activeTags.includes(tag) ? '1.5px solid var(--color-primary)' : '1px solid #ddd',
                  background: activeTags.includes(tag) ? '#ebf0ff' : '#f8f9fa',
                  color: activeTags.includes(tag) ? 'var(--color-primary)' : '#666',
                  fontWeight: activeTags.includes(tag) ? 600 : 400,
                  whiteSpace: 'nowrap', transition: 'all 0.15s',
                }}
              >{tag}</button>
            ))}
          </div>
        </div>
      )}

      {loading && <div className="loading">搜索中...</div>}

      {searched && !loading && results && !results.error && (
        <div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '13px', marginBottom: '16px' }}>
            找到 {results.total} 条关于 "{results.query}" 的结果
            {results.stage_filter != null && ` · 阶段 ${results.stage_filter}`}
          </p>

          {results.results.length === 0 ? (
            <div className="empty-state">
              <p>未找到相关结果，请尝试其他关键词</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {results.results.map((r, i) => (
                <div key={i} onClick={() => navigate(`/course/${r.unit_id}`)} style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius)', padding: '16px', cursor: 'pointer',
                  transition: 'box-shadow 0.15s',
                }} onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                   onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>
                    {r.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                    {r.stage_name} · 第{r.unit_id}单元
                  </div>
                  <div style={{ fontSize: '13px', lineHeight: 1.6 }}
                    dangerouslySetInnerHTML={{ __html: r.snippet }} />
                  <div style={{ marginTop: '8px', display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {r.tags?.map((tag, j) => (
                      <span key={j} onClick={(e) => { e.stopPropagation(); handleTagClick(tag); }} style={{
                        fontSize: '11px', padding: '1px 8px',
                        background: activeTags.includes(tag) ? '#e8f0ff' : '#f1f3f6',
                        borderRadius: '10px', color: activeTags.includes(tag) ? 'var(--color-primary)' : '#888',
                        cursor: 'pointer', fontWeight: activeTags.includes(tag) ? 600 : 400,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!searched && (
        <div className="empty-state">
          <div className="icon">🔍</div>
          <p>输入关键词或点击下方标签开始搜索</p>
        </div>
      )}
    </div>
  )
}

export default SearchPage
