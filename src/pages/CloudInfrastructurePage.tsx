import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Cloud, TrendingUp, Globe, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import FinalCTA from '../components/FinalCTA'
import ScheduleCallModal from '../components/ScheduleCallModal'

export default function CloudInfrastructurePage() {
  const base = import.meta.env.BASE_URL || '/'
  const heroBg = encodeURI(`${base}cloud c_computing.jpg`)

  const whyChoose = [
    {
      title: 'Scalable & Secure Cloud Platforms',
      description:
        'We deploy your infrastructure on AWS, Microsoft Azure, and Google Cloud, with hybrid and multi-cloud options to suit your needs. Our solutions include auto-scaling capabilities, ensuring your systems can handle traffic spikes without downtime.',
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: 'Cost-Efficient and Future-Ready',
      description:
        'We help you reduce infrastructure costs by up to 50% through optimized resource allocation, automated scaling, and cloud-native architecture. Our infrastructure is built to be future-proof, allowing your business to grow without the burden of outdated systems.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'High Availability and Uptime',
      description:
        'With 99.9% uptime guarantees, our cloud infrastructure ensures your applications and data are always available — no matter where your users are. We implement redundancy, load balancing, and failover systems to maintain continuous performance.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Expert Support & Management',
      description:
        'Our team of cloud engineers and architects provides 24/7 monitoring, maintenance, and optimization. We help you deploy, manage, and scale your cloud environment — so you can focus on what matters most: your business.',
      icon: <Users className="w-6 h-6" />,
    },
  ]

  const cloudProcess = [
    { step: '1', title: 'Assessment', description: 'We analyze your current infrastructure and business goals to determine the best cloud strategy.' },
    { step: '2', title: 'Design & Deployment', description: 'We design and deploy your cloud environment using best practices and the latest technologies.' },
    { step: '3', title: 'Optimization', description: 'We continuously optimize your cloud usage to reduce costs and improve performance.' },
    { step: '4', title: 'Monitoring & Support', description: 'We monitor your environment 24/7 and provide ongoing support to ensure stability and reliability.' },
  ]

  const realResults = [
    { value: '60%', label: 'Cost Reduction', sub: 'in infrastructure costs' },
    { value: '99.9%', label: 'Uptime', sub: 'achieved post migration' },
    { value: '100%', label: 'Compliance', sub: 'with industry standards' },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
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
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">Cloud Infrastructure</Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">Cloud Infrastructure That Grows With You</h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] opacity-90 max-w-3xl mx-auto font-sans">
              Scalable, secure, and future-ready cloud solutions.
            </p>
            <p className="text-white/80 mb-[var(--space-48)] max-w-3xl mx-auto font-sans">
              At 79Ratio, we help businesses of all sizes harness the power of the cloud — with secure infrastructure, instant scalability, and cost efficiency. Whether you're just starting out or managing a growing enterprise, our cloud solutions are designed to scale with your needs, reduce costs, and keep your operations running smoothly.
              <br />Deploy on AWS, Azure, and Google Cloud — with hybrid and auto-scaling capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Why Choose Our Cloud Infrastructure Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {whyChoose.map((item, index) => (
              <Card key={index} className="p-[var(--space-32)] hover:shadow-lg transition-shadow glow-gold-subtle bg-black border-gray-800 text-left">
                <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">{item.icon}
                  <h4 className="text-white font-sans">{item.title}</h4>
                </div>
                <p className="text-gray-400 font-sans">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Cloud Infrastructure Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {cloudProcess.map((step, idx) => (
              <Card key={idx} className="text-center p-[var(--space-32)] bg-black border-gray-800">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                  {step.step}
                </div>
                <h4 className="text-white font-sans mb-[var(--space-12)]">{step.title}</h4>
                <p className="text-gray-400 font-sans">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Real Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {realResults.map((r, i) => (
              <Card key={i} className="text-center p-[var(--space-32)] bg-black border-gray-800">
                <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">{r.value}</div>
                <div className="text-white font-sans mb-[var(--space-8)]">{r.label}</div>
                <p className="text-gray-400 font-sans">{r.sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Ready to Scale Your Infrastructure?</h2>
          <p className="text-[var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Let's build a cloud solution that fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <ScheduleCallModal>
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Schedule Free Assessment
              </Button>
            </ScheduleCallModal>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  )
}
