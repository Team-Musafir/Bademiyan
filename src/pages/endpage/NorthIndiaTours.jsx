import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavbarB';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import { MapPin, Clock } from 'lucide-react';

function NorthIndiaTours() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Golden Triangle Tour",
      route: "golden-triangle-tour",
      location: "Delhi, Agra, Jaipur, India",
      duration: "6 days , 5 nights",
      price: "₹25,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
    },
    {
      id: 2,
      title: "Spiritual Varanasi",
      route: "spiritual-varanasi",
      location: "Varanasi, Sarnath, India",
      duration: "4 Days & 3 Nights",
      price: "₹15,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
    },
    {
      id: 3,
      title: "Himalayan Adventure",
      route: "himalayan-adventure",
      location: "Shimla, Manali, Leh, India",
      duration: "12 Days, 11 Nights",
      price: "₹45,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
    },
    {
      id: 4,
      title: "Rajasthan Royal Tour",
      route: "rajasthan-royal-tour",
      location: "Jaipur, Udaipur, Jodhpur, India",
      duration: "8 Days, 7 Nights",
      price: "₹32,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s"
    }
  ];

  const handlePackageClick = (route) => {
    navigate(`/tours/north-india/${route}`);
  };

  return (
    <div className="min-h-1/2 bg-white">
      <Navbar />
      <section className="relative mt-[5rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fqa1zGrADMg4kKba6B2OdEZZ-ZgBYbTw3g&s')"
        }} />
        
        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            <span className="block animate-gentleFadeInLeft">Himachal</span>
            <span className="block animate-softPulse mx-2 md:mx-4"></span>
            <span className="block italic font-serif animate-gentleFadeInRight">Pradesh</span>
          </h1>
        </div>
      </section>

      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              onClick={() => handlePackageClick(pkg.route)}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative h-110 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {pkg.title}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{pkg.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-2xl font-bold">{pkg.price}</span>
                    <span className="text-sm ml-1">per person</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Contact />
      <Footer />

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
  );
}

export default NorthIndiaTours;