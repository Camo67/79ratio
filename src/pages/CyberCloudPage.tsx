import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Shield, Cloud, CheckCircle, ArrowRight, Server, Monitor, Users, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import FinalCTA from '../components/FinalCTA'
import ScheduleCallModal from '../components/ScheduleCallModal'

const CyberCloudPage = () => {
  const base = import.meta.env.BASE_URL || '/'
  const heroBg = encodeURI(`${base}cloud_infustructure.jpg`)
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="py-[var(--space-96)] px-[var(--space-24)] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-[var(--space-16)] py-[var(--space-8)] rounded-full font-sans">
              Cyber Cloud Solutions
            </div>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Secure Cloud Solutions for the Modern Business
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] text-gray-300 max-w-3xl mx-auto font-sans">
              Protect your cloud infrastructure with enterprise-grade security solutions designed for today's distributed work environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Schedule Security Assessment
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Cyber Cloud Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive security solutions for your cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {[
              {
                title: "Cloud Security Assessment",
                description: "Comprehensive evaluation of your cloud security posture",
                icon: <Shield className="w-6 h-6" />,
                features: ["Vulnerability scanning", "Configuration review", "Compliance assessment"]
              },
              {
                title: "Identity & Access Management",
                description: "Secure authentication and authorization for cloud resources",
                icon: <Users className="w-6 h-6" />,
                features: ["Multi-factor authentication", "Role-based access control", "Privileged access management"]
              },
              {
                title: "Data Protection",
                description: "Encryption and data loss prevention for cloud environments",
                icon: <Cloud className="w-6 h-6" />,
                features: ["Data encryption", "Data loss prevention", "Key management"]
              },
              {
                title: "Continuous Monitoring",
                description: "24/7 monitoring and threat detection for cloud infrastructure",
                icon: <Monitor className="w-6 h-6" />,
                features: ["Real-time threat detection", "Security analytics", "Incident response"]
              }
            ].map((service, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-black">
                <CardContent className="p-[var(--space-32)]">
                  <div className="flex items-center gap-[var(--space-16)] mb-[var(--space-16)]">
                    <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                      {service.icon}
                    </div>
                    <h3 className="group-hover:text-yellow-400 transition-colors text-white font-sans">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-[var(--space-16)] font-sans">{service.description}</p>
                  <ul className="space-y-[var(--space-8)]">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[var(--text-body)] text-white font-sans">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-[var(--space-8)] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-[var(--space-24)] group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300 border-gray-700 text-white font-sans">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-[var(--space-8)] group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

export default CyberCloudPage;