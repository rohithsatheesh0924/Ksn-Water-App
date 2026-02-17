import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RotateCcw, 
  ChevronRight, 
  Droplets, 
  ArrowUpRight, 
  LayoutGrid, 
  Calendar as CalendarIcon 
} from 'lucide-react';

const UsagePage = () => {
  const [viewType, setViewType] = useState('Daily');
  const [selectedDate, setSelectedDate] = useState(21);
  const [selectedMonth, setSelectedMonth] = useState('January');

  const days = [
    { day: 'FRI', date: 16 },
    { day: 'SAT', date: 17 },
    { day: 'SUN', date: 18 },
    { day: 'MON', date: 19 },
    { day: 'TUE', date: 20 },
    { day: 'TODAY', date: 21 },
  ];

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  // Graph Data Points (Simulated for Daily vs Monthly)
  const graphPath = viewType === 'Daily' 
    ? "M0,80 C50,75 100,90 150,60 C200,30 250,100 300,50 C350,20 400,60 450,40"
    : "M0,90 C50,40 100,20 150,50 C200,80 250,30 300,60 C350,90 400,10 450,30";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full pb-12 overflow-x-hidden"
    >
      {/* Header Branding */}
      <div className="px-6 pt-6 pb-4 space-y-6">
        <div className="flex items-center justify-center space-x-2 text-slate-500 bg-slate-100/80 py-2 rounded-full w-fit mx-auto px-5 border border-slate-200/50">
          <LayoutGrid size={13} className="text-blue-600" />
          <span className="text-[10px] font-black tracking-widest uppercase">Butterfly Apt 501</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-slate-800">
            <CalendarIcon size={18} className="text-blue-600" />
            <span className="text-lg font-black tracking-tight">{selectedMonth} 2026</span>
          </div>
          
          <div className="bg-slate-100 p-1 rounded-2xl flex border border-slate-200/50 relative">
            <motion.div 
              layout
              className="absolute top-1 bottom-1 w-[48%] bg-white rounded-xl shadow-sm border border-slate-100"
              animate={{ x: viewType === 'Daily' ? 0 : '100%' }}
            />
            <button 
              onClick={() => setViewType('Daily')}
              className={`relative z-10 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${viewType === 'Daily' ? 'text-slate-800' : 'text-slate-400'}`}
            >
              Daily
            </button>
            <button 
              onClick={() => setViewType('Monthly')}
              className={`relative z-10 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${viewType === 'Monthly' ? 'text-slate-800' : 'text-slate-400'}`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Scrollable Selector */}
        <div className="flex justify-between items-center overflow-x-auto no-scrollbar py-2">
          <AnimatePresence mode="wait">
            {viewType === 'Daily' ? (
              <motion.div 
                key="daily-list"
                initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                className="flex justify-between w-full"
              >
                {days.map((d) => (
                  <button 
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className="flex flex-col items-center min-w-[50px]"
                  >
                    <span className={`text-[9px] font-black mb-2 ${selectedDate === d.date ? 'text-blue-600' : 'text-slate-300'}`}>{d.day}</span>
                    <div className={`w-11 h-12 flex items-center justify-center rounded-2xl font-bold transition-all ${selectedDate === d.date ? 'bg-[#1283a0] text-white shadow-lg shadow-cyan-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}>
                      {d.date}
                    </div>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="monthly-list"
                initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                className="flex space-x-4 w-full"
              >
                {months.map((m) => (
                  <button 
                    key={m}
                    onClick={() => setSelectedMonth(m === 'Jan' ? 'January' : m)}
                    className={`px-6 py-3 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${selectedMonth.startsWith(m) ? 'bg-[#1283a0] text-white shadow-lg shadow-cyan-100' : 'bg-slate-50 text-slate-400 border border-slate-100'}`}
                  >
                    {m}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Usage Card */}
      <div className="px-5">
        <motion.div 
          layout
          className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 relative text-center"
        >
          <RotateCcw size={18} className="absolute top-6 right-6 text-slate-300 cursor-pointer" />
          
          <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
            {viewType === 'Daily' ? `Consumption for ${selectedMonth} ${selectedDate}` : `Consumption for Year 2026`}
          </span>
          
          <div className="flex items-center justify-center space-x-3 mt-3">
            <div className="p-3 bg-cyan-50 rounded-2xl">
              <Droplets className="text-[#00bcd4]" size={26} fill="currentColor" />
            </div>
            <h2 className="text-5xl font-black text-slate-800 tracking-tighter">
              {viewType === 'Daily' ? '519.05' : '8,240.12'}
              <span className="text-2xl ml-1 font-bold text-slate-400 tracking-normal">L</span>
            </h2>
          </div>
          
          <div className="flex items-center justify-center space-x-1.5 text-red-500 mt-5 bg-red-50 w-fit mx-auto px-4 py-1.5 rounded-full">
            <ArrowUpRight size={14} strokeWidth={3} />
            <span className="text-[10px] font-black uppercase">39.5% Above Average</span>
          </div>
        </motion.div>
      </div>

      {/* --- PROFESSIONAL GRAPH SECTION --- */}
      <div className="px-8 mt-10 relative">
        <div className="h-32 w-full flex items-end justify-between relative">
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1283a0" />
              </linearGradient>
            </defs>
            {/* Animated Path */}
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ d: graphPath, pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="3.5" 
              strokeLinecap="round"
            />
            {/* Active Data Point Glow */}
            <circle cx="95%" cy="38%" r="6" fill="#1283a0" className="animate-ping opacity-20" />
            <circle cx="95%" cy="38%" r="4" fill="#1283a0" stroke="white" strokeWidth="2" />
          </svg>
          
          {/* Chart X-Axis Labels */}
          {[15, 16, 17, 18, 19, 20, 21].map(n => (
            <span key={n} className="text-[10px] font-black text-slate-300 z-10">{n}</span>
          ))}
        </div>
        <p className="text-center text-[9px] font-black text-slate-200 mt-4 tracking-[0.3em] uppercase opacity-50">Trend Analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="px-5 mt-10 grid grid-cols-3 gap-3">
        {['Personal', 'Community', 'Global'].map((label, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100/50 p-4 rounded-[1.5rem] flex flex-col items-center text-center shadow-sm">
            <span className="font-black text-slate-800 text-lg tracking-tighter">
              {i === 0 ? '748' : i === 1 ? '372' : '405'}
            </span>
            <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest mt-1">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsagePage;