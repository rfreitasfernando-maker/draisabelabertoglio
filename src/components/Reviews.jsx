import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

// Ficha da Dra. Isabela no Google Maps (CID do mesmo local do mapa do site).
const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?cid=17414812094946494450';

// Trechos de avaliações reais do Google (nota 5). Só corrigimos digitação e espaçamento.
const reviews = [
  {
    name: 'Beatriz Damasceno',
    text: 'Dra. Isabela superou minhas expectativas, deu todo o suporte durante o processo de emagrecimento e acompanhou de perto. Gostei que toda semana fiz bioimpedância e a dra. avaliou, perdi 18kg. Valeu a pena e super indico.',
  },
  {
    name: 'Júlia Vitória Silva Lima',
    text: 'A Dra. Isabela é uma ótima profissional! Muito atenciosa, competente e cuidadosa. Explica tudo com clareza e faz um atendimento realmente personalizado. Me senti muito bem acolhida.',
  },
  {
    name: 'Jaqueline Ferreira',
    text: 'Fui muito bem recebida pela doutora Isabela Bertoglio e por toda a equipe. A doutora explicou tudo com muito carinho, atenção e paciência, tirando minhas dúvidas e orientando sobre cada passo do meu processo de emagrecimento. Me senti acolhida e motivada.',
  },
  {
    name: 'Adriana Ferrarezi',
    text: 'O que falar da Dra. Isabela, uma profissional rara, com profissionalismo e conhecimento impecáveis, mas principalmente de uma empatia, carinho e amor com todos os seus pacientes. É dessa forma que me sinto com ela: acolhida e segura.',
  },
];

const GoogleG = () => (
  <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const Reviews = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="py-12 md:py-20 bg-brand-warm/60">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-4">
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark">
            O que as pacientes dizem
          </h2>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex max-w-md items-center gap-4 bg-white border border-brand-gold/15 p-5 hover:border-brand-gold/40 transition-colors duration-300"
          >
            <div className="text-4xl font-serif text-brand-dark">5,0</div>
            <div className="text-[15px] leading-snug font-sans">
              <div className="text-brand-gold tracking-wide" aria-label="5 de 5 estrelas">★★★★★</div>
              <div className="mt-0.5 font-medium text-brand-dark">Avaliações do Google</div>
              <div className="text-sm text-brand-light-gray">Nota máxima das pacientes</div>
            </div>
          </a>

          <div className="mt-5 -mx-6 px-6 md:mx-0 md:px-0 flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-0 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex shrink-0 basis-[88%] sm:basis-[46%] lg:basis-[31%] snap-start flex-col bg-white border border-brand-gold/10 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <GoogleG />
                  <div className="text-[15px] tracking-wide text-brand-gold" aria-label="5 de 5 estrelas">★★★★★</div>
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] md:text-base font-sans font-light leading-relaxed text-brand-dark-gray">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-sans font-medium text-brand-gold">
                  — {review.name}
                </figcaption>
              </figure>
            ))}
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-sans font-medium text-brand-gold underline underline-offset-4 hover:text-brand-dark transition-colors duration-300"
          >
            Ver todas as avaliações no Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
