
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TravelPackages from '../components/Packages';
import Highlights from '../components/Highlights';
import JourneyBanner from '../components/Journey';
import Reviews from '../components/Review';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Services from '../components/Services';


function Homepage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TravelPackages/>
      <Highlights/>
      <JourneyBanner/>
      <Reviews/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Homepage