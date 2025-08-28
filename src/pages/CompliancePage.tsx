import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  CheckCircle, 
  BarChart3, 
  Settings, 
  FileText,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  Clock,
  Target,
  Award,
  Users
} from 'lucide-react';
const complianceBg = 'https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbXBsaWFuY2UlMjBhbmFseXRpY3MlMjB3b3JrZmxvdyUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3NTYzNTg2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

const services = [
  {
    title: "Business Process Automation",
    description: "Streamline operations with intelligent automation that reduces manual work and increases efficiency.",
    icon: <Settings className="w-6 h-6" />,
    features: [
      "Workflow automation design",
      "Document processing automation", 
      "Task scheduling & management",
      "Integration with existing systems"
    ],
    benefits: ["70% time savings", "Reduced human error", "Improved productivity"]
  },
  {
    title: "Compliance Management",
    description: "Comprehensive compliance solutions to ensure your business meets all regulatory requirements.",
    icon: <Shield className="w-6 h-6" />,
    features: [
      "Regulatory compliance audits",
      "Policy development & documentation",
      "Risk assessment & mitigation",
      "Ongoing compliance monitoring"
    ],
    benefits: ["Risk reduction", "Audit readiness", "Legal protection"]
  },
  {
    title: "Performance Analytics",
    description: "Data-driven insights that help you understand and optimize your business performance.",
    icon: <BarChart3 className="w-6 h-6" />,
    features: [
      "KPI tracking & dashboards",
      "Business intelligence reporting",
      "Predictive analytics",
      "Performance benchmarking"
    ],
    benefits: ["Data-driven decisions", "Performance improvements", "Strategic insights"]
  },
  {
    title: "Workflow Optimization",
    description: "Analyze and improve your business processes for maximum efficiency and effectiveness.",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Process mapping & analysis",
      "Bottleneck identification",
      "Efficiency improvements",
      "Change management support"
    ],
    benefits: ["Faster processes", "Cost reduction", "Quality improvement"]
  }
];

const complianceStandards = [
  { name: "GDPR", description: "General Data Protection Regulation" },
  { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
  { name: "SOX", description: "Sarbanes-Oxley Act" },
  { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2", description: "Service Organization Control 2" }
];

const optimizationProcess = [
  {
    step: "1",
    title: "Current State Analysis",
    description: "Comprehensive assessment of existing processes and compliance status."
  },
  {
    step: "2", 
    title: "Gap Identification",
    description: "Identify inefficiencies and compliance gaps that need to be addressed."
  },
  {
    step: "3",
    title: "Solution Design",
    description: "Design optimized processes and compliance frameworks tailored to your needs."
  },
  {
    step: "4",
    title: "Implementation",
    description: "Deploy automation tools and compliance measures with minimal disruption."
  },
  {
    step: "5",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and refinement to ensure optimal performance."
  }
];

const benefits = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time Savings",
    description: "Automate repetitive tasks and free up your team for strategic work.",
    metric: "70% faster"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Accuracy",
    description: "Reduce human error with automated processes and compliance checks.",
    metric: "99% accuracy"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Efficiency",
    description: "Optimize workflows for maximum productivity and cost savings.",
    metric: "50% cost reduction"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Compliance",
    description: "Stay compliant with automated monitoring and reporting.",
    metric: "100% coverage"
  }
];

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${complianceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Compliance & Optimization Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Streamline Operations & Ensure Compliance
            </h1>
            <p className="text-[length:var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl font-sans">
              Transform your business with intelligent automation and comprehensive compliance solutions. Our optimization services help you work smarter, reduce risks, and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)]">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Start Process Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
                Compliance Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Why Optimize Your Business Processes?</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Discover the tangible benefits of business process optimization and compliance management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-[var(--space-32)] hover:shadow-lg transition-shadow glow-gold-subtle bg-gray-900 border-gray-800">
                <div className="flex justify-center mb-[var(--space-16)] text-yellow-400">
                  {benefit.icon}
                </div>
                <div className="text-[length:var(--text-h3)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">
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
            <h2 className="mb-[var(--space-24)] text-white font-sans">Compliance & Optimization Services</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive solutions to automate processes, ensure compliance, and optimize business performance.
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

      {/* Compliance Standards */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Compliance Standards We Support</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              We help you achieve and maintain compliance with major industry standards and regulations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-24)]">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="p-[var(--space-24)] hover:shadow-lg transition-shadow glow-gold-subtle bg-gray-900 border-gray-800">
                <div className="flex items-center gap-[var(--space-16)]">
                  <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg">
                    <FileText className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-sans">{standard.name}</h4>
                    <p className="text-gray-400 text-[length:var(--text-body)] font-sans">{standard.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Optimization Process</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              A systematic approach to analyzing, optimizing, and implementing business process improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {optimizationProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-[var(--space-24)]">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-yellow-300 transition-colors font-sans">
                    {step.step}
                  </div>
                  {index < optimizationProcess.length - 1 && (
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

      {/* Case Study */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-r from-accent-primary to-accent-secondary text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-[var(--space-48)] items-center">
            <div>
              <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
                Success Story
              </Badge>
              <h2 className="mb-[var(--space-24)] text-white font-sans">Manufacturing Company Saves 60% on Processing Time</h2>
              <p className="text-white/80 mb-[var(--space-32)] font-sans">
                A leading manufacturing company partnered with us to automate their procurement and compliance processes, resulting in significant time and cost savings.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-sans">
                Read Full Case Study
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-[var(--space-24)]">
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">60%</div>
                <p className="text-white/80 font-sans">Time Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">$500K</div>
                <p className="text-white/80 font-sans">Annual Savings</p>
              </div>
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">100%</div>
                <p className="text-white/80 font-sans">Compliance Rate</p>
              </div>
              <div className="text-center">
                <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">3 Months</div>
                <p className="text-white/80 font-sans">Implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Ready to Optimize Your Business Processes?</h2>
          <p className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Let our experts analyze your current processes and design solutions that drive efficiency and ensure compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
              Schedule Process Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-sans">
              Download Optimization Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}