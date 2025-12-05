import React from 'react';
import { FEATURES } from '../constants';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamic Icon component helper
const DynamicIcon = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return Icon ? <Icon className="w-6 h-6 text-xyz-blue mb-3" /> : null;
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-xyz-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            INTELLIGENT <span className="text-xyz-green">ECOSYSTEM</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Our technology stack is built for reliability and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-xyz-panel border border-white/5 hover:border-xyz-blue/50 transition-all duration-300 group rounded-xl"
            >
              <div className="bg-xyz-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-xyz-blue/20 transition-colors">
                <DynamicIcon name={feature.iconName} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-xyz-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;