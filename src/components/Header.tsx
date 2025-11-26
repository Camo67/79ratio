import { useState, useEffect, useRef } from 'react';
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

// --- Mega Menu Data with proper routing ---
const megaMenuData: Record<string, Array<{name: string; href: string; route: string; category?: string}>> = {
  'Digital Systems': [
    { name: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', route: '/solutions/cloud-infrastructure', category: 'digital-systems' },
    { name: 'Virtualization Solutions', href: '/solutions/virtualization', route: '/solutions/virtualization', category: 'digital-systems' },
    { name: 'Network Architecture', href: '/solutions/network-architecture', route: '/solutions/network-architecture', category: 'digital-systems' },
    { name: 'System Integration', href: '/solutions/system-integration', route: '/solutions/system-integration', category: 'digital-systems' },
  ],
  'Design & Accessibility': [
    { name: 'UX/UI Design', href: '/solutions/ux-ui-design', route: '/solutions/ux-ui-design', category: 'design-accessibility' },
    { name: 'Accessibility Audits', href: '/solutions/accessibility-audits', route: '/solutions/accessibility-audits', category: 'design-accessibility' },
    { name: 'Branding & Visual Identity', href: '/solutions/branding', route: '/solutions/branding', category: 'design-accessibility' },
    { name: 'User Experience Optimization', href: '/solutions/user-experience-optimization', route: '/solutions/user-experience-optimization', category: 'design-accessibility' },
  ],
  'Compliance & Optimization': [
    { name: 'Business Process Automation', href: '/solutions/business-process-automation', route: '/solutions/business-process-automation', category: 'compliance' },
    { name: 'Compliance Management', href: '/solutions/compliance-management', route: '/solutions/compliance-management', category: 'compliance' },
    { name: 'Performance Analytics', href: '/solutions/performance-analytics', route: '/solutions/performance-analytics', category: 'compliance' },
    { name: 'Workflow Optimization', href: '/solutions/workflow-optimization', route: '/solutions/workflow-optimization', category: 'compliance' },
  ],
  'Cybersecurity & Cloud': [
    { name: 'Cybersecurity Solutions', href: '/solutions/cybersecurity-solutions', route: '/solutions/cybersecurity-solutions', category: 'cybersecurity' },
    { name: 'Cybersecurity & Cloud', href: '/solutions/cybersecurity-cloud', route: '/solutions/cybersecurity-cloud', category: 'cybersecurity' },
    { name: 'Cloud Migration', href: '/solutions/cloud', route: '/solutions/cloud', category: 'cloud' },
    { name: 'Managed Cloud Hosting', href: '/solutions/cloud', route: '/solutions/cloud', category: 'cloud' },
    { name: 'Managed Services', href: '/managed-services', route: '/managed-services', category: 'managed-services' },
  ],
};

// --- Main Header Component ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Effect to prevent body scrolling when a menu is open
  useEffect(() => {
    if (isServicesMenuOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isServicesMenuOpen, isMenuOpen]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current && 
        !servicesMenuRef.current.contains(event.target as Node) &&
        !document.getElementById('services-menu-button')?.contains(event.target as Node)
      ) {
        setIsServicesMenuOpen(false);
      }
      
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        !document.getElementById('mobile-menu-button')?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll('a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isMenuOpen]);

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

  // Handle services menu click
  const handleServicesMenuClick = (category?: string) => {
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

  // Handle mobile menu item click
  const handleMobileMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" aria-label="79Ratio Home">
              <Logo imageClassName="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <div className="relative" ref={servicesMenuRef}>
              <button
                id="services-menu-button"
                onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                onBlur={(e) => {
                  // Check if focus moved outside the menu
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setTimeout(() => setIsServicesMenuOpen(false), 200);
                  }
                }}
                className="flex items-center text-base font-medium text-white hover:text-yellow-400 transition-colors duration-200"
                aria-haspopup="true"
                {...(isServicesMenuOpen ? {'aria-expanded': 'true'} : {'aria-expanded': 'false'})}
              >
                Solutions
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu */}
              {isServicesMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-screen max-w-6xl bg-black border border-gray-800 shadow-2xl rounded-lg overflow-hidden"
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    {Object.entries(megaMenuData).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-yellow-400 font-semibold mb-3">{category}</h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.route}
                                className="block py-2 text-gray-300 hover:text-white hover:bg-gray-900 px-3 rounded transition-colors duration-200"
                                onClick={() => {
                                  setIsServicesMenuOpen(false);
                                  setIsMenuOpen(false);
                                  if (item.category) {
                                    handleServicesMenuClick(item.category);
                                  }
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/industries" 
              className="text-base font-medium text-white hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === '/') {
                  scrollToSection('contact');
                } else {
                  navigate('/#contact');
                }
              }}
              className="text-base font-medium text-white hover:text-yellow-400 transition-colors duration-200"
              aria-label="Contact us"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/solutions"
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 shadow-lg"
              aria-label="Get started with 79Ratio"
            >
              <Lock className="mr-2 h-4 w-4" />
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              {...(isMenuOpen ? {'aria-expanded': 'true'} : {'aria-expanded': 'false'})}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden bg-black border-t border-gray-800"
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            <div className="px-4 py-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="flex items-center w-full text-left text-base font-medium text-white hover:text-yellow-400 py-2"
                {...(activeDropdown === 'services' ? {'aria-expanded': 'true'} : {'aria-expanded': 'false'})}
                aria-controls="mobile-services-menu"
              >
                Solutions
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div 
                  id="mobile-services-menu"
                  className="mt-2 pl-4 space-y-2 border-l border-gray-800"
                >
                  {Object.entries(megaMenuData).flatMap(([category, items]) => 
                    items.map((item: {name: string; href: string; route: string; category?: string}) => (
                      <Link
                        key={item.name}
                        to={item.route}
                        className="block py-2 text-gray-300 hover:text-white pl-4"
                        onClick={() => {
                          handleMobileMenuItemClick();
                          if (item.category) {
                            handleServicesMenuClick(item.category);
                          }
                        }}
                      >
                        {item.name}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
            
            <Link
              to="/industries"
              className="block px-4 py-2 text-base font-medium text-white hover:text-yellow-400"
              onClick={handleMobileMenuItemClick}
            >
              Industries
            </Link>
            
            <a
              href="#contact"
              className="block px-4 py-2 text-base font-medium text-white hover:text-yellow-400"
              onClick={(e) => {
                e.preventDefault();
                handleMobileMenuItemClick();
                if (location.pathname === '/') {
                  scrollToSection('contact');
                } else {
                  navigate('/#contact');
                }
              }}
            >
              Contact
            </a>
            
            <div className="px-4 py-4">
              <Link
                to="/solutions"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500"
                onClick={handleMobileMenuItemClick}
                aria-label="Get started with 79Ratio"
              >
                <Lock className="mr-2 h-4 w-4" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
