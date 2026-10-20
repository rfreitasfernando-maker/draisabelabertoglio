import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

/**
 * Lista de atendimentos de uma página de destino (src/lib/landings.js), no lugar do bloco
 * "Este acompanhamento é ideal para você que..." da página inicial, que é todo de emagrecimento.
 */
const Servicos = ({ sobretitulo, titulo, texto, itens, cta }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="servicos" className="scroll-mt-20 md:scroll-mt-24 py-12 md:py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className={`max-w-5xl mx-auto reveal${isInView ? ' is-visible' : ''}`}>
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">{sobretitulo}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark leading-tight">
              {`${titulo.antes} `}
              <span className="text-brand-gold italic">{titulo.destaque}</span>
              {titulo.depois && ` ${titulo.depois}`}
            </h2>
            <p className="mt-4 text-base text-brand-light-gray font-light max-w-2xl mx-auto leading-relaxed">{texto}</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {itens.map((item, index) => (
              <li
                key={item.titulo}
                className="bg-white rounded-xl p-6 md:p-7 border border-brand-gold/5 hover:border-brand-gold/15 transition-all duration-500 reveal reveal-sm"
                style={{ '--reveal-delay': `${(index % 4) * 0.06}s` }}
              >
                <h3 className="text-lg md:text-xl font-serif text-brand-dark leading-snug">{item.titulo}</h3>
                <p className="mt-2 text-sm md:text-base text-brand-dark-gray/70 leading-relaxed font-light">{item.descricao}</p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <a
              href={WHATSAPP_URL}
              onClick={(e) => trackWhatsappClick('servicos', e)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500"
            >
              {cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
