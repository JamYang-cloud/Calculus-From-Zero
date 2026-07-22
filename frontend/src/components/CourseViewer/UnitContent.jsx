import { useState, useLayoutEffect, useRef, useMemo, useCallback } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// ─── Heading ID injection (preserves raw HTML, no DOMParser) ──

function injectHeadingIds(html) {
  let counter = 0
  return html.replace(/<(h[23])([^>]*)>/gi, (match, tag, attrs) => {
    // Always replace any existing id with our clean heading-N format
    const cleanAttrs = attrs.replace(/\s*id\s*=\s*["'][^"']*["']/gi, '')
    return `<${tag}${cleanAttrs} id="heading-${counter++}">`
  })
}

function generateTOC(html) {
  if (!html) return []
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const headings = doc.querySelectorAll('h2, h3')
  const items = []
  headings.forEach((h, i) => {
    items.push({
      id: h.id || `heading-${i}`,
      text: h.textContent,
      level: h.tagName.toLowerCase()
    })
  })
  return items
}

// ─── KaTeX rendering via DOM text node replacement ─────────────

/**
 * Replaces {{MATH_BLOCK_xxx}} and {{MATH_INLINE_xxx}} placeholder text
 * with KaTeX-rendered elements. This approach completely avoids putting
 * `<` or `>` characters in HTML that the browser parser would mangle.
 */
function renderMathPlaceholders(container, tokens) {
  if (!container || !tokens || tokens.length === 0) return

  // Build a lookup from placeholder text to token
  const tokenMap = {}
  tokens.forEach(t => {
    tokenMap[`{{MATH_${t.placeholder}}}`] = t
  })

  // Walk all text nodes and collect which placeholders appear in which nodes
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null,
    false
  )

  // Group by node: {nodeText -> [{placeholder, token}]}
  const nodeReplacements = new Map()
  while (walker.nextNode()) {
    const node = walker.currentNode
    const text = node.textContent
    for (const placeholder of Object.keys(tokenMap)) {
      if (text.includes(placeholder)) {
        if (!nodeReplacements.has(node)) {
          nodeReplacements.set(node, [])
        }
        nodeReplacements.get(node).push({ placeholder, token: tokenMap[placeholder] })
      }
    }
  }

  // Process each text node that has placeholders
  for (const [node, replacements] of nodeReplacements) {
    // Sort replacements by position in text (first occurrence first)
    replacements.sort((a, b) => 
      node.textContent.indexOf(a.placeholder) - node.textContent.indexOf(b.placeholder)
    )

    const fragment = document.createDocumentFragment()
    let remaining = node.textContent

    for (const { placeholder, token } of replacements) {
      const idx = remaining.indexOf(placeholder)
      if (idx === -1) continue  // safety: placeholder already consumed by earlier split

      // Add text before this placeholder
      if (idx > 0) {
        fragment.appendChild(document.createTextNode(remaining.slice(0, idx)))
      }

      // Add KaTeX-rendered span
      const span = document.createElement('span')
      try {
        katex.render(token.tex, span, {
          displayMode: token.is_block,
          throwOnError: false,
          output: 'html',
          trust: true,
        })
      } catch (e) {
        span.textContent = `[${token.tex}]`
        span.style.color = 'red'
      }

      if (token.is_block) {
        // Block math placeholder is sole content of a <p> — upgrade to <div>
        const parent = node.parentElement
        if (parent && parent.tagName === 'P' && 
            parent.childNodes.length === 1 && parent.textContent.trim() === placeholder) {
          const div = document.createElement('div')
          div.style.cssText = 'display:block;margin:1em 0;text-align:center'
          div.appendChild(span)
          parent.replaceWith(div)
          // Node replaced at parent level; done with this node
          remaining = ''  // clear remaining, nothing left to process
          break  // exit inner for loop, continue outer for loop
        }
        // Fallback: just insert as block display span
        span.style.display = 'block'
        span.style.margin = '1em 0'
        span.style.textAlign = 'center'
        fragment.appendChild(span)
      } else {
        fragment.appendChild(span)
      }

      // Advance past this placeholder
      remaining = remaining.slice(idx + placeholder.length)
    }

    // Add any remaining text after the last placeholder
    if (remaining.length > 0) {
      fragment.appendChild(document.createTextNode(remaining))
    }

    // Only replace if we didn't already replace the parent (block math case)
    if (node.parentElement) {
      node.replaceWith(fragment)
    }
  }
}

// ─── Component ────────────────────────────────────────────────

function UnitContent({ unit, loading, onPrevUnit, onNextUnit, onMarkComplete, onAddError, progress }) {
  const mathContainerRef = useRef(null)

  const htmlBody = unit?.html_body || ''
  const mathTokens = unit?.math_tokens || []
  const currentProgress = unit ? (progress?.find(p => p.unit_id === unit.meta.unit_id)?.status || '未开始') : '未开始'

  const processedHtml = useMemo(() => injectHeadingIds(htmlBody), [htmlBody])
  const toc = useMemo(() => generateTOC(processedHtml), [processedHtml])

  // Render math placeholders as KaTeX after DOM is mounted
  useLayoutEffect(() => {
    if (mathContainerRef.current && mathTokens.length > 0) {
      renderMathPlaceholders(mathContainerRef.current, mathTokens)
    }
  }, [processedHtml, mathTokens])

  if (loading) {
    return (
      <div className="main-content">
        <div className="loading">加载中...</div>
      </div>
    )
  }

  if (!unit) {
    return (
      <div className="main-content">
        <div className="empty-state">
          <div className="icon">📖</div>
          <p>请从左侧选择一个单元开始学习</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="main-content">
        <div className="course-title">{unit.meta.title}</div>
        <div className="course-meta">
          <span className="badge">{unit.meta.stage_name}</span>
          <span>第 {unit.meta.unit_id} 单元</span>
          {unit.meta.tags?.length > 0 && (
            <span style={{ fontSize: '12px' }}>
              {unit.meta.tags.join(' · ')}
            </span>
          )}
        </div>

        {unit.learning_objectives?.length > 0 && (
          <div style={{
            background: '#f0f7ff',
            border: '1px solid #d0e3ff',
            borderRadius: 'var(--radius)',
            padding: '16px 20px',
            marginBottom: '24px',
          }}>
            <h3 style={{ fontSize: '14px', marginTop: 0, marginBottom: '8px', color: 'var(--color-primary)' }}>
              📋 本课目标
            </h3>
            <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '13px' }}>
              {unit.learning_objectives.map((obj, i) => (
                <li key={i} style={{ marginBottom: '4px' }}>{obj}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Wrapper for all math content: HTML body + exercises + prerequisites */}
        <div ref={mathContainerRef}>
          <div
            className="content-body"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />

          {unit.exercise_groups && Object.keys(unit.exercise_groups).length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <h2>练习题</h2>
              {Object.entries(unit.exercise_groups).map(([group, exercises]) => (
                <div key={group} style={{ marginBottom: '20px' }}>
                  <h3>{group}</h3>
                  <div>
                    {exercises.map((ex, i) => (
                      <div key={i} style={{ marginBottom: '10px', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <strong style={{ flexShrink: 0, minWidth: '28px' }}>{ex.number}.</strong>
                        <span style={{ flex: 1 }}>{ex.text}</span>
                        <button
                          style={{
                            marginLeft: '12px', fontSize: '12px', padding: '2px 8px',
                            border: '1px solid var(--color-border)', borderRadius: '4px',
                            background: 'var(--color-surface)', cursor: 'pointer',
                          }}
                          onClick={() => onAddError?.(unit.meta.unit_id, group, ex.number, ex.text, ex.answer || '')}
                        >
                          📝 加入错题本
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {unit.prerequisites?.length > 0 && (
            <div style={{
              marginTop: '24px',
              padding: '14px 18px',
              background: '#fffdf0',
              border: '1px solid #f0e6a0',
              borderRadius: 'var(--radius)',
              fontSize: '13px',
            }}>
              <strong>⚠️ 进入下一单元的条件：</strong>
              <ol style={{ margin: '4px 0 0', paddingLeft: '20px' }}>
                {unit.prerequisites.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="unit-nav">
          <button onClick={onPrevUnit} disabled={unit.navigation?.prev_unit == null}>
            ← 上一单元
          </button>
          <button
            onClick={() => onMarkComplete?.(unit.meta.unit_id, currentProgress === '已完成' ? '未开始' : '已完成')}
            style={{
              padding: '8px 20px',
              background: currentProgress === '已完成' ? 'var(--color-success)' : 'var(--color-primary)',
              color: 'white', border: 'none', borderRadius: 'var(--radius)',
              cursor: 'pointer', fontSize: '14px', fontWeight: 500,
            }}
          >
            {currentProgress === '已完成' ? '✅ 已完成' : '📝 标记完成'}
          </button>
          <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            {unit.meta.unit_id} / {unit.navigation?.total_units}
          </span>
          <button onClick={onNextUnit} disabled={unit.navigation?.next_unit == null}>
            下一单元 →
          </button>
        </div>
      </div>

      {toc.length > 0 && (
        <aside className="content-toc">
          <div className="toc-title">本节目录</div>
          <ul className="toc-list">
            {toc.map(item => (
              <li
                key={item.id}
                style={{ paddingLeft: item.level === 'h3' ? '16px' : '0' }}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  )
}

export default UnitContent
