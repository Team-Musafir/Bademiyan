/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Tropical Paradise Recreation",
      duration: "7 days, 6 nights",
      price: "$999",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-amber-600/80 to-orange-800/80"
    },
    {
      id: 2,
      title: "Cruise Getaway Expedition",
      duration: "7 days, 6 nights",
      price: "$1799",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-slate-600/80 to-blue-800/80"
    },
    {
      id: 3,
      title: "Cultural Immersion in Morocco",
      duration: "6 Days, 5 Nights",
      price: "$1199",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-red-600/80 to-amber-700/80"
    },
    {
      id: 4,
      title: "River Expedition in Thuringia",
      duration: "7 Days, 6 Nights",
      price: "$899",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-green-700/80 to-emerald-800/80"
    }
  ];

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
    <section id="packages" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          variants={item}
          className="flex flex-col md:flex-row justify-between items-start mt-12 mb-12 gap-8"
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
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
              <button className="text-amber-600 font-medium transition-colors hover:border-slate-500 pb-1 cursor-pointer">
                See All Packages
              </button>
            </div>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.id}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                  <h3 className="text-xl font-semibold mb-2 leading-tight">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-90">
                      {pkg.duration}
                    </span>
                    <span className="text-2xl font-bold">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="border-white border-2 text-white px-6 py-3 rounded-full font-normal transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Explore Package
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TravelPackages;