import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
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
import { Toaster } from '@/components/ui/toaster';
import { useScrollToHash } from '@/hooks/useScrollToHash';

function App() {
  useScrollToHash();

  return (
    <>
      <Helmet>
        <title>Dra. Isabela Bertoglio - Nutrologia Clínica | Emagrecimento Personalizado</title>
        <meta name="description" content="Protocolos médicos para perda de peso sustentável. Emagrecimento que respeita seu corpo, seu tempo e sua história com a Dra. Isabela Bertoglio." />
      </Helmet>
      <div className="min-h-screen bg-white text-brand-dark relative">
        <Header />
        <Hero />
        <Highlights />
        <AboutDoctor />
        <IdentificationBlock />
        <KeywordsTicker />
        <HowItWorks />
        <Technology />
        <Reviews />
        <Clinica />
        <GoogleMapsEmbed />
        <FAQ />
        <FinalCTA />
        <WhatsAppButton />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
