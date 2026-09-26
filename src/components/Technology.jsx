import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, Stethoscope } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_UNYQUE_URL } from '@/lib/whatsapp';

const features = [
  { icon: Layers, title: 'Três tecnologias, uma sessão', detail: 'Cada uma age em uma camada: pele, sustentação e gordura.' },
  { icon: ShieldCheck, title: 'Conforto e segurança', detail: 'Sem cortes e sem agulhas.' },
  { icon: Stethoscope, title: 'Exclusivo para uso médico', detail: 'Cada protocolo é indicado e acompanhado por médico.' },
];

const indications = ['Gordura localizada', 'Celulite', 'Flacidez corporal', 'Contorno corporal'];

const technologies = [
  {
    name: 'ReFreeze',
    image: '/unyque/refreeze.webp',
    width: 196,
    description: 'Radiofrequência com sucção suave, como uma massagem profunda. Ativa a circulação.',
    tags: 'Celulite · Contorno',
  },
  {
    name: 'Cryo RF Max',
    image: '/unyque/cryo-rf-max.webp',
    width: 213,
    description: 'Aquece por dentro e resfria por fora. Estimula o colágeno e contribui para a firmeza da pele.',
    tags: 'Flacidez · Celulite',
  },
  {
    name: 'HImFU',
    image: '/unyque/himfu.webp',
    width: 155,
    description: 'Ultrassom focado de alta intensidade, direcionado à gordura localizada.',
    tags: 'Gordura localizada',
  },
];

const Technology = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="tecnologia" className="scroll-mt-20 md:scroll-mt-24 py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Tecnologia na clínica
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark leading-tight">
              Tecnologia de ponta
              <span className="block italic text-brand-gold">como sua aliada</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold/40 mx-auto my-7 md:my-9" />
            <p className="text-3xl md:text-4xl font-sans font-light tracking-[0.08em] text-brand-dark">
              UNYQUE<sup className="text-sm md:text-lg font-medium tracking-normal ml-1 align-super">PRO</sup>
            </p>
            <p className="mt-2 text-lg md:text-xl font-serif text-brand-dark-gray">
              Tecnologia médica para o <span className="italic text-brand-gold">contorno do corpo</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Equipamento */}
            <div className="relative flex justify-center">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] aspect-square rounded-full bg-brand-warm" />
              <img
                src="/unyque/equipamento.webp"
                alt="Equipamento Unyque Pro"
                width="637"
                height="900"
                loading="lazy"
                decoding="async"
                className="relative h-[340px] md:h-[480px] w-auto"
              />
            </div>

            <div>
              <ul className="space-y-5">
                {features.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold">
                      <item.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-base font-sans font-medium text-brand-dark">{item.title}</p>
                      <p className="text-sm font-sans font-light text-brand-light-gray leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-9 mb-4 text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold">
                Para que serve
              </p>
              <div className="grid grid-cols-2 gap-3">
                {indications.map((item) => (
                  <div key={item} className="bg-brand-cream border border-brand-gold/15 px-4 py-3.5 text-sm font-sans font-medium text-brand-dark">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Como funciona */}
          <div className="mt-14 md:mt-20">
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-4">
                Como funciona
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-light text-brand-dark">
                Cada tecnologia, <span className="italic text-brand-gold">uma função</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex md:flex-col items-start gap-5 bg-brand-cream/60 border border-brand-gold/10 p-5 md:p-7"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white flex items-center justify-center flex-shrink-0">
                    <img
                      src={tech.image}
                      alt={`Ponteira ${tech.name}`}
                      width={tech.width}
                      height="240"
                      loading="lazy"
                      decoding="async"
                      className="max-h-[70%] max-w-[70%] w-auto h-auto"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif text-brand-dark mb-2">{tech.name}</h4>
                    <p className="text-sm font-sans font-light text-brand-dark-gray/75 leading-relaxed">{tech.description}</p>
                    <p className="mt-3 text-xs font-sans font-medium text-brand-gold">{tech.tags}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs font-sans font-light text-brand-light-gray leading-relaxed">
              Os resultados variam de pessoa para pessoa. A indicação depende de avaliação médica.
              <span className="block sm:inline"> Equipamento com registro ANVISA nº 80832479008.</span>
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href={WHATSAPP_UNYQUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500"
            >
              Agendar avaliação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
