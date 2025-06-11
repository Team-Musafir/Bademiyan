/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TravelPackages = () => {
  const navigate = useNavigate();
  // Create 8 packages with unique data
  const packages = [
  {
    id: 1,
    title: "Odisha",
    duration: "7 days, 6 nights",
    price: "$999",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-sincegameon-26329171.jpg?updatedAt=1748814290793",
    link: "/tours/incredible-odisha"
  },
  {
    id: 2,
    title: "Bengal",
    duration: "7 days, 6 nights",
    price: "$1799",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/victoria-memorial-2394784_1920.jpg",
    link: "/tours/north-bengal-sikkim"
  },
  {
    id: 3,
    title: "North East India",
    duration: "6 Days, 5 Nights",
    price: "$1199",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nans1419-20519339.jpg",
    link: "/tours/north-east-india-tours"
  },
  {
    id: 4,
    title: "Explore India",
    duration: "7 Days, 6 Nights",
    price: "$899",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/india.jpg?updatedAt=1748812485940",
    link: "/tours"
  },
  {
    id: 5,
    title: "Pilgrimage Tours",
    duration: "5 Days, 4 Nights",
    price: "$1299",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-artosuraj-28819289.jpg",
    link: "/tours/pilgrimage-tours"
  },
  {
    id: 6,
    title: "Best of the World",
    duration: "4 Days, 3 Nights",
    price: "$799",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/international.jpg?updatedAt=1748812348350",
    link: "/tours/international-tours"
  },
  {
    id: 7,
    title: "Heritage Tours",
    duration: "8 Days, 7 Nights",
    price: "$1599",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-usaidphotos-14337670.jpg",
    link: "/tours/heritage-tours"
  },
  {
    id: 8,
    title: "Adventure Tours",
    duration: "6 Days, 5 Nights",
    price: "$1899",
    image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/mountain-7565293_1920.jpg",
    gradient: "from-green-700/80 to-emerald-800/80",
    link: "/tours/adventure-tours"
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [autoSlide, setAutoSlide] = useState(true);
  const intervalRef = useRef(null);

  // Function to start auto sliding
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= packages.length - cardsPerView) return 0;
        return prevIndex + 1;
      });
    }, 5000); // Slide every 5 seconds
  };

  // Function to stop auto sliding
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentIndex(prevIndex => {
      if (prevIndex >= packages.length - cardsPerView) return 0;
      return prevIndex + 1;
    });
    if (autoSlide) startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) return packages.length - cardsPerView;
      return prevIndex - 1;
    });
    if (autoSlide) startAutoSlide();
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrentIndex(index * cardsPerView);
    if (autoSlide) startAutoSlide();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }

      // Adjust current index if it's out of bounds
      if (currentIndex > packages.length - cardsPerView) {
        setCurrentIndex(Math.max(0, packages.length - cardsPerView));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Start auto slide
    if (autoSlide) startAutoSlide();

    return () => {
      window.removeEventListener('resize', handleResize);
      stopAutoSlide();
    };
  }, [cardsPerView, currentIndex, packages.length, autoSlide]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const nav = useNavigate()

  function handlePackage(link){
    nav(link)
  }

  return (
    <section id="packages" className="bg-white py-24 px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8"
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight">
              Must <em className="italic font-serif text-slate-700">experience</em>
              <br />
              packages
            </h1>
          </div>

          <div className="flex items-start gap-8 w-full md:w-auto">
            <div className="text-right max-w-sm w-full">
              <p className="text-slate-600 md:text-lg lg:text-lg sm:text-base text-base leading-relaxed mb-6">
                Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures.
              </p>
              <button
                onClick={() => navigate('/tours')}
                className="text-amber-600 font-medium transition-colors hover:text-amber-700 pb-1 cursor-pointer border-b border-amber-600 hover:border-amber-700"
              >
                See All Packages
              </button>
            </div>
          </div>
        </motion.div>

        {/* Packages Slider */}
        <motion.div
          variants={item}
          className="relative"
          onMouseEnter={() => {
            setAutoSlide(false);
            stopAutoSlide();
          }}
          onMouseLeave={() => {
            setAutoSlide(true);
            startAutoSlide();
          }}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-black rounded-full p-3 shadow-sm hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-black rounded-full p-3 shadow-sm hover:bg-gray-800 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500"
                  >
                    {/* Image Container */}
                    <div className="relative h-100 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 transition-opacity duration-300 group-hover:opacity-90`} />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                        <h3 className="text-2xl font-semibold mb-2 leading-tight">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-base font-normal opacity-90">
                            {pkg.duration}
                          </span>
                          <span className="text-2xl font-bold">
                            {pkg.price}
                          </span>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="border-white border-2 text-white px-6 py-3 rounded-full font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" onClick={() => handlePackage(pkg.link)}>
                          Explore Package
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Minimalist Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.ceil(packages.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === Math.floor(currentIndex / cardsPerView)
                  ? 'bg-black w-6'
                  : 'bg-gray-300 w-3'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TravelPackages;