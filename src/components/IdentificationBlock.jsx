import React from 'react';
import { motion } from 'framer-motion';
import { Ban, ShieldAlert, Target, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const IdentificationBlock = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const items = [
    {
      icon: Ban,
      text: <>Tentou <strong>dieta, treino ou remédio</strong> sem sucesso</>
    },
    {
      icon: ShieldAlert,
      text: <>Evita certas <strong>roupas, fotos</strong> e até mesmo o <strong>espelho</strong></>
    },
    {
      icon: Target,
      text: <>Dorme mal e vive <strong>sem disposição</strong></>
    },
    {
      icon: Sparkles,
      text: <>Tem a sensação de que algo no seu corpo <strong>não está funcionando</strong> como deveria</>
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark leading-tight">
              Este acompanhamento é <span className="text-brand-gold italic">ideal</span>
              <br />para você que...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 md:p-7 flex items-start gap-5 border border-brand-gold/5 hover:border-brand-gold/15 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <p className="text-sm md:text-base text-brand-dark-gray/70 leading-relaxed font-light [&>strong]:font-medium [&>strong]:text-brand-dark-gray">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} onClick={(e) => trackWhatsappClick('identificacao', e)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
              Quero começar meu tratamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentificationBlock;
