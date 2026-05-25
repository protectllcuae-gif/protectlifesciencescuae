import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, Ship, Plane, TrendingUp, CheckCircle } from 'lucide-react';
import Flag from '../components/Flag';
import Seo from '../components/Seo';
import { getWhatsAppUrl } from '../config';

const countries = [
  "India", "Nepal", "UAE", "UK", "Somalia", 
  "Namibia", "Angola", "Senegal", "South Sudan", "Chad"
];

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Exports = () => {
  const waMessage = "Hello Protect Life Sciences, I am looking to initiate an export inquiry for my region.";
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="min-h-screen bg-brand-pearl pt-20">
      <Seo
        title="Exports"
        description="Trusted international pharmaceutical exports from India with secure logistics, dossier support, and UAE market expertise."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Exports', url: '/exports' }
        ]}
      />
      
      {/* Hero / Global Vision */}
      <section className="relative py-24 overflow-hidden bg-brand-cream/35 border-b border-brand-sage/10">
        <div className="absolute inset-0 z-0">
          <img src="/world-map.png" alt="Global Export Map" loading="lazy" className="w-full h-full object-cover opacity-15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-pearl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 mx-auto bg-brand-mint rounded-full flex items-center justify-center mb-8 border border-brand-sage/30 shadow-[0_4px_15px_rgba(35,95,69,0.05)]"
          >
            <Globe2 size={40} className="text-brand-emerald" />
          </motion.div>
          
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Global Supply Operations
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal mb-6"
          >
            Trusted International <span className="text-gradient">Distribution</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-brand-charcoal/70 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Expanding boundaries with our world-class pharmaceutical exports. Delivering sterile critical care injections, antibiotics, and premium wellness formulations directly to key global markets.
          </motion.p>
        </div>
      </section>

      {/* Export Statistics */}
      <section className="py-12 relative z-20 -mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-card p-8 rounded-2xl text-center border-t-4 border-t-brand-emerald bg-white shadow-md">
              <h3 className="text-4xl font-extrabold text-brand-emerald mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </h3>
              <p className="text-brand-gold uppercase tracking-widest text-xs font-bold">Export Countries</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center border-t-4 border-t-brand-emerald bg-white shadow-md">
              <h3 className="text-4xl font-extrabold text-brand-emerald mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </h3>
              <p className="text-brand-gold uppercase tracking-widest text-xs font-bold">Approved Formulations</p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center border-t-4 border-t-brand-emerald bg-white shadow-md">
              <h3 className="text-4xl font-extrabold text-brand-emerald mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </h3>
              <p className="text-brand-gold uppercase tracking-widest text-xs font-bold">Logistics Dossier Clear</p>
            </div>

          </div>
        </div>
      </section>

      {/* Dubai UAE Spotlight Hub (Incorporating dubai-night.jpg) */}
      <section className="py-20 relative overflow-hidden bg-brand-cream/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-brand-sage/20 bg-white p-2">
              <img 
                src="/dubai-night.jpg" 
                alt="Dubai UAE Middle East Export Distribution Hub" 
                className="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow"
              />
              <div className="absolute top-6 left-6 bg-brand-emerald/90 backdrop-blur text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow">
                UAE & Gulf Distribution Node
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
                Middle East Distribution
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal leading-tight">
                Our Dubai Supply Operations
              </h2>
              <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed">
                Dubai serves as the primary international logistics node for **Protect Life Sciences**. Our strong distribution presence in the UAE enables accelerated clearing and forwarding processes for African markets (Somalia, Senegal, Angola) and neighboring Middle Eastern territories.
              </p>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-emerald mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-brand-charcoal/80">Accelerated customs clearing for Gulf Cooperation Council regions.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-emerald mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-brand-charcoal/80">Premium cold-chain warehouse facilities in close proximity to major ports.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Presence - Countries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
              Network Footprint
            </span>
            <h2 className="text-3xl font-extrabold text-brand-charcoal mt-3 mb-4">Export Destinations</h2>
            <p className="text-brand-charcoal/70 max-w-2xl mx-auto text-sm sm:text-base">Providing essential therapeutic support to public and private sector networks in these nations.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {countries.map((country, idx) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="px-4 py-5 glass-panel border border-brand-sage/20 rounded-3xl bg-white flex items-center gap-3 shadow-sm hover:border-brand-emerald/40 transition-colors duration-300"
              >
                <Flag country={country} />
                <span className="text-sm sm:text-base font-bold text-brand-charcoal">{country}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="py-24 relative overflow-hidden bg-brand-cream/20 border-t border-brand-sage/10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-mint/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 bg-brand-mint/50 blur-3xl opacity-40 rounded-full"></div>
              <img src="/sterile-injections.png" alt="Export Logistics Sterile Pack" className="relative rounded-3xl border border-brand-sage/20 shadow-lg w-full max-h-[380px] object-cover" />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-card p-5 rounded-2xl flex items-center gap-3.5 bg-white border border-brand-sage/20 shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-emerald">
                  <Ship size={20} />
                </div>
                <div>
                  <p className="text-brand-charcoal font-bold text-sm">Sea Freight</p>
                  <p className="text-[10px] text-brand-charcoal/60">Bulk Logistics</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -left-6 glass-card p-5 rounded-2xl flex items-center gap-3.5 bg-white border border-brand-sage/20 shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-emerald">
                  <Plane size={20} />
                </div>
                <div>
                  <p className="text-brand-charcoal font-bold text-sm">Air Freight</p>
                  <p className="text-[10px] text-brand-charcoal/60">Express Injections</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <TrendingUp className="text-brand-emerald w-12 h-12 mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-6">Seamless Export Logistics</h2>
              <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed mb-6">
                Our logistics framework handles complex global transit parameters. From climate-controlled cold storage packs for delicate injectables to rapid distribution setups for vitamins and gummies, we safeguard the stability of our active molecules.
              </p>
              <ul className="space-y-4 mb-8 text-xs sm:text-sm">
                <li className="flex items-center text-brand-charcoal/80 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald mr-3 flex-shrink-0"></div>
                  Full export dossier documentation (CTD, ACTD formats).
                </li>
                <li className="flex items-center text-brand-charcoal/80 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald mr-3 flex-shrink-0"></div>
                  COPP (Certificate of Pharmaceutical Product) assistance.
                </li>
                <li className="flex items-center text-brand-charcoal/80 font-medium">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald mr-3 flex-shrink-0"></div>
                  Validated temperature-monitored shipping crates.
                </li>
              </ul>
              
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Inquire For Export
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Exports;
