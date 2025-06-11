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
        staggerChildren: 0.3 // Increased stagger time
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, // Increased duration
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  // Updated card animation with direction and slower timing
  const cardItem = {
    hidden: (index) => ({ 
      opacity: 0, 
      x: index % 2 === 0 ? 100 : -100
    }),
    show: (index) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        delay: index * 0.2, // Increased delay between cards
        duration: 0.9, // Increased duration
        ease: [0.16, 1, 0.3, 1]
      } 
    })
  };

  // Slower heading animation
  const headingLine = {
    hidden: { opacity: 0, y: 40 }, // Increased starting position
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.0, // Increased duration
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <div className="min-h-screen w-full bg-white p-8 flex items-center overflow-hidden">
      <style jsx='true'>{`
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
          className="sm:space-y-12 space-y-12 md:space-y-54 lg:space-y-54"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="space-y-4" variants={container}>
            <motion.h1 
              className="text-5xl md:text-6xl font-light leading-tight tracking-tight flex flex-col"
              variants={container}
            >
              <motion.span 
                variants={headingLine} 
                className="font-playfair"
              >
                Our true <em className="italic font-normal">beliefs</em>
              </motion.span>
              <motion.span 
                variants={headingLine} 
                className="font-playfair mt-2"
              >
                for <em className="italic font-normal">your</em> benefits.
              </motion.span>
            </motion.h1>
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
          {/* Cards with custom animation based on index */}
          {[
            { 
              title: "Customer-Centric", 
              icon: <User className="w-6 h-6 text-black" />,
              content: "Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs.",
              bg: "bg-white",
              border: "border-2 border-black",
              textColor: "text-black",
              iconBg: "bg-gray-100"
            },
            { 
              title: "Sustainable Travel", 
              icon: <Leaf className="w-6 h-6 text-white" />,
              content: "Committed to responsible and eco-conscious journeys, traveling the world with minimal footprints and pollutions.",
              bg: "bg-gray-900",
              border: "",
              textColor: "text-white",
              iconBg: "bg-gray-700"
            },
            { 
              title: "Authentic Experiences", 
              icon: <Plane className='w-6 h-6 text-black'/>,
              content: "We deliver journeys that immerse you in unforgettable encounters with the world's diverse cultures & landscapes.",
              bg: "bg-white",
              border: "border-2 border-black",
              textColor: "text-black",
              iconBg: "bg-gray-100"
            },
            { 
              title: "Quality Guides", 
              icon: <Star className="w-6 h-6 text-white" />,
              content: "Every journey will be led by knowledgeable, passionate experts who enhance your travel experience.",
              bg: "bg-gray-900",
              border: "",
              textColor: "text-white",
              iconBg: "bg-gray-700"
            }
          ].map((card, index) => (
            <motion.div 
              key={index}
              className={`${card.bg} ${card.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow`}
              variants={cardItem}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className={`${card.iconBg} rounded-full p-3 flex-shrink-0`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-medium ${card.textColor} mb-2`}>
                    {card.title}
                  </h3>
                  <p className={`${card.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {card.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}