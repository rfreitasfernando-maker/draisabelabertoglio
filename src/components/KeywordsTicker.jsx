import React from 'react';

const keywords = [
  'Equilíbrio',
  'Metabolismo',
  'Energia',
  'Longevidade',
  'Bem-estar',
  'Composição corporal',
  'Autocuidado',
];

const KeywordRow = ({ palavras }) => (
  <div className="flex items-center shrink-0">
    {palavras.map((word, i) => (
      <span key={i} className="flex items-center mx-6">
        <span className="w-1 h-1 rounded-full bg-brand-gold/40 mr-3 flex-shrink-0" />
        <span className="text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold whitespace-nowrap">
          {word}
        </span>
      </span>
    ))}
  </div>
);

// `palavras`: as páginas de destino dos anúncios (src/lib/landings.js) usam palavras do tema delas.
const KeywordsTicker = ({ palavras = keywords }) => {
  return (
    <div className="bg-white border-y border-brand-gold/10 py-4 overflow-hidden" aria-hidden="true">
      {/* Animação em CSS (.letreiro em index.css) */}
      <div className="flex w-max letreiro">
        <KeywordRow palavras={palavras} />
        <KeywordRow palavras={palavras} />
      </div>
    </div>
  );
};

export default KeywordsTicker;
