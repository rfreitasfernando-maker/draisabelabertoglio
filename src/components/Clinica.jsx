import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const photos = [
  { src: '/clinica/recepcao.webp', label: 'Recepção' },
  { src: '/clinica/espera.webp', label: 'Espaço de espera' },
  { src: '/clinica/consultorio.webp', label: 'Consultório' },
  { src: '/clinica/detalhes.webp', label: 'Detalhes do consultório' },
];

const Clinica = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  const onReInit = useCallback((api) => {
    setSnapCount(api.scrollSnapList().length);
    onSelect(api);
  }, [onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    onReInit(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onReInit);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onReInit);
    };
  }, [emblaApi, onSelect, onReInit]);

  const arrowClass = 'hidden md:flex absolute top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white/90 text-brand-dark shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none';

  return (
    <section className="py-12 md:py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
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
            <div className="overflow-hidden -mr-6 md:mr-0" ref={emblaRef}>
              <div className="flex touch-pan-y -ml-4 md:-ml-5">
                {photos.map((photo, index) => (
                  <figure
                    key={photo.src}
                    className="min-w-0 shrink-0 grow-0 basis-[82%] sm:basis-[55%] md:basis-1/3 pl-4 md:pl-5"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${photos.length}`}
                  >
                    <div className="relative overflow-hidden aspect-[2/3] md:aspect-[3/4] bg-brand-warm">
                      <img
                        src={photo.src}
                        alt={`Clínica Belvitá - ${photo.label}`}
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
            </div>

            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className={`${arrowClass} left-3`}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className={`${arrowClass} right-3`}
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {snapCount > 1 && (
            <div className="flex justify-center gap-1 mt-6">
              {Array.from({ length: snapCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="p-2 flex items-center justify-center"
                  aria-label={`Ir para a foto ${index + 1}`}
                  aria-current={index === selectedIndex}
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'w-6 bg-brand-gold' : 'w-1.5 bg-brand-gold/30'}`} />
                </button>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <a href={WHATSAPP_URL} onClick={() => trackWhatsappClick('clinica')} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
              Agendar uma visita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clinica;
