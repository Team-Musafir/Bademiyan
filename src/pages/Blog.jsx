import React from 'react'
import Navbar from '../components/NavbarB'
import Footer from '../components/Footer'
import Contact from '../components/Contact'


function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>

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
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            {/* <span className="block">Contact </span> */}
            <span className="block italic font-serif mx-2 md:mx-4">Blogs</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover stories, travel tips, and hidden gems to inspire your next journey.
          </p>
        </div>
      </section>

      <Contact/>
      <Footer/>
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-50px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% { 
            opacity: 0; 
            transform: translateX(50px);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Blog