import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
  Target
} from 'lucide-react';
const designAccessibilityBg = 'https://images.unsplash.com/photo-1600202751116-3e0226e1e7a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBhY2Nlc3NpYmlsaXR5JTIwd2Vic2l0ZSUyMHVpJTIwdXh8ZW58MXx8fHwxNzU2MzU4NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';


const services = [
  {
    title: "UX/UI Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: <Palette className="w-6 h-6" />,
    features: [
      "User research & personas",
      "Wireframing & prototyping", 
      "Interactive design systems",
      "Usability testing"
    ],
    benefits: ["40% increase in user engagement", "Reduced bounce rates", "Higher conversion rates"]
  },
  {
    title: "Accessibility Audits",
    description: "Comprehensive accessibility assessments to ensure your digital products are inclusive for all users.",
    icon: <Eye className="w-6 h-6" />,
    features: [
      "WCAG 2.1 AA compliance testing",
      "Screen reader compatibility",
      "Keyboard navigation testing",
      "Color contrast analysis"
    ],
    benefits: ["Legal compliance", "Expanded user base", "Improved SEO ranking"]
  },
  {
    title: "Branding & Visual Identity",
    description: "Cohesive brand identity that communicates your values and connects with your audience.",
    icon: <Heart className="w-6 h-6" />,
    features: [
      "Logo design & brand guidelines",
      "Color palette & typography",
      "Marketing collateral design",
      "Brand consistency standards"
    ],
    benefits: ["Stronger brand recognition", "Professional credibility", "Consistent messaging"]
  },
  {
    title: "Responsive Design",
    description: "Multi-device experiences that work seamlessly across all screen sizes and platforms.",
    icon: <Smartphone className="w-6 h-6" />,
    features: [
      "Mobile-first design approach",
      "Cross-platform compatibility",
      "Performance optimization",
      "Touch-friendly interfaces"
    ],
    benefits: ["Better mobile experience", "Improved search rankings", "Increased mobile conversions"]
  }
];

const accessibilityFeatures = [
  {
    title: "Screen Reader Support",
    description: "Ensure your content is accessible to users with visual impairments.",
    icon: <Eye className="w-5 h-5" />
  },
  {
    title: "Keyboard Navigation",
    description: "Full functionality accessible through keyboard-only navigation.",
    icon: <Monitor className="w-5 h-5" />
  },
  {
    title: "Color Contrast",
    description: "Optimal color contrast ratios for users with visual sensitivities.",
    icon: <Palette className="w-5 h-5" />
  },
  {
    title: "Inclusive Design",
    description: "Design that considers diverse user needs and abilities.",
    icon: <Users className="w-5 h-5" />
  }
];

const designProcess = [
  {
    step: "1",
    title: "Discovery & Research",
    description: "Understanding your users, business goals, and design requirements."
  },
  {
    step: "2", 
    title: "Strategy & Planning",
    description: "Developing design strategy and accessibility requirements."
  },
  {
    step: "3",
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes."
  },
  {
    step: "4",
    title: "Testing & Validation",
    description: "User testing and accessibility validation to ensure optimal experience."
  },
  {
    step: "5",
    title: "Implementation & Support",
    description: "Design system implementation and ongoing design support."
  }
];

export default function DesignAccessibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${designAccessibilityBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Design & Accessibility Solutions
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Inclusive Design That Reaches Everyone
            </h1>
            <p className="text-[length:var(--text-body-large)] mb-[var(--space-48)] opacity-90 max-w-3xl font-sans">
              Expert "Design & Accessibility" services encompassing UX/UI Design, User Experience Optimization, Branding & Visual Identity, and Accessibility Audits.

            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--space-16)]">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                Get Design Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-blue font-sans">
                Accessibility Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Design & Accessibility Services</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Comprehensive design solutions that prioritize both aesthetics and accessibility to create inclusive digital experiences.
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

      {/* Accessibility Features */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Accessibility Features We Implement</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              Our accessibility solutions ensure compliance with WCAG guidelines while creating inclusive experiences for all users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {accessibilityFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-[var(--space-32)] hover:shadow-lg transition-shadow glow-gold-subtle bg-black border-gray-800">
                <div className="flex justify-center mb-[var(--space-16)] text-yellow-400">
                  {feature.icon}
                </div>
                <h4 className="mb-[var(--space-12)] text-white font-sans">{feature.title}</h4>
                <p className="text-gray-400 text-[length:var(--text-body)] font-sans">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our Design Process</h2>
            <p className="text-[length:var(--text-body-large)] text-gray-400 max-w-3xl mx-auto font-sans">
              A user-centered design process that ensures accessibility and usability are built in from the start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-32)]">
            {designProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-[var(--space-24)]">
                  <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-yellow-300 transition-colors font-sans">
                    {step.step}
                  </div>
                  {index < designProcess.length - 1 && (
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

      {/* Why Choose Us */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-r from-secondary-blue to-light-blue text-white">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Why Choose Our Design & Accessibility Services?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-[var(--space-48)]">
            <div className="text-center">
              <div className="flex justify-center mb-[var(--space-16)]">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="mb-[var(--space-12)] text-white font-sans">Award-Winning Design</h4>
              <p className="text-white/80 font-sans">Recognized for excellence in user experience and accessibility design.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-[var(--space-16)]">
                <Target className="w-8 h-8" />
              </div>
              <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">WCAG 2.1</div>
              <p className="text-white/80 font-sans">AA Compliance Certified</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-[var(--space-16)]">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-[length:var(--text-h2)] font-bold mb-[var(--space-8)] font-sans">150+</div>
              <p className="text-white/80 font-sans">Successful Design Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto text-center p-[var(--space-48)] border-gray-800 bg-gray-900">
            <div className="flex justify-center mb-[var(--space-24)]">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={`star-${i}`} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-24)] italic font-sans">
              "79Ratio's design and accessibility team transformed our website into an inclusive platform that serves all our users. The accessibility improvements not only helped us comply with regulations but also increased our user engagement by 40%."
            </blockquote>
            <div className="text-white font-medium font-sans">Sarah Johnson</div>
            <div className="text-gray-400 font-sans">Chief Digital Officer, TechCorp</div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto text-center">
          <h2 className="mb-[var(--space-24)] text-white font-sans">Ready to Create Inclusive Digital Experiences?</h2>
          <p className="text-[length:var(--text-body-large)] text-gray-400 mb-[var(--space-48)] max-w-2xl mx-auto font-sans">
            Let our design and accessibility experts help you create digital experiences that welcome and engage all users.
          </p>
          <div className="flex flex-col sm:flex-row gap-[var(--space-16)] justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
              Schedule Design Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-sans">
              Request Accessibility Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}