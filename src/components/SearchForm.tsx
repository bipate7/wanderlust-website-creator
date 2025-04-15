
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users } from 'lucide-react';

const SearchForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin size={16} className="text-travel-coral" />
            Destination
          </label>
          <Input placeholder="Where are you going?" className="border-gray-300" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Calendar size={16} className="text-travel-coral" />
            Travel Date
          </label>
          <Input type="date" className="border-gray-300" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Users size={16} className="text-travel-coral" />
            Travelers
          </label>
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Number of travelers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Traveler</SelectItem>
              <SelectItem value="2">2 Travelers</SelectItem>
              <SelectItem value="3">3 Travelers</SelectItem>
              <SelectItem value="4">4 Travelers</SelectItem>
              <SelectItem value="5+">5+ Travelers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button className="w-full mt-4 bg-travel-coral hover:bg-travel-coral/90 text-white">
        Search Destinations
      </Button>
    </div>
  );
};

export default SearchForm;
