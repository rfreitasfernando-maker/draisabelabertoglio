import React from 'react';
import { Activity, CalendarCheck, ClipboardList, MapPin } from 'lucide-react';

const highlights = [
  { icon: Activity, title: 'Avaliação com bioimpedância', detail: 'Composição corporal real, não só o peso' },
  { icon: CalendarCheck, title: 'Acompanhamento de 3 a 6 meses', detail: 'Ajustes contínuos ao longo do processo' },
  { icon: ClipboardList, title: 'Plano adaptado à sua rotina', detail: 'Pensado para o seu trabalho e vida social' },
  { icon: MapPin, title: 'Paraíso · São Paulo', detail: 'Próximo ao metrô Brigadeiro' },
];

const Highlights = () => {
  return (
    <section className="bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 py-8 md:py-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-7 md:gap-8">
          {highlights.map((item) => (
            <li key={item.title} className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-11 md:h-11 border border-brand-gold/40 flex items-center justify-center flex-shrink-0 text-brand-gold">
                <item.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm md:text-[15px] font-sans font-medium text-white leading-snug">{item.title}</p>
                <p className="text-xs md:text-[13px] font-sans font-light text-white/50 leading-relaxed mt-1">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
