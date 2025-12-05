import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-24 bg-xyz-panel border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-xyz-blue/10 text-xyz-blue text-xs font-bold rounded mb-4">
              VISUALIZE THE FUTURE
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              PROBLEM. SOLUTION. <span className="text-xyz-blue">BENEFIT.</span>
            </h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full border border-red-500 flex items-center justify-center text-red-500 text-xs font-bold mt-1">1</div>
                <p className="ml-4"><strong className="text-white">The Problem:</strong> Fleet inefficiency, theft risk, and lack of real-time data visibility.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full border border-xyz-blue flex items-center justify-center text-xyz-blue text-xs font-bold mt-1">2</div>
                <p className="ml-4"><strong className="text-white">The Solution:</strong> XYZ Solutions' GPS tracking dashboard with instant alerts.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full border border-xyz-green flex items-center justify-center text-xyz-green text-xs font-bold mt-1">3</div>
                <p className="ml-4"><strong className="text-white">The Benefit:</strong> Total peace of mind, reduced costs, and optimized logistics.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing Border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-xyz-blue to-xyz-green rounded-lg blur opacity-30"></div>
            
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/QwOVsLCCTz4?rel=0" 
                title="XYZ Solutions Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;