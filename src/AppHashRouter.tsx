import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import DigitalSystemsPage from './pages/DigitalSystemsPage'
import DesignAccessibilityPage from './pages/DesignAccessibilityPage'
import CompliancePage from './pages/CompliancePage'
import CybersecurityPage from './pages/CybersecurityPage'
import CloudSolutionsPage from './pages/CloudSolutionsPage'

export default function AppHashRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/digital-systems" element={<DigitalSystemsPage />} />
        <Route path="/solutions/design-accessibility" element={<DesignAccessibilityPage />} />
        <Route path="/solutions/compliance" element={<CompliancePage />} />
        <Route path="/solutions/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/solutions/cloud" element={<CloudSolutionsPage />} />
        <Route path="/managed-services" element={<CloudSolutionsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}