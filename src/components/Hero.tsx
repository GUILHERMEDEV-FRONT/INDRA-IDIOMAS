import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, HeartHandshake, Compass, GraduationCap } from 'lucide-react';
import { HERO_FEATURES } from '../data';
import heroStudent from '../assets/images/hero_student_1780083745741.png';

export default function Hero() {
  const iconMap: { [key: string]: any } = {
    Sparkles: Sparkles,
    HeartHandshake: HeartHandshake,
    Compass: Compass,
    GraduationCap: GraduationCap,
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
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
    <section id="inicio" className="relative pt-24 pb-8 md:pt-28 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background soft ambient blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-brand-peach/10 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-brand-gold/10 rounded-full filter blur-3xl pointer-events-none -z-10" />

      {/* Main Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full bg-brand-wine text-brand-cream rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-2xl border border-brand-wine-light/50"
      >
        {/* Subtle decorative grid/overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-wine-light/60 via-transparent to-transparent opacity-70 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6">
            <div className="inline-flex items-center gap-2 bg-brand-cream-dark/10 border border-brand-cream-dark/15 px-4 py-1.5 rounded-full">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-brand-peach uppercase font-semibold">
                Inglês | Alemão | Francês
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-brand-cream tracking-tight">
              Aprender um novo idioma é <span className="text-brand-peach italic">transformar</span> quem você é!
            </h1>

            <p className="text-sm sm:text-md text-brand-cream-dark/85 max-w-xl leading-relaxed">
              Desenvolva proficiência com uma metodologia personalizada e imersiva. Aulas individuais, professores certificados internacionalmente e uma abordagem que une crescimento linguístico e humano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={handleScrollToContact}
                className="bg-brand-peach hover:bg-brand-peach-light text-brand-wine transition-all duration-300 font-semibold text-sm px-8 py-4 rounded-full flex items-center justify-center gap-2 group shadow-lg hover:shadow-brand-peach/10"
              >
                Fazer Pré-Matrícula
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Student Image Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Elegant outer border ring */}
            <div className="absolute -inset-4 rounded-3xl border border-brand-cream-dark/10 pointer-events-none hidden sm:block" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-cream/10 bg-brand-wine-dark">
              <img
                src={heroStudent}
                alt="Estudante Indra Idiomas"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              
              {/* Image dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wine-dark/60 via-transparent to-transparent pointer-events-none" />

              {/* Slider/Carousel Navigation Accent */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-brand-wine/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-cream-dark/10">
                <button className="text-brand-cream/60 hover:text-brand-cream transition-colors duration-200">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-peach" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cream/35" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cream/35" />
                </div>
                <button className="text-brand-cream/60 hover:text-brand-cream transition-colors duration-200">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Floating features overlay bar */}
      <div id="features" className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {HERO_FEATURES.map((feature, idx) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-white/80 backdrop-blur-sm border border-brand-cream-dark/70 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-wine-dark/5 flex items-center justify-center text-brand-wine">
                {IconComponent && <IconComponent className="w-5 h-5 text-brand-peach" />}
              </div>
              <div>
                <h3 className="font-sans font-semibold text-brand-charcoal text-sm">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
