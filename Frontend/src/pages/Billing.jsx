import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Receipt, 
  History as HistoryIcon, 
  TrendingUp, 
  HelpCircle, 
  ArrowRight,
  Download,
  Calendar,
  Droplets
} from 'lucide-react';

const Billing = () => {
  const [activeTab, setActiveTab] = useState('Current');

  // Exact data mapping based on your sample history images
  const billingHistory = [
    { month: 'December', year: '2025', amount: '4264.66', days: 31, totalL: '22445.60', avg: '724.05' },
    { month: 'November', year: '2025', amount: '3309.00', days: 30, totalL: '18383.31', avg: '612.78' },
    { month: 'October', year: '2025', amount: '3550.25', days: 31, totalL: '19450.25', avg: '627.42' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full pb-28 min-h-screen bg-slate-50/30"
    >
      {/* Top Navigation Tabs */}
      <div className="flex bg-white sticky top-0 z-30 border-b border-slate-100 shadow-sm">
        {['Current', 'History'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-4 flex items-center justify-center space-x-2 relative"
          >
            {tab === 'Current' ? 
              <Receipt size={18} className={activeTab === tab ? 'text-[#1283a0]' : 'text-slate-400'} /> : 
              <HistoryIcon size={18} className={activeTab === tab ? 'text-[#1283a0]' : 'text-slate-400'} />
            }
            <span className={`text-sm font-black tracking-tight uppercase ${activeTab === tab ? 'text-[#1283a0]' : 'text-slate-400'}`}>
              {tab}
            </span>
            {activeTab === tab && (
              <motion.div 
                layoutId="activeBillingTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1283a0]" 
              />
            )}
          </button>
        ))}
      </div>

      <div className="px-5 pt-6">
        <AnimatePresence mode="wait">
          {activeTab === 'Current' ? (
            <motion.div
              key="current"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="space-y-6"
            >
              {/* Billing Summary Card - Your Perfect Look */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50 relative overflow-hidden text-center">
                <div className="space-y-1 mb-4">
                  <h2 className="text-xl font-black text-slate-800 tracking-tight">January 2026 Billing Summary</h2>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">1-Jan to 20-Jan</p>
                </div>

                <div className="py-4">
                  <h3 className="text-5xl font-black text-[#1283a0] tracking-tighter">₹2433.14</h3>
                  <p className="text-sm font-bold text-slate-500 mt-1">Unbilled Amount</p>
                </div>

                <div className="flex items-center justify-center space-x-1.5 text-red-500 bg-red-50 w-fit mx-auto px-4 py-1.5 rounded-full mb-6">
                  <TrendingUp size={14} strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase">0% Increase from Last Month</span>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <div className="flex justify-between items-center text-slate-400 text-sm font-bold">
                    <span>Projected Total Bill</span>
                    <span className="text-slate-800 font-black">~₹3771.37</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown Section */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 space-y-4">
                <div className="flex justify-between items-center px-1">
                  <h3 className="font-black text-slate-800 tracking-tight">Price Breakdown</h3>
                  <HelpCircle size={18} className="text-[#1283a0] opacity-60" />
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-50">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/80">
                        <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Usage Slab</th>
                        <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider text-center">Rate</th>
                        <th className="px-4 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <tr>
                        <td className="px-4 py-4 flex items-center space-x-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                          <span className="text-sm font-bold text-slate-700">12806L</span>
                        </td>
                        <td className="px-4 py-4 text-sm font-bold text-slate-700 text-center">₹0.19/L</td>
                        <td className="px-4 py-4 text-sm font-black text-slate-800 text-right">₹2433.14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button className="w-full bg-[#1283a0] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-cyan-900/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
                <span>Pay Unbilled Amount</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-6"
            >
              {/* --- MONTHLY EXPENSE TREND GRAPH --- */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100">
                <h3 className="font-black text-slate-800 text-lg mb-6 tracking-tight">Monthly Expense Trend</h3>
                
                <div className="h-44 w-full relative flex items-end justify-between px-2">
                  {/* Grid/Price Markers */}
                  <div className="absolute inset-0 flex flex-col justify-between py-2">
                    {[5118, 4000, 3000, 2000, 1000, 0].map(val => (
                      <div key={val} className="flex items-center text-[10px] text-slate-300 w-full">
                        <span className="w-10">₹{val}</span>
                        <div className="flex-1 border-t border-slate-50 ml-2" />
                      </div>
                    ))}
                  </div>

                  {/* SVG Wave Trend Line */}
                  <svg className="absolute inset-0 w-full h-full pt-2 pb-6 pl-10 pr-2 overflow-visible">
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                      d="M0,45 C40,55 80,65 120,75 T240,45 T360,60 T480,25" 
                      fill="none" 
                      stroke="#22d3ee" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    {[0, 25, 50, 75, 100].map((pos, i) => (
                      <circle key={i} cx={`${pos}%`} cy={`${[45, 65, 80, 50, 25][i]}%`} r="4" fill="#22d3ee" stroke="white" strokeWidth="2" />
                    ))}
                  </svg>
                  
                  {/* Month Labels */}
                  <div className="absolute bottom-[-15px] left-10 right-2 flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                    <span>Jul</span><span>Aug</span><span>Sept</span><span>Oct</span><span>Nov</span><span>Dec</span>
                  </div>
                </div>
              </div>

              {/* --- HISTORY CARDS --- */}
              <div className="space-y-4">
                {billingHistory.map((item, index) => (
                  <div key={index} className="bg-white p-5 rounded-[1.5rem] border border-slate-100 shadow-sm space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-black text-slate-800 text-lg tracking-tight">{item.month} {item.year}</h4>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{item.totalL}L</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-300 uppercase">{item.days} days</span>
                        <p className="text-2xl font-black text-[#1283a0] tracking-tighter">₹{item.amount}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <Droplets size={14} className="text-cyan-400 fill-cyan-400" />
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">Avg. <span className="font-black text-slate-800">{item.avg}</span> L / day</span>
                      </div>
                      <button className="flex items-center gap-1.5 text-[#1283a0] text-[10px] font-black uppercase tracking-widest active:opacity-50 transition-opacity">
                        Download <Download size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Billing;