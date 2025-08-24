import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductSuggestionsSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />
      <HeroSection />
      <ProductSuggestionsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
