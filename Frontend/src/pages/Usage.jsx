import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RotateCcw, 
  ChevronRight, 
  Droplets, 
  TrendingDown,
  Building2,
  CalendarDays,
  Calendar,
  Zap
} from 'lucide-react';

const UsagePage = () => {
  const [viewType, setViewType] = useState('Daily');
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedMonth, setSelectedMonth] = useState('Feb');

  const days = [
    { day: 'THU', date: 12 }, { day: 'FRI', date: 13 },
    { day: 'SAT', date: 14 }, { day: 'SUN', date: 15 },
    { day: 'MON', date: 16 }, { day: 'TUE', date: 17 },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  // Professional SVG paths
  const dailyPath = "M0,100 C50,95 100,98 150,85 C200,60 250,5 300,60 C350,90 400,105 450,115";
  const monthlyPath = "M0,50 L450,120";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full bg-[#fcfdfe] min-h-screen pb-32 font-sans"
    >
      {/* 1. Classy Header Section */}
      <div className="px-6 pt-8 space-y-6">
        <div className="flex items-center justify-center space-x-2 text-slate-400">
          <Building2 size={14} />
          <span className="text-[11px] font-black uppercase tracking-[0.2em]">Butterfly Apartment 501</span>
        </div>

        <div className="flex justify-between items-center bg-white p-2 rounded-[2rem] shadow-sm border border-slate-50">
          <div className="flex items-center space-x-3 px-4 py-2 bg-slate-50 rounded-2xl cursor-pointer">
            {viewType === 'Daily' ? <CalendarDays size={18} className="text-[#1283a0]" /> : <Calendar size={18} className="text-[#1283a0]" />}
            <span className="text-sm font-black text-slate-800 tracking-tight">
              {viewType === 'Daily' ? 'February' : '2026'}
            </span>
            <ChevronRight size={14} className="text-slate-300" />
          </div>
          
          <div className="bg-slate-100/50 p-1 rounded-2xl flex relative w-36 overflow-hidden">
            <motion.div 
              layout
              className="absolute top-1 bottom-1 w-[46%] bg-[#1283a0] rounded-xl shadow-lg shadow-cyan-900/20"
              animate={{ x: viewType === 'Daily' ? 0 : '108%' }}
            />
            <button 
              onClick={() => setViewType('Daily')}
              className={`relative z-10 flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider transition-colors duration-500 ${viewType === 'Daily' ? 'text-white' : 'text-slate-400'}`}
            >
              Daily
            </button>
            <button 
              onClick={() => setViewType('Monthly')}
              className={`relative z-10 flex-1 py-1.5 text-[10px] font-black uppercase tracking-wider transition-colors duration-500 ${viewType === 'Monthly' ? 'text-white' : 'text-slate-400'}`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* 2. Date/Month Selector */}
        <div className="h-20 flex items-center">
          <AnimatePresence mode="wait">
            {viewType === 'Daily' ? (
              <motion.div 
                key="days"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="flex justify-between w-full"
              >
                {days.map((d) => (
                  <button key={d.date} onClick={() => setSelectedDate(d.date)} className="flex flex-col items-center space-y-2 group">
                    <span className={`text-[9px] font-black tracking-widest ${selectedDate === d.date ? 'text-[#1283a0]' : 'text-slate-300'}`}>{d.day}</span>
                    <div className={`text-xs font-black w-10 h-11 flex items-center justify-center rounded-[1.2rem] transition-all duration-300 ${selectedDate === d.date ? 'bg-white shadow-xl shadow-cyan-100 border border-cyan-50 text-[#1283a0] scale-110' : 'bg-transparent text-slate-400 hover:text-slate-600'}`}>{d.date}</div>
                    {selectedDate === d.date && <motion.div layoutId="dot" className="w-1 h-1 bg-[#1283a0] rounded-full" />}
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="months"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="flex space-x-3 overflow-x-auto no-scrollbar pb-2 px-1"
              >
                {months.map((m) => (
                  <button key={m} onClick={() => setSelectedMonth(m)} className="flex flex-col items-center group">
                     <span className="text-[8px] font-black text-slate-300 mb-1 tracking-widest group-hover:text-slate-400 transition-colors">2026</span>
                     <div className={`px-6 py-3 rounded-2xl font-black text-xs transition-all duration-300 ${selectedMonth === m ? 'bg-white shadow-lg border border-slate-50 text-[#1283a0]' : 'bg-transparent text-slate-400 border border-transparent'}`}>{m}</div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. High-End Usage Card */}
      <div className="px-6 mt-4">
        <motion.div 
          layout
          className="bg-white rounded-[3rem] p-8 shadow-[0_25px_60px_-15px_rgba(18,131,160,0.08)] border border-slate-50/50 relative overflow-hidden group"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1283a0]/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          
          <div className="flex justify-between items-start mb-6">
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Consumption Level</span>
                <div className="flex items-center space-x-1.5 text-emerald-500 font-black">
                   <TrendingDown size={14} />
                   <span className="text-[10px] uppercase tracking-wider">{viewType === 'Daily' ? 'Excellent' : 'Stable'} Range</span>
                </div>
             </div>
             <button className="p-3 bg-slate-50 text-slate-300 rounded-2xl active:rotate-180 transition-transform duration-700">
                <RotateCcw size={16} />
             </button>
          </div>
          
          <div className="flex flex-col items-center py-4">
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#00bcd4]/20 blur-2xl rounded-full scale-150 animate-pulse" />
                <div className="relative p-4 bg-white rounded-3xl shadow-sm border border-cyan-50">
                  <Droplets className="text-[#00bcd4]" size={28} fill="currentColor" />
                </div>
            </div>
            
            <h2 className="text-6xl font-black text-slate-800 tracking-tight flex items-baseline">
              {viewType === 'Daily' ? '235.37' : '10,631.4'} 
              <span className="text-2xl font-black text-slate-300 ml-2">L</span>
            </h2>
            <p className="mt-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Total Volume Recorded</p>
          </div>
          
          {viewType === 'Daily' && (
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-4 bg-slate-50 rounded-[1.5rem] flex items-center justify-center space-x-2 group/btn hover:bg-slate-100 transition-colors"
            >
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover/btn:text-[#1283a0] transition-colors">Detailed Hourly Breakdown</span>
              <ChevronRight size={14} className="text-slate-300 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* 4. Professional Graph Area */}
      <div className="px-10 mt-14">
        <div className="flex justify-between items-center mb-8">
           <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Efficiency Trend</h4>
           <div className="flex items-center space-x-2 text-[#1283a0]">
              <Zap size={12} fill="currentColor" />
              <span className="text-[9px] font-black uppercase tracking-widest">Real-time</span>
           </div>
        </div>
        
        <div className="h-32 w-full relative">
          <svg viewBox="0 0 450 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1283a0" />
              </linearGradient>
            </defs>
            <motion.path 
              animate={{ d: viewType === 'Daily' ? dailyPath : monthlyPath }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round"
            />
            {/* Active Highlight Point */}
            <circle cx="95%" cy={viewType === 'Daily' ? "115" : "120"} r="6" fill="#1283a0" stroke="white" strokeWidth="3" className="shadow-lg" />
          </svg>
          
          <div className="flex justify-between mt-6 px-1">
            {viewType === 'Daily' 
              ? [13, 14, 15, 16, 17, 18, 19].map(n => <span key={n} className="text-[9px] font-black text-slate-300">{n}</span>)
              : ['Jan', 'Feb'].map(m => <span key={m} className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{m}</span>)
            }
          </div>
        </div>
      </div>

      {/* 5. Clean Metrics Grid */}
      <div className="px-6 mt-12 grid grid-cols-3 gap-3">
        {[
          { label: viewType === 'Daily' ? 'Personal' : 'Monthly', val: viewType === 'Daily' ? '659' : '19.7k', color: 'text-[#1283a0]' },
          { label: 'Community', val: viewType === 'Daily' ? '367' : '11.0k', color: 'text-slate-800' },
          { label: 'Global', val: viewType === 'Daily' ? '405' : '12.1k', color: 'text-slate-800' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-1">
            <div className="flex items-baseline space-x-0.5">
              <span className={`font-black ${stat.color} text-base tracking-tighter`}>{stat.val}</span>
              <span className="text-[8px] text-slate-300 font-bold uppercase">L</span>
            </div>
            <p className="text-[7px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsagePage;