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
          Journey in <span className="italic font-serif">Asia</span>
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

      <Contact />
      <Footer />
    </div>
  )
}

export default Blog