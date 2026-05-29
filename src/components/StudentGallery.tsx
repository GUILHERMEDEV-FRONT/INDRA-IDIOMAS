import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, ChevronRight, CheckCircle } from 'lucide-react';
import { REVIEWS, STUDENT_GALLERY_IMAGES } from '../data';

export default function StudentGallery() {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  return (
    <section className="py-20 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-[0.3em] text-brand-peach uppercase font-semibold">
            Nossos Alunos
          </h2>
          <p className="font-serif text-3xl sm:text-4xl text-brand-wine mt-3 font-semibold tracking-tight">
            Veja quantos sorrisos já conquistamos
          </p>
          <p className="text-sm text-brand-charcoal/70 mt-3 leading-relaxed">
            Nossos estudantes realizam conexões globais reais e alcançam seus maiores objetivos.
          </p>
        </div>

        {/* Gallery Interactive Face Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {STUDENT_GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden aspect-square border border-brand-cream-dark/60 shadow-xs group"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft hover pink accent tint */}
              <div className="absolute inset-0 bg-brand-wine/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Real Testimonials Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-cream-dark shadow-xs relative flex flex-col justify-between"
            >
              {/* Quote icon background ornament */}
              <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-brand-cream-dark/40 stroke-1" />

              <div>
                {/* Stars Selection */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-brand-charcoal/80 italic leading-relaxed mb-6 font-sans">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-cream-dark/50">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-brand-peach/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-bold text-sm text-brand-wine">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-brand-charcoal/60 mt-0.5 font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-brand-peach shrink-0" />
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
