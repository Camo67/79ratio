import { useState } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { 
  Printer, 
  Phone, 
  FileText, 
  GraduationCap, 
  Monitor, 
  Shield, 
  Cloud, 
  Headphones,
  Clock,
  Users,
  Settings,
  CheckCircle,
  ArrowRight,
  Mail,
  Smartphone,
  Wifi,
  HardDrive,
  Database,
  Zap
} from 'lucide-react'

const ManagedServices = () => {
  const [activeService, setActiveService] = useState('print')

  const managedServices = [
    {
      id: 'print',
      icon: <Printer className="w-8 h-8 text-yellow-400" />,
      title: "Managed Print Services",
      subtitle: "Complete print infrastructure management",
      description: "Streamline your printing operations with our comprehensive managed print services. We handle everything from device procurement to maintenance, ensuring optimal performance and cost-effectiveness.",
      features: [
        "Print fleet management and optimization",
        "Proactive monitoring and maintenance",
        "Supply management and automated ordering",
        "Usage analytics and cost reporting",
        "Security and compliance management",
        "User training and support"
      ],
      benefits: [
        "Reduce printing costs by up to 30%",
        "Minimize downtime with proactive maintenance", 
        "Improve document security and compliance",
        "Free up IT resources for strategic initiatives"
      ]
    },
    {
      id: 'telecom',
      icon: <Phone className="w-8 h-8 text-yellow-400" />,
      title: "Telecommunications",
      subtitle: "Advanced communication solutions",
      description: "Enhance your business communications with our comprehensive telecommunications services. From VoIP systems to mobile device management, we keep your team connected.",
      features: [
        "VoIP phone systems and cloud PBX",
        "Mobile device management (MDM)",
        "Internet and network connectivity",
        "Video conferencing solutions",
        "Unified communications platforms",
        "24/7 telecommunications support"
      ],
      benefits: [
        "Improve communication efficiency",
        "Reduce telecommunications costs",
        "Scale communications as you grow",
        "Ensure reliable connectivity"
      ]
    },
    {
      id: 'documentation',
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      title: "IT Documentation",
      subtitle: "Comprehensive IT documentation services",
      description: "Maintain accurate, up-to-date IT documentation with our professional documentation services. We create and maintain the documentation your business needs for compliance and efficiency.",
      features: [
        "Network diagrams and topology mapping",
        "Standard operating procedures (SOPs)",
        "Disaster recovery documentation",
        "Security policies and procedures",
        "Software licensing documentation",
        "Asset inventory and management"
      ],
      benefits: [
        "Ensure compliance with regulations",
        "Reduce troubleshooting time",
        "Facilitate knowledge transfer",
        "Support audit requirements"
      ]
    },
    {
      id: 'training',
      icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
      title: "Training & Education",
      subtitle: "Empower your team with knowledge",
      description: "Invest in your team's success with our comprehensive IT training and education programs. We provide customized training solutions that align with your business objectives.",
      features: [
        "Cybersecurity awareness training",
        "Software application training",
        "IT best practices workshops",
        "Compliance training programs",
        "Custom curriculum development",
        "Ongoing education support"
      ],
      benefits: [
        "Reduce security incidents by 60%",
        "Increase productivity and efficiency",
        "Ensure regulatory compliance",
        "Build internal IT capabilities"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      title: "24/7 System Monitoring",
      description: "Continuous monitoring of your IT infrastructure with proactive issue resolution."
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-400" />,
      title: "Help Desk Support", 
      description: "Comprehensive technical support for all your IT needs with multiple support tiers."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Security Management",
      description: "Ongoing security monitoring, threat detection, and incident response services."
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: "Cloud Services Management",
      description: "Complete management of your cloud infrastructure and applications."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-400" />,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with rapid recovery capabilities."
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-400" />,
      title: "Infrastructure Maintenance",
      description: "Regular maintenance and updates to keep your systems running optimally."
    }
  ]

  const packages = [
    {
      name: "Essential",
      description: "Perfect for small businesses",
      price: "Starting at $99/month",
      features: [
        "Basic print management",
        "Standard telecommunication support", 
        "Essential IT documentation",
        "Basic training modules",
        "Business hours support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      description: "Ideal for growing companies",
      price: "Starting at $299/month",
      features: [
        "Comprehensive print services",
        "Advanced telecom solutions",
        "Complete documentation suite",
        "Custom training programs",
        "Extended support hours",
        "Proactive monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom pricing",
      features: [
        "Enterprise print optimization",
        "Full telecom infrastructure",
        "Advanced documentation services",
        "Executive training programs", 
        "24/7 dedicated support",
        "Complete managed services"
      ],
      popular: false
    }
  ]

  const selectedService = managedServices.find(service => service.id === activeService)

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-light)' }}>
      {/* Hero Section */}
      <section className="bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
              Managed IT Services
            </Badge>
            <h1 className="mb-6 text-white creative-heading">
              Comprehensive Managed Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Focus on your business while we handle your IT infrastructure. Our managed services provide 
              complete peace of mind with proactive monitoring, maintenance, and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button px-8 py-6 text-body-large font-sans"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 text-body-large font-sans"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-black font-sans">
              Core Managed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of managed services ensures your technology works seamlessly, 
              allowing you to focus on what matters most - growing your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2 sticky top-24">
                {managedServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeService === service.id
                        ? 'bg-blue-50 border-l-4 border-blue-400 shadow-md'
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        activeService === service.id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.subtitle}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-2">
              {selectedService && (
                <Card className="p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-yellow-100 rounded-lg">
                      {selectedService.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedService.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-blue-400" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Business Benefits
                      </h4>
                      <ul className="space-y-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Button 
                      className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3"
                    >
                      Learn More About {selectedService.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-black font-sans">
              Additional Managed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your IT capabilities with our comprehensive range of additional managed services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-black font-sans">
              Managed Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect managed services package for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${
                  pkg.popular 
                    ? 'border-2 border-yellow-400 shadow-xl scale-105' 
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-black px-4 py-1 font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-blue-400">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                      : 'bg-blue-400 text-white hover:bg-blue-500'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-white creative-heading">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our managed services experts help you design a solution that fits your business perfectly. 
            Schedule a consultation today and discover how we can optimize your IT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button px-8 py-6 text-body-large"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 text-body-large"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ManagedServices