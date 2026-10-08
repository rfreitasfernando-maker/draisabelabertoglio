import React from 'react';
import { DOCTOR_NAME, DOCTOR_CREDENTIALS, COMPANY } from '@/lib/doctor';
import { ADDRESS } from '@/lib/location';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-brand-cream pt-10 pb-28 md:pb-10 border-t border-brand-gold/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <img
            src="/logo-belvita.webp"
            srcSet="/logo-belvita-200.webp 200w, /logo-belvita.webp 640w"
            sizes="91px"
            alt="Clínica Belvitá"
            width="640"
            height="451"
            className="h-16 w-auto opacity-80"
            loading="lazy"
          />
          <nav aria-label="Rodapé">
            <a
              href="/blog"
              className="inline-flex items-center min-h-[44px] px-2 text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-dark-gray/80 hover:text-brand-gold transition-colors duration-300"
            >
              Blog
            </a>
          </nav>
          <div className="space-y-1.5 text-xs font-sans font-light text-brand-dark-gray/80 leading-relaxed">
            <p>
              Responsável técnica: <span className="font-medium text-brand-dark-gray/80">{DOCTOR_NAME}</span> · {DOCTOR_CREDENTIALS}
            </p>
            <p>{COMPANY}</p>
            <p>{ADDRESS}</p>
          </div>
          <p className="text-[10px] font-sans font-light tracking-[0.2em] uppercase text-brand-dark-gray/70">
            © 2026 {DOCTOR_NAME} — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
