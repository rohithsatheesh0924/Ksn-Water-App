import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Bell, 
  Lock, 
  Globe, 
  Moon, 
  ShieldCheck, 
  ChevronRight,
  UserPen,
  Smartphone,
  Info,
  CreditCard
} from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Animation variants for a premium entry effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col w-full pb-32 min-h-screen bg-[#fcfdfe] font-sans"
    >
      {/* Premium Glass Header */}
      <div className="bg-white/90 backdrop-blur-xl px-6  pb-6 border-b border-slate-100/60 flex items-center justify-between sticky top-0 z-50">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/profile')}
          className="p-2.5 bg-white shadow-sm border border-slate-100 text-slate-400 rounded-2xl hover:text-[#1283a0] transition-all"
        >
          <ArrowLeft size={20} />
        </motion.button>
        <h1 className="text-xl font-black text-slate-800 tracking-tight">Settings</h1>
        <div className="w-10" /> 
      </div>

      <div className="px-6 py-8 space-y-10">
        
        {/* Group: Personal Identity */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 ml-3">
            <div className="w-1 h-3 bg-[#1283a0] rounded-full" />
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Personal Identity</h3>
          </div>
          <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 overflow-hidden">
            <SettingItem icon={<User size={18} />} label="Full Name" value="Admin User" />
            <SettingItem icon={<UserPen size={18} />} label="Account Role" value="Administrator" />
            <SettingItem icon={<Globe size={18} />} label="Email Address" value="admin@ksn.intelligence" last />
          </motion.div>
        </section>

        {/* Group: Experience */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 ml-3">
            <div className="w-1 h-3 bg-[#1283a0] rounded-full" />
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">Experience</h3>
          </div>
          <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 overflow-hidden">
            <SettingToggle 
              icon={<Moon size={18} />} 
              label="Dark Interface" 
              enabled={darkMode} 
              onToggle={() => setDarkMode(!darkMode)} 
            />
            <SettingItem icon={<Bell size={18} />} label="Notifications" value="Push Enabled" />
            <SettingItem icon={<CreditCard size={18} />} label="Payment Methods" last />
          </motion.div>
        </section>

        {/* Group: System & Legal */}
        <section className="space-y-4">
          <div className="flex items-center space-x-2 ml-3">
            <div className="w-1 h-3 bg-slate-300 rounded-full" />
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">System & Legal</h3>
          </div>
          <motion.div variants={itemVariants} className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50 overflow-hidden">
            <SettingItem icon={<Lock size={18} />} label="Security Protocol" value="Two-Factor Active" />
            <SettingItem icon={<Info size={18} />} label="Terms of Service" />
            <SettingItem icon={<Smartphone size={18} />} label="Architecture" value="v2.0.4 Platinum" last />
          </motion.div>
        </section>

        {/* Save Action */}
        <motion.button
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-[#1283a0] to-[#0e6d85] text-white py-5 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.25em] shadow-2xl shadow-cyan-900/20 flex items-center justify-center space-x-3"
        >
          <span>Update All Preferences</span>
          <ShieldCheck size={18} />
        </motion.button>

      </div>
    </motion.div>
  );
};

/* --- Refined Sub-Components --- */

const SettingItem = ({ icon, label, value, last, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between p-6 active:bg-slate-50/80 transition-all ${!last ? 'border-b border-slate-50' : ''}`}
  >
    <div className="flex items-center space-x-4 text-left">
      <div className="w-11 h-11 bg-[#f8fafc] text-[#1283a0] rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">{label}</span>
        <span className="text-[13px] font-bold text-slate-700 leading-none">{value || 'Manage Details'}</span>
      </div>
    </div>
    <ChevronRight size={16} className="text-slate-200" />
  </button>
);

const SettingToggle = ({ icon, label, enabled, onToggle }) => (
  <div className="w-full flex items-center justify-between p-6 border-b border-slate-50">
    <div className="flex items-center space-x-4">
      <div className="w-11 h-11 bg-[#f8fafc] text-[#1283a0] rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
        {icon}
      </div>
      <span className="text-[13px] font-bold text-slate-700">{label}</span>
    </div>
    <button 
      onClick={onToggle}
      className={`w-14 h-7 rounded-full p-1.5 transition-colors duration-500 ease-in-out flex items-center ${enabled ? 'bg-[#1283a0]' : 'bg-slate-200'}`}
    >
      <motion.div 
        animate={{ x: enabled ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-4 h-4 bg-white rounded-full shadow-lg"
      />
    </button>
  </div>
);

export default Settings;