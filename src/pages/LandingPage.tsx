import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Shield, 
  Cloud, 
  Zap, 
  Headphones, 
  Brain, 
  CheckCircle,
  Server,
  Lock,
  Database,
  Cpu,
  Users,
  TrendingUp
} from 'lucide-react';

const LandingPage = () => {
  const services = [
    {
      title: "Managed Systems & Support",
      description: "Keeping your operations running smoothly.",
      icon: <Server className="w-6 h-6" />,
      features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support"]
    },
    {
      title: "Cyber Protection",
      description: "Guarding your business from digital threats.",
      icon: <Lock className="w-6 h-6" />,
      features: ["Threat Detection", "Data Encryption", "Compliance Management"]
    },
    {
      title: "Cloud & Data Solutions",
      description: "Access your information anytime, anywhere.",
      icon: <Cloud className="w-6 h-6" />,
      features: ["Cloud Migration", "Disaster Recovery", "Auto-Backup Systems"]
    },
    {
      title: "AI Optimization",
      description: "Smarter systems that work for you.",
      icon: <Brain className="w-6 h-6" />,
      features: ["Predictive Support", "Process Automation", "Intelligent Analytics"]
    },
    {
      title: "On-Site & Remote Assistance",
      description: "Support when and where you need it.",
      icon: <Headphones className="w-6 h-6" />,
      features: ["Local Presence", "Instant Response", "Multi-Channel Support"]
    },
    {
      title: "Business Tech Strategy",
      description: "Mapping growth with technology that works.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Digital Strategy", "Growth Planning", "Tech Roadmaps"]
    }
  ];

  const whyChooseUs = [
    {
      title: "One partner, zero confusion",
      description: "No finger-pointing between vendors",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Transparent pricing",
      description: "Clear, flat-rate simplicity",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Local + remote support",
      description: "Here when you need us, everywhere you are",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Scalable solutions for growth",
      description: "Technology that grows with your business",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative text-white py-[--space-128] px-[--space-24] bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-(--space-24) bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              RATIO 79
            </Badge>
            <h1 className="mb-(--space-24) text-white font-sans">
              Everything Tech. One Partner.
            </h1>
            <p className="text-(--text-body-large) mb-(--space-48) text-gray-300 max-w-3xl mx-auto font-sans">
              RATIO 79 manages your systems, data, and tools — so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-(--space-16) justify-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Book Your Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-(--space-96) px-(--space-24) bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-(--space-64)">
            <h2 className="mb-(--space-24) text-white font-sans">Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-(--space-32)">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-black">
                <CardHeader>
                  <div className="flex items-center gap-(--space-16) mb-(--space-16)">
                    <div className="p-(--space-12) bg-yellow-400/10 rounded-lg text-yellow-400">
                      {service.icon}
                    </div>
                    <CardTitle className="group-hover:text-yellow-400 transition-colors text-white font-sans">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-400 font-sans">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-(--space-8)">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-(--text-body) text-white font-sans">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-(--space-8) shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-(--space-96) px-(--space-24) bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-(--space-64)">
            <h2 className="mb-(--space-24) text-white font-sans">Why Choose RATIO 79</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-(--space-32)">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="p-(--space-32) bg-black border border-gray-800 rounded-xl text-center hover:border-yellow-400/30 transition-colors">
                <div className="flex justify-center mb-(--space-16) text-yellow-400">
                  {item.icon}
                </div>
                <h3 className="mb-[var(--space-12)] text-white font-sans">{item.title}</h3>
                <p className="text-gray-400 font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Simplify your technology.</h2>
          <p className="text-[var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Schedule your free assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
              Book Free Assessment
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
