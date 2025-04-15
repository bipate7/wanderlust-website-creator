
import React from 'react';
import ExperienceCard from '@/components/ExperienceCard';
import { Map, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-16 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're dedicated to providing you with the best travel experience possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ExperienceCard 
            icon={<Map size={28} />}
            title="Expert Local Guides"
            description="Our guides know all the hidden gems and will make your journey unforgettable."
          />
          <ExperienceCard 
            icon={<ShieldCheck size={28} />}
            title="Safe & Secure"
            description="Your safety is our top priority with 24/7 support and trusted partners."
          />
          <ExperienceCard 
            icon={<Clock size={28} />}
            title="Flexible Booking"
            description="Change your plans with free cancellation up to 7 days before your trip."
          />
          <ExperienceCard 
            icon={<HeartHandshake size={28} />}
            title="Personalized Service"
            description="We tailor each trip to your preferences for a truly custom experience."
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
