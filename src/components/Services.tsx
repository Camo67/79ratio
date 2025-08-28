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
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Cloud,
    title: 'Cloud & Virtualization',
    description: 'Scalable cloud infrastructure and virtualization solutions for modern business operations.',
    features: ['Cloud Migration', 'Hybrid Solutions', 'Scalability Planning', 'Cost Optimization'],
    link: '/solutions/cloud',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Settings,
    title: 'IT Strategy & Consulting',
    description: 'Strategic technology planning and consulting to align IT with your business objectives.',
    features: ['Technology Roadmaps', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
    link: '/solutions/digital-systems',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Lock,
    title: 'Data Protection & Recovery',
    description: 'Robust backup solutions and disaster recovery planning to ensure business continuity.',
    features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Business Continuity'],
    link: '/solutions/compliance',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Database,
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of reliable network infrastructure solutions.',
    features: ['Network Design', 'Performance Optimization', 'Security Integration', 'Monitoring'],
    link: '/solutions/digital-systems',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Monitor,
    title: 'Managed IT Services',
    description: '24/7 monitoring, maintenance, and support for all your technology infrastructure.',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Performance Reporting'],
    link: '/managed-services',
    color: 'from-teal-500 to-teal-600'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-900" id="services">
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
              <Link to={service.link}>
                <div className="bg-[#1A202C] rounded-xl p-8 border border-gray-800 hover:border-[#9FB3DF] transition-all duration-300 h-full group-hover:transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-white font-sans font-medium group-hover:text-[#9FB3DF] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#A0AEC0] font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-[#A0AEC0] font-sans">
                        <div className="w-2 h-2 bg-[#9FB3DF] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Arrow */}
                  <div className="mt-6 flex items-center text-[#9FB3DF] font-sans font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
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
          <div className="bg-gradient-to-r from-[#9FB3DF] to-[#9EC6F3] rounded-xl p-8 text-center">
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