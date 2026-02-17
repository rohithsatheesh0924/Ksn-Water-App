import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  LogOut, 
  ChevronDown, 
  Bell, 
  ShieldCheck, 
  CreditCard,
  LifeBuoy
} from 'lucide-react';

const Navbar = () => {
  // 1. State to track if the dropdown is open
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // 2. Close dropdown when clicking anywhere outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Navigation handlers
  const handleLogout = () => {
    setIsOpen(false);
    navigate('/login');
  };

  const goToProfile = () => {
    setIsOpen(false);
    navigate('/profile');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center z-[110] pointer-events-none">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border-b border-slate-100/50 px-6 py-3 flex justify-between items-center pointer-events-auto shadow-sm md:rounded-b-[2rem]">
        
        {/* Branding Section */}
        <Link to="/usage" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 bg-gradient-to-tr from-[#1283a0] to-[#22d3ee] rounded-xl flex items-center justify-center shadow-lg shadow-cyan-900/20 group-active:scale-90 transition-transform duration-300">
            <ShieldCheck size={20} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-black text-slate-800 tracking-tighter uppercase">KSN</span>
            <span className="text-[8px] font-bold text-[#1283a0] tracking-[0.2em] uppercase opacity-80">Intelligence</span>
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          <button className="p-2 text-slate-400 hover:text-[#1283a0] transition-colors relative">
            <Bell size={20} strokeWidth={2} />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-blue-600 rounded-full border border-white"></span>
          </button>

          {/* Avatar & Dropdown Container */}
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setIsOpen(!isOpen)} // Toggle logic
              className={`flex items-center space-x-1 p-0.5 rounded-full border transition-all duration-300 ${isOpen ? 'bg-slate-100 border-slate-200 shadow-inner' : 'bg-slate-50 border-slate-100'}`}
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                 <span className="text-[10px] font-black text-[#1283a0]">AD</span>
              </div>
              <ChevronDown size={14} className={`text-slate-400 mx-1 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu - Wrapped in AnimatePresence for exit animations */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute right-0 mt-4 w-64 bg-white rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden"
                >
                  {/* User Profile Summary */}
                  <div className="px-6 pt-6 pb-4 bg-gradient-to-b from-slate-50/50 to-white border-b border-slate-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1283a0] flex items-center justify-center text-white font-black text-xs">
                        AD
                      </div>
                      <div className="flex flex-col overflow-hidden text-left">
                        <span className="text-sm font-black text-slate-800">Admin User</span>
                        <span className="text-[10px] font-bold text-slate-400 truncate">admin@ksn.intelligence</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="p-3">
                    <button 
                      onClick={goToProfile}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#1283a0] group-hover:text-white transition-colors">
                        <User size={18} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider">My Profile</span>
                    </button>

                    <button 
                      onClick={() => { setIsOpen(false); navigate('/billing'); }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#1283a0] group-hover:text-white transition-colors">
                        <CreditCard size={18} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider">Billing</span>
                    </button>

                    <div className="my-2 h-px bg-slate-100 mx-2" />
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-2xl transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <LogOut size={18} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider">Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;