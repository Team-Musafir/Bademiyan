/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5
    }
  }
};

const subtitleVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.3
    }
  }
};

const ScrollGallery = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Sample images
  const images = Array(20).fill(null).map((_, i) => ({
    id: i + 1,
    src: `./img${i}.jpg`,
    row: Math.floor(i / 5),
    col: i % 5
  }));

  // Physics-based scattering - more spread out
  const getScatteredPosition = (index) => {
    const angle = (index / images.length) * Math.PI * 2;
    const radius = 250 + Math.random() * 150;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      rotate: Math.random() * 60 - 30,
      scale: 0.8 + Math.random() * 0.4,
    };
  };

  // Grid positions
  const getGridPosition = (img) => {
    return {
      x: (img.col - 2) * 220 + (img.row % 2 ? 110 : 0),
      y: img.row * 220 - 330,
      rotate: 0,
      scale: 1,
    };
  };

  // Scroll progress animation - start fully visible
  const getImageStyle = (img, index) => {
    const scattered = getScatteredPosition(index);
    const grid = getGridPosition(img);
    
    return {
      x: useTransform(scrollYProgress, [0, 1], [scattered.x, grid.x]),
      y: useTransform(scrollYProgress, [0, 1], [scattered.y, grid.y]),
      rotate: useTransform(scrollYProgress, [0, 1], [scattered.rotate, grid.rotate]),
      scale: useTransform(scrollYProgress, [0, 1], [scattered.scale, grid.scale]),
      // Start fully visible (opacity 1) instead of fading in
      opacity: useTransform(scrollYProgress, [0, 1], [1, 1]), 
    };
  };

  return (
    <div className="w-full max-h-[120vh] bg-gray-50">
      {/* Hero Section */}
      <section className="relative mt-[5rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <motion.div 
          className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={heroVariants}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline"
            variants={heroVariants}
          >
            <motion.span 
              className="block italic font-serif mx-2 md:mx-4"
              variants={titleVariants}
            >
              Blogs
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            variants={subtitleVariants}
          >
            Discover stories, travel tips, and hidden gems to inspire your next journey.
          </motion.p>
        </motion.div>
      </section>
      
      {/* Scroll Trigger Area */}
      <div ref={ref} className="h-20 w-full" />

      {/* Gallery Container - Now with initial scattered state visible */}
      <div 
        ref={containerRef}
        className="relative w-full h-[200vh] py-20"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl mx-auto">
            {images.map((img, index) => {
              const style = getImageStyle(img, index);
              
              return (
                <motion.div
                  key={img.id}
                  className="absolute w-[200px] h-[200px] origin-center"
                  style={style}
                  initial={{ opacity: 1 }} // Ensure initial visibility
                  whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Gallery item ${img.id}`}
                    className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollGallery;