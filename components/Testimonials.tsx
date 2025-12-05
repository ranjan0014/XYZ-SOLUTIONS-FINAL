import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-xyz-dark relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            TRUSTED BY <span className="text-xyz-green">LEADERS</span>
          </h2>
          <p className="mt-4 text-gray-400">Real feedback from real professionals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-xyz-panel/50 backdrop-blur-sm border border-white/5 p-8 rounded-none hover:border-xyz-green/30 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 group-hover:text-xyz-green/20 transition-colors" />
              
              <div className="mb-6">
                 <div className="text-sm font-bold text-xyz-blue uppercase tracking-wider mb-1">{t.role}</div>
                 <h3 className="text-lg font-bold text-white">{t.name}</h3>
              </div>
              
              <p className="text-gray-400 italic leading-relaxed">
                "{t.feedback}"
              </p>

              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-xyz-blue to-xyz-green rounded-full opacity-50"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;