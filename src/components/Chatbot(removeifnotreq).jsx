import { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import tourData1 from '../data/IncredibleOdishaData.json';
import tourData2 from '../data/InternationalToursData.json';
import tourData3 from '../data/IslandofIndia.json';
import tourData4 from '../data/northBengalSikkimData.json';
import tourData5 from '../data/southIndiaToursData.json';
import tourData6 from '../data/westernIndiaToursData.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Namaste! I'm Bademiyan Tours Assistant. Ask me about our tour packages, prices, or anything else!", 
      user: false 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Combine all tour data
  const tourData = [
    ...Object.values(tourData1),
    ...Object.values(tourData2),
    ...Object.values(tourData3),
    ...Object.values(tourData4),
    ...Object.values(tourData5),
    ...Object.values(tourData6)
  ];

  // Process all tour data into searchable format
  const processTourData = () => {
    return tourData.map((tour, index) => ({
      id: `tour-${index}`,
      title: tour.title,
      description: tour.description,
      location: tour.location,
      duration: tour.duration,
      price: tour.price,
      schedule: tour.schedule,
      includes: tour.includes,
      excludes: tour.excludes
    }));
  };

  const tours = processTourData();

  const findBestAnswer = (question) => {
    const lowerQuestion = question.toLowerCase().trim();
    
    // Check for greetings
    if (/(hi|hello|namaste|hey)/i.test(lowerQuestion)) {
      return {
        response: "Namaste! How can I help you with your travel plans today?",
        type: "greeting"
      };
    }

    // Handle "what's included" questions
    if (/(what's included|what is included|inclusions|what does it include|what all is included)/i.test(lowerQuestion)) {
      const tourMatch = tours.find(tour => 
        lowerQuestion.includes(tour.title.toLowerCase()) ||
        lowerQuestion.includes(tour.location.toLowerCase().split(',')[0])
      );
      
      if (tourMatch) {
        const includesList = tourMatch.includes.map(item => `✓ ${item}`).join('\n');
        return {
          response: `The ${tourMatch.title} package includes:\n${includesList}`,
          type: "inclusions",
          package: tourMatch
        };
      }
      return {
        response: "I can tell you what's included in any of our tours. Could you specify which tour package you're asking about?",
        type: "inclusions_unknown"
      };
    }

    // Handle "what's excluded" questions
    if (/(what's excluded|what is excluded|exclusions|what does it exclude|what's not included)/i.test(lowerQuestion)) {
      const tourMatch = tours.find(tour => 
        lowerQuestion.includes(tour.title.toLowerCase()) ||
        lowerQuestion.includes(tour.location.toLowerCase().split(',')[0])
      );
      
      if (tourMatch) {
        const excludesList = tourMatch.excludes.map(item => `✗ ${item}`).join('\n');
        return {
          response: `The ${tourMatch.title} package does not include:\n${excludesList}`,
          type: "exclusions",
          package: tourMatch
        };
      }
      return {
        response: "I can tell you what's not included in any of our tours. Could you specify which tour package you're asking about?",
        type: "exclusions_unknown"
      };
    }

    // Check for package inquiries
    const packageKeywords = tours.map(tour => ({
      id: tour.id,
      keywords: [
        ...tour.title.toLowerCase().split(' '),
        ...tour.location.toLowerCase().split(',')[0].split(' '),
        ...tour.description.toLowerCase().split(' ').slice(0, 5)
      ].filter(k => k.length > 3)
    }));
    
    let matchedPackage = null;
    let highestMatchCount = 0;
    
    packageKeywords.forEach(pkg => {
      let matchCount = 0;
      pkg.keywords.forEach(keyword => {
        if (lowerQuestion.includes(keyword)) {
          matchCount++;
        }
      });
      
      if (matchCount > highestMatchCount) {
        highestMatchCount = matchCount;
        matchedPackage = tours.find(t => t.id === pkg.id);
      }
    });
    
    if (matchedPackage && highestMatchCount > 0) {
      return {
        response: `The ${matchedPackage.title} package includes:
        - Destination: ${matchedPackage.location}
        - Duration: ${matchedPackage.duration}
        - Price: ₹${matchedPackage.price}
        - Next departure: ${matchedPackage.schedule}
        
        ${matchedPackage.description}`,
        type: "package",
        package: matchedPackage
      };
    }
    
    // Check for general questions
    const generalQuestions = [
      {
        question: ['contact', 'phone', 'number', 'reach', 'whatsapp', 'how to contact'],
        answer: "You can reach us at:\n📞 +91-8249608314\n💬 WhatsApp: +91-8249608314\n📧 info@bademiyantours.com",
        type: "contact"
      },
      {
        question: ['price', 'cost', 'how much', 'expensive', 'pricing'],
        answer: "Our tour prices vary based on package type and duration. Most tours range from ₹799 to ₹1999. Could you specify which tour you're interested in?",
        type: "pricing"
      },
      {
        question: ['book', 'booking', 'reserve', 'how to book', 'reservation'],
        answer: "You can book tours through our website or by contacting us directly via WhatsApp or phone. Would you like me to provide contact details?",
        type: "booking"
      },
      {
        question: ['available tours', 'what tours', 'which tours', 'list of tours', 'packages'],
        answer: "We offer various tours including:\n" + 
          tours.slice(0, 5).map(t => `- ${t.title} (${t.location})`).join('\n') +
          "\n\nWould you like details about any specific tour?",
        type: "tour_list"
      },
      {
        question: ['help', 'support', 'assistance', 'what can you do'],
        answer: "I can help with:\n- Tour package details\n- Pricing information\n- Booking process\n- What's included/excluded\n- Contact information\n\nHow may I assist you?",
        type: "help"
      }
    ];
    
    for (const q of generalQuestions) {
      for (const keyword of q.question) {
        if (lowerQuestion.includes(keyword)) {
          return {
            response: q.answer,
            type: q.type
          };
        }
      }
    }
    
    // Default response for out-of-scope questions
    return {
      response: "I specialize in Bademiyan tour information. I can help with:\n- Specific tour packages\n- Pricing\n- What's included/excluded\n- Booking process\n\nTry asking about these or say 'help' for more options!",
      type: "default"
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, user: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const answer = findBestAnswer(input);
      const botMessage = { 
        text: answer.response, 
        user: false,
        type: answer.type,
        package: answer.package || null
      };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
          aria-label="Open chat"
        >
          <FaRobot size={24} />
          <span className="ml-2">Need help?</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-lg overflow-hidden flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Bademiyan Tours Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-blue-200"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto" style={{ maxHeight: '300px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`mb-3 flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${msg.user ? 'bg-blue-100 rounded-tr-none' : 'bg-gray-100 rounded-tl-none'}`}>
                  {msg.text.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                  {msg.type === 'package' && msg.package && (
                    <div className="mt-2">
                      <button 
                        onClick={() => handleQuickQuestion(`What's included in ${msg.package.title}?`)}
                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded mr-1 mb-1"
                      >
                        What's included?
                      </button>
                      <button 
                        onClick={() => handleQuickQuestion(`What's not included in ${msg.package.title}?`)}
                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded mr-1 mb-1"
                      >
                        What's excluded?
                      </button>
                    </div>
                  )}
                  {(msg.type === 'inclusions' || msg.type === 'exclusions') && msg.package && (
                    <div className="mt-2">
                      <button 
                        onClick={() => handleQuickQuestion(`Tell me more about ${msg.package.title}`)}
                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded mr-1 mb-1"
                      >
                        More about this tour
                      </button>
                    </div>
                  )}
                  {msg.type === 'contact' && (
                    <div className="mt-2 flex">
                      <a 
                        href="https://wa.me/918249608314" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white p-1 rounded flex items-center text-xs"
                      >
                        <FaWhatsapp className="mr-1" /> Chat on WhatsApp
                      </a>
                    </div>
                  )}
                  {(msg.type === 'inclusions_unknown' || msg.type === 'exclusions_unknown') && (
                    <div className="mt-2">
                      {tours.slice(0, 3).map(tour => (
                        <button
                          key={tour.id}
                          onClick={() => handleQuickQuestion(
                            msg.type === 'inclusions_unknown' 
                              ? `What's included in ${tour.title}?`
                              : `What's excluded in ${tour.title}?`
                          )}
                          className="text-xs bg-blue-500 text-white px-2 py-1 rounded mr-1 mb-1"
                        >
                          {tour.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Quick Questions */}
          <div className="px-3 py-2 bg-gray-50 border-t">
            <div className="flex flex-wrap gap-1 mb-2">
              <button 
                onClick={() => handleQuickQuestion('What tours do you offer?')}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                Available tours
              </button>
              <button 
                onClick={() => handleQuickQuestion('How much is Golden Triangle Tour?')}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                Tour prices
              </button>
              <button 
                onClick={() => handleQuickQuestion('How to contact Bademiyan?')}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
              >
                Contact info
              </button>
            </div>
            
            {/* Input */}
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about tours..."
                className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                aria-label="Type your question"
              />
              <button 
                onClick={handleSend}
                className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 disabled:bg-blue-300"
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;