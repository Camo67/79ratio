import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO, MedTech Solutions',
    company: 'Healthcare Technology',
    testimonial: '79Ratio transformed our entire IT infrastructure. Their expertise in healthcare compliance and security gave us peace of mind while improving our operational efficiency by 40%.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    title: 'Operations Director',
    company: 'Financial Services Corp',
    testimonial: 'The cybersecurity solutions provided by 79Ratio have been exceptional. We\'ve had zero security incidents since implementation, and their 24/7 monitoring gives us confidence.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Amanda Rodriguez',
    title: 'IT Manager',
    company: 'Manufacturing Inc',
    testimonial: 'Their cloud migration strategy was flawless. We moved our entire operation to the cloud with zero downtime and reduced our IT costs by 35% while improving performance.',
    rating: 5,
    avatar: 'AR'
  },
  {
    name: 'David Thompson',
    title: 'CEO',
    company: 'Education First',
    testimonial: '79Ratio understands the unique needs of educational institutions. Their solutions have enhanced our learning environment and streamlined our administrative processes.',
    rating: 5,
    avatar: 'DT'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-white font-sans">
            What Our Clients Say
          </h2>
          <p className="max-w-3xl mx-auto text-[#A0AEC0] font-sans">
            Don't just take our word for it. Here's what business leaders have to say about 
            their experience with 79Ratio's technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-[#1A202C] rounded-xl p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-yellow-400" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-[#E2E8F0] font-sans leading-relaxed mb-6 relative z-10">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mr-4 font-bold text-black">
                  {testimonial.avatar}
                </div>

                {/* Details */}
                <div>
                  <div className="font-medium text-white font-sans">
                    {testimonial.name}
                  </div>
                  <div className="text-yellow-400 text-sm font-sans">
                    {testimonial.title}
                  </div>
                  <div className="text-[#A0AEC0] text-sm font-sans">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1A202C] rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-sans">98%</div>
            <div className="text-[#A0AEC0] font-sans">Client Satisfaction Rate</div>
          </div>
          
          <div className="bg-[#1A202C] rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-sans">4.9</div>
            <div className="text-[#A0AEC0] font-sans">Average Rating</div>
          </div>
          
          <div className="bg-[#1A202C] rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-sans">250+</div>
            <div className="text-[#A0AEC0] font-sans">Happy Clients</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#A0AEC0] font-sans mb-4">
            Ready to join our satisfied clients?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('final-cta');
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
