import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
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

const baseDesign = import.meta.env.BASE_URL || '/';
const designAccessibilityBg = encodeURI(`${baseDesign}Image_fx (27).jpg`);

const designCategories = [
  {
    title: "UX/UI Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: <Palette className="w-6 h-6" />,
    link: "/solutions/ux-ui-design"
  },
  {
    title: "Accessibility Audits",
    description: "Comprehensive accessibility assessments to ensure your digital products are inclusive for all users.",
    icon: <Eye className="w-6 h-6" />,
    link: "/solutions/accessibility-audits"
  },
  {
    title: "Branding & Visual Identity",
    description: "Cohesive brand identity that communicates your values and connects with your audience.",
    icon: <Heart className="w-6 h-6" />,
    link: "/solutions/branding"
  },
  {
    title: "User Experience Optimization",
    description: "Optimize your digital products for maximum impact and user satisfaction.",
    icon: <MousePointerClick className="w-6 h-6" />,
    link: "/solutions/user-experience-optimization"
  }
];

const DesignAccessibilityPage = () => {
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
              Design & Accessibility
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Inclusive Digital Experiences for All Users
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              We create user-centered designs and ensure accessibility to deliver engaging and inclusive digital products.
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

      {/* Design Categories */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Design & Accessibility Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Explore our comprehensive services designed to create intuitive, engaging, and accessible digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {designCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-gray-900">
                <CardHeader>
                  <div className="flex items-center gap-[var(--space-16)] mb-[var(--space-16)]">
                    <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                      {category.icon}
                    </div>
                    <CardTitle className="group-hover:text-yellow-400 transition-colors text-white font-sans">{category.title}</CardTitle>
                  </div>
                  <p className="text-gray-400 font-sans">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <Link to={category.link}>
                    <Button variant="outline" className="w-full group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300 border-gray-700 text-white font-sans">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-[var(--space-8)] group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
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

export default DesignAccessibilityPage;


