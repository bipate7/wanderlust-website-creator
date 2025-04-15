
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section id="contact" className="py-16 bg-travel-sand">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Get Travel Inspiration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, travel tips, and destination guides
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg card-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <Input 
              placeholder="Enter your email address" 
              className="flex-grow md:flex-1"
            />
            <Button className="bg-travel-coral hover:bg-travel-coral/90 text-white">
              Subscribe Now
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive our promotional emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
