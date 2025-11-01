import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Clock } from 'lucide-react';
import ImageContainer from './ImageContainer';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every solution is built with enterprise-grade security at its foundation, protecting your business assets and data.'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'We focus on measurable outcomes that directly impact your bottom line and operational efficiency.'
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We work as an extension of your team, understanding your unique challenges and goals.'
  },
  {
    icon: Clock,
    title: '24/7 Reliability',
    description: 'Round-the-clock monitoring and support ensure your systems run smoothly at all times.'
  }
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-black" id="core-values">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-white font-sans">
            Why Choose 79Ratio
          </h2>
          <p className="max-w-3xl mx-auto text-[#A0AEC0] font-sans">
            Our core values drive everything we do, ensuring your technology investments 
            deliver maximum value and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {value.title === 'Security First' ? (
                <ImageContainer
                  mobileSrc="/Security First.jpg"
                  desktopSrc="/managed-it-services-near-me.jpg"
                  alt="Security First - 79Ratio"
                  overlayClassName="bg-black/45"
                  className="min-h-[18rem] border border-black"
                  contentClassName="p-8"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center transition-transform duration-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)] border border-black">
                      <Shield className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-white font-sans font-medium">{value.title}</h3>
                  <p className="text-white font-sans leading-relaxed">{value.description}</p>
                </ImageContainer>
              ) : value.title === 'Results Driven' ? (
                <ImageContainer
                  mobileSrc="/Security First.jpg"
                  desktopSrc="/managed-it-services-near-me.jpg"
                  alt="Security First - 79Ratio"
                  overlayClassName="bg-black/45"
                  className="min-h-[18rem] border border-black"
                  contentClassName="p-8"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center transition-transform duration-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)] border border-black">
                      <Target className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-white font-sans font-medium">{value.title}</h3>
                  <p className="text-white font-sans leading-relaxed">{value.description}</p>
                </ImageContainer>
              ) : value.title === 'Partnership Approach' ? (
                <ImageContainer
                  mobileSrc="/Security First.jpg"
                  desktopSrc="/managed-it-services-near-me.jpg"
                  alt="Security First - 79Ratio"
                  overlayClassName="bg-black/45"
                  className="min-h-[18rem] border border-black"
                  contentClassName="p-8"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center transition-transform duration-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)] border border-black">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-white font-sans font-medium">{value.title}</h3>
                  <p className="text-white font-sans leading-relaxed">{value.description}</p>
                </ImageContainer>
              ) : value.title === '24/7 Reliability' ? (
                <ImageContainer
                  mobileSrc="/Security First.jpg"
                  desktopSrc="/managed-it-services-near-me.jpg"
                  alt="Security First - 79Ratio"
                  overlayClassName="bg-black/45"
                  className="min-h-[18rem] border border-black"
                  contentClassName="p-8"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center transition-transform duration-300 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)] border border-black">
                      <Clock className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-white font-sans font-medium">{value.title}</h3>
                  <p className="text-white font-sans leading-relaxed">{value.description}</p>
                </ImageContainer>
              ) : (
                <div className="bg-black rounded-xl p-8 border border-black hover:border-yellow-400 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-white font-sans font-medium">{value.title}</h3>
                  <p className="text-[#A0AEC0] font-sans leading-relaxed">{value.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-black rounded-xl p-8 border border-black">
            <div className="text-4xl font-bold text-yellow-400 mb-2 font-sans">15+</div>
            <div className="text-[#A0AEC0] font-sans">Years of Experience</div>
          </div>
          
          <div className="bg-black rounded-xl p-8 border border-black">
            <div className="text-4xl font-bold text-yellow-400 mb-2 font-sans">500+</div>
            <div className="text-[#A0AEC0] font-sans">Successful Projects</div>
          </div>
          
          <div className="bg-black rounded-xl p-8 border border-black">
            <div className="text-4xl font-bold text-yellow-400 mb-2 font-sans">24/7</div>
            <div className="text-[#A0AEC0] font-sans">Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
