/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Handle body overflow when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Packages', path: '/packages' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <style jsx global>{`
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
          background: linear-gradient(90deg, #000, #000); /* Changed to black */
          border-radius: 1px;
          transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
        }
        
        .underline-effect:hover::after {
          width: 100%;
        }
        
        .underline-effect.active::after {
          width: 100%;
          background: linear-gradient(90deg, #000, #000); /* Changed to black */
        }
        
        body.menu-open {
          overflow: hidden !important;
        }
        
        /* Active underline for mobile menu */
        .mobile-link.active {
          position: relative;
        }
        
        .mobile-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 2px;
          background: white;
          border-radius: 1px;
        }
      `}</style>

      <nav className='absolute top-0 left-0 right-0 z-50 transition-all duration-300'>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <NavLink 
              to="/" 
              className="text-black text-2xl font-light tracking-wide italic" /* Changed to black */
              style={{ fontFamily: 'Playfair Display' }}
            >
              BadeMiyan.
            </NavLink>
            
            {/* Desktop Menu - Changed to black */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.slice(1).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `underline-effect text-black/90 hover:text-black transition-colors duration-200 font-normal tracking-wide ${
                      isActive ? 'active' : ''
                    }` /* Changed to black */
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button - Changed to black */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                      ? 'top-3 rotate-45 opacity-100' 
                      : 'top-1 rotate-0 opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                      ? 'top-3 -rotate-45 opacity-100' 
                      : 'top-5 rotate-0 opacity-100'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Unchanged */}
      <div 
        className={`fixed inset-0 bg-black/50 z-30 transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel - Unchanged */}
      <div 
        className={`fixed top-0 right-0 h-full w-[60%] bg-[#1a1d1f] z-40 transition-all duration-500 ease-in-out md:hidden transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`group transition-all duration-300 transform ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
            >
              <NavLink
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `mobile-link text-white text-xl font-normal tracking-wider transition-all duration-300 block py-2 ${
                    isActive ? 'active' : ''
                  }`
                }
                style={{ fontFamily: 'Playfair Display' }}
              >
                {item.name}
              </NavLink>
              <div className="w-24 h-px bg-white/30 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;