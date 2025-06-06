/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Send, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CircularEnquiryButton = () => {
  const [isOpen, setIsOpen] = useState(true); // Start in open state
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "+918008952052";
  const defaultMessage = "Hello, I'm interested in your travel services. Please contact me.";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false); // Close when scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Circular Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-700 shadow-xl flex items-center justify-center"
      >
        {/* Pulse Animation */}
        {isHovered && !isOpen && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-yellow-400/30 border border-yellow-300/20"
          />
        )}

        {/* Icon Animation */}
        <motion.div
          animate={{
            rotate: isOpen ? 90 : 0,
            scale: isHovered ? 1.2 : 1
          }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.div>
      </motion.button>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute right-0 bottom-16 w-42 bg-white/90 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-yellow-500/80 dark:border-yellow-400/80"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))",
              WebkitBackdropFilter: "blur(8px) saturate(180%) contrast(120%) brightness(110%)"
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 dark:from-yellow-400/20 dark:to-yellow-400/10 p-3 flex justify-between items-center border-b border-yellow-500/30 dark:border-yellow-400/30">
              <h3 className="font-semibold text-sm text-gray-800 dark:text-amber-100 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Travel Assistance
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-black dark:text-amber-100 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-3 space-y-3">
              <p className="text-gray-700 dark:text-amber-100 text-xs leading-tight font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                How would you like to contact us?
              </p>

              {/* WhatsApp Button */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full bg-white/90 hover:bg-white dark:bg-gray-700/40 dark:hover:bg-gray-600 border-2 border-yellow-500/80 dark:border-yellow-400/80 text-gray-800 dark:text-amber-100 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                style={{
                  backdropFilter: "contrast(120%) brightness(105%)"
                }}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Send size={14} className="text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" className="text-yellow-600 dark:text-yellow-400" />
                </svg>
              </motion.a>

              {/* Call Button */}
              <motion.a
                href={`tel:${whatsappNumber}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full bg-white/90 hover:bg-white dark:bg-gray-700/90 dark:hover:bg-gray-600 border-2 border-yellow-500/80 dark:border-yellow-400/80 text-gray-800 dark:text-amber-100 px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
                style={{
                  backdropFilter: "contrast(120%) brightness(105%)"
                }}
              >
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm font-medium">Call Now</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" className="text-yellow-600 dark:text-yellow-400" />
                </svg>
              </motion.a>

              <p className="text-yellow-600 dark:text-yellow-400 text-xs text-center pt-1 font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CircularEnquiryButton;