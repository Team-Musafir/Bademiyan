/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Seamless from beginning to end.Help at each step.Personalised itinerary ,thank you for including Sethan in our Manali trip.Above all really great professionalism.Looking forward to travel more with Bademiyan tours 🙌🏻🙌🏻🔥🔥",
      name: "Pinaki Satapathy",
      country: "India",
      avatar: "https://ik.imagekit.io/51dx1i7qo/Pinaki%20Satapathy.webp"
    },
    {
      id: 2,
      text: "Excellent transport and accommodation at quite reasonable cost.. Personalised attention for any alterations in plans.One must enjoy Leh-Ladakh with this operators.",
      name: "Pradipta Jen",
      country: "India",
      avatar: "https://ik.imagekit.io/51dx1i7qo/Pradipta%20Jen.webp"
    },
    {
      id: 3,
      text: "Simply superb. Suraj was in touch with me for the entire tour and assisted us with all the help that He could do. The best thing about Bademiya is there was nothing hidden. Suraj explained everything properly. Strongly recommend This travel planner to everyone.",
      name: "Sarada Prasanna",
      country: "India",
      avatar: "https://ik.imagekit.io/51dx1i7qo/unnamed.webp"
    },
    {
      id: 4,
      text: "BGood experience with the travel plans, hotel bookings and how smoothly was the trip carried out. Thank you Suraj!",
      name: "Sthitipragyan Sahoo",
      country: "India",
      avatar: "https://ik.imagekit.io/51dx1i7qo/unnamed%20(4).webp"
    },
    {
      id: 5,
      text: "Best tour agency in bhubaneswar. I had good experience with them.",
      name: "Belal Khan",
      country: "India",
      avatar: "https://ik.imagekit.io/51dx1i7qo/unnamed%20(2).webp"
    },
    {
      id: 6,
      text: "Had an absolutely amazing trip with lots of memories through your service ❤️ Grateful for your kind support and service as well Mr. Suraj...Hope to have a next trip with you soon..",
      name: "Debadeepa Rath",
      country: "India",
      avatar: "https://ik.imagekit.io/51dx1i7qo/unnamed%20(3).webp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [autoSlide, setAutoSlide] = useState(true);
  const intervalRef = useRef(null);

  // Function to start auto sliding
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= reviews.length - cardsPerView) return 0;
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
      if (prevIndex >= reviews.length - cardsPerView) return 0;
      return prevIndex + 1;
    });
    if (autoSlide) startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) return reviews.length - cardsPerView;
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
        setCardsPerView(3);
      }
      
      // Adjust current index if it's out of bounds
      if (currentIndex > reviews.length - cardsPerView) {
        setCurrentIndex(Math.max(0, reviews.length - cardsPerView));
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
  }, [cardsPerView, currentIndex, reviews.length, autoSlide]);

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

  return (
    <section id="reviews" className="bg-white py-18 px-6">
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
              Real <em className="italic font-serif text-slate-700">stories</em>
              <br />
              from travelers
            </h1>
          </div>
        </motion.div>

        {/* Reviews Slider */}
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
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex-1">
                      <p className="text-slate-600 text-lg leading-relaxed mb-6 font-normal">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-100"
                      />
                      <div>
                        <h4 className="font-medium text-slate-900 text-lg">
                          {review.name}
                        </h4>
                        <p className="text-slate-500 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {review.country}
                        </p>
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
          {Array.from({ length: Math.ceil(reviews.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / cardsPerView) 
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

export default Reviews;