import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-brand-pearl via-brand-pearl to-brand-cream/20 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Decorative animated background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-sage/8 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-mint/15 rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-brand-emerald/5 to-transparent rounded-full blur-3xl"></div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Premium Logo animation */}
          <motion.div 
            className="w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-emerald/10 to-brand-mint/10 border border-brand-emerald/20 flex items-center justify-center mb-10 relative shadow-lg"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(35, 95, 69, 0.1)",
                "0 0 40px rgba(35, 95, 69, 0.2)",
                "0 0 20px rgba(35, 95, 69, 0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl border-t-2 border-r-2 border-brand-emerald/30"
            />
            <motion.img 
              src={logo}
              alt="Protect Life Sciences Logo"
              className="w-20 h-20 object-contain"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-brand-charcoal tracking-[0.2em] mb-2 uppercase"
          >
            Protect <span className="text-gradient">Life</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-brand-emerald text-xs tracking-[0.3em] uppercase mb-14 font-bold"
          >
            Premium Pharmaceuticals
          </motion.p>

          {/* Premium Progress Bar */}
          <div className="w-72 h-2 bg-brand-mint/30 rounded-full overflow-hidden relative shadow-md border border-brand-mint/40">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-emerald via-brand-gold to-brand-emerald"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          <div className="mt-4 text-brand-sage text-sm font-mono tracking-widest font-bold">
            {Math.min(progress, 100)}%
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
