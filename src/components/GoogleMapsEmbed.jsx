import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ADDRESS, MAP_EMBED_URL, MAP_DIRECTIONS_URL } from '@/lib/location';

const GoogleMapsEmbed = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="localizacao" className="scroll-mt-20 md:scroll-mt-24 py-12 md:py-16 bg-brand-cream/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-sans font-medium tracking-[0.25em] uppercase text-brand-gold mb-5">
              Localização
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-brand-dark mb-4">
              Onde nos encontrar
            </h2>
            <p className="text-base text-brand-light-gray font-light max-w-xl mx-auto">
              {ADDRESS}
            </p>
          </div>

          <div className="w-full h-80 md:h-[450px] overflow-hidden border border-brand-gold/10">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Dra. Isabela Bertoglio"
            ></iframe>
          </div>

          <div className="text-center mt-6">
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] py-3 px-4 text-xs font-sans font-medium tracking-[0.2em] uppercase text-brand-gold hover:text-brand-dark transition-colors duration-300"
            >
              Como Chegar →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMapsEmbed;
