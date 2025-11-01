import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const base = import.meta.env.BASE_URL || '/';
  const desktop = encodeURI(`${base}nodes.jpg`);
  const mobile = encodeURI(`${base}technology-consulting-partners.png`);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Simple background image only (no patterns/effects) */}
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={desktop} />
          <img
            src={mobile}
            alt="Technology Consulting Partners - 79Ratio"
            title="Technology Consulting Partners - 79Ratio"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-lg shadow-black/30">
            {/* Main Headline */}
            <h1 className="mb-4 font-sans leading-tight text-white">
              <span className="block">Transform Your Business with Cutting-Edge Technology</span>
            </h1>

            {/* Subheading */}
            <motion.p 
              className="mb-6 text-white font-sans leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              79Ratio provides end-to-end technology solutions that fuel growth, strengthen security, and optimize operations. From cybersecurity to cloud transformation, we’re your trusted partner in digital innovation.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-sans">500+</div>
                <div className="text-sm text-white/80 font-sans">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-sans">24/7</div>
                <div className="text-sm text-white/80 font-sans">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white font-sans">99.9%</div>
                <div className="text-sm text-white/80 font-sans">Uptime Guarantee</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('final-cta')}
                className="group bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                Start Your Transformation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('services')}
                className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg"
              >
                Explore Our Services
              </button>
            </motion.div>
          </div>

          {/* Trust Indicator */}
          <motion.p 
            className="mt-6 text-sm text-white/80 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Trusted by businesses nationwide • An IPR Tech Group Company
          </motion.p>
        </motion.div>

        {/* Scroll Indicator removed per request */}
      </div>
    </section>
  );
}
