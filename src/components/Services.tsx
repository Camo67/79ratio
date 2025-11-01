import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cloud, Settings, Lock, Database, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security frameworks, threat detection, and compliance management to protect your digital assets.',
    features: ['Threat Detection & Response', 'Security Audits', 'Compliance Management', 'Employee Training'],
    link: '/solutions/cybersecurity',
    color: 'from-yellow-400 to-amber-500',
    bgImage: '/it-consulting-firm-experts.jpg'
  },
  {
    icon: Cloud,
    title: 'Cloud & Virtualization',
    description: 'Scalable cloud infrastructure and virtualization solutions for modern business operations.',
    features: ['Cloud Migration', 'Hybrid Solutions', 'Scalability Planning', 'Cost Optimization'],
    link: '/solutions/cloud',
    color: 'from-yellow-400 to-amber-500',
    bgImage: '/it-consulting-firm-experts.jpg'
  },
  {
    icon: Settings,
    title: 'IT Strategy & Consulting',
    description: 'Strategic technology planning and consulting to align IT with your business objectives.',
    features: ['Technology Roadmaps', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
    link: '/solutions/digital-systems',
    color: 'from-yellow-400 to-amber-500',
    bgImage: '/it-consulting-firm-experts.jpg'
  },
  {
    icon: Lock,
    title: 'Data Protection & Recovery',
    description: 'Robust backup solutions and disaster recovery planning to ensure business continuity.',
    features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Business Continuity'],
    link: '/solutions/compliance',
    color: 'from-yellow-400 to-amber-500',
    bgImage: '/Image_fx (22).jpg'
  },
  {
    icon: Database,
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of reliable network infrastructure solutions.',
    features: ['Network Design', 'Performance Optimization', 'Security Integration', 'Monitoring'],
    link: '/solutions/digital-systems',
    color: 'from-yellow-400 to-amber-500',
    bgImage: '/Image_fx (22).jpg'
  },
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description: '24/7 monitoring, maintenance, and support for all your technology infrastructure.',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Performance Reporting'],
    link: '/managed-services',
    color: 'from-yellow-400 to-amber-500',
    bgImage: '/Image_fx (22).jpg'
  }
];

const base = import.meta.env.BASE_URL || '/'
const withBase = (p: string) => encodeURI(p.startsWith('/') ? `${base}${p.slice(1)}` : `${base}${p}`)

export default function Services() {
  return (
    <section className="py-20 bg-black" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-white font-sans">
            Comprehensive IT Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-[#A0AEC0] font-sans">
            From cybersecurity to cloud transformation, we deliver end-to-end technology solutions 
            that drive business growth and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.link} aria-label={service.title}>
                <div className={`relative rounded-xl border border-black hover:border-yellow-400 transition-all duration-300 h-full overflow-hidden group-hover:transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-yellow-500/10 ${service.bgImage ? '' : 'bg-black'}`}>
                  {service.bgImage && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: `url("${withBase(service.bgImage)}")` }}
                      />
                      <div className="absolute inset-0 z-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-300 pointer-events-none" />
                    </>
                  )}

                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-4 text-white font-sans font-medium group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-white font-sans leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-white font-sans">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Arrow */}
                    <div className="mt-6 flex items-center text-yellow-400 font-sans font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4 font-sans">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-black/80 mb-6 font-sans">
              Let's discuss how our comprehensive IT solutions can drive your business forward.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              View All Solutions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
