import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const WhatsIncluded = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const items = [
    'Consultas regulares com acompanhamento próximo',
    'Plano alimentar possível de seguir no dia a dia',
    'Bioimpedâncias seriadas para acompanhar evolução real',
    'Ajustes médicos conforme sua resposta ao tratamento',
    'Suporte profissional durante todo o processo',
    'Construção e adaptação do protocolo ao longo do tempo',
    'Reavaliação contínua de exames',
    'Ajustes farmacológicos personalizados (quando indicados)'
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Seu plano
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark">
              O que você recebe no acompanhamento
            </h2>
          </div>
          
          <div className="bg-white border border-brand-gold/10 p-5 md:p-12">
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 mb-12">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="flex items-start gap-4 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                  <span className="text-brand-dark-gray/75 text-base font-light leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-brand-gold/10 pt-8">
              <motion.a
                href={WHATSAPP_URL}
                onClick={() => trackWhatsappClick('plano')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full group bg-brand-gold text-white px-8 py-5 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500 flex items-center justify-center gap-3"
              >
                Quero saber se esse plano é para mim
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
