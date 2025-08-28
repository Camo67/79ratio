import React from 'react';
import { motion } from 'motion/react';
import { Building2, Heart, GraduationCap, Factory, Shield, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const sectors = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant IT solutions, electronic health records, and telemedicine infrastructure.',
    image: 'https://images.unsplash.com/photo-1631563020941-c0c6bc534b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMG1lZGljYWwlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTYzNjA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['HIPAA Compliance', 'EHR Systems', 'Telemedicine', 'Data Security']
  },
  {
    icon: Briefcase,
    title: 'Financial Services',
    description: 'Secure banking systems, compliance management, and fraud detection solutions.',
    image: 'https://images.unsplash.com/photo-1647916433898-bdcc129827f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYmFua2luZyUyMHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MXx8fHwxNzU2MzYwNDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Financial Compliance', 'Fraud Detection', 'Secure Transactions', 'Risk Management']
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Industrial IoT, automation systems, and supply chain optimization technology.',
    image: 'https://images.unsplash.com/photo-1689942007858-7b12bf5864bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5kdXN0cnklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjM2MDQwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Industrial IoT', 'Automation', 'Supply Chain', 'Quality Control']
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Learning management systems, campus networks, and educational technology solutions.',
    image: 'https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwc2Nob29sJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU2MzYwNDEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Learning Management', 'Campus Networks', 'Student Information Systems', 'Distance Learning']
  }
];

export default function Sectors() {
  return (
    <section className="py-20 bg-black" id="sectors">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-white font-sans">
            Industry Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-[#A0AEC0] font-sans">
            We understand the unique challenges and requirements of different industries, 
            delivering specialized IT solutions that meet sector-specific compliance and operational needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#1A202C] rounded-xl overflow-hidden border border-gray-800 hover:border-[#9FB3DF] transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={sector.image}
                    alt={`${sector.title} technology solutions`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C] via-transparent to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9FB3DF] to-[#9EC6F3] rounded-lg flex items-center justify-center">
                      <sector.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="mb-4 text-white font-sans font-medium group-hover:text-[#9FB3DF] transition-colors">
                    {sector.title}
                  </h3>
                  
                  <p className="text-[#A0AEC0] font-sans leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {sector.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-[#A0AEC0] font-sans">
                        <div className="w-2 h-2 bg-[#9FB3DF] rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sectors */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1A202C] rounded-xl p-8 border border-gray-800">
            <h3 className="text-xl font-medium text-white mb-4 font-sans">
              Serving Additional Industries
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-[#A0AEC0] font-sans">
              <span>Legal Services</span>
              <span className="text-[#9FB3DF]">•</span>
              <span>Retail & E-commerce</span>
              <span className="text-[#9FB3DF]">•</span>
              <span>Real Estate</span>
              <span className="text-[#9FB3DF]">•</span>
              <span>Non-Profit</span>
              <span className="text-[#9FB3DF]">•</span>
              <span>Professional Services</span>
            </div>
            <p className="mt-4 text-[#A0AEC0] font-sans">
              Don't see your industry? We adapt our solutions to meet the unique needs of any business sector.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}