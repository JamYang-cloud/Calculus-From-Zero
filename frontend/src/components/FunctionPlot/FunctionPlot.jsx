function FunctionPlot() {
  return (
    <div className="plot-page">
      <h1 className="page-title">📈 函数图形</h1>
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius)',
        padding: '40px',
        textAlign: 'center',
        color: 'var(--color-text-secondary)',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.3 }}>📈</div>
        <p style={{ fontSize: '16px', marginBottom: '8px' }}>函数图形模块将在 Phase 5 实现</p>
        <p style={{ fontSize: '13px' }}>
          届时你可以输入函数表达式、选择模板或粘贴LaTeX公式来绘制函数图像
        </p>
        <div style={{ marginTop: '24px', padding: '16px', background: '#f5f7fa', borderRadius: 'var(--radius)', fontSize: '13px' }}>
          <strong>计划功能：</strong>
          <ul style={{ textAlign: 'left', marginTop: '8px', paddingLeft: '24px' }}>
            <li>符号面板快速输入函数</li>
            <li>模板向导模式（多项式、三角、指数/对数）</li>
            <li>多函数对比绘制</li>
            <li>交互式缩放与平移</li>
            <li>与课程内容联动（点击课程中的函数→自动绘制）</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FunctionPlot
