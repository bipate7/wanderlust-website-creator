
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number; // Add the reviews prop to the interface
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  image, title, location, price, rating, reviews // Add reviews parameter
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow hover-scale">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium">
            <span className="text-travel-teal text-lg">{price}</span>
            <span className="text-gray-500 text-sm"> / person</span>
          </p>
          <Button variant="outline" className="text-travel-teal border-travel-teal hover:bg-travel-teal hover:text-white">
            View Details
          </Button>
        </div>
        {/* Display the reviews count */}
        <div className="mt-2 text-sm text-gray-500">
          {reviews} reviews
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
