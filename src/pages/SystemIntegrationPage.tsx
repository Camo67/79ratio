import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
import { CheckCircle, Database, Workflow, Zap, TrendingUp } from 'lucide-react'

export default function SystemIntegrationPage() {
  const base = import.meta.env.BASE_URL || '/'
  const heroBg = encodeURI(`${base}business-it-solutions-overview.jpg`)
  
  const whyChooseIntegration = [
    {
      title: "Unified Systems and Workflows",
      description: "We integrate disparate systems, applications, and data sources using API development, workflow automation, and legacy modernization. Our solutions ensure that your systems communicate seamlessly, reducing manual data entry, errors, and redundant processes.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Improved Data Consistency",
      description: "We ensure real-time data synchronization across all integrated systems, so your team always has access to accurate, up-to-date information. This helps improve decision-making, compliance, and operational efficiency.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Future-Ready and Scalable",
      description: "Our integration strategies are designed to grow with your business. Whether you're expanding your operations or adopting new technologies, our solutions ensure smooth scalability and long-term reliability.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Expert Support & Management",
      description: "Our team of integration engineers and architects provides 24/7 monitoring, maintenance, and optimization. We help you design, deploy, and manage your integrated systems — so you can focus on what matters most: your business.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const integrationProcess = [
    { step: '1', title: 'Assessment', description: 'We analyze your current systems, workflows, and business goals to determine the best integration strategy.' },
    { step: '2', title: 'Design & Deployment', description: 'We design and deploy your integration using best practices and the latest technologies.' },
    { step: '3', title: 'Optimization', description: 'We continuously optimize your integrated systems to improve performance, reduce latency, and enhance security.' },
    { step: '4', title: 'Monitoring & Support', description: 'We monitor your systems 24/7 and provide ongoing support to ensure stability and reliability.' },
  ];

  const integrationResults = [
    { value: 'Operations', label: 'Streamlined Operations', sub: 'streamlined operations with reduced manual work and faster data processing' },
    { value: 'Data', label: 'Improved Data Consistency', sub: 'improved data consistency across all integrated systems and departments' },
    { value: 'Downtime', label: 'Reduced Downtime', sub: 'reduced downtime and faster response times with automated workflows' },
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
            <h1 className="mb-[var(--space-16)] text-white font-sans">Seamless Integration for Smoother Operations</h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] opacity-90 max-w-3xl mx-auto font-sans">
              Unify your systems, streamline workflows, and eliminate inefficiencies with our system integration solutions.
            </p>
            <p className="text-gray-300 mb-[var(--space-16)] font-sans">
              At 79Ratio, we help organizations connect disparate systems — whether it's legacy platforms, cloud services, or internal tools — to create a unified, efficient, and secure digital environment. Whether you're integrating new technologies or modernizing outdated systems, our solutions are designed to improve performance, reduce manual work, and ensure data consistency.
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

      {/* Why Choose Our System Integration Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our System Integration Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our system integration solutions are built to support your business at every stage — from initial planning to ongoing optimization. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {whyChooseIntegration.map((item, i) => (
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

      {/* Our System Integration Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Our System Integration Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {integrationProcess.map((step, idx) => (
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
            {integrationResults.map((r, i) => (
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
