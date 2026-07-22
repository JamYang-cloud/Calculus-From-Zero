import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import CourseViewer from './components/CourseViewer/CourseViewer'
import KnowledgeMap from './components/KnowledgeMap/KnowledgeMap'
import SearchPage from './components/Search/SearchPage'
import ErrorBook from './components/ErrorBook/ErrorBook'
import FunctionGraph from './components/FunctionGraph/FunctionGraph'
import FormulaReference from './components/FormulaReference/FormulaReference'
import ApplicationReference from './components/ApplicationReference/ApplicationReference'
import Dashboard from './components/Progress/Dashboard'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/course" replace />} />
        <Route path="/course" element={<CourseViewer />} />
        <Route path="/course/:unitId" element={<CourseViewer />} />
        <Route path="/map" element={<KnowledgeMap />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/errors" element={<ErrorBook />} />
        <Route path="/plot" element={<FunctionGraph />} />
        <Route path="/formulas" element={<FormulaReference />} />
        <Route path="/applications" element={<ApplicationReference />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
