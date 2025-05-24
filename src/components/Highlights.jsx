import React, { useEffect, useState } from 'react';

const Highlights = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoother transition with easing
  const translateY = Math.max(0, 100 - (scrollY / window.innerHeight) * 100);

  // added dummy just for a layout 
  return (
    <section
      className="relative min-h-screen bg-white py-20 z-30"
      style={{
        transform: `translateY(calc(${translateY}vh - 100vh))`,
        marginTop: '100vh',
        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make us stand out from the competition
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Lightning Fast",
              description: "Experience unprecedented speed with our optimized solutions",
              icon: "⚡"
            },
            {
              title: "Secure & Reliable",
              description: "Your data is protected with enterprise-grade security measures",
              icon: "🔒"
            },
            {
              title: "24/7 Support",
              description: "Get help whenever you need it with our round-the-clock support",
              icon: "🌟"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;