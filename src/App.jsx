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

function App() {
  useScrollToHash();

  return (
    <>
      <div className="min-h-screen bg-white text-brand-dark relative">
        <Header />
        <Hero />
        <AboutDoctor />
        <IdentificationBlock />
        <KeywordsTicker />
        <Reviews />
        <HowItWorks />
        <Technology />
        <Clinica />
        <GoogleMapsEmbed />
        <FAQ />
        <FinalCTA />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
