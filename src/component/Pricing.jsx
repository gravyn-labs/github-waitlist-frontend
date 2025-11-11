import React, { useState, useMemo } from 'react';
import NavBar from './NavBar'; // Assuming NavBar is in a separate file
import { ShinyText } from './HomePage'; // Assuming ShinyText is in a separate file
import championsIcons from "../assets/icons/championsvv2.svg";
import close from "../assets/icons/close.svg";
import checkIcon from "../assets/icons/check.svg"; // Make sure you have a check icon
import "./Pricing.css";

// --- Static Data (Centralized at the top of the file) ---

const YEARLY_DISCOUNT = 0.2; // 20% discount


const INDIVIDUAL_TIERS = [
  {
    name: "Solo Starter",
    price: 6,
    features: [
      "Task Management",
      "Issue Management",
      "Calendar View",
      "Reminders",
      "File Sharing (2GB total)",
      "Up to 3 Projects",
      "Basic Client Management (2 clients)",
    ],
  },
  {
    name: "Solo Pro",
    price: 14,
    features: [
      "Everything in Free, plus:",
      "Unlimited Projects",
      "Milestone Tracking",
      "KairoAI (Basic)",
      "AI Project Summaries",
      "Meetings",
      "File Sharing (10GB total)",
      "Standard Integrations",
    ],
    highlight: true,
  },
  {
    name: "Solo Plus",
    price: 24,
    features: [
      "Everything in Solo Pro, plus:",
      "Full Milestone Automations",
      "DriftIQ",
      "AITriage (Manual)",
      "KairoAI (Advanced)",
      "Unlimited Clients",
      "3 Guest Collaborators",
    ],
  },
];

const TEAM_TIERS = [
  {
    name: "Starter",
    price: 12,
    teamSize: "For small teams",
    features: [
      "Task Management",
      "Issue Management",
      "Calendar View & Meetings",
      "In-App Messaging",
      "File Sharing (10GB/user)",
      "Standard Integrations",
      "Basic Team RBA",
    ],
  },
  {
    name: "Business",
    price: 22,
    teamSize: "For growing teams",
    features: [
      "Everything in Starter, plus:",
      "Milestone Automations",
      "DriftIQ & AITriage (Manual)",
      "Workload Analysis",
      "KairoAI (Generous)",
      "Full Client Management",
      "Advanced Team RBA",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: null,
    teamSize: "For large organizations",
    features: [
      "Everything in Business, plus:",
      "AITriage (Fully Automatic)",
      "Advanced Security & Compliance",
      "Premium Integrations",
      "Dedicated Account Manager",
      "Service Level Agreement (SLA)",
    ],
  },
];

// --- Pricing Page Component ---

function PricingPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [segment, setSegment] = useState('individuals');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isUserModalSelectionOpen, setUserModalSelectionOpen] = useState(false);

  const plans = useMemo(() => {
    return segment === 'individuals' ? INDIVIDUAL_TIERS : TEAM_TIERS;
  }, [segment]);

  const getDisplayPrice = (basePrice) => {
    if (basePrice === null) return "Custom";
    if (billingCycle === 'yearly') {
      return (basePrice  * (1 - YEARLY_DISCOUNT)).toFixed(0);
    }
    return basePrice;
  };

  const priceSuffix = billingCycle === 'yearly' ? 'per year' : 'Per Month';

  return (
    <div className="page-wrapper">
      {bannerVisible && (
        <div className="banner">
          <div className="banner-content-wrapper">
            <img src={championsIcons} alt="Champions" />
            <p>Be Among the First 100 Subscribers — Join the Gravyn Founding 100!</p>
            <p className="know-more">Know More</p>
          </div>
          <img
            onClick={() => setBannerVisible(false)}
            className="close-icon"
            src={close}
            alt="Close"
          />
        </div>
      )}

      <NavBar />

      <main className="pricing-main">
        {/* Header */}
        <div className="pricing-header-section">
          <div className="pricing-header-text-wrapper ">
            <p>Simple, transparent pricing tailored for your team</p>
            <p>
              Choose the plan that fits your needs with flexible features and
              transparent pricing. Upgrade or adjust your subscription anytime
              as your goals evolve.
            </p>
          </div>
          <div className='pricing-header-right'>
          
            <div className='pricing-header-button-wrapper'>
              <p>Choose the user type that best describes you to personalize your experience</p>
              <div onClick={()=>{setUserModalSelectionOpen(true)}} className='pricing-header-button'>
               
                <p><ShinyText text={`${segment === "individuals" ? "Freelancers & Professionals" : "Teams & Businesses"}`} /></p>
        
              </div>
              {
                isUserModalSelectionOpen && <div className='user-type-selection-wrapper'>
                  <p onClick={() => {
                    setSegment('individuals');
                    setUserModalSelectionOpen(false);
                  }}>Freelancers & Professionals</p>
                  <p onClick={() => {
                    setSegment('team');
                    setUserModalSelectionOpen(false);
                  }}
                  >Teams & Businesses</p>
                </div>
              }

            </div>

          </div>
        </div>

        {/* Billing Toggle */}
        <div className={`plan-toggle-wrapper ${billingCycle === "yearly" ? "active" : ""}`}>
          <p
            className={billingCycle === 'monthly' ? 'active-text' : ''}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </p>
          <div
            className="toggle-wrapper"
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          >
            <div
              className="toggle"
              style={{ left: billingCycle === 'monthly' ? '2.5px' : 'calc(100% - 22.5px)' }}
            />
          </div>
          <p
            className={billingCycle === 'yearly' ? 'active-text' : ''}
            onClick={() => setBillingCycle('yearly')}
          >
            {billingCycle === 'yearly' ? (
              <ShinyText text={`Yearly (Save ${YEARLY_DISCOUNT * 100}%)`} />
            ) : (
              `Yearly (Save ${YEARLY_DISCOUNT * 100}%)`
            )}
          </p>
        </div>

        {/* Segment Toggle */}
        
        {/* <div className="client-type-section">
          <div className="client-type-wrapper">
            <p className="client-type-heading">
              Choose the user type that best describes you to personalize your experience
            </p>
            <div className="client-toggle-buttons">
              <button
                className={`client-type-btn ${segment === "individuals" ? "active" : ""}`}
                onClick={() => setSegment("individuals")}
                aria-pressed={segment === "individuals"}
              >
                Freelancers & Individuals
              </button>
              <button
                className={`client-type-btn ${segment === "teams" ? "active" : ""}`}
                onClick={() => setSegment("teams")}
                aria-pressed={segment === "teams"}
              >
                Teams & Businesses
              </button>
            </div>
          </div>
        </div> */}

        {/* Pricing Cards */}
        <section className="pricing-section">
          <div className="cards-row">
            {plans.map((plan, idx) => (
              <div
                className={`plan-card ${plan.highlight ? "highlight" : ""}`}
                key={idx}
              >
                <div className="plan-header">
                  <p>{plan.name}</p>
                  <p className="pricing">
                    {plan.price === null ? (
                      "Custom"
                    ) : (
                      <>
                        <span className="price-amount">${getDisplayPrice(plan.price)}</span>
                        <span className="price-suffix">
                          {plan.name.includes("Solo")}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                <div className="plan-features">
                  {plan.features.map((feature, i) => (
                    <div className='feature-item-i' key={i}>
                      <img src={checkIcon} alt="check" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>



              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default PricingPage;

