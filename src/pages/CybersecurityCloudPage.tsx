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
  Monitor,
  Cloud,
  Eye,
} from 'lucide-react';

const baseCyber = import.meta.env.BASE_URL || '/';
const cyberBg = encodeURI(`${baseCyber}Image_fx (23).jpg`);

const ccServices = [
  {
    title: "Secure Cloud Deployment",
    description: "Implement secure cloud environments with built-in security controls.",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Threat Detection and Response",
    description: "Monitor for threats and respond quickly to security incidents.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Compliance and Governance",
    description: "Ensure compliance with regulations like GDPR and SOC 2.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Cloud Security Audits",
    description: "Identify vulnerabilities and provide recommendations for improvement.",
    icon: <Eye className="w-6 h-6" />
  }
];

const realResults = [
  { value: 'Zero', label: 'Security incidents', sub: 'for a financial institution after cloud security upgrades' },
  { value: 'Improved', label: 'Compliance with GDPR', sub: 'for a multinational corporation' },
  { value: 'Enhanced', label: 'Threat detection capabilities', sub: 'for a healthcare provider using our cloud security tools' },
];

const CybersecurityCloudPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${cyberBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Cybersecurity & Cloud
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Secure Your Cloud Environment with Integrated Cybersecurity Solutions
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we combine the power of cloud computing with robust security measures to protect your data and infrastructure. As businesses move to the cloud, ensuring that their systems are secure against evolving threats is essential. Our integrated solutions provide secure cloud environments, threat detection, and compliance with industry standards.
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

      {/* What Is Cybersecurity & Cloud? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is Cybersecurity & Cloud?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              Integrated Security for the Modern Cloud
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Cybersecurity & Cloud refers to the integration of cloud computing with security measures to protect data, applications, and infrastructure. It ensures that cloud environments are secure, compliant, and resilient against cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity & Cloud Matters */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Cybersecurity & Cloud Matters</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Protect sensitive data and applications from cyber threats.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Ensure compliance with industry regulations and standards.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Maintain business continuity with secure and resilient cloud infrastructure.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Reduce the risk of data breaches and downtime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cybersecurity & Cloud Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Cybersecurity & Cloud Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {ccServices.map((service, i) => (
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

export default CybersecurityCloudPage;
