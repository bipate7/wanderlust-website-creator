
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationsSection from '@/components/sections/DestinationsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import CtaSection from '@/components/sections/CtaSection';

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-20 bg-travel-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our handpicked collection of breathtaking destinations around the world
          </p>
        </div>
      </div>
      <DestinationsSection extended={true} />
      <NewsletterSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Destinations;
