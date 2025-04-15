
import React from 'react';
import { Compass } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Compass className="h-7 w-7 text-travel-coral" strokeWidth={2} />
      <span className="font-bold text-lg md:text-xl">Wanderlust</span>
    </div>
  );
};

export default Logo;
