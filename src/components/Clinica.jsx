import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const photos = [
  { src: '/clinica/clinica-belvita-recepcao.webp', label: 'Recepção' },
  { src: '/clinica/clinica-belvita-sala-de-espera.webp', label: 'Espaço de espera' },
  { src: '/clinica/clinica-belvita-consultorio.webp', label: 'Consultório' },
  { src: '/clinica/clinica-belvita-detalhes-consultorio.webp', label: 'Detalhes do consultório' },
];

const Clinica = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  // Carrossel com a rolagem nativa do navegador (scroll-snap), sem biblioteca: as medidas são lidas
  // só no evento de rolagem e no ResizeObserver, depois do layout, sem forçar reflow na hidratação.
  const trilho = useRef(null);
  const [posicao, setPosicao] = useState({ atual: 0, total: 0, inicio: true, fim: false });

  const passo = () => trilho.current.firstElementChild.offsetWidth;

  const medir = useCallback(() => {
    const el = trilho.current;
    const largura = passo();
    const maximo = el.scrollWidth - el.clientWidth;
    const nova = {
      atual: Math.round(el.scrollLeft / largura),
      total: Math.round(maximo / largura) + 1,
      inicio: el.scrollLeft <= 1,
      fim: el.scrollLeft >= maximo - 1,
    };
    setPosicao((antiga) => (Object.keys(nova).every((k) => nova[k] === antiga[k]) ? antiga : nova));
  }, []);

  useEffect(() => {
    const el = trilho.current;
    const observador = new ResizeObserver(medir);
    observador.observe(el);
    el.addEventListener('scroll', medir, { passive: true });
    return () => {
      observador.disconnect();
      el.removeEventListener('scroll', medir);
    };
  }, [medir]);

  const irPara = (indice) => trilho.current.scrollTo({ left: indice * passo(), behavior: 'smooth' });

  const arrowClass = 'hidden md:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white/90 text-brand-dark shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none';

  return (
    <section className="py-12 md:py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div ref={ref} className={`reveal${isInView ? ' is-visible' : ''}`}>
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Espaço
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark mb-4">
              Nossa Clínica
            </h2>
            <p className="text-base text-brand-light-gray font-light max-w-xl mx-auto">
              Um ambiente acolhedor e moderno, pensado para o seu conforto e bem-estar
            </p>
          </div>

          <div className="relative" role="region" aria-roledescription="carrossel" aria-label="Fotos da clínica">
            <div
              ref={trilho}
              className="flex -ml-4 md:-ml-5 -mr-6 md:mr-0 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {photos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className="min-w-0 shrink-0 grow-0 basis-[82%] sm:basis-[55%] md:basis-1/3 pl-4 md:pl-5 snap-start"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${photos.length}`}
                >
                  <div className="relative overflow-hidden aspect-[2/3] md:aspect-[3/4] bg-brand-warm">
                    <img
                      src={photo.src}
                      alt={`${photo.label} da Clínica Belvitá, no Paraíso, em São Paulo`}
                      width="667"
                      height="1000"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                  <figcaption className="mt-3 text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-brand-light-gray">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <button
              onClick={() => irPara(posicao.atual - 1)}
              disabled={posicao.inicio}
              className={`${arrowClass} left-3`}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => irPara(posicao.atual + 1)}
              disabled={posicao.fim}
              className={`${arrowClass} right-3`}
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {posicao.total > 1 && (
            <div className="flex justify-center mt-6">
              {Array.from({ length: posicao.total }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => irPara(index)}
                  className="w-11 h-11 flex items-center justify-center"
                  aria-label={`Ir para a foto ${index + 1}`}
                  aria-current={index === posicao.atual}
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-300 ${index === posicao.atual ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-gold/30'}`} />
                </button>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <a href={WHATSAPP_URL} onClick={(e) => trackWhatsappClick('clinica', e)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
              Agendar uma visita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinica;
