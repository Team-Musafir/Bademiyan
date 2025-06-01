import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
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
        
        body.menu-open {
          overflow: hidden !important;
        }
      `}</style>

      {/* Changed from fixed to absolute positioning */}
      <nav className='absolute top-0 left-0 right-0 z-50 transition-all duration-300'>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-light tracking-wide italic" style={{ fontFamily: 'Playfair Display' }}>
              BadeMiyan.
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {['About', 'Tours-Packages', 'Events','Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`underline-effect text-white/90 hover:text-white transition-colors duration-200 font-normal tracking-wide ${
                    activeItem === item ? 'active' : ''
                  }`}
                  onMouseEnter={() => setActiveItem(item)}
                  onMouseLeave={() => setActiveItem('')}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                      ? 'top-3 rotate-45 opacity-100' 
                      : 'top-1 rotate-0 opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
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

      {/* Background overlay for closing menu */}
      <div 
        className={`fixed inset-0 bg-black/50 z-30 transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[65%] bg-[#1a1d1f] z-40 transition-all duration-500 ease-in-out md:hidden transform ${
          isMenuOpen 
            ? 'translate-x-0 opacity-100 visible' 
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Home', 'Trips', 'Gallery', 'About', 'Contact'].map((item, index) => (
            <div
              key={item}
              className={`group transition-all duration-300 transform ${
                isMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              <a
                href="#"
                onClick={() => {
                  toggleMenu();
                  setActiveItem(item);
                }}
                className="text-white text-xl font-normal tracking-wider transition-all duration-300 block py-2"
                style={{ fontFamily: 'Playfair Display' }}
              >
                {item}
              </a>
              <div className="w-24 h-px bg-white/30 group-hover:bg-white group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;