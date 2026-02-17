import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  MapPin, 
  Settings, 
  ShieldCheck, 
  Bell, 
  LogOut, 
  ChevronRight, 
  CreditCard 
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'settings', label: 'Account Settings', icon: <Settings size={20} />, color: 'text-blue-500', bg: 'bg-blue-50', path: '/settings' },
    { id: 'billing-pref', label: 'Billing Preferences', icon: <CreditCard size={20} />, color: 'text-cyan-500', bg: 'bg-cyan-50', path: '/billing' },
    { id: 'security', label: 'Security & Privacy', icon: <ShieldCheck size={20} />, color: 'text-emerald-500', bg: 'bg-emerald-50', path: '/security' },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, color: 'text-orange-500', bg: 'bg-orange-50', path: '/notifications' },
  ];

  const handleLogout = () => {
    // Logic to clear session could go here
    navigate('/login');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col w-full pb-32 bg-slate-50/50 min-h-screen font-sans"
    >
      {/* Premium Profile Header */}
      <div className="bg-white px-6 pt-12 pb-10 rounded-b-[3rem] shadow-sm border-b border-slate-100 relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-40" />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[#1283a0] to-cyan-400 p-1 shadow-xl shadow-cyan-100/50">
            <div className="w-full h-full rounded-[1.8rem] bg-white flex items-center justify-center">
              <span className="text-3xl font-black text-[#1283a0]">KS</span>
            </div>
          </div>
          
          <h1 className="mt-5 text-2xl font-black text-slate-800 tracking-tight">Admin User</h1>
          <div className="flex items-center space-x-1 mt-1 text-slate-400">
            <MapPin size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Butterfly Apartment 501</span>
          </div>
        </div>
      </div>

      {/* Settings Navigation Section */}
      <div className="px-6 mt-8 space-y-4">
        <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Preferences</h3>
        
        <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden">
          {menuItems.map((item, idx) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={`w-full flex items-center justify-between p-5 active:bg-slate-50 transition-colors ${idx !== menuItems.length - 1 ? 'border-b border-slate-50' : ''}`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-slate-700">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </NavLink>
          ))}
        </div>

        {/* Professional Logout Section */}
        <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2 mt-8">Account Actions</h3>
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full bg-white border border-red-50 p-5 rounded-[2rem] flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center group-active:bg-red-500 group-active:text-white transition-colors">
              <LogOut size={20} />
            </div>
            <span className="text-sm font-black text-red-500 uppercase tracking-tight">Logout from KSN</span>
          </div>
          <ChevronRight size={18} className="text-red-200" />
        </motion.button>
      </div>

      <div className="mt-12 text-center pb-6">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Version 2.0.4 • KSN Intelligence</p>
      </div>
    </motion.div>
  );
};

export default Profile;