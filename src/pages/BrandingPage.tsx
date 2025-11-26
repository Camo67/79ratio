import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Palette, 
  Eye, 
  Users, 
  Smartphone,
  Monitor,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Target,
  Zap,
  MousePointerClick,
  Accessibility
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';

const baseDesign = import.meta.env.BASE_URL || '/';
const designAccessibilityBg = encodeURI(`${baseDesign}Image_fx (27).jpg`);

const whyChooseBranding = [
  {
    title: "Strategic Brand Development",
    description: "We help you define your brand's identity, values, and personality through in-depth research, audience analysis, and brand strategy sessions. Our goal is to create a brand that resonates with your audience and reflects your business's mission.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Professional Logo Design",
    description: "We create unique, memorable, and visually compelling logos that represent your brand's identity and values. Our designs are built to stand out, be scalable, and work across all platforms - from digital to print.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Consistent Visual Identity",
    description: "We ensure that all your branding materials - from websites and apps to business cards and marketing collateral - are consistent, cohesive, and aligned with your brand's identity. This helps build brand recognition and trust with your audience.",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "Typography & Color Strategy",
    description: "We develop custom typography and color schemes that reflect your brand's personality and values. These elements are used consistently across all your digital and print materials to create a unified brand experience.",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    title: "Brand Guidelines & Documentation",
    description: "We provide comprehensive brand guidelines that outline how to use your brand's logo, colors, fonts, and other visual elements. This ensures consistency across all platforms and helps your team maintain brand integrity.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: "Future-Ready and Scalable",
    description: "Our branding and visual identity solutions are built to grow with your business. Whether you're launching a new product, expanding your operations, or entering new markets, our solutions ensure long-term brand consistency and adaptability.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Expert Support & Management",
    description: "Our team of brand strategists, designers, and visual identity experts provides ongoing support, guidance, and updates. We help you refine your brand, maintain consistency, and stay ahead of the competition.",
    icon: <Users className="w-6 h-6" />,
  },
];

const brandingProcess = [
  {
    step: "1",
    title: "Discovery & Research",
    description: "We conduct audience research, competitor analysis, and brand strategy sessions to understand your business and audience."
  },
  {
    step: "2", 
    title: "Brand Strategy & Development",
    description: "We define your brand's identity, values, and personality and develop a comprehensive brand strategy."
  },
  {
    step: "3",
    title: "Design & Development",
    description: "We create logos, color schemes, typography, and other visual elements that reflect your brand's identity."
  },
  {
    step: "4",
    title: "Documentation & Guidelines",
    description: "We provide comprehensive brand guidelines to ensure consistent use of your brand across all platforms."
  },
  {
    step: "5",
    title: "Implementation & Support",
    description: "We help you launch your brand, maintain consistency, and provide ongoing support as your business grows."
  }
];

const brandingResults = [
  { value: 'Strong', label: 'Brand Recognition', sub: 'strong brand recognition for a mid-sized tech startup with a custom logo and brand identity' },
  { value: 'Increased', label: 'Customer Trust', sub: 'increased customer trust and higher engagement with a consistent and professional brand presence' },
  { value: 'Improved', label: 'Brand Consistency', sub: 'improved brand consistency across all platforms, including websites, apps, and marketing materials' },
];

const BrandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${designAccessibilityBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Branding & Visual Identity
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Build a Strong, Cohesive Brand That Stands Out
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              Create a brand that reflects your values, resonates with your audience, and stands out in a crowded market.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get a Branding Consultation
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Branding & Visual Identity Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our Branding & Visual Identity Services</h3>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our branding and visual identity solutions are built to support your business at every stage — from initial planning to ongoing development. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-[var(--space-32)]">
            {whyChooseBranding.map((item, i) => (
              <div key={i} className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
                <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                  {item.icon}
                  <h4 className="text-white font-sans">{item.title}</h4>
                </div>
                <p className="text-gray-400 font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branding & Visual Identity Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Branding & Visual Identity Process</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {brandingProcess.map((step, idx) => (
              <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
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

      {/* Branding & Visual Identity Results */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Real Results</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {brandingResults.map((r, i) => (
              <Card key={i} className="text-center p-[var(--space-32)] bg-black border-gray-800">
                <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">{r.value}</div>
                <div className="text-white font-sans mb-[var(--space-8)]">{r.label}</div>
                <p className="text-gray-400 font-sans">{r.sub}</p>
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

export default BrandingPage;
