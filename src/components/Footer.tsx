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
              <Logo size="md" variant="light" />
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sectors</h3>
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
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors hover-underline">
                    {link}
                  </a>
                </li>
              ))}
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