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
    
    // Cleanup function
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (logoRef.current) {
        const splashes = logoRef.current.querySelectorAll('.logo-splash');
        splashes.forEach(splash => splash.remove());
      }
    };
  }, []);
  
  const animateLogo = () => {
    if (!logoRef.current) return;
    
    const letters = logoRef.current.querySelectorAll('span');
    const splash = document.createElement('div');
    splash.className = 'logo-splash';
    splash.style.cssText = `
      position: absolute;
      width: 120%;
      height: 120%;
      top: -10%;
      left: -10%;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
    `;
    logoRef.current.appendChild(splash);
    
    // Reset letters position for animation
    gsap.set(letters, {
      y: 40,
      opacity: 0,
      rotation: () => gsap.utils.random(-15, 15)
    });
    
    // Animate letters
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
    
    // Animate splash effect
    gsap.to(splash, {
      keyframes: [
        { opacity: 1, scale: 0, duration: 0 },
        { opacity: 0.8, scale: 1, duration: 0.3 },
        { opacity: 0, scale: 1.2, duration: 0.4 }
      ],
      onComplete: () => splash.remove()
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
          gap: 2em;
          z-index: 100;
          background-color: transparent;
          top: 0;
          left: 0;
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
          font-size: 1.75rem;
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
          font-size: 0.7rem;
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
        
        /* On small screens, show icons, hide text */
        @media (max-width: 600px) {
          .nav-link .nav-text {
            display: none;
          }
          .nav-link .nav-icon {
            display: inline-block;
            vertical-align: middle;
          }
          .links {
            justify-content: center;
            gap: 1.5em;
          }
          .nav-logo {
            flex: 1 1 100%;
            text-align: center;
          }
          nav {
            gap: 0;
            flex-wrap: wrap;
          }
          .nav-logo a {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;