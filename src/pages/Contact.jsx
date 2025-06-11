/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/NavbarB";
import Footer from "../components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "New Travel Inquiry";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.span
              className="block"
              variants={{
                hidden: { x: -100, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              Contact
            </motion.span>
            <motion.span
              className="block italic font-serif mx-2 md:mx-4"
              variants={{
                hidden: { x: 100, opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut"
                  }
                }
              }}
            >
              Us
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut"
              }
            }}
          >
            We're here to answer your questions and help you plan your next
            adventure
          </motion.p>
        </div>
      </section>

      {/* Information Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-[2rem]">
          <div className="flex-1 w-full md:w-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight text-center md:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="inline-block">
                Get in <em className="italic font-serif text-slate-700">Touch</em>
              </span>
            </motion.h1>
          </div>

          <motion.div
            className="flex items-start gap-8 w-full md:w-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center md:text-right max-w-sm w-full mx-auto md:mx-0 md:max-w-none">
              <p className="text-slate-600 md:text-lg lg:text-lg sm:text-base text-base leading-relaxed mb-6">
                Indulge in our carefully crafted packages to <br />immerse you in the
                most captivating and<br /> transformative travel adventures.
              </p>
              <div className="flex justify-center md:justify-end">
                <button className="text-amber-600 font-medium transition-colors hover:text-amber-700 pb-1 cursor-pointer border-b border-amber-600 hover:border-amber-700">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Combined Form and Cards Section */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="w-full lg:w-1/2"
          >
            <motion.p
              className="text-slate-600 text-lg max-w-lg mb-[1.5rem]"
              variants={item}
            >
              Our team is ready to assist you with any inquiries about our
              travel experiences and services.
            </motion.p>
            <motion.form
              variants={container}
              className="space-y-6"
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
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Call Card */}
              <motion.div
                variants={cardAnimation}
                className="relative p-6 border-2 border-black rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
                    clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="bg-slate-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-black">
                    Call Us
                  </h3>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    +91 82496 08314
                  </p>
                  <div className="mt-3">
                    <button className="text-slate-800 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to call
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                variants={cardAnimation}
                className="relative p-6 border-2 border-black rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="bg-slate-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-black">
                    Email Us
                  </h3>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    info@bademiyantours.com
                  </p>
                  <div className="mt-3">
                    <button className="text-slate-800 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Send message
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Visit Card */}
              <motion.div
                variants={cardAnimation}
                className="relative p-6 border-2 border-black rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
                    clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="bg-slate-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-black">
                    Visit Us
                  </h3>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    Infocity, Sai Kuthir, Bhubaneswar- 751024
                  </p>
                  <div className="mt-3">
                    <button className="text-slate-800 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Get directions
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Hours Card */}
              <motion.div
                variants={cardAnimation}
                className="relative p-6 border-2 border-black rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80')`,
                    clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 100%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="bg-slate-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-black">
                    Hours
                  </h3>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    Mon-Sat: 9AM-8PM
                  </p>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    Sun: 10AM–5PM (by appointment)
                  </p>
                  <div className="mt-3">
                    <button className="text-slate-800 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Book appointment
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Visit Our Office in Bhubaneswar
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find us at our Bhubaneswar headquarters - we'd love to help you plan
            your next journey in person.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px] border border-slate-200 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              delay: 0.1
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute inset-0 z-0">
            <iframe
              title="Bademiyan Tours Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15120.046239918649!2d85.7784612871582!3d20.3398683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190923c5089fb5%3A0x7d11e99b0e92afbe!2sSAI%20KUTIR%20HOUSING%20COLONY!5e1!3m2!1sen!2sin!4v1749667734182!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <motion.div
            className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-bold text-lg text-slate-800">
              Bademiyan Tours & Travels
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Plot No. 123, Nayapalli
            </p>
            <p className="text-slate-600 text-sm">Bhubaneswar, Odisha 751001</p>
            <div className="mt-2 flex space-x-2">
              <a
                href="tel:+918249608314"
                className="text-blue-600 text-sm flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 94370 12345
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="flex flex-col md:flex-row gap-6 mt-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        > */}
          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
            className="bg-slate-50 p-6 rounded-xl flex-1 border border-slate-200 transition-all hover:shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-slate-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-4a1 1 0 00-.293-.707l-4-4A1 1 0 0016 4H3z" />
              </svg>
              Parking Information
            </h3>
            <p className="text-slate-600">
              Dedicated parking available in front of our office. Free for
              clients during business hours.
            </p>
          </motion.div> */}

          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut"
                }
              }
            }}
            className="bg-slate-50 p-6 rounded-xl flex-1 border border-slate-200 transition-all hover:shadow-md"
          >
            <h3 className="text-xl font-semibold mb-3 flex items-center text-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-slate-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Public Transportation
            </h3>
            <p className="text-slate-600">
              Easily accessible via city buses (Route 10, 15, 22). Nearest bus
              stop is 200m away. Auto rickshaws available throughout the city.
            </p>
          </motion.div> */}
        {/* </motion.div> */}
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;