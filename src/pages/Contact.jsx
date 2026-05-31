import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Smartphone, Send } from 'lucide-react';
import Seo from '../components/Seo';
import { ADDRESS_TEXT, EMAIL_ADDRESS, getFormattedWhatsAppNumber, getWhatsAppUrl, getWhatsAppTelLink } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    product: '',
    message: ''
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = '(max-width: 768px)';
    const mediaQuery = window.matchMedia(query);
    const updateIsMobile = (event) => setIsMobile(event.matches);

    updateIsMobile(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateIsMobile);
      return () => mediaQuery.removeEventListener('change', updateIsMobile);
    }

    mediaQuery.addListener(updateIsMobile);
    return () => mediaQuery.removeListener(updateIsMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Protect Life Sciences,%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Product of Interest:* ${formData.product}%0A*Message:* ${formData.message}%0A%0AI would like to inquire about this product.`;
    const waUrl = getWhatsAppUrl(text);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-pearl pt-24 pb-20 relative overflow-hidden">
      <Seo
        title="Contact"
        description="Contact Protect Life Sciences for export inquiries, third-party manufacturing, and product details."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
      />
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-mint/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cream/40 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
            Get In Touch
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mt-3 mb-6"
          >
            Connect With <span className="text-gradient">Our Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-brand-charcoal/70 max-w-2xl mx-auto"
          >
            Connect with us for export inquiries, third-party manufacturing capacity, or product details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border-t-4 border-brand-emerald h-full flex flex-col justify-center space-y-8 bg-white shadow-sm">
              
              <div>
                <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Contact Details</h3>
                <p className="text-brand-charcoal/60 text-xs sm:text-sm mb-6 leading-relaxed">
                  We are available to answer your questions and coordinate potential distribution agreements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-emerald mr-4 flex-shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-charcoal/60 mb-0.5">Mobile (WhatsApp Available)</p>
                    <a href={getWhatsAppTelLink()} className="block text-brand-charcoal font-bold hover:text-brand-emerald transition-colors">
                      {getFormattedWhatsAppNumber()}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-emerald mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-charcoal/60 mb-0.5">Email Address</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="text-brand-charcoal font-bold hover:text-brand-emerald transition-colors break-all">
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-emerald mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-charcoal/60 mb-0.5">Office Address</p>
                    <p className="text-brand-charcoal font-bold leading-relaxed">{ADDRESS_TEXT}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl h-full border border-brand-sage/20 shadow-md bg-white">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-2">Send an Inquiry</h3>
              <p className="text-brand-charcoal/60 text-xs sm:text-sm mb-8">Fill out the form details below and we will route your inquiry directly to our WhatsApp Desk.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        id="contact-name"
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-brand-pearl border border-brand-sage/20 rounded-lg px-4 py-3 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 focus:border-brand-emerald transition-colors text-sm"
                        placeholder="Name"
                      />
                    </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Company Name</label>
                    <input 
                      id="contact-company"
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-brand-pearl border border-brand-sage/20 rounded-lg px-4 py-3 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 focus:border-brand-emerald transition-colors text-sm"
                      placeholder="PharmaCorp Inc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-product" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Product of Interest</label>
                  <select 
                    id="contact-product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-brand-pearl border border-brand-sage/20 rounded-lg px-4 py-3 text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 focus:border-brand-emerald transition-colors text-sm appearance-none"
                  >
                    <option value="" disabled>Select a product category</option>
                    <option value="Sterile Injections">Sterile Injections</option>
                    <option value="Antibiotics">Antibiotics</option>
                    <option value="Critical Care">Critical Care Products</option>
                    <option value="Gummies">Wellness Gummies</option>
                    <option value="Third Party Mfg">Third-Party Manufacturing</option>
                    <option value="Export Inquiry">Export Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-brand-charcoal/80 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-brand-pearl border border-brand-sage/20 rounded-lg px-4 py-3 text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-emerald/40 focus:border-brand-emerald transition-colors text-sm resize-none"
                    placeholder="Tell us about your volume or formulation requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full btn-primary flex justify-center items-center gap-2 py-3.5 text-sm sm:text-base font-bold shadow-md cursor-pointer"
                >
                  Send via WhatsApp <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Embedded Map */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-16"
>
  <div className="glass-card border border-brand-sage/20 rounded-2xl overflow-hidden bg-white shadow-sm">

    <div className="p-6 border-b border-brand-sage/10">
      <h3 className="text-2xl font-bold text-brand-charcoal">
        Our Location
      </h3>
      <p className="text-brand-charcoal/60 mt-2">
        Visit our office in Abu Dhabi, UAE.
      </p>
    </div>

    {isMobile ? (
      <div className="p-8 text-center">
        <MapPin
          size={48}
          className="mx-auto text-brand-emerald mb-4"
        />

        <p className="text-brand-charcoal mb-6">
          Open our office location directly in Google Maps.
        </p>

        <a
          href="https://maps.google.com/?q=1411+Rami+Garden+Al+Falah+Street+Airport+Road+Abu+Dhabi+UAE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-emerald text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          <MapPin size={18} />
          Open in Google Maps
        </a>
      </div>
    ) : (
      <div className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(0.2)"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Protect Life Sciences UAE Location"
        />
      </div>
    )}
  </div>
</motion.div>

      </div>
    </div>
  );
};

export default Contact;
