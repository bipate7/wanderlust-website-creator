
import React from 'react';
import { Globe, Mountain, Palmtree, Ship, Building, Utensils } from 'lucide-react';

const TravelCategoriesSection = () => {
  return (
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
              <Building className="h-7 w-7 text-travel-coral" />
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
  );
};

export default TravelCategoriesSection;
