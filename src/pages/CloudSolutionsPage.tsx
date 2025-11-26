import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Server, 
  Database, 
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Settings,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  BarChart3
} from 'lucide-react';
const baseCloud = import.meta.env.BASE_URL || '/';
const cloudSolutionsBg = encodeURI(`${baseCloud}cloud c_computing.jpg`);

// Deep-dive sections moved to /solutions/cloud-infrastructure

const services = [
  {
    title: "Cloud Migration",
    description: "Seamless migration of your applications and data to the cloud with minimal downtime.",
    icon: <Cloud className="w-6 h-6" />,
    features: [
      "Migration strategy & planning",
      "Application modernization", 
      "Data migration & validation",
      "Post-migration optimization"
    ],
    benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security"]
  },
  {
    title: "Managed Cloud Hosting",
    description: "Fully managed cloud infrastructure with 24/7 monitoring and support.",
    icon: <Server className="w-6 h-6" />,
    features: [
      "Multi-cloud management",
      "Auto-scaling configuration",
      "Performance monitoring",
      "Security management"
    ],
    benefits: ["99.9% uptime", "24/7 support", "Cost optimization"]
  },
  {
    title: "Disaster Recovery",
    description: "Comprehensive backup and disaster recovery solutions to ensure business continuity.",
    icon: <Shield className="w-6 h-6" />,
    features: [
      "Automated backup scheduling",
      "Cross-region replication",
      "Recovery time objectives (RTO)",
      "Disaster recovery testing"
    ],
    benefits: ["Business continuity", "Data protection", "Rapid recovery"]
  },
  {
    title: "Cloud Optimization",
    description: "Continuous monitoring and optimization to maximize performance and minimize costs.",
    icon: <TrendingUp className="w-6 h-6" />,
    features: [
      "Cost analysis & optimization",
      "Performance tuning",
      "Resource right-sizing",
      "Reserved instance management"
    ],
    benefits: ["Cost savings", "Better performance", "Resource efficiency"]
  }
];

const cloudPlatforms = [
  {
    name: "Amazon Web Services",
    description: "Comprehensive cloud platform with 200+ services",
    icon: <Cloud className="w-6 h-6" />,
    specialties: ["EC2", "S3", "RDS", "Lambda"]
  },
  {
    name: "Microsoft Azure",
    description: "Enterprise-grade cloud platform for hybrid scenarios",
    icon: <Server className="w-6 h-6" />,
    specialties: ["Virtual Machines", "Storage", "SQL Database", "Functions"]
  },
  {
    name: "Google Cloud Platform",
    description: "AI-first cloud platform with advanced analytics",
    icon: <Database className="w-6 h-6" />,
    specialties: ["Compute Engine", "BigQuery", "AI/ML", "Kubernetes"]
  }
];

const migrationProcess = [
  {
    step: "1",
    title: "Assessment",
    description: "Comprehensive analysis of your current infrastructure and applications."
  },
  {
    step: "2", 
    title: "Strategy",
    description: "Develop a tailored migration strategy and roadmap."
  },
  {
    step: "3",
    title: "Migration",
    description: "Execute the migration with minimal business disruption."
  },
  {
    step: "4",
    title: "Optimization",
    description: "Fine-tune performance and optimize costs post-migration."
  },
  {
    step: "5",
    title: "Management",
    description: "Ongoing monitoring, support, and optimization."
  }
];

const cloudBenefits = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Cost Reduction",
    description: "Reduce infrastructure costs by up to 50% with cloud optimization.",
    metric: "50% savings"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Scalability",
    description: "Instantly scale resources up or down based on demand.",
    metric: "Instant scaling"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Faster Deployment",
    description: "Deploy new applications and services in minutes, not months.",
    metric: "10x faster"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description: "Access to global infrastructure and content delivery networks.",
    metric: "Worldwide access"
  }
];

const whyChooseCloud = [
  {
    title: "Scalable & Secure Cloud Platforms",
    description: "We deploy your infrastructure on AWS, Microsoft Azure, and Google Cloud, with hybrid and multi-cloud options to suit your needs. Our solutions include auto-scaling capabilities, ensuring your systems can handle traffic spikes without downtime.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Cost-Efficient and Future-Ready",
    description: "We help you reduce infrastructure costs by up to 50% through optimized resource allocation, automated scaling, and cloud-native architecture. Our infrastructure is built to be future-proof, allowing your business to grow without the burden of outdated systems.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "High Availability and Uptime",
    description: "With 99.9% uptime guarantees, our cloud infrastructure ensures your applications and data are always available — no matter where your users are. We implement redundancy, load balancing, and failover systems to maintain continuous performance.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Expert Support & Management",
    description: "Our team of cloud engineers and architects provides 24/7 monitoring, maintenance, and optimization. We help you deploy, manage, and scale your cloud environment — so you can focus on what matters most: your business.",
    icon: <Users className="w-6 h-6" />,
  },
];

const cloudProcess = [
  { step: '1', title: 'Assessment', description: 'We analyze your current infrastructure and business goals to determine the best cloud strategy.' },
  { step: '2', title: 'Design & Deployment', description: 'We design and deploy your cloud environment using best practices and the latest technologies.' },
  { step: '3', title: 'Optimization', description: 'We continuously optimize your cloud usage to reduce costs and improve performance.' },
  { step: '4', title: 'Monitoring & Support', description: 'We monitor your environment 24/7 and provide ongoing support to ensure stability and reliability.' },
];

const cloudResults = [
  { value: '60%', label: 'Cost Reduction', sub: 'in infrastructure costs for a Fortune 500 company' },
  { value: '99.9%', label: 'Uptime', sub: 'achieved in just six months after migration' },
  { value: '100%', label: 'Compliance', sub: 'with industry standards and regulations' },
];

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-background-light">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\"${cloudSolutionsBg}\")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Cloud Infrastructure
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Cloud Infrastructure That Grows With You
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] opacity-90 max-w-3xl mx-auto font-sans">
              Scalable, secure, and future-ready cloud solutions.
            </p>
            <p className="text-gray-300 mb-[var(--space-16)] font-sans">
              At 79Ratio, we help businesses of all sizes harness the power of the cloud — with secure infrastructure, instant scalability, and cost efficiency. Whether you're just starting out or managing a growing enterprise, our cloud solutions are designed to scale with your needs, reduce costs, and keep your operations running smoothly.
            </p>
            <p className="text-white/80 mb-[var(--space-48)] max-w-3xl mx-auto font-sans">
              Deploy on AWS, Azure, and Google Cloud — with hybrid and auto-scaling capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Start Cloud Migration
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-secondary font-sans">
                Cloud Readiness Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Cloud Infrastructure Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Why Choose Our Cloud Infrastructure Services</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our cloud infrastructure solutions are built to support your business at every stage — from initial deployment to ongoing optimization. Here's how we help you succeed:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {whyChooseCloud.map((item, i) => (
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

      {/* Our Cloud Infrastructure Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-16)] text-white font-sans">Our Cloud Infrastructure Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {cloudProcess.map((step, idx) => (
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
            {cloudResults.map((r, i) => (
              <div key={i} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">{r.value}</div>
                <div className="text-white font-sans mb-[var(--space-8)]">{r.label}</div>
                <p className="text-gray-400 font-sans">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Cloud Platforms We Support</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              We're certified experts in all major cloud platforms, helping you choose the right solution for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            {cloudPlatforms.map((platform, index) => (
              <Card key={index} className="p-[var(--space-32)] hover:shadow-lg transition-shadow glow-gold-subtle bg-gray-900 border-gray-800">
                <div className="flex items-center gap-[var(--space-16)] mb-[var(--space-24)]">
                  <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                    {platform.icon}
                  </div>
                  <h4 className="text-white font-sans">{platform.name}</h4>
                </div>
                <p className="text-gray-400 mb-[var(--space-16)] font-sans">{platform.description}</p>
                <div className="space-y-[var(--space-8)]">
                  <p className="font-medium text-white text-sm font-sans">Specialties:</p>
                  <div className="flex flex-wrap gap-[var(--space-8)]">
                    {platform.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="outline" className="text-xs border-yellow-400/30 text-yellow-400 font-sans">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Cloud Migration Process</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              A proven methodology that ensures successful cloud migration with minimal risk and downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {migrationProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-[var(--space-24)]">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-yellow-300 transition-colors font-sans">
                    {step.step}
                  </div>
                  {index < migrationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 -translate-x-8"></div>
                  )}
                </div>
                <h4 className="mb-[var(--space-12)] text-white group-hover:text-yellow-400 transition-colors font-sans">{step.title}</h4>
                <p className="text-gray-400 text-[var(--text-body)] font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-r from-accent-primary to-accent-secondary text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-[var(--space-48)] items-center">
            <div>
              <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
                Success Story
              </Badge>
              <h2 className="mb-[var(--space-24)] text-white font-sans">Enterprise Achieves 60% Cost Reduction with Cloud Migration</h2>
              <p className="text-white/80 mb-[var(--space-32)] font-sans">
                A Fortune 500 company partnered with us to migrate their entire infrastructure to the cloud, resulting in significant cost savings and improved performance.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-sans">
                Read Success Story
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-[var(--space-24)]">
              <div className="text-center">
                <div className="text-[var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">60%</div>
                <p className="text-white/80 font-sans">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-[var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">3x</div>
                <p className="text-white/80 font-sans">Performance Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-[var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">99.9%</div>
                <p className="text-white/80 font-sans">Uptime Achieved</p>
              </div>
              <div className="text-center">
                <div className="text-[var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">6 Months</div>
                <p className="text-white/80 font-sans">Migration Timeline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Readiness Check */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto text-center p-[var(--space-48)] border-gray-800 bg-gray-900">
            <Cloud className="w-16 h-16 text-yellow-400 mx-auto mb-[var(--space-24)]" />
            <h2 className="mb-[var(--space-24)] text-white font-sans">Is Your Business Ready for the Cloud?</h2>
            <p className="text-[var(--text-body-large)] text-gray-400 mb-[var(--space-32)] max-w-2xl mx-auto font-sans">
              Take our comprehensive cloud readiness assessment to understand your current state and identify opportunities for cloud adoption.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Start Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-sans">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Ready to Move to the Cloud?</h2>
          <p className="text-[var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Let our cloud experts help you design and implement a cloud strategy that drives innovation and reduces costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
              Start Your Cloud Journey
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-sans">
              Download Cloud Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Branding & Visual Identity Hero Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              Branding & Visual Identity
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              Build a Strong, Cohesive Brand That Stands Out
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Create a brand that reflects your values, resonates with your audience, and stands out in a crowded market.
            </p>
            <p className="text-gray-400 mb-[var(--space-16)] font-sans">
              At 79Ratio, we help businesses build strong, consistent, and professional brand identities that communicate your message clearly and effectively. Whether you're launching a new business, rebranding, or refining your visual identity, our branding and visual identity services are designed to build trust, increase recognition, and drive engagement.
            </p>
            <p className="text-yellow-400 font-medium max-w-3xl mx-auto font-sans">
              Create a brand that works for your business — and your audience.
            </p>
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
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Target className="w-6 h-6" />
                <h4 className="text-white font-sans">Strategic Brand Development</h4>
              </div>
              <p className="text-gray-400 font-sans">We help you define your brand's identity, values, and personality through in-depth research, audience analysis, and brand strategy sessions. Our goal is to create a brand that resonates with your audience and reflects your business's mission.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Palette className="w-6 h-6" />
                <h4 className="text-white font-sans">Professional Logo Design</h4>
              </div>
              <p className="text-gray-400 font-sans">We create unique, memorable, and visually compelling logos that represent your brand's identity and values. Our designs are built to stand out, be scalable, and work across all platforms - from digital to print.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Heart className="w-6 h-6" />
                <h4 className="text-white font-sans">Consistent Visual Identity</h4>
              </div>
              <p className="text-gray-400 font-sans">We ensure that all your branding materials - from websites and apps to business cards and marketing collateral - are consistent, cohesive, and aligned with your brand's identity. This helps build brand recognition and trust with your audience.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Palette className="w-6 h-6" />
                <h4 className="text-white font-sans">Typography & Color Strategy</h4>
              </div>
              <p className="text-gray-400 font-sans">We develop custom typography and color schemes that reflect your brand's personality and values. These elements are used consistently across all your digital and print materials to create a unified brand experience.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Monitor className="w-6 h-6" />
                <h4 className="text-white font-sans">Brand Guidelines & Documentation</h4>
              </div>
              <p className="text-gray-400 font-sans">We provide comprehensive brand guidelines that outline how to use your brand's logo, colors, fonts, and other visual elements. This ensures consistency across all platforms and helps your team maintain brand integrity.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <TrendingUp className="w-6 h-6" />
                <h4 className="text-white font-sans">Future-Ready and Scalable</h4>
              </div>
              <p className="text-gray-400 font-sans">Our branding and visual identity solutions are built to grow with your business. Whether you're launching a new product, expanding your operations, or entering new markets, our solutions ensure long-term brand consistency and adaptability.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                <Users className="w-6 h-6" />
                <h4 className="text-white font-sans">Expert Support & Management</h4>
              </div>
              <p className="text-gray-400 font-sans">Our team of brand strategists, designers, and visual identity experts provides ongoing support, guidance, and updates. We help you refine your brand, maintain consistency, and stay ahead of the competition.</p>
            </div>
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
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                1
              </div>
              <h4 className="text-white font-sans mb-[var(--space-12)]">Discovery & Research</h4>
              <p className="text-gray-400 font-sans">We conduct audience research, competitor analysis, and brand strategy sessions to understand your business and audience.</p>
            </Card>
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                2
              </div>
              <h4 className="text-white font-sans mb-[var(--space-12)]">Brand Strategy & Development</h4>
              <p className="text-gray-400 font-sans">We define your brand's identity, values, and personality and develop a comprehensive brand strategy.</p>
            </Card>
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                3
              </div>
              <h4 className="text-white font-sans mb-[var(--space-12)]">Design & Development</h4>
              <p className="text-gray-400 font-sans">We create logos, color schemes, typography, and other visual elements that reflect your brand's identity.</p>
            </Card>
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                4
              </div>
              <h4 className="text-white font-sans mb-[var(--space-12)]">Documentation & Guidelines</h4>
              <p className="text-gray-400 font-sans">We provide comprehensive brand guidelines to ensure consistent use of your brand across all platforms.</p>
            </Card>
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-[var(--space-12)] font-bold">
                5
              </div>
              <h4 className="text-white font-sans mb-[var(--space-12)]">Implementation & Support</h4>
              <p className="text-gray-400 font-sans">We help you launch your brand, maintain consistency, and provide ongoing support as your business grows.</p>
            </Card>
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
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">Strong</div>
              <div className="text-white font-sans mb-[var(--space-8)]">Brand Recognition</div>
              <p className="text-gray-400 font-sans">strong brand recognition for a mid-sized tech startup with a custom logo and brand identity</p>
            </Card>
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">Increased</div>
              <div className="text-white font-sans mb-[var(--space-8)]">Customer Trust</div>
              <p className="text-gray-400 font-sans">increased customer trust and higher engagement with a consistent and professional brand presence</p>
            </Card>
            <Card className="text-center p-[var(--space-32)] bg-black border-gray-800">
              <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">Improved</div>
              <div className="text-white font-sans mb-[var(--space-8)]">Brand Consistency</div>
              <p className="text-gray-400 font-sans">improved brand consistency across all platforms, including websites, apps, and marketing materials</p>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}