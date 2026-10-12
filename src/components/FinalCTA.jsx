import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const FinalCTA = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className={`max-w-3xl mx-auto text-center reveal${isInView ? ' is-visible' : ''}`}>
          <div className="w-12 h-px bg-brand-gold mx-auto mb-10" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-brand-dark mb-6 leading-[1.15]">
            Agende sua consulta
          </h2>
          <p className="text-lg text-brand-light-gray mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Entre em contato para agendar uma avaliação personalizada. Acompanhamento exclusivo com horários flexíveis.
          </p>

          <a
            href={WHATSAPP_URL}
            onClick={(e) => trackWhatsappClick('contato', e)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brand-gold text-white px-10 py-5 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-500"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a
            href={WHATSAPP_URL}
            onClick={(e) => trackWhatsappClick('contato_telefone', e)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-[44px] mt-8 py-3 text-xs tracking-[0.2em] uppercase text-brand-light-gray font-sans hover:text-brand-gold transition-colors duration-300"
          >
            WhatsApp: (11) 99975-8182
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
