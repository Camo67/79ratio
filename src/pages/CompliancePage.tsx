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

const complianceServices = [
  {
    title: "Compliance Audits",
    description: "Identify gaps in compliance and provide recommendations for improvement.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Process Optimization",
    description: "Streamline internal workflows, reduce redundancy, and increase productivity.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Performance Analytics",
    description: "Use data-driven insights to identify areas for improvement and track progress over time.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Regulatory Training",
    description: "Ensure your team is aware of compliance requirements and trained to follow best practices.",
    icon: <Users className="w-6 h-6" />
  }
];

const optimizationProcess = [
  {
    step: "1",
    title: "Assessment",
    description: "Evaluate your current processes and compliance status."
  },
  {
    step: "2", 
    title: "Gap Identification",
    description: "Identify areas where you are not meeting standards."
  },
  {
    step: "3",
    title: "Solution Design",
    description: "Create a customized plan to address gaps and improve performance."
  },
  {
    step: "4",
    title: "Implementation",
    description: "Execute the plan with expert support and guidance."
  },
  {
    step: "5",
    title: "Monitoring & Support",
    description: "Track progress and provide ongoing support and optimization."
  }
];

const realResults = [
  { value: '60%', label: 'Reduction in processing time', sub: 'for a manufacturing client' },
  { value: '100%', label: 'Compliance with GDPR and HIPAA', sub: 'for a healthcare provider' },
  { value: '70%', label: 'Improvement in operational efficiency', sub: 'for a financial services firm' },
];

const CompliancePage = () => {
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
              Compliance & Optimization Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Ensure Compliance, Optimize Performance, and Reduce Risk with Our Compliance & Optimization Services
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we help organizations achieve compliance with industry standards, optimize their operations, and reduce risk through intelligent automation and strategic planning. Whether you're preparing for audits, ensuring data privacy, or looking to improve performance, our compliance and optimization services are designed to align your business with regulations and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Start Process Assessment
                </Button>
              </ScheduleCallModal>
              <ScheduleCallModal>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
                  Compliance Audit
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Compliance & Optimization? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is Compliance & Optimization?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              A Comprehensive Approach to Business Improvement
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Compliance & Optimization is the process of ensuring your business meets legal and regulatory standards while improving internal processes to increase productivity and reduce costs. This includes automating repetitive tasks, identifying compliance gaps, and implementing best practices to keep your operations running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Compliance & Optimization Matters */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Compliance & Optimization Matters</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Reduce risk of legal penalties by staying up-to-date with regulations like GDPR, HIPAA, and SOC 2.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Improve operational efficiency with automated workflows and process optimization.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Ensure data privacy and security with comprehensive audits and compliance management.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Improve performance metrics and make data-driven decisions with real-time analytics and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Compliance & Optimization Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Compliance & Optimization Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {complianceServices.map((service, i) => (
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

      {/* Our 5-Step Optimization Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our 5-Step Optimization Process</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {optimizationProcess.map((step, idx) => (
              <div key={idx} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                  {step.step}
                </div>
                <h4 className="text-white font-sans mb-[var(--space-12)]">{step.title}</h4>
                <p className="text-gray-400 font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
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

export default CompliancePage;