
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-travel-teal text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Book your dream vacation today and create memories that will last a lifetime
        </p>
        <Button className="bg-white text-travel-teal hover:bg-gray-100 font-semibold text-lg px-8 py-6">
          Plan Your Trip Now
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
