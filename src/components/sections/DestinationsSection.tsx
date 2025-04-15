
import React from 'react';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const DestinationsSection = () => {
  return (
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
  );
};

export default DestinationsSection;
