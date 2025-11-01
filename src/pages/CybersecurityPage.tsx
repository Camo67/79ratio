import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  Eye,
  Smartphone,
  Database,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Target
} from 'lucide-react';
const baseCyber = import.meta.env.BASE_URL || '/';
const cybersecurityBg = encodeURI(`${baseCyber}it-helpdesk-services-24-7.jpg`);

const services = [
  {
    title: "Threat Detection & Response",
    description: "Advanced threat monitoring and rapid response to protect against cyber attacks.",
    icon: <AlertTriangle className="w-6 h-6" />,
    features: [
      "24/7 security monitoring",
      "AI-powered threat detection", 
      "Incident response planning",
      "Forensic analysis & reporting"
    ],
    benefits: ["Real-time protection", "Faster response times", "Minimized damage"]
  },
  {
    title: "Security Assessments",
    description: "Comprehensive security audits to identify vulnerabilities and strengthen defenses.",
    icon: <Eye className="w-6 h-6" />,
    features: [
      "Vulnerability assessments",
      "Penetration testing",
      "Security architecture review",
      "Compliance gap analysis"
    ],
    benefits: ["Risk identification", "Compliance validation", "Security roadmap"]
  },
  {
    title: "Data Protection",
    description: "Comprehensive data security solutions to protect sensitive information.",
    icon: <Database className="w-6 h-6" />,
    features: [
      "Data encryption at rest & transit",
      "Access control & authentication",
      "Data loss prevention (DLP)",
      "Backup & recovery solutions"
    ],
    benefits: ["Data privacy", "Regulatory compliance", "Business continuity"]
  },
  {
    title: "Endpoint Security",
    description: "Complete protection for all devices connecting to your network.",
    icon: <Smartphone className="w-6 h-6" />,
    features: [
      "Advanced endpoint detection",
      "Mobile device management",
      "Application whitelisting", 
      "Remote device wiping"
    ],
    benefits: ["Device protection", "Remote work security", "Centralized management"]
  }
];

const threatTypes = [
  {
    title: "Ransomware",
    description: "Protection against malicious software that encrypts data for ransom.",
    icon: <Lock className="w-5 h-5" />,
    protection: "Multi-layered defense"
  },
  {
    title: "Phishing Attacks",
    description: "Email security to prevent credential theft and malware delivery.",
    icon: <Shield className="w-5 h-5" />,
    protection: "Advanced email filtering"
  },
  {
    title: "Data Breaches",
    description: "Comprehensive data protection and access controls.",
    icon: <Database className="w-5 h-5" />,
    protection: "Zero-trust architecture"
  },
  {
    title: "Insider Threats",
    description: "Monitoring and controls for internal security risks.",
    icon: <Users className="w-5 h-5" />,
    protection: "Behavioral analytics"
  }
];

const securityFramework = [
  {
    step: "1",
    title: "Identify",
    description: "Asset discovery and risk assessment to understand your security landscape."
  },
  {
    step: "2", 
    title: "Protect",
    description: "Implement security controls and safeguards to prevent incidents."
  },
  {
    step: "3",
    title: "Detect",
    description: "Continuous monitoring to identify security events and anomalies."
  },
  {
    step: "4",
    title: "Respond",
    description: "Rapid incident response to contain and mitigate security incidents."
  },
  {
    step: "5",
    title: "Recover",
    description: "Business continuity and disaster recovery to restore operations."
  }
];

const securityStats = [
  {
    icon: <Clock className="w-8 h-8" />,
    value: "< 15 min",
    label: "Average Response Time"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "99.9%",
    label: "Threat Detection Rate"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    value: "24/7",
    label: "Security Monitoring"
  },
  {
    icon: <Target className="w-8 h-8" />,
    value: "Zero",
    label: "Successful Breaches"
  }
];

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${cybersecurityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Cybersecurity Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Advanced Cybersecurity That Protects Your Business
            </h1>
            <p className="text-[length:var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl font-sans">
              Comprehensive cybersecurity solutions designed to protect your business from evolving threats. Our advanced security measures ensure your data, systems, and operations remain secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center items-center">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Get Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
                Emergency Response
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-[var(--space-64)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-32)]">
            {securityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-[var(--space-16)] text-yellow-400">
                  {stat.icon}
                </div>
                <div className="text-[length:var(--text-h3)] font-bold text-white mb-[var(--space-8)] font-sans">
                  {stat.value}
                </div>
                <div className="text-[length:var(--text-body)] text-gray-400 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Protection Against Modern Threats</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our comprehensive security solutions protect against the most common and sophisticated cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {threatTypes.map((threat, index) => (
              <Card key={index} className="text-center p-[var(--space-32)] hover:shadow-lg transition-shadow glow-gold-subtle bg-black border-gray-800">
                <div className="flex justify-center mb-[var(--space-16)] text-red-400">
                  {threat.icon}
                </div>
                <h4 className="mb-[var(--space-12)] text-white font-sans">{threat.title}</h4>
                <p className="text-gray-400 text-[length:var(--text-body)] mb-[var(--space-16)] font-sans">{threat.description}</p>
                <Badge variant="secondary" className="bg-red-900/30 text-red-400 border-red-800 font-sans">
                  {threat.protection}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Cybersecurity Services</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive cybersecurity solutions designed to protect your business from all angles.
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

      {/* Security Framework */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Security Framework</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Based on the NIST Cybersecurity Framework, our approach ensures comprehensive protection across all security domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {securityFramework.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-[var(--space-24)]">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-yellow-300 transition-colors font-sans">
                    {step.step}
                  </div>
                  {index < securityFramework.length - 1 && (
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

      {/* Alert Banner */}
      <section className="py-[var(--space-48)] px-[var(--space-24)] bg-gradient-to-r from-red-900 to-red-800 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[var(--space-24)]">
            <div className="flex items-center gap-[var(--space-16)]">
              <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-[var(--space-8)] text-white font-sans">Experiencing a Security Incident?</h3>
                <p className="text-red-100 font-sans">Our emergency response team is available 24/7 to help contain and resolve security incidents.</p>
              </div>
            </div>
            <Button className="bg-white text-red-600 hover:bg-gray-100 flex-shrink-0 font-sans">
              Emergency Hotline: 1-800-SECURITY
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-[var(--space-48)] items-center">
            <div>
              <h2 className="mb-[var(--space-24)] text-white font-sans">Compliance & Certifications</h2>
              <p className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-32)] font-sans">
                Our cybersecurity solutions help you achieve and maintain compliance with industry standards and regulations.
              </p>
              <div className="grid grid-cols-2 gap-[var(--space-16)]">
                <div className="flex items-center gap-[var(--space-12)]">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white font-sans">SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-[var(--space-12)]">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white font-sans">ISO 27001</span>
                </div>
                <div className="flex items-center gap-[var(--space-12)]">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white font-sans">NIST Framework</span>
                </div>
                <div className="flex items-center gap-[var(--space-12)]">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium text-white font-sans">HIPAA</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[var(--space-24)]">
              <Card className="text-center p-[var(--space-24)] bg-gray-900 border-gray-800">
                <div className="text-[length:var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">100%</div>
                <p className="text-gray-400 font-sans">Compliance Rate</p>
              </Card>
              <Card className="text-center p-[var(--space-24)] bg-gray-900 border-gray-800">
                <div className="text-[length:var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">500+</div>
                <p className="text-gray-400 font-sans">Protected Clients</p>
              </Card>
              <Card className="text-center p-[var(--space-24)] bg-gray-900 border-gray-800">
                <div className="text-[length:var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">0</div>
                <p className="text-gray-400 font-sans">Data Breaches</p>
              </Card>
              <Card className="text-center p-[var(--space-24)] bg-gray-900 border-gray-800">
                <div className="text-[length:var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">24/7</div>
                <p className="text-gray-400 font-sans">Monitoring</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-r from-accent-primary to-accent-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Secure Your Business Today</h2>
          <p className="text-[length:var(--text-body-large)] text-white/80 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Don't wait for a security incident to happen. Let our cybersecurity experts assess your current security posture and implement comprehensive protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
              Schedule Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-primary font-sans">
              Download Security Guide
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
