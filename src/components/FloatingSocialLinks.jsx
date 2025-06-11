/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom X (Twitter) icon
const XIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FloatingSocialLinks = () => {
  const [isBeyond100vh, setIsBeyond100vh] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const socialLinks = [
    { icon: <Facebook size={16} />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <Instagram size={16} />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <XIcon />, url: 'https://x.com', name: 'X (Twitter)' }
  ];

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsBeyond100vh(window.scrollY > 20);
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkIfMobile);
    
    handleScroll(); // Initialize on mount
    checkIfMobile(); // Initialize on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  if (!isMounted) return null;

  // Mobile/Tablet layout - Left side vertical
  if (isMobile) {
    return (
      <motion.div 
        className="fixed left-0 bottom-1/8 transform translate-y-1/2 z-50 lg:hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex flex-col items-center space-y-2 ml-2">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 group ${
                isBeyond100vh
                  ? 'bg-white/80 border-gray-300 shadow-md'
                  : 'bg-white/10 border-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              aria-label={link.name}
            >
              <span className={`transition-colors ${
                isBeyond100vh
                  ? 'text-gray-700'
                  : 'text-white'
              }`}>
                {link.icon}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    );
  }

  // Desktop layout - Original design
  return (
    <motion.div 
      className="fixed left-4 md:left-6 bottom-1/5 transform translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="flex flex-col items-center space-y-3 md:space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 group ${
              isBeyond100vh
                ? 'bg-white/80 border-gray-300 shadow-md'
                : 'bg-white/10 border-white/20'
            }`}
            whileHover={{ scale: 1.1 }}
            aria-label={link.name}
          >
            <span className={`transition-colors ${
              isBeyond100vh
                ? 'text-gray-700 '
                : 'text-white '
            }`}>
              {link.icon}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingSocialLinks;