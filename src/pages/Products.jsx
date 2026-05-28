import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, MessageSquare, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Seo from '../components/Seo';
import { Navigation, Autoplay } from 'swiper/modules';
import { getWhatsAppUrl } from '../config';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  "All",
  "Antibiotic Injections",
  "Critical Care Injections",
  "Sterile Injectable Range",
  "Gummies",
  "Wellness Supplements",
  "Export Products"
];

const productsData = [
  // Antibiotics
  { id: 1, name: "Meropenem Injection", category: "Antibiotic Injections", image: "/sterile-injections.png", type: "injection", packSize: "1g / 500mg Vial", spec: "USP / BP Grade", description: "Broad-spectrum beta-lactam antibiotic of the carbapenem class, sterile lyophilized powder for intravenous administration." },
  { id: 2, name: "Piperacillin & Tazobactam", category: "Antibiotic Injections", image: "/sterile-injections.png", type: "injection", packSize: "4.5g / 2.25g Vial", spec: "USP Grade", description: "Injectable antibacterial combination product consisting of the semisynthetic antibiotic piperacillin sodium and the beta-lactamase inhibitor tazobactam sodium." },
  { id: 3, name: "Ceftriaxone Sodium Injection", category: "Antibiotic Injections", image: "/sterile-injections.png", type: "injection", packSize: "1g / 500mg / 250mg", spec: "IP / USP Grade", description: "Third-generation cephalosporin antibiotic used to treat a wide variety of bacterial infections." },
  
  // Critical Care
  { id: 4, name: "Pantoprazole Sodium Injection", category: "Critical Care Injections", image: "/sterile-injections.png", type: "injection", packSize: "40mg Vial", spec: "IP Grade", description: "Proton pump inhibitor that suppresses gastric acid secretion by H+/K+-ATPase inhibition. Used in ICU for prophylaxis against stress ulcers." },
  { id: 5, name: "Artesunate for Injection", category: "Critical Care Injections", image: "/sterile-injections.png", type: "injection", packSize: "60mg / 120mg Vial", spec: "WHO Standard", description: "Antimalarial agent used in the treatment of severe malaria in adults and children." },

  // Sterile Injectable Range
  { id: 6, name: "Sterile Water for Injection", category: "Sterile Injectable Range", image: "/sterile-injections.png", type: "injection", packSize: "10ml / 20ml Ampoules", spec: "USP Grade", description: "Sterile, nonpyrogenic, solute-free preparation of distilled water for injection. Used only as a sterile solvent for reconstitution." },

  // Gummies
  { id: 7, name: "Multivitamin Gummies", category: "Gummies", image: "/adult%20multivitamin.jpg", type: "gummy", flavor: "Mixed Berry", packSize: "60 Gummies Bottle", spec: "GMP Certified", description: "A balanced blend of 12 essential vitamins and minerals supporting daily vitality, immune system health, and overall wellness." },
  { id: 8, name: "Sleep Support Gummies", category: "Gummies", image: "/melatonin.jpg", type: "gummy", flavor: "Strawberry-Lavender", packSize: "30 Gummies Bottle", spec: "Nutraceutical Grade", description: "Formulated with Melatonin, L-Theanine, and Chamomile extract to promote a peaceful night's rest and regulate sleep cycles." },
{
  id: 11,
  name: "Omega Gummies",
  category: "Gummies",
  image: "/omega.jpeg",
  type: "gummy",
  flavor: "Coffee",
  packSize: "30 Gummies Bottle",
  spec: "Brain & Memory Support",
  description:
    "Premium Omega gummies formulated to support brain function, memory enhancement, and eye health with a delicious coffee flavor."
},

{
  id: 12,
  name: "Magnesium Gummies",
  category: "Gummies",
  image: "/magnesium.jpeg",
  type: "gummy",
  flavor: "Mixed Berry",
  packSize: "30 Gummies Bottle",
  spec: "Muscle & Nerve Support",
  description:
    "Advanced magnesium gummies designed to support muscle recovery, nerve function, relaxation, and overall body wellness."
},

{
  id: 13,
  name: "Glutathione Gummies",
  category: "Gummies",
  image: "/glutathione.jpeg",
  type: "gummy",
  flavor: "Blueberry",
  packSize: "30 Gummies Bottle",
  spec: "Skin Radiance Formula",
  description:
    "Powerful antioxidant gummies enriched with Glutathione to support skin radiance, detoxification, and healthy glowing skin."
},

{
  id: 14,
  name: "Garcinia Cambogia Gummies",
  category: "Gummies",
  image: "/carcinia.jpeg",
  type: "gummy",
  flavor: "Strawberry",
  packSize: "30 Gummies Bottle",
  spec: "Weight Management Support",
  description:
    "Specially formulated Garcinia Cambogia gummies that help support metabolism, appetite management, and healthy weight goals."
},

{
  id: 15,
  name: "Apple Cider Vinegar Gummies",
  category: "Gummies",
  image: "/apple-cider.jpeg",
  type: "gummy",
  flavor: "Apple",
  packSize: "30 Gummies Bottle",
  spec: "Digestive Wellness",
  description:
    "Delicious apple cider vinegar gummies designed to support digestion, metabolism, gut health, and daily wellness naturally."
},

{
  id: 16,
  name: "Shilajit Stamina Gummies",
  category: "Gummies",
  image: "/shilajit.jpeg",
  type: "gummy",
  flavor: "Dark Chocolate",
  packSize: "30 Gummies Bottle",
  spec: "Strength & Vitality",
  description:
    "Premium Shilajit gummies crafted to support stamina, strength, energy levels, and overall vitality for active lifestyles."
},

{
  id: 17,
  name: "Vitamin C Gummies",
  category: "Gummies",
  image: "/vitamin-c.jpeg",
  type: "gummy",
  flavor: "Orange",
  packSize: "30 Gummies Bottle",
  spec: "Immunity & Antioxidant Support",
  description:
    "Vitamin C gummies enriched with antioxidant properties to help strengthen immunity, support skin health, and daily wellness."
},
  // Wellness Supplements
 
  // Export Products
  { id: 18, name: "Beta-Lactam Dry Powder", category: "Export Products", image: "/sterile-injections.png", type: "injection", packSize: "Bulk Exporters Pack", spec: "WHO-GMP Verified", description: "Premium bulk antibiotics prepared and packaged specifically to maintain maximum shelf life during international shipping." }
];

const featuredProducts = productsData.filter(p => [1, 2, 7, 8, 11, 13, 16].includes(p.id));

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const getWaUrl = (product) => {
    const waMessage = `Hello Protect Life Sciences, I am interested in inquiring about ${product.name} (${product.category}) for export.`;
    return getWhatsAppUrl(waMessage);
  };

  return (
    <div className="min-h-screen bg-brand-pearl pt-24 pb-20">
      <Seo
        title="Products"
        description="Explore Protect Life Sciences WHO-GMP certified sterile injections and premium nutraceutical gummies for global export."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
            Our Portfolio
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mt-3 mb-6"
          >
            Our Premium <span className="text-gradient">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-brand-charcoal/70 max-w-2xl mx-auto"
          >
            Explore our extensive range of WHO-GMP certified pharmaceuticals, specializing in clinical sterile injections and premium nutraceutical gummies.
          </motion.p>
        </div>

        {/* Featured Slider */}
        <div className="mb-16 bg-brand-cream/30 p-8 rounded-3xl border border-brand-sage/20">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6 flex items-center gap-2">
            <span className="w-2.5 h-6 bg-brand-emerald rounded-full"></span>
            Featured Showcase
          </h2>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            navigation
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-6"
          >
            {featuredProducts.map(product => (
              <SwiperSlide key={`featured-${product.id}`}>
                <div 
                  className={`glass-card rounded-2xl overflow-hidden cursor-pointer group h-full bg-white/90 border border-brand-sage/20 ${
                    product.type === 'gummy' ? 'hover:shadow-[0_8px_30px_rgba(217,182,112,0.15)]' : 'hover:shadow-[0_8px_30px_rgba(35,95,69,0.15)]'
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="h-44 overflow-hidden relative bg-brand-pearl">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-sm ${
                      product.type === 'gummy' 
                        ? 'bg-amber-50 text-amber-800 border-amber-200' 
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}>
                      {product.type === 'gummy' ? 'Gummy' : 'Injection'}
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-brand-mint">
                    <h3 className="font-bold text-brand-charcoal text-sm group-hover:text-brand-emerald transition-colors truncate">{product.name}</h3>
                    <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mt-1">{product.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-emerald text-white shadow-md' 
                  : 'bg-white text-brand-charcoal/70 hover:bg-brand-mint hover:text-brand-emerald border border-brand-sage/20'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry Product Gallery */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => {
              const isGummy = product.type === 'gummy';
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group relative rounded-2xl glass-card overflow-hidden cursor-pointer break-inside-avoid block bg-white"
                  style={{
                    height: idx % 2 === 0 ? '390px' : '440px'
                  }}
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Subtle Accent Glow based on product type */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px] z-0 bg-gradient-to-r ${
                    isGummy ? 'from-brand-gold/60 to-amber-300/60' : 'from-brand-emerald/50 to-brand-mint/60'
                  }`}>
                    <div className="w-full h-full bg-white rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col p-2">
                    <div className="overflow-hidden rounded-xl flex-grow w-full relative bg-brand-pearl flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-transparent transition-colors duration-500"></div>
                      <div className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full border shadow-sm ${
                        isGummy 
                          ? 'bg-amber-50 text-amber-800 border-amber-200' 
                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      }`}>
                        {product.category}
                      </div>
                    </div>
                    
                    <div className="p-5 h-36 flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-brand-charcoal group-hover:text-brand-emerald transition-colors leading-tight mb-1">{product.name}</h3>
                      <p className="text-xs text-brand-charcoal/60 line-clamp-2">{product.description}</p>
                      
                      <div className="mt-3 flex items-center text-brand-emerald text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0">
                        View Technical Specifications <Search size={14} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal Popup/Lightbox details */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-charcoal/40 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                className="bg-white border border-brand-sage/20 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close product details"
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-charcoal/10 text-brand-charcoal flex items-center justify-center hover:bg-brand-emerald hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
                
                {/* Product Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-brand-cream/30 relative flex items-center justify-center p-6">
                  <img src={selectedProduct.image} alt={selectedProduct.name} loading="lazy" className="w-full h-auto max-h-[350px] object-contain rounded-2xl" />
                  
                  {/* Subtle Background Glow under image */}
                  <div className={`absolute w-48 h-48 rounded-full blur-[60px] pointer-events-none -z-10 opacity-40 ${
                    selectedProduct.type === 'gummy' ? 'bg-brand-gold' : 'bg-brand-emerald'
                  }`}></div>
                </div>
                
                {/* Details Section */}
                <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-1 block">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-brand-charcoal/70 mb-6 text-sm leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  
                  {/* Technical Specifications list */}
                  <div className="space-y-3 mb-6 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-brand-sage/10 pb-1.5">
                      <span className="text-brand-charcoal/60 font-medium">Standards / Grade</span>
                      <span className="text-brand-charcoal font-bold">{selectedProduct.spec}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-sage/10 pb-1.5">
                      <span className="text-brand-charcoal/60 font-medium">Packaging Unit</span>
                      <span className="text-brand-charcoal font-bold">{selectedProduct.packSize}</span>
                    </div>
                    {selectedProduct.flavor && (
                      <div className="flex justify-between border-b border-brand-sage/10 pb-1.5">
                        <span className="text-brand-charcoal/60 font-medium">Flavor profile</span>
                        <span className="text-brand-charcoal font-bold">{selectedProduct.flavor}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-brand-sage/10 pb-1.5">
                      <span className="text-brand-charcoal/60 font-medium">Certification status</span>
                      <span className="text-brand-emerald font-bold flex items-center gap-1">
                        <Shield size={12} className="fill-current" /> WHO-GMP
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={getWaUrl(selectedProduct)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary flex-grow text-center flex items-center justify-center gap-2 text-xs sm:text-sm"
                    >
                      <MessageSquare size={16} /> Direct WhatsApp Inquiry
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Products;
