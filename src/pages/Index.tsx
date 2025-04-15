
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchForm from '@/components/SearchForm';
import DestinationCard from '@/components/DestinationCard';
import TestimonialCard from '@/components/TestimonialCard';
import ExperienceCard from '@/components/ExperienceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Compass, 
  Map, 
  ShieldCheck, 
  Clock, 
  HeartHandshake,
  ChevronRight,
  Globe,
  Palmtree,
  Mountain,
  Ship,
  Buildings,
  Utensils
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Destinations Section */}
      <section id="destinations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of the most beautiful and exciting destinations from around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DestinationCard 
              image="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              title="Antelope Canyon" 
              location="Arizona, USA" 
              price="$299" 
              rating={4.8} 
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              title="The Alps" 
              location="Switzerland" 
              price="$450" 
              rating={4.9} 
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              title="Bali Beaches" 
              location="Indonesia" 
              price="$349" 
              rating={4.7} 
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              title="Skógafoss" 
              location="Iceland" 
              price="$520" 
              rating={4.9} 
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              title="Yosemite Valley" 
              location="California, USA" 
              price="$245" 
              rating={4.7} 
            />
            <DestinationCard 
              image="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              title="Dolomites" 
              location="Italy" 
              price="$399" 
              rating={4.8} 
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-travel-teal hover:bg-travel-teal/90 text-white">
              View All Destinations
              <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Travel Category Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Explore Travel Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whatever your travel style, we have the perfect experience for you
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            <div className="bg-white p-4 rounded-lg text-center hover-scale card-shadow flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-travel-sand flex items-center justify-center mb-3">
                <Globe className="h-7 w-7 text-travel-coral" />
              </div>
              <span className="font-medium">World Tour</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center hover-scale card-shadow flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-travel-sand flex items-center justify-center mb-3">
                <Mountain className="h-7 w-7 text-travel-coral" />
              </div>
              <span className="font-medium">Adventure</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center hover-scale card-shadow flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-travel-sand flex items-center justify-center mb-3">
                <Palmtree className="h-7 w-7 text-travel-coral" />
              </div>
              <span className="font-medium">Beach</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center hover-scale card-shadow flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-travel-sand flex items-center justify-center mb-3">
                <Ship className="h-7 w-7 text-travel-coral" />
              </div>
              <span className="font-medium">Cruise</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center hover-scale card-shadow flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-travel-sand flex items-center justify-center mb-3">
                <Buildings className="h-7 w-7 text-travel-coral" />
              </div>
              <span className="font-medium">City Break</span>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center hover-scale card-shadow flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-travel-sand flex items-center justify-center mb-3">
                <Utensils className="h-7 w-7 text-travel-coral" />
              </div>
              <span className="font-medium">Food Tour</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
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
      
      {/* Testimonials Section */}
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
      
      {/* Newsletter Section */}
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
      
      {/* CTA Section */}
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
      
      <Footer />
    </div>
  );
};

export default Index;
