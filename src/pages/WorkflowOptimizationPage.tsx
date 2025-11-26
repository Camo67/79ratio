import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import ScheduleCallModal from '../components/ScheduleCallModal';
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
  Users,
  Palette,
  Heart,
  Monitor
} from 'lucide-react';

const baseCompliance = import.meta.env.BASE_URL || '/';
const complianceBg = encodeURI(`${baseCompliance}Image_fx (23).jpg`);

const woServices = [
  {
    title: "Process Mapping",
    description: "Analyze current workflows to identify inefficiencies.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Automation Solutions",
    description: "Implement automation tools to reduce manual tasks.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Process Reengineering",
    description: "Redesign workflows for better efficiency and performance.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Continuous Improvement",
    description: "Monitor and refine workflows for ongoing optimization.",
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const realResults = [
  { value: '40%', label: 'Faster processing times', sub: 'for a manufacturing company' },
  { value: '25%', label: 'Reduction in manual tasks', sub: 'for a customer service team' },
  { value: 'Improved', label: 'Employee satisfaction', sub: 'for a healthcare organization after workflow improvements' },
];

const WorkflowOptimizationPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative text-white py-[var(--space-128)] px-[var(--space-24)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${complianceBg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-white/20 text-white border-white/30 font-sans">
              Workflow Optimization
            </Badge>
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Streamline Your Processes and Boost Productivity with Workflow Optimization
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-32)] text-white/90 max-w-3xl mx-auto font-sans">
              At 79Ratio, we help organizations streamline their business processes to reduce inefficiencies, improve productivity, and enhance employee satisfaction. Our workflow optimization services are designed to help you achieve faster turnaround times, lower costs, and better overall performance.
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

      {/* What Is Workflow Optimization? */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-[var(--space-24)] bg-yellow-400/10 text-yellow-400 border-yellow-400/20 font-sans">
              What Is Workflow Optimization?
            </Badge>
            <h2 className="mb-[var(--space-24)] text-white font-sans">
              Work Smarter, Not Harder
            </h2>
            <p className="text-[var(--text-body-large)] mb-[var(--space-16)] text-gray-300 max-w-3xl mx-auto font-sans">
              Workflow Optimization is the process of analyzing and improving business processes to eliminate redundancies, reduce delays, and increase efficiency. It involves identifying inefficiencies and implementing automation or process changes to improve outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Workflow Optimization Matters */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Why Workflow Optimization Matters</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Reduce operational costs and improve resource utilization.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Increase productivity and employee satisfaction by eliminating unnecessary steps.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Improve turnaround times and customer satisfaction.</p>
            </div>
            <div className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
              <p className="text-gray-400 font-sans">Enable better decision-making with streamlined processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Workflow Optimization Services */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-[var(--space-64)]">
            <h3 className="mb-[var(--space-16)] text-white font-sans">Our Workflow Optimization Services</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-32)]">
            {woServices.map((service, i) => (
              <div key={i} className="p-[var(--space-32)] bg-black border border-gray-800 rounded-xl text-left hover:border-yellow-400/30 transition-colors">
                <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-12)] text-yellow-400">
                  {service.icon}
                  <h4 className="text-white font-sans">{service.title}</h4>
                </div>
                <p className="text-gray-400 font-sans">{service.description}</p>
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
            {realResults.map((r, i) => (
              <div key={i} className="text-center p-[var(--space-32)] bg-black border border-gray-800 rounded-xl">
                <div className="text-[var(--text-h2)] font-bold text-yellow-400 mb-[var(--space-8)] font-sans">{r.value}</div>
                <div className="text-white font-sans mb-[var(--space-8)]">{r.label}</div>
                <p className="text-gray-400 font-sans">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

export default WorkflowOptimizationPage;
