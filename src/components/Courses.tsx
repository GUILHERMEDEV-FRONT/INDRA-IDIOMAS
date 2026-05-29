import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Award, Compass, BookOpen, Clock, X } from 'lucide-react';
import { COURSES, Course } from '../data';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="cursos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[10%] w-[250px] h-[250px] bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-mono tracking-[0.3em] text-brand-peach uppercase font-semibold">
          Idiomas Disponíveis
        </h2>
        <p className="font-serif text-3xl sm:text-4xl text-brand-wine mt-3 font-semibold tracking-tight">
          Encontre o curso ideal para você
        </p>
        <p className="text-sm sm:text-md text-brand-charcoal/70 mt-4 leading-relaxed">
          Com aulas virtuais individuais, metodologia de ensino customizada e foco no crescimento e desenvolvimento pessoal, temos o curso adequado ao seu objetivo específico.
        </p>
      </div>

      {/* Courses Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-8 border border-brand-cream-dark shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header inside card */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-wine">
                    {course.name}
                  </h3>
                  <p className="text-xs font-sans text-brand-charcoal/60 mt-0.5">
                    {course.tagline}
                  </p>
                </div>
                <div className="text-4xl filter drop-shadow-sm select-none">
                  {course.flag}
                </div>
              </div>

              <p className="font-sans text-sm text-brand-charcoal/75 leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Badges */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 bg-brand-cream/70 border border-brand-cream-dark/50 px-3 py-1.5 rounded-lg">
                  <Award className="w-3.5 h-3.5 text-brand-peach shrink-0" />
                  <span><strong>Nível:</strong> {course.levels.split(' ')[0]} {course.levels.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-charcoal/80 bg-brand-cream/70 border border-brand-cream-dark/50 px-3 py-1.5 rounded-lg">
                  <Compass className="w-3.5 h-3.5 text-brand-peach shrink-0" />
                  <span className="truncate"><strong>Foco:</strong> {course.focus}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedCourse(course)}
              className="w-full text-center py-3.5 rounded-xl border border-brand-wine-light/25 hover:border-brand-wine bg-transparent hover:bg-brand-wine text-brand-wine hover:text-brand-cream font-semibold text-xs transition-all duration-300 tracking-wider uppercase"
            >
              Saiba Mais
            </button>
          </motion.div>
        ))}
      </div>

      {/* Mid Banner CTA (Faça sua pré-matrícula) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 bg-brand-wine-dark text-brand-cream rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-brand-wine-light/30"
      >
        <div className="text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-[0.2em] text-brand-peach uppercase">Inicie sua jornada</span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">Quer impulsionar sua carreira e novos horizontes?</h3>
          <p className="text-xs text-brand-cream-dark/75 mt-1">Inscreva-se hoje nas aulas experimentais personalizadas.</p>
        </div>
        <a
          href="#contato"
          className="bg-brand-peach hover:bg-brand-peach-light text-brand-wine font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-colors tracking-wide shadow-md hover:shadow-brand-peach/10"
        >
          Pré-matrícula Grátis
        </a>
      </motion.div>

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-brand-cream text-brand-charcoal max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-cream-dark"
            >
              {/* Modal Header */}
              <div className="bg-brand-wine p-6 text-brand-cream flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl leading-none select-none">{selectedCourse.flag}</span>
                    <div>
                      <h4 className="font-serif text-2xl font-bold">{selectedCourse.name}</h4>
                      <p className="text-xs text-brand-peach-light tracking-wide">{selectedCourse.tagline}</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-1 rounded-full bg-black/10 hover:bg-black/25 text-brand-cream transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-wine-light mb-2">
                    Sobre o Programa
                  </h5>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-brand-cream-dark">
                    <h6 className="font-bold text-xs text-brand-wine-light mb-1">Níveis Disponíveis</h6>
                    <p className="text-xs text-brand-charcoal/80">{selectedCourse.levels}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-brand-cream-dark">
                    <h6 className="font-bold text-xs text-brand-wine-light mb-1">Foco e Customização</h6>
                    <p className="text-xs text-brand-charcoal/80">{selectedCourse.focus}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-wine-light mb-3">
                    O que você vai conquistar no curso:
                  </h5>
                  <ul className="space-y-3">
                    {selectedCourse.details.map((detail, index) => (
                      <li key={index} className="flex gap-3 text-xs sm:text-sm text-brand-charcoal/85 items-start">
                        <span className="w-5 h-5 rounded-full bg-brand-peach/10 flex items-center justify-center text-brand-peach shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-brand-cream-dark/50 border-t border-brand-cream-dark flex flex-col sm:flex-row gap-3 justify-end items-center">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="font-semibold text-brand-charcoal/70 hover:text-brand-charcoal text-xs px-6 py-3 border border-brand-cream-dark/80 bg-white rounded-full transition-colors"
                >
                  Fechar
                </button>
                <a
                  href="#contato"
                  onClick={() => setSelectedCourse(null)}
                  className="w-full sm:w-auto text-center bg-brand-wine hover:bg-brand-wine-light text-brand-cream font-semibold text-xs px-8 py-3 rounded-full transition-colors"
                >
                  Quero Fazer Uma Aula Experimental
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
