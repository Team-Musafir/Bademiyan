import React from 'react'
import Navbar from '../components/NavbarB'
import { MapPin, Clock } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Tours() {
  const packages = [
    {
      id: 1,
      title: "Incredible Odisha",
      location: "Konark Sun Temple,India",
      duration: "7 Days, 6 Nights",
      price: "$999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-sincegameon-26329171.jpg?updatedAt=1748814290793"
    },
    {
      id: 2,
      title: "North-Bengal & Sikkim",
      location: "Darjeling,India",
      duration: "7 Days, 6 Nights",
      price: "$1799",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/Northeast.jpg?updatedAt=1748812451591"
    },
    {
      id: 3,
      title: "North India Tours",
      location: "Leh,India",
      duration: "6 Days, 5 Nights",
      price: "$1199",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
    },
    {
      id: 4,
      title: "Western India Tours",
      location: "Hawa Mahal, India",
      duration: "7 Days, 6 Nights",
      price: "$899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/hawa-mahal-6688170_1920.jpg"
    },
    {
      id: 5,
      title: "South India Tours",
      location: "Madurai,India",
      duration: "5 Days, 4 Nights",
      price: "$899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-esther-234072-5690494.jpg"
    },
    {
      id: 6,
      title: "Island of India",
      location: "Daman and Diu,India",
      duration: "7 Days, 6 Nights",
      price: "$1899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nirmal-rajendharkumar-1577471-3030016.jpg"
    },
    {
      id: 7,
      title: "International Tours",
      location: "Morteratsch,Switzerland",
      duration: "7 Days, 6 Nights",
      price: "$899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-christopher-politano-978995-32360919.jpg"
    },
    // {
    //   id: 8,
    //   title: "Mountain Odyssey Adventure",
    //   location: "Kathmandu, Nepal",
    //   duration: "5 Days, 4 Nights",
    //   price: "$899",
    //   image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop"
    // },
    // {
    //   id: 9,
    //   title: "Wildlife Safari Expedition",
    //   location: "Nairobi, Kenya",
    //   duration: "7 Days, 6 Nights",
    //   price: "$1899",
    //   image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop"
    // }

  ];

  return (
    <div className="min-h-1/2 bg-white">
      <Navbar />
      <section className="relative mt-[5rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
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
        </div>
      </section>

      {/* Packages Section */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-110 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {pkg.title}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{pkg.location}</span>
                  </div>
                  
                  {/* Duration */}
                  <div className="flex items-center mb-4">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                  
                  {/* Price */}
                  <div className="text-right">
                    <span className="text-2xl font-bold">{pkg.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact/>
      <Footer/>

      <style jsx global>{`
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
      `}</style>
    </div>
  )
}

export default Tours