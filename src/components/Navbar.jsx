import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set active item based on current route
  useEffect(() => {
    const path = location.pathname.substring(1); // remove leading slash
    setActiveItem(path || '');
  }, [location]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    if (isMenuOpen) {
      // Disable scrolling on all possible elements
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      html.classList.add('overflow-hidden');
      body.classList.add('overflow-hidden');
      
      // Additional touch event prevention for mobile
      body.style.touchAction = 'none';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      // Re-enable scrolling
      html.style.overflow = '';
      body.style.overflow = '';
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
      
      // Restore touch events
      body.style.touchAction = '';
      body.style.position = '';
      body.style.width = '';
    }
    
    return () => {
      // Cleanup
      html.style.overflow = '';
      body.style.overflow = '';
      html.classList.remove('overflow-hidden');
      body.classList.remove('overflow-hidden');
      body.style.touchAction = '';
      body.style.position = '';
      body.style.width = '';
    };
  }, [isMenuOpen]);

  // Menu items array with corresponding routes
  const menuItems = [
    { name: 'About', path: 'about' },
    { name: 'Tours', path: 'tours' },
    { name: 'Events', path: 'events' },
    { name: 'Blog', path: 'blog' },
    { name: 'Contact', path: 'contact' }
  ];

  return (
    <>
      <style jsx='true'>{`
        .underline-effect {
          position: relative;
        }
        
        .underline-effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, #fff, #fff);
          border-radius: 1px;
          transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .underline-effect:hover::after {
          width: 100%;
        }
        
        .underline-effect.active::after {
          width: 100%;
          background: linear-gradient(90deg, #fff, #fff);
        }

        @media (max-width: 767px) {
          .underline-effect::after {
            background: linear-gradient(90deg, #fff, #fff);
          }
          .underline-effect.active::after {
            background: linear-gradient(90deg, #fff, #fff);
          }
        }
      `}</style>

      <nav className='absolute top-0 left-0 right-0 z-50 transition-all duration-300'>
        <div className="max-w-7xl mx-auto px-2 py-2">
          <div className="flex items-center justify-between">
            {/* Logo with image and text - white version */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logoW.png" // Make sure you have a white version logo in your public folder
                alt="Bademiyan Logo"
                className="h-16 w-auto" // Adjust size as needed
              />
              <span className="text-white text-2xl font-light tracking-wide italic" style={{ fontFamily: 'Playfair Display' }}>
                Bademiyan
              </span>
            </Link>
            
            {/* Desktop Menu - white items */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={`/${item.path}`}
                  className={`underline-effect text-white/90 hover:text-white transition-colors duration-200 font-normal tracking-wide ${
                    activeItem === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - white hamburger */}
            {!isMenuOpen && (
              <button
                onClick={toggleMenu}
                className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none z-60"
                aria-label="Open menu"
              >
                <div className="relative w-6 h-6">
                  <span className="absolute left-0 w-6 h-0.5 bg-white top-1" />
                  <span className="absolute left-0 w-6 h-0.5 bg-white top-3" />
                  <span className="absolute left-0 w-6 h-0.5 bg-white top-5" />
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Background overlay for closing menu */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[60%] bg-[#1a1d1f] z-50 transition-all duration-500 ease-in-out md:hidden transform ${
          isMenuOpen 
            ? 'translate-x-0 opacity-100 visible' 
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        {/* Close button inside the menu */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center focus:outline-none"
          aria-label="Close menu"
        >
          <div className="relative w-6 h-6">
            <span className="absolute left-0 w-6 h-0.5 bg-white rotate-45 top-3" />
            <span className="absolute left-0 w-6 h-0.5 bg-white -rotate-45 top-3" />
          </div>
        </button>
        
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <div
              key={item.path}
              className={`group transition-all duration-300 transform ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              <Link
                to={`/${item.path}`}
                onClick={() => {
                  toggleMenu();
                }}
                className={`text-white text-xl font-normal tracking-wider transition-all duration-300 block py-2 ${
                  activeItem === item.path ? 'text-white font-medium' : 'text-white/90'
                }`}
                style={{ fontFamily: 'Playfair Display' }}
              >
                {item.name}
              </Link>
              <div className={`w-24 h-px mx-auto mt-2 transition-all duration-300 ${
                activeItem === item.path
                  ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                  : 'bg-white/30 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;