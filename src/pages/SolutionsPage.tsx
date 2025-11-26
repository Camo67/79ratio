import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Shield, 
  Palette, 
  CheckCircle, 
  Server, 
  Zap,
  ArrowRight,
  Users,
  TrendingUp,
  Lock
} from 'lucide-react';

const baseSolutions = import.meta.env.BASE_URL || '/';
const solutionsBg = encodeURI(`${baseSolutions}Image_fx (29).jpg`);

interface SolutionCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
  color: string;
}

const solutionCategories: SolutionCategory[] = [
  {
    title: "Digital Systems",
    description: "Comprehensive IT infrastructure and system solutions that power your business operations with reliability and efficiency.",
    icon: <Server className="w-8 h-8" />,
    features: [
      "Cloud Infrastructure Setup",
      "Virtualization Solutions", 
      "System Integration",
      "Network Architecture"
    ],
    link: "/solutions/digital-systems",
    color: "from-accent-primary to-secondary-blue"
  },
  {
    title: "Design & Accessibility",
    description: "User-centered design and accessibility solutions that ensure your digital presence is inclusive and engaging.",
    icon: <Palette className="w-8 h-8" />,
    features: [
      "UX/UI Design",
      "Accessibility Audits",
      "Branding & Visual Identity",
      "User Experience Optimization"
    ],
    link: "/solutions/design-accessibility",
    color: "from-secondary-blue to-light-blue"
  },
  {
    title: "Compliance & Optimization",
    description: "Streamline operations and ensure regulatory compliance with our comprehensive business optimization solutions.",
    icon: <CheckCircle className="w-8 h-8" />,
    features: [
      "Business Process Automation",
      "Compliance Management",
      "Performance Analytics",
      "Workflow Optimization"
    ],
    link: "/solutions/compliance",
    color: "from-accent-primary to-accent-secondary"
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions to protect your business from evolving cyber threats and ensure data integrity.",
    icon: <Shield className="w-8 h-8" />,
    features: [
      "Threat Detection & Response",
      "Security Assessments",
      "Data Protection",
      "Incident Response Planning"
    ],
    link: "/solutions/cybersecurity",
    color: "from-secondary-blue to-light-blue"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services that enable your business to grow and adapt in the digital age.",
    icon: <Cloud className="w-8 h-8" />,
    features: [
      "Cloud Migration",
      "Managed Hosting",
      "Disaster Recovery",
      "Cloud Optimization"
    ],
    link: "/solutions/cloud",
    color: "from-accent-secondary to-accent-primary"
  }
];

const statsData = [
  { icon: <Users className="w-6 h-6" />, value: "500+", label: "Clients Served" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "99.9%", label: "Uptime Guaranteed" },
  { icon: <Lock className="w-6 h-6" />, value: "24/7", label: "Security Monitoring" },
  { icon: <Zap className="w-6 h-6" />, value: "48hr", label: "Response Time" },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${solutionsBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="mb-[var(--space-24)] max-w-4xl mx-auto text-white font-sans">
            Comprehensive IT Solutions for Modern Business
          </h1>
          <p className="text-[var(--text-body-large)] mb-[var(--space-48)] max-w-3xl mx-auto opacity-90 font-sans">
            Transform your business with our integrated suite of technology solutions designed to enhance efficiency, security, and growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Link to="/get-started">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/get-started">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[var(--space-64)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-32)]">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-[var(--space-16)] text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-[var(--text-h3)] font-bold text-white mb-[var(--space-8)] font-sans">
                  {stat.value}
                </div>
                <div className="text-[var(--text-body)] text-gray-400 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Solution Categories</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Choose from our comprehensive range of technology solutions, each designed to address specific business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-32)]">
            {solutionCategories.map((category, index) => {
              const isCentered = category.title === 'Cybersecurity' || category.title === 'Cloud Solutions'
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-gray-900">
                  <CardContent className={`p-[var(--space-32)] ${isCentered ? 'text-center' : ''}`}>
                    <div className={`inline-flex p-[var(--space-16)] rounded-lg bg-gradient-to-r ${category.color} text-white mb-[var(--space-24)] ${isCentered ? 'mx-auto' : ''}`}>
                      {category.icon}
                    </div>
                    
                    <h3 className="mb-[var(--space-16)] group-hover:text-yellow-400 transition-colors text-white font-sans">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-[var(--space-24)] leading-relaxed font-sans mx-auto">
                      {category.description}
                    </p>
                    
                    <ul className={`space-y-[var(--space-8)] mb-[var(--space-32)] ${isCentered ? 'mx-auto' : ''}`}>
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center text-[var(--text-body)] text-gray-400 font-sans ${isCentered ? 'justify-center' : ''}`}>
                          <CheckCircle className="w-4 h-4 text-yellow-400 mr-[var(--space-8)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={category.link}>
                      <Button variant="outline" className={`${isCentered ? 'w-auto mx-auto' : 'w-full'} group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300 border-gray-700 text-white font-sans`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-[var(--space-8)] group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-r from-accent-primary to-accent-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[var(--text-body-large)] mb-[var(--space-48)] max-w-2xl mx-auto opacity-90 font-sans">
            Let our experts help you choose the right combination of solutions to achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Link to="/get-started">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/get-started">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
