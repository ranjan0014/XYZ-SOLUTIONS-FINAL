import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="text-2xl font-bold tracking-tighter text-white mb-4">
              XYZ <span className="text-xyz-blue">SOLUTIONS</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering logistics with next-gen GPS tracking and fleet analytics. 
              Secure, fast, and reliable technology for the modern world.
            </p>
          </div>

          <div>
             <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Project</h3>
             <ul className="space-y-2 text-gray-500 text-sm">
               <li>Built for <span className="text-xyz-green">Hustle Arena</span></li>
               <li>IIT Patna BSc</li>
               <li>Modern Fleet Analytics</li>
             </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Team Predator</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-xyz-blue rounded-full"></span> Harsh
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-xyz-blue rounded-full"></span> Aryan
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-xyz-blue rounded-full"></span> Ranjan
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} XYZ Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <div className="text-gray-600 text-xs hover:text-xyz-blue cursor-pointer transition-colors">Privacy Policy</div>
             <div className="text-gray-600 text-xs hover:text-xyz-blue cursor-pointer transition-colors">Terms of Service</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;