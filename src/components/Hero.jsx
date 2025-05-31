/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TravelDestinationsShowcase = () => {
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
  const [detailsEven, setDetailsEven] = useState(true);
  const animationRef = useRef(null);
  const isAnimating = useRef(false); // Added to prevent spamming

  const data = [
    {
      place: 'Switzerland Alps',
      title: 'SAINT',
      title2: 'ANTONIEN',
      description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop'
    },
    {
      place: 'Japan Alps',
      title: 'NANGANO',
      title2: 'PREFECTURE',
      description: 'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2670&auto=format&fit=crop'
    },
    {
      place: 'Sahara Desert - Morocco',
      title: 'MARRAKECH',
      title2: 'MEROUGA',
      description: 'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
      image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=2670&auto=format&fit=crop'
    },
    {
      place: 'Sierra Nevada - USA',
      title: 'YOSEMITE',
      title2: 'NATIONAL PARK',
      description: 'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2670&auto=format&fit=crop'
    },
    {
      place: 'Tarifa - Spain',
      title: 'LOS LANCES',
      title2: 'BEACH',
      description: 'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2670&auto=format&fit=crop'
    },
    {
      place: 'Cappadocia - Turkey',
      title: 'Göreme',
      title2: 'Valley',
      description: 'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
      image: 'https://images.unsplash.com/photo-1548588681-adf41d474533?q=80&w=2670&auto=format&fit=crop'
    }
  ];

  // Refs for DOM elements
  const paginationRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const coverRef = useRef(null);
  const detailsEvenRef = useRef(null);
  const detailsOddRef = useRef(null);
  const cardRefs = useRef([]);
  const cardContentRefs = useRef([]);
  const sliderItemRefs = useRef([]);
  const progressForegroundRef = useRef(null);

  const getCardRef = (index) => cardRefs.current[index];
  const getCardContentRef = (index) => cardContentRefs.current[index];
  const getSliderItemRef = (index) => sliderItemRefs.current[index];

  // Initialize the showcase
  const init = () => {
    const active = order[0];
    const rest = order.slice(1);
    const detailsActive = detailsEven ? detailsEvenRef.current : detailsOddRef.current;
    const detailsInactive = detailsEven ? detailsOddRef.current : detailsEvenRef.current;
    const { innerHeight: height, innerWidth: width } = window;
    const offsetTop = height - 430;
    const offsetLeft = width - 830;
    const cardWidth = 200;
    const cardHeight = 300;
    const gap = 40;
    const numberSize = 50;
    const ease = "sine.inOut";

    // Set initial positions
    gsap.set(paginationRef.current, {
      top: offsetTop + 330,
      left: offsetLeft,
      y: 200,
      opacity: 0,
      zIndex: 60,
    });

    gsap.set(getCardRef(active), {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });

    gsap.set(getCardContentRef(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });

    if (detailsInactive) {
      gsap.set(detailsInactive.querySelector('.text'), { y: 100 });
      gsap.set(detailsInactive.querySelector('.title-1'), { y: 100 });
      gsap.set(detailsInactive.querySelector('.title-2'), { y: 100 });
      gsap.set(detailsInactive.querySelector('.desc'), { y: 50 });
      gsap.set(detailsInactive.querySelector('.cta'), { y: 60 });
    }

    gsap.set(progressForegroundRef.current, {
      width: 500 * (1 / order.length) * (active + 1),
    });

    rest.forEach((i, index) => {
      gsap.set(getCardRef(i), {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        y: offsetTop,
        width: cardWidth,
        height: cardHeight,
        zIndex: 30,
        borderRadius: 10,
      });

      gsap.set(getCardContentRef(i), {
        x: offsetLeft + 400 + index * (cardWidth + gap),
        zIndex: 40,
        y: offsetTop + cardHeight - 100,
      });

      gsap.set(getSliderItemRef(i), { x: (index + 1) * numberSize });
    });

    gsap.set(indicatorRef.current, { x: -window.innerWidth });
    const startDelay = 0.6;

    gsap.to(coverRef.current, {
      x: width + 400,
      delay: 0.5,
      ease,
      onComplete: () => {
        setTimeout(() => {
          loop();
        }, 500);
      },
    });

    rest.forEach((i, index) => {
  gsap.to(getCardRef(i), {
    x: offsetLeft + index * (cardWidth + gap),
    zIndex: 30,
    delay: startDelay + (0.05 * index), // Fixed: combined delays
    ease,
  });

  gsap.to(getCardContentRef(i), {
    x: offsetLeft + index * (cardWidth + gap),
    zIndex: 40,
    delay: startDelay + (0.05 * index), // Fixed: combined delays
    ease,
  });
});

    gsap.to(paginationRef.current, { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
  };

  // Auto-play loop
  const loop = () => {
    if (animationRef.current) return;

    animationRef.current = setInterval(() => {
      step();
    }, 5000);
  };

  // Navigation step
  const step = (backward = false) => {
    // Prevent spamming during animation
    if (isAnimating.current) return;
    isAnimating.current = true;

    setOrder(prevOrder => {
      const newOrder = backward ?
        [prevOrder[prevOrder.length - 1], ...prevOrder.slice(0, -1)] :
        [...prevOrder.slice(1), prevOrder[0]];

      animateStep(newOrder, backward);
      return newOrder;
    });

    setDetailsEven(prev => !prev);
  };

  // Perform animation step
  const animateStep = (newOrder, backward) => {
    const active = newOrder[0];
    const rest = newOrder.slice(1);
    const prv = backward ? newOrder[1] : newOrder[newOrder.length - 1];
    const detailsActive = detailsEven ? detailsOddRef.current : detailsEvenRef.current;
    const detailsInactive = detailsEven ? detailsEvenRef.current : detailsOddRef.current;
    const { innerHeight: height, innerWidth: width } = window;
    const offsetTop = height - 430;
    const offsetLeft = width - 830;
    const cardWidth = 200;
    const cardHeight = 300;
    const gap = 40;
    const numberSize = 50;
    const ease = "sine.inOut";

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });

    if (detailsActive) {
      gsap.to(detailsActive.querySelector('.text'), { y: 0, delay: 0.1, duration: 0.7, ease });
      gsap.to(detailsActive.querySelector('.title-1'), { y: 0, delay: 0.15, duration: 0.7, ease });
      gsap.to(detailsActive.querySelector('.title-2'), { y: 0, delay: 0.15, duration: 0.7, ease });
      gsap.to(detailsActive.querySelector('.desc'), { y: 0, delay: 0.3, duration: 0.4, ease });
    }

    gsap.set(getCardRef(prv), { zIndex: 10 });
    gsap.set(getCardRef(active), { zIndex: 20 });
    gsap.to(getCardRef(prv), { scale: 1.5, ease });

    gsap.to(getCardContentRef(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });

    gsap.to(getSliderItemRef(active), { x: 0, ease });
    gsap.to(getSliderItemRef(prv), { x: -numberSize, ease });
    gsap.to(progressForegroundRef.current, {
      width: 500 * (1 / newOrder.length) * (active + 1),
      ease,
    });

    gsap.to(getCardRef(active), {
      x: 0,
      y: 0,
      ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCardRef(prv), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });

        gsap.set(getCardContentRef(prv), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });

        gsap.set(getSliderItemRef(prv), { x: rest.length * numberSize });
        gsap.set(detailsInactive, { opacity: 0 });

        if (detailsInactive) {
          gsap.set(detailsInactive.querySelector('.text'), { y: 100 });
          gsap.set(detailsInactive.querySelector('.title-1'), { y: 100 });
          gsap.set(detailsInactive.querySelector('.title-2'), { y: 100 });
          gsap.set(detailsInactive.querySelector('.desc'), { y: 50 });
          gsap.set(detailsInactive.querySelector('.cta'), { y: 60 });
        }

        isAnimating.current = false; // Reset animation flag
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCardRef(i), { zIndex: 30 });
        gsap.to(getCardRef(i), {
          x: xNew,
          y: offsetTop,
          width: cardWidth,
          height: cardHeight,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(getCardContentRef(i), {
          x: xNew,
          y: offsetTop + cardHeight - 100,
          opacity: 1,
          zIndex: 40,
          ease,
          delay: 0.1 * (index + 1),
        });

        gsap.to(getSliderItemRef(i), { x: (index + 1) * numberSize, ease });
      }
    });
  };

  // Preload images
  const loadImages = async () => {
    const promises = data.map(item => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    await Promise.all(promises);
    init();
  };

  useEffect(() => {
    loadImages();

    // Clean up animation interval on unmount
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, []);

  // Add event listeners for window resize
  useEffect(() => {
    const handleResize = () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="travel-showcase">
      <div className="indicator" ref={indicatorRef}></div>
      <div className="cards-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="card"
            ref={el => cardRefs.current[index] = el}
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
        ))}

        {data.map((item, index) => (
          <div
            key={index}
            className="card-content"
            ref={el => cardContentRefs.current[index] = el}
          >
            <div className="content-start"></div>
            <div className="content-place">{item.place}</div>
            <div className="content-title-1">{item.title}</div>
            <div className="content-title-2">{item.title2}</div>
          </div>
        ))}
      </div>

      <div className="details" id="details-even" ref={detailsEvenRef}>
        <div className="place-box">
          <div className="text">{data[order[0]].place}</div>
        </div>
        <div className="title-box-1">
          <div className="title-1">{data[order[0]].title}</div>
        </div>
        <div className="title-box-2">
          <div className="title-2">{data[order[0]].title2}</div>
        </div>
        <div className="desc">
          {data[order[0]].description}
        </div>
        <div className="cta">
          <button className="bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="discover">Discover Location</button>
        </div>
      </div>

      <div className="details" id="details-odd" ref={detailsOddRef} style={{ display: 'none' }}>
        <div className="place-box">
          <div className="text">{data[order[0]].place}</div>
        </div>
        <div className="title-box-1">
          <div className="title-1">{data[order[0]].title}</div>
        </div>
        <div className="title-box-2">
          <div className="title-2">{data[order[0]].title2}</div>
        </div>
        <div className="desc">
          {data[order[0]].description}
        </div>
        <div className="cta">
          <button className="bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="discover">Discover Location</button>
        </div>
      </div>

      <div className="pagination" ref={paginationRef}>
        <div className="arrow arrow-left" onClick={() => step(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div className="arrow arrow-right" onClick={() => step()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className="progress-sub-container">
          <div className="progress-sub-background">
            <div className="progress-sub-foreground" ref={progressForegroundRef}></div>
          </div>
        </div>
        <div className="slide-numbers">
          {data.map((_, index) => (
            <div
              key={index}
              className="item"
              ref={el => sliderItemRefs.current[index] = el}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="cover" ref={coverRef}></div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background-color: #1a1a1a;
          color: rgba(255, 255, 255, 0.87);
          position: relative;
          overflow: hidden;
          font-family: "Inter", sans-serif;
          height: 100vh;
          width: 100vw;
        }
        
        .travel-showcase {
          position: relative;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: #1a1a1a;
          color: rgba(255, 255, 255, 0.87);
        }
        
        .card {
          position: absolute;
          left: 0;
          top: 0;
          background-position: center;
          background-size: cover;
          box-shadow: 6px 6px 10px 2px rgba(0, 0, 0, 0.6);
        }
        
        .card-content {
          position: absolute;
          left: 0;
          top: 0;
          color: rgba(255, 255, 255, 0.87);
          padding-left: 16px;
        }
        
        .content-place {
          margin-top: 6px;
          font-size: 13px;
          font-weight: 500;
        }
        
        .content-title-1,
        .content-title-2 {
          font-weight: 600;
          font-size: 20px;
          font-family: "Oswald", sans-serif;
        }
        
        .content-start {
          width: 30px;
          height: 5px;
          border-radius: 99px;
          background-color: rgba(255, 255, 255, 0.87);
        }
        
        .details {
          z-index: 22;
          position: absolute;
          top: 240px;
          left: 60px;
        }
        
        .details .place-box {
          height: 46px;
          overflow: hidden;
        }
        
        .details .place-box .text {
          padding-top: 16px;
          font-size: 20px;
          position: relative;
        }
        
        .details .place-box .text:before {
          top: 0;
          left: 0;
          position: absolute;
          content: "";
          width: 30px;
          height: 4px;
          border-radius: 99px;
          background-color: white;
        }
        
        .details .title-1,
        .details .title-2 {
          font-weight: 600;
          font-size: 72px;
          font-family: "Oswald", sans-serif;
        }
        
        .details .title-box-1,
        .details .title-box-2 {
          margin-top: 2px;
          height: 100px;
          overflow: hidden;
        }
        
        .details .desc {
          margin-top: 16px;
          width: 500px;
        }
        
        .details .cta {
          width: 500px;
          margin-top: 24px;
          display: flex;
          align-items: center;
        }
        
        .details .cta .bookmark {
          border: none;
          background-color: #ecad29;
          width: 36px;
          height: 36px;
          border-radius: 99px;
          color: white;
          display: grid;
          place-items: center;
          cursor: pointer;
        }
        
        .details .cta .bookmark svg {
          width: 20px;
          height: 20px;
        }
        
        .details .cta .discover {
          border: 1px solid #ffffff;
          background-color: transparent;
          height: 36px;
          border-radius: 99px;
          color: #ffffff;
          padding: 4px 24px;
          font-size: 12px;
          margin-left: 16px;
          text-transform: uppercase;
          cursor: pointer;
        }
        
        nav {
          position: fixed;
          left: 0;
          top: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 36px;
          font-weight: 500;
        }
        
        nav svg {
          width: 20px;
          height: 20px;
        }
        
        nav .svg-container {
          width: 20px;
          height: 20px;
        }
        
        nav > div {
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          font-size: 14px;
        }
        
        nav > div:first-child {
          gap: 10px;
        }
        
        nav > div:last-child {
          gap: 24px;
        }
        
        nav > div:last-child > .active {
          position: relative;
        }
        
        nav > div:last-child > .active:after {
          bottom: -8px;
          left: 0;
          right: 0;
          position: absolute;
          content: "";
          height: 3px;
          border-radius: 99px;
          background-color: #ecad29;
        }
        
        .indicator {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          height: 5px;
          z-index: 60;
          background-color: #ecad29;
        }
        
        .pagination {
          position: absolute;
          left: 0px;
          top: 0px;
          display: inline-flex;
          z-index: 60;
        }
        
        .pagination > .arrow {
          z-index: 60;
          width: 50px;
          height: 50px;
          border-radius: 999px;
          border: 2px solid rgba(255, 255, 255, 0.33);
          display: grid;
          place-items: center;
          cursor: pointer;
        }
        
        .pagination > .arrow:nth-child(2) {
          margin-left: 20px;
        }
        
        .pagination > .arrow svg {
          width: 24px;
          height: 24px;
          stroke-width: 2;
          color: rgba(255, 255, 255, 0.6);
        }
        
        .pagination .progress-sub-container {
          margin-left: 24px;
          z-index: 60;
          width: 500px;
          height: 50px;
          display: flex;
          align-items: center;
        }
        
        .pagination .progress-sub-container .progress-sub-background {
          width: 500px;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.2);
        }
        
        .pagination .progress-sub-container .progress-sub-foreground {
          height: 3px;
          background-color: #ecad29;
        }
        
        .pagination .slide-numbers {
          width: 50px;
          height: 50px;
          overflow: hidden;
          z-index: 60;
          position: relative;
        }
        
        .pagination .slide-numbers .item {
          width: 50px;
          height: 50px;
          position: absolute;
          color: white;
          top: 0;
          left: 0;
          display: grid;
          place-items: center;
          font-size: 32px;
          font-weight: bold;
        }
        
        .cover {
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          background-color: #fff;
          z-index: 100;
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .details {
            left: 20px;
            top: 150px;
            width: 90%;
          }
          
          .details .title-1,
          .details .title-2 {
            font-size: 48px;
          }
          
          .details .desc,
          .details .cta {
            width: 90%;
          }
          
          .pagination .progress-sub-container {
            width: 200px;
          }
          
          .pagination .progress-sub-container .progress-sub-background {
            width: 200px;
          }
          
          nav > div:last-child {
            gap: 12px;
          }
          
          nav {
            padding: 15px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default TravelDestinationsShowcase;