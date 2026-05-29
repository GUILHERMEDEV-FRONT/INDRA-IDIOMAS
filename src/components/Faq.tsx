import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../data';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background soft ambient blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] bg-brand-peach/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Title & Contact Link Overlay */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4 sticky top-28">
          <h2 className="text-xs font-mono tracking-[0.3em] text-brand-peach uppercase font-semibold">
            Dúvidas Frequentes
          </h2>
          
          <h3 className="font-serif text-3xl sm:text-4xl text-brand-wine font-semibold leading-tight tracking-tight">
            Tem alguma dúvida?<br />Nós ajudamos!
          </h3>
          
          <p className="text-sm text-brand-charcoal/70 leading-relaxed max-w-sm mt-1">
            Se a sua pergunta não estiver listada à direita, nossa equipe de suporte pedagógico está sempre disponível via WhatsApp para esclarecer o que você precisar.
          </p>

          <a
            href="#contato"
            onClick={handleScrollToContact}
            className="mt-4 bg-brand-wine hover:bg-brand-wine-light text-brand-cream text-xs font-semibold px-6 py-3.5 rounded-full flex items-center gap-2 transition-all transition-colors shadow-sm inline-block"
          >
            Falar Conosco
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Right Side: Accordion Grid */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border border-brand-cream-dark shadow-xs rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-white' : 'bg-transparent hover:bg-white/40'
                }`}
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full text-left py-5 px-6 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-brand-wine transition-colors group-hover:text-brand-peach">
                    {faq.question}
                  </span>
                  
                  <span className={`p-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-brand-peach/10 text-brand-peach' : 'bg-brand-cream-dark/50 text-brand-wine/60'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed border-t border-brand-cream-dark/50 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
