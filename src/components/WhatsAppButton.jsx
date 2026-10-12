import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CTA_SITE, CTA_BLOG } from '@/lib/cta';

// `blog`: nas páginas do blog usa o link e o evento do blog (fora da conversão do Google Ads).
const WhatsAppButton = ({ blog = false }) => {
  const cta = blog ? CTA_BLOG : CTA_SITE;
  // A barra do mobile só aparece depois da primeira dobra, para não competir com os botões do topo
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop: botão flutuante */}
      <a
        href={cta.href}
        onClick={(e) => cta.rastrear('flutuante', e)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl items-center justify-center group animate-in fade-in zoom-in-0 hover:scale-110 active:scale-90 transition-[transform,box-shadow] duration-300"
      >
        <MessageCircle className="w-8 h-8 fill-white text-white" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco
        </span>
      </a>

      {/* Mobile: barra fixa no rodapé. Fica sempre no HTML, abaixo da tela e invisível (fora do foco do teclado)
          até o visitante passar da primeira dobra. */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur-md border-t border-brand-gold/15 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] transition-[transform,visibility] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showBar ? 'translate-y-0 visible' : 'translate-y-full invisible'
        }`}
      >
        <a
          href={cta.href}
          onClick={(e) => cta.rastrear('barra_mobile', e)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full min-h-[50px] bg-[#25D366] text-brand-dark font-sans text-xs font-semibold tracking-[0.15em] uppercase active:scale-[0.98] transition-transform"
        >
          {/* Texto escuro no verde do WhatsApp: branco ficaria com contraste 2:1 */}
          <MessageCircle className="w-5 h-5 fill-brand-dark text-brand-dark" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
