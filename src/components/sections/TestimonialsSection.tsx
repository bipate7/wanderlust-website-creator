
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="The trip to Bali was absolutely amazing! The tour guides were knowledgeable and friendly, and the itinerary was perfect. I can't wait for my next adventure with Wanderlust!"
            author="Sarah Johnson"
            location="New York, USA"
            image="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <TestimonialCard 
            quote="Everything was perfectly organized from start to finish. The accommodations were excellent and the activities were so much fun. This was truly a trip of a lifetime!"
            author="Michael Chen"
            location="Toronto, Canada"
            image="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <TestimonialCard 
            quote="As a solo traveler, I was nervous about my trip to Iceland, but Wanderlust took care of everything. I felt safe and had an incredible time exploring with the group!"
            author="Emma Rodriguez"
            location="London, UK"
            image="https://randomuser.me/api/portraits/women/68.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
