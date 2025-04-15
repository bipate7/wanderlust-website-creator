
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-95 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#destinations" className="font-medium hover:text-travel-coral transition-colors">
              Destinations
            </a>
            <a href="#experiences" className="font-medium hover:text-travel-coral transition-colors">
              Experiences
            </a>
            <a href="#about" className="font-medium hover:text-travel-coral transition-colors">
              About Us
            </a>
            <a href="#contact" className="font-medium hover:text-travel-coral transition-colors">
              Contact
            </a>
            <Button className="bg-travel-coral hover:bg-travel-coral/90 text-white">
              Book Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <div className="flex flex-col gap-3">
              <a 
                href="#destinations" 
                className="py-2 px-4 hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Destinations
              </a>
              <a 
                href="#experiences" 
                className="py-2 px-4 hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Experiences
              </a>
              <a 
                href="#about" 
                className="py-2 px-4 hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="py-2 px-4 hover:bg-gray-100 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button className="bg-travel-coral hover:bg-travel-coral/90 text-white mt-2">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
