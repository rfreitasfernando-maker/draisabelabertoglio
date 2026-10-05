import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MapModal from '@/components/MapModal';
import { WHATSAPP_URL } from '@/lib/whatsapp';
import { trackWhatsappClick } from '@/lib/tracking';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openMap = () => {
    setIsMapOpen(true);
    setIsMenuOpen(false);
  };

  const solid = scrolled || isMenuOpen;

  const navItems = [
    { label: 'Início', onClick: () => scrollToSection('hero') },
    { label: 'Sobre', onClick: () => scrollToSection('about') },
    { label: 'Tecnologia', onClick: () => scrollToSection('tecnologia') },
    { label: 'Endereço', onClick: openMap, icon: MapPin },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-white/95 backdrop-blur-md border-b border-brand-gold/10 shadow-sm shadow-black/[0.03]'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center h-20 md:h-24 gap-10">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center flex-shrink-0"
              aria-label="Clínica Belvitá - voltar ao início"
            >
              <img
                src="/logo-monograma.webp"
                srcSet="/logo-monograma-118.webp 118w, /logo-monograma.webp 203w"
                sizes="(min-width: 768px) 59px, 46px"
                alt="Clínica Belvitá"
                width="203"
                height="192"
                className="h-11 md:h-14 w-auto"
              />
            </button>

            <div className="hidden md:flex items-center gap-8 flex-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className={`flex items-center gap-1.5 text-sm font-sans font-medium tracking-widest uppercase hover:text-brand-gold transition-colors duration-300 ${
                    solid ? 'text-brand-dark-gray/80' : 'text-white/80'
                  }`}
                >
                  {item.icon && <item.icon className="w-3.5 h-3.5" />}
                  {item.label}
                </button>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              onClick={(e) => trackWhatsappClick('menu', e)}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:block text-sm font-sans font-medium tracking-widest uppercase px-6 py-2.5 transition-all duration-500 flex-shrink-0 ${
                solid
                  ? 'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white'
                  : 'bg-brand-gold text-white hover:bg-white hover:text-brand-dark'
              }`}
            >
              Agendar Consulta
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-brand-gold transition-colors ml-auto ${solid ? 'text-brand-dark-gray' : 'text-white'}`}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-brand-gold/10"
              >
                <div className="py-6 flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="flex items-center gap-2 px-2 py-4 min-h-[44px] text-sm font-sans font-medium tracking-widest uppercase text-brand-dark-gray/80 hover:text-brand-gold transition-colors"
                    >
                      {item.icon && <item.icon className="w-3.5 h-3.5" />}
                      {item.label}
                    </button>
                  ))}
                  <a
                    href={WHATSAPP_URL}
                    onClick={(e) => {
                      trackWhatsappClick('menu_mobile', e);
                      setIsMenuOpen(false);
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-sans font-medium tracking-widest uppercase border border-brand-gold text-brand-gold px-6 py-4 min-h-[48px] hover:bg-brand-gold hover:text-white transition-all duration-300 text-center"
                  >
                    Agendar Consulta
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
};

export default Header;
