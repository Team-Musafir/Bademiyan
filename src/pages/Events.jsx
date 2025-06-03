/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/NavbarB';
import Contact from '../components/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

function Events() {
  // Enhanced event data with modal details
  const mustExperienceEvents = [
    {
      title: "RathYatra (Chariot Festival) 2025",
      description: "The grand chariot festival of Lord Jagannath in Puri, attracting millions of devotees worldwide.",
      longDescription: "Rath Yatra is one of the most important Hindu festivals celebrated annually in Puri, Odisha. The festival commemorates Lord Jagannath's annual visit to Gundicha Temple via Mausi Maa Temple near Saradha Bali. The main attraction is the pulling of the chariots by thousands of devotees through the Bada Danda (Grand Avenue) to Gundicha Temple. The chariots are massive structures built anew each year from wood, with the main chariot standing at 45 feet tall with 16 wheels.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/RathaYatra.jpg",
      date: "July 12-20, 2025",
      location: "Puri, Odisha",
      highlights: ["Grand procession of three chariots", "Sacred rituals at Jagannath Temple", "Traditional music and dance performances", "Community feasts and cultural events"]
    },
    {
      title: "Konark Dance Festival",
      description: "A classical dance extravaganza against the magnificent backdrop of the Sun Temple.",
      longDescription: "The Konark Dance Festival is a five-day event held annually against the backdrop of the magnificent Sun Temple at Konark. The festival showcases classical dance forms like Odissi, Bharatanatyam, Manipuri, Kathak, and Chhau. Renowned artists from all over the country participate in this cultural extravaganza. The festival is organized by Odisha Tourism in collaboration with Odissi Research Centre to promote the diverse Indian classical dance heritage.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/Konark-festival.jpg",
      date: "December 1-5, 2025",
      location: "Konark, Odisha",
      highlights: ["Performances by renowned classical dancers", "Evening sessions under moonlight", "Workshops on traditional dance forms", "Artisan exhibitions"]
    },
    {
      title: "Dhauli Mahotsav",
      description: "Celebration of peace and harmony through classical dance performances at Dhauli hills.",
      longDescription: "Dhauli Mahotsav is an annual festival held at the foothills of Dhauli, the place where the famous Kalinga War was fought. The festival celebrates the triumph of peace over war, as it was here that Emperor Ashoka renounced war and embraced Buddhism. The festival features classical dance performances by eminent artists from across India, creating a mesmerizing atmosphere under the stars with the illuminated Shanti Stupa as the backdrop.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/1-Dhauli-1.jpg",
      date: "November 8-10, 2025",
      location: "Bhubaneswar, Odisha",
      highlights: ["Performances against the backdrop of Shanti Stupa", "Peace symposiums and discussions", "Cultural heritage walks", "Meditation sessions"]
    },
    {
      title: "Parab Tribal Dance Festival",
      description: "Vibrant showcase of tribal culture, dance, and music from Odisha's indigenous communities.",
      longDescription: "Parab Tribal Dance Festival is a colorful celebration of the rich cultural heritage of Odisha's tribal communities. The festival brings together various tribal groups from across the state to showcase their unique dance forms, music, art, and traditions. Visitors get a rare opportunity to witness authentic tribal rituals, traditional attire, and indigenous cuisine. The festival aims to preserve and promote the diverse cultural traditions of Odisha's tribal population.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/23127585_parab2_aspera.jpg",
      date: "February 15-17, 2026",
      location: "Koraput, Odisha",
      highlights: ["Authentic tribal dance performances", "Traditional craft demonstrations", "Tribal cuisine experience", "Cultural exchange programs"]
    },
    {
      title: "Dhanu Yatra Festival",
      description: "The world's largest open-air theater depicting the mythological story of Krishna.",
      longDescription: "Dhanu Yatra is recognized as the world's largest open-air theater, celebrated in Bargarh, Odisha. The festival enacts the mythological story of Lord Krishna and his demon uncle Kansa. The entire town transforms into Mathura, with different areas representing Gopapura, Vrindavan, and Mathura. The festival runs for 11 days, attracting thousands of spectators who witness the dramatic performances that span across the town.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/ODISHA%20FC-63bbfadd3f58e9.4522050693eq2r17.png",
      date: "December 25, 2025 - January 4, 2026",
      location: "Bargarh, Odisha",
      highlights: ["Epic scale open-air performances", "Town-wide transformation into mythological settings", "Traditional folk theater", "Cultural processions and music"]
    },
    {
      title: "Baul Music Festival",
      description: "Mystical folk music tradition from Bengal and Odisha's border regions.",
      longDescription: "The Baul Music Festival celebrates the mystical folk tradition of the Bauls, wandering minstrels from Bengal and Odisha. Their music, recognized by UNESCO as an Intangible Cultural Heritage, combines elements of Sufism, Vaishnavism, and Tantric philosophy. The festival brings together Baul singers from across Eastern India to perform their soulful, philosophical songs accompanied by traditional instruments like the ektara and dotara.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/istockphoto-1284681157-612x612.jpg",
      date: "March 10-12, 2026",
      location: "Balasore, Odisha",
      highlights: ["Performances by renowned Baul singers", "Workshops on Baul philosophy", "Traditional instrument demonstrations", "Spiritual discourse sessions"]
    }
  ];

  const festivals = [
    {
      title: "Khandigiri Mahotsav",
      description: "Cultural festival celebrating Jain heritage and Odissi dance at ancient cave sites.",
      longDescription: "The Khandagiri Mahotsav is a vibrant cultural festival held at the ancient Khandagiri and Udayagiri caves in Bhubaneswar. This festival celebrates the rich Jain heritage of the region and showcases classical Odissi dance performances by renowned artists. The event also features heritage walks, art exhibitions, and lectures on Jain philosophy and Odisha's history.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/1-khandagiri-udaigiri-caves-attr-hero.jpeg",
      date: "January 10-12, 2026",
      location: "Bhubaneswar, Odisha",
      highlights: [
        "Odissi dance performances by eminent artists",
        "Heritage walks through ancient caves",
        "Exhibitions on Jain art and architecture",
        "Lectures on Jain philosophy and history"
      ]
    },
    {
      title: "Rajarani Music Festival",
      description: "Three-day classical music festival in the historic Rajarani Temple complex.",
      longDescription: "The Rajarani Music Festival is a prestigious three-day celebration of Indian classical music held against the backdrop of the 11th-century Rajarani Temple in Bhubaneswar. The festival brings together maestros of Hindustani and Carnatic music traditions for evening performances under the stars. The temple's unique architecture creates exceptional acoustics, making it an ideal venue for this musical extravaganza that attracts connoisseurs from across the country.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/rajarani1-26-1482725094.jpg",
      date: "January 20-22, 2026",
      location: "Bhubaneswar, Odisha",
      highlights: [
        "Performances by Grammy-winning artists",
        "Late-night jugalbandi sessions",
        "Instrumental music showcases",
        "Music appreciation workshops"
      ]
    },
    {
      title: "Adivasi Mela",
      description: "Annual tribal fair showcasing handicrafts, art, and culture of Odisha's tribes.",
      longDescription: "Adivasi Mela is a vibrant annual tribal fair that celebrates the rich cultural heritage of Odisha's 62 indigenous communities. Held over ten days, the festival features tribal art exhibitions, handicraft stalls, traditional music and dance performances, and indigenous cuisine. Visitors can interact with tribal artisans, witness live demonstrations of traditional crafts, and purchase authentic tribal artifacts directly from the makers.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/Adivasi-Mela-At-Bhubaneswar.webp",
      date: "January 26 - February 4, 2026",
      location: "Bhubaneswar, Odisha",
      highlights: [
        "62 tribal communities represented",
        "Live craft demonstrations",
        "Tribal culinary experience",
        "Traditional sports competitions"
      ]
    },
    {
      title: "Joranda Sadhu Festival",
      description: "Unique gathering of Mahima Dharma ascetics at their spiritual headquarters.",
      longDescription: "The Joranda Sadhu Festival is a unique spiritual gathering of Mahima Dharma ascetics at their headquarters in Dhenkanal district. Thousands of saffron-clad sadhus congregate for special rituals, spiritual discourses, and community service activities. The highlight is the grand procession of ascetics carrying sacred fire pots and chanting hymns. This festival offers a rare glimpse into the ascetic traditions of this indigenous Odia spiritual movement.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/1522948-dev.webp",
      date: "March 5-7, 2026",
      location: "Dhenkanal, Odisha",
      highlights: [
        "Procession of thousands of ascetics",
        "Sacred fire rituals",
        "Spiritual discourse sessions",
        "Community kitchen serving thousands"
      ]
    },
    {
      title: "Nabarna Bhog",
      description: "Sacred food offering festival at Joranda with unique spiritual rituals.",
      longDescription: "Nabarna Bhog is a unique food offering festival celebrated at the Mahima Gadi in Joranda. Devotees prepare massive quantities of traditional rice-based offerings that are arranged in elaborate patterns before being sanctified. The highlight is the 'Akhand Dhupa' - continuous incense burning for 72 hours. The festival culminates in the distribution of prasad to thousands of devotees, symbolizing the community aspect of Mahima Dharma.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/joranda-mela-2024.jpg",
      date: "April 12-14, 2026",
      location: "Joranda, Odisha",
      highlights: [
        "Giant sacred food arrangements",
        "72-hour continuous incense ritual",
        "Spiritual discourses",
        "Mass prasad distribution"
      ]
    },
    {
      title: "Folk Dance Festival",
      description: "Colorful Sambalpuri folk dances performed by troupes from across Western Odisha.",
      longDescription: "The Folk Dance Festival showcases the vibrant dance traditions of Western Odisha, featuring performances of Sambalpuri, Dalkhai, Rasarkeli, and other folk dance forms. Troupes from across the region compete in colorful traditional attire, accompanied by live folk orchestras playing dhol, nisan, and tamak. The festival includes workshops where visitors can learn basic dance steps and understand the cultural significance of each dance form.",
      image: "https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/3d34e492ebc9209da0141d0e7ed46efd.jpg",
      date: "February 20-22, 2026",
      location: "Sambalpur, Odisha",
      highlights: [
        "Rare tribal dance performances",
        "Traditional orchestra showcases",
        "Dance workshops for visitors",
        "Craft bazaar featuring Western Odisha textiles"
      ]
    }
  ];

  // Slider state and logic for Must Experience section
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [autoSlide, setAutoSlide] = useState(true);
  const intervalRef = useRef(null);

  // Modal state
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

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

  // Modal variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  // Function to start auto sliding
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= mustExperienceEvents.length - cardsPerView) return 0;
        return prevIndex + 1;
      });
    }, 5000); // Slide every 5 seconds
  };

  // Function to stop auto sliding
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrentIndex(prevIndex => {
      if (prevIndex >= mustExperienceEvents.length - cardsPerView) return 0;
      return prevIndex + 1;
    });
    if (autoSlide) startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) return mustExperienceEvents.length - cardsPerView;
      return prevIndex - 1;
    });
    if (autoSlide) startAutoSlide();
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrentIndex(index * cardsPerView);
    if (autoSlide) startAutoSlide();
  };

  // Open modal with event details
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setSelectedEvent(null);
    }, 300);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
      
      // Adjust current index if it's out of bounds
      if (currentIndex > mustExperienceEvents.length - cardsPerView) {
        setCurrentIndex(Math.max(0, mustExperienceEvents.length - cardsPerView));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start auto slide
    if (autoSlide) startAutoSlide();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      stopAutoSlide();
    };
  }, [cardsPerView, currentIndex, mustExperienceEvents.length, autoSlide]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative mt-[5rem] min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            <span className="block animate-gentleFadeInLeft">Events</span>
            <span className="block animate-softPulse mx-2 md:mx-4">&</span>
            <span className="block italic font-serif animate-gentleFadeInRight">Festivals</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
            Celebrating the Cultural Tapestry of Odisha & India
          </p>
        </div>
      </section>

      {/* Must Experience Events Section */}
      <section id="must-experience" className="bg-white py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div 
            variants={item}
            className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8"
          >
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight">
                Must <em className="italic font-serif text-slate-700">experience</em>
                <br />
                events
              </h1>
            </div>
            
            <div className="flex items-start gap-8 w-full md:w-auto">
              <div className="text-right max-w-sm w-full">
                <p className="text-slate-600 md:text-lg lg:text-lg sm:text-base text-base leading-relaxed mb-6">
                  Immerse yourself in the most captivating cultural events and festivals that define the soul of Odisha and India.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Events Slider */}
          <motion.div 
            variants={item}
            className="relative"
            onMouseEnter={() => {
              setAutoSlide(false);
              stopAutoSlide();
            }}
            onMouseLeave={() => {
              setAutoSlide(true);
              startAutoSlide();
            }}
          >
            {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-black rounded-full p-3 shadow-sm hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-black rounded-full p-3 shadow-sm hover:bg-gray-800 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
            {/* Cards Container */}
            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
              >
                {mustExperienceEvents.map((event) => (
                  <div 
                    key={event.title}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <motion.div 
                      whileHover={{ y: -10 }}
                      className="group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 h-full"
                    >
                      {/* Clip-path Image Container */}
                      <div 
                        className="relative h-96 overflow-hidden clip-path-event"
                        style={{ 
                          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)"
                        }}
                      >
                        <img 
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                          <h3 className="text-2xl font-bold mb-2 leading-tight">
                            {event.title}
                          </h3>
                          <div className="flex flex-col">
                            <span className="text-base font-normal opacity-90 flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {event.date}
                            </span>
                            <span className="text-base font-normal opacity-90 flex items-center mt-1">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </span>
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                          <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                          <p className="text-white text-sm mb-4">{event.description}</p>
                          <button 
                            onClick={() => openModal(event)}
                            className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full font-medium w-max hover:bg-white/10 transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        {/* Minimalist Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.ceil(mustExperienceEvents.length / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / cardsPerView) 
                  ? 'bg-black w-6' 
                  : 'bg-gray-300 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          </div>
        </motion.div>
      </section>

      {/* Unique Festivals of Odisha Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
            variants={item}
            className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8"
          >
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight">
                Unique <em className="italic font-serif text-slate-700">Festivals</em>
                <br />
                of Odisha
              </h1>
            </div>
            
            <div className="flex items-start gap-8 w-full md:w-auto">
              <div className="text-right max-w-sm w-full">
                <p className="text-slate-600 md:text-lg lg:text-lg sm:text-base text-base leading-relaxed mb-6">
                  Discover the hidden cultural gems that make Odisha truly incredible.
                </p>
              </div>
            </div>
          </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden clip-path-festival">
                <img 
                  src={festival.image} 
                  alt={festival.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{festival.title}</h3>
                <p className="text-gray-600">{festival.description}</p>
                <button 
                  onClick={() => openModal(festival)}
                  className="mt-4 text-black font-medium hover:text-gray-800 transition-colors"
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Contact/>

      <Footer/>

      {/* Event Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row shadow-2xl"
            >
              {/* Image section with enhanced clip-path */}
              <div className="relative w-full lg:w-1/2 h-80 lg:h-auto clip-path-modal">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-0 left-0 p-6 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedEvent.title}</h2>
                  <div className="flex items-center mt-2">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Content section */}
              <div className="w-full lg:w-1/2 p-6 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center text-amber-600 mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{selectedEvent.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedEvent.longDescription}
                  </p>
                  
                  {selectedEvent.highlights && selectedEvent.highlights.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Festival Highlights</h4>
                      <ul className="space-y-2">
                        {selectedEvent.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <button className="w-full py-3 bg-black hover:bg-gray-800 text-white font-bold rounded-lg transition-colors duration-300">
                      Book Your Experience
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes gentleFadeInLeft {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes gentleFadeInRight {
          0% { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes softPulse {
          0% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
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
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .clip-path-event {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
          transition: clip-path 0.5s ease;
        }

        .clip-path-event:hover {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        .clip-path-festival {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 95%);
        }
        
        .clip-path-modal {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
        }
        
        @media (min-width: 1024px) {
          .clip-path-modal {
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  )
}

export default Events;