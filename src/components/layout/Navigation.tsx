'use client'
import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { DownloadIcon, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/fashion-hive-logo.svg" alt="FashionHive Logo" className="h-8" />
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">Features</a>
          <a href="#" className="hover:text-purple-600">How It Works</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">About</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-2 space-x-2">
            <DownloadIcon className="w-4 h-4" />
            <span>Download App</span>
          </Button>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium text-gray-700">
          <a href="#" className="block hover:text-purple-600">Home</a>
          <a href="#" className="block hover:text-purple-600">Features</a>
          <a href="#" className="block hover:text-purple-600">How It Works</a>
          <a href="#" className="block hover:text-purple-600">Pricing</a>
          <a href="#" className="block hover:text-purple-600">About</a>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-2 flex items-center justify-center space-x-2">
            <DownloadIcon className="w-4 h-4" />
            <span>Download App</span>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
