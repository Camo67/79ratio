import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import DigitalSystemsPage from './pages/DigitalSystemsPage'
import DesignAccessibilityPage from './pages/DesignAccessibilityPage'
import CompliancePage from './pages/CompliancePage'
import CybersecurityPage from './pages/CybersecurityPage'
import CloudSolutionsPage from './pages/CloudSolutionsPage'
import IndustriesPage from './pages/IndustriesPage'
import VirtualizationPage from './pages/VirtualizationPage'
import NetworkArchitecturePage from './pages/NetworkArchitecturePage'
import SystemIntegrationPage from './pages/SystemIntegrationPage'
import CyberCloudPage from './pages/CyberCloudPage'
import CloudInfrastructurePage from './pages/CloudInfrastructurePage'

export default function AppHashRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/digital-systems" element={<DigitalSystemsPage />} />
        <Route path="/solutions/design-accessibility" element={<DesignAccessibilityPage />} />
        <Route path="/solutions/compliance" element={<CompliancePage />} />
        <Route path="/solutions/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/solutions/cloud" element={<CloudSolutionsPage />} />
        <Route path="/solutions/virtualization" element={<VirtualizationPage />} />
        <Route path="/solutions/network-architecture" element={<NetworkArchitecturePage />} />
        <Route path="/solutions/system-integration" element={<SystemIntegrationPage />} />
        <Route path="/solutions/cyber-cloud" element={<CyberCloudPage />} />
        <Route path="/solutions/cloud-infrastructure" element={<CloudInfrastructurePage />} />
        <Route path="/managed-services" element={<CloudSolutionsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}
