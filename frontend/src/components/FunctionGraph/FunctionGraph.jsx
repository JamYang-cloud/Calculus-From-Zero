import { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'
import { create, all } from 'mathjs'

const math = create(all, {})

// ══════════════════════════════════════════════════════════════
// Standard Function Library
// ══════════════════════════════════════════════════════════════

const STANDARD_1D = [
  { id: 'linear', name: '直线 y=mx+b', expr: 'm*x + b', params: { m: { val: 1, min: -10, max: 10, step: 0.5 }, b: { val: 0, min: -10, max: 10, step: 0.5 } }, domain: [-5, 5], label: 'y = mx + b' },
  { id: 'quadratic', name: '二次函数', expr: 'a*x^2 + b*x + c', params: { a: { val: 1, min: -5, max: 5, step: 0.5 }, b: { val: 0, min: -10, max: 10, step: 0.5 }, c: { val: 0, min: -10, max: 10, step: 0.5 } }, domain: [-4, 4], label: 'y = ax² + bx + c' },
  { id: 'cubic', name: '三次函数', expr: 'a*x^3 + b*x^2 + c*x + d', params: { a: { val: 0.5, min: -3, max: 3, step: 0.1 }, b: { val: 0, min: -5, max: 5, step: 0.5 }, c: { val: 0, min: -10, max: 10, step: 0.5 }, d: { val: 0, min: -10, max: 10, step: 0.5 } }, domain: [-4, 4], label: 'y = ax³ + bx² + cx + d' },
  { id: 'power', name: '幂函数', expr: 'x^n', params: { n: { val: 2, min: 0.2, max: 5, step: 0.1 } }, domain: [0, 4], label: 'y = xⁿ' },
  { id: 'inverse', name: '反比例 y=k/x', expr: 'k/x', params: { k: { val: 1, min: -10, max: 10, step: 0.5 } }, domain: [-5, -0.05, 0.05, 5], label: 'y = k/x', discontinuous: true },
  { id: 'exp_growth', name: '指数增长', expr: 'a*e^(k*x)', params: { a: { val: 1, min: 0.1, max: 5, step: 0.1 }, k: { val: 1, min: 0.1, max: 3, step: 0.1 } }, domain: [-2, 3], label: 'y = a·eᵏˣ', useE: true },
  { id: 'exp_decay', name: '指数衰减', expr: 'a*e^(-k*x)', params: { a: { val: 3, min: 0.1, max: 5, step: 0.1 }, k: { val: 1, min: 0.1, max: 3, step: 0.1 } }, domain: [-1, 5], label: 'y = a·e⁻ᵏˣ', useE: true },
  { id: 'ln', name: '自然对数', expr: 'log(x)', domain: [0.01, 5], label: 'y = ln(x)' },
  { id: 'log10', name: '常用对数', expr: 'log10(x)', domain: [0.01, 5], label: 'y = log₁₀(x)' },
  { id: 'sin', name: '正弦', expr: 'A*sin(w*x + p)', params: { A: { val: 1, min: 0.1, max: 5, step: 0.1 }, w: { val: 1, min: 0.1, max: 5, step: 0.1 }, p: { val: 0, min: -3.14, max: 3.14, step: 0.1 } }, domain: [-6.28, 6.28], label: 'y = A·sin(ωx + φ)' },
  { id: 'cos', name: '余弦', expr: 'A*cos(w*x + p)', params: { A: { val: 1, min: 0.1, max: 5, step: 0.1 }, w: { val: 1, min: 0.1, max: 5, step: 0.1 }, p: { val: 0, min: -3.14, max: 3.14, step: 0.1 } }, domain: [-6.28, 6.28], label: 'y = A·cos(ωx + φ)' },
  { id: 'tan', name: '正切', expr: 'tan(x)', domain: [-1.5, 1.5], label: 'y = tan(x)' },
  { id: 'abs', name: '绝对值', expr: 'abs(x)', domain: [-4, 4], label: 'y = |x|' },
  { id: 'rational', name: '有理函数', expr: '(a*x + b)/(c*x + d)', params: { a: { val: 1, min: -5, max: 5, step: 0.5 }, b: { val: 0, min: -5, max: 5, step: 0.5 }, c: { val: 0, min: -5, max: 5, step: 0.5 }, d: { val: 1, min: 0.5, max: 5, step: 0.5 } }, domain: [-5, 5], label: 'y = (ax+b)/(cx+d)' },
]

const STANDARD_2D = [
  { id: 'plane', name: '线性平面', expr: 'a*x + b*y + c', params: { a: { val: 1, min: -5, max: 5, step: 0.5 }, b: { val: 1, min: -5, max: 5, step: 0.5 }, c: { val: 0, min: -10, max: 10, step: 0.5 } }, domain: [-3, 3], label: 'z = ax + by + c' },
  { id: 'paraboloid', name: '抛物面', expr: 'a*(x^2 + y^2)', params: { a: { val: 1, min: -3, max: 3, step: 0.5 }, b: { val: 0, min: 0, max: 0, step: 0 } }, domain: [-2, 2], label: 'z = a(x² + y²)' },
  { id: 'saddle', name: '鞍面', expr: 'x^2 - y^2', domain: [-2, 2], label: 'z = x² - y²' },
  { id: 'gaussian', name: '二维高斯', expr: 'e^(-(x^2 + y^2))', domain: [-3, 3], label: 'z = e⁻⁽ˣ²⁺ʸ²⁾', useE: true },
  { id: 'ripple', name: '波纹', expr: 'A*sin(sqrt(x^2 + y^2))', params: { A: { val: 1, min: 0.1, max: 3, step: 0.1 }, b: { val: 0, min: 0, max: 0, step: 0 } }, domain: [-8, 8], label: 'z = A·sin(√(x²+y²))' },
  { id: 'cone', name: '锥面', expr: 'sqrt(x^2 + y^2)', domain: [-3, 3], label: 'z = √(x² + y²)' },
]

// Helper: generate x/y points
function linspace(start, end, n = 200) {
  const arr = []
  const step = (end - start) / (n - 1)
  for (let i = 0; i < n; i++) arr.push(start + step * i)
  return arr
}

function meshgrid(xRange, yRange, n = 50) {
  const xs = linspace(xRange[0], xRange[1], n)
  const ys = linspace(yRange[0], yRange[1], n)
  const Z = []
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      try {
        const val = math.evaluate('f(x,y)', { x: xs[i], y: ys[j], f: (x,y) => null })
        row.push(val)
      } catch { row.push(null) }
    }
    Z.push(row)
  }
  return { xs, ys, Z }
}

const TABS = [
  { id: 'standard', label: '📐 典型函数' },
  { id: 'custom', label: '✏️ 自由输入' },
  { id: 'area', label: '📏 面积/体积' },
]

// ══════════════════════════════════════════════════════════════
// Main Component
// ══════════════════════════════════════════════════════════════

export default function FunctionGraph() {
  const [tab, setTab] = useState('standard')
  const [dim, setDim] = useState('1d')
  const [selectedId, setSelectedId] = useState(STANDARD_1D[0].id)
  const [selected2dId, setSelected2dId] = useState(STANDARD_2D[0].id)
  const [params, setParams] = useState({})
  const [params2d, setParams2d] = useState({})
  const [customExpr, setCustomExpr] = useState('sin(x) + 0.5*x')
  const [customDomain, setCustomDomain] = useState({ min: -5, max: 5 })
  const [showHelp, setShowHelp] = useState(false)
  const [sidebarW, setSidebarW] = useState(300)
  const [dragging, setDragging] = useState(false)
  
  // Area tab state
  const [fExpr, setFExpr] = useState('x^2')
  const [gExpr, setGExpr] = useState('x')
  const [areaDomain, setAreaDomain] = useState({ min: 0, max: 2 })

  // Sidebar drag resize
  const onDrag = (e) => {
    if (!dragging) return
    const w = Math.max(200, Math.min(500, e.clientX - 8))
    setSidebarW(w)
  }

  useEffect(() => {
    const up = () => setDragging(false)
    window.addEventListener('mouseup', up)
    window.addEventListener('mousemove', onDrag)
    return () => {
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mousemove', onDrag)
    }
  }, [dragging])

  // ── Evaluate a math expression over x domain ──
  const evaluate1D = (expr, dom, extraVars = {}) => {
    const domain = Array.isArray(dom) && dom.length === 4 ? dom : [dom[0], dom[1]]
    if (Array.isArray(dom) && dom.length === 4) {
      // Discontinuous: split into two ranges
      const pts1 = linspace(dom[0], dom[1], 100)
      const pts2 = linspace(dom[2], dom[3], 100)
      const y1 = pts1.map(x => safeEval(expr, { x, ...extraVars }))
      const y2 = pts2.map(x => safeEval(expr, { x, ...extraVars }))
      return [
        { x: pts1, y: y1 },
        { x: pts2, y: y2 },
      ]
    }
    const x = linspace(domain[0], domain[1], 300)
    const y = x.map(v => safeEval(expr, { x: v, ...extraVars }))
    return [{ x, y }]
  }

  const safeEval = (expr, scope) => {
    try {
      return math.evaluate(expr, { ...scope, e: Math.E, pi: Math.PI })
    } catch {
      return null
    }
  }

  // ── Render 2D surface ──
  const render2D = (fn, dom, pvals = {}) => {
    const n = 60
    const xs = linspace(dom[0], dom[1], n)
    const ys = linspace(dom[0], dom[1], n)
    const Z = []
    for (let i = 0; i < n; i++) {
      const row = []
      for (let j = 0; j < n; j++) {
        row.push(safeEval(fn.expr, { x: xs[j], y: ys[i], ...pvals, e: Math.E, pi: Math.PI }))
      }
      Z.push(row)
    }
    return { xs, ys, Z }
  }

  // ══════════════════════════════════════
  // Render
  // ══════════════════════════════════════

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8f9fb', minHeight: 0 }}>
      {/* Header */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid #ddd', background: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '22px' }}>📊 函数图形</h1>
        <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#999' }}>交互式函数可视化 — 典型函数 / 参数调节 / 自由输入 / 面积计算</p>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: 0, padding: '0 24px', background: '#fff', borderBottom: '1px solid #eee' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: '10px 20px', border: 'none', background: 'transparent', cursor: 'pointer',
              fontSize: '14px', fontWeight: tab === t.id ? 600 : 400,
              borderBottom: tab === t.id ? '3px solid #4fc3f7' : '3px solid transparent',
              color: tab === t.id ? '#333' : '#999',
            }}>
            {t.label}
          </button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => setDim('1d')} style={dimBtnStyle('1d', dim)}>一元</button>
          <button onClick={() => setDim('2d')} style={dimBtnStyle('2d', dim)}>二元</button>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{ width: sidebarW, flexShrink: 0, padding: '16px', overflowY: 'auto', borderRight: '1px solid #eee', background: '#fff' }}>
          {tab === 'standard' && <StandardPanel dim={dim} selectedId={selectedId} selected2dId={selected2dId} onSelect={setSelectedId} onSelect2d={setSelected2dId} params={params} params2d={params2d} onParamsChange={setParams} onParams2dChange={setParams2d} />}
          {tab === 'custom' && <CustomPanel expr={customExpr} onExpr={setCustomExpr} domain={customDomain} onDomain={setCustomDomain} showHelp={showHelp} onHelp={setShowHelp} />}
          {tab === 'area' && <AreaPanel fExpr={fExpr} gExpr={gExpr} onFExpr={setFExpr} onGExpr={setGExpr} domain={areaDomain} onDomain={setAreaDomain} />}
        </div>

        {/* Drag handle */}
        <div onMouseDown={() => setDragging(true)}
          style={{
            width: '5px', cursor: 'col-resize', flexShrink: 0,
            background: dragging ? '#4fc3f7' : 'transparent',
            transition: dragging ? 'none' : 'background 0.2s',
            userSelect: 'none',
          }}>
        </div>

        {/* Graph area — fills remaining space */}
        <div style={{ flex: 1, minWidth: 0, background: '#fff' }}>
          {tab === 'standard' && <StandardGraph dim={dim} fn={dim === '1d' ? STANDARD_1D.find(f => f.id === selectedId) : STANDARD_2D.find(f => f.id === selected2dId)} params={dim === '1d' ? params : params2d} evaluate1D={evaluate1D} render2D={render2D} />}
          {tab === 'custom' && <CustomGraph expr={customExpr} domain={customDomain} evaluate1D={evaluate1D} />}
          {tab === 'area' && <AreaGraph fExpr={fExpr} gExpr={gExpr} domain={areaDomain} evaluate1D={evaluate1D} safeEval={safeEval} />}
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// Standard Panel
// ══════════════════════════════════════════════════════════════

function StandardPanel({ dim, selectedId, selected2dId, onSelect, onSelect2d, params, params2d, onParamsChange, onParams2dChange }) {
  const list = dim === '1d' ? STANDARD_1D : STANDARD_2D
  const currentId = dim === '1d' ? selectedId : selected2dId
  const currentP = dim === '1d' ? params : params2d
  const currentFn = list.find(f => f.id === currentId)

  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px', color: '#555' }}>选择函数</div>
      <div style={{ display: 'grid', gridTemplateColumns: dim === '1d' ? '1fr 1fr' : '1fr', gap: '4px', marginBottom: '16px' }}>
        {list.map(fn => (
          <button key={fn.id} onClick={() => dim === '1d' ? onSelect(fn.id) : onSelect2d(fn.id)}
            style={{
              padding: '6px 10px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer',
              background: currentId === fn.id ? '#e3f2fd' : '#fff',
              fontSize: '12px', textAlign: 'left',
              fontWeight: currentId === fn.id ? 600 : 400,
            }}>
            {fn.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {currentFn && (
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px', color: '#555' }}>函数公式</div>
          <div style={{ fontSize: '13px', padding: '8px 10px', background: '#f5f5f5', borderRadius: '4px', fontFamily: 'monospace', marginBottom: currentFn.params ? '16px' : '0' }}>
            {currentFn.label}
          </div>
        </div>
      )}

      {currentFn?.params && (
        <div>
          <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px', color: '#555' }}>参数调节</div>
          {Object.entries(currentFn.params).map(([key, cfg]) => (
            <div key={key} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span>{key} = {currentP[key] ?? cfg.val}</span>
              </div>
              <input type="range" min={cfg.min} max={cfg.max} step={cfg.step}
                value={currentP[key] ?? cfg.val}
                onChange={e => {
                  const p = dim === '1d' ? { ...params, [key]: parseFloat(e.target.value) } : { ...params2d, [key]: parseFloat(e.target.value) }
                  dim === '1d' ? onParamsChange(p) : onParams2dChange(p)
                }}
                style={{ width: '100%' }} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// Standard Graph
// ══════════════════════════════════════════════════════════════

function StandardGraph({ dim, fn, params, evaluate1D, render2D }) {
  const [tangentPt, setTangentPt] = useState(null)
  
  if (!fn) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>请选择一个函数</div>

  if (dim === '1d') {
    const pvals = {}
    if (fn.params) {
      Object.keys(fn.params).forEach(k => { pvals[k] = params[k] ?? fn.params[k].val })
    }
    if (fn.useE) pvals.e = Math.E
    const traces = evaluate1D(fn.expr, fn.domain, pvals)
    const plotData = traces.map((t, i) => ({
      x: t.x, y: t.y, type: 'scatter', mode: 'lines',
      name: i === 0 ? fn.label : `${fn.label} (续)`,
      line: { color: '#4fc3f7', width: 2 },
      connectgaps: false,
    }))

    // Add tangent line if point selected
    if (tangentPt) {
      const x0 = tangentPt.x
      const y0 = safeEval1D(fn.expr, x0, pvals)
      const h = 0.0001
      const dy = (safeEval1D(fn.expr, x0 + h, pvals) - safeEval1D(fn.expr, x0 - h, pvals)) / (2 * h)
      const tMin = x0 - 2, tMax = x0 + 2
      const tx = [tMin, tMax]
      const ty = [y0 + dy * (tMin - x0), y0 + dy * (tMax - x0)]
      plotData.push({
        x: tx, y: ty, type: 'scatter', mode: 'lines',
        name: `x₀=${x0.toFixed(2)} 切线 (斜率=${dy.toFixed(3)})`,
        line: { color: '#ff6b6b', width: 2, dash: 'dash' },
      })
      plotData.push({
        x: [x0], y: [y0], type: 'scatter', mode: 'markers',
        name: `切点 (${x0.toFixed(2)}, ${y0.toFixed(2)})`,
        marker: { color: '#ff6b6b', size: 8 },
        showlegend: false,
      })
    }

    return (
      <Plot data={plotData}
        layout={{
          autosize: true, margin: { l: 50, r: 20, t: 30, b: 40 },
          xaxis: { title: 'x', zeroline: true, gridcolor: '#eee' },
          yaxis: { title: 'y', zeroline: true, gridcolor: '#eee' },
          title: fn.label,
        }}
        style={{ width: '100%', height: '100%' }}
        config={{ displayModeBar: true, displaylogo: false, modeBarButtonsToRemove: ['lasso2d', 'select2d'] }}
        onClick={(e) => {
          const pt = e.points?.[0]
          if (pt) setTangentPt({ x: pt.x })
        }}
      />
    )
  }

  // ── 2D surface ──
  const pvals2d = {}
  if (fn.params) Object.keys(fn.params).forEach(k => { pvals2d[k] = params[k] ?? fn.params[k].val })
  if (fn.useE) { pvals2d.e = Math.E }
  const { xs, ys, Z } = render2D(fn, fn.domain, pvals2d)

  return (
    <Plot
      data={[{ type: 'surface', x: xs, y: ys, z: Z, colorscale: 'Viridis', contours: { z: { show: true, usecolormap: true, project: { z: true } } } }]}
      layout={{
        autosize: true, margin: { l: 50, r: 20, t: 30, b: 40 },
        scene: { xaxis: { title: 'x' }, yaxis: { title: 'y' }, zaxis: { title: 'z' }, camera: { eye: { x: 1.5, y: 1.5, z: 1.2 } } },
        title: fn.label,
      }}
      style={{ width: '100%', height: '100%' }}
      config={{ displayModeBar: true, displaylogo: false }}
    />
  )
}

function safeEval1D(expr, x, extraVars = {}) {
  try {
    return math.evaluate(expr, { x, e: Math.E, pi: Math.PI, ...extraVars })
  } catch {
    return null
  }
}

// ══════════════════════════════════════════════════════════════
// Custom Panel
// ══════════════════════════════════════════════════════════════

function CustomPanel({ expr, onExpr, domain, onDomain, showHelp, onHelp }) {
  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px', color: '#555' }}>输入函数表达式</div>
      <textarea value={expr} onChange={e => onExpr(e.target.value)}
        style={{ width: '100%', height: '60px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '13px', fontFamily: 'monospace' }}
        placeholder="y = x^2 + sin(x)" />
      <div style={{ marginTop: '12px' }}>
        <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '8px', color: '#555' }}>定义域</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="number" value={domain.min} onChange={e => onDomain({ ...domain, min: parseFloat(e.target.value) })}
            style={{ width: '70px', padding: '4px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }} />
          <span>≤ x ≤</span>
          <input type="number" value={domain.max} onChange={e => onDomain({ ...domain, max: parseFloat(e.target.value) })}
            style={{ width: '70px', padding: '4px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }} />
        </div>
      </div>
      <div style={{ marginTop: '12px' }}>
        <button onClick={() => onHelp(!showHelp)} style={{ padding: '6px 12px', border: '1px solid #ddd', borderRadius: '4px', background: '#f5f5f5', cursor: 'pointer', fontSize: '12px' }}>
          {showHelp ? '▲' : '▼'} 语法帮助
        </button>
      </div>
      {showHelp && (
        <div style={{ marginTop: '8px', padding: '10px', background: '#f9f9f9', borderRadius: '4px', fontSize: '11px', lineHeight: 1.6 }}>
          <strong>支持的操作符：</strong> + - * / ^ ( )<br/>
          <strong>支持的函数：</strong> sin, cos, tan, log (自然对数), log10, exp, sqrt, abs<br/>
          <strong>常量：</strong> pi (π), e<br/>
          <strong>示例：</strong><br/>
          <code>sin(x) + 0.5*x</code><br/>
          <code>x^3 - 3*x</code><br/>
          <code>e^(-x) * cos(2*pi*x)</code><br/>
          <code>1 / (1 + x^2)</code><br/>
          <code>abs(x) - 2</code>
        </div>
      )}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// Custom Graph
// ══════════════════════════════════════════════════════════════

function CustomGraph({ expr, domain, evaluate1D }) {
  const traces = evaluate1D(expr, [domain.min, domain.max])
  const plotData = traces.map((t, i) => ({
    x: t.x, y: t.y, type: 'scatter', mode: 'lines',
    name: expr, line: { color: '#4fc3f7', width: 2 },
  }))

  return (
    <Plot data={plotData}
      layout={{
        autosize: true, margin: { l: 50, r: 20, t: 30, b: 40 },
        xaxis: { title: 'x', zeroline: true, gridcolor: '#eee' },
        yaxis: { title: 'y', zeroline: true, gridcolor: '#eee' },
        title: `y = ${expr}`,
      }}
      style={{ width: '100%', height: '100%' }}
      config={{ displayModeBar: true, displaylogo: false }}
    />
  )
}

// ══════════════════════════════════════════════════════════════
// Area Panel
// ══════════════════════════════════════════════════════════════

function AreaPanel({ fExpr, gExpr, onFExpr, onGExpr, domain, onDomain }) {
  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: '13px', marginBottom: '12px', color: '#555' }}>围成面积</div>
      <p style={{ fontSize: '12px', color: '#999', marginBottom: '12px' }}>
        输入两个函数 f(x) 和 g(x)，查看它们围成的区域面积。
      </p>

      <div style={{ marginBottom: '10px' }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>f(x) =</div>
        <input value={fExpr} onChange={e => onFExpr(e.target.value)}
          style={areaInputStyle} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>g(x) =</div>
        <input value={gExpr} onChange={e => onGExpr(e.target.value)}
          style={areaInputStyle} />
      </div>
      <div>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>积分区间</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="number" value={domain.min} onChange={e => onDomain({ ...domain, min: parseFloat(e.target.value) })}
            style={{ width: '70px', padding: '4px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }} />
          <span>≤ x ≤</span>
          <input type="number" value={domain.max} onChange={e => onDomain({ ...domain, max: parseFloat(e.target.value) })}
            style={{ width: '70px', padding: '4px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '12px' }} />
        </div>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// Area Graph
// ══════════════════════════════════════════════════════════════

function AreaGraph({ fExpr, gExpr, domain, evaluate1D, safeEval }) {
  const fTraces = evaluate1D(fExpr, [domain.min, domain.max])
  const gTraces = evaluate1D(gExpr, [domain.min, domain.max])

  // Compute area numerically
  const fY = fTraces[0]?.y || []
  const gY = gTraces[0]?.y || []
  const dx = (domain.max - domain.min) / fY.length
  let area = 0
  for (let i = 0; i < Math.min(fY.length, gY.length); i++) {
    if (fY[i] != null && gY[i] != null) area += Math.abs(fY[i] - gY[i]) * dx
  }

  const plotData = [
    ...fTraces.map((t, i) => ({ x: t.x, y: t.y, type: 'scatter', mode: 'lines', name: `f: ${fExpr}`, line: { color: '#4fc3f7', width: 2 } })),
    ...gTraces.map((t, i) => ({ x: t.x, y: t.y, type: 'scatter', mode: 'lines', name: `g: ${gExpr}`, line: { color: '#f5a623', width: 2 } })),
  ]

  // Fill between
  if (fTraces[0] && gTraces[0]) {
    plotData.push({
      x: fTraces[0].x, y: fTraces[0].y,
      type: 'scatter', mode: 'lines', fill: 'tonexty',
      fillcolor: 'rgba(79, 195, 247, 0.2)', line: { width: 0 },
      name: '围成区域',
      showlegend: true,
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '4px 16px', fontSize: '13px', color: '#555', textAlign: 'center' }}>
        ∫|f(x) - g(x)| dx ≈ <strong>{area.toFixed(4)}</strong>（数值积分，区间 [{domain.min}, {domain.max}]）
      </div>
      <div style={{ flex: 1 }}>
        <Plot data={plotData}
          layout={{
            autosize: true, margin: { l: 50, r: 20, t: 30, b: 40 },
            xaxis: { title: 'x', zeroline: true, gridcolor: '#eee' },
            yaxis: { title: 'y', zeroline: true, gridcolor: '#eee' },
            title: `f(x)=${fExpr}  g(x)=${gExpr}`,
          }}
          style={{ width: '100%', height: '100%' }}
          config={{ displayModeBar: true, displaylogo: false }}
        />
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════
// Helpers
// ══════════════════════════════════════════════════════════════

const dimBtnStyle = (val, current) => ({
  padding: '4px 12px', border: `1px solid ${val === current ? '#4fc3f7' : '#ddd'}`,
  borderRadius: '4px', background: val === current ? '#e3f2fd' : '#fff',
  cursor: 'pointer', fontSize: '12px', fontWeight: val === current ? 600 : 400,
  color: val === current ? '#333' : '#999',
})

const areaInputStyle = {
  width: '100%', padding: '6px 8px', border: '1px solid #ddd',
  borderRadius: '4px', fontSize: '13px', fontFamily: 'monospace',
}
