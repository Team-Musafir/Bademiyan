/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = "New Travel Inquiry";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

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

  const formItem = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-4xl w-full text-center"
      >
        {/* Header */}
        <motion.h1 
          variants={item}
          className="text-4xl md:text-6xl font-normal text-gray-800 mb-8"
        >
          Ready to <em className="italic">embark</em>
          <br />
          on a <em className="italic">new</em> journey?
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          variants={item}
          className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable 
          adventure. Join us in turning your travel fantasies into unforgettable realities.
        </motion.p>
        
        {/* Form */}
        <motion.form 
          variants={container}
          className="max-w-2xl mx-auto space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Name and Email Row */}
          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.input
              variants={formItem}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-gray-500 rounded-lg placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <motion.input
              variants={formItem}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-gray-500 rounded-lg placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </motion.div>
          
          {/* Message Field */}
          <motion.textarea
            variants={formItem}
            name="message"
            placeholder="Message"
            rows="8"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-white border-2 border-gray-500 rounded-lg placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          ></motion.textarea>
          
          {/* Submit Button */}
          <motion.button
            variants={formItem}
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;