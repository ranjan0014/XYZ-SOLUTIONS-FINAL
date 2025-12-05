import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Satellite } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,rgba(0,0,0,1)_70%)]" />
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-xyz-panel border border-xyz-blue/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-xyz-green animate-pulse"></span>
          <span className="text-xyz-blue text-xs font-mono tracking-widest uppercase">System Operational • Hustle Arena</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6"
        >
          TRACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-xyz-blue to-xyz-green">EVERYTHING</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light"
        >
          Precision GPS technology for the modern world. Secure your fleet, monitor routes, and analyze data in real-time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#features"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-xyz-blue hover:bg-white transition-all duration-300 skew-x-[-10deg] hover:skew-x-0"
          >
            <span className="absolute w-full h-full bg-xyz-green opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <span>EXPLORE SOLUTIONS</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href="#video"
            className="group inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border border-xyz-blue hover:bg-xyz-blue/10 transition-all duration-300 skew-x-[-10deg] hover:skew-x-0"
          >
            <Satellite className="mr-2 w-5 h-5 text-xyz-blue" />
            <span>WATCH DEMO</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 border border-xyz-blue/20 rounded-full opacity-20 hidden lg:block" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-32 h-32 border border-xyz-green/20 rounded-full opacity-20 hidden lg:block" 
      />
    </section>
  );
};

export default Hero;