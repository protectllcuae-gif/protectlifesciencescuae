import { motion } from 'framer-motion';
import Seo from '../components/Seo';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Pharmaceutical Exports: Navigating Global Regulations",
    category: "Pharmaceutical Exports",
    // date: "Oct 15, 2023",
    // author: "Dr. Ananya Sharma",
    image: "/world-map.png",
    excerpt: "Exploring the complexities of international trade in pharmaceuticals and how companies can ensure compliance with evolving global standards."
  },
  {
    id: 2,
    title: "Innovations in Sterile Injectable Manufacturing",
    category: "Injectable Manufacturing",
    // date: "Sep 28, 2023",
    // author: "Rajeev Menon",
    image: "/sterile-injections.png",
    excerpt: "A deep dive into the latest technologies and cleanroom standards driving the future of sterile injectable production."
  },
  // {
  //   id: 3,
  //   title: "The Rise of Wellness Gummies: A Market Analysis",
  //   category: "Gummies & Wellness Trends",
  //   date: "Sep 12, 2023",
  //   author: "Priya Desai",
  //   image: "/gummies.png",
  //   excerpt: "Why vitamin and supplement gummies are dominating the wellness market and what consumers are looking for."
  // },
  {
    id: 4,
    title: "Ensuring Quality in Third-Party Pharmaceutical Manufacturing",
    category: "Global Healthcare",
    // date: "Aug 30, 2023",
    // author: "Dr. Vikram Patel",
    image: "/laboratory.png",
    excerpt: "Key considerations and quality assurance protocols when partnering with a contract manufacturer for your pharma brand."
  },
  {
    id: 5,
    title: "Advancing Global Healthcare Through Accessible Antibiotics",
    category: "Healthcare Innovation",
    // date: "Aug 15, 2023",
    // author: "Elena Rodriguez",
    image: "/sterile-injections.png",
    excerpt: "How bulk manufacturing and efficient export chains are helping address the global demand for essential antibiotics."
  },
  {
    id: 6,
    title: "Building a State-of-the-Art WHO-GMP Facility",
    category: "Injectable Manufacturing",
    // date: "Jul 22, 2023",
    // author: "Rajeev Menon",
    image: "/manufacturing.png",
    excerpt: "An inside look at the architectural and operational requirements for establishing a globally certified pharmaceutical plant."
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-brand-pearl pt-24 pb-20">
      <Seo
        title="Blog"
        description="Stay informed with Protect Life Sciences insights on pharmaceutical exports, manufacturing, and healthcare trends."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-brand-emerald bg-brand-mint px-3 py-1 rounded-full uppercase tracking-wider">
            Insights & Trends
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mt-3 mb-6"
          >
            Insights & <span className="text-gradient">Innovations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-brand-charcoal/70 max-w-2xl mx-auto"
          >
            Discover the latest trends, regulatory updates, and manufacturing innovations in the global pharmaceutical industry.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full bg-white border border-brand-sage/20 shadow-sm"
            >
              <div className="relative h-56 overflow-hidden bg-brand-pearl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-brand-mint border border-brand-sage/30 text-brand-emerald text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-brand-charcoal/60 mb-4 space-x-4">
                  <span className="flex items-center"><Calendar size={13} className="mr-1 text-brand-emerald" /> {post.date}</span>
                  <span className="flex items-center"><User size={13} className="mr-1 text-brand-emerald" /> {post.author}</span>
                </div>
                
                <h3 className="text-lg font-bold text-brand-charcoal mb-3 group-hover:text-brand-emerald transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-brand-charcoal/70 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link to="#" className="inline-flex items-center text-brand-emerald font-bold text-xs sm:text-sm hover:text-brand-gold transition-colors">
                    Read Full Article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn-outline text-sm">Load More Articles</button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
