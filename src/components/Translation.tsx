import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, GraduationCap, Cpu, PenTool, Calculator, ChevronRight, Check, Send } from 'lucide-react';
import { TRANSLATION_SERVICES } from '../data';

export default function Translation() {
  // Config state for the interactive estimator
  const [docType, setDocType] = useState('simples');
  const [langPair, setLangPair] = useState('en-pt');
  const [wordCount, setWordCount] = useState(500);
  const [isEstimated, setIsEstimated] = useState(false);

  const iconMap: { [key: string]: any } = {
    Building2: Building2,
    GraduationCap: GraduationCap,
    Cpu: Cpu,
    PenTool: PenTool,
  };

  // Realistic calculation formula
  const getRatePerWord = () => {
    let rate = 0.22; // default
    if (docType === 'juramentada') rate += 0.12; // sworn translation costs extra
    if (langPair === 'de-pt') rate += 0.08; // German is more complex
    if (langPair === 'fr-pt') rate += 0.04; // French is medium
    return rate;
  };

  const calculatedPrice = Math.max(80, Math.round(wordCount * getRatePerWord()));
  const calculatedDays = Math.max(1, Math.ceil(wordCount / 1200));

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Olá Indra Idiomas! Gostaria de solicitar um orçamento formal de Tradução.\n\n` +
      `- Modalidade: Tradução ${docType === 'juramentada' ? 'Juramentada' : 'Simples/Livre'}\n` +
      `- Par de Idiomas: ${langPair === 'en-pt' ? 'Inglês <-> Português' : langPair === 'de-pt' ? 'Alemão <-> Português' : 'Francês <-> Português'}\n` +
      `- Tamanho estimado: ~${wordCount} palavras\n` +
      `- Estimativa rápida no site: R$ ${calculatedPrice},00 (Prazo: ${calculatedDays} d.u.)\n\n` +
      `Gostaria de enviar meus documentos para validação.`
    );
    window.open(`https://wa.me/5521999999999?text=${text}`, '_blank');
  };

  return (
    <section id="traducao" className="py-20 bg-brand-cream border-t border-brand-cream-dark/65 relative overflow-hidden">
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-brand-peach/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-[0.3em] text-brand-peach uppercase font-semibold">
            Serviços de Tradução
          </h2>
          <p className="font-serif text-3xl sm:text-4xl text-brand-wine mt-3 font-semibold tracking-tight">
            Traduções profissionais com excelência e precisão
          </p>
          <p className="text-sm sm:text-md text-brand-charcoal/70 mt-4 leading-relaxed">
            Cuidamos para que suas traduções sejam culturalmente adequadas, precisas e tecnicamente perfeitas, mantendo a integridade nos idiomas de origem e de destino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Services Descriptions Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TRANSLATION_SERVICES.map((service, idx) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-brand-cream-dark/60 shadow-xs flex flex-col gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-wine/5 flex items-center justify-center text-brand-wine">
                      {IconComponent && <IconComponent className="w-5 h-5 text-brand-peach" />}
                    </div>
                    <h3 className="font-sans font-bold text-sm text-brand-wine">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick trust badges */}
            <div className="bg-brand-cream-dark/40 border border-brand-cream-dark/50 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between text-brand-charcoal/80 text-xs">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0" />
                Juramentadas oficiais JUCERJA
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0" />
                Sigilo absoluto (NDA)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0" />
                Formatos originais mantidos
              </span>
            </div>
          </div>

          {/* Price Estimator Calculator Column */}
          <div className="lg:col-span-6">
            <div className="bg-brand-wine text-brand-cream rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-wine-light relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-brand-cream/10 rounded-xl border border-brand-brand-cream/15 text-brand-peach">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold">Simulação de Tradução</h3>
                    <p className="text-[11px] text-brand-cream-dark/75">Simule prazos e custos para suas demandas</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Document Type Selection */}
                  <div>
                    <label className="block text-xs font-mono font-medium tracking-wide text-brand-peach uppercase mb-2">
                      Modalidade da Tradução
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => { setDocType('simples'); setIsEstimated(true); }}
                        className={`py-2 px-3 border text-xs font-semibold rounded-xl transition-all duration-200 ${
                          docType === 'simples'
                            ? 'border-brand-peach bg-brand-peach/10 text-brand-cream'
                            : 'border-brand-cream-dark/15 text-brand-cream-dark/80 hover:bg-white/5'
                        }`}
                      >
                        Livre / Simples
                      </button>
                      <button
                        onClick={() => { setDocType('juramentada'); setIsEstimated(true); }}
                        className={`py-2 px-3 border text-xs font-semibold rounded-xl transition-all duration-200 ${
                          docType === 'juramentada'
                            ? 'border-brand-peach bg-brand-peach/10 text-brand-cream'
                            : 'border-brand-cream-dark/15 text-brand-cream-dark/80 hover:bg-white/5'
                        }`}
                      >
                        Juramentada (Oficial)
                      </button>
                    </div>
                  </div>

                  {/* Language Pair Selection */}
                  <div>
                    <label className="block text-xs font-mono font-medium tracking-wide text-brand-peach uppercase mb-2">
                      Par de Idiomas
                    </label>
                    <select
                      value={langPair}
                      onChange={(e) => { setLangPair(e.target.value); setIsEstimated(true); }}
                      className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark/20 bg-brand-wine-dark/60 text-brand-cream text-xs focus:ring-1 focus:ring-brand-peach outline-none"
                    >
                      <option value="en-pt">Inglês ⇆ Português (Brasil)</option>
                      <option value="de-pt">Alemão ⇆ Português (Brasil)</option>
                      <option value="fr-pt">Francês ⇆ Português (Brasil)</option>
                    </select>
                  </div>

                  {/* Word count slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-mono font-medium tracking-wide text-brand-peach uppercase">
                        Volume aproximado
                      </label>
                      <span className="text-xs font-mono font-bold text-brand-cream">
                        {wordCount} palavras (~{Math.max(1, Math.round(wordCount / 300))} l.)
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={wordCount}
                      onChange={(e) => { setWordCount(Number(e.target.value)); setIsEstimated(true); }}
                      className="w-full accent-brand-peach bg-brand-wine-dark/70 h-1.5 rounded-full cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-brand-cream-dark/40 font-mono mt-1">
                      <span>100 p.</span>
                      <span>5k p.</span>
                      <span>10k p.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate results display */}
              <div className="mt-8 pt-6 border-t border-brand-cream-dark/15">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-brand-peach uppercase block">
                      Estimativa básica:
                    </span>
                    <span className="text-2xl sm:text-3xl font-serif font-black text-brand-cream">
                      R$ {calculatedPrice}
                      <span className="text-xs font-sans text-brand-cream-dark/70 font-semibold ml-1">,00</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono tracking-wider text-brand-cream-dark/50 uppercase block">
                      Tempo de entrega:
                    </span>
                    <span className="text-md sm:text-base font-semibold text-brand-cream block pt-1">
                      {calculatedDays} {calculatedDays === 1 ? 'dia útil' : 'dias úteis'}*
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full mt-6 bg-brand-peach hover:bg-brand-peach-light text-brand-wine font-semibold text-xs py-4 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 shadow-md"
                >
                  Confirmar e Solicitar no WhatsApp
                  <Send className="w-3.5 h-3.5" />
                </button>
                <span className="text-[9px] font-mono text-brand-cream-dark/40 block text-center mt-2.5">
                  *Esta é uma estimativa de referência. Valores finais dependem da complexidade dos originais.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
