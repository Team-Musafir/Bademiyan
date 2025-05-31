/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const intervalRef = useRef(null);
  
  useEffect(() => {
    // Hide the logo initially
    const letters = logoRef.current?.querySelectorAll('span');
    if (letters) {
      gsap.set(letters, {
        y: 40,
        opacity: 0,
        rotation: () => gsap.utils.random(-15, 15)
      });
    }
    
    // Animation for the navbar on page load
    gsap.fromTo(
      navRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        onComplete: () => {
          animateLogo();
          // Set interval to repeat animation every 15 seconds
          intervalRef.current = setInterval(animateLogo, 15000);
        }
      }
    );
    

  }, []);
  
  const animateLogo = () => {
    if (!logoRef.current) return;
    
    const letters = logoRef.current.querySelectorAll('span');
  
    // Reset letters position for animation
    gsap.set(letters, {
      y: 40,
      opacity: 0,
      rotation: () => gsap.utils.random(-15, 15)
    });
    
    // Animate letters - reduce movement on small screens
    const isMobile = window.innerWidth <= 768;
    const yDistance = isMobile ? 20 : 40;
    
    gsap.to(letters, {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: {
        each: 0.1,
        from: "center"
      }
    });
    
    
  };

  return (
    <nav ref={navRef}>
      <div className="links">
        <a href="/services" className="nav-link nav-services">
          <span className="nav-text">Services</span>
          <span className="nav-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="black" strokeWidth="2">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
            </svg>
          </span>
        </a>
        <a href="/projects" className="nav-link nav-projects">
          <span className="nav-text">Projects</span>
          <span className="nav-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="black" strokeWidth="2">
              <polygon points="12 2 22 7 12 12 2 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </span>
        </a>
      </div>
      <div className="nav-logo">
        <a href="/" ref={logoRef}>
          {"Bademiyan".split('').map((letter, i) => (
            <span key={i} className="logo-letter">{letter}</span>
          ))}
        </a>
      </div>
      <div className="links">
        <a href="/about" className="nav-link nav-about">
          <span className="nav-text">About</span>
          <span className="nav-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="black" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M2 20c0-4 8-6 10-6s10 2 10 6" />
            </svg>
          </span>
        </a>
        <a href="/contact" className="nav-link nav-contact">
          <span className="nav-text">Contact</span>
          <span className="nav-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="black" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,14 22,4" />
            </svg>
          </span>
        </a>
      </div>
      
      <style jsx>{`
        nav {
          position: fixed;
          width: 100vw;
          padding: 1em;
          display: flex;
          gap: 1em;
          z-index: 100;
          background-color: transparent;
          top: 0;
          left: 0;
          box-sizing: border-box;
        }
        
        nav > * {
          flex: 1;
        }
        
        .links {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        .nav-logo {
          text-align: center;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        .nav-logo a {
          font-family: "Druk", sans-serif;
          font-weight: bolder;
          font-style: italic;
          line-height: 0.9;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.5px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
          display: inline-flex;
        }
        
        .logo-letter {
          display: inline-block;
          transform-origin: bottom center;
        }
        
        .nav-link {
          text-decoration: none;
          text-transform: uppercase;
          font-family: "Akkurat Mono", monospace;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .nav-link .nav-icon {
          display: none;
        }
        .nav-link .nav-text {
          display: inline;
        }
        
        /* Responsive font sizes */
        .nav-logo a {
          font-size: 1.25rem; /* Base mobile size */
        }
        
        .nav-link {
          font-size: 0.65rem;
        }
        
        /* Tablet */
        @media (min-width: 600px) {
          nav {
            gap: 2em;
            padding: 1.5em;
          }
          
          .nav-logo a {
            font-size: 1.75rem;
          }
          
          .nav-link {
            font-size: 0.7rem;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .nav-logo a {
            font-size: 2rem;
          }
          
          .nav-link {
            font-size: 0.75rem;
          }
        }
        
        /* On small screens, show icons, hide text */
        @media (max-width: 768px) {
          .nav-link .nav-text {
            display: none;
          }
          .nav-link .nav-icon {
            display: inline-block;
            vertical-align: middle;
          }
          .links {
            justify-content: center;
            gap: 1em;
          }
          .nav-logo {
            flex: 1 1 100%;
            text-align: center;
          }
          nav {
            gap: 0.5em;
            flex-wrap: wrap;
            padding: 0.75em;
          }
          
          /* Larger touch targets for mobile */
          .nav-link {
            padding: 10px;
          }
        }
        
        /* Very small screens */
        @media (max-width: 480px) {
          nav {
            padding: 0.5em;
          }
          
          .links {
            gap: 0.5em;
          }
          
          .nav-link {
            padding: 8px;
          }
          
          .nav-logo a {
            font-size: 1.1rem;
          }
        }
        
        /* Landscape orientation */
        @media (max-height: 480px) and (orientation: landscape) {
          nav {
            padding: 0.5em;
          }
          
          .nav-logo a {
            font-size: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;