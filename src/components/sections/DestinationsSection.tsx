
import React from 'react';
import DestinationCard from '@/components/DestinationCard';

const popularDestinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: 4.8,
    reviews: 256,
    price: 1200,
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    rating: 4.9,
    reviews: 312,
    price: 1500,
  },
  {
    id: 3,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    rating: 4.7,
    reviews: 189,
    price: 1800,
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    rating: 4.9,
    reviews: 276,
    price: 2200,
  },
];

const allDestinations = [
  ...popularDestinations,
  {
    id: 5,
    name: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99',
    rating: 4.6,
    reviews: 142,
    price: 1350,
  },
  {
    id: 6,
    name: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4',
    rating: 4.7,
    reviews: 203,
    price: 1100,
  },
  {
    id: 7,
    name: 'New York City, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
    rating: 4.8,
    reviews: 387,
    price: 2500,
  },
  {
    id: 8,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd',
    rating: 4.9,
    reviews: 214,
    price: 3200,
  },
  {
    id: 9,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    rating: 4.7,
    reviews: 432,
    price: 1400,
  },
  {
    id: 10,
    name: 'Venice, Italy',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0',
    rating: 4.6,
    reviews: 176,
    price: 1300,
  },
  {
    id: 11,
    name: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
    rating: 4.8,
    reviews: 201,
    price: 2100,
  },
  {
    id: 12,
    name: 'Marrakech, Morocco',
    image: 'https://images.unsplash.com/photo-1545041499-27c971d102f0',
    rating: 4.5,
    reviews: 132,
    price: 950,
  },
];

interface DestinationsSectionProps {
  extended?: boolean;
}

const DestinationsSection = ({ extended = false }: DestinationsSectionProps) => {
  const destinations = extended ? allDestinations : popularDestinations;
  
  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {!extended && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our most sought-after travel destinations and start planning your next adventure
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id}
              name={destination.name}
              image={destination.image}
              rating={destination.rating}
              reviews={destination.reviews}
              price={destination.price}
            />
          ))}
        </div>
        
        {!extended && (
          <div className="text-center mt-12">
            <a 
              href="/destinations" 
              className="inline-flex items-center font-semibold text-travel-coral hover:text-travel-navy transition-colors"
            >
              View all destinations
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;
