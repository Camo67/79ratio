import { useEffect, useState } from 'react'
import AppRouter from './AppRouter'
import AppHashRouter from './AppHashRouter'
import AppFallback from './AppFallback'

export default function App() {
  const [useHashRouter, setUseHashRouter] = useState(false)
  const [hasRouterError, setHasRouterError] = useState(false)

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
    
    // Use HashRouter for GitHub Pages and static hosting environments
    if (isGitHubPages || isFileProtocol || hasHtmlExtension || isStaticHosting) {
      setUseHashRouter(true)
    }

    // Add error listener for routing issues
    const handleError = (event: ErrorEvent) => {
      if (event.error?.message?.includes('router') || 
          event.error?.message?.includes('route') ||
          event.error?.message?.includes('navigation')) {
        console.warn('Router error detected, falling back to HashRouter:', event.error)
        setHasRouterError(true)
        setUseHashRouter(true)
      }
    }

    // Add unhandled rejection listener
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('router') || 
          event.reason?.message?.includes('route')) {
        console.warn('Router promise rejection, falling back to HashRouter:', event.reason)
        setHasRouterError(true)
        setUseHashRouter(true)
      }
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  // Fallback to static app if routing completely fails
  if (hasRouterError && !useHashRouter) {
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