import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { ShieldCheck, CheckCircle, Award, Microscope, Activity } from 'lucide-react';

const certifications = [
  { title: "WHO-GMP Certified", desc: "World Health Organization Good Manufacturing Practices for optimal consistency.", icon: <ShieldCheck size={36} /> },
  { title: "ISO 9001:2015", desc: "International standards for our corporate and facility quality management.", icon: <Award size={36} /> },
  { title: "GLP Compliant", desc: "Good Laboratory Practice safeguarding accuracy in our clinical analysis.", icon: <Microscope size={36} /> },
  { title: "Export Council", desc: "Active member of national pharmaceutical export promotion bodies.", icon: <GlobeIcon /> }
];

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

const Quality = () => {
  return (
    <div className="min-h-screen bg-brand-pearl pt-20">
      <Seo
        title="Quality Standards"
        description="Discover Protect Life Sciences quality assurance, WHO-GMP certification, and rigorous manufacturing controls."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Quality', url: '/quality' }
        ]}
      />
      
      {/* Header */}
      <section className="py-20 relative text-center px-4 bg-brand-cream/35 border-b border-brand-sage/10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-20 h-20 mx-auto bg-brand-mint rounded-full flex items-center justify-center mb-6 border border-brand-sage/20 shadow-sm">
            <ShieldCheck size={40} className="text-brand-emerald" />
          </div>
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
            Quality Assurance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mt-3 mb-6">
            Uncompromising <span className="text-gradient">Quality Standards</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            At Protect Life Sciences, quality is not just a department—it is the foundation of our entire manufacturing philosophy, from ingredient sourcing to distribution.
          </p>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-2xl text-center border-t-4 border-t-brand-emerald bg-white shadow-sm"
              >
                <div className="text-brand-emerald mb-6 flex justify-center">{cert.icon}</div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-3">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/60">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Process */}
      <section className="py-24 bg-brand-cream/20 border-y border-brand-sage/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-mint/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/laboratory.png" alt="Quality Control Lab" loading="lazy" className="rounded-2xl shadow-md border border-brand-sage/20 max-h-[380px] w-full object-cover" />
            </div>
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
                Testing Protocols
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal leading-tight">Stringent Testing & Compliance</h2>
              <p className="text-brand-charcoal/70 text-sm sm:text-base leading-relaxed">
                Our ultra-modern quality control laboratories are equipped with advanced analytical instruments to ensure that every raw material, active ingredient, and finished batch meets international pharmacopeia standards.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start">
                  <Activity className="text-brand-emerald mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-brand-charcoal mb-1">In-Process Quality Control</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60">Continuous monitoring during manufacturing to prevent deviations and variations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Microscope className="text-brand-emerald mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-brand-charcoal mb-1">Microbiological Testing</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60">Rigorous sterility testing for all injectables inside Class 100 sterile environments.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-brand-emerald mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-brand-charcoal mb-1">Climatic Zone Stability</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60">Comprehensive stability testing for varied global climates to guarantee safety margins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Safety */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
            Safety First
          </span>
          <h2 className="text-3xl font-extrabold text-brand-charcoal mt-3 mb-8">Commitment to Patient Safety</h2>
          <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden text-left bg-white/80 border border-brand-sage/20 shadow-md">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-mint/30 rounded-full blur-3xl"></div>
            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed relative z-10 mb-6">
              Safety is our ultimate priority. From procurement of active pharmaceutical ingredients (APIs) to the final packaging, every step is strictly documented and validated. Our pharmacovigilance team actively monitors post-market safety to ensure complete patient protection.
            </p>
            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed relative z-10">
              By adhering strictly to WHO-GMP guidelines, we eliminate risks of contamination, cross-contamination, and mix-ups, ensuring that every product bearing the <strong className="text-brand-emerald">Protect Life Sciences</strong> name is safe, pure, and effective.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Quality;
