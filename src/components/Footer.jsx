import { Link as RouterLink } from 'react-router-dom';

import {
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
  
} from 'lucide-react';

import {
  COMPANY_NAME,
  ADDRESS_TEXT,
  EMAIL_ADDRESS,
  getFormattedWhatsAppNumber,
  getWhatsAppUrl,
  getWhatsAppTelLink,
  
} from '../config';

import logo from '../assets/logo.png';

/* =========================================
   WHATSAPP ICON
========================================= */
const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={`fill-current ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

/* =========================================
   FOOTER
========================================= */
const Footer = () => {

  const certLogos = [
    {
      img: '/ISoimg.jpg',
      pdf: '/certificates/iso.pdf',
      name: 'ISO Certified',
    },
    {
      img: '/fadimg.jpg',
      pdf: '/certificates/fda.pdf',
      name: 'FDA Approved',
    },
    {
      img: '/halalimg.jpg',
      pdf: '/certificates/halal.pdf',
      name: 'Halal Certified',
    },
    {
      img: '/Haccpimg.jpg',
      pdf: '/certificates/haccp.pdf',
      name: 'HACCP Certified',
    },
    {
      img: '/who.jpg',
      pdf: '/certificates/who.pdf',
      name: 'WHO-GMP',
    },
    {
      img: '/certificates/startup.jpg',
      pdf: '/certificates/gmp_cert.jpg',
      name: 'Startup India / GMP',
    },
    {
      img: '/certificates/fssai.jpeg',
      pdf: '/certificates/food_license.pdf',
      name: 'FSSAI',
    },
  ];

  return (
    <footer className="
      relative
      overflow-hidden
      bg-brand-cream
      text-brand-charcoal/80
      pt-20
      pb-8
      border-t
      border-brand-sage/20
    ">

      {/* SOFT BACKGROUND OVERLAY */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-full
        bg-gradient-to-b
        from-white/50
        to-transparent
        pointer-events-none
      "></div>

      {/* =========================================
          LOGO SECTION
      ========================================== */}
      <div className="
        relative
        z-10
        flex
        flex-col
        items-center
        text-center
        mb-20
      ">

        <RouterLink
          to="/"
          className="
            mb-6
            transition-transform
            duration-300
            hover:scale-105
          "
        >

          <img
            src={logo}
            alt="Protect Life Sciences"
            className="
              h-20
              md:h-24
              w-auto
              object-contain
              drop-shadow-sm
            "
          />

        </RouterLink>

        {/* DESCRIPTION */}
        <p className="
          max-w-2xl
          text-sm
          md:text-base
          leading-relaxed
          text-brand-charcoal/70
          mb-8
          px-4
        ">
          A premier pharmaceutical manufacturer and export specialist
          delivering WHO-GMP sterile injections, wellness gummies,
          critical care formulations, and third-party manufacturing
          solutions for global healthcare markets.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">

          {/* <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Protect Life Sciences on LinkedIn"
            className="
              w-12
              h-12
              rounded-full
              bg-white
              shadow-md
              border
              border-brand-sage/20
              flex
              items-center
              justify-center
              text-brand-emerald
              hover:bg-brand-emerald
              hover:text-white
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Link2 size={20} />
          </a>

          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Protect Life Sciences on Twitter"
            className="
              w-12
              h-12
              rounded-full
              bg-white
              shadow-md
              border
              border-brand-sage/20
              flex
              items-center
              justify-center
              text-brand-emerald
              hover:bg-brand-emerald
              hover:text-white
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Link2 size={20} />
          </a>

          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Protect Life Sciences on Facebook"
            className="
              w-12
              h-12
              rounded-full
              bg-white
              shadow-md
              border
              border-brand-sage/20
              flex
              items-center
              justify-center
              text-brand-emerald
              hover:bg-brand-emerald
              hover:text-white
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Link2 size={20} />
          </a> */}

         <div className="flex items-center gap-3">
  {/* WhatsApp Button */}
  <a
    href={getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp Protect Life Sciences"
    className="
      w-12
      h-12
      rounded-full
      bg-white
      shadow-md
      border
      border-brand-sage/20
      flex
      items-center
      justify-center
      text-brand-emerald
      hover:bg-brand-emerald
      hover:text-white
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
    "
  >
    <WhatsAppIcon size={20} />
  </a>

  {/* Email Button */}
  <a
    href="mailto:info@protectlifesciences.com"
    aria-label="Email Protect Life Sciences"
    className="
      w-12
      h-12
      rounded-full
      bg-white
      shadow-md
      border
      border-brand-sage/20
      flex
      items-center
      justify-center
      text-brand-emerald
      hover:bg-brand-emerald
      hover:text-white
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
    "
  >
    <Mail size={20} />
  </a>
</div>

        </div>

      </div>

      {/* =========================================
          FOOTER GRID
      ========================================== */}
      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-14
        pb-14
      ">

        {/* ABOUT */}
        <div>

          <h3 className="
            text-brand-emerald
            font-bold
            text-xl
            mb-6
          ">
            About Company
          </h3>

          <p className="
            text-sm
            leading-relaxed
            text-brand-charcoal/70
            mb-6
          ">
            We specialize in pharmaceutical exports,
            sterile injectables, wellness gummies,
            and global third-party manufacturing
            solutions with WHO-GMP standards.
          </p>

          {/* CERTIFICATION CARD */}
          <div className="
            flex
            items-center
            gap-4
            bg-white
            p-4
            rounded-2xl
            shadow-sm
            border
            border-brand-sage/20
            w-fit
          ">

            <ShieldCheck
              className="text-brand-emerald"
              size={36}
            />

            <div>

              <p className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-brand-charcoal
              ">
                WHO-GMP
              </p>

              <p className="
                text-[10px]
                text-brand-charcoal/60
              ">
                Certified Facility
              </p>

            </div>

          </div>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="
            text-brand-emerald
            font-bold
            text-xl
            mb-6
          ">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm">

            <li>
              <RouterLink
                to="/about"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                why choose us
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/products"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Products
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/manufacturing"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Manufacturing
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/exports"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Global Exports
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/quality"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Quality Standards
              </RouterLink>
            </li>

          </ul>

        </div>

        {/* PRODUCTS */}
        <div>

          <h3 className="
            text-brand-emerald
            font-bold
            text-xl
            mb-6
          ">
            Our Products
          </h3>

          <ul className="space-y-4 text-sm">

            <li>
              <RouterLink
                to="/products"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Sterile Injections
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/products"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Antibiotic Range
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/products"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Critical Care
              </RouterLink>
            </li>

            <li>
              <RouterLink
                to="/products"
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                "
              >
                Wellness Gummies
              </RouterLink>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="
            text-brand-emerald
            font-bold
            text-xl
            mb-6
          ">
            Contact Us
          </h3>

          <ul className="space-y-5 text-sm">

            <li className="
              flex
              items-start
              gap-3
            ">

              <MapPin
                size={20}
                className="
                  text-brand-emerald
                  shrink-0
                  mt-1
                "
              />

              <span className="leading-relaxed">
                {ADDRESS_TEXT}
              </span>

            </li>

            <li className="
              flex
              items-start
              gap-3
            ">

              <Smartphone
                size={20}
                className="
                  text-brand-emerald
                  shrink-0
                  mt-1
                "
              />

              <div>

                <a
                  href={getWhatsAppTelLink()}
                  className="
                    block
                    hover:text-brand-emerald
                    transition-colors
                    duration-300
                    font-medium
                  "
                >
                  {getFormattedWhatsAppNumber()}
                </a>

                <span className="
                  text-[10px]
                  text-brand-charcoal/60
                ">
                  Mobile (WhatsApp Available)
                </span>

              </div>

            </li>

            <li className="
              flex
              items-center
              gap-3
            ">

              <Mail
                size={20}
                className="
                  text-brand-emerald
                  shrink-0
                "
              />

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="
                  hover:text-brand-emerald
                  transition-colors
                  duration-300
                  font-medium
                  break-all
                "
              >
                {EMAIL_ADDRESS}
              </a>

            </li>

          </ul>

        </div>

      </div>

      {/* =========================================
          CERTIFICATIONS
      ========================================== */}
      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        mb-14
        border-t
        border-brand-sage/20
        pt-10
      ">

        <h3 className="
          text-brand-emerald
          font-bold
          text-xl
          mb-8
          text-center
          md:text-left
        ">
          Global Certifications
        </h3>

        <div className="
          flex
          overflow-x-auto
          gap-5
          pb-4
          scrollbar-thin
        ">

          {certLogos.map((logoItem, index) => (

            <a
              key={index}
              href={logoItem.pdf}
              target="_blank"
              rel="noopener noreferrer"
              title={logoItem.name}
              className="
                flex-shrink-0
                bg-white
                p-3
                rounded-2xl
                shadow-sm
                border
                border-brand-sage/20
                hover:scale-105
                hover:border-brand-emerald
                transition-all
                duration-300
              "
            >

              <img
                src={logoItem.img}
                alt={logoItem.name}
                loading="lazy"
                className="
                  w-20
                  h-20
                  object-contain
                "
              />

            </a>

          ))}

        </div>

      </div>

      {/* =========================================
          BOTTOM BAR
      ========================================== */}
      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        pt-8
        border-t
        border-brand-sage/20
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-5
        text-xs
        text-brand-charcoal/60
      ">

        <p className="text-center md:text-left">
          © {new Date().getFullYear()} {COMPANY_NAME}.
          All rights reserved.
        </p>

        <div className="flex items-center gap-6">

          <RouterLink
            to="/privacy"
            className="
              hover:text-brand-emerald
              transition-colors
              duration-300
            "
          >
            Privacy Policy
          </RouterLink>

          <RouterLink
            to="/terms"
            className="
              hover:text-brand-emerald
              transition-colors
              duration-300
            "
          >
            Terms & Conditions
          </RouterLink>

        </div>

      </div>

    </footer>
  );
};

export default Footer;