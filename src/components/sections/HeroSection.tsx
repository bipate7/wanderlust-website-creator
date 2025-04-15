
import React from 'react';
import SearchForm from '@/components/SearchForm';

const HeroSection = () => {
  return (
    <section className="hero-section py-24 md:py-32 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow animate-fade-in">
          Discover the World's Most Amazing Places
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-shadow animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Find your perfect adventure with our curated travel experiences
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
