/* eslint-disable no-unused-vars */
import React from 'react';
import { User, Leaf, X, Star, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Highlights() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30 },
    show: (index) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      } 
    })
  };

  return (
    <div className="min-h-screen bg-white p-8 flex items-center">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,500&display=swap');
        .font-playfair-medium-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 500;
        }
      `}</style>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <motion.div 
          className="sm:space-y-12 space-y-12 md:space-y-48 lg:space-y-48"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
              <div className="flex flex-col font-playfair">
                <span className="font-playfair">Our true <em className="italic font-normal">beliefs</em></span>
                <span className="font-playfair">for <em className="italic font-normal">your</em> benefits.</span>
              </div>
            </h1>
          </motion.div>
          
          <motion.div variants={item}>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Our beliefs aren't just words; they are the foundation of every 
              adventure we offer. With high commitment to sustainability, 
              authenticity, and customer-centricity, we ensure that every trip 
              you take with us is valuable.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Cards */}
        <motion.div 
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Customer-Centric Card */}
          <motion.div 
            className="bg-white rounded-2xl p-6 border-2 border-black shadow-sm hover:shadow-md transition-shadow"
            variants={cardItem}
            custom={0}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 border-1 rounded-full p-3 flex-shrink-0">
                <User className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-2">Customer-Centric</h3>
                <p className="text-gray-700 leading-relaxed">
                  Being customer-centric is the compass that guides our 
                  travel services. We prioritize our customers' needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sustainable Travel Card */}
          <motion.div 
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            variants={cardItem}
            custom={1}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gray-700 rounded-full p-3 flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Sustainable Travel</h3>
                <p className="text-gray-300 leading-relaxed">
                  Committed to responsible and eco-conscious journeys, 
                  traveling the world with minimal footprints and pollutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Authentic Experiences Card */}
          <motion.div 
            className="bg-white rounded-2xl p-6 border-2 border-black shadow-sm hover:shadow-md transition-shadow"
            variants={cardItem}
            custom={2}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 border-1 rounded-full p-3 flex-shrink-0">
                <Plane className='w-6 h-6 text-black'/>
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-2">Authentic Experiences</h3>
                <p className="text-gray-700 leading-relaxed">
                  We deliver journeys that immerse you in unforgettable 
                  encounters with the world's diverse cultures & landscapes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quality Guides Card */}
          <motion.div 
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            variants={cardItem}
            custom={3}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gray-700 rounded-full p-3 flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Quality Guides</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every journey will be led by knowledgeable, passionate 
                  experts who enhance your travel experience.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}