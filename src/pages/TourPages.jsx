/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

// Import all tour components
import IncredibleOdisha from './tourpages/IncredibleOdisha';
import NorthBengalSikkim from './tourpages/NorthBengalSikkim';
import NorthIndiaTours from './tourpages/NorthIndiaTours';
import WesternIndiaTours from './tourpages/WesternIndiaTours';
import SouthIndiaTours from './tourpages/SouthIndiaTours';
import IslandOfIndia from './tourpages/IslandOfIndia';
import InternationalTours from './tourpages/InternationalTours';

const TourPage = () => {
  const { tourSlug } = useParams();
  
  // Fixed mapping with correct slug for North Bengal
  const tourMap = {
    'incredible-odisha': IncredibleOdisha,
    'north-bengal-and-sikkim': NorthBengalSikkim, // Fixed key
    'north-india-tours': NorthIndiaTours,
    'western-india-tours': WesternIndiaTours,
    'south-india-tours': SouthIndiaTours,
    'island-of-india': IslandOfIndia,
    'international-tours': InternationalTours
  };

  const TourComponent = tourMap[tourSlug];

  if (!TourComponent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Tour not found</h1>
        <p className="text-gray-600 text-center max-w-md">
          We couldn't find the tour <span className="font-mono bg-gray-100 px-2 py-1 rounded">"{tourSlug}"</span>
        </p>
        
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Available Tours:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(tourMap).map(([slug, Component]) => (
              <a 
                key={slug}
                href={`/tour/${slug}`}
                className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="font-medium text-gray-800 capitalize">
                  {slug.replace(/-/g, ' ')}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Click to view details
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <a 
          href="/tours" 
          className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to All Tours
        </a>
      </div>
    );
  }

  return <TourComponent />;
};

export default TourPage;