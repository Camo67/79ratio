import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
const cloudSolutionsBg = 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzU2MzU4NjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

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

export default function CloudSolutionsPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${cloudSolutionsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Cloud Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Scale Your Business with Cloud Solutions
            </h1>
            <p className="text-[length:var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl font-sans">
              Transform your business with scalable, secure, and cost-effective cloud solutions. Our comprehensive cloud services help you leverage the power of modern cloud platforms to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)]">
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

      {/* Cloud Benefits */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Why Choose Cloud Solutions?</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Discover the transformative benefits of cloud computing for your business operations and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {cloudBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-[var(--space-32)] hover:shadow-lg transition-shadow glow-gold-subtle bg-gray-900 border-gray-800">
                <div className="flex justify-center mb-[var(--space-16)] text-yellow-400">
                  {benefit.icon}
                </div>
                <div className="text-[length:var(--text-h4)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">
                  {benefit.metric}
                </div>
                <h4 className="mb-[var(--space-12)] text-white font-sans">{benefit.title}</h4>
                <p className="text-gray-400 text-[length:var(--text-body)] font-sans">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Cloud Services</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive cloud solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-[var(--space-32)]">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-800 hover:border-yellow-400/30 glow-gold-subtle bg-black">
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

      {/* Cloud Platforms */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Cloud Platforms We Support</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
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
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
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
                <p className="text-gray-400 text-[length:var(--text-body)] font-sans">{step.description}</p>
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
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">60%</div>
                <p className="text-white/80 font-sans">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">3x</div>
                <p className="text-white/80 font-sans">Performance Improvement</p>
              </div>
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">99.9%</div>
                <p className="text-white/80 font-sans">Uptime Achieved</p>
              </div>
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">6 Months</div>
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
            <p className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-32)] max-w-2xl mx-auto font-sans">
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
          <p className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
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
    </div>
  );
}