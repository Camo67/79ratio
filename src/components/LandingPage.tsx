import { useState, useEffect } from 'react'
import { ChevronDownIcon, XMarkIcon, Bars3Icon, LockClosedIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-150"
        onClick={onClose}
      />
      
      {/* Mega Menu Panel */}
      <div
        className="fixed top-20 left-0 right-0 h-[60vh] z-50 overflow-y-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid rgba(159, 179, 223, 0.3)',
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        role="menu"
      >
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/20">
            <h2 
              className="text-2xl font-bold text-white"
              style={{
                background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Comprehensive IT Services
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded transition-all duration-300 hover:scale-110"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="menu-column animate-in slide-in-from-bottom-4 duration-600" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-bold mb-4 pb-2 relative" style={{ color: 'var(--accent-primary)' }}>
                Strategic IT & Consulting
                <div 
                  className="absolute bottom-0 left-0 w-8 h-0.5 rounded"
                  style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
                />
              </h3>
              <ul className="space-y-3">
                {[
                  'IT Strategy & Planning',
                  'Digital Transformation',
                  'Technology Assessment',
                  'Business Process Optimization',
                  'IT Budgeting & Cost Analysis',
                  'Vendor Management'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-blue-300 hover:bg-blue-300/10 hover:border-l-blue-300 hover:translate-x-1 p-2 pl-3 rounded border-l-2 border-transparent transition-all duration-200"
                      role="menuitem"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-column animate-in slide-in-from-bottom-4 duration-600" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-bold mb-4 pb-2 relative" style={{ color: 'var(--accent-primary)' }}>
                Core Infrastructure & Network
                <div 
                  className="absolute bottom-0 left-0 w-8 h-0.5 rounded"
                  style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
                />
              </h3>
              <ul className="space-y-3">
                {[
                  'Network Design & Setup',
                  'Server Management',
                  'Hardware Procurement',
                  'Network Monitoring',
                  'Infrastructure Maintenance',
                  'Performance Optimization'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-blue-300 hover:bg-blue-300/10 hover:border-l-blue-300 hover:translate-x-1 p-2 pl-3 rounded border-l-2 border-transparent transition-all duration-200"
                      role="menuitem"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-column animate-in slide-in-from-bottom-4 duration-600" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-bold mb-4 pb-2 relative" style={{ color: 'var(--accent-primary)' }}>
                Security & Compliance
                <div 
                  className="absolute bottom-0 left-0 w-8 h-0.5 rounded"
                  style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
                />
              </h3>
              <ul className="space-y-3">
                {[
                  'Cybersecurity Services',
                  'Compliance Management',
                  'Security Audits',
                  'Data Protection',
                  'Threat Detection',
                  'Incident Response'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-blue-300 hover:bg-blue-300/10 hover:border-l-blue-300 hover:translate-x-1 p-2 pl-3 rounded border-l-2 border-transparent transition-all duration-200"
                      role="menuitem"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="menu-column animate-in slide-in-from-bottom-4 duration-600" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-bold mb-4 pb-2 relative" style={{ color: 'var(--accent-primary)' }}>
                Support & Managed Services
                <div 
                  className="absolute bottom-0 left-0 w-8 h-0.5 rounded"
                  style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }}
                />
              </h3>
              <ul className="space-y-3">
                {[
                  '24/7 IT Support',
                  'Help Desk Services',
                  'Remote Monitoring',
                  'Managed Print Services',
                  'Telecommunications',
                  'Contact Support'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-300 hover:text-blue-300 hover:bg-blue-300/10 hover:border-l-blue-300 hover:translate-x-1 p-2 pl-3 rounded border-l-2 border-transparent transition-all duration-200"
                      role="menuitem"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onScheduleCall: () => void
  onClientLogin: () => void
}

const MobileMenu = ({ isOpen, onClose, onScheduleCall, onClientLogin }: MobileMenuProps) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 p-6 overflow-y-auto transform transition-transform duration-300"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        backdropFilter: 'blur(20px)',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
      }}
      role="dialog"
      aria-labelledby="mobile-menu-title"
    >
      <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/20">
        <Logo size="md" variant="light" className="transition-all duration-300 hover:drop-shadow-lg hover:scale-105 glow-blue-subtle" />
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-2 rounded transition-colors"
          aria-label="Close mobile menu"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
      </div>

      <nav className="flex flex-col gap-6">
        <h3 id="mobile-menu-title" className="text-xl font-bold mb-4 pb-2 border-b border-blue-300/20" style={{ color: 'var(--accent-primary)' }}>
          What We Do
        </h3>
        
        <div className="flex flex-col gap-2">
          {[
            'IT Strategy & Planning',
            'Digital Transformation',
            'Network Design & Setup',
            'Server Management',
            'Cybersecurity Services',
            'Compliance Management',
            '24/7 IT Support',
            'Help Desk Services',
            'Remote Monitoring',
            'Managed Print Services',
            'Telecommunications',
            'Contact Support'
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white hover:text-blue-300 hover:border-l-blue-300 hover:bg-blue-300/10 hover:translate-x-2 p-3 pl-4 rounded border-l-3 border-transparent transition-all duration-300 block"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="pt-8 flex flex-col gap-4 border-t border-white/20 mt-8">
          <button
            onClick={onScheduleCall}
            className="bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
          >
            Schedule a Call
          </button>
          <button
            onClick={onClientLogin}
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30 px-6 py-3 rounded font-medium flex items-center justify-center gap-2 transition-all duration-300"
          >
            <LockClosedIcon className="w-5 h-5" />
            Client Login
          </button>
        </div>
      </nav>
    </div>
  )
}

export default function LandingPage() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScheduleCall = () => {
    alert('Schedule a call functionality would be integrated here.\nFor demo: opening scheduling system...')
  }

  const handleClientLogin = () => {
    alert('Client login functionality would be integrated here.\nFor demo: redirecting to client portal...')
  }

  // Close menus on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMegaMenuOpen && !target.closest('#services-trigger') && !target.closest('#mega-menu')) {
        setIsMegaMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMegaMenuOpen])

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-light)' }}>
      {/* Header */}
      <header 
        className="sticky top-0 z-50 border-b transition-all duration-300"
        style={{ 
          backgroundColor: 'var(--background-dark)',
          borderBottomColor: '#374151'
        }}
      >
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex-shrink-0">
              <Logo size="md" variant="light" className="transition-all duration-300 hover:drop-shadow-lg hover:scale-105 glow-blue-subtle" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="relative">
                <button
                  id="services-trigger"
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className="flex items-center gap-2 text-white hover:text-yellow-400 font-medium h-20 px-4 transition-colors duration-300 relative group"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  <span>What We Do</span>
                  <ChevronDownIcon 
                    className={`w-5 h-5 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                  />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full" />
                </button>
              </div>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleScheduleCall}
              className="bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/40 transition-all duration-300"
            >
              Schedule a Call
            </button>
            <button
              onClick={handleClientLogin}
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30 px-6 py-3 rounded font-medium flex items-center gap-2 transition-all duration-300"
            >
              <LockClosedIcon className="w-5 h-5" />
              Client Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:bg-white/10 p-2 rounded transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mega Menu */}
        <MegaMenu 
          isOpen={isMegaMenuOpen} 
          onClose={() => setIsMegaMenuOpen(false)} 
        />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onScheduleCall={handleScheduleCall}
          onClientLogin={handleClientLogin}
        />
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80")'
          }}
        />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animate-gradient-shift" />
        
        {/* Animated Data Streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Horizontal streams */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-stream-horizontal-1" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-stream-horizontal-2" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-stream-horizontal-3" />
          
          {/* Vertical streams */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent animate-stream-vertical-1" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400/25 to-transparent animate-stream-vertical-2" />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-3 h-3 bg-yellow-400/60 rounded-full animate-float-1" style={{ top: '16.67%', left: '20%' }} />
          <div className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-float-2" style={{ top: '33.33%', right: '25%' }} />
          <div className="absolute w-4 h-4 bg-yellow-400/60 rounded-full animate-float-3" style={{ bottom: '33.33%', left: '33.33%' }} />
          <div className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-float-4" style={{ bottom: '25%', right: '20%' }} />
          <div className="absolute w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-float-5" style={{ top: '50%', left: '16.67%' }} />
          <div className="absolute w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-float-6" style={{ top: '75%', right: '16.67%' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <Logo size="xxl" variant="light" className="glow-blue-subtle" />
          </div>
          
          <h1 className="creative-heading text-white mb-6" style={{ 
            fontSize: 'var(--text-h1)',
            lineHeight: 'var(--line-height-h1)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Technology That Moves With You
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-white text-xl mb-6" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              At 79Ratio, we seamlessly integrate advanced technology into the organic fabric of your brand.
            </p>
            <p className="text-white" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)' }}>
              We demystify the complexities of IT, crafting solutions that naturally blend with your company's ethos—making innovation feel as intuitive as it is powerful.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded font-medium text-lg hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/40 transition-all duration-300">
              Let's Build Something Seamless
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/30 px-8 py-4 rounded font-medium text-lg transition-all duration-300">
              Get a Free IT Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Additional Content Placeholder */}
      <main className="py-24" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8" style={{ fontSize: 'var(--text-h2)' }}>
            Your Additional Content Goes Here
          </h2>
          <p className="mb-6 text-xl" style={{ color: 'var(--text-secondary)' }}>
            Replace this section with your existing components like CoreValues, Services, Sectors, Testimonials, Process, and FinalCTA.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            This React component provides the foundation for your complete website with enhanced animations and interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Explore Our Services
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:-translate-y-0.5 hover:shadow-lg px-6 py-3 rounded font-medium transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}