
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Users, Award, Heart, Shield } from 'lucide-react';
import NewsletterSection from '@/components/sections/NewsletterSection';
import CtaSection from '@/components/sections/CtaSection';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-20 bg-travel-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Wanderlust</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating unforgettable travel experiences since 2010
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Wanderlust began with a simple mission: to help travelers discover the world's most amazing places with authentic, immersive experiences that create memories to last a lifetime.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small team of passionate travelers has grown into a global community of adventure-seekers and culture enthusiasts. Yet, our core values remain the same - we believe travel should be transformative, sustainable, and accessible to all.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have helped over 50,000 travelers explore 75+ countries across 6 continents, always staying true to our commitment to responsible tourism and community support.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-travel-navy/20 z-10 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Team of travel experts" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-travel-sand">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-travel-teal text-white mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adventure</h3>
              <p className="text-gray-600">We believe in pushing boundaries and stepping outside comfort zones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-travel-coral text-white mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">Building connections between travelers and local communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-travel-navy text-white mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Delivering exceptional experiences with attention to every detail.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-travel-forest text-white mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">Protecting the places we love for future generations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="John Thompson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">John Thompson</h3>
              <p className="text-travel-coral font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2">Travel enthusiast with 20+ years of experience exploring remote destinations.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Sarah Martinez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Martinez</h3>
              <p className="text-travel-coral font-medium">Head of Operations</p>
              <p className="text-gray-600 mt-2">Former tour guide with a passion for creating seamless travel experiences.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-travel-coral font-medium">Experience Designer</p>
              <p className="text-gray-600 mt-2">Cultural anthropologist creating authentic connections through travel.</p>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
