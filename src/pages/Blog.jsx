/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/NavbarB'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

function Blog() {
  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(10px)",
      y: 50
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.4,
        ease: "backOut"
      }
    }
  }

  const sectionTitleVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      rotate: -2
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "circOut"
      }
    }
  }

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      y: 50
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    hover: {
      scale: 1.03,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const specialImageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.85,
      rotate: -5
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: "backOut",
        delay: 0.2
      }
    },
    hover: {
      scale: 1.04,
      rotate: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mt-[5rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <motion.div 
          className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={heroVariants}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline"
            variants={heroVariants}
          >
            <motion.span 
              className="block italic font-serif mx-2 md:mx-4"
              variants={titleVariants}
            >
              Blogs
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            variants={subtitleVariants}
          >
            Discover stories, travel tips, and hidden gems to inspire your next journey.
          </motion.p>
        </motion.div>
      </section>
      
      <section className="px-6 md:px-20 py-12">
        <motion.h1 
          className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
        >
          Journey in <span className="italic font-serif">Odisha</span>
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageContainerVariants}
        >
          {/* Column 1 - Slide Up */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={imageContainerVariants}
          >
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl"
            >
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Asia 1"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl"
            >
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Asia 2"
                className="w-full h-[300px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Column 2 - Special Animation */}
          <motion.div
            variants={specialImageVariants}
            whileHover="hover"
            className="overflow-hidden rounded-xl"
          >
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Asia 3"
              className="w-full h-[540px] rounded-2xl object-cover"
            />
          </motion.div>

          {/* Column 3 - Staggered Slide Up */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={imageContainerVariants}
          >
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl"
            >
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Asia 4"
                className="w-full h-48 object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl"
            >
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Asia 5"
                className="w-full h-40 object-cover"
              />
            </motion.div>
            
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="overflow-hidden rounded-xl"
            >
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Asia 6"
                className="w-full h-40 object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Floating CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ 
            scale: 1.05,
            transition: { 
              duration: 0.4,
              ease: "easeOut"
            } 
          }}
        >
        </motion.div>
      </section>
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journey in <span className="italic font-serif">North Bengal</span>
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Europe 1"
              className="rounded-xl w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Europe 2"
              className="rounded-xl w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Europe 3"
              className="rounded-xl w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Europe 4"
              className="rounded-xl w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Europe 5"
              className="rounded-xl w-full h-[240px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Europe 6"
              className="rounded-xl w-full h-[240px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journey in <span className="italic font-serif">North India</span>
        </h2>

        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div>
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="North 1"
              className="rounded-xl w-full h-[540px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="North 2"
              className="rounded-xl w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="North 3"
              className="rounded-xl w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="North 4"
              className="rounded-xl w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="North 5"
              className="rounded-xl w-full h-[350px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journey in <span className="italic font-serif">Western India</span>
        </h2>

        <div className="max-w-7xl mx-auto space-y-6">
          {/* Top Row - 2 Wide Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl">
                <img
                  src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                  alt={`Western ${n}`}
                  className="w-full h-[300px] object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 Smaller Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[3, 4, 5].map((n) => (
              <div key={n} className="overflow-hidden rounded-xl">
                <img
                  src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                  alt={`Western ${n}`}
                  className="w-full h-[220px] object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journey in <span className="italic font-serif">South India</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="South 1"
                className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="South 2"
                className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Center Column - Tall Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="South 3"
              className="w-full h-[520px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="South 4"
                className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="South 5"
                className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journey in <span className="italic font-serif">Islands of India</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1 - Stacked */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Island 1"
                className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Island 2"
                className="w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Column 2 - Feature Image */}
          <div className="col-span-2 overflow-hidden rounded-xl">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Island 3"
              className="w-full h-[460px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 3 - Mini Stack */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Island 4"
                className="w-full h-[180px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
                alt="Island 5"
                className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-20 py-12 bg-gray-50">
        <h2 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journeys <span className="italic font-serif">Around the World</span>
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Column 1 - Tall image */}
          <div className="overflow-hidden rounded-xl md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Journey 1"
              className="w-full h-[480px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 2 - Two stacked smaller images */}
          <div className="flex flex-col gap-6 md:col-span-3">
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
                alt="Journey 2"
                className="w-full h-[230px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
                alt="Journey 3"
                className="w-full h-[230px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>



      <Contact />
      <Footer />
    </div>
  )
}

export default Blog