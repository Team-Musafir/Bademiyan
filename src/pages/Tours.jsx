import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavbarB';
import { MapPin, Clock, ArrowRight, Flame } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Tours() {
  const packages = [
    {
      id: 1,
      title: "Incredible Odisha",
      route: "incredible-odisha",
      location: "Konark Sun Temple, India",
      duration: "7 Days, 6 Nights",
      price: "₹9,000",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-sincegameon-26329171.jpg?updatedAt=1748814290793",
      tags: ["Heritage", "Cultural"],
      badge: "Popular"
    },
    {
      id: 2,
      title: "North-Bengal",
      route: "north-bengal-sikkim",
      location: "Darjeeling, India",
      duration: "7 Days, 6 Nights",
      price: "₹15,000",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/Northeast.jpg?updatedAt=1748812451591",
      tags: ["Hills", "Tea Gardens"],
      badge: "Featured"
    },
    {
      id: 3,
      title: "North India Tours",
      route: "north-india",
      location: "Leh, India",
      duration: "6 Days, 5 Nights",
      price: "₹13,000",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg",
      tags: ["Adventure", "Himalayas"],
      badge: "Popular"
    },
    {
      id: 4,
      title: "Western India Tours",
      route: "western-india",
      location: "Hawa Mahal, India",
      duration: "7 Days, 6 Nights",
      price: "₹20,000",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/hawa-mahal-6688170_1920.jpg",
      tags: ["Desert", "Palaces"],
      badge: "Featured"
    },
    {
      id: 5,
      title: "South India Tours",
      route: "south-india",
      location: "Madurai, India",
      duration: "5 Days, 4 Nights",
      price: "₹18,000",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-esther-234072-5690494.jpg",
      tags: ["Temples", "Beaches"],
      badge: "Popular"
    },
    {
      id: 6,
      title: "Island of India",
      route: "island-of-india",
      location: "Daman and Diu, India",
      duration: "7 Days, 6 Nights",
      price: "₹59,999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nirmal-rajendharkumar-1577471-3030016.jpg",
      tags: ["Beaches", "Relaxation"],
      badge: null
    },
    {
      id: 7,
      title: "International Tours",
      route: "international-tours",
      location: "Morteratsch, Switzerland",
      duration: "7 Days, 6 Nights",
      price: "₹1,19,999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-christopher-politano-978995-32360919.jpg",
      tags: ["Europe", "Mountains"],
      badge: "Popular"
    },
    {
      id: 8,
      title: "Pilgrimage Tours",
      route: "pilgrimage-tours",
      location: "Varanasi, India",
      duration: "7 Days, 6 Nights",
      price: "₹34,999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-artosuraj-28819289.jpg",
      tags: ["Spiritual", "Holy Sites"],
      badge: null
    },
    {
      id: 9,
      title: "North-East India Tours",
      route: "north-east-india-tours",
      location: "Shillong, India",
      duration: "7 Days, 6 Nights",
      price: "₹54,999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nans1419-20519339.jpg",
      tags: ["Waterfalls", "Tribal Culture"],
      badge: "Featured"
    },
    {
      id: 10,
      title: "Heritage Tours",
      route: "heritage-tours",
      location: "Hampi, India",
      duration: "7 Days, 6 Nights",
      price: "₹44,999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-usaidphotos-14337670.jpg",
      tags: ["UNESCO", "History"],
      badge: null
    },
    {
      id: 11,
      title: "Adventure Tours",
      route: "adventure-tours",
      location: "Rishikesh, India",
      duration: "7 Days, 6 Nights",
      price: "₹39,999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/mountain-7565293_1920.jpg",
      tags: ["Rafting", "Trekking"],
      badge: "Popular"
    }
  ];

  return (
    <div className="min-h-1/2 bg-white">
      <Navbar />
      <section className="relative mt-[6rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`
          }}
        />

        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            <span className="block animate-gentleFadeInLeft">Tours</span>
            <span className="block animate-softPulse mx-2 md:mx-4">&</span>
            <span className="block italic font-serif animate-gentleFadeInRight">Packages</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn opacity-0 animation-fill-mode-forwards animation-delay-1000">
            Discover handcrafted journeys that blend authentic experiences with comfort
          </p>
        </div>
      </section>

      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 mb-2 text-center">Featured Tours</h2>
          <p className="text-amber-800 mb-12 text-center max-w-2xl mx-auto">
            Carefully curated experiences that showcase the best of each destination
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link
                to={`/tours/${pkg.route}`}
                key={pkg.id}
                className="block group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-amber-100 hover:border-amber-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {pkg.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-amber-100/90 text-xs font-medium rounded-full text-amber-900 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Badge */}
                    {pkg.badge && (
                      <div className={`absolute top-4 right-4 flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                        pkg.badge === "Popular" 
                          ? "bg-amber-500 text-white" 
                          : "bg-white text-amber-800"
                      }`}>
                        {pkg.badge === "Popular" && (
                          <Flame className="w-3 h-3 mr-1 fill-current" />
                        )}
                        {pkg.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-amber-600 transition-colors">
                        {pkg.title}
                      </h3>
                      
                      <div className="flex items-center mb-2 text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{pkg.location}</span>
                      </div>

                      <div className="flex items-center mb-4 text-gray-600">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-amber-100">
                      <div>
                        <span className="text-xs text-amber-600">Starting from</span>
                        <div className="text-xl font-bold text-amber-600">{pkg.price}</div>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />

      <style jsx='true'>{`
        @keyframes gentleFadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gentleFadeInRight {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes softPulse {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-gentleFadeInLeft {
          animation: gentleFadeInLeft 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-softPulse {
          animation: softPulse 1s ease-in-out forwards;
          animation-delay: 0.4s;
        }
        
        .animate-gentleFadeInRight {
          animation: gentleFadeInRight 0.8s ease-out forwards;
          animation-delay: 0.6s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default Tours;