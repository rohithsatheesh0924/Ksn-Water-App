import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Receipt, 
  History as HistoryIcon, 
  TrendingDown, 
  HelpCircle, 
  ChevronRight,
  Download,
  Calendar,
  Droplets
} from 'lucide-react';

const Billing = () => {
  const [activeTab, setActiveTab] = useState('Current');

  // Exact data mapping based on your latest UI sample
  const billingHistory = [
    { month: 'January', year: '2026', amount: '2433.14', days: 31, totalL: '12806.00', avg: '413.09' },
    { month: 'December', year: '2025', amount: '4264.66', days: 31, totalL: '22445.60', avg: '724.05' },
    { month: 'November', year: '2025', amount: '3309.00', days: 30, totalL: '18383.31', avg: '612.78' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full pb-32 min-h-screen bg-slate-50/20 font-sans"
    >
      {/* 1. Header Tabs: Current & History */}
      <div className="flex bg-white sticky top-0 z-30 border-b border-slate-100 shadow-sm">
        {['Current', 'History'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-5 flex items-center justify-center space-x-2 relative"
          >
            {tab === 'Current' ? 
              <Receipt size={18} className={activeTab === tab ? 'text-[#1283a0]' : 'text-slate-400'} /> : 
              <HistoryIcon size={18} className={activeTab === tab ? 'text-[#1283a0]' : 'text-slate-400'} />
            }
            <span className={`text-xs font-black tracking-widest uppercase ${activeTab === tab ? 'text-[#1283a0]' : 'text-slate-400'}`}>
              {tab}
            </span>
            {activeTab === tab && (
              <motion.div 
                layoutId="activeBillingTab"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1283a0] rounded-t-full" 
              />
            )}
          </button>
        ))}
      </div>

      <div className="px-5 pt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'Current' ? (
            <motion.div
              key="current"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              className="space-y-6"
            >
              {/* --- Billing Summary Card (Matches Image Exactly) --- */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-50 relative text-center">
                <div className="space-y-1 mb-6">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">February 2026 Billing Summary</h2>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">1-Feb to 18-Feb</p>
                </div>

                <div className="py-2">
                  <h3 className="text-5xl font-black text-[#1283a0] tracking-tighter">₹2019.97</h3>
                  <p className="text-sm font-bold text-slate-500 mt-2">Unbilled Amount</p>
                </div>

                <div className="flex items-center justify-center space-x-2 text-emerald-500 bg-emerald-50 w-fit mx-auto px-4 py-1.5 rounded-full my-6">
                  <TrendingDown size={14} strokeWidth={3} />
                  <span className="text-[11px] font-black uppercase">16.29% decrease from Last Month</span>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <p className="text-slate-400 text-sm font-bold">
                    Projected Total Bill <span className="text-slate-800 ml-1 font-black">~₹3142.17</span>
                  </p>
                </div>
              </div>

              {/* --- Price Breakdown Card (Matches Image Exactly) --- */}
              <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 space-y-5">
                <div className="flex justify-between items-center px-1">
                  <h3 className="font-bold text-slate-800 text-lg tracking-tight">Price Breakdown</h3>
                  <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center text-[#1283a0]">
                    <HelpCircle size={18} />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-50">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-50">
                        <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Usage Slab</th>
                        <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Rate</th>
                        <th className="px-4 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <tr className="group">
                        <td className="px-4 py-5 flex items-center space-x-3">
                          <div className="w-3 h-3 rounded-full bg-emerald-300" />
                          <span className="text-sm font-bold text-slate-700">10631.4L</span>
                        </td>
                        <td className="px-4 py-5 text-sm font-bold text-slate-600 text-center">₹0.19/L</td>
                        <td className="px-4 py-5 text-sm font-black text-slate-800 text-right">₹2019.97</td>
                      </tr>
                      <tr className="bg-slate-50/30">
                        <td colSpan="2" className="px-4 py-4 text-sm font-bold text-slate-800">Total (10631.4L)</td>
                        <td className="px-4 py-4 text-sm font-black text-slate-800 text-right">₹2019.97</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button className="w-full bg-[#1283a0] text-white py-4.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-cyan-900/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2">
                <span>Proceed to Payment</span>
                <ChevronRight size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="history"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              className="space-y-4"
            >
              {billingHistory.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm group">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg tracking-tight">{item.month} {item.year}</h4>
                      <div className="flex items-center space-x-1 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{item.totalL} L</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-[#1283a0] tracking-tighter">₹{item.amount}</p>
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Paid</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <Droplets size={14} className="text-cyan-400" fill="currentColor" />
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Avg. <span className="text-slate-800">{item.avg}</span> L / day</span>
                    </div>
                    <button className="flex items-center gap-1.5 text-[#1283a0] text-[10px] font-black uppercase tracking-widest hover:underline">
                      Invoice <Download size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Billing;