import HomePage from './pages/HomePage'

export default function AppFallback() {
  console.log('Using fallback app without router')
  
  return (
    <div className="fallback-app">
      <HomePage />
    </div>
  )
}