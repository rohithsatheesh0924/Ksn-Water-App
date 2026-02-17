import React from 'react';
import { motion } from 'framer-motion';
import { 
  Headphones, 
  ChevronRight, 
  MessageSquarePlus, 
  ClipboardList, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      id: 1,
      title: 'Raise a Support Ticket',
      description: 'Let us know any specific issues that you experience',
      icon: <MessageSquarePlus size={22} />,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'My Tickets',
      description: 'Track the updates of all your support requests.',
      icon: <ClipboardList size={22} />,
      color: 'text-cyan-500',
      bg: 'bg-cyan-50'
    },
    {
      id: 3,
      title: 'Troubleshooting Guide (FAQs)',
      description: 'Find quick solutions to common water meter issues.',
      icon: <HelpCircle size={22} />,
      color: 'text-teal-500',
      bg: 'bg-teal-50'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col w-full pb-32 min-h-screen font-sans"
    >
      {/* Page Title */}
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Support</h1>
      </div>

      {/* Hero Header Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-6 pt-10 pb-12 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-[#1283a0] rounded-full flex items-center justify-center shadow-xl shadow-cyan-100 mb-6">
          <Headphones size={36} className="text-white" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Hi, how can we help?</h2>
        <p className="text-slate-400 text-sm mt-2 font-medium">Our team is standing by to assist you</p>
      </div>

      {/* Support Options List */}
      <div className="px-6 -mt-6">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden divide-y divide-slate-50">
          {supportOptions.map((option) => (
            <motion.button
              key={option.id}
              whileTap={{ backgroundColor: '#f8fafc' }}
              className="w-full flex items-center justify-between p-6 transition-colors text-left group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${option.bg} ${option.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {option.icon}
                </div>
                <div className="pr-4">
                  <h3 className="text-sm font-black text-slate-800 tracking-tight">{option.title}</h3>
                  <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-1">
                    {option.description}
                  </p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-200 group-hover:text-[#1283a0] transition-colors flex-shrink-0" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-auto px-6 pt-12 pb-6 flex flex-col items-center opacity-60">
        <div className="flex items-center space-x-1 mb-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">A Product of</span>
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">i-Water</span>
        </div>
        <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">KSN Intelligence v2.0.4</p>
      </div>
    </motion.div>
  );
};

export default Support;