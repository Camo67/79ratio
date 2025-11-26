import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
import { 
  CheckCircle, 
  BarChart3, 
  Settings, 
  FileText,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  Clock,
  Target,
  Award,
  Users,
  Palette,
  Heart,
  Monitor
} from 'lucide-react';

const baseCompliance = import.meta.env.BASE_URL || '/';
const complianceBg = encodeURI(`${baseCompliance}Image_fx (23).jpg`);

const paServices = [
  {
    title: "Real-Time Monitoring",
    description: "Track system performance and user behavior in real time.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Custom Dashboards",
    description: "Create tailored dashboards for key performance indicators (KPIs).",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Performance Optimization",
    description: "Identify areas for improvement and implement changes for better efficiency.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Data-Driven Reporting",
    description: "Generate detailed reports to support strategic decision-making.",
    icon: <FileText className="w-6 h-6" />
  }
];

const realResults = [
  { value: '20%', label: 'Improvement in system performance', sub: 'for an e-commerce platform' },
  { value: '30%', label: 'Reduction in user drop-off rates', sub: 'for a SaaS company' },
  { value: 'Increased', label: 'Operational efficiency', sub: 'for a logistics firm with real-time analytics' },
];

const PerformanceAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${complianceBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Performance Analytics
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Drive Informed Decisions with Real-Time Performance Analytics
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we empower organizations with real-time insights into system performance, user behavior, and operational efficiency. Our performance analytics tools help you track key metrics, identify bottlenecks, and optimize processes to enhance productivity and user experience.
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

      {/* What Is Performance Analytics? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is Performance Analytics?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              Unlock Actionable Insights from Your Data
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Performance Analytics is the process of collecting, analyzing, and interpreting data to evaluate the effectiveness of systems, applications, and business processes. It helps organizations identify trends, improve performance, and make data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Performance Analytics Matters */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Performance Analytics Matters</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Identify inefficiencies and bottlenecks in your operations.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Improve user experience by tracking behavior and performance metrics.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Optimize resource allocation and reduce costs.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Enable proactive decision-making with real-time insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Performance Analytics Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Performance Analytics Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {paServices.map((service, i) => (
              <div key={i} className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
                <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                  {service.icon}
                  <h4 className="text-white font-sans">{service.title}</h4>
                </div>
                <p className="text-gray-400 font-sans">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Real Results</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {realResults.map((r, i) => (
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
  );
}

export default PerformanceAnalyticsPage;
