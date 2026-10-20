import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IdentificationBlock from '@/components/IdentificationBlock';
import KeywordsTicker from '@/components/KeywordsTicker';
import HowItWorks from '@/components/HowItWorks';
import Technology from '@/components/Technology';
import AboutDoctor from '@/components/AboutDoctor';
import FAQ from '@/components/FAQ';
import Reviews from '@/components/Reviews';
import Clinica from '@/components/Clinica';
import GoogleMapsEmbed from '@/components/GoogleMapsEmbed';
import FinalCTA from '@/components/FinalCTA';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import { useScrollToHash } from '@/hooks/useScrollToHash';

// `landing`: página de destino de um grupo de anúncios (src/lib/landings.js). Mesmas seções da página
// inicial, com o topo e o FAQ do tema, cabeçalho sem menu e sem a seção do Unyque Pro.
// Sem `landing`, é a página inicial.
function App({ landing }) {
  useScrollToHash();

  return (
    <>
      <div className="min-h-screen bg-white text-brand-dark relative">
        <Header simples={Boolean(landing)} />
        <main>
          <Hero conteudo={landing?.hero} />
          <IdentificationBlock />
          <AboutDoctor />
          <KeywordsTicker />
          <Reviews />
          <HowItWorks />
          {!landing && <Technology />}
          <Clinica />
          <GoogleMapsEmbed />
          <FAQ perguntas={landing?.faq.perguntas} subtitulo={landing?.faq.subtitulo} />
          <FinalCTA />
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
