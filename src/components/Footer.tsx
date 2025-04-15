
import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-travel-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              Discover the world with Wanderlust. We offer unforgettable travel experiences to the most breathtaking destinations around the globe.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-travel-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-travel-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-travel-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="hover:text-travel-coral transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#destinations" className="text-gray-300 hover:text-travel-coral transition-colors">Destinations</a></li>
              <li><a href="#experiences" className="text-gray-300 hover:text-travel-coral transition-colors">Experiences</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-travel-coral transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-travel-coral transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-travel-coral transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-300 hover:text-travel-coral transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-travel-coral transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-travel-coral" />
                <span className="text-gray-300">
                  123 Adventure Road<br />
                  Wanderlust City, WL 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-travel-coral" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-travel-coral transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-travel-coral" />
                <a href="mailto:info@wanderlust.com" className="text-gray-300 hover:text-travel-coral transition-colors">
                  info@wanderlust.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter and get exclusive offers on the latest tours and discounts.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Your email address" 
                className="bg-travel-navy/50 border-gray-700 text-white"
              />
              <Button className="w-full bg-travel-coral hover:bg-travel-coral/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
