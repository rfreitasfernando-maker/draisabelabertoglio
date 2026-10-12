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

const KeywordRow = () => (
  <div className="flex items-center shrink-0">
    {keywords.map((word, i) => (
      <span key={i} className="flex items-center mx-6">
        <span className="w-1 h-1 rounded-full bg-brand-gold/40 mr-3 flex-shrink-0" />
        <span className="text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold whitespace-nowrap">
          {word}
        </span>
      </span>
    ))}
  </div>
);

const KeywordsTicker = () => {
  return (
    <div className="bg-white border-y border-brand-gold/10 py-4 overflow-hidden" aria-hidden="true">
      {/* Animação em CSS (.letreiro em index.css) */}
      <div className="flex w-max letreiro">
        <KeywordRow />
        <KeywordRow />
      </div>
    </div>
  );
};

export default KeywordsTicker;
