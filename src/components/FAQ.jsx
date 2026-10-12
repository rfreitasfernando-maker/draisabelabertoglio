import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';
import { FAQ as PERGUNTAS } from '@/lib/faq';

// <details> nativo: a resposta fica no HTML pré-renderizado mesmo fechada,
// e robôs que não executam JavaScript (buscadores de IA) conseguem lê-la.
const FAQItem = ({ question, answer, index }) => (
  <div>
    <details className="group">
      <summary className="w-full flex items-center justify-between py-5 md:py-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold/40">
        <span className="flex items-center gap-4 pr-6">
          <span className="flex-shrink-0 text-xs font-sans text-brand-gold tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-base md:text-lg font-serif font-normal transition-colors duration-300 text-brand-dark group-hover:text-brand-gold group-open:text-brand-gold">
            {question}
          </h3>
        </span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 text-brand-gold/40 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <p className="pb-6 pl-10 md:pl-12 text-sm md:text-base text-brand-dark-gray/75 leading-[1.9] font-light max-w-2xl">
        {answer}
      </p>
    </details>
    <div className="h-px bg-brand-gold/5" />
  </div>
);

const FAQ = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="duvidas" className="scroll-mt-20 md:scroll-mt-24 py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className={`max-w-3xl mx-auto reveal${isInView ? ' is-visible' : ''}`}>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-base text-brand-light-gray font-light max-w-xl mx-auto">
              Emagrecimento com acompanhamento médico e Unyque Pro em São Paulo
            </p>
          </div>
          
          <div>
            {PERGUNTAS.map(({ pergunta, resposta }, index) => (
              <FAQItem key={pergunta} index={index} question={pergunta} answer={resposta} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} onClick={(e) => trackWhatsappClick('faq', e)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
              Ainda tem dúvidas? Fale conosco
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
