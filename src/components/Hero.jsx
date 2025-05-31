/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
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

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  
  const slides = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070', 
      heading: {
        line1: { part1: "Embark on", part2: "journeys" },
        line2: { part1: "not", part2: "just", part3: "destinations" },
        line3: { part1: "with", part2: "our trips." }
      },
      description: "Unlock the doors to diverse cultures, awe-inspiring landscapes, and thrilling adventures with us."
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070', 
      heading: {
        line1: { part1: "Discover", part2: "hidden" },
        line2: { part1: "wonders", part2: "in every", part3: "corner" },
        line3: { part1: "of the", part2: "world." }
      },
      description: "Explore breathtaking landscapes and uncover secrets that only true travelers find."
    },
    { 
      id: 3, 
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073', 
      heading: {
        line1: { part1: "Journey", part2: "beyond" },
        line2: { part1: "the", part2: "ordinary", part3: "into" },
        line3: { part1: "extraordinary", part2: "experiences." }
      },
      description: "Create lifelong memories with experiences tailored to your sense of wonder."
    },
    { 
      id: 4, 
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074', 
      heading: {
        line1: { part1: "Where", part2: "adventure" },
        line2: { part1: "meets", part2: "serenity", part3: "and" },
        line3: { part1: "dreams", part2: "become reality." }
      },
      description: "Find the perfect balance between thrilling exploration and peaceful moments."
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    let interval;
    
    if (!isHovered) {
      interval = setInterval(() => {
        setProgress(0);
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 6000);
      
      // Progress bar animation
      const startTime = Date.now();
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        setProgress(Math.min(elapsed / 6000 * 100, 100));
      }, 50);
      
      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [currentSlide, isHovered, slides.length]);

  // Navigation functions
  const goToNext = () => {
    setProgress(0);
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setProgress(0);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setProgress(0);
    setCurrentSlide(index);
  };

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        await taglineControls.start("visible");
        await taglineCharControls.start("visible");
        await headingControls.start("visible");
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

  // Faster animation for the bottom content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Background slide animation
  const slideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.95
    }),
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      scale: 0.95,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.1, 0.25, 1] 
      }
    })
  };

  const taglineText = "The Best Place to Start Your Adventure";

  return (
    <div 
      ref={ref} 
      className="min-h-screen relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap');
        .font-playfair-medium-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
        }
      `}</style>
      
      {/* Slider Backgrounds */}
      <div className="absolute inset-0" ref={sliderRef}>
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${slides[currentSlide].image})`
            }}
            custom={1}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
        
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
        
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8">
        <button 
          onClick={goToPrev}
          className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
        </button>
        
        <button 
          onClick={goToNext}
          className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
        </button>
      </div>
      
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
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-4 md:px-5 py-2 md:py-2 mt-8 font-normal">
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

            {/* Heading with preserved structure and animation */}
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
                  <span className="mr-4">{slides[currentSlide].heading.line1.part1}</span>
                  <span className="font-playfair-medium-italic text-white/95">{slides[currentSlide].heading.line1.part2}</span>
                </motion.div>
                <motion.div 
                  className="mb-2"
                  variants={headingLineVariants}
                  custom={1}
                >
                  <span className="mr-4">{slides[currentSlide].heading.line2.part1}</span>
                  <span className="font-playfair-medium-italic text-white/95 mr-4">{slides[currentSlide].heading.line2.part2}</span>
                  <span>{slides[currentSlide].heading.line2.part3}</span>
                </motion.div>
                <motion.div 
                  className="mb-2"
                  variants={headingLineVariants}
                  custom={2}
                >
                  <span className="mr-4">{slides[currentSlide].heading.line3.part1}</span>
                  <span className="font-playfair-medium-italic text-white/95 mr-4">{slides[currentSlide].heading.line3.part2}</span>
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
              {slides[currentSlide].description}
            </p>
            
            <button className="group bg-transparent border border-white/60 text-white px-8 sm:px-10 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 font-light tracking-wide text-sm uppercase md:ml-auto">
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        {/* Progress bar indicators */}
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-3">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className="w-10 sm:w-16 h-1 rounded-full bg-white/20 overflow-hidden cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              {currentSlide === index && (
                <motion.div 
                  className="h-full bg-amber-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Slide numbers */}
        <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
          <span className="text-white text-sm font-mono">
            <span className="text-amber-300">{currentSlide + 1}</span>
            <span className="text-white/50"> / {slides.length}</span>
          </span>
        </div>
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
        
        .slide-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .slide-indicator:hover {
          transform: scale(1.2);
        }
        
        .slide-indicator.active {
          background: rgba(255,255,255,0.8);
        }
        
        .slide-indicator.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FBBF24;
          border-radius: 50%;
          animation: progress 6s linear forwards;
        }
        
        @keyframes progress {
          0% { transform: scaleX(0); transform-origin: left; }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;