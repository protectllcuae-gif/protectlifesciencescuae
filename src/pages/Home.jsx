import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Award, Activity } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Flag from '../components/Flag';
import Seo from '../components/Seo';
import { getWhatsAppUrl } from '../config';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// SVGs for country flags
const FlagUAE = () => (
  <svg aria-hidden="true" viewBox="0 0 1200 600" className="w-12 h-8 rounded shadow-md border border-gray-100" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="600" fill="#00732f"/>
    <rect width="1200" height="200" y="200" fill="#fff"/>
    <rect width="1200" height="200" y="400" fill="#000"/>
    <rect width="300" height="600" fill="#ff0000"/>
  </svg>
);

const FlagIndia = () => (
  <svg aria-hidden="true" viewBox="0 0 900 600" className="w-12 h-8 rounded shadow-md border border-gray-100" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="600" fill="#138808"/>
    <rect width="900" height="400" fill="#fff"/>
    <rect width="900" height="200" fill="#f93"/>
    <circle cx="450" cy="300" r="80" fill="#000080"/>
  </svg>
);

const FlagUK = () => (
  <svg aria-hidden="true" viewBox="0 0 60 30" className="w-12 h-8 rounded shadow-md border border-gray-100" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const waMessage = "Hello Protect Life Sciences, I want to inquire about pharmaceutical export services.";
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="w-full">
      <Seo
        title="Home"
        description="Protect Life Sciences — Global pharmaceutical exports, sterile injections, wellness gummies, and contract manufacturing from UAE/India."
        breadcrumbs={[
          { name: 'Home', url: '/' }
        ]}
      />
      {/* Hero Section with Light Sunlit Dubai Background */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-pearl">
        {/* Background Image & Light Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/dubai-day.jpg" 
            alt="Dubai Skyline Sunlit Premium Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Fresh sunlit white-mint gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/70 to-transparent"></div>
          {/* Glowing sunburst orb */}
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-brand-mint/30 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        {/* Floating Flags in Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[25%] right-[15%]">
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FlagUAE />
            </motion.div>
          </div>

          <div className="absolute bottom-[35%] right-[25%]">
            <motion.div
              animate={{
                y: [0, 18, 0],
                rotate: [0, -2, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <FlagIndia />
            </motion.div>
          </div>

          <div className="absolute top-[35%] right-[35%]">
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2.5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <FlagUK />
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6 hero-line">
                <p className="hidden lg:block text-[11px] uppercase tracking-[0.35em] text-brand-charcoal/60 mb-2">
                  United Arab Emirates
                </p>
                <span className="hidden lg:block text-5xl sm:text-6xl lg:text-[6.5rem] font-black uppercase tracking-[-0.02em] text-brand-charcoal/20 leading-none">
                  Dubai
                </span>
              </motion.div>

             
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-brand-charcoal hero-line">
                Protecting Lives Through <span className="text-gradient">Quality Pharmaceuticals</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-brand-charcoal/70 mb-8 leading-relaxed max-w-xl hero-line">
                Global pharmaceutical exports, sterile injections, wellness gummies, and advanced third-party manufacturing solutions tailored for international healthcare markets.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 hero-buttons">
                <Link to="/products" className="btn-primary flex items-center gap-2">
                  Explore Products <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline flex items-center justify-center">
                  Export Inquiry
                </Link>
                <a 
                  href={waUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_12px_rgba(34,197,94,0.3)] hover:translate-y-[-2px]"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </motion.div>
            </motion.div>

            {/* Visual Content - Floating Product Carousel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-sage/20 rounded-full blur-[90px] z-0"></div>
              
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 15,
                  stretch: 5,
                  depth: 120,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full max-w-sm !pb-14 z-10"
              >
                <SwiperSlide className="!w-60">
                  <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-brand-sage/20 bg-white/70">
                    <img src="/sterile-injections.png" alt="Sterile Injections" loading="lazy" className="w-full h-60 object-cover" />
                    <div className="p-4 bg-white/90 text-center border-t border-brand-mint">
                      <h3 className="font-bold text-brand-emerald text-sm">Sterile Injections</h3>
                      <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest mt-1">WHO-GMP Facility</p>
                    </div>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide className="!w-60">
                  <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-brand-sage/20 bg-white/70">
                    <img src="/gummies.png" alt="Wellness Gummies" loading="lazy" className="w-full h-60 object-cover" />
                    <div className="p-4 bg-white/90 text-center border-t border-brand-mint">
                      <h3 className="font-bold text-brand-emerald text-sm">Wellness Gummies</h3>
                      <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest mt-1">Premium Supplements</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="!w-60">
                  <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-brand-sage/20 bg-white/70">
                    <img src="/laboratory.png" alt="Custom Formulation" loading="lazy" className="w-full h-60 object-cover" />
                    <div className="p-4 bg-white/90 text-center border-t border-brand-mint">
                      <h3 className="font-bold text-brand-emerald text-sm">Custom Formulations</h3>
                      <p className="text-brand-gold text-[10px] uppercase font-bold tracking-widest mt-1">Contract Manufacturing</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Core Features Cards Overlaying Section */}
      <section className="py-12 relative z-10 bg-white/60 backdrop-blur-sm border-y border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card feature-card p-6 border-l-4 border-l-brand-emerald bg-white/80"
            >
              <Globe className="w-10 h-10 text-brand-emerald mb-4" />
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">Global Exports</h3>
              <p className="text-brand-charcoal/70 text-xs leading-relaxed">Trusted supply network servicing India, Nepal, UAE, UK, and African regions.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card feature-card p-6 border-l-4 border-l-brand-emerald bg-white/80"
            >
              <Shield className="w-10 h-10 text-brand-emerald mb-4" />
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">WHO-GMP Facility</h3>
              <p className="text-brand-charcoal/70 text-xs leading-relaxed">Manufacturing compliant with rigorous sterile quality assurance benchmarks.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card feature-card p-6 border-l-4 border-l-brand-emerald bg-white/80"
            >
              <Activity className="w-10 h-10 text-brand-emerald mb-4" />
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">Sterile Injectables</h3>
              <p className="text-brand-charcoal/70 text-xs leading-relaxed">State-of-the-art liquid vials, dry powder ampoules, and antibiotic lines.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6 }}
              className="glass-card feature-card p-6 border-l-4 border-l-brand-emerald bg-white/80"
            >
              <Award className="w-10 h-10 text-brand-emerald mb-4" />
              <h3 className="text-lg font-bold text-brand-charcoal mb-2">3rd Party Manufacturing</h3>
              <p className="text-brand-charcoal/70 text-xs leading-relaxed">Comprehensive contract manufacturing services from research to packaging.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global Export Reach Map & Counters Section */}
      <section className="py-24 relative overflow-hidden bg-brand-cream/40">
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-mint/30 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
              International Footprint
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-charcoal mt-3 mb-4">
              Our Global Export Reach
            </h2>
            <p className="text-brand-charcoal/70 max-w-2xl mx-auto text-sm sm:text-base">
              Headquartered in Pune, India, our pharmaceutical export operations extend globally. We supply essential medicines and health formulations to leading markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* World Map with animated route overlays */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden glass-card p-4 bg-white/80 shadow-md">
              <img 
                src="/world-map.png" 
                alt="Protect Life Sciences Global Map" 
                loading="lazy"
                className="w-full h-auto opacity-95 object-contain"
              />
              
              {/* Country Pins & Floating Flag tags */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {/* SVG Route Lines overlay */}
                <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-60">
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#235F45" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#D9B670" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Pulse route India -> UAE */}
                  <path 
                    d="M 640 250 Q 560 210 490 220" 
                    fill="none" 
                    stroke="url(#routeGrad)" 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    strokeDashoffset="40"
                    className="route-line"
                  />

                  {/* Pulse route India -> UK */}
                  <path 
                    d="M 640 250 Q 500 130 380 140" 
                    fill="none" 
                    stroke="url(#routeGrad)" 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    strokeDashoffset="40"
                    className="route-line"
                  />

                  {/* Pulse route India -> Senegal (West Africa) */}
                  <path 
                    d="M 640 250 Q 450 250 290 270" 
                    fill="none" 
                    stroke="url(#routeGrad)" 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    strokeDashoffset="40"
                    className="route-line"
                  />

                  {/* Pulse route India -> Angola/Namibia (Southern Africa) */}
                  <path 
                    d="M 640 250 Q 500 320 410 390" 
                    fill="none" 
                    stroke="url(#routeGrad)" 
                    strokeWidth="2" 
                    strokeDasharray="6 6"
                    strokeDashoffset="40"
                    className="route-line"
                  />
                </svg>

                {/* India Pin (Source) */}
                <div className="absolute top-[49%] left-[63.5%] flex flex-col items-center">
                  <span className="w-3.5 h-3.5 bg-brand-emerald rounded-full border-2 border-white animate-ping absolute"></span>
                  <span className="w-3.5 h-3.5 bg-brand-emerald rounded-full border-2 border-white relative"></span>
                </div>

                {/* UAE Pin */}
                <div className="absolute top-[43%] left-[48.5%] flex flex-col items-center">
                  <span className="w-2.5 h-2.5 bg-brand-gold rounded-full border border-white"></span>
                </div>

                {/* Nepal Pin */}
                <div className="absolute top-[46%] left-[67.5%] flex flex-col items-center">
                  <span className="w-2.5 h-2.5 bg-brand-gold rounded-full border border-white"></span>
                </div>

                {/* UK Pin */}
                <div className="absolute top-[27%] left-[37.5%] flex flex-col items-center">
                  <span className="w-2.5 h-2.5 bg-brand-gold rounded-full border border-white"></span>
                </div>
              </div>
            </div>

            {/* Statistics & Counters */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/80 p-6 rounded-xl border border-brand-sage/10 shadow-sm flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-mint rounded-lg flex items-center justify-center text-brand-emerald font-bold text-3xl">
                  30+
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal text-lg">Countries Reached</h4>
                  <p className="text-brand-charcoal/70 text-sm">Active exports across UK, UAE, Nepal, Somalia, Namibia, Angola, Senegal, South Sudan, and Chad.</p>
                </div>
              </div>

              <div className="bg-white/80 p-6 rounded-xl border border-brand-sage/10 shadow-sm flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-mint rounded-lg flex items-center justify-center text-brand-emerald font-bold text-3xl">
                  100%
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal text-lg">WHO-GMP Compliant</h4>
                  <p className="text-brand-charcoal/70 text-sm">Stringent quality testing protocols ensuring safety and high therapeutic efficacy.</p>
                </div>
              </div>

              <div className="bg-white/80 p-6 rounded-xl border border-brand-sage/10 shadow-sm flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-mint rounded-lg flex items-center justify-center text-brand-emerald font-bold text-3xl">
                  150+
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal text-lg">Formulations</h4>
                  <p className="text-brand-charcoal/70 text-sm">Comprehensive product portfolio ranging from critical injectables to nutraceutical gummies.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/exports" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                  <Globe size={18} /> Learn More About Exports
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Export Destinations Flag Grid */}
      <section className="py-16 bg-white border-t border-brand-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center font-bold text-brand-charcoal uppercase tracking-widest text-sm mb-10">Our Global presence in below countries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-center">
            {['India', 'Nepal', 'UAE', 'UK', 'Somalia', 'Namibia', 'Angola', 'Senegal', 'South Sudan', 'Chad'].map((country) => (
              <div key={country} className="flex items-center justify-center rounded-3xl border border-brand-sage/20 bg-brand-pearl/80 px-4 py-3 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <Flag country={country} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
