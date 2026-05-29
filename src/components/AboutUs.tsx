import { motion } from 'motion/react';
import { Shield, Target, Award, Users } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { value: '100%', label: 'Aulas individuais' },
    { value: '15+', label: 'Anos de experiência' },
    { value: '2.500+', label: 'Alunos formados' },
    { value: '99.4%', label: 'De satisfação' },
  ];

  return (
    <section id="sobre-nos" className="py-20 bg-brand-cream border-t border-b border-brand-cream-dark/65 relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] bg-brand-wine/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Storytelling Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <h2 className="text-xs font-mono tracking-[0.3em] text-brand-peach uppercase font-semibold">
              Quem Somos
            </h2>
            <h3 className="font-serif text-3xl sm:text-4xl text-brand-wine font-semibold leading-tight tracking-tight">
              Uma escola digital de idiomas para quem busca mais do que um curso tradicional
            </h3>
            
            <div className="space-y-4 text-brand-charcoal/80 text-sm sm:text-base leading-relaxed">
              <p>
                Na <span className="font-semibold text-brand-wine">Indra Idiomas</span>, acreditamos que aprender um novo idioma não se limita a decorar regras de gramática ou acumular vocabulário. Buscamos capacitar o estudante a se expressar de forma autêntica e confiante em qualquer cenário global.
              </p>
              <p>
                Nossa metodologia foi desenhada para colocar o <strong className="text-brand-charcoal">foco integral no aluno</strong>. Cada aula de inglês, alemão ou francês é estruturada de acordo com seus objetivos imediatos — seja uma promoção corporativa, uma viagem desejada ou a preparação para exames de proficiência internacional.
              </p>
              <p className="border-l-2 border-brand-peach pl-4 italic text-brand-charcoal/90">
                "Não entregamos apenas aulas; ensinamos com valores reais, promovendo empatia, raciocínio lógico e clareza cultural para preparar cidadãos prontos para fazerem a diferença no mundo."
              </p>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-6 pt-6 border-t border-brand-cream-dark">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left bg-white/40 backdrop-blur-xs p-4 rounded-xl border border-brand-cream-dark/50 shadow-xs">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-brand-wine">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-brand-charcoal/60 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical/Emblem Branding Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="bg-brand-wine-dark text-brand-cream p-10 rounded-3xl w-full max-w-[400px] border border-brand-wine/50 shadow-xl relative overflow-hidden flex flex-col justify-between aspect-[1/1] text-center"
            >
              <div className="absolute inset-0 bg-radial-gradient(circle at center, var(--tw-gradient-stops)) from-brand-wine-light/35 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-cream/10 border border-brand-cream/15 flex items-center justify-center">
                  <Award className="w-8 h-8 text-brand-peach" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif text-3xl sm:text-4xl tracking-widest font-bold">
                    INDRA
                  </h4>
                  <p className="text-[11px] font-mono uppercase tracking-[0.4em] text-brand-peach">
                    IDIOMAS
                  </p>
                </div>
                
                <div className="w-1/3 h-[1px] bg-brand-peach/40" />

                <p className="text-xs text-brand-cream-dark/85 font-mono uppercase tracking-widest leading-relaxed max-w-[250px]">
                  Education With Values
                </p>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-peach/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-brand-peach/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-brand-peach/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-peach/30" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
