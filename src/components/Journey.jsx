import React from "react";

export default function JourneyBanner() {
  return (
    <div className="min-h-screen bg-white md:px-24 lg:px-24 sm:px-8 px-8 flex items-center">
      {/* Inject Playfair Display via inline CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>

      <div className="relative w-full flex justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover rounded-3xl">
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        <div className="relative w-full max-w-6xl h-[600px] flex flex-col justify-center items-center text-center text-white px-8 z-10">
          <h1 className="text-5xl md:text-6xl font-light">
            Our <span className="italic font-normal font-playfair">journey</span> in pictures
          </h1>
          <p className="mt-4 text-base md:text-lg font-normal max-w-xl">
            See what makes each experience with our trips exceptional.
          </p>
        </div>

        <div className="absolute inset-0 bg-black/30 rounded-3xl z-0"></div>
      </div>
    </div>
  );
}