import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { Package, ShieldCheck, Factory, Handshake, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../config';

const capabilities = [
  { icon: <Factory size={32} />, title: "Bulk Manufacturing", desc: "High-capacity production lines for large volume orders with consistent quality." },
  { icon: <ShieldCheck size={32} />, title: "WHO-GMP Compliance", desc: "Strict adherence to global quality and safety manufacturing standards." },
  { icon: <Package size={32} />, title: "Packaging Solutions", desc: "Customized primary and secondary packaging options for your brand." },
  { icon: <Handshake size={32} />, title: "Custom Branding", desc: "End-to-end white labeling services to bring your pharmaceutical brand to life." },
];

const timeline = [
  { step: "01", title: "Consultation & Scope", desc: "We align on your product specifications, volume, certifications, and target markets." },
  { step: "02", title: "Formulation R&D", desc: "Our laboratory teams develop or optimize formulations to meet global efficacy guidelines." },
  { step: "03", title: "Testing & Validation", desc: "Rigorous quality control validation, stability studies, and prototype testing." },
  { step: "04", title: "Commercial Production", desc: "High-speed sterile filling, vial sealing, or packaging in our certified facility." },
  { step: "05", title: "Logistics & Customs", desc: "Proper export documentation, COPP dossier clearance, and cold-chain forwarding." },
];

const Manufacturing = () => {
  const waMessage = "Hello Protect Life Sciences, I would like to discuss contract third-party manufacturing opportunities with you.";
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="min-h-screen bg-brand-pearl pt-20">
      <Seo
        title="Manufacturing Services"
        description="World-class WHO-GMP contract manufacturing services, custom packaging, and export-ready pharmaceutical production."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Manufacturing', url: '/manufacturing' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-cream/35 overflow-hidden border-b border-brand-sage/10">
        <div className="absolute inset-0 z-0">
          <img src="/manufacturing.png" alt="Manufacturing Facility" loading="lazy" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-pearl to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-brand-mint border border-brand-sage/30 text-brand-emerald text-xs font-bold uppercase tracking-wider">
              Partnership Opportunities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal mb-6">
              World-Class <span className="text-gradient">Third-Party Manufacturing</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mb-8">
              Leverage our advanced WHO-GMP compliant facility in India to manufacture premium sterile injectables, critical care range, and wellness formulations. We offer comprehensive services from custom packaging designs to dossier support.
            </p>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              Partner With Us <ChevronRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-brand-charcoal mt-3 mb-4">Contract Manufacturing Services</h2>
            <p className="text-brand-charcoal/70 max-w-2xl mx-auto text-sm sm:text-base">Comprehensive solutions tailored to meet the standards of international pharmaceutical distributors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 text-center group bg-white border border-brand-sage/20"
              >
                <div className="w-16 h-16 mx-auto bg-brand-sage/10 rounded-full flex items-center justify-center text-brand-emerald mb-6 group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal mb-3">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className="py-20 bg-brand-cream/20 border-y border-brand-sage/10 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-mint/20 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                Execution Model
              </span>
              <h2 className="text-3xl font-extrabold text-brand-charcoal mb-6">Our Process Workflow</h2>
              <p className="text-brand-charcoal/70 mb-8 leading-relaxed text-sm sm:text-base">
                We maintain an optimized commercial manufacturing model. Every step from the selection of active raw ingredients to testing, packaging, and logistics is tracked strictly to ensure quality and regulatory compliance.
              </p>
              <img src="/laboratory.png" alt="Laboratory Reconstitution" loading="lazy" className="w-full h-72 object-cover rounded-2xl border border-brand-sage/20 shadow-md" />
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-emerald flex items-center justify-center text-brand-emerald font-bold group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    {idx !== timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-brand-sage/20 mt-2 group-hover:bg-brand-emerald/40 transition-colors"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-bold text-brand-charcoal mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section id="partner" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ShieldCheck size={60} className="text-brand-emerald mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mb-6">Partner With Us</h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 mb-10 max-w-2xl mx-auto">
            Expand your healthcare product line with our trusted, GMP-regulated manufacturing facility. Inquire now to secure capacity schedules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Send WhatsApp Inquiry
            </a>
            <Link to="/contact" className="btn-outline flex items-center justify-center">
              Contact Sales Team
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-brand-charcoal/60 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-emerald" /> WHO-GMP Standards</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-emerald" /> Strict Sterile Facility</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-emerald" /> Export Pack Options</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Manufacturing;
