import React, { useEffect, useRef } from 'react';
import Navbar from '../components/NavbarB';
import Highlights from '../components/Highlights';
import Journey from '../components/JourneyAbout';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function TravelCompanyPage() {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Animation on page load
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.remove('opacity-0');
        contentRef.current.classList.add('animate-fadeInUp');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-1/2 bg-white">
      <Navbar />
      <section className="relative mt-[5rem] min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`
          }}
        />

        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center">
            <span className="block animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>About</span>
            <span className="block italic font-serif animate-fadeInRight ml-4" style={{ animationDelay: '0.4s' }}>Company</span>
          </h1>
        </div>
      </section>

      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-28 items-center max-w-7xl mx-auto">

            {/* Images Column */}
            <div className="space-y-8">
              {/* River Video */}
              <div
                className="rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 animate-fadeInLeft"
                style={{ animationDelay: '0.2s' }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-60 object-cover bg-gray-200"
                  poster="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/11480620-uhd_3840_2160_30fps.mp4?tr=orig"
                >
                  <source
                    src="http://ik.imagekit.io/qad3x0vr1/Explore%20tiles/13404039_3840_2160_60fps.mp4?tr=orig"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* European Architecture Image */}
              <div
                className="rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 animate-fadeInLeft"
                style={{ animationDelay: '0.4s' }}
              >
                <div
                  className="h-90 bg-cover bg-center bg-gray-200"
                  style={{
                    backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/mountains-8404275_1920.jpg')`
                  }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div
              ref={contentRef}
              className="space-y-12"

            >
              <div className="animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-6">
                  Crafting <span className="italic font-serif text-gray-700">travel</span>
                </h2>
                <h3 className="text-5xl md:text-6xl font-normal text-gray-900 mb-12 animate-fadeInRight"
                  style={{ animationDelay: '0.5s' }}>
                  experiences
                </h3>
              </div>

              <div className="space-y-4">
                <p
                  className="text-lg md:text-xl leading-relaxed text-gray-600 font-normal animate-fadeInRight"
                  style={{ animationDelay: '0.7s' }}
                >
                  We are passionate about crafting extraordinary travel experiences that leave a lasting impact.
                  With years of expertise, we have honed the art of live curating unique journeys that blend
                  adventure, culture, and sustainability.
                </p>

                <p
                  className="text-lg md:text-xl leading-relaxed text-gray-600 font-normal animate-fadeInRight"
                  style={{ animationDelay: '0.9s' }}
                >
                  Our mission is to connect travelers with the world's wonders while preserving its beauty
                  for generations to come.
                </p>
              </div>

              <div className="pt-8 animate-fadeInRight" style={{ animationDelay: '1.1s' }}>
                <button
                  onClick={() => navigate('/tours')}
                  className="group bg-black text-white px-8 py-2 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Explore Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Highlights />
      <Journey />
      <Team />
      <Contact />
      <Footer />

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-50px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% { 
            opacity: 0; 
            transform: translateX(50px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}