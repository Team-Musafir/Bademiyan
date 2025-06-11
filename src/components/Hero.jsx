/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
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
  const [direction, setDirection] = useState(1);
  const [progress, setProgress] = useState(0);
  const autoSlideInterval = useRef(null);
  const progressInterval = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://ik.imagekit.io/qad3x0vr1/mark-harpur-xzyD63yc5vI-unsplash.jpg?updatedAt=1748811781161',
      heading: {
        line1: { part1: "Embark on", part2: "journeys" },
        line2: { part1: "not", part2: "just", part3: "destinations" },
        line3: { part1: "with", part2: "our trips." }
      },
      description: "Unlock the doors to diverse cultures, awe-inspiring landscapes, and thrilling adventures with us."
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-vikashkr50-17845104.jpg?updatedAt=1748814426516',
      heading: {
        line1: { part1: "Discover", part2: "hidden" },
        line2: { part1: "wonders", part2: "in every", part3: "corner" },
        line3: { part1: "of the", part2: "world." }
      },
      description: "Explore breathtaking landscapes and uncover secrets that only true travelers find."
    },
    {
      id: 3,
      image: 'https://ik.imagekit.io/qad3x0vr1/konark%20temple,India.jpeg?updatedAt=1748811758408',
      heading: {
        line1: { part1: "Journey", part2: "beyond" },
        line2: { part1: "the", part2: "ordinary", part3: "into" },
        line3: { part1: "great", part2: "experiences." }
      },
      description: "Create lifelong memories with experiences tailored to your sense of wonder."
    },
    {
      id: 4,
      image: 'https://ik.imagekit.io/qad3x0vr1/Effiel%20Tower.jpg?updatedAt=1748811780252',
      heading: {
        line1: { part1: "Where", part2: "adventure" },
        line2: { part1: "meets", part2: "serenity", part3: "&" },
        line3: { part1: "dreams", part2: "become reality." }
      },
      description: "Find the perfect balance between thrilling exploration and peaceful moments."
    }
  ];

  // Reset intervals
  const resetIntervals = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    if (progressInterval.current) clearInterval(progressInterval.current);
  };

  // Start auto-slide
  const startAutoSlide = () => {
    resetIntervals();

    autoSlideInterval.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 12000);
  };

  // Start progress bar
  const startProgressBar = () => {
    setProgress(0);
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          return 0;
        }
        return prev + (100 / 120); // 100% in 12s (12000ms) = 0.833% every 100ms
      });
    }, 100);
  };

  // Initialize auto-slide and progress
  useEffect(() => {
    startAutoSlide();
    startProgressBar();

    return () => resetIntervals();
  }, []);

  // Handle slide change
  useEffect(() => {
    resetIntervals();
    startAutoSlide();
    startProgressBar();
  }, [currentSlide]);

  // Navigation functions
  const goToNext = () => {
    setDirection(1);
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Handle explore button click
  const handleExploreClick = () => {
    navigate('/tours');
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
        duration: 0.4,
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
        delay: i * 0.15,
        duration: 0.5,
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

  // Background slide animation - faster and smoother
  const slideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.95,
      filter: 'blur(8px)'
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      scale: 0.95,
      filter: 'blur(8px)',
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  const taglineText = "The Best Place to Start Your Adventure";

  return (
    <div
      ref={ref}
      className="min-h-screen relative overflow-hidden"
    >
      <style jsx='true'>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap');
        .font-playfair-medium-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
        }
        
        .progress-bar {
          position: relative;
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          border-radius: 2px;
          width: 0%;
          transition: width 0.1s linear;
        }
      `}</style>

      {/* Slider Backgrounds */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${slides[currentSlide].image})`
            }}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
      </div>

      {/* Text Content - Lower z-index, non-interactive */}
      <div className="relative z-10 min-h-screen flex flex-col pointer-events-none">
        {/* Top Content - Tagline and Heading */}
        <div className="max-w-7xl mx-auto px-6 w-full lg:pt-20 md:pt-20 flex-grow flex flex-col justify-center md:justify-start">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tagline with character-by-character cloud effect */}
            <motion.div
              className="mb-8 flex justify-center"
              variants={taglineVariants}
              initial="hidden"
              animate={taglineControls}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-4 md:px-5 py-2 md:py-2 mt-20 font-normal">
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

        {/* Bottom Content Stack - Mobile: Vertical, Desktop: Horizontal */}
        <motion.div
          className="max-w-6xl mx-auto px-6 w-full pb-12 md:pb-20"
          variants={contentVariants}
          initial="hidden"
          animate={contentControls}
        >
          {/* Mobile: Flex Column Layout */}
          <div className="flex flex-col md:hidden items-center space-y-8">
            {/* Description */}
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-md text-center">
              {slides[currentSlide].description}
            </p>

            {/* Progress Indicator */}
            <div className="w-full max-w-md">
              <div className="flex flex-col items-center">
                <div className="progress-bar w-full mb-3">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-white text-sm font-medium">
                    <span className="text-amber-300">{currentSlide + 1}</span>
                    <span className="text-white/60 mx-1">/</span>
                    <span className="text-white/80">{slides.length}</span>
                  </div>
                  <div className="flex space-x-3">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-1 h-1 rounded-full transition-all pointer-events-auto ${index === currentSlide
                            ? 'bg-amber-400 scale-125'
                            : 'bg-white/40 hover:bg-white/70'
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={goToPrev}
                      className="text-white hover:text-amber-300 transition-colors pointer-events-auto"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="text-white hover:text-amber-300 transition-colors pointer-events-auto"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore Button with extra bottom space */}
            <div className="mt-4 mb-8">
              <button
                onClick={handleExploreClick}
                className="group relative bg-transparent border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 font-light tracking-wide text-sm uppercase cursor-pointer pointer-events-auto"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Desktop: Original Horizontal Layout */}
          <div className="hidden md:flex flex-row justify-between items-end">
            <p className="text-white/80 text-xl font-light leading-relaxed max-w-md text-left">
              {slides[currentSlide].description}
            </p>
            <button
              onClick={handleExploreClick}
              className="group relative bg-transparent border border-white/60 text-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 font-light tracking-wide text-sm uppercase cursor-pointer pointer-events-auto"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Elements - Lower z-index to be below navbar sidebar */}
      {/* Side Navigation Arrows - Only show on desktop to avoid conflict with mobile sidebar */}
      <div className="absolute inset-0 z-20 hidden md:flex items-center justify-between px-4 lg:px-8 pointer-events-none">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-300 group pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
        </button>

        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all duration-300 group pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300 transition-colors" />
        </button>
      </div>

      {/* Desktop-only Progress Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md px-4">
        <div className="flex flex-col items-center">
          {/* Progress bar container */}
          <div className="progress-bar w-full mb-3">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Slide navigation and counter */}
          <div className="flex items-center justify-between w-full">
            <div className="text-white text-sm font-medium">
              <span className="text-amber-300">{currentSlide + 1}</span>
              <span className="text-white/60 mx-1">/</span>
              <span className="text-white/80">{slides.length}</span>
            </div>

            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1 h-1 rounded-full transition-all ${index === currentSlide
                      ? 'bg-amber-400 scale-125'
                      : 'bg-white/40 hover:bg-white/70'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={goToPrev}
                className="text-white hover:text-amber-300 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="text-white hover:text-amber-300 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;