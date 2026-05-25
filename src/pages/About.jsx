import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { ShieldCheck, Globe2, Award, Zap, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const advantages = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-emerald" />,
      title: "Manufacturing Excellence",
      desc: "High-quality production in India with rigorous quality control."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-brand-emerald" />,
      title: "Regional Expertise",
      desc: "Strong UAE presence for localized support and trusted financial transactions."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-emerald" />,
      title: "Cost Efficiency",
      desc: "Direct shipping means lower overheads and better pricing for you."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-emerald" />,
      title: "Global Logistics",
      desc: "End-to-end solutions for fast, reliable delivery to your doorstep."
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-emerald" />,
      title: "Relationship-Driven",
      desc: "A focus on dedicated customer service and long-term business growth."
    }
  ];

  return (
    <div className="w-full bg-brand-pearl min-h-screen pt-20">
      <Seo
        title="About Us"
        description="Why choose Protect Life Sciences for premium pharmaceutical manufacturing, global distribution, and trusted UAE-India partnerships."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' }
        ]}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-brand-sage/10 bg-brand-cream/35">
        <div className="absolute inset-0 z-0 opacity-15 bg-[url('/laboratory.png')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Value Proposition
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal mb-6"
          >
            Why <span className="text-gradient">Choose Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-charcoal/70 max-w-3xl mx-auto leading-relaxed"
          >
            We are a trusted manufacturer headquartered in <em>India</em>, dedicated to delivering premium products at competitive, factory-direct prices. By leveraging our established operations in the <strong>UAE</strong>, we provide a seamless bridge between manufacturing excellence and global trade, offering local support and secure, flexible payment options to build lasting partnerships.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Text */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-3xl font-extrabold text-brand-charcoal mb-6 leading-tight">
                Bridging Manufacturing Excellence & International Delivery
              </h2>
              
              <div className="space-y-5 text-brand-charcoal/80 text-base sm:text-lg leading-relaxed">
                <p>
                  We are a trusted manufacturer headquartered in <em>India</em>, dedicated to delivering premium products at competitive, factory-direct prices. By leveraging our established operations in the <strong>UAE</strong>, we provide a seamless bridge between manufacturing excellence and global trade, offering local support and secure, flexible payment options to build lasting partnerships.
                </p>

                <div className="bg-brand-cream/35 border-l-4 border-brand-emerald p-6 rounded-r-2xl my-8">
                  <h3 className="font-bold text-brand-emerald text-lg mb-2">The Direct Advantage</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-brand-charcoal/85">
                    Our core strength lies in <em>direct-to-destination exports</em>. By shipping straight from our Indian facilities, we eliminate unnecessary intermediaries, drastically reducing costs and ensuring faster, more reliable deliveries. This transparency ensures you receive factory-fresh products with maximum efficiency.
                  </p>
                </div>

                <div className="space-y-4 text-brand-charcoal/80 text-base sm:text-lg leading-relaxed">
                  <h3 className="font-bold text-brand-charcoal text-xl mb-4">Why Our Clients Partner With Us:</h3>
                  <ul className="list-disc list-inside space-y-3">
                    <li><em>Manufacturing Excellence:</em> High-quality production in India with rigorous quality control.</li>
                    <li><em>Regional Expertise:</em> Strong UAE presence for localized support and trusted financial transactions.</li>
                    <li><em>Cost Efficiency:</em> Direct shipping means lower overheads and better pricing for you.</li>
                    <li><em>Global Logistics:</em> End-to-end solutions for fast, reliable delivery to your doorstep.</li>
                    <li><em>Relationship-Driven:</em> A focus on dedicated customer service and long-term business growth.</li>
                  </ul>
                </div>

                <p className="text-brand-charcoal/80 text-base sm:text-lg leading-relaxed mt-6">
                  Partner with us to experience the perfect synergy of <em>Indian manufacturing strength</em> and <em>international delivery excellence</em>.
                </p>
              </div>
            </motion.div>
            
            {/* Right Column Image & Overlay Info */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden glass-card p-2 bg-white"
            >
              <img src="/manufacturing.png" alt="Manufacturing Facility" loading="lazy" className="w-full h-[450px] object-cover rounded-xl shadow" />
              <div className="absolute -bottom-6 -left-6 bg-brand-emerald text-white p-6 rounded-2xl shadow-xl border border-brand-sage/20">
                <p className="font-bold text-4xl mb-1">WHO-GMP</p>
                <p className="font-semibold text-xs tracking-wider uppercase text-brand-gold">Certified Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Details */}
      <section className="py-20 bg-brand-cream/30 border-y border-brand-sage/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
              Core Benefits
            </span>
            <h2 className="text-3xl font-extrabold text-brand-charcoal mt-3 mb-4">Why Customers Choose Us</h2>
            <p className="text-brand-charcoal/70 max-w-2xl mx-auto text-sm sm:text-base">
              Providing exceptional standards of service and quality control to ensure long-term clinical and economic success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="glass-panel p-8 bg-white/80 border border-brand-sage/20 rounded-3xl hover:border-brand-emerald/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-sage/10 flex items-center justify-center mb-6">
                    {adv.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-3">{adv.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">{adv.desc}</p>
                </div>
                
                <div className="mt-5 flex items-center gap-2 text-brand-emerald text-xs font-bold">
                  <CheckCircle size={14} /> Global Standard
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Callout */}
      <section className="py-24 relative overflow-hidden text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white border border-brand-sage/20 p-10 md:p-14 rounded-3xl shadow-sm"
        >
          <Award size={48} className="text-brand-emerald mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mb-4">Partner With Us</h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Partner with us for cost-effective, high-quality products delivered directly from the source. Experience the perfect combination of Indian manufacturing strength and international delivery excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider text-brand-emerald">
            <span>Direct Exports</span>
            <span className="text-brand-gold">•</span>
            <span>UAE Soft Payments</span>
            <span className="text-brand-gold">•</span>
            <span>Indian Manufacturing Power</span>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
