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

const whyChooseAccessibility = [
  {
    title: "Compliance with Legal Standards",
    description: "We ensure your digital products are WCAG 2.1 AA compliant, and aligned with ADA (Americans with Disabilities Act) and Section 508 standards. Our audits help you avoid legal risks and ensure your digital content is accessible to all users.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Improved User Experience",
    description: "Accessibility isn't just about compliance — it's about ensuring your digital products are usable for everyone. Our audits identify barriers like poor color contrast, broken keyboard navigation, and screen reader incompatibility, helping you create a more inclusive and engaging experience for all users.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Identify and Fix Accessibility Issues",
    description: "We conduct manual and automated audits to detect and resolve accessibility issues such as missing alt text, broken links, poor contrast, and inaccessible forms. Our reports include detailed recommendations and actionable steps to improve your digital accessibility.",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    title: "Future-Ready and Scalable",
    description: "Our audits are designed to grow with your business. Whether you're launching a new product, redesigning your website, or updating your app, our solutions ensure long-term accessibility and compliance.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Expert Support & Guidance",
    description: "Our team of accessibility experts and compliance specialists provides ongoing support, training, and guidance. We help you understand accessibility standards, implement best practices, and maintain compliance over time.",
    icon: <Target className="w-6 h-6" />,
  },
];

const accessibilityProcess = [
  {
    step: "1",
    title: "Assessment & Planning",
    description: "We analyze your digital products and review your business goals to determine the scope of the audit."
  },
  {
    step: "2", 
    title: "Testing & Evaluation",
    description: "We conduct manual and automated testing to identify accessibility issues, compliance gaps, and user experience barriers."
  },
  {
    step: "3",
    title: "Reporting & Recommendations",
    description: "We provide a detailed report with clear findings, compliance status, and actionable recommendations for improvement."
  },
  {
    step: "4",
    title: "Implementation & Support",
    description: "We help you implement changes, track progress, and maintain accessibility compliance over time."
  }
];

const accessibilityResults = [
  { value: '100%', label: 'WCAG Compliance', sub: 'WCAG 2.1 AA compliance for a Fortune 500 company\'s website' },
  { value: 'User', label: 'Improved Engagement', sub: 'improved user engagement with keyboard navigation and screen reader support' },
  { value: 'Legal', label: 'Legal Protection', sub: 'legal protection and reduced risk with ADA and Section 508 compliance' },
];

const AccessibilityAuditsPage = () => {
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
              Accessibility Audits
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Ensure Your Digital Products Are Accessible to All Users
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-24)] opacity-90 max-w-3xl mx-auto font-sans">
              Accessibility audits are critical evaluations to assess how well digital products — like websites or mobile apps — accommodate the needs of individuals with disabilities, ensuring compliance with official standards.
            </p>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we help organizations identify and fix accessibility barriers, so that all users — including those with disabilities — can navigate, interact, and engage with your digital content seamlessly.
            </p>
            <p className="text-yellow-400 font-medium max-w-3xl mx-auto font-sans">
              Make your digital presence accessible, compliant, and inclusive — for all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get Accessibility Audit
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* What Is an Accessibility Audit? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is an Accessibility Audit?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              A Comprehensive Evaluation of Your Digital Accessibility
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              An accessibility audit is a comprehensive evaluation of how accessible your digital products and services are. It typically focuses on websites and mobile apps used by customers, but a thorough audit may also include internal-facing systems like intranets.
            </p>
            <p className="text-gray-400 font-sans">
              These audits are essential for brands to adhere to legal standards such as the Americans with Disabilities Act (ADA) and Section 508. They ensure that your digital content is usable, compliant, and accessible to all users, including those with disabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Accessibility Audits Matter */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Accessibility Audits Matter</h3>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Accessibility audits are essential for ensuring your digital products are inclusive, compliant, and user-friendly for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-32)]">
            {whyChooseAccessibility.slice(0, 3).map((item, i) => (
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

      {/* How We Conduct Accessibility Audits */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">How We Conduct Accessibility Audits</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {accessibilityProcess.map((step, idx) => (
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

      {/* When to Conduct an Accessibility Audit */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">When to Conduct an Accessibility Audit</h3>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] text-gray-400 font-sans">
              Timing your accessibility audits correctly can save time, effort, and resources while ensuring optimal user experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white font-sans">Before a Redesign</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 font-sans">
                  It's much less labor-intensive to prevent accessibility issues than to fix them after launch.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white font-sans">New Product Launch</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 font-sans">
                  Ensure your digital experience is accessible from the start.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white font-sans">Ongoing Compliance</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 font-sans">
                  Keep your digital products up to date with evolving standards.
                </CardContent>
              </Card>
            </div>
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
            {accessibilityResults.map((r, i) => (
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

export default AccessibilityAuditsPage;
