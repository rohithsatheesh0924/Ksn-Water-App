import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  UserPlus, 
  Mail, 
  User, 
  Lock, 
  Phone, 
  Building 
} from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  
  // State management for personal details
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    apartment: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // In a real app, you would validate and save data here
    navigate('/usage');
  };

  // Classy staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-full p-8 bg-white flex flex-col"
    >
      {/* Top Navigation */}
      <motion.button 
        variants={itemVariants}
        onClick={() => navigate('/login')} 
        className="mb-8 p-3 w-fit bg-slate-50 text-slate-400 hover:text-[#1283a0] rounded-2xl transition-all"
      >
        <ArrowLeft size={20} />
      </motion.button>
      
      {/* Header Section */}
      <motion.div variants={itemVariants} className="mb-10">
        <h1 className="text-4xl font-black text-slate-800 leading-tight">Join<br/>Intelligence.</h1>
        <p className="text-slate-400 mt-2 font-medium">Enter your details to begin monitoring.</p>
      </motion.div>

      {/* Form Fields */}
      <form onSubmit={handleCreateAccount} className="space-y-5">
        <motion.div variants={itemVariants} className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1283a0] transition-colors" size={18} />
            <input 
              required
              name="fullName"
              type="text" 
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#1283a0] focus:ring-4 focus:ring-cyan-500/5 transition-all" 
              placeholder="John Doe"
              onChange={handleInputChange}
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1283a0] transition-colors" size={18} />
            <input 
              required
              name="email"
              type="email" 
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#1283a0] focus:ring-4 focus:ring-cyan-500/5 transition-all" 
              placeholder="john@example.com"
              onChange={handleInputChange}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={itemVariants} className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
            <div className="relative group">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                required
                name="phone"
                type="tel" 
                className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white transition-all text-sm" 
                placeholder="+91..."
                onChange={handleInputChange}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Apartment</label>
            <div className="relative group">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                required
                name="apartment"
                type="text" 
                className="w-full pl-10 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white transition-all text-sm" 
                placeholder="No. 501"
                onChange={handleInputChange}
              />
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="space-y-1.5">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Set Password</label>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#1283a0] transition-colors" size={18} />
            <input 
              required
              name="password"
              type="password" 
              className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#1283a0] transition-all" 
              placeholder="••••••••"
              onChange={handleInputChange}
            />
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#1283a0] text-white font-black py-4 rounded-2xl shadow-xl shadow-cyan-900/20 mt-6 flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-xs"
        >
          CREATE ACCOUNT <UserPlus size={18} />
        </motion.button>
      </form>

      {/* Footer Info */}
      <motion.p variants={itemVariants} className="mt-8 text-center text-slate-400 text-[11px] font-medium">
        Already have an account? 
        <button onClick={() => navigate('/login')} className="text-[#1283a0] font-black ml-1">Sign In</button>
      </motion.p>
    </motion.div>
  );
};

export default Register;