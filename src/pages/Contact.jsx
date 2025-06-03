import React from "react";
import Navbar from '../components/NavbarB';
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative mt-[5rem] min-h-[50vh] flex mb-[4rem] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-leodan-zamalloa-1289782709-32388950.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            <span className="block animate-gentleFadeInLeft">Contact </span>
            <span className="block animate-softPulse mx-2 md:mx-4"></span>
            <span className="block italic font-serif animate-gentleFadeInRight">Us</span>
          </h1>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section - Updated to match your image */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2rem',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#333333'
            }}>Contact Us</h2>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: '#4a5568'
                }}>Name</label>
                <input type="text" style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: '#4a5568'
                }}>Email</label>
                <input type="email" style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }} />
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                color: '#4a5568'
              }}>Message</label>
              <textarea style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                minHeight: '120px',
                fontSize: '1rem'
              }}></textarea>
            </div>
            
            <button style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4299e1',
              color: 'white',
              fontWeight: '600',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.2s'
            }}>Sign Up</button>
          </div>
          
          {/* Contact Info Section */}
          <div className="contact-info">
            <h2 className="text-3xl font-bold mb-6">Our information</h2>
            <div className="space-y-6">
              <div className="info-item">
                <p className="info-label text-sm font-medium text-gray-500">Phone Number</p>
                <p className="text-lg mt-1">+123 456 7890</p>
              </div>
              
              <div className="info-item">
                <p className="info-label text-sm font-medium text-gray-500">Email Address</p>
                <p className="text-lg mt-1">info@nplore.com</p>
              </div>
              
              <div className="info-item">
                <p className="info-label text-sm font-medium text-gray-500">Address</p>
                <p className="text-lg mt-1">123 Wanderer Street, City Name, State Name, Nation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us on Maps</h2>
          <p className="description-text text-center max-w-2xl mx-auto text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Motel straddle tortor in elit hendrerit ut pulserat libero cursus. Etiam laboris commodo laoreet.
          </p>
          <div className="divider h-px bg-gray-200 w-full max-w-4xl mx-auto my-8"></div>
        </div>
      </div>
      <Footer/>
      <style jsx global>{`
        @keyframes gentleFadeInLeft {
          0% {
             opacity: 0;
            transform: translateX(-10px);
          }
          100% {
             opacity: 1;
            transform: translateX(0);
          }
        }
                
        @keyframes gentleFadeInRight {
          0% {
             opacity: 0;
            transform: translateX(10px);
          }
          100% {
             opacity: 1;
            transform: translateX(0);
          }
        }
                
        @keyframes softPulse {
          0% {
             opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
             opacity: 1;
            transform: scale(1);
          }
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
      `}</style>
    </div>
  );
};

export default Contact;