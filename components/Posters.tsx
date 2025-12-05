import React from 'react';
import { POSTERS } from '../constants';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.Box;
  return Icon ? <Icon className={className} /> : null;
};

// Helper to convert standard Drive links to direct image links
const getDirectLink = (url: string | undefined) => {
  if (!url) return null;
  // If it's a google drive file view link, convert it
  // Regex to extract ID from: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  const match = url.match(/\/d\/(.+?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
};

const Posters: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
       
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-xyz-blue tracking-widest mb-2">XYZ SOLUTIONS</h2>
          <h3 className="text-3xl font-bold text-white">THE FUTURE OF TRACKING</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {POSTERS.map((poster, index) => {
             const imageUrl = getDirectLink(poster.imageUrl);
             
             return (
              <motion.div
                key={poster.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative w-full max-w-[280px] aspect-[3/4] group perspective-1000"
              >
                {/* Poster Container */}
                <div className={`
                  h-full w-full relative overflow-hidden flex flex-col justify-between p-6 border-2 transition-all duration-500
                  ${poster.theme === 'blue' ? 'bg-black border-xyz-blue shadow-[0_0_20px_rgba(0,243,255,0.15)]' : ''}
                  ${poster.theme === 'green' ? 'bg-black border-xyz-green shadow-[0_0_20px_rgba(57,255,20,0.15)]' : ''}
                  ${poster.theme === 'dark' ? 'bg-xyz-panel border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]' : ''}
                `}>
                  
                  {/* Background Graphics / Image */}
                  <div className="absolute inset-0 pointer-events-none">
                     {imageUrl ? (
                        <>
                          <img 
                            src={imageUrl} 
                            alt={poster.title} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" 
                          />
                          {/* Gradient Overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60" />
                        </>
                     ) : (
                        <>
                         {/* Fallback CSS Patterns */}
                         {poster.theme === 'blue' && (
                           <div className="w-full h-full bg-[linear-gradient(45deg,transparent_40%,#00f3ff_100%)] opacity-20" />
                         )}
                         {poster.theme === 'green' && (
                           <div className="w-full h-full bg-[radial-gradient(circle_at_bottom_left,#39ff14_0%,transparent_60%)] opacity-20" />
                         )}
                         {poster.theme === 'dark' && (
                            <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#ffffff_20px)] opacity-10" />
                         )}
                        </>
                     )}
                  </div>

                  {/* Content Top */}
                  <div className="relative z-10">
                    <div className={`text-[10px] font-bold border inline-block px-1.5 py-0.5 mb-3 backdrop-blur-md
                      ${poster.theme === 'blue' ? 'border-xyz-blue text-xyz-blue bg-black/50' : ''}
                      ${poster.theme === 'green' ? 'border-xyz-green text-xyz-green bg-black/50' : ''}
                      ${poster.theme === 'dark' ? 'border-white text-white bg-black/50' : ''}
                    `}>
                      XYZ-00{poster.id}
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-white break-words drop-shadow-lg">
                      {poster.title.split(' ').map((word, i) => <div key={i}>{word}</div>)}
                    </h2>
                  </div>

                  {/* Central Visual (Icon) - Only show if NO image */}
                  {!imageUrl && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                       <DynamicIcon 
                          name={poster.icon} 
                          className={`w-24 h-24 opacity-80
                            ${poster.theme === 'blue' ? 'text-xyz-blue drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]' : ''}
                            ${poster.theme === 'green' ? 'text-xyz-green drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]' : ''}
                            ${poster.theme === 'dark' ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : ''}
                          `} 
                       />
                    </div>
                  )}

                  {/* Content Bottom */}
                  <div className="relative z-10">
                    <div className="w-full h-0.5 bg-white/40 mb-3"></div>
                    <div className="flex justify-between items-end">
                      <div>
                         <p className="text-[10px] font-mono text-gray-300">BUILT BY</p>
                         <p className="text-xs font-bold text-white drop-shadow-md">TEAM PREDATOR</p>
                      </div>
                      <div className="text-right">
                         <p className={`text-xs font-bold drop-shadow-md ${poster.theme === 'blue' ? 'text-xyz-blue' : poster.theme === 'green' ? 'text-xyz-green' : 'text-white'}`}>
                           {poster.subtitle}
                         </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
             );
          })}
        </div>
        
        <div className="mt-12 text-center text-[10px] font-mono text-gray-500">
           GENERATED DESIGNS • HUSTLE ARENA • IIT PATNA BSC
        </div>
      </div>
    </section>
  );
};

export default Posters;