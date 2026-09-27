import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';
import { DOCTOR_CREDENTIALS } from '@/lib/doctor';

const education = [
  'Doutorado pela USP-SP',
  'Especialização pela USP-SP',
  'Nutrologia Clínica - Hospital Albert Einstein',
];

const AboutDoctor = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-24 py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Quem sou
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark">
              Dra. Isabela Bertoglio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="/dra-isabela-consultorio.webp"
                  width="900"
                  height="1149"
                  alt="Dra. Isabela Bertoglio em seu consultório na Clínica Belvitá"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '55% 50%' }}
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-px bg-brand-gold" />
                <span className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-dark-gray/60">{DOCTOR_CREDENTIALS}</span>
              </div>
              
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-gold/25 flex items-center justify-center flex-shrink-0 text-brand-gold">
                      <GraduationCap className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </div>
                    <span className="pt-2 text-base text-brand-dark font-normal leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-6 text-base text-brand-dark-gray/70 leading-[1.8] font-light">
                <p>
                  Minha atuação é pautada por uma visão individualizada, fugindo de protocolos genéricos. Entendo que cada pessoa responde de forma única e que o tratamento deve ser adaptado à sua realidade!
                </p>
                <p>
                  Ofereço uma abordagem acolhedora e baseada em ciência, onde o objetivo não é apenas a perda de peso, mas a construção de uma saúde robusta e de uma relação equilibrada com seu próprio corpo.
                </p>
              </div>

              <a href={WHATSAPP_URL} onClick={(e) => trackWhatsappClick('sobre', e)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
                Agendar com a Dra. Isabela
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDoctor;
