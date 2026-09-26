import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS } from '@/lib/doctor';

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-brand-dark overflow-hidden md:h-screen md:min-h-[640px]">
      {/* Foto da Dra. Isabela: topo no mobile, metade direita no desktop */}
      <div className="relative h-[50vh] min-h-[340px] md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[52%]">
        <img
          src="/dra-isabela-bertoglio.webp"
          alt={`${DOCTOR_NAME} - Nutróloga`}
          width="892"
          height="1280"
          fetchPriority="high"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 18%' }}
        />
        {/* Escurece o topo para o header ficar legível no mobile */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand-dark/70 to-transparent md:hidden" />
        {/* Funde a foto com o fundo: de baixo no mobile, da esquerda no desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent md:bg-gradient-to-r md:from-brand-dark md:via-brand-dark/10" />
      </div>

      <div className="relative z-10 -mt-20 md:mt-0 md:h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8 pb-12 md:pb-0 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl lg:max-w-2xl md:w-[52%]"
          >
            <h1 className="text-[2.2rem] md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-white leading-[1.08] mb-5 md:mb-6">
              Emagrecimento
              <span className="block text-brand-gold italic">personalizado</span>
              <span className="block">que respeita o seu corpo</span>
            </h1>

            <p className="text-base md:text-lg text-white/65 font-light leading-relaxed mb-8 md:mb-10 max-w-lg">
              Para quem já tentou de tudo: acompanhamento médico que investiga a causa do ganho de peso, com plano individualizado e acompanhamento contínuo de 3 a 6 meses.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <motion.a
                href={WHATSAPP_URL}
                onClick={(e) => trackWhatsappClick('hero', e)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-brand-dark transition-all duration-500 flex items-center justify-center gap-3"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <button
                onClick={scrollToAbout}
                className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/70 border border-white/30 px-8 py-4 min-h-[48px] hover:bg-white hover:text-brand-dark transition-all duration-500"
              >
                Conheça a Dra. Isabela
              </button>
            </div>

            {/* Linha de autoridade */}
            <div className="mt-8 md:mt-10 pt-6 border-t border-white/10 flex items-start gap-3">
              <div className="w-8 h-px bg-brand-gold mt-2.5 flex-shrink-0" />
              <div>
                <p className="font-serif text-lg text-white leading-snug">{DOCTOR_NAME}</p>
                <p className="text-[11px] font-sans font-medium tracking-[0.15em] uppercase text-white/50 mt-1">
                  {DOCTOR_CREDENTIALS}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
