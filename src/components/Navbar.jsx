import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      `}</style>

      <nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-light tracking-wide italic" style={{ fontFamily: 'Playfair Display' }}>
              Xplore.
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {['Trips', 'Gallery', 'About', 'Contact'].map((item) => (
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
              className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none z-60"
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

      {/* Mobile Menu Panel - Reverted to original version */}
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