import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Lock, Menu, X, ChevronDown } from 'lucide-react';

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
  'IT & Cybersecurity': [
    { name: 'Cyber Security Services', href: '/cybersecurity', route: '/cybersecurity', category: 'cybersecurity' },
    { name: 'Security Services', href: '/cybersecurity', route: '/cybersecurity', category: 'cybersecurity' },
    { name: 'Compliance & Data Protection', href: '/services', route: '/', action: 'scroll-services', category: 'compliance' },
    { name: 'Behavior Analytics', href: '/services', route: '/', action: 'scroll-services', category: 'analytics' },
    { name: 'Data Backup & Recovery', href: '/services', route: '/', action: 'scroll-services', category: 'data-continuity' },
    { name: 'Disaster Recovery Planning', href: '/services', route: '/', action: 'scroll-services', category: 'data-continuity' },
  ],
  'Cloud & Infrastructure': [
    { name: 'Network Management', href: '/cloud-services', route: '/cloud-services', category: 'cloud' },
    { name: 'Hardware & Software Management', href: '/services', route: '/', action: 'scroll-services', category: 'device-management' },
    { name: 'Virtualization & Cloud Computing', href: '/cloud-services', route: '/cloud-services', category: 'cloud' },
    { name: 'Cloud Services', href: '/cloud-services', route: '/cloud-services', category: 'cloud' },
    { name: 'Managed Hosting Services', href: '/cloud-services', route: '/cloud-services', category: 'cloud' },
    { name: 'Mobile Device Management (MDM)', href: '/services', route: '/', action: 'scroll-services', category: 'device-management' },
  ],
  'Strategy & Operations': [
    { name: 'Technical Consulting', href: '/it-consulting', route: '/it-consulting', category: 'strategy' },
    { name: 'IT Budgeting & Cost Optimization', href: '/it-consulting', route: '/it-consulting', category: 'strategy' },
    { name: 'Scalability & Growth Planning', href: '/it-consulting', route: '/it-consulting', category: 'strategy' },
    { name: 'IT Procurement & Vendor Selection', href: '/it-consulting', route: '/it-consulting', category: 'strategy' },
    { name: 'Vendor Management', href: '/it-consulting', route: '/it-consulting', category: 'strategy' },
    { name: 'IT Monitoring & Reporting', href: '/services', route: '/', action: 'scroll-services', category: 'monitoring' },
  ],
  'Managed Services': [
    { name: 'Managed Print Services', href: '/managed-services', route: '/managed-services', category: 'managed-services' },
    { name: 'Telecommunications', href: '/managed-services', route: '/managed-services', category: 'managed-services' },
    { name: 'IT Documentation', href: '/managed-services', route: '/managed-services', category: 'managed-services' },
    { name: 'Training & Education', href: '/managed-services', route: '/managed-services', category: 'managed-services' },
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
            <img 
              src="https://bulldog-caper-mmpl.squarespace.com" 
              alt="79Ratio Logo" 
              className="h-[var(--space-32)] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <button className="flex items-center gap-[var(--space-8)] text-[var(--text-body)] font-medium hover:text-yellow-400 transition-colors duration-300 h-20 px-[var(--space-8)]">
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
            className="flex items-center justify-center bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-[var(--text-body)]"
          >
            Schedule a Call
          </button>
          <a href="https://79ratio.deskdirector.com/auth/v1/email" className="flex items-center justify-center border border-gray-700 text-white font-bold px-6 py-3 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300 text-[var(--text-body)]">
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
                <img 
                  src="https://bulldog-caper-mmpl.squarespace.com" 
                  alt="79Ratio Logo" 
                  className="h-[var(--space-32)] w-auto"
                />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
                <h3 className="text-yellow-400 font-bold text-xl">What We Do</h3>
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
                      className="flex items-center justify-center bg-yellow-400 text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-[var(--text-body)]"
                    >
                        Schedule a Call
                    </button>
                    <a href="https://79ratio.deskdirector.com/auth/v1/email" className="flex items-center justify-center border border-gray-700 text-white font-bold px-6 py-3 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300 text-[var(--text-body)]">
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