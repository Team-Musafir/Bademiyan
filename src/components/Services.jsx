/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    MapPin, Plane, Train, Car, Users, Camera, Ship,
    Zap, ChefHat, DollarSign, FileText, Building, ArrowRight
} from 'lucide-react';



const Services = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
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




    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const services = [
        {
            id: 1,
            icon: MapPin,
            title: "Tailor Made Holidays",
            subtitle: "National & International",
            description: "Custom-designed vacations that match your unique preferences and travel style.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-900"
        },
        {
            id: 2,
            icon: Plane,
            title: "Air Ticketing",
            description: "Competitive rates and flexible options for all your flight needs worldwide.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 3,
            icon: Train,
            title: "Rail & Bus Tickets",
            description: "Seamless booking for comfortable and affordable ground transportation.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 4,
            icon: Car,
            title: "Car Rentals",
            description: "Premium vehicles with professional drivers for safe and convenient travel.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 5,
            icon: Users,
            title: "Private Guides",
            subtitle: "Escorts & Interpreters",
            description: "Local experts to enhance your experience with cultural insights and language help.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 6,
            icon: Camera,
            title: "Photo Services",
            description: "Professional photographers to capture your most memorable travel moments.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 7,
            icon: Ship,
            title: "Cruise Packages",
            description: "Luxury voyages combining relaxation with adventure on the high seas.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 8,
            icon: Zap,
            title: "Helicopter Tours",
            description: "Exclusive aerial experiences with breathtaking panoramic views.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 9,
            icon: ChefHat,
            title: "Culinary Tours",
            subtitle: "South India/Jain/Halal",
            description: "Immerse in authentic local food cultures with our specialized kitchen visits.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 10,
            icon: DollarSign,
            title: "Forex Services",
            description: "Competitive exchange rates for all your international currency needs.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 11,
            icon: FileText,
            title: "Visa Assistance",
            description: "Comprehensive support for all your travel documentation requirements.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        },
        {
            id: 12,
            icon: Building,
            title: "MICE Solutions",
            description: "End-to-end corporate travel and event management services.",
            bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
            textColor: "text-gray-800"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header section with exact CTA styling */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={item}
                        className="text-4xl md:text-6xl font-normal text-gray-800 mb-8"
                    >
                        Travel Services
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={item}
                        className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable
                        adventure. Join us in turning your travel fantasies into unforgettable realities.
                    </motion.p>

                </motion.div>

                {/* Services grid */}
                <motion.div
                    variants={container}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={item}
                                onClick={() => openModal(event)}
                                className={`${service.bgColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden relative border-1`}
                            >
                                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="mb-5">
                                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                                            <IconComponent size={24} />
                                        </div>
                                    </div>

                                    <div className={service.textColor}>
                                        <h3 className="text-xl font-bold mb-2 leading-tight">
                                            {service.title}
                                        </h3>
                                        {service.subtitle && (
                                            <p className="text-sm font-medium mb-3 opacity-80">
                                                {service.subtitle}
                                            </p>
                                        )}
                                        <p className="text-sm leading-relaxed opacity-90">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
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
                                something to be written if provided
                            </motion.div>

                        </motion.div>
                    )}
                </AnimatePresence>


            </div>
        </div>
    );
};

export default Services;