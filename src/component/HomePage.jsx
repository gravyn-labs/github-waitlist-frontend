import React, { useCallback, useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/gravyn_logo.svg';
import banner from '../assets/images/LandingBannerv1.svg';
import faces from '../assets/images/faces.svg';
import "./HomePage.css";
import leaves from "../assets/icons/leaves.svg";
import heart from "../assets/icons/heart.svg";
import championsIcons from "../assets/icons/championsvv2.svg";
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
import face1 from "../assets/images/face2.png";
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

import styles from "./CollaborationComp.module.css"

import { motion, AnimatePresence, time } from 'framer-motion';


import calendarfeature from "../assets/images/calendarfeaturev1.png"
import filefeature from "../assets/images/files_feature.png"





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


// --- Your Feature Components ---
// You will create a separate component for each feature's visual
const CollaborationComp = () => {
  // This is the animated infographic for Collaboration
  return (
    <div className={styles['collaboration-comp']}>
      <img src={collaboration_feature} />
    </div>
  );
};

const AiComp = () => {
  return <>
    <div className={styles['kairo-feature']}>
      <img src={kairo_feature} />
    </div>
  </>
}

const FinancesComp = () => {
  return <>
    <div className={styles['finance-feature']}>
      <img src={finance_management} />
    </div>
  </>
}


const ProjectManagementComp = () => {
  return <>
    <div className={styles['project-feature']}>
      <img src={project_management} />
    </div>
  </>
}

const IntegrationsComp = () => {
  return <>
    <div className={styles['integration-feature']}>
      <img src={integration} />
    </div>
  </>
}







// --- Data Configuration ---
const coreFeatures = [
  {
    id: 'projects',
    icon: projectmanagement,
    component: <ProjectManagementComp />, // Replace with <ProjectManagementComp />
    title: 'Project Management',
    description: 'Plan, track, and deliver projects on time. Use timelines, Kanban boards, and lists to manage your work, your way.'
  },
  {
    id: 'collaboration',
    icon: collaboration,
    component: <CollaborationComp />,
    title: 'Collaboration',
    description: 'Keep your team in sync. Link conversations to tasks, share files, and centralize all project communication.'
  },
  {
    id: 'finances',
    icon: rupee,
    component: <FinancesComp />, // Replace with <FinancesComp />
    title: 'Finances',
    description: 'Track budgets, log time, and manage invoices without ever leaving your workspace. Get a clear view of every project\'s financial health.'
  },
  {
    id: 'clients',
    icon: client,
    component: <CollaborationComp />, // Replace with <ClientComp />
    title: 'Client Management',
    description: 'From onboarding to reporting, deliver a world-class client experience with branded portals and automated status updates.'
  },
  {
    id: 'ai',
    icon: kairo,
    component: <AiComp />, // Replace with <AiComp />
    title: 'Kairo Copilot',
    description: 'Let our AI automate summaries, flag risks, and provide predictive insights, so you can focus on strategic work.'
  },
  {
    id: 'integrations',
    icon: integrations,
    component: <IntegrationsComp />, // Replace with <IntegrationsComp />
    title: 'Integrations',
    description: 'Connect Gravyn to the tools you already use, from Slack to GitHub, creating a truly unified command center.'
  },
];

// --- Main Component ---
const UnifiedWorkspace = () => {
  // Default to the first feature in the array
  const [activeFeatureId, setActiveFeatureId] = useState(coreFeatures[0].id);

  // Find the component to render based on the active ID
  const activeComponent = coreFeatures.find(f => f.id === activeFeatureId)?.component;

  return (
    <section className="unified-workspace-section">
      <div className="features-header">
        <h2>From Scattered to Seamless.</h2>
        <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
      </div>

      <div className="workspace-grid">
        {/* --- Left Side: The Visual --- */}
        <div className="workspace-visual">
          <div className='workspace-visual-header'>
            {/* You can add a dynamic header here if you wish */}
          </div>
          <div className='mock-diagonal' />

          <div className="mock-ui-placeholder">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeatureId} // The key tells AnimatePresence when to switch
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                // This div will stretch to fill the component-wrapper
                style={{ width: '100%', height: '100%' }}
              >
                {activeComponent}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- Right Side: The Feature Grid --- */}
        <div className="workspace-features">
          <div className="features-grid">
            {coreFeatures.map(feature => (
              <div
                key={feature.id}
                className={`feature-item ${activeFeatureId === feature.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeatureId(feature.id)}
              >
                <div className="feature-icon"><img src={feature.icon} alt={feature.title} /></div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
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
                <p>Allocate Your Team with Confidence.</p>
                <p>Get a bird's-eye view of your entire team's workload and capacity. Balance assignments, prevent burnout, and ensure the right people are on the right projects.</p>
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
              </div>
              <div className='collaborate-grid-cr-text collaborate-grid-c1r1-text'>
                <p>Visualize the Path Forward.</p>
                <p>Build beautiful, interactive Gantt charts in seconds. Map out project phases and see how every piece of work connects to the bigger picture.</p>
              </div>
            </div>
            <div className='collaborate-gird-cr collaborate-gird-c2-r2'>
              <div className='collaborate-grid-cr-image'>
              </div>
              <div className='collaborate-grid-cr-text collaborate-grid-c1r1-text'>
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
  // This will pick up the URL from .env.development or .env.production
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // --- END NEW ---

  // Example in any component or utility file:

  const environment = process.env.NODE_ENV;

  console.log("Current Environment:", environment);

  if (environment === 'development') {
    // This code runs only when you use 'npm start'
    alert("Yes development")
    console.log("Running in development mode.");
  } else if (environment === 'production') {
    // This code runs when you use 'npm run build'
    console.log("Running in production mode.");
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
        setMessage("🎉 You’re on the waitlist! We’ll keep you updated.");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{
      width: `${getWindowWidth}px`
    }} className="page-wrapper">
      {bannerVisible && (
        <div className='banner'>
          <div className='banner-content-wrapper'>
            <img src={championsIcons} alt="champions" />
            <p>Be Among the First 100 Subscribers — Join the Gravyn Founding 100!</p>
            <p onClick={() => setBadgeVisible(true)}>Know More</p>
          </div>
          <img onClick={() => setBannerVisible(false)} className='close-icon' src={close} alt="close" />
        </div>
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
      <ProjectTypes />

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
      {badgeVisible && <Founding100 isVisible={true} onClose={() => setBadgeVisible(false)} />}
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