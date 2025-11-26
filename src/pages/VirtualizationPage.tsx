import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
import { CheckCircle, Server, Shield, TrendingUp, Users } from 'lucide-react'

export default function VirtualizationPage() {
  const base = import.meta.env.BASE_URL || '/'
  const heroBg = encodeURI(`${base}it-infrastructure-management-plan.jpg`)
  
  const whyChooseVirtualization = [
    {
      title: "Enterprise-Grade Virtualization",
      description: "We implement VMware vSphere, Microsoft Hyper-V, and container orchestration platforms to maximize hardware utilization and reduce the need for physical servers. Our solutions support both traditional virtual machines and modern container-based environments.",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Cost Savings and Efficiency",
      description: "Our virtualization strategies help you save up to 70% on hardware costs by consolidating workloads and reducing energy consumption. We also help you improve disaster recovery capabilities and reduce downtime with automated backups and failover systems.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Enhanced Security and Compliance",
      description: "We implement secure virtualization environments with role-based access controls, encryption, and network segmentation. Our solutions are designed to meet compliance standards like HIPAA, GDPR, and SOC 2, ensuring your data is protected and your operations remain compliant.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Expert Support & Management",
      description: "Our team of virtualization experts provides 24/7 monitoring, maintenance, and optimization. We help you deploy, manage, and scale your virtualization environment — so you can focus on what matters most: your business.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const virtualizationProcess = [
    { step: '1', title: 'Assessment', description: 'We analyze your current infrastructure and business goals to determine the best virtualization strategy.' },
    { step: '2', title: 'Design & Deployment', description: 'We design and deploy your virtualization environment using best practices and the latest technologies.' },
    { step: '3', title: 'Optimization', description: 'We continuously optimize your virtualization usage to reduce costs and improve performance.' },
    { step: '4', title: 'Monitoring & Support', description: 'We monitor your environment 24/7 and provide ongoing support to ensure stability and reliability.' },
  ];

  const virtualizationResults = [
    { value: '70%', label: 'Cost Reduction', sub: 'reduction in hardware costs for a mid-sized manufacturing company' },
    { value: 'DR', label: 'Disaster Recovery', sub: 'improved disaster recovery capabilities with automated failover and backup systems' },
    { value: 'Security', label: 'Enhanced Security', sub: 'enhanced security with role-based access and encryption across all virtual environments' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("${heroBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-[var(--space-16)] text-white font-sans">Maximize Efficiency with Enterprise-Grade Virtualization</h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] opacity-90 max-w-3xl mx-auto font-sans">
              Reduce hardware costs, improve disaster recovery, and enhance security with our virtualization solutions.
            </p>
            <p className="text-white/80 mb-[var(--space-48)] max-w-3xl mx-auto font-sans">
              At 79Ratio, we help organizations optimize their IT infrastructure through enterprise-grade virtualization. Whether you're running VMware, Hyper-V, or containerized environments, our solutions are designed to maximize efficiency, reduce costs, and improve system reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get a Free Consultation
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Virtualization Solutions */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our Virtualization Solutions</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our virtualization services are built to maximize the value of your existing infrastructure while reducing costs and improving performance. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {whyChooseVirtualization.map((item, i) => (
              <div key={i} className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
                <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                  {item.icon}
                  <h3 className="text-white font-sans">{item.title}</h3>
                </div>
                <p className="text-gray-400 font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Virtualization Implementation Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Our Virtualization Implementation Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {virtualizationProcess.map((step, idx) => (
              <div key={idx} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                  {step.step}
                </div>
                <h3 className="text-white font-sans mb-[var(--space-12)]">{step.title}</h3>
                <p className="text-gray-400 font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Real Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {virtualizationResults.map((r, i) => (
              <div key={i} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">{r.value}</div>
                <div className="text-white font-sans mb-[var(--space-8)]">{r.label}</div>
                <p className="text-gray-400 font-sans">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <FinalCTA />
      <Footer />
    </div>
  )
}
