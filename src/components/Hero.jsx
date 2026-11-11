import React from 'react';
import { Activity, ArrowRight, CalendarCheck } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS, GOOGLE_REVIEWS_URL } from '@/lib/doctor';

// Página inicial: dois selos, como no layout aprovado. As páginas de anúncio têm os seus (src/lib/landings.js).
const BENEFICIOS = [
  { icon: Activity, texto: 'Bioimpedância InBody na avaliação' },
  { icon: CalendarCheck, texto: 'Acompanhamento de 3 a 6 meses' },
];

// Textos da página inicial. As páginas de destino dos anúncios (src/lib/landings.js) trocam por outros.
const PADRAO = {
  sobretitulo: 'Nutrologia · Emagrecimento · Paraíso, SP',
  titulo: { antes: 'Emagrecimento com', destaque: 'acompanhamento médico', depois: 'de perto' },
  texto:
    'Para quem já tentou de tudo: na Clínica Belvitá, em São Paulo, investigamos a causa do ganho de peso e acompanhamos você por 3 a 6 meses, com bioimpedância para medir gordura e músculo — não só o peso.',
  beneficios: BENEFICIOS,
  cta: 'Agendar minha avaliação',
  // Sem nota embaixo do botão na página inicial; as páginas de anúncio mantêm a delas.
  nota: null,
};

const Hero = ({ conteudo = PADRAO }) => {
  const { sobretitulo, titulo, texto, beneficios, cta, nota } = { ...PADRAO, ...conteudo };
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Mobile: texto e CTA primeiro, foto depois (a foto nunca empurra o CTA para baixo da dobra).
    // Desktop: texto à esquerda, foto ocupando a metade direita.
    <section id="hero" className="relative bg-brand-cream overflow-hidden flex flex-col md:block md:min-h-screen">
      <div className="relative z-10 md:min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-10 xl:pt-28 md:pb-12">
          <div className="max-w-xl lg:max-w-2xl md:w-[56%] xl:w-[52%]">
            <p className="text-[10px] md:text-xs font-sans font-medium tracking-[0.14em] md:tracking-[0.25em] uppercase text-brand-gold mb-4 md:mb-5">
              {sobretitulo}
            </p>

            <h1 className="text-[2.125rem] md:text-5xl lg:text-6xl xl:text-[4rem] font-serif font-light text-brand-dark leading-[1.08] mb-4 md:mb-6">
              {`${titulo.antes} `}
              <span className="text-brand-gold-light italic">{titulo.destaque}</span>
              {titulo.depois && ` ${titulo.depois}`}
            </h1>

            <p className="text-base md:text-lg xl:text-xl text-brand-dark-gray/90 font-light leading-relaxed mb-6 md:mb-8 max-w-lg xl:max-w-xl">
              {texto}
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <a
                href={WHATSAPP_URL}
                onClick={(e) => trackWhatsappClick('hero', e)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${cta} pelo WhatsApp`}
                className="group w-full md:w-auto whitespace-nowrap bg-brand-gold text-white px-8 md:px-5 xl:px-8 py-4 min-h-[52px] rounded-sm font-sans text-xs font-medium tracking-[0.2em] md:tracking-[0.12em] xl:tracking-[0.2em] uppercase shadow-sm shadow-brand-gold/20 hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3"
              >
                {cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Desktop: botão outline. Mobile: link de texto discreto, para não competir com o CTA. */}
              <button
                onClick={scrollToAbout}
                className="self-center md:self-auto py-3 font-sans text-sm text-brand-dark-gray underline underline-offset-4 decoration-brand-dark/30 hover:text-brand-gold md:whitespace-nowrap md:no-underline md:text-xs md:font-medium md:tracking-[0.12em] xl:tracking-[0.2em] md:uppercase md:rounded-sm md:border md:border-brand-gold/40 md:bg-white/50 md:px-5 xl:px-8 md:py-4 md:min-h-[52px] md:hover:bg-brand-dark md:hover:text-white md:hover:border-brand-dark transition-all duration-500"
              >
                Conheça a Dra. Isabela
              </button>
            </div>

            {nota && (
              <p className="mt-3 text-center md:text-left text-xs font-sans text-brand-light-gray">
                {nota}
              </p>
            )}

            {/* Prova social */}
            <div className="mt-6 md:mt-8 pt-5 border-t border-brand-dark/10">
              <p className="text-sm xl:text-base font-sans text-brand-dark-gray/90 leading-relaxed">
                <span className="text-brand-gold-light tracking-wide" aria-hidden="true">★★★★★</span>{' '}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nota 5,0 no Google: ver as avaliações (abre em nova aba)"
                  className="font-medium text-brand-dark underline underline-offset-4 decoration-brand-dark/30 hover:decoration-brand-gold"
                >
                  5,0 no Google
                </a>
                <span className="text-brand-dark/30"> · </span>Doutorado USP<span className="text-brand-dark/30"> · </span>Nutrologia Einstein
              </p>
              <p className="mt-1.5 text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-brand-light-gray">
                {DOCTOR_NAME} — {DOCTOR_CREDENTIALS}
              </p>
            </div>

          </div>

          {/* Benefícios */}
          <ul className="mt-6 grid grid-cols-2 md:flex md:flex-wrap md:pr-20 xl:pr-0 xl:max-w-[52%] gap-2">
            {beneficios.map((item) => (
              <li
                key={item.texto}
                className="flex items-center gap-2 rounded-full border border-brand-gold/25 bg-white/60 md:bg-white/75 md:backdrop-blur-sm px-3 xl:px-4 py-2 xl:py-2.5 text-[11px] md:text-xs xl:text-sm font-sans text-brand-dark-gray leading-tight"
              >
                <item.icon className="w-3.5 h-3.5 flex-shrink-0 text-brand-gold" strokeWidth={1.75} aria-hidden="true" />
                {item.texto}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Foto da Dra. Isabela: depois do texto e dos chips no celular, metade direita no desktop */}
      <div className="relative h-[75vh] max-h-[560px] md:max-h-none md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[46%] xl:w-[50%]">
        {/* Desktop: foto com a lateral esquerda já fundida ao creme do fundo. Celular: versão própria, sem esse efeito. */}
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/dra-isabela-hero-800.webp 800w, /dra-isabela-hero-1200.webp 1200w, /dra-isabela-hero-1600.webp 1600w, /dra-isabela-hero-2000.webp 2000w"
            sizes="(min-width: 1280px) 50vw, 46vw"
          />
          <img
            src="/dra-isabela-hero-celular-960.webp"
            srcSet="/dra-isabela-hero-celular-640.webp 640w, /dra-isabela-hero-celular-960.webp 960w"
            sizes="100vw"
            alt={`${DOCTOR_NAME}, médica – Nutrologia e Emagrecimento, em seu consultório`}
            width="960"
            height="1129"
            // Sem lazy: no desktop é a maior imagem da primeira dobra (o index.html também faz o preload)
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
        </picture>
        {/* Funde a foto com o fundo só na borda: pelo topo no celular, pela esquerda no desktop. O resto da foto fica limpo. */}
        <div className="md:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-cream to-transparent" />
        <div className="hidden md:block absolute inset-y-0 -left-px w-2/5 bg-gradient-to-r from-brand-cream via-brand-cream/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
