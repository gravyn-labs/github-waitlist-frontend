import React, { useCallback, useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/gravyn_logo.svg';
import banner from '../assets/images/LandingBannerv1.svg';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';

import faces from '../assets/images/faces2.svg';
import "./HomePage.css";
import leaves from "../assets/icons/leaves.svg";
import close from "../assets/icons/close.svg";
import Orbiez from "./Orbiez";
import check from "../assets/icons/check.svg";
import NavBar from './NavBar';
import hero from "../assets/images/hero_screen.svg";
import projectmanagement from "../assets/icons/project.svg";
import collaboration from "../assets/icons/collaborations.svg";
import rupee from "../assets/icons/rupee.svg";
import client from "../assets/icons/client.svg";
import kairo from "../assets/icons/kairo.svg";
import integrations from "../assets/icons/integrations.svg";
import twitter from "../assets/icons/twitter.svg"
import linkedin from "../assets/icons/linkedin.svg"

import integration from "../assets/images/integration1.svg"
import kairoFeature from "../assets/images/kairoFeature1.svg"
import kairoEditor from "../assets/images/kairo_editor.png"
import finance_management from "../assets/images/fm2.png"
import project_management from "../assets/images/project_managementv1.png"
import collaboration_feature from "../assets/images/collaboration_feature.png"
import kairo_feature from "../assets/images/kairo_featurev1.png"

import rm from "../assets/images/rm.png"
import milestone from "../assets/images/milestone_finalv5.png"
import taskmanage from "../assets/images/taskmanagev1.png"
import timelinebanner from "../assets/images/timelinebanner.png"
import championsIcons from "../assets/icons/championsvv2.svg";


import { useLocation } from 'react-router-dom';


import { motion, AnimatePresence, time } from 'framer-motion';


import blackhole from "../assets/images/blackhole.svg"
import logo_noise from "../assets/images/logo_noise.png"
import logo_waitlist from "../assets/logo/logo_waitlist.svg"

import text from "../assets/images/text.svg"



import Banner from './Features/Banner';
import { UnifiedWorkspace } from './Features/UnifiedWorkspace';
import WaitlistWrapper from './Sections/WaitlistWrapper';
import { ProjectTypes } from './Sections/ProjectTypes';
import { CollaborationWrapper } from './Sections/CollaborationWrapper';
import { PlanningWrapper } from './Sections/PlanningWrapper';
import { Founding100 } from './Sections/Founding100';
import { Founding100v2 } from './Sections/Founding100v2';
import { Footer } from './Sections/Footer';
import HomeLanding from './HomeLanding';
import NotificationSnackBar from './NotificationSnackBar';


// 🎉 PartyPopper Component
const PartyPopper = ({ trigger = false, duration = 2000, delay = 0 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;

    let animationFrame;
    let stopAfter;
    let hasStarted = false;

    const startBlast = () => {
      hasStarted = true;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const colors = [
        "#F7D488",
        "#D5B4FF",
        "#A88CFF",
        "#FFF7E6",
        "#E6D0FF",
      ];

      const particles = [];
      const numParticles = 120;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < numParticles; i++) {
        const angle = (Math.PI * 2 * i) / numParticles;
        const speed = Math.random() * 6 + 3;
        const size = Math.random() * 6 + 3;

        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 10 - 5,
        });
      }

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.05;
          p.alpha -= 0.015;
          p.rotation += p.rotationSpeed;
          if (p.alpha <= 0) p.alpha = 0;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        });

        if (particles.some((p) => p.alpha > 0)) {
          animationFrame = requestAnimationFrame(draw);
        }
      };

      draw();

      stopAfter = setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.removeEventListener("resize", resizeCanvas);
      }, duration);
    };

    const delayTimeout = setTimeout(startBlast, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (hasStarted) {
        cancelAnimationFrame(animationFrame);
        clearTimeout(stopAfter);
      }
    };
  }, [trigger, duration, delay]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 99,
      }}
    />
  );
};












const ProjectMonoSection = () => {
  return <>
    <div className='project-section-wrapper'>

    </div>
  </>
}

// Face icons for waitlist avatars
const faceImages = [
  require("../assets/images/face2.png"),

  require("../assets/images/face3.png"),
  require("../assets/images/face6.png"),
  require("../assets/images/face8.png"),
  require("../assets/images/face4.png"),
  require("../assets/images/face5.png"),
  require("../assets/images/face9.png"),
];

// Waitlist perks content
const waitlistPerks = [
  {
    heading: "Early Access to the Future of Work",
    detail: "Be among the first to experience Gravyn’s AI-powered unified Work OS."
  },
  {
    heading: "Exclusive Launch Discount",
    detail: "Get a 20% discount reserved for the first 100 subscribers."
  },
  {
    heading: "Become a Gravyn Champion",
    detail: "Influence our roadmap, test features first, and make your voice heard."
  },
  {
    heading: "VIP Access to Events",
    detail: "Enjoy priority invitations to webinars, workshops, and previews."
  },
  {
    heading: "Insider Only Updates",
    detail: "Receive product news, feature drops, and growth tips before anyone else."
  }
];

// Rotating 'Teams' for hero section

// --- Reusable Components ---

export const ShinyText = ({ text, className = '', textSize }) => (
  <div
    style={{
      fontSize: textSize
    }}
    className={`shiny-text ${className}`}>{text}</div>
);

const getWindowWidth = () => {
  // Check if window is defined (for server-side rendering)
  return typeof window !== 'undefined' ? window.innerWidth : 0;
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWidth(getWindowWidth());
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return width;
};


const SectionWrapper = ({ icon, alt, title, description }) => {
  return (
    <div className='section-wrapper plan-section'>
      <div className='section-text-wrapper'>
        <p><img src={icon} alt={alt} /> {title}</p>
        <p>{description}</p>
      </div>
      <div className='section-content'>
        {/* Bento grid or other content would go here */}
      </div>
    </div>
  );
}


// --- Custom Hook to Detect Screen Size ---
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

// --- Main Page Component ---
const HomePage = () => {
  const isDesktop = useMediaQuery('(min-width: 769px)');

  const [bannerVisible, setBannerVisible] = useState(true);
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [targetCount, setTargetCount] = useState(0);



  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("");

  // --- NEW: Define API Base URL ---
  const environment = process.env.NODE_ENV;

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // --- END NEW ---


  const location = useLocation();
  const parentRef = useRef(null);
  const imageRef = useRef(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if the navigation state contains our scroll flag
    if (location.state?.scrollToWaitlist) {
      const waitlistSection = document.getElementById('waitlist-section');
      if (waitlistSection) {
        // Use a short timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
          waitlistSection.scrollIntoView({ behavior: 'smooth' });
          // Optional: Clear the state to prevent re-scrolling on refresh
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]); // This effect runs every time the location state changes



  console.log("Current Environment:", environment);

  if (environment === 'development') {
    // This code runs only when you use 'npm start'
    console.log("Running in development mode.");
    console.log("Development Mode", environment);
    console.log("API MODE", API_BASE_URL)
  } else if (environment === 'production') {
    // This code runs when you use 'npm run build'
    console.log("Running in production mode.");
    console.log("Development Mode", environment);
    console.log("API MODE", API_BASE_URL)
  }
  else if (environment === 'staging') {
    alert('Staging', API_BASE_URL)
  }


  useEffect(() => {
    const fetchWaitlistCount = async () => {
      try {
        // --- MODIFIED: Use API_BASE_URL ---
        const response = await fetch(`${API_BASE_URL}/api/waitlist/count`);
        // --- END MODIFIED ---
        const data = await response.json();
        if (response.ok) {
          setCount(data.count);
          setTargetCount(data.count);
        }
      } catch (error) {
        // You might want to log the API_BASE_URL here for debugging if it fails
        console.error("Error fetching waitlist count:", error);
      }
    };

    fetchWaitlistCount();

    // Optional: Refresh every 10 seconds
    const interval = setInterval(fetchWaitlistCount, 10000);
    return () => clearInterval(interval);
  }, [API_BASE_URL]); // Added API_BASE_URL to dependencies just in case, though it should be constant




  useEffect(() => {
    if (count < targetCount) {
      const diff = targetCount - count;
      const speed = diff > 100 ? 10 : 100;
      const interval = setTimeout(() => {
        setCount(prev => Math.min(prev + Math.ceil(diff / 10), targetCount));
      }, speed);
      return () => clearTimeout(interval);
    }
  }, [count, targetCount]);

  const sharedProps = {
    bannerVisible,
    setBannerVisible,
    badgeVisible,
    setBadgeVisible,
    count,
    targetCount,
    notificationMessage,
    setNotificationMessage,
    showNotification,
    setShowNotification
  };

  return isDesktop ? <DesktopLayout {...sharedProps} /> : <MobileLayout {...sharedProps} />;
};


const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 769);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMobile;
};

export const AlreadyJoined = ({ setAJBanner }) => {
  const isMobile = useIsMobile();

  return (
    <div
      onClick={() => setAJBanner(false)}
      className={`aj-overlay ${isMobile ? "aj-mobile" : "aj-desktop"}`}
    >
      <PartyPopper celebrate={true} duration={4000} delay={0} />

      <div className={`alreadyjoined-wrapper ${isMobile ? "aj-wrapper-mobile" : ""}`}>
        <div className="alreadyjoin-image">
          <img src={blackhole} alt="blackhole" />
          <div className="aj-center-banner"></div>
        </div>

        <div className="alreadyjoin-text">
          <p>You’re Already on the Waitlist!</p>
          <p>
            Looks like you’ve already reserved your spot. Sit back and relax — we’ll reach out
            as soon as it’s your turn to access Gravyn.
          </p>
        </div>
      </div>
    </div>
  );
};

export const OnceJoined = ({ setOJBanner }) => {
  const isMobile = useIsMobile();

  return (
    <div
      onClick={() => {
        setOJBanner(false);
      }}
      className={`aj-overlay ${isMobile ? "aj-mobile" : "aj-desktop"}`}
    >
      <PartyPopper celebrate={true} duration={4000} delay={0} />

      <div className={`alreadyjoined-wrapper ${isMobile ? "aj-wrapper-mobile" : ""}`}>
        <div className="alreadyjoin-image">
          <img src={blackhole} alt="blackhole" />
          <div className="aj-center-banner"></div>
        </div>

        <div className="alreadyjoin-text">
          <p>🎉 You’ve Successfully Joined the Waitlist! 🎉</p>
          <p>
            You’re officially part of the Gravyn early community. We’ll notify you the moment your
            early access is unlocked.
          </p>
        </div>
      </div>
    </div>
  );
};


// ===================================
//      DESKTOP-SPECIFIC LAYOUT
// ===================================
const DesktopLayout = ({ bannerVisible,
  setBannerVisible,
  badgeVisible,
  setBadgeVisible,
  count,
  targetCount,
  notificationMessage,
  setNotificationMessage,
  showNotification,
  setShowNotification }) => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  // --- NEW: Define API Base URL ---
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // --- END NEW ---
  const location = useLocation();
  const parentRef = useRef(null);

  const workspaceRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToSection) {
      // Scroll smoothly to workspace section
      parentRef.current?.scrollIntoView({ behavior: "smooth" });

      // 🧼 Clear the state to prevent future auto-scrolls
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  const imageRef = useRef(null);




  const [celebrate, setCelebrate] = useState(false);

  const handleCelebrate = () => {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 3100); // Reset trigger
  };

  const [ajBanner, setAJBanner] = useState(false);
  const [ojBanner, setOJBanner] = useState(false);
  const [championTierVisibility, setChampionTierVisibility] = useState(false);

  useEffect(() => {
    handleCelebrate();
  }, [])


  return (
    <div style={{
      width: `${getWindowWidth}px`
    }} className="page-wrapper">
      {bannerVisible && (
        <Banner setBadgeVisible={setBadgeVisible} setBannerVisible={setBannerVisible} setChampionTierVisibility={setChampionTierVisibility} />
      )}
      <NavBar />
      <HomeLanding ojBanner={ojBanner} ajBanner={ajBanner} setOJBanner={setOJBanner} setAJBanner={setAJBanner} notificationMessage={notificationMessage} setNotificationMessage={setNotificationMessage} setShowNotification={setShowNotification} />

      <UnifiedWorkspace />


      <PlanningWrapper />

      <CollaborationWrapper />
      <ProjectTypes />


      <WaitlistWrapper
        id="waitlist-section" // <-- ADD THIS ID

        ojBanner={ojBanner} ajBanner={ajBanner} setOJBanner={setOJBanner} setAJBanner={setAJBanner} notificationMessage={notificationMessage} setNotificationMessage={setNotificationMessage} setShowNotification={setShowNotification} />

      <Footer />

      {/*        "You're trying that a bit too fast! Please take a break and try again in an hour."*/}

      {showNotification && notificationMessage !== "" && <NotificationSnackBar open={true} message={notificationMessage} handleClose={() => { setShowNotification(false); setNotificationMessage("") }} />}


      {badgeVisible && <Founding100 isVisible={true} onClose={() => setBadgeVisible(false)} />}
      {ajBanner && <AlreadyJoined setAJBanner={setAJBanner} />}
      {ojBanner && <OnceJoined setOJBanner={setOJBanner} />}
      {championTierVisibility && <Founding100v2 championTierVisibility={championTierVisibility} setChampionTierVisibility={setChampionTierVisibility} />
      }
    </div>
  );
};

// ===================================
//      MOBILE-SPECIFIC LAYOUT
// ===================================
const MobileLayout = ({ bannerVisible,
  setBannerVisible,
  badgeVisible,
  setBadgeVisible,
  count,
  targetCount,
  notificationMessage,
  setNotificationMessage,
  showNotification,
  setShowNotification }) => {
  const [championTierVisibility, setChampionTierVisibility] = useState(false);




  // NEW STATES
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // API URL
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // BANNERS
  const [ajBanner, setAJBanner] = useState(false);
  const [ojBanner, setOJBanner] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        setOJBanner(true);
        setTimeout(() => setOJBanner(false), 5000);
      } else {
        setAJBanner(true);
        setTimeout(() => setAJBanner(false), 5000);
      }
    } catch (err) {
      console.error(err);
      setAJBanner(true);
      setTimeout(() => setAJBanner(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper mobile-layout">

      {bannerVisible && (
        <Banner setBannerVisible={setBannerVisible} setChampionTierVisibility={setChampionTierVisibility} />
      )}

      <NavBar />

      <HomeLanding ojBanner={ojBanner} ajBanner={ajBanner} setOJBanner={setOJBanner} setAJBanner={setAJBanner} notificationMessage={notificationMessage} setNotificationMessage={setNotificationMessage} setShowNotification={setShowNotification} />

      <UnifiedWorkspace />

      <PlanningWrapper />
      <CollaborationWrapper />
      <ProjectTypes />
      <WaitlistWrapper
        id="waitlist-section" // <-- ADD THIS ID

        ojBanner={ojBanner} ajBanner={ajBanner} setOJBanner={setOJBanner} setAJBanner={setAJBanner} notificationMessage={notificationMessage} setNotificationMessage={setNotificationMessage} setShowNotification={setShowNotification} />
      <Footer />


      {showNotification && notificationMessage !== "" && <NotificationSnackBar open={true} message={notificationMessage} handleClose={() => { setShowNotification(false); setNotificationMessage("") }} />
      }


      {/* FIXED: SHOW MOBILE BANNERS */}
      {ajBanner && <AlreadyJoined setAJBanner={setAJBanner} />}
      {ojBanner && <OnceJoined setOJBanner={setOJBanner} />}

      <Founding100v2
        championTierVisibility={championTierVisibility}
        setChampionTierVisibility={setChampionTierVisibility}
      />
    </div>
  );
};


export default HomePage;