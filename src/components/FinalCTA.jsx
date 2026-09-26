import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const FinalCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-12 h-px bg-brand-gold mx-auto mb-10" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-brand-dark mb-6 leading-[1.15]">
            Agende sua consulta
          </h2>
          <p className="text-lg text-brand-light-gray mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Entre em contato para agendar uma avaliação personalizada. Acompanhamento exclusivo com horários flexíveis.
          </p>

          <motion.a
            href={WHATSAPP_URL}
            onClick={() => trackWhatsappClick('contato')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-brand-gold text-white px-10 py-5 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          <a
            href={WHATSAPP_URL}
            onClick={() => trackWhatsappClick('contato_telefone')}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-8 py-3 text-xs tracking-[0.2em] uppercase text-brand-light-gray/50 font-sans hover:text-brand-gold transition-colors duration-300"
          >
            WhatsApp: (11) 99975-8182
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
