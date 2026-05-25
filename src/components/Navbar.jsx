import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const UAEFlag = () => (
  <svg aria-hidden="true" viewBox="0 0 4 3" className="h-5 w-8 shrink-0 rounded-sm border border-brand-sage/20 shadow-sm" xmlns="http://www.w3.org/2000/svg">
    <rect width="4" height="3" fill="#00732f" />
    <rect y="1" width="4" height="1" fill="#fff" />
    <rect y="2" width="4" height="1" fill="#000" />
    <rect width="1" height="3" fill="#d80027" />
  </svg>
);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Why Choose Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Exports', path: '/exports' },
  { name: 'Quality', path: '/quality' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3">
      
      <div className="max-w-7xl mx-auto">

        {/* NAVBAR CONTAINER */}
        <div
          className={`
            rounded-3xl
            transition-all
            duration-300
            border
            border-white/30
            backdrop-blur-2xl
            ${
              scrolled
                ? 'bg-white/90 shadow-[0_10px_50px_rgba(0,0,0,0.08)]'
                : 'bg-white/75 shadow-[0_8px_40px_rgba(0,0,0,0.04)]'
            }
          `}
        >

          {/* TOP NAV */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
            >
              <img
                src={logo}
                alt="Protect Life Sciences"
                className="h-12 w-auto object-contain"
              />

              <UAEFlag />

              <div className="hidden sm:block leading-tight">
                <h2 className="text-sm font-bold text-brand-charcoal">
                  Protect Life Sciences
                </h2>

                <p className="text-[10px] uppercase tracking-[0.15em] text-brand-emerald font-medium">
                  FZE LLC
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-3">

              <nav className="flex items-center gap-1">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`
                      px-4
                      py-2.5
                      rounded-full
                      text-sm
                      font-semibold
                      transition-all
                      duration-300
                      relative
                      group
                      ${
                        location.pathname === link.path
                          ? 'bg-brand-emerald/10 text-brand-emerald shadow-md'
                          : 'text-brand-charcoal/70 hover:text-brand-emerald'
                      }
                    `}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {location.pathname !== link.path && (
                      <div className="absolute inset-0 rounded-full bg-brand-mint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </Link>
                ))}

              </nav>

              {/* CTA BUTTON */}
              <Link
                to="/contact"
                className="
                  rounded-full
                  bg-brand-emerald
                  text-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  transition-all
                  duration-300
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-1
                  hover:bg-brand-emerald/90
                  active:translate-y-0
                "
              >
                Inquire Now
              </Link>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="
                lg:hidden
                h-11
                w-11
                rounded-2xl
                bg-brand-mint/30
                border
                border-brand-sage/20
                flex
                items-center
                justify-center
                text-brand-charcoal
                transition-all
                duration-300
                hover:bg-brand-mint/50
              "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>

            {isOpen && (

              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden px-4 pb-4"
              >

                <div
                  className="
                    rounded-3xl
                    bg-white
                    border
                    border-brand-sage/10
                    shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                    overflow-hidden
                  "
                >

                  {/* MOBILE LINKS */}
                  <div className="p-3 space-y-1">

                    {navLinks.map((link) => (

                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          flex
                          items-center
                          rounded-2xl
                          px-4
                          py-4
                          text-[15px]
                          font-medium
                          transition-all
                          duration-300
                          ${
                            location.pathname === link.path
                              ? 'bg-brand-mint/40 text-brand-emerald'
                              : 'text-brand-charcoal/80 hover:bg-brand-mint/30 hover:text-brand-emerald'
                          }
                        `}
                      >
                        {link.name}
                      </Link>

                    ))}

                  </div>

                  {/* MOBILE CTA */}
                  <div className="p-3 pt-0">

                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="
                        flex
                        items-center
                        justify-center
                        w-full
                        rounded-2xl
                        bg-brand-emerald
                        px-4
                        py-4
                        text-white
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        hover:shadow-lg
                      "
                    >
                      Send Inquiry
                    </Link>

                  </div>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </header>
  );
};

export default Navbar;