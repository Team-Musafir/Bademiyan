import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavbarB';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import { MapPin, Clock } from 'lucide-react';

function InternationalTours() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: "Thailand",
      route: "thailand",
      location: "Bangkok, Phuket, Thailand",
      duration: "7 Days, 6 Nights",
      price: "$1299",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-photo-472309.jpeg"
    },
    {
      id: 2,
      title: "Vietnam",
      route: "vietnam",
      location: "Hanoi, Ho Chi Minh City, Vietnam",
      duration: "8 Days, 7 Nights",
      price: "$1499",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-foodoncam-58597.jpg"
    },
    {
      id: 3,
      title: "Sri Lanka",
      route: "sri-lanka",
      location: "Colombo, Kandy, Sri Lanka",
      duration: "6 Days, 5 Nights",
      price: "$1199",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/free-photo-of-scenic-view-of-galle-fort-overlooking-ocean.jpeg"
    },
    {
      id: 4,
      title: "Indonesia",
      route: "indonesia",
      location: "Bali, Jakarta, Indonesia",
      duration: "7 Days, 6 Nights",
      price: "$1399",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-photo-1643130.jpeg"
    },
    {
      id: 5,
      title: "Mauritius",
      route: "mauritius",
      location: "Mauritius",
      duration: "6 Days, 5 Nights",
      price: "$1699",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-photo-1189479.jpeg"
    },
    {
      id: 6,
      title: "Nepal",
      route: "nepal",
      location: "Kathmandu, Pokhara, Nepal",
      duration: "5 Days, 4 Nights",
      price: "$899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-weddingvibes-2104882.jpg"
    },
    {
      id: 7,
      title: "Bhutan",
      route: "bhutan",
      location: "Thimphu, Paro, Bhutan",
      duration: "6 Days, 5 Nights",
      price: "$1599",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-peng-lim-6377-910368.jpg"
    },
    {
      id: 8,
      title: "Africa",
      route: "africa",
      location: "Kenya, South Africa, Tanzania",
      duration: "10 Days, 9 Nights",
      price: "$2899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-pixabay-59989.jpg"
    },
    {
      id: 9,
      title: "Azerbaijan",
      route: "azerbaijan",
      location: "Baku, Azerbaijan",
      duration: "5 Days, 4 Nights",
      price: "$1799",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-photo-8412701.jpeg"
    },
    {
      id: 10,
      title: "Dubai & UAE",
      route: "dubai-uae",
      location: "Dubai, Abu Dhabi, UAE",
      duration: "6 Days, 5 Nights",
      price: "$1899",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-gerlynne-dela-cerna-441803712-32364086.jpg"
    },
    {
      id: 11,
      title: "Australia and New Zealand",
      route: "australia-new-zealand",
      location: "Sydney, Auckland",
      duration: "12 Days, 11 Nights",
      price: "$3499",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-benprater-32388292.jpg"
    },
    {
      id: 12,
      title: "Japan",
      route: "japan",
      location: "Tokyo, Kyoto, Japan",
      duration: "9 Days, 8 Nights",
      price: "$2599",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-belle-co-99483-402028.jpg"
    },
    {
      id: 13,
      title: "China",
      route: "china",
      location: "Beijing, Shanghai, China",
      duration: "8 Days, 7 Nights",
      price: "$1999",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-dimitris-s12-639310-1441932.jpg"
    }
  ];

  const handlePackageClick = (route) => {
    navigate(`/tours/international-tours/${route}`);
  };

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
            <span className="block animate-gentleFadeInLeft">International</span>
            <span className="block animate-softPulse mx-2 md:mx-4"></span>
            <span className="block italic font-serif animate-gentleFadeInRight">Tours</span>
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

export default InternationalTours;