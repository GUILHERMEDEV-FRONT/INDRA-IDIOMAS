import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { NAV_LINKS } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-cream-dark/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-brand-wine group-hover:text-brand-peach transition-colors duration-300">
                INDRA
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-brand-charcoal/70 -mt-1 font-semibold">
                idiomas
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-[14px] font-medium text-brand-charcoal/80 hover:text-brand-wine transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-peach transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-brand-charcoal hover:text-brand-wine-light font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-peach" />
              <span className="text-xs font-mono font-medium">(21) 98859-9130</span>
            </a>
            
            <a
              href="#contato"
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="bg-brand-wine hover:bg-brand-wine-light text-brand-cream text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Fazer Pré-Matrícula
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg md:hidden text-brand-charcoal hover:bg-brand-cream-dark/50 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-cream border-b border-brand-cream-dark shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-brand-charcoal hover:bg-brand-cream-dark/60 hover:text-brand-wine transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-cream-dark/80 flex flex-col gap-3 px-3">
                <a
                  href="https://wa.me/5521999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-brand-charcoal font-medium text-sm py-1"
                >
                  <Phone className="w-4 h-4 text-brand-peach" />
                  <span className="font-mono text-xs">(21) 98859-9130</span>
                </a>
                
                <a
                  href="#contato"
                  onClick={(e) => handleLinkClick(e, '#contato')}
                  className="w-full text-center bg-brand-wine hover:bg-brand-wine-light text-brand-cream font-semibold py-3 rounded-full transition-colors text-sm shadow-sm"
                >
                  Fazer Pré-Matrícula
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
