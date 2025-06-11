/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/NavbarB';
import Reviews from '../../components/Review';
import Footer from '../../components/Footer';
import tourData from '../../data/IncredibleOdishaData.json';

const defaultDestinationData = {
  title: 'Tour Package',
  location: 'Location not specified',
  duration: 'Duration not specified',
  description: 'No description available',
  price: 0,
  quota: 0,
  schedule: 'Schedule not specified',
  longDescription: 'No detailed description available',
  heroImage: '',
  includes: [],
  excludes: [],
  itineraryDays: [],
  galleryImages: [
    { url: '', alt: 'Image not available' },
    { url: '', alt: 'Image not available' },
    { url: '', alt: 'Image not available' }
  ]
};

export default function DestinationPage() {
  const { packageRoute } = useParams();
  const [destinationData, setDestinationData] = useState(defaultDestinationData);
  const [expandedDay, setExpandedDay] = useState(0);

  useEffect(() => {
    if (tourData[packageRoute]) {
      setDestinationData(tourData[packageRoute]);
    } else {
      console.warn(`Destination "${packageRoute}" not found in tourData`);
      setDestinationData(defaultDestinationData);
    }
  }, [packageRoute]);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const locationFirstPart = destinationData.location?.split(',')[0]?.toLowerCase() || 'tours';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto mt-12 sm:mt-8 md:mt-12 px-4 sm:px-6 py-8 sm:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-6 sm:mb-8 leading-tight sm:leading-normal">
              {destinationData.title}
            </h1>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="flex items-center space-x-2 text-gray-600" variants={fadeInUp}>
              <MapPin className="w-4 h-4" />
              <span className="text-lg sm:text-xl md:text-2xl">{destinationData.location}</span>
            </motion.div>

            <motion.div className="flex items-center space-x-2 text-gray-600" variants={fadeInUp}>
              <Clock className="w-4 h-4" />
              <span className="text-base sm:text-lg md:text-xl">{destinationData.duration}</span>
            </motion.div>

            <motion.p className="text-gray-600 text-base sm:text-lg leading-relaxed" variants={fadeInUp}>
              {destinationData.description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {destinationData.heroImage && (
        <motion.div
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <div className="absolute inset-0 z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
            <img
              src={destinationData.heroImage}
              alt={`${destinationData.title} tour`}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80';
                e.target.alt = 'Tour image placeholder';
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white z-20"></div>
        </motion.div>
      )}

      <motion.div
        className="mb-8 pt-8 sm:pt-12 md:pt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.div className="flex justify-between items-center mb-4" variants={fadeInUp}>
          <span className="text-gray-600 text-base sm:text-lg md:text-xl">Price</span>
          <span className="text-lg sm:text-xl font-semibold">₹{destinationData.price.toLocaleString()}/adult</span>
        </motion.div>
        
        
      </motion.div>

      <div className="border-1 border-gray-200 my-6 sm:my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"></div>

      <motion.div
        className="mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          {destinationData.longDescription}
        </p>
      </motion.div>

      <div className="border-1 border-gray-200 my-6 sm:my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"></div>

      {destinationData.includes?.length > 0 && (
        <>
          <motion.div
            className="mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4" variants={fadeInUp}>
              Includes:
            </motion.h3>
            <div className="space-y-3">
              {destinationData.includes.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="border-1 border-gray-200 my-6 sm:my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"></div>
        </>
      )}

      {destinationData.excludes?.length > 0 && (
        <>
          <motion.div
            className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-8'
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4" variants={fadeInUp}>
              Excludes:
            </motion.h3>
            <div className="space-y-3">
              {destinationData.excludes.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gray-900 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="border-1 border-gray-200 my-6 sm:my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"></div>
        </>
      )}

      {destinationData.itineraryDays?.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-18 lg:mb-18 gap-4">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-normal text-gray-800"
            >
              Travel <em className="italic">Plans</em>
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-lg md:text-lg text-gray-600 max-w-xl leading-relaxed text-right"
            >
              Your detailed day-by-day itinerary for the perfect {locationFirstPart} experience
            </motion.p>
          </div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {destinationData.itineraryDays.map((day, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300 border-2 ${expandedDay === index ? 'border-black' : 'border-black hover:border-gray-600'}`}
              >
                <div
                  className={`relative flex items-center p-5 cursor-pointer transition-colors ${expandedDay === index ? 'bg-gray-50' : 'bg-white'}`}
                  onClick={() => toggleDay(index)}
                >
                  <div className="relative z-10 flex items-center w-full">
                    <span className="text-lg sm:text-xl font-bold text-black mr-8">
                      DAY {day.day?.toString().padStart(2, '0') || (index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="flex-grow flex justify-between items-center">
                      <h3 className="text-base sm:text-lg font-medium text-black ml-8">
                        {day.title || `Day ${index + 1} Activities`}
                      </h3>
                      <ChevronDown
                        className={`transition-transform duration-300 ${expandedDay === index ? 'rotate-180 text-black' : 'text-gray-500'}`}
                        size={24}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${expandedDay === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full mb-2 md:w-4/5 pl-[8rem]">
                      <ul className="space-y-3">
                        {(day.activities || []).map((activity, i) => (
                          <li key={i} className="flex items-start py-1">
                            <div className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-900 flex items-center justify-center mt-1 mr-3"></div>
                            <span className="text-xs text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {day.image && (
                      <div className="w-full md:w-1/5 p-5">
                        <div className="h-full w-full rounded-lg overflow-hidden">
                          <img
                            src={day.image}
                            alt={day.title || `Day ${day.day} activities`}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      <Reviews />

      {/* Gallery Section */}
      {destinationData.galleryImages?.length >= 3 && (
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Main large image - same height on mobile and desktop */}
            <div className="col-span-1 md:col-span-2 rounded-3xl overflow-hidden h-64 md:h-96">
              <img
                src={destinationData.galleryImages[0].url}
                alt={destinationData.galleryImages[0].alt}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Two smaller images - same height as first image on mobile, split on desktop */}
            <div className="grid grid-cols-1 grid-rows-2 gap-5 h-64 md:h-96">
              {/* First small image - full width on mobile, half height on desktop */}
              <div className="rounded-3xl overflow-hidden h-full">
                <img
                  src={destinationData.galleryImages[1].url}
                  alt={destinationData.galleryImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Second small image - full width on mobile, half height on desktop */}
              <div className="rounded-3xl overflow-hidden h-full">
                <img
                  src={destinationData.galleryImages[2].url}
                  alt={destinationData.galleryImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}