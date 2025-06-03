import React from 'react'
import Navbar from '../components/NavbarB'
import Footer from '../components/Footer'
import Contact from '../components/Contact'


function Blog() {
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
          <h1 className="text-6xl md:text-8xl font-normal mb-8 flex flex-wrap justify-center items-baseline">
            {/* <span className="block">Contact </span> */}
            <span className="block italic font-serif mx-2 md:mx-4">Blogs</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover stories, travel tips, and hidden gems to inspire your next journey.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-20 py-12">
        <h1 className="text-center text-[2.75rem] md:text-[3.5rem] leading-tight font-light mb-10">
          Journey in <span className="italic font-serif">Asia</span>
        </h1>


        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/piligrim.jpg?updatedAt=1748812513556"
              alt="Asia 1"
              className="rounded-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/hertiage.jpg?updatedAt=1748812487841"
              alt="Asia 2"
              className="rounded-xl w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 2 */}
          <div>
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-nikhlesh-tyagi-1610382-14095828.jpg"
              alt="Asia 3"
              className="rounded-xl w-full h-[540px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/Women%20Only.jpg?updatedAt=1748812495729"
              alt="Asia 4"
              className="rounded-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/international2.jpg?updatedAt=1748812528730"
              alt="Asia 5"
              className="rounded-xl w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/pexels-rehanverma-2408167.jpg?updatedAt=1748815082107"
              alt="Asia 6"
              className="rounded-xl w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>



      <Contact />
      <Footer />
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