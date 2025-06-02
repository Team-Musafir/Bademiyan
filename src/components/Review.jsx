/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      text: "My travel dreams finally came true, thanks to them. I explored places I never thought I would see, and everything was seamless from start to finish during the trip.",
      name: "Priya Marcella",
      country: "India",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 2,
      text: "They provided an amazing adventure that I'll never forget. The accommodations were top-notch, and the itinerary was a perfect trip of relaxation and excitement.",
      name: "Jose Miguel",
      country: "Spain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 3,
      text: "Their diverse range of destinations and unwavering commitment to customer satisfaction make them my go-to choice for future adventures.",
      name: "Angellina Diana",
      country: "Italy",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 4,
      text: "Xplore's exceptional customer service and commitment to travel excellence go beyond what I could have ever recommended.",
      name: "Michael Chen",
      country: "USA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 5,
      text: "The attention to detail in every aspect of our journey was remarkable. From the moment we landed to our departure, everything was perfectly arranged.",
      name: "Sophia Rodriguez",
      country: "Mexico",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face&auto=format"
    },
    {
      id: 6,
      text: "Our family vacation was absolutely magical. The kids still talk about the wildlife safari and the amazing guides who made every day an adventure.",
      name: "Thomas Anderson",
      country: "Canada",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face&auto=format"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === reviews.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? reviews.length - cardsPerView : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
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
      
      if (currentIndex > reviews.length - cardsPerView) {
        setCurrentIndex(Math.max(0, reviews.length - cardsPerView));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerView, currentIndex, reviews.length]);

  return (
    <div className="bg-white py-16 px-6 font-['Poppins']">
      <div className="w-full px-[10rem] mx-auto">
        {/* Animated Header */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.16, 0.77, 0.47, 0.97] 
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-wider">
              Real <span className="italic">stories</span>
              <br />
              from travelers
            </h2>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
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
                  <div className="bg-white border-2 border-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[320px] flex flex-col">
                    <div className="flex-1">
                      <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                        "{review.text}"
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-800"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 text-lg">
                          {review.name}
                        </h4>
                        <p className="text-gray-600 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {review.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(reviews.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * cardsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / cardsPerView) 
                  ? 'bg-gray-800 w-6' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;