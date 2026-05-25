import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppCTA from './WhatsAppCTA';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-pearl selection:bg-brand-emerald selection:text-white">
      <ScrollToTop />
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-grow pt-20"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppCTA />
    </div>
  );
};

export default Layout;
