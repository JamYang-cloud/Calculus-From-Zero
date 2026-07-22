import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import katex from 'katex'

const API_BASE = '/api'

function ErrorBook() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editNote, setEditNote] = useState('')
  const noteInputRef = useRef(null)
  const detailRef = useRef(null)

  const fetchErrors = () => {
    setLoading(true)
    fetch(`${API_BASE}/progress/errors`)
      .then(r => r.json())
      .then(data => setErrors(data.errors || []))
      .finally(() => setLoading(false))
  }

  useEffect(() => { fetchErrors() }, [])

  useEffect(() => {
    if (errors.length > 0 && !selectedId) setSelectedId(errors[0].id)
  }, [errors])

  // Render $...$ and $$...$$ as KaTeX in the detail panel
  useEffect(() => {
    if (!detailRef.current || !selectedId) return
    const el = detailRef.current
    // Render block math
    el.querySelectorAll('.math-block').forEach(block => {
      const tex = block.getAttribute('data-tex') || block.textContent.trim()
      try {
        katex.render(tex, block, { displayMode: true, throwOnError: false, output: 'html' })
      } catch(e) {}
    })
    // Render inline math
    el.querySelectorAll('.math-inline').forEach(inline => {
      const tex = inline.getAttribute('data-tex') || inline.textContent.trim()
      try {
        katex.render(tex, inline, { displayMode: false, throwOnError: false, output: 'html' })
      } catch(e) {}
    })
  }, [selectedId, errors])

  const handleDelete = async (id) => {
    if (!confirm('确认删除此错题？')) return
    await fetch(`${API_BASE}/progress/errors/${id}`, { method: 'DELETE' })
    if (selectedId === id) setSelectedId(null)
    fetchErrors()
  }

  const handleReview = async (id) => {
    await fetch(`${API_BASE}/progress/errors/${id}/review`, { method: 'PUT' })
    fetchErrors()
  }

  const startEdit = (error) => {
    setEditingId(error.id)
    setEditNote(error.user_note || '')
    setTimeout(() => noteInputRef.current?.focus(), 50)
  }

  const saveNote = async (id) => {
    await fetch(`${API_BASE}/progress/errors/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_note: editNote }),
    })
    setEditingId(null)
    fetchErrors()
  }

  /** Convert $...$ → <span class="math-inline">...</span>, $$...$$ → <div class="math-block">...</div> */
  function mathHTML(text) {
    if (!text) return ''
    return text
      .replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => `<div class="math-block" data-tex="${tex.replace(/"/g,'&quot;')}">${tex}</div>`)
      .replace(/\$([^$]+?)\$/g, (_, tex) => `<span class="math-inline" data-tex="${tex.replace(/"/g,'&quot;')}">${tex}</span>`)
  }

  const selectedError = errors.find(e => e.id === selectedId)
  const unreviewed = errors.filter(e => e.review_count === 0)

  if (loading) return <div className="errorbook-page"><div className="loading">加载中...</div></div>

  return (
    <div className="errorbook-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 className="page-title" style={{ margin: 0 }}>📝 错题本</h1>
        <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
          {errors.length} 题 · <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{unreviewed.length} 未复习</span>
        </span>
      </div>

      {errors.length === 0 ? (
        <div className="empty-state">
          <div className="icon">✅</div>
          <p>暂无错题</p>
          <p style={{ fontSize: '13px', color: '#999' }}>在学习过程中点击题目旁的"📝 加入错题本"即可添加</p>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 180px)' }}>
          <div style={{
            width: '320px', flexShrink: 0, overflowY: 'auto',
            border: '1px solid var(--color-border)', borderRadius: 'var(--radius)',
            background: 'var(--color-surface)',
          }}>
            {errors.map(err => (
              <div key={err.id} onClick={() => setSelectedId(err.id)} style={{
                padding: '12px 16px', cursor: 'pointer', borderBottom: '1px solid #eee',
                background: selectedId === err.id ? '#f0f4ff' : 'transparent',
                borderLeft: err.review_count === 0 ? '3px solid var(--color-accent)' : '3px solid transparent',
              }}>
                <div style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '4px' }}>
                  第{err.unit_id}单元 · {err.exercise_group} #{err.exercise_number}
                </div>
                <div style={{ fontSize: '13px', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {err.question_text?.replace(/\$\$[\s\S]*?\$\$/g, '[公式]').replace(/\$[^$]+?\$/g, '$…$') || '(无)'}
                </div>
                {err.user_note && (
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '4px', fontStyle: 'italic' }}>
                    💬 {err.user_note.substring(0, 30)}{err.user_note.length > 30 ? '...' : ''}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div ref={detailRef} style={{
            flex: 1, overflowY: 'auto',
            border: '1px solid var(--color-border)', borderRadius: 'var(--radius)',
            background: 'var(--color-surface)', padding: '24px',
          }}>
            {selectedError ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <div style={{ cursor: 'pointer', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600 }}
                      onClick={() => navigate(`/course/${selectedError.unit_id}`)}>
                      ← 前往第{selectedError.unit_id}单元
                    </div>
                    <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                      {selectedError.exercise_group} · 第{selectedError.exercise_number}题 · 
                      {new Date(selectedError.marked_at).toLocaleDateString('zh-CN')}
                      {selectedError.review_count > 0 && ` · 已复习 ${selectedError.review_count} 次`}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleReview(selectedError.id)} style={{ ...btnStyle, color: 'var(--color-success)' }}>🔄 复习</button>
                    <button onClick={() => handleDelete(selectedError.id)} style={{ ...btnStyle, color: '#999' }}>🗑 删除</button>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px', fontWeight: 600 }}>📋 题目</div>
                  <div style={{ fontSize: '15px', lineHeight: 1.8, padding: '14px 16px', background: '#fafafa', borderRadius: '6px', border: '1px solid #e8e8e8' }}
                    dangerouslySetInnerHTML={{ __html: mathHTML(selectedError.question_text) }} />
                </div>

                {selectedError.answer_text && (
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '12px', color: 'var(--color-success)', marginBottom: '8px', fontWeight: 600 }}>✅ 参考答案</div>
                    <div style={{ fontSize: '15px', lineHeight: 1.8, padding: '14px 16px', background: '#f6fef6', borderRadius: '6px', border: '1px solid #d4edda' }}
                      dangerouslySetInnerHTML={{ __html: mathHTML(selectedError.answer_text) }} />
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '8px', fontWeight: 600 }}>📝 错题笔记</div>
                  {editingId === selectedError.id ? (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <textarea ref={noteInputRef} value={editNote} onChange={e => setEditNote(e.target.value)}
                        style={{ flex: 1, padding: '10px', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '13px', minHeight: '60px', resize: 'vertical' }}
                        placeholder="记录错误原因、解题思路或注意事项..." />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <button onClick={() => saveNote(selectedError.id)} style={{ ...btnStyle, background: 'var(--color-primary)', color: 'white' }}>保存</button>
                        <button onClick={() => setEditingId(null)} style={btnStyle}>取消</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ fontSize: '14px', lineHeight: 1.7, padding: '14px 16px', background: '#fffdf0', borderRadius: '6px', border: '1px solid #f0e6a0', color: selectedError.user_note ? '#555' : '#ccc', fontStyle: selectedError.user_note ? 'normal' : 'italic', minHeight: '60px' }}>
                      {selectedError.user_note || '点击下方按钮添加笔记'}
                    </div>
                  )}
                  {editingId !== selectedError.id && (
                    <button onClick={() => startEdit(selectedError)} style={{ ...btnStyle, marginTop: '8px', fontSize: '12px' }}>✏️ 编辑笔记</button>
                  )}
                </div>
              </>
            ) : (
              <div className="empty-state" style={{ paddingTop: '60px' }}>
                <p>← 从左侧列表选择一道错题查看详情</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const btnStyle = {
  padding: '6px 14px', fontSize: '12px', border: '1px solid var(--color-border)',
  borderRadius: '4px', background: 'var(--color-surface)', cursor: 'pointer',
  color: 'var(--color-text-secondary)',
}

export default ErrorBook
