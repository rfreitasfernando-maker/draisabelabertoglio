import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const WhatsAppButton = () => {
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
      <motion.a
        href={WHATSAPP_URL}
        onClick={(e) => trackWhatsappClick('flutuante', e)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl items-center justify-center group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <MessageCircle className="w-8 h-8 fill-white text-white" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco
        </span>
      </motion.a>

      {/* Mobile: barra fixa no rodapé */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur-md border-t border-brand-gold/15 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
          >
            <a
              href={WHATSAPP_URL}
              onClick={(e) => trackWhatsappClick('barra_mobile', e)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full min-h-[50px] bg-[#25D366] text-white font-sans text-xs font-semibold tracking-[0.15em] uppercase active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="w-5 h-5 fill-white text-white" />
              Agendar pelo WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
