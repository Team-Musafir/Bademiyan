import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "./1.png",
      title: "Bookease",
      subtitle: "Uncover Secluded Shores",
      description: "Venture beyond the horizon to discover secluded shores untouched by time. Surrender to the allure of unspoiled landscapes and remote beaches. Be enchanted by the harmony of nature and tranquility. Embark on a journey of a lifetime."
    },
    {
      image: "./2.png",
      title: "Bookease",
      subtitle: "Discover Hidden Paradise",
      description: "Explore pristine beaches where crystal waters meet untouched sands. Experience the serenity of nature's most beautiful creations. Find your perfect escape in these magical destinations. Create memories that will last forever."
    },
    {
      image: "./3.png",
      title: "Bookease",
      subtitle: "Embrace Wild Beauty",
      description: "Journey to remote coastlines where nature reigns supreme. Witness breathtaking sunsets over endless horizons. Feel the freedom of untamed wilderness at your fingertips. Adventure awaits beyond every wave."
    }
  ];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Days+One&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
        
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, []);

  // Different parallax speeds
  const titleMove = -scrollY * 0.3; // Faster movement for title
  const fixedElementsMove = -scrollY * 0.2; // Slower movement for bg and panel

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="fixed top-0 left-0 w-full h-screen overflow-hidden">
      {/* Background images - slow parallax */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${fixedElementsMove}px)`,
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform'
          }}
        >
          <img
            src={slide.image}
            alt={`${slide.subtitle} landscape`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-[14rem]">
        {/* Title with faster parallax */}
        <div className="text-center text-white">
          <h1
            className="text-[9rem] font-medium tracking-wide leading-none"
            style={{ 
              fontFamily: "'Days One', sans-serif",
              transform: `translateY(${titleMove}px)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform'
            }}
          >
            {slides[currentSlide].title}
          </h1>
        </div>

        {/* Glass panel with slow parallax (same as bg) */}
        <div className="bottom-0 w-full fixed">
          <div 
            className="w-full bg-white/10 backdrop-blur-xs py-8"
            style={{
              transform: `translateY(${fixedElementsMove}px)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              willChange: 'transform'
            }}
          >
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-6xl font-medium text-[#054048] text-center mb-4"  
                  style={{ fontFamily: "'Days One', sans-serif" }}>
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-center text-md tracking-wide max-w-md mx-auto font-medium text-[#054048] mb-8">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex justify-center items-center gap-4 pointer-events-auto">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-[#054048] text-white rounded-full hover:bg-[#054048]/80 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Slide indicators */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-[#054048] scale-125' 
                          : 'bg-[#054048]/40 hover:bg-[#054048]/60'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-[#054048] text-white rounded-full hover:bg-[#054048]/80 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;