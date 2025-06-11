import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrolltoTop';

const Footer = () => {

  const nav = useNavigate()
  const handleNavigate=(link)=>{
    nav(link)
  }
  return (
    <footer className="bg-gray-900 text-white">
      <style jsx='true'>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
      {/* Hero Image Section */}
      <div className="relative h-96 w-full">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
            Discover Your Next Adventure
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Join thousands of travelers who have experienced the journey of a lifetime
          </p>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="bg-gray-900 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            {/* Discover */}
            <div> 
  <h3 className="text-xl font-semibold mb-6 text-gray-200">Discover</h3>
  <ul className="space-y-3">
    <li onClick={() => { ScrollToTop(); handleNavigate('/'); }}>
      <a className="text-gray-400 hover:text-white transition-colors">Home</a>
    </li>
    <li onClick={() => handleNavigate('/about')}>
      <a className="text-gray-400 hover:text-white transition-colors">About Us</a>
    </li>
    <li onClick={() => handleNavigate('/tours')}>
      <a className="text-gray-400 hover:text-white transition-colors">Tours</a>
    </li>
    <li onClick={() => handleNavigate('/events')}>
      <a className="text-gray-400 hover:text-white transition-colors">Events</a>
    </li>
    <li onClick={() => handleNavigate('/blog')}>
      <a className="text-gray-400 hover:text-white transition-colors">Gallery</a>
    </li>
    <li onClick={() => handleNavigate('/contact')}>
      <a className="text-gray-400 hover:text-white transition-colors">Contact</a>
    </li>
  </ul>
</div>

            {/* Tours */}
            <div>
  <h3 className="text-xl font-semibold mb-6 text-gray-200">Tours</h3>
  <ul className="space-y-3">
    <li onClick={() => handleNavigate('/tours/incredible-odisha')}>
      <a className="text-gray-400 hover:text-white transition-colors">Incredile Odisha</a>
    </li>
    <li onClick={() => handleNavigate('/tours/north-bengal-sikkim')}>
      <a className="text-gray-400 hover:text-white transition-colors">North Bengal</a>
    </li>
    <li onClick={() => handleNavigate('/tours/north-east-india-tours')}>
      <a className="text-gray-400 hover:text-white transition-colors">North East India</a>
    </li>
    <li onClick={() => handleNavigate('/tours/north-india')}>
      <a className="text-gray-400 hover:text-white transition-colors">North India</a>
    </li>
    <li onClick={() => handleNavigate('/tours/western-india')}>
      <a className="text-gray-400 hover:text-white transition-colors">Western India</a>
    </li>
    <li onClick={() => handleNavigate('/tours/south-india')}>
      <a className="text-gray-400 hover:text-white transition-colors">South India</a>
    </li>
  </ul>
</div>


            {/* Packages */}
            <div>
  <h3 className="text-xl font-semibold mb-6 text-gray-200">Special Tours</h3>
  <ul className="space-y-3">
    <li onClick={() => handleNavigate('/tours/island-of-india')}>
      <a className="text-gray-400 hover:text-white transition-colors">Islands of India</a>
    </li>
    <li onClick={() => handleNavigate('/tours/international-tours')}>
      <a className="text-gray-400 hover:text-white transition-colors">International</a>
    </li>
    <li onClick={() => handleNavigate('/tours/pilgrimage-tours')}>
      <a className="text-gray-400 hover:text-white transition-colors">Pilgrimage</a>
    </li>
    <li onClick={() => handleNavigate('/tours/heritage-tours')}>
      <a className="text-gray-400 hover:text-white transition-colors">Heritage</a>
    </li>
    <li onClick={() => handleNavigate('/tours/adventure-tours')}>
      <a className="text-gray-400 hover:text-white transition-colors">Adventure</a>
    </li>
  </ul>
</div>


            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Policy</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-gray-400" />
                  <span className="text-gray-400">+91 82496 08314</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-gray-400" />
                  <span className="text-gray-400">
                    Infocity, Sai Kuthir, Bhubaneswar- 751024,<br />
                    Odisha, India.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div 
                className="text-xl text-white font-playfair"
              >
                Bademiyan Tours and Travels.
              </div>
              <div className="h-6 border-l border-gray-700"></div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Bademiyan Tours and Travels. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;