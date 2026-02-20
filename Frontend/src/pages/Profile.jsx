import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LogOut, 
  Phone, 
  MapPin, 
  Building2, 
  Hash 
} from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full pb-32 bg-slate-50/30 min-h-screen font-sans"
    >
      {/* 1. Header: Profile Identity */}
      <div className="bg-gradient-to-b from-cyan-50/50 to-transparent px-6 pt-12 pb-8 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-[#1283a0] flex items-center justify-center text-white shadow-xl shadow-cyan-100 border-4 border-white mb-4 relative">
          <span className="text-4xl font-black tracking-tighter">S</span>
        </div>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight uppercase">Sethuramn -</h1>
        <p className="text-slate-500 font-bold tracking-tight mt-1">7022151313</p>
      </div>

      {/* 2. Primary Location Card */}
      <div className="px-6 space-y-4">
        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Primary Location</h3>
        
        <div className="bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
          {/* Flat/House No */}
          <div className="p-6 border-b border-slate-50 group">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1.5">Flat/House No.</span>
            <div className="flex items-center space-x-2">
              <Building2 size={16} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-700">Butterfly Apartment 501</span>
            </div>
          </div>

          {/* Full Address */}
          <div className="p-6 border-b border-slate-50">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1.5">Address</span>
            <div className="flex items-start space-x-2">
              <MapPin size={16} className="text-slate-400 mt-0.5" />
              <p className="text-sm font-bold text-slate-600 leading-relaxed">
                Panathur Main Rd, Munireddy Layout, Mariyappa Layout, Kadubeesanahalli, Panathur, Bengaluru, Karnataka
              </p>
            </div>
          </div>

          {/* City & Pincode Grid */}
          <div className="grid grid-cols-2 divide-x divide-slate-50">
            <div className="p-6">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">City</span>
              <span className="text-sm font-bold text-slate-700">-</span>
            </div>
            <div className="p-6">
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-1">Pincode</span>
              <div className="flex items-center space-x-2">
                <Hash size={14} className="text-slate-400" />
                <span className="text-sm font-black text-slate-700">560103</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Access Management Section */}
      <div className="px-6 mt-8 space-y-4">
        <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Who all can access?</h3>
        
        <div className="space-y-3">
          {[ '7022151313', '9841907133' ].map((number, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center space-x-4 shadow-sm">
              <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                <Phone size={18} className="text-slate-400" />
              </div>
              <span className="text-sm font-bold text-slate-700">{number}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Functional Logout Button */}
      <div className="px-6 mt-10">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full bg-white border border-slate-100 p-5 rounded-2xl flex items-center justify-between group active:bg-red-50 transition-colors shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <span className="text-sm font-black text-slate-400 uppercase tracking-widest group-active:text-red-500">Logout</span>
          </div>
          <LogOut size={20} className="text-slate-400 group-active:text-red-500 transition-colors" />
        </motion.button>
      </div>

      <div className="mt-12 text-center pb-6">
        <p className="text-[9px] font-black text-slate-200 uppercase tracking-[0.3em]">Version 2.0.4 • KSN Intelligence</p>
      </div>
    </motion.div>
  );
};

export default Profile;