import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-0 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">LOGO</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-900 transition-colors">About</a>
            <a href="#" className="text-white hover:text-gray-900 transition-colors">Services</a>
            <a href="#" className="text-white hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;