import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="app-layout">
      <header className="app-navbar">
        <span className="logo" style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/course'}>
          📐 微积分学习
        </span>
        <nav>
          <NavLink to="/course" end>课程</NavLink>
          <NavLink to="/map">知识地图</NavLink>
          <NavLink to="/search">搜索</NavLink>
          <NavLink to="/plot">函数图形</NavLink>
          <NavLink to="/errors">错题本</NavLink>
        </nav>
        <div className="nav-right">
          <NavLink to="/dashboard" className="progress-badge" style={{ textDecoration: 'none' }}>
            学习进度
          </NavLink>
        </div>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
