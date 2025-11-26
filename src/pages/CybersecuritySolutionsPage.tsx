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
  Eye
} from 'lucide-react';

const baseCyber = import.meta.env.BASE_URL || '/';
const cyberBg = encodeURI(`${baseCyber}Image_fx (23).jpg`);

const csServices = [
  {
    title: "Threat Intelligence",
    description: "Monitor for emerging threats and vulnerabilities.",
    icon: <Eye className="w-6 h-6" />
  },
  {
    title: "Endpoint Protection",
    description: "Secure devices and systems from malware and unauthorized access.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Network Security",
    description: "Protect your network infrastructure from cyber threats.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Incident Response Planning",
    description: "Prepare for and respond to security incidents effectively.",
    icon: <Zap className="w-6 h-6" />
  }
];

const CybersecuritySolutionsPage = () => {
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
              Cybersecurity Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Protect Your Business with Comprehensive Cybersecurity Solutions
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we provide end-to-end cybersecurity solutions to protect your digital assets from cyber threats, including malware, phishing, and data breaches. Our comprehensive security strategies include threat intelligence, endpoint protection, network monitoring, and incident response planning to ensure your business remains secure and compliant.
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

      {/* What Is Cybersecurity Solutions? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is Cybersecurity Solutions?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              Comprehensive Protection for Your Digital Assets
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Cybersecurity Solutions are designed to protect your digital assets from cyber threats. These solutions include threat detection, network security, data encryption, and incident response planning to safeguard your business against evolving threats.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cybersecurity Solutions Matter */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Cybersecurity Solutions Matter</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Protect your business from cyberattacks and data breaches.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Ensure compliance with industry regulations and standards.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Reduce downtime and financial loss due to security incidents.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Build trust with customers and partners through strong security practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Cybersecurity Solutions */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Cybersecurity Solutions</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {csServices.map((service, i) => (
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

      <FinalCTA />
      <Footer />
    </div>
  );
}

export default CybersecuritySolutionsPage;
