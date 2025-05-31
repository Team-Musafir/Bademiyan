/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  // Animation controls
  const taglineControls = useAnimation();
  const taglineCharControls = useAnimation();
  const headingControls = useAnimation();
  const contentControls = useAnimation();
  
  // Visibility tracking
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await taglineControls.start("visible");
        await taglineCharControls.start("visible");
        await headingControls.start("visible");
        // Start content animation much earlier
        await contentControls.start("visible");
      };
      sequence();
    }
  }, [inView, taglineControls, taglineCharControls, headingControls, contentControls]);

  // Animation variants
  const taglineVariants = {
    hidden: { opacity: 0, x: -100, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        filter: { duration: 1.0 }
      }
    }
  };

  // Character animation variants for cloud effect
  const taglineCharVariants = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(8px)',
      textShadow: '0 0 8px rgba(255,255,255,0.8)',
      y: 10
    },
    visible: (i) => ({
      opacity: 1,
      filter: 'blur(0px)',
      textShadow: '0 0 0 rgba(255,255,255,0)',
      y: 0,
      transition: {
        delay: i * 0.02,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const headingLineVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    })
  };

  // Much faster animation for the bottom content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,  // Reduced from 0.8 to 0.2
        duration: 0.3,  // Reduced from 0.6 to 0.3
        ease: "easeOut"
      }
    }
  };

  const taglineText = "The Best Place to Start Your Adventure";

  return (
    <div ref={ref} className="min-h-screen relative overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap');
        .font-playfair-medium-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
        }
      `}</style>
      
      {/* Cloud background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 300}px`,
              height: `${80 + Math.random() * 120}px`,
              opacity: 0.1 + Math.random() * 0.2,
              filter: 'blur(30px)',
              animation: `float ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('./bg.jpg')`
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="max-w-7xl mx-auto px-6 w-full pt-20 flex-grow flex flex-col">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tagline with character-by-character cloud effect */}
            <motion.div 
              className="mb-8 flex justify-center"
              variants={taglineVariants}
              initial="hidden"
              animate={taglineControls}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-5 py-1 md:py-2 mt-8 font-normal">
                <div className="text-white text-center text-[0.9rem] xs:text-xs sm:text-sm md:text-base">
                  {taglineText.split('').map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={taglineCharVariants}
                      initial="hidden"
                      animate={taglineCharControls}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Heading with line-by-line animation */}
            <motion.h1 
              className="text-white leading-none"
              initial="hidden"
              animate={headingControls}
            >
              <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-wider">
                <motion.div 
                  className="mb-2"
                  variants={headingLineVariants}
                  custom={0}
                >
                  <span className="mr-4">Embark on</span>
                  <span className="font-playfair-medium-italic text-white/95">journeys</span>
                </motion.div>
                <motion.div 
                  className="mb-2"
                  variants={headingLineVariants}
                  custom={1}
                >
                  <span className="mr-4">not</span>
                  <span className="font-playfair-medium-italic text-white/95 mr-4">just</span>
                  <span>destinations</span>
                </motion.div>
                <motion.div 
                  className="mb-2"
                  variants={headingLineVariants}
                  custom={2}
                >
                  <span className="mr-4">with</span>
                  <span className="font-playfair-medium-italic text-white/95 mr-4">our trips.</span>
                </motion.div>
              </div>
            </motion.h1>
          </div>
        </div>
        
        {/* Bottom content with faster fade-in animation */}
        <motion.div 
          className="max-w-7xl mx-auto px-6 w-full pb-20"
          variants={contentVariants}
          initial="hidden"
          animate={contentControls}
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end">
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-0 max-w-md text-center md:text-left">
              Unlock the doors to diverse cultures, awe-inspiring landscapes, and thrilling adventures with us.
            </p>
            
            <button className="group bg-transparent border border-white/60 text-white px-8 sm:px-10 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 font-light tracking-wide text-sm uppercase md:ml-auto">
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 300}px`,
              height: `${60 + Math.random() * 100}px`,
              filter: 'blur(40px)',
              opacity: 0.1 + Math.random() * 0.2,
              animation: `float ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Global animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() > 0.5 ? '-' : ''}10px, -10px); }
          50% { transform: translate(0, -20px); }
          75% { transform: translate(${Math.random() > 0.5 ? '-' : ''}10px, -10px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;