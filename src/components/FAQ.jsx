import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4 pr-6">
          <span className="text-xs font-sans text-brand-gold/40 tracking-wider">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-base md:text-lg font-serif transition-colors duration-300 ${isOpen ? 'text-brand-gold' : 'text-brand-dark group-hover:text-brand-gold'}`}>
            {question}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-brand-gold/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-10 md:pl-12 text-sm md:text-base text-brand-dark-gray/55 leading-[1.9] font-light max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-px bg-brand-gold/5" />
    </div>
  );
};

const FAQ = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });


  const faqs = [
    {
      question: "Já tentei de tudo, por que agora seria diferente?",
      answer: "Porque aqui não existe protocolo padrão. Tudo é ajustado de acordo com a sua resposta ao tratamento, com acompanhamento médico próximo para identificar exatamente o que impediu seu sucesso anteriormente."
    },
    {
      question: "Vou precisar mudar tudo na minha vida?",
      answer: "Não. O plano é adaptado à sua rotina, trabalho e vida social. Acreditamos que o melhor plano é aquele que você consegue seguir de forma consistente, sem sacrifícios insustentáveis."
    },
    {
      question: "É só para quem quer emagrecer muito?",
      answer: "Não. É para quem busca saúde, energia, autoestima e equilíbrio, independentemente de quantos quilos deseja perder. O foco é otimizar sua saúde metabólica e bem-estar geral."
    },
    {
      question: "O que está incluso na primeira consulta?",
      answer: "Realizamos uma avaliação completa da sua saúde metabólica, com anamnese detalhada, bioimpedância, análise de exames e dos seus sintomas. Ao final, você recebe um plano personalizado para os próximos 60 dias, que pode incluir suplementação, medicamentos e terapias injetáveis, quando indicadas."
    },
    {
      question: "Em quanto tempo começo a ver resultados?",
      answer: "Muitos pacientes percebem melhora já nas primeiras semanas, com mais energia, melhor qualidade do sono, maior foco e redução do cansaço. O tratamento é individualizado e ajustado ao seu metabolismo para otimizar os resultados."
    },
    {
      question: "Você atende por convênio?",
      answer: "As consultas são particulares. Emitimos nota fiscal para reembolso, caso o seu plano de saúde ofereça essa possibilidade."
    },
    {
      question: "Meus exames estão normais, mas não me sinto bem. Isso pode ser hormonal?",
      answer: "Sim. Exames \"normais\" nem sempre significam equilíbrio metabólico ideal. Sintomas como cansaço, dificuldade para emagrecer, baixa libido ou falta de energia podem ter origem hormonal ou metabólica e precisam de uma avaliação clínica mais aprofundada."
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
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark">
              Perguntas frequentes
            </h2>
          </div>
          
          <div>
            {faqs.map((faq, index) => (
              <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-brand-gold text-white px-8 py-4 min-h-[48px] font-sans text-xs font-medium tracking-[0.2em] uppercase hover:bg-brand-dark transition-all duration-500">
              Ainda tem dúvidas? Fale conosco
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
