import React from 'react';
import { NAV_LINKS } from '../data';
import { Phone, Mail, MapPin, ShieldAlert, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-wine-dark text-brand-cream border-t border-brand-wine/40">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Block */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest text-brand-cream">
              INDRA
            </span>
            <span className="text-[10px] font-sans uppercase tracking-[0.34em] text-brand-peach font-bold -mt-1">
              idiomas
            </span>
          </div>
          
          <p className="text-xs text-brand-cream-dark/75 leading-relaxed max-w-xs font-sans">
            Educação com valores humanos e foco em desenvolvimento integral. Do iniciante ao avançado, prepare-se para ser um cidadão global.
          </p>

          <div className="flex gap-3">
            <a href="https://instagram.com/indraidiomas" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-brand-cream/10 hover:bg-brand-cream/25 text-brand-cream flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/indraidiomas" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-brand-cream/10 hover:bg-brand-cream/25 text-brand-cream flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="font-serif text-sm font-bold text-brand-peach mb-4 uppercase tracking-widest">
            Mapa do Site
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-brand-cream-dark/80 hover:text-brand-cream transition-colors font-sans font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses & Services Map */}
        <div>
          <h4 className="font-serif text-sm font-bold text-brand-peach mb-4 uppercase tracking-widest">
            Frentes de Atuação
          </h4>
          <ul className="space-y-2.5 text-xs text-brand-cream-dark/80">
            <li>Curso de Inglês Individual</li>
            <li>Curso de Alemão Individual</li>
            <li>Curso de Francês Individual</li>
            <li>Traduções Corporativas</li>
            <li>Traduções Juramentadas</li>
          </ul>
        </div>

        {/* Contact info block */}
        <div>
          <h4 className="font-serif text-sm font-bold text-brand-peach mb-4 uppercase tracking-widest">
            Atendimento
          </h4>
          <ul className="space-y-3.5 text-xs text-brand-cream-dark/80">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-brand-peach shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium">Ligue ou escreva:</span>
                <span className="font-mono text-[11px] font-bold text-brand-cream">(21) 98859-9130</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-brand-peach shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium">E-mail:</span>
                <span className="font-mono text-[11px] text-brand-cream">contato@indraidiomas.com.br</span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-peach shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium">Sede Principal:</span>
                <span>Atendimento Digital Integrado & Secretária</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="bg-brand-wine-dark border-t border-brand-cream-dark/10 py-6 text-center text-[11px] text-brand-cream-dark/50 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-sans leading-relaxed text-center sm:text-left">
            <p>© {currentYear} Indra Idiomas. Todos os direitos reservados. CNPJ: 45.417.810/0001-38</p>
            <p className="mt-0.5 text-[10px] text-brand-cream-dark/40">Inovando e ensinando com excelência acadêmica e valores humanos.</p>
          </div>
          
          <div className="flex gap-4 font-medium">
            <a href="#termos" className="hover:text-brand-cream transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#privacidade" className="hover:text-brand-cream transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
