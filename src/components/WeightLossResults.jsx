import React from 'react';

/**
 * Antes e depois de pacientes da Dra. Isabela no acompanhamento de emagrecimento.
 *
 * Para incluir um caso: gere o par padronizado (900×600, metades 3:4, sem rosto e sem marca
 * d'água) em public/resultados/emagrecimento-N.webp e acrescente uma linha abaixo.
 * Só entram fotos reais, sem edição, de pacientes que autorizaram o uso.
 */
const results = [
  { src: '/resultados/emagrecimento-1.webp' },
  { src: '/resultados/emagrecimento-2.webp' },
  { src: '/resultados/emagrecimento-3.webp' },
];

const WeightLossResults = () => {
  // Com até 3 casos, centraliza no desktop; com mais, vira carrossel também no desktop.
  const centralizar = results.length <= 3 ? 'md:justify-center' : '';

  return (
    <div className="mt-14 md:mt-16">
      <div className="text-center mb-6 md:mb-8">
        <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-4">
          Resultados
        </span>
        <h3 className="text-2xl md:text-4xl font-serif font-light text-brand-dark">
          Antes <span className="italic text-brand-gold">e depois</span>
        </h3>
      </div>

      <div className={`-mx-6 px-6 md:mx-0 md:px-0 flex ${centralizar} gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-6 md:scroll-px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
        {results.map((result, index) => (
          <figure key={result.src} className="shrink-0 basis-[85%] sm:basis-[60%] md:basis-[calc((100%-2.5rem)/3)] snap-start">
            <div className="relative aspect-[3/2] overflow-hidden bg-brand-warm">
              <img
                src={result.src}
                alt={`Antes e depois de paciente no acompanhamento de emagrecimento, caso ${index + 1}`}
                width="900"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/60" />
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-sans font-medium tracking-[0.15em] uppercase px-2 py-1">
                Antes
              </span>
              <span className="absolute bottom-2 left-[calc(50%+0.5rem)] bg-brand-gold/90 text-white text-[10px] font-sans font-medium tracking-[0.15em] uppercase px-2 py-1">
                Depois
              </span>
            </div>
          </figure>
        ))}
      </div>

      {results.length > 1 && (
        <p className="mt-3 text-center text-[11px] font-sans text-brand-light-gray md:hidden">Deslize para ver mais</p>
      )}
      <p className="mt-4 text-center text-xs font-sans font-light text-brand-light-gray leading-relaxed">
        Imagens publicadas com autorização das pacientes. Os resultados variam de pessoa para pessoa e dependem de avaliação e acompanhamento médico.
      </p>
    </div>
  );
};

export default WeightLossResults;
