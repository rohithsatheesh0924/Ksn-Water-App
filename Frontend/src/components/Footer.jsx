import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
/* Using refined icons for a professional utility look */
import { 
  Activity, 
  CreditCard, 
  UserCircle, 
  Headphones 
} from 'lucide-react';

const Footer = () => {
  const navItems = [
    { id: 'usage', label: 'Usage', icon: <Activity size={20} />, path: '/usage' },
    { id: 'billing', label: 'Billing', icon: <CreditCard size={20} />, path: '/billing' },
    { id: 'profile', label: 'Profile', icon: <UserCircle size={20} />, path: '/profile' },
    { id: 'support', label: 'Support', icon: <Headphones size={20} />, path: '/support' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-[100] px-4 pb-6 pointer-events-none">
      {/* Mobile-constrained sticky container */}
      <nav className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] rounded-[2.5rem] flex justify-between items-center px-3 py-2 pointer-events-auto">
        
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => 
              `relative flex flex-col items-center justify-center py-2 px-5 rounded-2xl transition-all duration-500 ${
                isActive ? 'text-[#1283a0]' : 'text-slate-400 hover:text-slate-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Smooth Animated Background Pill */}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-50/50 rounded-[1.5rem] -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Icon with scaling effect */}
                <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                  {item.icon}
                </div>
                
                {/* Label with professional tracking */}
                <span className="text-[9px] font-black uppercase tracking-[0.1em] mt-1.5">
                  {item.label}
                </span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#1283a0]" 
                  />
                )}
              </>
            )}
          </NavLink>
        ))}

      </nav>
    </div>
  );
};

export default Footer;