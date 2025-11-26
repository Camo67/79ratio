import { useState, useEffect } from 'react'
import AppRouter from './AppRouter'
import AppHashRouter from './AppHashRouter'
import AppFallback from './AppFallback'

export default function App() {
  const [useHashRouter, setUseHashRouter] = useState(false)
  const [hasRouterError, setHasRouterError] = useState(false)
  const [isRouterReady, setIsRouterReady] = useState(false)

  useEffect(() => {
    // Detect deployment environment and routing needs
    const path = window.location.pathname
    const hostname = window.location.hostname
    const protocol = window.location.protocol
    
    // GitHub Pages, file protocol, or static hosting detection
    const isGitHubPages = hostname.includes('github.io')
    const isFileProtocol = protocol === 'file:'
    const hasHtmlExtension = path.includes('.html')
    const isStaticHosting = path.includes('preview') || path.includes('figma') || path.includes('netlify') || path.includes('vercel')
    
    // Use HashRouter for GitHub Pages and static environments
    if (isGitHubPages || isFileProtocol || hasHtmlExtension || isStaticHosting) {
      setUseHashRouter(true)
    }
    
    // Mark router as ready
    setIsRouterReady(true)
  }, [])

  // Show loading while determining router
  if (!isRouterReady) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-yellow-400 text-2xl">Loading...</div>
      </div>
    )
  }

  // Fallback to static app if routing completely fails
  if (hasRouterError) {
    return <AppFallback />
  }

  // Use HashRouter for GitHub Pages and static environments, BrowserRouter for traditional web servers
  try {
    return useHashRouter ? <AppHashRouter /> : <AppRouter />
  } catch (error) {
    console.warn('Router initialization failed, falling back to static app:', error)
    return <AppFallback />
  }
}