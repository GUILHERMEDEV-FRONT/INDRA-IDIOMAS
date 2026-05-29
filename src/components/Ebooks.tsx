import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Check, X, ArrowDownToLine, Lock } from 'lucide-react';
import { EBOOKS, Ebook } from '../data';

export default function Ebooks() {
  const [downloadingBook, setDownloadingBook] = useState<Ebook | null>(null);
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate high-quality download flow
    setIsSuccess(true);
    setTimeout(() => {
      // close modal and reset after a delay
      setDownloadingBook(null);
      setIsSuccess(false);
      setEmail('');
    }, 3500);
  };

  return (
    <section className="py-20 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-[0.3em] text-brand-peach uppercase font-semibold">
            Nossos E-books
          </h2>
          <p className="font-serif text-3xl sm:text-4xl text-brand-wine mt-3 font-semibold tracking-tight">
            E-books exclusivos para aprofundar seus estudos
          </p>
          <p className="text-sm text-brand-charcoal/70 mt-3 leading-relaxed">
            Aprenda terminologias, truques de pronúncia e hacks gramaticais elaborados por nossos melhores coordenadores pedagógicos.
          </p>
        </div>

        {/* E-books Shelf Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {EBOOKS.map((book) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Responsive 3D physical book cover display mockup */}
              <div className="perspective-1000 mb-6 cursor-pointer" onClick={() => setDownloadingBook(book)}>
                <div className="w-56 h-80 rounded-r-xl shadow-lg hover:shadow-2xl bg-gradient-to-br from-brand-wine to-brand-wine-dark hover:-rotate-y-12 rotate-y-0 transition-transform duration-500 transform-style-3d relative border-l-8 border-black/25">
                  
                  {/* Subtle inner cover gradient & highlights */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/10 rounded-r-xl" />
                  
                  {/* Ribbon tag */}
                  <div className="absolute top-4 right-0 bg-brand-peach text-brand-wine text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-l-md shadow-sm">
                    {book.tag}
                  </div>

                  {/* Text on cover */}
                  <div className="absolute inset-x-4 bottom-8 top-12 flex flex-col justify-between items-start text-left text-brand-cream">
                    <div className="space-y-2">
                      <BookOpen className="w-8 h-8 text-brand-peach stroke-1.5" />
                      <h3 className="font-serif text-lg font-bold leading-tight select-none">
                        {book.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-1 w-full pt-4 border-t border-brand-cream/15">
                      <p className="text-[9px] font-mono text-brand-cream-dark/50 uppercase tracking-widest leading-none">
                        Indra Idiomas
                      </p>
                      <p className="text-[10px] font-medium text-brand-peach italic leading-none select-none">
                        Material Gratuito
                      </p>
                    </div>
                  </div>

                  {/* Book spine overlay simulation */}
                  <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-white/10" />
                </div>
              </div>

              {/* Title & short details underneath */}
              <h4 className="font-serif text-lg font-bold text-brand-wine group-hover:text-brand-peach transition-colors duration-300">
                {book.title}
              </h4>
              <p className="text-xs text-brand-charcoal/70 line-clamp-2 max-w-xs mt-2 leading-relaxed">
                {book.description}
              </p>

              <button
                onClick={() => setDownloadingBook(book)}
                className="mt-4 flex items-center gap-1.5 text-xs text-brand-peach hover:text-brand-wine font-bold tracking-wider uppercase transition-colors"
              >
                <ArrowDownToLine className="w-3.5 h-3.5" /> Baixar Grátis
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Download Book Modal */}
      <AnimatePresence>
        {downloadingBook && (
          <div className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-cream text-brand-charcoal max-w-md w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-cream-dark p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setDownloadingBook(null)}
                className="absolute top-4 right-4 p-1 rounded-full bg-brand-cream-dark/50 text-brand-charcoal hover:bg-brand-cream-dark transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-brand-wine/5 flex items-center justify-center text-brand-wine mx-auto">
                  <BookOpen className="w-6 h-6 text-brand-peach" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-brand-peach uppercase">E-book Gratuito</span>
                  <h4 className="font-serif text-xl font-bold text-brand-wine leading-tight">
                    {downloadingBook.title}
                  </h4>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed max-w-sm mx-auto">
                    Insira seu melhor e-mail abaixo. Enviaremos o arquivo em formato PDF instantaneamente para sua caixa de entrada junto com dicas bônus semanais.
                  </p>
                </div>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/20 text-green-700 p-4 rounded-2xl text-xs flex flex-col items-center gap-1"
                  >
                    <Check className="w-6 h-6 text-green-600 mb-1" />
                    <strong>Inscrição Realizada com Sucesso!</strong>
                    <span>Enviando o material para {email}...</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleDownloadSubmit} className="space-y-3">
                    <input
                      type="email"
                      required
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-center px-4 py-3.5 text-xs text-brand-charcoal border border-brand-cream-dark bg-white rounded-2xl focus:ring-1 focus:ring-brand-peach outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-brand-wine hover:bg-brand-wine-light text-brand-cream font-semibold text-xs py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-colors"
                    >
                      <ArrowDownToLine className="w-4 h-4" /> Enviar para meu E-mail
                    </button>
                  </form>
                )}

                <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-brand-charcoal/40 uppercase">
                  <Lock className="w-3 h-3" /> Respeitamos sua privacidade. Spam zero.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
