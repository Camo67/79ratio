import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
import { 
  Server, 
  Cloud, 
  Network, 
  Database,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Users,
  Target,
  Palette,
  Heart,
  Monitor,
} from 'lucide-react';
const baseDigital = import.meta.env.BASE_URL || '/';
const digitalSystemsBg = encodeURI(`${baseDigital}generated-image (2).png`);


const dsWhyChoose = [
  {
    title: 'Scalable & Secure Cloud Platforms',
    description:
      'We deploy your infrastructure on AWS, Microsoft Azure, and Google Cloud, with hybrid and multi-cloud options to suit your needs. Our solutions include auto-scaling capabilities, ensuring your systems can handle traffic spikes without downtime.',
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: 'Cost-Efficient and Future-Ready',
    description:
      'We help you reduce infrastructure costs by up to 50% through optimized resource allocation, automated scaling, and cloud-native architecture. Our infrastructure is built to be future-proof, allowing your business to grow without the burden of outdated systems.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: 'High Availability and Uptime',
    description:
      'With 99.9% uptime guarantees, our cloud infrastructure ensures your applications and data are always available — no matter where your users are. We implement redundancy, load balancing, and failover systems to maintain continuous performance.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Expert Support & Management',
    description:
      'Our team of cloud engineers and architects provides 24/7 monitoring, maintenance, and optimization. We help you deploy, manage, and scale your cloud environment — so you can focus on what matters most: your business.',
    icon: <Users className="w-6 h-6" />,
  },
];

const dsProcess = [
  { step: '1', title: 'Assessment', description: 'We analyze your current infrastructure and business goals to determine the best cloud strategy.' },
  { step: '2', title: 'Design & Deployment', description: 'We design and deploy your cloud environment using best practices and the latest technologies.' },
  { step: '3', title: 'Optimization', description: 'We continuously optimize your cloud usage to reduce costs and improve performance.' },
  { step: '4', title: 'Monitoring & Support', description: 'We monitor your environment 24/7 and provide ongoing support to ensure stability and reliability.' },
];

const dsResults = [
  { value: '60%', label: 'Cost Reduction', sub: 'in infrastructure costs' },
  { value: '99.9%', label: 'Uptime', sub: 'achieved post migration' },
  { value: '100%', label: 'Compliance', sub: 'with industry standards' },
];

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

// Map service titles to routes
const serviceLinks: Record<string, string> = {
  'Cloud Infrastructure': '/solutions/cloud-infrastructure',
  'Virtualization Solutions': '/solutions/virtualization',
  'Network Architecture': '/solutions/network-architecture',
  'System Integration': '/solutions/system-integration',
}

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
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl mx-auto font-sans">
              Unleash precision and power with our digital system solutions. Transform your operations with robust, programmable, and highly accurate technology that ensures seamless integration and future-proof scalability.

            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <ScheduleCallModal>
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                  Get Infrastructure Assessment
                </Button>
              </ScheduleCallModal>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Virtualization Solutions */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our Virtualization Solutions</h3>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our virtualization services are built to maximize the value of your existing infrastructure while reducing costs and improving performance. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Server className="w-6 h-6" />
                <h4 className="text-white font-sans">Enterprise-Grade Virtualization</h4>
              </div>
              <p className="text-gray-400 font-sans">We implement VMware vSphere, Microsoft Hyper-V, and container orchestration platforms to maximize hardware utilization and reduce the need for physical servers. Our solutions support both traditional virtual machines and modern container-based environments.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <TrendingUp className="w-6 h-6" />
                <h4 className="text-white font-sans">Cost Savings and Efficiency</h4>
              </div>
              <p className="text-gray-400 font-sans">Our virtualization strategies help you save up to 70% on hardware costs by consolidating workloads and reducing energy consumption. We also help you improve disaster recovery capabilities and reduce downtime with automated backups and failover systems.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Shield className="w-6 h-6" />
                <h4 className="text-white font-sans">Enhanced Security and Compliance</h4>
              </div>
              <p className="text-gray-400 font-sans">We implement secure virtualization environments with role-based access controls, encryption, and network segmentation. Our solutions are designed to meet compliance standards like HIPAA, GDPR, and SOC 2, ensuring your data is protected and your operations remain compliant.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Users className="w-6 h-6" />
                <h4 className="text-white font-sans">Expert Support & Management</h4>
              </div>
              <p className="text-gray-400 font-sans">Our team of virtualization experts provides 24/7 monitoring, maintenance, and optimization. We help you deploy, manage, and scale your virtualization environment — so you can focus on what matters most: your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtualization Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Virtualization Implementation Process</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {['Assessment', 'Design & Deployment', 'Optimization', 'Monitoring & Support'].map((title, idx) => (
              <div key={title} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                  {idx + 1}
                </div>
                <h4 className="text-white font-sans mb-[var(--space-12)]">{title}</h4>
                <p className="text-gray-400 font-sans">
                  {idx === 0 && 'We analyze your current infrastructure and business goals to determine the best virtualization strategy.'}
                  {idx === 1 && 'We design and deploy your virtualization environment using best practices and the latest technologies.'}
                  {idx === 2 && 'We continuously optimize your virtualization usage to reduce costs and improve performance.'}
                  {idx === 3 && 'We monitor your environment 24/7 and provide ongoing support to ensure stability and reliability.'}
                </p>
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
            <div className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
              <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">70%</div>
              <div className="text-white font-sans mb-[var(--space-8)]">Reduction in Hardware Costs</div>
              <p className="text-gray-400 font-sans">for a mid-sized manufacturing company.</p>
            </div>
            <div className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
              <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">DR</div>
              <div className="text-white font-sans mb-[var(--space-8)]">Improved Disaster Recovery</div>
              <p className="text-gray-400 font-sans">Automated failover and backup systems reduced downtime.</p>
            </div>
            <div className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
              <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">Security</div>
              <div className="text-white font-sans mb-[var(--space-8)]">Enhanced Security & Compliance</div>
              <p className="text-gray-400 font-sans">Role-based access and encryption across virtual environments.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Cloud Infrastructure (under Digital Systems) */}
      <section id="cloud-infrastructure" className="py-[var(--space-96)] px-[var(--space-24)] bg-black text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="mb-[var(--space-16)] font-sans">Cloud Infrastructure That Grows With You</h2>
          <p className="text-[var(--text-body-large)] text-white/80 mb-[var(--space-16)] font-sans">
            Scalable, secure, and future-ready cloud solutions.
          </p>
          <p className="text-gray-300 mb-[var(--space-16)] font-sans">
            At 79Ratio, we help businesses of all sizes harness the power of the cloud — with secure infrastructure, instant scalability, and cost efficiency. Whether you're just starting out or managing a growing enterprise, our cloud solutions are designed to scale with your needs, reduce costs, and keep your operations running smoothly.
          </p>
          <p className="text-white/80 mb-[var(--space-48)] font-sans">
            Deploy on AWS, Azure, and Google Cloud — with hybrid and auto-scaling capabilities.
          </p>
        </div>

        {/* Why Choose */}
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {dsWhyChoose.map((item, i) => (
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

        {/* Process */}
        <div className="container mx-auto mt-[var(--space-96)]">
          <h3 className="text-center mb-[var(--space-24)] font-sans">Our Cloud Infrastructure Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {dsProcess.map((step, idx) => (
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

        {/* Real Results */}
        <div className="container mx-auto mt-[var(--space-96)]">
          <h3 className="text-center mb-[var(--space-24)] font-sans">Real Results</h3>
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {dsResults.map((r, i) => (
              <div key={i} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">{r.value}</div>
                <div className="text-white font-sans mb-[var(--space-8)]">{r.label}</div>
                <p className="text-gray-400 font-sans">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Digital Systems Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive digital infrastructure solutions that provide the foundation for your business operations and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-black">
                <CardHeader>
                  <div className="flex items-center gap-[var(--space-16)] mb-[var(--space-16)]">
                    <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                      {service.icon}
                    </div>
                    <CardTitle className="group-hover:text-yellow-400 transition-colors text-white font-sans">{service.title}</CardTitle>
                  </div>
                  <p className="text-white font-sans">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-[var(--space-24)]">
                    <h4 className="font-medium mb-[var(--space-12)] text-white font-sans">Key Features:</h4>
                    <ul className="space-y-[var(--space-8)]">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-[var(--text-body)] text-white font-sans">
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
                  
                  <Link to={serviceLinks[service.title] || '#'}>
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

      {/* Process/Stats/CTA sections removed to mirror simple category layout (cards only) */}


      <FinalCTA />
      <Footer />
    </div>
  );
}
