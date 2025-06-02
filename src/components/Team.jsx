import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Travel Curator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Cultural Experience Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  // Social media icon component
  const SocialIcon = ({ href, children }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white rounded-full p-2 transition-all duration-300 transform hover:scale-110"
    >
      {children}
    </a>
  );

  // SVG icons
  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Restructured Header Section */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Left Column - Heading */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-normal text-gray-900 mb-6">
                Our <em className="font-serif italic">passionate</em>
              </h1>
              <h2 className="text-5xl md:text-6xl font-normal text-gray-900">
                teammates
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div className="flex items-end">
              <p className="text-base text-gray-600">
                Meet the heart and soul of xplore – our own dynamic<br/> team of travel enthusiasts.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-4xl aspect-[4/5] mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out filter md:grayscale md:group-hover:grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                {/* Social Icons Overlay - always visible on mobile, hover on desktop */}
                <div className="absolute p-6 gap-12 inset-0 flex items-end justify-center space-x-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  <SocialIcon href={member.social.twitter}>
                    <TwitterIcon />
                  </SocialIcon>
                  <SocialIcon href={member.social.instagram}>
                    <InstagramIcon />
                  </SocialIcon>
                  <SocialIcon href={member.social.linkedin}>
                    <LinkedInIcon />
                  </SocialIcon>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-xl text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;