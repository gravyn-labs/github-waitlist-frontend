import React, { useCallback, useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/gravyn_logo.svg';
import banner from '../assets/images/LandingBannerv1.svg';
import faces from '../assets/images/faces.svg';
import "./HomePage.css";
import leaves from "../assets/icons/leaves.svg";
import heart from "../assets/icons/heart.svg";
import close from "../assets/icons/close.svg";
import Orbiez from "./Orbiez";
import check from "../assets/icons/check.svg";
import NavBar from './NavBar';
import championBadge from "../assets/images/championbage.svg";
import hero from "../assets/images/hero_screen.svg";
import projectmanagement from "../assets/icons/project.svg";
import collaboration from "../assets/icons/collaborations.svg";
import rupee from "../assets/icons/rupee.svg";
import client from "../assets/icons/client.svg";
import kairo from "../assets/icons/kairo.svg";
import integrations from "../assets/icons/integrations.svg";
import face1 from "../assets/images/face5.png";
import face2 from "../assets/images/face6.png";
import face3 from "../assets/images/face8.png";

import integration from "../assets/images/integration1.svg"
import kairoFeature from "../assets/images/kairoFeature1.svg"
import kairoEditor from "../assets/images/kairo_editor.png"
import finance_management from "../assets/images/fm2.png"
import project_management from "../assets/images/project_managementv1.png"
import collaboration_feature from "../assets/images/collaboration_feature.png"
import kairo_feature from "../assets/images/kairo_featurev1.png"
import terminal from "../assets/images/terminal.png"
import contiguous from "../assets/images/contiguous.png"

import bullseye from "../assets/icons/bullseye.svg";
import growth from "../assets/icons/growth.svg";
import ai from "../assets/icons/ai.svg";
import unified from "../assets/icons/unified.svg";
import rm from "../assets/images/rm.png"
import milestone from "../assets/images/milestone_finalv5.png"
import taskmanage from "../assets/images/taskmanagev1.png"
import timelinebanner from "../assets/images/timelinebanner.png"
import rbafeature from "../assets/images/rbafeaturev1.png"

import { useLocation } from 'react-router-dom';


import { motion, AnimatePresence, time } from 'framer-motion';


import calendarfeature from "../assets/images/calendarfeaturev1.png"
import filefeature from "../assets/images/files_feature.png"

import blackhole from "../assets/images/blackhole.svg"
import logo_noise from "../assets/images/logo_noise.png"
import bg_noise from "../assets/images/grad.png"
import logo_waitlist from "../assets/logo/logo_waitlist.svg"
import glow_logo from "../assets/images/glow_logo.svg"

import text from "../assets/images/text.svg"


import twitter from "../assets/icons/twitter.svg"
import linkedin from "../assets/icons/linkedin.svg"

import logov1 from "../assets/logo/logov2.svg"
import Banner from './Features/Banner';
import { UnifiedWorkspace } from './Features/UnifiedWorkspace';


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



const ProjectTypes = () => {
  return (
    <section className="project-types-section">


      <div className='project-types-text'>
        {/* Fill the heading and subheading here aws well 
         */}
        <p>Built for the Sprint to the Finish Line, and the Marathon That Never Ends.</p>
        <p>Whether you're shipping a feature or managing a department, Gravyn provides the exact workflow to match the nature of your work.</p>
      </div>

      {/* =================================== */}
      {/* ====== Two-Column Main Grid ====== */}
      {/* =================================== */}
      <div className="project-types-grid">
        <div className='visual-container'>
          <div className='project-type-header'>
            <div className="decorative-dots">••••••••••</div>
            <h3>For Projects: The Path to Delivery.</h3>
            <p>
              Perfect for work with a defined scope and a clear finish line. Move initiatives sequentially through phases, manage dependencies, and launch on time, every time.            </p>
          </div>
          <div className='project-type-image'>
            <img src={terminal} />

          </div>
        </div>
        <div className='visual-container'>
          <div className='project-type-header'>
            <div className="decorative-dots">••••••••••</div>
            <h3>For Processes: The Rhythm of Operation.</h3>
            <p>
              Ideal for the never-ending work of running a team or a system. Manage a continuous flow of tasks, track performance, and optimize your processes month after month.            </p>
          </div>
          <div className='project-type-image'>
            <img src={contiguous} />
          </div>
        </div>
      </div>

      {/* ====================================== */}
      {/* ====== Four-Column Feature Grid ====== */}
      {/* ====================================== */}
      <div className="feature-callouts-grid">

        <div className="feature-callout">
          <div className="feature-icon"><img src={bullseye} /></div>
          <h4>Precision & Predictability</h4>
          <p>Tools built to keep your fixed-scope projects on time and on budget.</p>
        </div>

        <div className="feature-callout">
          <div className="feature-icon"><img src={growth} /></div>
          <h4>Growth & Retention</h4>
          <p>Tools built to prove your value and grow client relationships over the long term.</p>
        </div>

        <div className="feature-callout">
          <div className="feature-icon"><img src={ai} /></div>
          <h4>AI-Powered Reporting</h4>
          <p>Use Kairo to automatically generate weekly digests and client status updates.</p>
        </div>

        <div className="feature-callout">
          <div className="feature-icon"><img src={unified} /></div>
          <h4>Unified Toolset</h4>
          <p>One platform for projects, clients, and financials. No more scattered data.</p>
        </div>

      </div>
    </section>
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
const rotatingWords = ["Teams", "Freelancers", "Individuals", "Agencies", "Businesses"];

// --- Reusable Components ---

export const ShinyText = ({ text, className = '' }) => (
  <div className={`shiny-text ${className}`}>{text}</div>
);

function DynamicPhrase() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="dynamic-phrase">
      Where Intelligent <span className={fade ? "fade-in" : "fade-out"}>{rotatingWords[index]}</span> Build Brilliant Workflows.
    </p>
  );
}

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

const Founding100 = ({ isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <img className='close-btn' src={close} alt="Close" onClick={onClose} />
      <div className="founding-100-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="f-100-header">
          <Orbiez />
          <img src={championBadge} alt="Founding 100 Badge" />
        </div>
        <div className="f-100-content">
          <div className="f-100-section-first">
            <p>Join the Gravyn Founding 100</p>
          </div>
          <div className="f-100-section">
            <p>
              Become one of the first 100 teams to subscribe to Gravyn and secure your place in our history. The Gravyn Founding 100 is an exclusive, one-time opportunity for our earliest and most passionate supporters.
              <br /><br />
              As a member, you're not just a customer—you're a core part of our founding story. Your early support grants you exclusive lifetime benefits and a direct line to our team, helping us shape the future of project management.
            </p>
          </div>
          <div className="f-100-section">
            <div className="benefits-grid">
              <div className="benefit-item">
                <p className="benefit-title"><img src={check} alt="Checkmark" /> A Lifetime 20% Discount</p>
                <p className="benefit-description">Receive a permanent 20% discount on your Team plan subscription, for life.</p>
              </div>
              <div className="benefit-item">
                <p className="benefit-title"><img src={check} alt="Checkmark" /> The "Founding 100" Badge</p>
                <p className="benefit-description">A unique badge will be permanently displayed on your team's profile.</p>
              </div>
              <div className="benefit-item">
                <p className="benefit-title"><img src={check} alt="Checkmark" /> Direct Access to the Founders</p>
                <p className="benefit-description">Get a direct line of communication with our founding team to share your feedback.</p>
              </div>
              <div className="benefit-item">
                <p className="benefit-title"><img src={check} alt="Checkmark" /> Access to Beta Features</p>
                <p className="benefit-description">Be the first to test and use new features before they are released to the public.</p>
              </div>
            </div>
          </div>
          <div className="f-100-section">
            <p>
              This exclusive offer is available to the first 100 teams that subscribe to any Gravyn Team plan. Simply choose a plan that fits your needs, and you'll be automatically enrolled in the Founding 100.
            </p>
          </div>
          <div className="f-100-section">
            <p className="f-100-closing">
              This is more than just a subscription—it's a partnership. We're incredibly excited about what we're building, and we want you to be a part of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
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

const PlanWrapper = () => {
  return (
    <div className='section-wrapper plan-section'>
      <div className='section-text-wrapper'>
        <p><img src={leaves} /> Plan & Execute</p>
        <p>Plan with precision and adapt effortlessly to shifting priorities</p>
      </div>
      <div className='section-content'>
        {/* Bento grid or other content would go here */}
        <div className='plan-grid-view'>
          <div className='plan-gird-c plan-gird-c1'>
            <div className='plan-gird-cr plan-gird-c1-r1'>
              <div className='plan-grid-cr-image'>
                <img src={rm} />
              </div>
              <div className='plan-grid-cr-text plan-grid-c1r1-text'>
                <p>Allocate Your Team with Confidence.</p>
                <p>Get a bird's-eye view of your entire team's workload and capacity. Balance assignments, prevent burnout, and ensure the right people are on the right projects.</p>
              </div>
            </div>
            <div className='plan-gird-cr plan-gird-c1-r2'>
              <div className='plan-grid-cr-image'>
                <img src={taskmanage} />
              </div>
              <div className='plan-grid-cr-text plan-grid-c1r1-text'>
                <p>Your Team's Command Center.</p>
                <p>Transform chaos into clarity. Organize work with lists, Kanban boards, and calendars, and give every team member a clear view of their priorities so they can focus on what matters most.</p>
              </div>
            </div>
          </div>
          <div className='plan-gird-c plan-gird-c2'>
            <div className='plan-gird-cr plan-gird-c2-r1'>
              <div className='plan-grid-cr-image'>
                <img src={timelinebanner} />
              </div>
              <div className='plan-grid-cr-text plan-grid-c1r1-text'>
                <p>Visualize the Path Forward.</p>
                <p>Build beautiful, interactive Gantt charts in seconds. Map out project phases and see how every piece of work connects to the bigger picture.</p>
              </div>
            </div>
            <div className='plan-gird-cr plan-gird-c2-r2'>
              <div className='plan-grid-cr-image'>
                <img src={milestone} />
              </div>
              <div className='plan-grid-cr-text plan-grid-c1r1-text'>
                <p>Turn Milestones into Momentum.</p>
                <p>Don't just track key dates, automate them. Create powerful workflows that trigger when a milestone is completed, from notifying stakeholders to automatically kicking off the next phase of your project.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CollaborationWrapper = () => {
  return (
    <div className='section-wrapper collaboration-section'>
      <div className='section-text-wrapper'>
        <p><img src={heart} /> Collabration</p>
        <p>Connect seamlessly and foster creativity in teams and clients</p>
      </div>
      <div className='section-content'>
        {/* Bento grid or other content would go here */}

        <div className='collaborate-grid-view'>
          <div className='collaborate-gird-c plan-gird-c1'>
            <div className='collaborate-gird-cr collaborate-gird-c1-r1'>
              <div className='collaborate-grid-cr-image'>
                <img src={calendarfeature} />
              </div>
              <div className='collaborate-grid-cr-text collaborate-grid-c1r1-text'>
                <p>Your Team's Shared Schedule.</p>
                <p>See all your project deadlines, key milestones, and team meetings in one unified calendar. Schedule events, check availability, and ensure everyone is on the same page.</p>
              </div>
            </div>
            <div className='collaborate-gird-cr collaborate-gird-c1-r2'>
              <div className='collaborate-grid-cr-image'>
                <img src={filefeature} />
              </div>
              <div className='collaborate-grid-cr-text collaborate-grid-c1r1-text'>
                <p>Your Files, Finally Organized.</p>
                <p>Attach assets, documents, and designs directly to the work they relate to, creating a central, version-controlled library for every project.</p>
              </div>
            </div>
          </div>
          <div className='collaborate-gird-c collaborate-gird-c2'>
            <div className='collaborate-gird-cr collaborate-gird-c2-r1'>
              <div className='collaborate-grid-cr-image'>
                <img src={rbafeature}/>
              </div>
              <div className='collaborate-grid-cr-text collaborate-grid-c1r1-text'>
                <p>Clarity and Control for Everyone.</p>
                <p>clear roles and permissions for your team members, clients, and freelancers. Role-Based Access (RBA) ensures everyone has access to exactly what they need—and nothing they don't.</p>
              </div>
            </div>
            <div className='collaborate-gird-cr collaborate-gird-c2-r2'>
              <div className='collaborate-grid-cr-image'>
              </div>
              <div className='collaborate-grid-cr-text collaborate-grid-c1r1-text'>
                <p>Conversations with Context.</p>
                <p>Ditch the scattered threads and email chains. Have focused, threaded discussions directly on tasks, files, or documents, so every conversation is automatically organized and easy to find later.</p>
              </div>
            </div>
          </div>
        </div>
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

  // --- NEW: Define API Base URL ---
  const environment = process.env.NODE_ENV;

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // --- END NEW ---


  const location = useLocation();
  const parentRef = useRef(null);
  const imageRef = useRef(null);
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    // Your join waitlist logic
  };

  // Scroll when coming from NavBar
  useEffect(() => {
    if (location.state?.scrollToWaitlist && parentRef.current) {
      setTimeout(() => {
        parentRef.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

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
  };

  return isDesktop ? <DesktopLayout {...sharedProps} /> : <MobileLayout {...sharedProps} />;
};


const AlreadyJoined = ({setAJBanner}) => {
  return <>
    <div onClick={() => {
        setAJBanner(false);
      }} className='aj-overlay'>
      <PartyPopper celebrate={true} duration={4000} delay={0}/>
      <div className='alreadyjoined-wrapper'>
        <div className='alreadyjoin-image'>
          <img src={blackhole} />
          <div className='aj-center-banner'>
          </div>
        </div>
        <div className='alreadyjoin-text'>
          <p>🎉 You’re Already on the Waitlist! 🎉</p>
          <p>Looks like you’ve already reserved your spot.
            Sit back and relax — we’ll reach out as soon as it’s your turn to access Gravyn.</p>
        </div>
      </div>
    </div>
  </>
}

const OnceJoined = ({ setOJBanner }) => {
  return <>
    <div onClick={() => {
      setOJBanner(false);
    }} className='aj-overlay'>
      <PartyPopper celebrate={true} duration={4000} delay={0} />
      <div className='alreadyjoined-wrapper'>
        <div className='alreadyjoin-image'>
          <img src={blackhole} />
          <div className='aj-center-banner'>
          </div>
        </div>
        <div className='alreadyjoin-text'>
          <p>You’ve Successfully Joined the Waitlist!</p>
          <p>You’re officially part of the Gravyn early community.
            We’ll notify you the moment your early access is unlocked.</p>
        </div>
      </div>
    </div>
  </>
}


// ===================================
//      DESKTOP-SPECIFIC LAYOUT
// ===================================
const DesktopLayout = ({ bannerVisible, setBannerVisible, badgeVisible, setBadgeVisible, count, targetCount }) => {

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



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imageRef.current.classList.add("animate-glow");
          } else {
            imageRef.current.classList.remove("animate-glow");
          }
        });
      },
      { threshold: 0.3 } // triggers when 40% of parent is visible
    );

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }

    return () => {
      if (parentRef.current) observer.unobserve(parentRef.current);
    };
  }, []);


  const [celebrate, setCelebrate] = useState(false);

  const handleCelebrate = () => {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 3100); // Reset trigger
  };

  const [ajBanner, setAJBanner] = useState(false);
  const [ojBanner, setOJBanner] = useState(false);


  useEffect(() => {
    handleCelebrate();
  }, [])

  const handleJoinWaitlist = async () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // --- MODIFIED: Use API_BASE_URL ---
      const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      // --- END MODIFIED ---

      const data = await response.json();
      if (response.ok) {
        setEmail("");
        setOJBanner(true);
        setTimeout(() => {
          setOJBanner(false)
        }, 5000)
      } else {
        setAJBanner(true);
        setTimeout(() => {
          setAJBanner(false)
        }, 5000)
      }
    } catch (error) {
      console.error(error);
      setAJBanner(true);
      setTimeout(() => {
        setAJBanner(false)
      }, 5000)
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{
      width: `${getWindowWidth}px`}} className="page-wrapper">
      {bannerVisible && (
        <Banner setBadgeVisible={setBadgeVisible} setBannerVisible = { setBannerVisible }/>
      )}
      <NavBar />
      <div className="landing-page">

        <div className='landing-illustration' />
        <div className="landing-content">
          <div className="landing-content-text-wrapper">
            <DynamicPhrase />
            <p className="hero-subtitle">
              Discover a unified workspace that simplifies project delivery, client collaboration, and finances — all enhanced by powerful AI-driven insights. Join the waitlist for early access and transform how your team works.
            </p>
          </div>
          <div className="waitlist-wrapper">
            <input
              type="email"
              placeholder="Enter Your Email Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleJoinWaitlist} disabled={loading}>
              {loading ? "Joining..." : <ShinyText text={"Join Waitlist"} />}
            </button>
          </div>

          {message && <p className="waitlist-message">{message}</p>}

          <div className="joined-wrapper">
            <img src={faces} alt="joined" />
            <p>
              <span>{targetCount}</span> {targetCount === 1 ? "Person" : "People"} are waiting to step in future.
            </p>
          </div>
          <div className="landing-banner">
            <img src={banner} alt="banner" />
          </div>
        </div>
      </div>

      <UnifiedWorkspace />

      {/* <div className="join-waitlist-wrapper">
        <Orbiez />
        <div className="gradient-overlay" />
        <div className="content-wrapper">
          <div className='content-wrapper-i'>
            <div className='content-wrapper-i-header'>
              <p>Join the Gravyn Waitlist and Unlock Exclusive Benefits.</p>
            </div>
            <div className='content-wrapper-area'>
              {waitlistPerks.map((perk, i) => (
                <div className='content-benefits-wrapper' key={i}>
                  <p><img src={check} alt="check" />{perk.heading}</p>
                  <p>{perk.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='content-wrapper-i'>
            <div className='content-waitlist-form-wrapper'>
              <div className='waitlist-form-header'>
                <img src={logo} alt="logo" />
                <p>Join our journey and get early access</p>
                <p>
                  Join our growing waitlist to unlock exclusive benefits, accelerate your productivity, and get notified the moment we launch.
                </p>
              </div>
              <div className='faces'>
                {faceImages.map((src, i) => (<img src={src} alt="waitlist avatar" key={i} />))}
              </div>
              <div className='waitlist-form-input-wrapper'>
                <input placeholder='Enter your email address' />
                <button>Join Our Waitlist</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <PlanWrapper />
      <CollaborationWrapper />

      <ProjectTypes />


      <div ref={parentRef} className='workspace-join-section-wrapper'>
        <img src={bg_noise} />
        <Orbiez/>
        <div className='workspace-join-central-wrapper'>
          <div className='workspace-join-text-wrapper'>

            <img ref={imageRef} src={glow_logo} />
            <p>Work Smarter. Deliver Faster.</p>
            <p></p>
          </div>
          <div className='workspace-join-input-area'>
            <div className='workspace-join-input-area-i'>
              <div className='workspace-join-input-area-left'>
                <p>Join the waitlist</p>
                <p>Join our waitlist to get notified the moment we launch.</p>
              </div>
              <div className='workspace-join-input-area-i-right'>
                <div className='faces-wrapper'> 
                  <img src={face1} />
                  <img src={face3} />
                  <img src={face2} />
                </div>
              </div>
            </div>
            <div className='workspace-join-input-area-i'>
              <div className='input-area'>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Enter Email Address..."} />
                <button onClick={handleJoinWaitlist}>Join Waitlist</button>
              </div>
            </div>
          </div>
          <div className='followus-wrapper'>
            <p>Follow Us</p>
            <a href='https://www.linkedin.com/company/108729125/admin/dashboard/'><img src={linkedin} /></a>
            <a href=''><img src={twitter} /></a>
          </div>
        </div>
      </div>

      <footer className='footer-wrapper'>
        {/* <img className='footer-blackhole' src={blackhole} /> */}
        <img className='text-image' src={blackhole}/>
        <div className='footer-main'>
          <div className='footer-main-flex'>
            <div className='footer-main-flex-i footer-main-flex-left'>
              <div className='footer-main-flex-left-header'>
                <p><img src={logov1} />Gravyn.</p>
                <p>Let’s redefine how teams work. Gravyn unites planning, collaboration, and execution in one intelligent workspace, built to help you move faster and think smarter.</p>
              </div>
              <div className='followus-wrapper'>
                <a href='https://www.linkedin.com/company/108729125/admin/dashboard/'><img src={linkedin} /></a>
                <a href=''><img src={twitter} /></a>
              </div>
            </div>
            <div className='footer-main-flex-i footer-main-flex-right'>
              <div className='list-main'>
                <p>Platfrom</p>
                <div className='list-main-item'>
                  <p>Home</p>
                  <p>Pricing</p>
                </div>
              </div>
              <div className='list-main'>
                <p>Company</p>
                <div className='list-main-item'>
                  <p>Contact Us</p>
                  <p>Career</p>
                </div>
              </div>
              <div className='list-main'>
                <p>Reach Us</p>
                <div className='list-main-item'>
                  <p>aryan@gravyn.app</p>
                  <p>support@gravyn.app</p>
                  <p>20H, Sector 63, Noida, 201301</p>

                </div>
              </div>
            </div>
          </div>
          <div className='footer-main-bottom'>
            <div className='footer-main-bottom-i'>
              <p>© 2025 Gravyn Labs Private Limited. All rights reserved.</p>
            </div>
            <div className='footer-main-bottom-i'>
              <a>Privacy Poliy</a>
              <a>Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>

      {badgeVisible && <Founding100 isVisible={true} onClose={() => setBadgeVisible(false)} />}
      {ajBanner && <AlreadyJoined setAJBanner={setAJBanner} />}
      {ojBanner && <OnceJoined setOJBanner={ojBanner} />}
    </div>
  );
};

// ===================================
//      MOBILE-SPECIFIC LAYOUT
// ===================================
const MobileLayout = ({ bannerVisible, setBannerVisible, badgeVisible, setBadgeVisible, count, targetCount }) => {

  // NOTE: In a professional setup, you would also implement the API_BASE_URL logic here 
  // and for the mobile waitlist form. For now, we will leave the mobile fetch hardcoded 
  // as it is not currently active with API calls in the provided code block.

  return (
    <div className="page-wrapper mobile-layout">

      {bannerVisible && (
        <div className='banner'>
          <div className='banner-content-wrapper'>
            <p>Join the Gravyn Founding 100!</p>
            <p onClick={() => setBadgeVisible(true)}>Know More</p>
          </div>
          <img onClick={() => setBannerVisible(false)} className='close-icon' src={close} alt="close" />
        </div>
      )}
      <NavBar />
      <div className="landing-page-mobile">
        <Orbiez />
        <div className="landing-content-text-wrapper">
          <DynamicPhrase />
          <p className="hero-subtitle">
            A unified workspace for project delivery, client collaboration, and finances, all enhanced by AI.
          </p>
        </div>
        <div className="waitlist-wrapper">
          <input placeholder="Enter Your Email address..." />
          <button><ShinyText text={"Join Waitlist"} /></button>
        </div>
        <div className="joined-wrapper">
          <img src={faces} alt="joined" />
          <p><span>{count}</span>+ people waiting for the launch.</p>
        </div>
        <div className="landing-banner">
          <img src={hero} alt="banner" />
        </div>

      </div>

      <UnifiedWorkspace />


      <SectionWrapper icon={leaves} alt="leaves" title="Plan and Execute" description="Plan with precision and adapt effortlessly." />
      <SectionWrapper icon={heart} alt="collaboration" title="Collaboration" description="Connect seamlessly and foster creativity." />



      <PlanWrapper />



      <div className="join-waitlist-wrapper-mobile">
        <div className='content-waitlist-form-wrapper'>
          <div className='waitlist-form-header'>
            <img src={logo} alt="logo" />
            <p>Join our journey</p>
            <p>Get notified the moment we launch.</p>
          </div>
          <div className='faces'>
            {faceImages.slice(0, 5).map((src, i) => (<img src={src} alt="waitlist avatar" key={i} />))}
          </div>
          <div className='waitlist-form-input-wrapper'>
            <input placeholder='Enter your email address' />
            <button>Join Our Waitlist</button>
          </div>
        </div>
      </div>
      {badgeVisible && <Founding100 isVisible={true} onClose={() => setBadgeVisible(false)} />}

    </div>
  );
};

export default HomePage;