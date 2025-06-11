import React from "react";

export default function Journey() {
  return (
    <div className="min-h-screen bg-white md:px-24 lg:px-24 sm:px-8 px-8 flex items-center">
      {/* Inject Playfair Display via inline CSS */}
      <style jsx='true'>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
      
      <div className="relative w-full flex justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover rounded-3xl">
          <source src="https://ik.imagekit.io/qad3x0vr1/Explore%20tiles/19096560-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        
        <div className="relative w-full max-w-6xl h-[600px] flex flex-col text-white px-4 z-10">
          {/* Location text at top right */}
          <div className="absolute top-8 right-8">
            <p className="text-sm md:text-base text-white font-normal">Location: Mountain Strait, Any State</p>
          </div>
          
          {/* Main content positioned at bottom left */}
          <div className="mt-auto mb-16 text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              Our <span className="italic font-normal font-playfair">journey</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-light leading-tight">
              in videos
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}