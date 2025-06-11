/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Send, X, Phone, MessageCircle, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import tourData1 from '../data/IncredibleOdishaData.json';
import tourData2 from '../data/InternationalToursData.json';
import tourData3 from '../data/IslandofIndia.json';
import tourData4 from '../data/northBengalSikkimData.json';
import tourData5 from '../data/southIndiaToursData.json';
import tourData6 from '../data/westernIndiaToursData.json';

const CircularEnquiryButton = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const whatsappNumber = "+918249608314";
  const defaultMessage = "Hello, I'm interested in your travel services. Please contact me.";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

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
        answer: `You can reach us at:\n📞 ${whatsappNumber}\n💬 WhatsApp: ${whatsappNumber}\n📧 contact@bademiyantours.com`,
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

  // Chatbot state and handlers
  const [chatMessages, setChatMessages] = useState([
    { 
      text: "Namaste! I'm Bademiyan Tours Assistant. Ask me about our tour packages, prices, or anything else!", 
      isBot: true,
      type: "greeting"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChatbotClick = () => {
    setShowChatbot(true);
    setIsOpen(false);
  };

  const handleCloseChatbot = () => {
    setShowChatbot(false);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    
    // Add user message
    const userMessage = { text: chatInput, isBot: false };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const answer = findBestAnswer(chatInput);
      const botMessage = { 
        text: answer.response, 
        isBot: true,
        type: answer.type,
        package: answer.package || null
      };
      setChatMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    // Add user message immediately
    const userMessage = { text: question, isBot: false };
    setChatMessages(prev => [...prev, userMessage]);
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const answer = findBestAnswer(question);
      const botMessage = { 
        text: answer.response, 
        isBot: true,
        type: answer.type,
        package: answer.package || null
      };
      setChatMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const atBottom = scrollHeight - scrollTop <= clientHeight + 5;
        setIsScrolledToBottom(atBottom);
        
        // Prevent wheel event from bubbling when not at bottom
        if (!atBottom) {
          e.stopPropagation();
        }
      }
    };

    const handleWheel = (e) => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        const atBottom = scrollHeight - scrollTop <= clientHeight + 5;
        
        if (!atBottom) {
          e.stopPropagation();
        }
      }
    };

    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
      chatContainer.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        chatContainer.removeEventListener('scroll', handleScroll);
        chatContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Circular Button */}
      <motion.button
        onClick={() => {
          setShowChatbot(false);
          setIsOpen(!isOpen);
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-xl flex items-center justify-center"
      >
        {/* Pulse Animation */}
        {isHovered && !isOpen && !showChatbot && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-amber-400/30 border border-amber-300/20"
          />
        )}

        {/* Icon Animation */}
        <motion.div
          animate={{
            rotate: isOpen ? 90 : 0,
            scale: isHovered ? 1.2 : 1
          }}
        >
          {showChatbot ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Expanded Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute right-0 bottom-16 w-42 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden border border-amber-200/50 dark:border-amber-700/50 shadow-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-400/20 to-amber-500/20 dark:from-amber-600/20 dark:to-amber-700/20 p-3 flex justify-between items-center border-b border-amber-200/30 dark:border-amber-700/30">
              <h3 className="font-semibold text-sm text-gray-800 dark:text-amber-50">
                Travel Assistance
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 dark:text-amber-100 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-3 space-y-3">
              <p className="text-gray-700 dark:text-amber-100 text-xs leading-tight font-medium">
                How would you like to contact us?
              </p>

              {/* WhatsApp Button */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full bg-white/80 hover:bg-white dark:bg-gray-700/50 dark:hover:bg-gray-600/70 border border-amber-200/50 dark:border-amber-700/50 text-gray-800 dark:text-amber-50 px-3 py-2 rounded-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  <Send size={14} className="text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" className="text-amber-600 dark:text-amber-400" />
                </svg>
              </motion.a>

              {/* Call Button */}
              <motion.a
                href={`tel:${whatsappNumber}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full bg-white/80 hover:bg-white dark:bg-gray-700/50 dark:hover:bg-gray-600/70 border border-amber-200/50 dark:border-amber-700/50 text-gray-800 dark:text-amber-50 px-3 py-2 rounded-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium">Call Now</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" className="text-amber-600 dark:text-amber-400" />
                </svg>
              </motion.a>

              {/* MiyanBhai Button */}
              <motion.button
                onClick={handleChatbotClick}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full bg-white/80 hover:bg-white dark:bg-gray-700/50 dark:hover:bg-gray-600/70 border border-amber-200/50 dark:border-amber-700/50 text-gray-800 dark:text-amber-50 px-3 py-2 rounded-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  <Bot size={14} className="text-amber-600 dark:text-amber-400" />
                  <span className="text-sm font-medium">MiyanBhai</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" className="text-amber-600 dark:text-amber-400" />
                </svg>
              </motion.button>

              <p className="text-amber-600 dark:text-amber-400 text-xs text-center pt-1 font-medium">
                Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Panel */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute right-0 bottom-16 w-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden border border-amber-200/50 dark:border-amber-700/50 shadow-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-400/20 to-amber-500/20 dark:from-amber-600/20 dark:to-amber-700/20 p-3 flex justify-between items-center border-b border-amber-200/30 dark:border-amber-700/30">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-gray-800 dark:text-amber-50" />
                <h3 className="font-semibold text-sm text-gray-800 dark:text-amber-50">
                  MiyanBhai Travel Assistant
                </h3>
              </div>
              <button
                onClick={handleCloseChatbot}
                className="text-gray-700 hover:text-gray-900 dark:text-amber-100 dark:hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className="p-3 h-60 overflow-y-auto scrollbar-hide"
              onWheel={(e) => {
                const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
                const atBottom = scrollHeight - scrollTop <= clientHeight + 5;
                
                if (!atBottom) {
                  e.stopPropagation();
                }
              }}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                overscrollBehavior: 'contain'
              }}
            >
              {chatMessages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-3 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-white/70 dark:bg-gray-700/70 text-gray-800 dark:text-amber-50 rounded-tl-none' 
                        : 'bg-amber-500/90 text-white rounded-tr-none'
                    } shadow-sm`}
                  >
                    {message.text.split('\n').map((line, idx) => (
                      <p key={idx} className="text-sm">{line}</p>
                    ))}
                    {message.type === 'package' && message.package && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        <button 
                          onClick={() => handleQuickQuestion(`What's included in ${message.package.title}?`)}
                          className="text-xs bg-white/20 dark:bg-gray-600/70 backdrop-blur-sm border border-white/30 dark:border-gray-500/50 text-gray-800 dark:text-amber-50 px-2 py-1 rounded-full hover:bg-white/40 dark:hover:bg-gray-600 transition-all"
                        >
                          What's included?
                        </button>
                        <button 
                          onClick={() => handleQuickQuestion(`What's not included in ${message.package.title}?`)}
                          className="text-xs bg-white/20 dark:bg-gray-600/70 backdrop-blur-sm border border-white/30 dark:border-gray-500/50 text-gray-800 dark:text-amber-50 px-2 py-1 rounded-full hover:bg-white/40 dark:hover:bg-gray-600 transition-all"
                        >
                          What's excluded?
                        </button>
                      </div>
                    )}
                    {(message.type === 'inclusions' || message.type === 'exclusions') && message.package && (
                      <div className="mt-2">
                        <button 
                          onClick={() => handleQuickQuestion(`Tell me more about ${message.package.title}`)}
                          className="text-xs bg-white/20 dark:bg-gray-600/70 backdrop-blur-sm border border-white/30 dark:border-gray-500/50 text-gray-800 dark:text-amber-50 px-2 py-1 rounded-full hover:bg-white/40 dark:hover:bg-gray-600 transition-all"
                        >
                          More about this tour
                        </button>
                      </div>
                    )}
                    {message.type === 'contact' && (
                      <div className="mt-2">
                        <a 
                          href={whatsappLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-green-500 text-white p-1.5 rounded-full text-xs hover:bg-green-600 transition-colors"
                        >
                          <Send size={12} className="mr-1" /> Chat on WhatsApp
                        </a>
                      </div>
                    )}
                    {(message.type === 'inclusions_unknown' || message.type === 'exclusions_unknown') && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {tours.slice(0, 3).map(tour => (
                          <button
                            key={tour.id}
                            onClick={() => handleQuickQuestion(
                              message.type === 'inclusions_unknown' 
                                ? `What's included in ${tour.title}?`
                                : `What's excluded in ${tour.title}?`
                            )}
                            className="text-xs bg-white/20 dark:bg-gray-600/70 backdrop-blur-sm border border-white/30 dark:border-gray-500/50 text-gray-800 dark:text-amber-50 px-2 py-1 rounded-full hover:bg-white/40 dark:hover:bg-gray-600 transition-all"
                          >
                            {tour.title.split(' ')[0]}...
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/70 dark:bg-gray-700/70 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions and Input */}
            <div className="p-3 bg-white/30 dark:bg-gray-700/50 border-t border-amber-200/30 dark:border-amber-700/30">
              <div className="flex flex-wrap gap-2 mb-3">
                <button 
                  onClick={() => handleQuickQuestion('What tours do you offer?')}
                  className="text-xs bg-white/70 dark:bg-gray-600/70 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50 text-gray-800 dark:text-amber-50 px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-all"
                >
                  Available tours
                </button>
                <button 
                  onClick={() => handleQuickQuestion('How much is Golden Triangle Tour?')}
                  className="text-xs bg-white/70 dark:bg-gray-600/70 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50 text-gray-800 dark:text-amber-50 px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-all"
                >
                  Tour prices
                </button>
                <button 
                  onClick={() => handleQuickQuestion('How to contact Bademiyan?')}
                  className="text-xs bg-white/70 dark:bg-gray-600/70 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50 text-gray-800 dark:text-amber-50 px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-all"
                >
                  Contact info
                </button>
              </div>
              
              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                  placeholder="Ask about tours..."
                  className="flex-1 p-2 bg-white/70 dark:bg-gray-700/70 border border-amber-200/50 dark:border-amber-700/50 rounded-full focus:outline-none focus:ring-1 focus:ring-amber-500/50 text-sm text-gray-800 dark:text-amber-50 placeholder-gray-500 dark:placeholder-amber-300 backdrop-blur-sm"
                />
                <button 
                  onClick={handleChatSend}
                  className="bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 disabled:bg-amber-300 transition-colors flex-shrink-0"
                  disabled={!chatInput.trim()}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx='true'>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        body {
          overscroll-behavior-y: contain;
        }
      `}</style>
    </div>
  );
};

export default CircularEnquiryButton;