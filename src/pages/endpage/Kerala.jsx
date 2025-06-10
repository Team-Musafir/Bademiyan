import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavbarB';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import { MapPin, Clock } from 'lucide-react';

function Kerala() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "God's Own Itinerary - Kerala",
      route: "gods-own-itinerary",
      location: "Kochi, Munnar, Alleppey, Kerala, India",
      duration: "6 Days, 5 Nights",
      price: "₹18,000",
      image: "https://ik.imagekit.io/u2yelrvui/pexels-k-s-aravinda-kashyap-86628820-28961752.jpg"
    },
    {
      id: 2,
      title: "The Soul of South India - Kerala",
      route: "soul-of-south",
      location: "Munnar, Thekkady, Alleppey, Kochi, Kerala, India",
      duration: "7 Days, 6 Nights",
      price: "₹21,000",
      image: "https://ik.imagekit.io/u2yelrvui/pexels-rajeshx8-30741899.jpg"
    },
    {
      id: 3,
      title: "Enchanted Kerala",
      route: "enchanted-kerala",
      location: "Munnar, Thekkady, Alleppey, Trivandrum, Kerala, India",
      duration: "8 Days, 7 Nights",
      price: "₹27,000",
      image: "https://ik.imagekit.io/u2yelrvui/pexels-preyansh-patel-2147629447-32429711.jpg"
    },
    {
      id: 4,
      title: "Kerala Escapade - Sea, Hills & Backwaters",
      route: "kerala-escapade",
      location: "Munnar, Thekkady, Alleppey, Trivandrum, Kerala, India",
      duration: "9 Days, 8 Nights",
      price: "₹30,000",
      image: "https://ik.imagekit.io/u2yelrvui/pexels-rajeshx8-980180.jpg"
    },
    {
      id: 5,
      title: "From Backwaters to the Southern Shores",
      route: "kerala-southern-shores",
      location: "Munnar, Thekkady, Alleppey, Trivandrum, Kanyakumari",
      duration: "9 Days, 8 Nights",
      price: "₹32,000",
      image: "https://ik.imagekit.io/u2yelrvui/pexels-optically-challenged-3714923.jpg"
    }
  ];

  const handlePackageClick = (route) => {
    navigate(`/tours/south-india/kerala/${route}`);
  };

  return (
    <div className="min-h-1/2 bg-white">
      <Navbar />
      <section className="relative mt-[5rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`
        }} />

        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            <span className="block animate-gentleFadeInLeft">God's</span>
            <span className="block animate-softPulse mx-2 md:mx-4">Own</span>
            <span className="block italic font-serif animate-gentleFadeInRight">Kerala</span>
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

export default Kerala;