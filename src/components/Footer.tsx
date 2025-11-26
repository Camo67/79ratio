import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const quickLinks = [
    'Digital Systems',
    'Design & Accessibility', 
    'Compliance & Optimization',
    'Support & Contact'
  ]

  const services = [
    'Cybersecurity',
    'Cloud Solutions',
    '24/7 Monitoring',
    'IT Consulting'
  ]

  const sectors = [
    'Law Firms',
    'Healthcare',
    'Nonprofits',
    'Manufacturing'
  ]

  const companyLinks = [
    'About Us',
    'Careers', 
    'Contact',
    'Blog'
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="sm" variant="light" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Technology that moves with you. Seamlessly integrating advanced technology 
              into your company's natural workflow.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>844-321-7284</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@79ratio.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/79Ratio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/79-ratio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/solutions/digital-systems" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Digital Systems
                </a>
              </li>
              <li>
                <a href="/solutions/design-accessibility" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Design & Accessibility
                </a>
              </li>
              <li>
                <a href="/solutions/compliance" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Compliance & Optimization
                </a>
              </li>
              <li>
                <a href="/get-started" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Support & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/solutions/cybersecurity-solutions" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/solutions/cloud" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="/managed-services" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  24/7 Monitoring
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Sectors</h3>
            <ul className="space-y-2">
              {sectors.map((sector) => (
                <li key={sector}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                    {sector}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/get-started" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <div>Copyright 79 RATIO 2024. All Rights Reserved</div>
              <div className="mt-1">79Ratio is an IPR Tech Group Company</div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>844-321-7284</span>
              </div>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
