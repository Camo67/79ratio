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

const whyChooseUXOptimization = [
  {
    title: "Seamless User Interactions",
    description: "We optimize the flow, navigation, and functionality of your digital products to ensure that users can complete tasks easily, quickly, and without frustration. Our goal is to reduce friction and improve user satisfaction.",
    icon: <MousePointerClick className="w-6 h-6" />,
  },
  {
    title: "Improved Engagement and Conversions",
    description: "We help you increase user engagement, reduce bounce rates, and improve conversion rates by optimizing page layouts, call-to-action placement, and user pathways. Our solutions are built to drive meaningful interactions and measurable results.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Data-Driven Insights",
    description: "We use user behavior analytics, heatmaps, and A/B testing to identify pain points, test new features, and refine the user journey. Our insights are based on real user data to ensure every change is impactful and effective.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Mobile and Cross-Platform Optimization",
    description: "We ensure your digital products are optimized for all devices and platforms, including mobile, desktop, and tablet users. Our solutions help you deliver consistent, high-quality experiences across all touchpoints.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Accessibility and Inclusivity",
    description: "We ensure that your digital products are accessible to all users, including those with disabilities. Our optimization includes keyboard navigation, screen reader compatibility, and color contrast improvements to create inclusive and user-friendly experiences.",
    icon: <Accessibility className="w-6 h-6" />,
  },
  {
    title: "Future-Ready and Scalable",
    description: "Our optimization strategies are designed to grow with your business. Whether you're launching a new product, updating an existing one, or expanding into new markets, our solutions ensure long-term usability and adaptability.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Expert Support & Management",
    description: "Our team of UX researchers, designers, and optimization specialists provides ongoing support, testing, and refinement. We help you analyze user behavior, test new features, and continuously improve your digital experience.",
    icon: <Users className="w-6 h-6" />,
  },
];

const uxOptimizationProcess = [
  {
    step: "1",
    title: "Research & Analysis",
    description: "We analyze user behavior, engagement metrics, and feedback to identify pain points and areas for improvement."
  },
  {
    step: "2", 
    title: "Testing & Prototyping",
    description: "We conduct A/B testing, usability testing, and prototype development to explore new features and refine the user journey."
  },
  {
    step: "3",
    title: "Optimization & Refinement",
    description: "We implement changes to improve usability, engagement, and performance based on data-driven insights and user feedback."
  },
  {
    step: "4",
    title: "Monitoring & Support",
    description: "We monitor user behavior and performance metrics over time, providing ongoing support and optimization to ensure long-term success."
  }
];

const uxOptimizationResults = [
  { value: '40%', label: 'Increase in Engagement', sub: 'increase in user engagement and reduced bounce rates for a mid-sized e-commerce platform' },
  { value: 'Improved', label: 'Conversion Rates', sub: 'improved conversion rates through optimized checkout flows and call-to-action placement' },
  { value: 'Higher', label: 'User Satisfaction', sub: 'higher user satisfaction with intuitive navigation and seamless interactions' },
];

const UserExperienceOptimizationPage = () => {
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
              User Experience Optimization
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Optimize Your Digital Experience for Maximum Impact
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              We help you create seamless, intuitive, and engaging digital experiences that drive user satisfaction and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get a UX Optimization Consultation
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our User Experience Optimization Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our User Experience Optimization Services</h3>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our optimization services are built to support your business at every stage — from initial analysis to ongoing refinement. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-[var(--space-32)]">
            {whyChooseUXOptimization.map((item, i) => (
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

      {/* Our User Experience Optimization Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our User Experience Optimization Process</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {uxOptimizationProcess.map((step, idx) => (
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

      {/* User Experience Optimization Results */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Real Results</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {uxOptimizationResults.map((r, i) => (
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

export default UserExperienceOptimizationPage;
