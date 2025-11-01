import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Lock, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

// --- Helper function for smooth scrolling on same page ---
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Height of sticky header
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// --- Enhanced navigation with proper routing ---
const navigateToServices = (navigate: any, location: any, category?: string) => {
  if (location.pathname === '/') {
    scrollToSection('services');
  } else {
    navigate('/#services');
  }
  
  if (category) {
    setTimeout(() => {
      console.log(`Navigated to services - ${category} category`);
    }, 1000);
  }
};

// --- Mega Menu Data with proper routing ---
const megaMenuData = {
  'Digital Systems': [
    { name: 'Cloud Infrastructure', href: '/solutions/digital-systems', route: '/solutions/digital-systems', category: 'digital-systems' },
    { name: 'Virtualization Solutions', href: '/solutions/digital-systems', route: '/solutions/digital-systems', category: 'digital-systems' },
    { name: 'Network Architecture', href: '/solutions/digital-systems', route: '/solutions/digital-systems', category: 'digital-systems' },
    { name: 'System Integration', href: '/solutions/digital-systems', route: '/solutions/digital-systems', category: 'digital-systems' },
  ],
  'Design & Accessibility': [
    { name: 'UX/UI Design', href: '/solutions/design-accessibility', route: '/solutions/design-accessibility', category: 'design-accessibility' },
    { name: 'Accessibility Audits', href: '/solutions/design-accessibility', route: '/solutions/design-accessibility', category: 'design-accessibility' },
    { name: 'Branding & Visual Identity', href: '/solutions/design-accessibility', route: '/solutions/design-accessibility', category: 'design-accessibility' },
    { name: 'User Experience Optimization', href: '/solutions/design-accessibility', route: '/solutions/design-accessibility', category: 'design-accessibility' },
  ],
  'Compliance & Optimization': [
    { name: 'Business Process Automation', href: '/solutions/compliance', route: '/solutions/compliance', category: 'compliance' },
    { name: 'Compliance Management', href: '/solutions/compliance', route: '/solutions/compliance', category: 'compliance' },
    { name: 'Performance Analytics', href: '/solutions/compliance', route: '/solutions/compliance', category: 'compliance' },
    { name: 'Workflow Optimization', href: '/solutions/compliance', route: '/solutions/compliance', category: 'compliance' },
  ],
  'Cybersecurity & Cloud': [
    { name: 'Cybersecurity Solutions', href: '/solutions/cybersecurity', route: '/solutions/cybersecurity', category: 'cybersecurity' },
    { name: 'Cloud Migration', href: '/solutions/cloud', route: '/solutions/cloud', category: 'cloud' },
    { name: 'Managed Cloud Hosting', href: '/solutions/cloud', route: '/solutions/cloud', category: 'cloud' },
    { name: 'Managed Services', href: '/managed-services', route: '/managed-services', category: 'managed-services' },
  ],
};

// --- Main Header Component ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to prevent body scrolling when a menu is open
  useEffect(() => {
    if (isServicesMenuOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isServicesMenuOpen, isMenuOpen]);

  // Keyboard navigation support
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesMenuOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle mega menu item click
  const handleMenuItemClick = (item: { name: string; href: string; route: string; action?: string; category?: string }) => {
    setIsServicesMenuOpen(false);
    setIsMenuOpen(false);
    
    if (item.action === 'scroll-services') {
      navigateToServices(navigate, location, item.category);
    } else {
      // Handle both hash and browser router navigation
      const route = item.route.startsWith('/') ? item.route : `/${item.route}`;
      navigate(route);
    }
  };

  // Handle navigation links
  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    setIsServicesMenuOpen(false);
    
    if (location.pathname === '/' || location.pathname === '' || location.hash === '#/') {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <header className="bg-[#000000] text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex-shrink-0">
            <Logo size="sm" variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <Link 
              to="/" 
              className="text-[length:var(--text-body)] font-medium hover:text-yellow-400 transition-colors duration-300 h-20 px-[var(--space-8)] flex items-center"
            >
              Home
            </Link>
            <Link 
              to="/solutions" 
              className="text-[length:var(--text-body)] font-medium hover:text-yellow-400 transition-colors duration-300 h-20 px-[var(--space-8)] flex items-center"
            >
              Solutions
            </Link>
            <Link 
              to="/industries" 
              className="text-[length:var(--text-body)] font-medium hover:text-yellow-400 transition-colors duration-300 h-20 px-[var(--space-8)] flex items-center"
            >
              Industries
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <button className="flex items-center gap-[var(--space-8)] text-[length:var(--text-body)] font-medium hover:text-yellow-400 transition-colors duration-300 h-20 px-[var(--space-8)]">
                <span>What We Do</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Overlay */}
              {isServicesMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 bg-black/60 z-40"
                    onClick={() => setIsServicesMenuOpen(false)}
                  ></div>
                  
                  {/* Menu Panel - MODIFIED FOR TOP HALF */}
                  <div
                    className={`fixed top-20 left-0 h-[50vh] w-full bg-black shadow-2xl z-50 overflow-y-auto
                               border-b border-gray-800
                               transition-transform duration-300 ease-in-out
                               ${isServicesMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                  >
                    <div className="container mx-auto px-6 h-full flex flex-col pt-4 pb-8">
                      <div className="flex justify-between items-center flex-shrink-0 mb-6">
                        <h2 className="text-lg font-bold text-white font-sans">Our Services</h2>
                        <button 
                          onClick={() => setIsServicesMenuOpen(false)} 
                          className="text-gray-400 hover:text-white"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
                        {Object.entries(megaMenuData).map(([title, links]) => (
                          <div key={title}>
                            <h3 className="text-yellow-400 font-medium mb-3 text-base font-sans">{title}</h3>
                            <ul className="space-y-2">
                              {links.map((link) => (
                                <li key={link.name}>
                                  <button 
                                    onClick={() => handleMenuItemClick(link)}
                                    className="hover:text-yellow-400 transition-colors duration-200 text-gray-300 text-sm font-sans text-left hover:underline"
                                  >
                                    {link.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button 
            onClick={() => handleNavigation('final-cta')}
            className="flex items-center justify-center bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-[length:var(--text-body)]"
          >
            Schedule a Call
          </button>
          <a href="https://79ratio.deskdirector.com/auth/v1/email" className="flex items-center justify-center border border-gray-700 text-white font-bold px-6 py-3 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300 text-[length:var(--text-body)]">
            <Lock className="w-5 h-5 mr-2" />
            Client Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 fixed inset-0 z-50 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Link to="/">
                <Logo size="sm" variant="light" />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors"
                >
                  Home
                </Link>
                <Link 
                  to="/solutions" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors"
                >
                  Solutions
                </Link>
                <Link 
                  to="/industries" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition-colors"
                >
                  Industries
                </Link>
                <h3 className="text-yellow-400 font-bold text-xl pt-4">What We Do</h3>
                {Object.values(megaMenuData).flat().map(link => (
                     <button 
                       key={link.name} 
                       onClick={() => handleMenuItemClick(link)}
                       className="text-white hover:text-yellow-400 pl-4 py-2 text-left"
                     >
                       {link.name}
                     </button>
                ))}
                <div className="pt-6 flex flex-col space-y-4">
                    <button 
                      onClick={() => handleNavigation('final-cta')}
                      className="flex items-center justify-center bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-[length:var(--text-body)]"
                    >
                        Schedule a Call
                    </button>
                    <a href="https://79ratio.deskdirector.com/auth/v1/email" className="flex items-center justify-center border border-gray-700 text-white font-bold px-6 py-3 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300 text-[length:var(--text-body)]">
                        <Lock className="w-5 h-5 mr-2" />
                        Client Login
                    </a>
                </div>
            </nav>
        </div>
      )}
    </header>
  );
}
