import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
import { CheckCircle, Network, Shield, TrendingUp, Zap } from 'lucide-react'

export default function NetworkArchitecturePage() {
  const base = import.meta.env.BASE_URL || '/'
  const heroBg = encodeURI(`${base}nodes.jpg`)
  
  const whyChooseNetwork = [
    {
      title: "High-Performance Network Design",
      description: "We design and implement secure, high-speed networks using SD-WAN, bandwidth optimization, and redundancy measures. Our solutions ensure fast data transfer, reduced latency, and seamless connectivity across your entire organization.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Improved Security and Reliability",
      description: "We implement multi-layered security protocols, firewalls, and intrusion detection systems to protect your network from cyber threats. Our solutions also include redundancy and failover systems to minimize downtime and ensure continuous operation.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Scalable and Future-Ready",
      description: "Our network architectures are designed to grow with your business. Whether you're expanding your operations or integrating new technologies, our solutions ensure smooth scalability and long-term reliability.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Expert Support & Management",
      description: "Our team of network engineers and architects provides 24/7 monitoring, maintenance, and optimization. We help you design, deploy, and manage your network — so you can focus on what matters most: your business.",
      icon: <Network className="w-6 h-6" />,
    },
  ];

  const networkProcess = [
    { step: '1', title: 'Assessment', description: 'We analyze your current network infrastructure and business goals to determine the best architecture strategy.' },
    { step: '2', title: 'Design & Deployment', description: 'We design and deploy your network using best practices and the latest technologies.' },
    { step: '3', title: 'Optimization', description: 'We continuously optimize your network performance to reduce latency, improve speed, and enhance security.' },
    { step: '4', title: 'Monitoring & Support', description: 'We monitor your network 24/7 and provide ongoing support to ensure stability and reliability.' },
  ];

  const networkResults = [
    { value: '50%', label: 'Latency Reduction', sub: 'reduction in network latency for a global enterprise' },
    { value: 'Security', label: 'Improved Security', sub: 'improved security with multi-layered protection and real-time threat monitoring' },
    { value: '99.9%', label: 'Uptime', sub: 'uptime achieved through redundancy and failover systems' },
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
            <h1 className="mb-[var(--space-16)] text-white font-sans">Build a Faster, Safer, and More Reliable Network</h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] opacity-90 max-w-3xl mx-auto font-sans">
              Design and implement high-performance networks that keep your business connected, secure, and scalable.
            </p>
            <p className="text-gray-300 mb-[var(--space-16)] font-sans">
              At 79Ratio, we help organizations build robust network architectures that reduce latency, improve performance, and enhance security. Whether you're managing a small office network or a complex enterprise infrastructure, our solutions are designed to grow with your needs and keep your operations running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal isOpen={false} onClose={function (): void {
                throw new Error('Function not implemented.');
              } }>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get a Free Consultation
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Network Architecture Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our Network Architecture Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our network architecture solutions are built to support your business at every stage — from initial design to ongoing optimization. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {whyChooseNetwork.map((item, i) => (
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

      {/* Our Network Architecture Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Our Network Architecture Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {networkProcess.map((step, idx) => (
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
            {networkResults.map((r, i) => (
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
