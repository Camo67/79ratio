import React from 'react';
import { motion } from 'motion/react';
import ImageContainer from './ImageContainer';

export default function ImageContentSection() {
  return (
    <section className="py-16 bg-black" id="image-content">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-4 font-sans">Featured Solutions</h2>
          <p className="text-[#A0AEC0] max-w-2xl mx-auto font-sans">
            Visual containers with overlay text—ideal for highlighting services, campaigns, or case studies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ImageContainer
              mobileSrc="/fibinacci.jpg"
              desktopSrc="/fibinacci.jpg"
              alt="Cloud computing background"
              objectPositionClassName="object-center"
              className="h-72 md:h-96"
            >
              <div className="max-w-md">
                <h3 className="text-white text-2xl font-semibold mb-2 font-sans">Cloud Modernization</h3>
                <p className="text-[#E2E8F0] mb-4 font-sans">
                  Migrate apps, optimize costs, and scale securely with a tailored cloud strategy.
                </p>
                <a
                  href="#services"
                  className="inline-block bg-yellow-400 text-black font-bold py-2.5 px-5 rounded-lg hover:bg-yellow-500 transition-all shadow-lg"
                >
                  Explore Cloud Services
                </a>
              </div>
            </ImageContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ImageContainer
              mobileSrc="/fibinacci.jpg"
              desktopSrc="/fibinacci.jpg"
              alt="Network infrastructure nodes"
              objectPositionClassName="object-center transform scale-x-[-1]"
              className="h-72 md:h-96"
            >
              <div className="max-w-md">
                <h3 className="text-white text-2xl font-semibold mb-2 font-sans">Secure Infrastructure</h3>
                <p className="text-[#E2E8F0] mb-4 font-sans">
                  Build robust, compliant networks with 24/7 monitoring and proactive defense.
                </p>
                <a
                  href="#services"
                  className="inline-block bg-yellow-400 text-black font-bold py-2.5 px-5 rounded-lg hover:bg-yellow-500 transition-all shadow-lg"
                >
                  See How We Secure
                </a>
              </div>
            </ImageContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
