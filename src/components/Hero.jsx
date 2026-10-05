import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, CalendarCheck, ClipboardList, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS, GOOGLE_REVIEWS_URL } from '@/lib/doctor';

const beneficios = [
  { icon: Activity, texto: 'Bioimpedância InBody na avaliação' },
  { icon: CalendarCheck, texto: 'Acompanhamento de 3 a 6 meses' },
  { icon: ClipboardList, texto: 'Plano adaptado à sua rotina' },
  { icon: MapPin, texto: 'Consultório no Paraíso, SP' },
];

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Mobile: texto e CTA primeiro, foto depois (a foto nunca empurra o CTA para baixo da dobra).
    // Desktop: texto à esquerda, foto ocupando a metade direita.
    <section id="hero" className="relative bg-brand-dark overflow-hidden flex flex-col md:block md:min-h-screen">
      <div className="relative z-10 md:min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8 pt-24 pb-10 xl:pt-28 md:pb-12">
          <div className="max-w-xl lg:max-w-2xl md:w-[56%] xl:w-[52%]">
            <p className="text-[10px] md:text-xs font-sans font-medium tracking-[0.14em] md:tracking-[0.25em] uppercase text-[color-mix(in_srgb,theme(colors.brand-gold)_85%,white)] mb-4 md:mb-5">
              Nutrologia · Emagrecimento · Paraíso, SP
            </p>

            <h1 className="text-[2.125rem] md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.08] mb-4 md:mb-6">
              Emagrecimento com <span className="text-brand-gold italic">acompanhamento médico</span> de perto
            </h1>

            <p className="text-base md:text-lg text-white/70 font-light leading-relaxed mb-6 md:mb-8 max-w-lg">
              Para quem já tentou de tudo: investigamos a causa do ganho de peso e acompanhamos você por 3 a 6 meses, com bioimpedância para medir gordura e músculo — não só o peso.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <motion.a
                href={WHATSAPP_URL}
                onClick={(e) => trackWhatsappClick('hero', e)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar minha avaliação pelo WhatsApp"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full md:w-auto whitespace-nowrap bg-brand-gold text-white px-8 md:px-5 xl:px-8 py-4 min-h-[52px] font-sans text-xs font-medium tracking-[0.2em] md:tracking-[0.12em] xl:tracking-[0.2em] uppercase hover:bg-white hover:text-brand-dark transition-all duration-500 flex items-center justify-center gap-3"
              >
                Agendar minha avaliação
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              {/* Desktop: botão outline. Mobile: link de texto discreto, para não competir com o CTA. */}
              <button
                onClick={scrollToAbout}
                className="self-center md:self-auto py-3 font-sans text-sm text-white/70 underline underline-offset-4 decoration-white/30 hover:text-white md:whitespace-nowrap md:no-underline md:text-xs md:font-medium md:tracking-[0.12em] xl:tracking-[0.2em] md:uppercase md:border md:border-white/30 md:px-5 xl:px-8 md:py-4 md:min-h-[52px] md:hover:bg-white md:hover:text-brand-dark transition-all duration-500"
              >
                Conheça a Dra. Isabela
              </button>
            </div>

            <p className="mt-3 text-center md:text-left text-xs font-sans text-white/50">
              Consulta particular · Resposta rápida pelo WhatsApp
            </p>

            {/* Prova social */}
            <div className="mt-6 md:mt-8 pt-5 border-t border-white/10">
              <p className="text-sm font-sans text-white/75 leading-relaxed">
                <span className="text-brand-gold tracking-wide" aria-hidden="true">★★★★★</span>{' '}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nota 5,0 no Google: ver as avaliações (abre em nova aba)"
                  className="font-medium text-white underline underline-offset-4 decoration-white/30 hover:decoration-brand-gold"
                >
                  5,0 no Google
                </a>
                <span className="text-white/40"> · </span>Doutorado USP<span className="text-white/40"> · </span>Nutrologia Einstein
              </p>
              <p className="mt-1.5 text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-white/50">
                {DOCTOR_NAME} — {DOCTOR_CREDENTIALS}
              </p>
            </div>

          </div>

          {/* Benefícios */}
          <ul className="mt-6 grid grid-cols-2 md:flex md:flex-wrap md:pr-20 xl:pr-0 xl:max-w-[52%] gap-2">
            {beneficios.map((item) => (
              <li
                key={item.texto}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 md:bg-brand-dark/70 md:backdrop-blur-sm px-3 py-2 text-[11px] md:text-xs font-sans text-white/80 leading-tight"
              >
                <item.icon className="w-3.5 h-3.5 flex-shrink-0 text-brand-gold" strokeWidth={1.75} aria-hidden="true" />
                {item.texto}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Foto da Dra. Isabela: depois do texto no mobile, metade direita no desktop */}
      <div className="relative h-[75vh] max-h-[560px] md:max-h-none md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[44%] xl:w-[48%]">
        <img
          src="/dra-isabela-bertoglio.webp"
          alt={`${DOCTOR_NAME}, nutróloga, em seu consultório`}
          width="892"
          height="1280"
          srcSet="/dra-isabela-bertoglio-640.webp 640w, /dra-isabela-bertoglio.webp 892w"
          sizes="(min-width: 768px) 48vw, 100vw"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 18%' }}
        />
        {/* Funde a foto com o fundo: pelo topo no mobile, pela esquerda no desktop */}
        <div className="absolute inset-0 md:-left-0.5 bg-gradient-to-b from-brand-dark via-transparent to-transparent md:bg-gradient-to-r md:from-brand-dark md:via-brand-dark/10" />
      </div>
    </section>
  );
};

export default Hero;
