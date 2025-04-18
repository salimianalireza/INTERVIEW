import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <nav className="bg-sky-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
        <HomeIcon className="w-10 h-10 text-white hover:text-gray-200" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}; 