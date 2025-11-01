import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Server, 
  Cloud, 
  Network, 
  Database,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
const baseDigital = import.meta.env.BASE_URL || '/';
const digitalSystemsBg = encodeURI(`${baseDigital}generated-image (2).png`);

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions that grow with your business needs.",
    icon: <Cloud className="w-6 h-6" />,
    features: [
      "AWS, Azure, Google Cloud deployment",
      "Hybrid cloud architectures", 
      "Auto-scaling configurations",
      "Cloud cost optimization"
    ],
    benefits: ["99.9% uptime", "50% cost reduction", "Instant scalability"]
  },
  {
    title: "Virtualization Solutions",
    description: "Maximize hardware efficiency with enterprise-grade virtualization platforms.",
    icon: <Server className="w-6 h-6" />,
    features: [
      "VMware vSphere implementation",
      "Hyper-V environments",
      "Container orchestration",
      "Virtual desktop infrastructure"
    ],
    benefits: ["70% hardware savings", "Improved disaster recovery", "Enhanced security"]
  },
  {
    title: "Network Architecture",
    description: "Robust network design and implementation for optimal performance and security.",
    icon: <Network className="w-6 h-6" />,
    features: [
      "SD-WAN implementation",
      "Network security design",
      "Bandwidth optimization",
      "Redundancy planning"
    ],
    benefits: ["Enhanced performance", "Reduced latency", "Improved security"]
  },
  {
    title: "System Integration",
    description: "Seamless integration of disparate systems for unified business operations.",
    icon: <Database className="w-6 h-6" />,
    features: [
      "API development & integration",
      "Legacy system modernization",
      "Data synchronization",
      "Workflow automation"
    ],
    benefits: ["Streamlined operations", "Data consistency", "Reduced manual work"]
  }
];

const processSteps = [
  {
    step: "1",
    title: "Assessment & Planning",
    description: "Comprehensive evaluation of your current infrastructure and business requirements."
  },
  {
    step: "2", 
    title: "Design & Architecture",
    description: "Custom solution design tailored to your specific needs and growth objectives."
  },
  {
    step: "3",
    title: "Implementation",
    description: "Phased deployment with minimal disruption to your business operations."
  },
  {
    step: "4",
    title: "Testing & Optimization",
    description: "Thorough testing and fine-tuning to ensure optimal performance and reliability."
  },
  {
    step: "5",
    title: "Support & Maintenance",
    description: "Ongoing monitoring, maintenance, and support to keep your systems running smoothly."
  }
];

export default function DigitalSystemsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${digitalSystemsBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Digital Infrastructure Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Digital Systems That Power Your Success
            </h1>
            <p className="text-[length:var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              Unleash precision and power with our digital system solutions. Transform your operations with robust, programmable, and highly accurate technology that ensures seamless integration and future-proof scalability.

            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Get Infrastructure Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Digital Systems Services</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive digital infrastructure solutions that provide the foundation for your business operations and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-[var(--space-32)]">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-gray-900">
                <CardHeader>
                  <div className="flex items-center gap-[var(--space-16)] mb-[var(--space-16)]">
                    <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                      {service.icon}
                    </div>
                    <CardTitle className="group-hover:text-yellow-400 transition-colors text-white font-sans">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-400 font-sans">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-[var(--space-24)]">
                    <h4 className="font-medium mb-[var(--space-12)] text-white font-sans">Key Features:</h4>
                    <ul className="space-y-[var(--space-8)]">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-[length:var(--text-body)] text-gray-400 font-sans">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mr-[var(--space-8)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-[var(--space-24)]">
                    <h4 className="font-medium mb-[var(--space-12)] text-white font-sans">Benefits:</h4>
                    <div className="flex flex-wrap gap-[var(--space-8)]">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="secondary" className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all duration-300 border-gray-700 text-white font-sans">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-[var(--space-8)] group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Implementation Process</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              A structured approach that ensures successful digital system implementation with minimal business disruption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-[var(--space-24)]">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-yellow-300 transition-colors font-sans">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 -translate-x-8"></div>
                  )}
                </div>
                <h4 className="mb-[var(--space-12)] text-white group-hover:text-yellow-400 transition-colors font-sans">{step.title}</h4>
                <p className="text-gray-400 text-[length:var(--text-body)] font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-r from-accent-primary to-secondary-blue text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-[var(--space-48)] text-center">
            <div>
              <div className="flex justify-center mb-[var(--space-16)]">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">99.9%</div>
              <p className="text-white/80 font-sans">System Uptime Guaranteed</p>
            </div>
            <div>
              <div className="flex justify-center mb-[var(--space-16)]">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">24/7</div>
              <p className="text-white/80 font-sans">Security Monitoring</p>
            </div>
            <div>
              <div className="flex justify-center mb-[var(--space-16)]">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">50%</div>
              <p className="text-white/80 font-sans">Average Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Ready to Modernize Your Digital Infrastructure?</h2>
          <p className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Let our experts assess your current systems and design a digital infrastructure that supports your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
              Schedule Infrastructure Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-sans">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
