import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Cloud, Zap } from 'lucide-react';

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 L50,50 L50,0 L100,0" stroke="#9FB3DF" strokeWidth="1" fill="none" opacity="0.3"/>
              <path d="M50,50 L50,100 L100,100" stroke="#9FB3DF" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="50" cy="50" r="3" fill="#9FB3DF" opacity="0.5"/>
              <circle cx="0" cy="50" r="2" fill="#9FB3DF" opacity="0.4"/>
              <circle cx="100" cy="0" r="2" fill="#9FB3DF" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 text-blue-400 opacity-20"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield size={60} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-32 text-blue-300 opacity-15"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Cloud size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-40 text-blue-500 opacity-25"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Zap size={50} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Headline */}
          <h1 className="mb-6 font-sans leading-tight">
            <span className="block text-white">Transform Your Business with</span>
            <span className="block text-transparent bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] bg-clip-text glow-blue-subtle">
              Cutting-Edge Technology
            </span>
          </h1>

          {/* Subheading */}
          <motion.p 
            className="mb-8 max-w-3xl mx-auto text-[#E2E8F0] font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            79Ratio delivers comprehensive IT solutions that drive growth, enhance security, and streamline operations. 
            From cybersecurity to cloud transformation, we're your trusted technology partner.
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-[#9FB3DF] font-sans">500+</div>
              <div className="text-sm text-gray-400 font-sans">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#9FB3DF] font-sans">24/7</div>
              <div className="text-sm text-gray-400 font-sans">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#9FB3DF] font-sans">99.9%</div>
              <div className="text-sm text-gray-400 font-sans">Uptime Guarantee</div>
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
              className="group bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] text-black font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Start Your Transformation
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="border border-[#9FB3DF] text-[#9FB3DF] font-bold py-4 px-8 rounded-lg hover:bg-[#9FB3DF] hover:text-black transition-all duration-300 hover:shadow-lg"
            >
              Explore Our Services
            </button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p 
            className="mt-8 text-sm text-gray-500 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Trusted by businesses nationwide • An IPR Tech Group Company
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#9FB3DF] rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-[#9FB3DF] rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}