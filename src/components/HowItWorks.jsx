import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, ClipboardList, Activity, Leaf, Repeat, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const HowItWorks = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });


  const steps = [
    {
      icon: Stethoscope,
      title: "Avaliação completa",
      description: "Análise clínica, exames e histórico para entender seu metabolismo e seu momento atual."
    },
    {
      icon: ClipboardList,
      title: "Protocolo personalizado",
      description: "Plano alimentar, estratégias e ajustes pensados para a sua rotina real."
    },
    {
      icon: Activity,
      title: "Acompanhamento contínuo",
      description: "Monitoramento da evolução com ajustes constantes para evitar recaídas."
    },
    {
      icon: Leaf,
      title: "Resultados sustentáveis",
      description: "Foco em saúde, energia e constância — não em soluções temporárias."
    },
    {
      icon: Repeat,
      title: "Flexibilidade no processo",
      description: "O plano evolui junto com você, sem rigidez extrema."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Método
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark">
              Como funciona o acompanhamento
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-brand-gold font-serif italic max-w-2xl mx-auto leading-relaxed">
              Redução de gordura com preservação muscular, equilíbrio metabólico e mais energia no dia a dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-brand-cream/40 p-6 md:p-8 border border-brand-gold/5 hover:border-brand-gold/15 transition-all duration-500 group"
              >
                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <step.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-brand-dark mb-3">{step.title}</h3>
                <p className="text-brand-light-gray text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Destaque do equipamento de bioimpedância da clínica */}
          <div className="mt-6 flex items-center gap-5 md:gap-8 bg-brand-cream border border-brand-gold/15 p-4 md:p-6">
            <img
              src="/inbody-380.webp"
              alt="Bioimpedância InBody 380"
              width="219"
              height="560"
              loading="lazy"
              decoding="async"
              className="h-36 md:h-44 w-auto flex-shrink-0 mix-blend-multiply"
            />
            <div>
              <span className="inline-block whitespace-nowrap bg-brand-gold text-white text-[10px] md:text-[11px] font-sans font-medium tracking-[0.08em] md:tracking-[0.15em] uppercase px-2 md:px-2.5 py-1 mb-3">
                Inclusa na sua avaliação
              </span>
              <p className="text-xl md:text-2xl font-serif text-brand-dark leading-snug">
                Bioimpedância de <span className="italic text-brand-gold">última geração</span>
              </p>
              <p className="mt-2 text-sm font-sans font-light text-brand-dark-gray/70 leading-relaxed">
                InBody 380: músculo, gordura e água corporal medidos em detalhe, para acompanhar sua evolução real.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} onClick={(e) => trackWhatsappClick('metodo', e)} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
              Agendar minha avaliação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
