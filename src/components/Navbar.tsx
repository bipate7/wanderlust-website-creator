
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white bg-opacity-95 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/destinations" 
              className={`font-medium transition-colors ${
                isActive('/destinations') ? 'text-travel-coral' : 'hover:text-travel-coral'
              }`}
            >
              Destinations
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-travel-coral' : 'hover:text-travel-coral'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-travel-coral' : 'hover:text-travel-coral'
              }`}
            >
              Contact
            </Link>
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
              <Link 
                to="/destinations" 
                className={`py-2 px-4 rounded-md font-medium ${
                  isActive('/destinations') ? 'bg-travel-coral/10 text-travel-coral' : 'hover:bg-gray-100'
                }`}
                onClick={toggleMenu}
              >
                Destinations
              </Link>
              <Link 
                to="/about" 
                className={`py-2 px-4 rounded-md font-medium ${
                  isActive('/about') ? 'bg-travel-coral/10 text-travel-coral' : 'hover:bg-gray-100'
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={`py-2 px-4 rounded-md font-medium ${
                  isActive('/contact') ? 'bg-travel-coral/10 text-travel-coral' : 'hover:bg-gray-100'
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
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
