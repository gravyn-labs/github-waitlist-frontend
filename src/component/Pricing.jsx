import React, { useState, useMemo } from 'react';

import NavBar from './NavBar';
import { ShinyText } from './HomePage';

import championsIcons from "../assets/icons/championsvv2.svg";
import close from "../assets/icons/close.svg";
import checkIcon from "../assets/icons/check.svg";
import "./Pricing.css";

// ----------- Constants & Pricing Data -----------

const YEARLY_DISCOUNT = 0.2; // 20%

const MARKETS = {
  INDIA: 'india',
  INTERNATIONAL: 'international',
};

const CURRENCY_MAP = {
  [MARKETS.INDIA]: { sign: '₹', label: 'INR', code: 'INR' },
  [MARKETS.INTERNATIONAL]: { sign: '$', label: 'USD', code: 'USD' },
};

// Plans: fully declared here to avoid undefined errors

const INDIVIDUAL_TIERS = {
  india: [
    {
      name: "Solo Starter",
      price: 499,
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
      price: 990,
      highlight: true,
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
    },
    {
      name: "Solo Plus",
      price: 1950,
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
  ],
  international: [
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
      highlight: true,
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
  ],
};

const TEAM_TIERS = {
  india: [
    {
      name: "Starter",
      price: 749,
      teamSize: "For small teams",
      features: [
        "Task Management",
        "Issue Management",
        "Calendar View & Meetings",
        "In-App Messaging",
        "File Sharing (10GB/user)",
        "Standard Integrations",
        "Basic Team RBA",
        "75,000 Tokens per day"
      ],
    },
    {
      name: "Business",
      price: 1549,
      highlight: true,
      teamSize: "For growing teams",
      features: [
        "Everything in Starter, plus:",
        "Milestone Automations",
        "DriftIQ",
        "AITriage (Manual)",
        "Workload Analysis",
        "Kairo.ai",
        "Reminders",
        "Full Client Management",
        "Advanced Team RBA",
        "Priority Email",
        "Standard + Premium Intgeration",
        "1,50,000 Tokens per day"

      ],
    },
    {
      name: "Pro",
      price: 2459,
      teamSize: "For large organizations",
      features: [
        "Everything in Business, plus:",
        "AITriage (Automatic)",
        "Advanced Security & Compliance",
        "Premium Integrations",
        "Dedicated Account Manager",
        "Service Level Agreement (SLA)",
        "White-Label Projects",
        "3,50,000 Tokens per day"
      ],
    },
  ],
  international: [
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
      highlight: true,
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
    },
    {
      name: "Enterprise",
      price: null,
      teamSize: "For large organizations",
      features: [
        "Everything in Business, plus:",
        "AITriage (Automatic)",
        "Advanced Security & Compliance",
        "Premium Integrations",
        "Dedicated Account Manager",
        "Service Level Agreement (SLA)",
        "White-Label Projects"
      ],
    },
  ],
};

// Feature groups with values for extensive table

const FEATURE_GROUPS = [
  {
    title: "File Sharing Limits",
    features: [
      {
        name: "File Sharing",
        values: {
          "Solo Starter": "2GB total",
          "Solo Pro": "10GB total",
          "Solo Plus": "Unlimited",
          "Starter": "10GB / user",
          "Business": "50GB / user",
          "Enterprise": "Unlimited",
        },
      },
    ],
  },
  {
    title: "Project & Client Limits",
    features: [
      {
        name: "Projects",
        values: {
          "Solo Starter": "Up to 3 projects",
          "Solo Pro": "Unlimited",
          "Solo Plus": "Unlimited",
          "Starter": "Unlimited",
          "Business": "Unlimited",
          "Enterprise": "Unlimited",
        },
      },
      {
        name: "Clients",
        values: {
          "Solo Starter": "2 clients",
          "Solo Pro": "Unlimited",
          "Solo Plus": "Unlimited",
          "Starter": "Unlimited",
          "Business": "Unlimited",
          "Enterprise": "Unlimited",
        },
      },
    ],
  },
  {
    title: "AI & Automation Features",
    features: [
      {
        name: "KairoAI",
        values: {
          "Solo Starter": "None",
          "Solo Pro": "Basic",
          "Solo Plus": "Advanced",
          "Starter": "None",
          "Business": "Generous",
          "Enterprise": "Generous",
        },
      },
      {
        name: "AITriage",
        values: {
          "Solo Starter": "None",
          "Solo Pro": "None",
          "Solo Plus": "Manual",
          "Starter": "None",
          "Business": "Manual",
          "Enterprise": "Fully Automatic",
        },
      },
      {
        name: "DriftIQ",
        values: {
          "Solo Starter": "None",
          "Solo Pro": "None",
          "Solo Plus": "Included",
          "Starter": "None",
          "Business": "Included",
          "Enterprise": "Included",
        },
      },
    ],
  },
  {
    title: "Core Features",
    features: [
      "Task Management",
      "Issue Management",
      "Calendar View & Meetings",
      "In-App Messaging",
      "Standard Integrations",
      "Premium Integrations",
    ],
  },
];

// Utility functions

function getDisplayPrice(basePrice, cycle, yearlyDiscount) {
  if (basePrice === null) return "Custom";
  if (cycle === "yearly") {
    return Math.round(basePrice  * (1 - yearlyDiscount));
  }
  return Math.round(basePrice);
}

function hasFeature(plan, featureName) {
  return plan.features.some((f) =>
    f.toLowerCase().includes(featureName.toLowerCase())
  );
}

// Main Component

function PricingPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [market, setMarket] = useState(MARKETS.INDIA);
  const [segment, setSegment] = useState("individuals");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isUserModalSelectionOpen, setUserModalSelectionOpen] = useState(false);

  const plans = useMemo(() => {
    return segment === "individuals"
      ? INDIVIDUAL_TIERS[market]
      : TEAM_TIERS[market];
  }, [segment, market]);

  const currency = CURRENCY_MAP[market];

  const priceSuffix = billingCycle === "yearly" ? ` (${currency.code})` : ` (${currency.code})`;

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
              Choose the plan that fits your needs with flexible features and transparent pricing. Upgrade or adjust your subscription anytime as your goals evolve.
            </p>
          </div>
          <div className="pricing-header-right">
            <div className="pricing-header-button-wrapper">
              <p>Choose the user type that best describes you to personalize your experience</p>
              <div onClick={() => setUserModalSelectionOpen(true)} className="pricing-header-button">
                <p>
                  <ShinyText text={`${segment === "individuals" ? "Freelancers & Professionals" : "Teams & Businesses"}`} />
                </p>
              </div>
              {isUserModalSelectionOpen && (
                <div className="user-type-selection-wrapper">
                  <p
                    onClick={() => {
                      setSegment("individuals");
                      setUserModalSelectionOpen(false);
                    }}
                  >
                    Freelancers & Professionals
                  </p>
                  <p
                    onClick={() => {
                      setSegment("team");
                      setUserModalSelectionOpen(false);
                    }}
                  >
                    Teams & Businesses
                  </p>
                </div>
              )}
            </div>
            {/* Market Selection */}
            <div className="pricing-market-header">
              <div>
                <button
                  onClick={() => setMarket(MARKETS.INDIA)}
                  className={market === MARKETS.INDIA ? "active" : ""}
                >
                  India (INR)
                </button>
                <button
                  onClick={() => setMarket(MARKETS.INTERNATIONAL)}
                  className={market === MARKETS.INTERNATIONAL ? "active" : ""}
                >
                  International (USD)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className={`plan-toggle-wrapper ${billingCycle === "yearly" ? "active" : ""}`}>
          <p
            className={billingCycle === "monthly" ? "active-text" : ""}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </p>
          <div
            className="toggle-wrapper"
            onClick={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          >
            <div
              className="toggle"
              style={{
                left: billingCycle === "monthly" ? "2.5px" : "calc(100% - 22.5px)",
              }}
            />
          </div>
          <p
            className={billingCycle === "yearly" ? "active-text" : ""}
            onClick={() => setBillingCycle("yearly")}
          >
            {billingCycle === "yearly" ? (
              <ShinyText text={`Yearly (Save ${YEARLY_DISCOUNT * 100}%)`} />
            ) : (
              `Yearly (Save ${YEARLY_DISCOUNT * 100}%)`
            )}
          </p>
        </div>

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
                  {/* <p>{plan.teamSize}</p> */}
                  <p className="pricing">
                    {plan.price === null ? (
                      "Custom"
                    ) : (
                      <>
                        <span className="price-amount">
                          {currency.sign}
                          {getDisplayPrice(plan.price, billingCycle, YEARLY_DISCOUNT)}
                        </span>
                        <span className="price-suffix">{priceSuffix}</span>
                      </>
                    )}
                  </p>
                </div>
                <div className="plan-features">
                  {plan.features.map((feature, i) => (
                    <div className="feature-item-i" key={i}>
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
