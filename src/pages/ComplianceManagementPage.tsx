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
    title: "Regulatory Audits",
    description: "Identify gaps in compliance and provide recommendations for improvement.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Policy Development",
    description: "Create custom and procedures that align with industry standards and legal requirements.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Risk Assessment",
    description: "Identify potential compliance risks and develop mitigation strategies.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Training and Awareness",
    description: "Ensure your team is aware of compliance requirements and trained to follow best practices.",
    icon: <Users className="w-6 h-6" />
  }
];

const realResults = [
  { value: '100%', label: 'Compliance with HIPAA', sub: 'for a healthcare provider' },
  { value: '50%', label: 'Reduced audit time', sub: 'for a financial services firm' },
  { value: 'Improved', label: 'Data security and reduced risk of data breaches', sub: 'for a technology company' },
];

const ComplianceManagementPage = () => {
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
              Compliance Management
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Stay Compliant with Industry Standards and Reduce Risk with Our Compliance Management Services
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we help organizations maintain compliance with legal and regulatory standards to reduce risk, avoid penalties, and ensure business continuity. Whether you're preparing for audits, ensuring data privacy, or managing internal policies, our compliance management services are designed to keep your business aligned with the latest regulations.
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

      {/* What Is Compliance Management? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is Compliance Management?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              A Proactive Approach to Regulatory Adherence
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Compliance Management is the process of ensuring your business follows legal, regulatory, and internal policies. It includes auditing processes, identifying risks, and controls to ensure compliance with standards like GDPR, HIPAA, and SOC 2.
            </p>
          </div>
        </div>
      </section>

      {/* Why Compliance Management Matters */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Compliance Management Matters</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Avoid legal penalties and fines by staying up-to-date with regulations.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Reduce risk by identifying and addressing compliance gaps.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Ensure data privacy and security with comprehensive audits and risk assessments.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Improve audit readiness and reduce time spent on compliance tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Compliance Management Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Compliance Management Services</h3>
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

export default ComplianceManagementPage;
