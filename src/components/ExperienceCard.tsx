
import React from 'react';

interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  icon, title, description 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg text-center hover-scale card-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-travel-sand rounded-full mb-4 text-travel-coral">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ExperienceCard;
