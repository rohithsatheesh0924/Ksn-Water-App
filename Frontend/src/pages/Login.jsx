import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === 'Admin' && password === 'Admin123') {
      navigate('/usage');
    } else {
      setError('Invalid Credentials. Please use Admin / Admin123');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="min-h-full flex flex-col bg-white">
      <div className="h-64 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-50 flex items-center justify-center relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div variants={itemVariants} className="z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-[2rem] flex items-center justify-center shadow-2xl mb-4">
             <span className="text-white text-4xl font-black tracking-tighter">KSN</span>
          </div>
          <h2 className="text-white font-bold text-xl tracking-wide uppercase opacity-90">Intelligence</h2>
        </motion.div>
      </div>

      <motion.div 
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 80 } }
        }}
        className="flex-1 px-8 pt-10 pb-8 bg-white rounded-t-[3rem] -mt-12 z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]"
      >
        <motion.div variants={itemVariants} className="mb-10 text-center">
          <h1 className="text-3xl font-black text-slate-800">Sign In</h1>
          <p className="text-slate-400 text-sm mt-1 font-medium">Access your account dashboard</p>
        </motion.div>

        <form onSubmit={handleLogin} className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Admin ID</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Enter Admin ID"
                className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-all"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex justify-between items-center px-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-xs font-bold text-blue-600">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </motion.div>

          {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold text-center">{error}</motion.p>}

          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#1283a0] text-white font-black py-4 rounded-2xl shadow-xl shadow-cyan-900/20 flex items-center justify-center space-x-2"
          >
            <span>LOGIN NOW</span>
            <ShieldCheck size={20} />
          </motion.button>
        </form>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium">
            New to KSN? <button onClick={() => navigate('/register')} className="text-[#1283a0] font-black">Create Account</button>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login;