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

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-[var(--space-24)] text-white font-sans">
              Get Started
            </h1>
            <p className="text-[var(--text-body-large)] mb-[var(--space-48)] text-gray-300 max-w-3xl mx-auto font-sans">
              Let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Our 3-Step Process</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-[var(--space-32)]">
            <Card className="p-[var(--space-32)] bg-black border-gray-800 hover:border-yellow-400/30 transition-colors">
              <div className="flex items-start gap-[var(--space-16)]">
                <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-sans mb-[var(--space-8)]">1. Schedule a Call</h3>
                  <p className="text-gray-400 font-sans">Book a 15-minute introductory call with our team.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-[var(--space-32)] bg-black border-gray-800 hover:border-yellow-400/30 transition-colors">
              <div className="flex items-start gap-[var(--space-16)]">
                <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-sans mb-[var(--space-8)]">2. Get a Custom Plan</h3>
                  <p className="text-gray-400 font-sans">We'll develop a tailored plan to meet your business needs.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-[var(--space-32)] bg-black border-gray-800 hover:border-yellow-400/30 transition-colors">
              <div className="flex items-start gap-[var(--space-16)]">
                <div className="p-[var(--space-12)] bg-yellow-400/10 rounded-lg text-yellow-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-sans mb-[var(--space-8)]">3. Start Your Project</h3>
                  <p className="text-gray-400 font-sans">We'll get to work on your project and keep you updated every step of the way.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Contact Us</h2>
          </div>
          <Card className="p-[var(--space-32)] bg-black border-gray-800">
            <form>
              <div className="grid md:grid-cols-2 gap-[var(--space-32)]">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-gray-800 border-gray-700 rounded-md p-2" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-gray-800 border-gray-700 rounded-md p-2" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-gray-800 border-gray-700 rounded-md p-2"></textarea>
                </div>
              </div>
              <div className="text-center mt-8">
                <ScheduleCallModal>
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                    Submit
                  </Button>
                </ScheduleCallModal>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Free Cybersecurity Guide */}
      <section className="py-[var(--space-96)] px-[var(--space-24)] bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-[var(--space-64)]">
            <h2 className="mb-[var(--space-24)] text-white font-sans">Free comprehensive cyber security guide for SMB’s</h2>
          </div>
          <Card className="p-[var(--space-32)] bg-black border-gray-800">
            <form>
              <div className="grid md:grid-cols-2 gap-[var(--space-32)]">
                <div className="md:col-span-2">
                  <label htmlFor="subscribe-email" className="block text-sm font-medium text-gray-400 mb-2">Sign up with your email address to receive a free copy of the Cybersecurity Guide</label>
                  <input type="email" id="subscribe-email" className="w-full bg-gray-800 border-gray-700 rounded-md p-2" />
                </div>
              </div>
              <div className="text-center mt-8">
                <ScheduleCallModal>
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button font-sans">
                    Subscribe
                  </Button>
                </ScheduleCallModal>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStartedPage;
