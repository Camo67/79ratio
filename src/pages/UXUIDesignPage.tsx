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

const whyChooseDesign = [
  {
    title: "User-Centered Design",
    description: "We design digital products with a human-centered approach, using user research, prototyping, and usability testing to ensure that every interaction is intuitive, engaging, and effective. Our designs are built to solve real user problems and improve satisfaction.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Improved Engagement and Conversions",
    description: "Our designs are optimized to increase user engagement, reduce bounce rates, and improve conversion rates. By focusing on clear navigation, visual hierarchy, and seamless interactions, we help you create digital experiences that drive results.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Accessibility and Inclusivity",
    description: "We ensure that our designs are WCAG 2.1 AA compliant, with screen reader compatibility, keyboard navigation, and color contrast optimization. Our solutions are designed to reach a wider audience and comply with legal standards.",
    icon: <Accessibility className="w-6 h-6" />,
  },
  {
    title: "Future-Ready and Scalable",
    description: "Our UX/UI designs are built to grow with your business. Whether you're launching a new product or updating an existing one, our solutions ensure smooth scalability and long-term usability.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Expert Support & Management",
    description: "Our team of UX/UI designers and researchers provides continuous support, testing, and optimization. We help you design, prototype, and refine your digital products — so you can focus on what matters most: your users and your business.",
    icon: <MousePointerClick className="w-6 h-6" />,
  },
];

const designProcess = [
  {
    step: "1",
    title: "Research & Discovery",
    description: "We conduct user research, interviews, and usability testing to understand your audience and their needs."
  },
  {
    step: "2", 
    title: "Design & Prototyping",
    description: "We create wireframes, mockups, and interactive prototypes to visualize and test your design concepts."
  },
  {
    step: "3",
    title: "Testing & Refinement",
    description: "We conduct usability testing and A/B testing to refine the design and ensure it meets user expectations."
  },
  {
    step: "4",
    title: "Development & Handoff",
    description: "We provide design assets and documentation to ensure a smooth handoff to developers and maintain design consistency."
  }
];

const designResults = [
  { value: '40%', label: 'Increase in Engagement', sub: 'increase in engagement and reduced bounce rates for a mid-sized e-commerce platform' },
  { value: 'WCAG', label: 'Improved Accessibility', sub: 'improved accessibility with WCAG 2.1 AA compliance and keyboard navigation support' },
  { value: 'Higher', label: 'Conversion Rates', sub: 'higher conversion rates through intuitive navigation and visual hierarchy' },
];

const UXUIDesignPage = () => {
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
              UX/UI Design
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              User-Centered Design for Engaging Digital Experiences
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              We create intuitive, engaging, and effective digital products that solve real user problems and drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get a Design Consultation
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our UX/UI Design Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Why Choose Our UX/UI Design Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our UX/UI design solutions are built to support your business at every stage — from initial planning to ongoing optimization. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {whyChooseDesign.map((item, i) => (
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

      {/* Our UX/UI Design Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Our UX/UI Design Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {designProcess.map((step, idx) => (
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
            {designResults.map((r, i) => (
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

export default UXUIDesignPage;
