
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import DestinationsSection from '@/components/sections/DestinationsSection';
import TravelCategoriesSection from '@/components/sections/TravelCategoriesSection';
import ExperiencesSection from '@/components/sections/ExperiencesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <DestinationsSection />
      <TravelCategoriesSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
