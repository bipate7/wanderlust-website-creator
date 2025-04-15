
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, author, location, image 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg card-shadow">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-travel-coral">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.667 13.3333H5.33366C4.96547 13.3333 4.66699 13.0348 4.66699 12.6666V7.33329C4.66699 6.96511 4.96547 6.66663 5.33366 6.66663H10.667C11.0352 6.66663 11.3337 6.96511 11.3337 7.33329V12.6666C11.3337 13.0348 11.0352 13.3333 10.667 13.3333Z" fill="currentColor"/>
            <path d="M26.6667 13.3333H21.3333C20.9651 13.3333 20.6667 13.0348 20.6667 12.6666V7.33329C20.6667 6.96511 20.9651 6.66663 21.3333 6.66663H26.6667C27.0349 6.66663 27.3333 6.96511 27.3333 7.33329V12.6666C27.3333 13.0348 27.0349 13.3333 26.6667 13.3333Z" fill="currentColor"/>
            <path d="M14.6667 25.3333C14.6667 21.6514 11.6819 18.6666 8.00004 18.6666V14.6666C13.891 14.6666 18.6667 19.4423 18.6667 25.3333H14.6667Z" fill="currentColor"/>
            <path d="M30.6667 25.3333C30.6667 21.6514 27.6819 18.6666 24 18.6666V14.6666C29.891 14.6666 34.6667 19.4423 34.6667 25.3333H30.6667Z" fill="currentColor"/>
          </svg>
        </div>
        <p className="text-gray-600 italic flex-grow">{quote}</p>
        <div className="flex items-center mt-6">
          <img 
            src={image} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover border-2 border-travel-teal"
          />
          <div className="ml-3">
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
