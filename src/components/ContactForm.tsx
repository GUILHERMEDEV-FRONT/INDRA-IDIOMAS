import  { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Send, Sparkles, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    idioma: 'Inglês',
    objetivo: 'Profissional / Carreira',
    mensagem: ''
  });

  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate simple required fields
    if (!formData.nome || !formData.whatsapp || !formData.email) return;

    // Simulate database record creation & display success message
    setIsSubmitSuccess(true);
    
    // Also save pre-enrollment locally to show persistence
    const savedLeads = JSON.parse(localStorage.getItem('indra_leads') || '[]');
    savedLeads.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('indra_leads', JSON.stringify(savedLeads));
  };

  const contactBullets = [
    'Aula experimental customizada sem custo',
    'Nivelamento oral guiado por coordenador',
    'Horários 100% flexíveis (Manhã, Tarde ou Noite)',
    'Contratação simplificada, sem taxa de matrícula',
  ];

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Olá Indra Idiomas! Acabei de preencher a pré-matrícula no site:\n\n` +
      `- Nome: ${formData.nome}\n` +
      `- E-mail: ${formData.email}\n` +
      `- WhatsApp: ${formData.whatsapp}\n` +
      `- Idioma: ${formData.idioma}\n` +
      `- Objetivo: ${formData.objetivo}\n\n` +
      `Gostaria de agendar minha aula experimental!`
    );
    window.open(`https://wa.me/5531975418023?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-brand-cream border-t border-brand-cream-dark/65 relative overflow-hidden">
      {/* Background radial decor */}
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-peach/10 border border-brand-peach/20 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-brand-peach" />
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-brand-wine font-bold uppercase">
                Pré-Matrícula Aberta
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-brand-wine font-semibold leading-tight tracking-tight">
              Faça sua inscrição e mude sua vida acadêmica e profissional
            </h3>

            <p className="text-sm sm:text-md text-brand-charcoal/70 leading-relaxed">
              Diga adeus às turmas superlotadas e metodologias estáticas. Preencha seus dados para receber o contato do nosso coordenador e iniciar sua jornada de fluência acelerada.
            </p>

            {/* Check bullets */}
            <ul className="space-y-3 pt-2">
              {contactBullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3 text-xs sm:text-sm text-brand-charcoal/85 items-center">
                  <span className="w-5 h-5 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-peach shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Quick contact shortcuts */}
            <div className="pt-6 border-t border-brand-cream-dark/60 grid grid-cols-2 gap-4">
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-lg bg-brand-wine/5 flex items-center justify-center text-brand-wine">
                  <Phone className="w-4 h-4 text-brand-peach" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-charcoal/50 block font-mono">Contato Direto</span>
                  <span className="text-xs font-mono font-bold text-brand-wine">(21) 98859-9130</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-lg bg-brand-wine/5 flex items-center justify-center text-brand-wine">
                  <MapPin className="w-4 h-4 text-brand-peach" />
                </div>
                <div>
                  <span className="text-[10px] text-brand-charcoal/50 block font-mono">Sede Digital</span>
                  <span className="text-xs font-bold text-brand-wine">Rio de Janeiro / RJ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead/Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-brand-cream-dark relative">
              
              {isSubmitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold text-brand-wine">Pré-Matrícula Recebida!</h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed">
                      Seus dados foram catalogados e estão em fase de homologação. Fale com nosso suporte agora mesmo no WhatsApp para obter atendimento imediato:
                    </p>
                  </div>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-xs py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" /> Acelerar no WhatsApp
                  </button>
                  <button
                    onClick={() => { setIsSubmitSuccess(false); setFormData({ nome: '', whatsapp: '', email: '', idioma: 'Inglês', objetivo: 'Profissional / Carreira', mensagem: '' }); }}
                    className="text-xs text-brand-charcoal/50 hover:text-brand-charcoal font-medium underline block mx-auto"
                  >
                    Preencher Novo Formulário
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono font-medium tracking-wide text-brand-wine-light uppercase mb-1">
                      Nome Completo *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ex: João Ferreira da Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark text-xs text-brand-charcoal bg-brand-cream/45 focus:bg-white focus:ring-1 focus:ring-brand-peach outline-none font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-medium tracking-wide text-brand-wine-light uppercase mb-1">
                        WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="Ex: (21) 98859-9130"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark text-xs text-brand-charcoal bg-brand-cream/45 focus:bg-white focus:ring-1 focus:ring-brand-peach outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-medium tracking-wide text-brand-wine-light uppercase mb-1">
                        E-mail *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Ex: joao@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark text-xs text-brand-charcoal bg-brand-cream/45 focus:bg-white focus:ring-1 focus:ring-brand-peach outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-medium tracking-wide text-brand-wine-light uppercase mb-1">
                        Idioma de Interesse
                      </label>
                      <select
                        value={formData.idioma}
                        onChange={(e) => setFormData({ ...formData, idioma: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark text-xs text-brand-charcoal bg-brand-cream/45 focus:bg-white focus:ring-1 focus:ring-brand-peach outline-none font-sans"
                      >
                        <option value="Inglês">Inglês 🇺🇸</option>
                        <option value="Alemão">Alemão 🇩🇪</option>
                        <option value="Francês">Francês 🇫🇷</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-medium tracking-wide text-brand-wine-light uppercase mb-1">
                        Principal Objetivo
                      </label>
                      <select
                        value={formData.objetivo}
                        onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                        className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark text-xs text-brand-charcoal bg-brand-cream/45 focus:bg-white focus:ring-1 focus:ring-brand-peach outline-none font-sans"
                      >
                        <option value="Profissional / Carreira">Profissional / Carreira</option>
                        <option value="Viagens e Turismo">Viagens e Turismo</option>
                        <option value="Estudos ou Intercâmbio">Estudos ou Intercâmbio</option>
                        <option value="Crescimento Pessoal">Crescimento Pessoal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-medium tracking-wide text-brand-wine-light uppercase mb-1">
                      Mensagem Adicional (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Diga suas preferências, nível atual ou necessidades..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full py-2.5 px-3 rounded-xl border border-brand-cream-dark text-xs text-brand-charcoal bg-brand-cream/45 focus:bg-white focus:ring-1 focus:ring-brand-peach outline-none font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-wine hover:bg-brand-wine-light text-brand-cream font-semibold text-xs py-4 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Confirmar Envio e Garantir Vaga
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <span className="text-[9px] font-mono text-brand-charcoal/40 block text-center">
                    🔒 Seus dados estão 100% seguros sob a Lei Geral de Proteção de Dados (LGPD).
                  </span>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
