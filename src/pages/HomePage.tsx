import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <CoreValues />
      <Services />
      <Sectors />
      <Testimonials />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}