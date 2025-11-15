import React, { useState, useMemo, useEffect } from 'react';
import NavBar from './NavBar';
import { ShinyText } from './HomePage';

import championsIcons from "../assets/icons/championsvv2.svg";
import close from "../assets/icons/close.svg";
import checkIcon from "../assets/icons/check.svg";
import indianFlag from "../assets/icons/indiaflagv1.svg";
import styles from './Pricing.module.css';
import Banner from './Features/Banner';
import { Founding100v2 } from './Sections/Founding100v2';

// ====================================================================================
// 1. UNIFIED PRICING & DISCOUNT ARCHITECTURE
// ====================================================================================

const YEARLY_DISCOUNT_PERCENTAGE = 0.2;
const INTERNATIONAL_PRICE_MULTIPLIER = 1.5;
const USD_TO_INR_RATE = 88.7;

const MARKETS = { INDIA: 'india', INTERNATIONAL: 'international' };
const CURRENCY_MAP = {
  [MARKETS.INDIA]: { sign: '₹', code: 'INR' },
  [MARKETS.INTERNATIONAL]: { sign: '$', code: 'USD' },
};

// SINGLE SOURCE OF TRUTH: All prices are base INR.
const PLANS = {
  individuals: [
    {
      id: "solo_starter",
      name: "Solo Starter",
      basePriceInr: 499,
      suitableFor: "For freelancers & individuals getting started.",
      features: ["Task Management", "Issue Management", "Calendar View", "Reminders", "File Sharing (2GB/Project)", "Up to 3 Projects", "Basic Client Management (2 clients)"],
      discounts: [{ id: "founding100", percentage: 0.3 }]
    },
    {
      id: "solo_pro",
      name: "Solo Pro",
      basePriceInr: 990,
      highlight: true,
      suitableFor: "For professionals managing multiple projects.",
      features: ["Everything in Starter", "Unlimited Projects", "Milestone Tracking", "KairoAI (75k tokens/day)", "AI Project Summaries", "Meetings", "File Sharing (10GB total)", "Standard Integrations"],
      discounts: []
    },
    {
      id: "solo_plus",
      name: "Solo Plus",
      basePriceInr: 1950,
      suitableFor: "For power users who need advanced automation.",
      features: ["Everything in Solo Pro", "Full Milestone Automations", "DriftIQ", "AITriage (Manual)", "KairoAI (150k tokens/day)", "Unlimited Clients", "3 Guest Collaborators"],
      discounts: []
    },
  ],
  team: [
    {
      id: "team_starter",
      name: "Starter",
      basePriceInr: 749,
      suitableFor: "For small teams & startups (5-10 users).",
      features: ["Task Management", "Issue Management", "Calendar View", "Reminders", "In-App Messaging", "File Sharing (2GB/Project)", "Basic Team RBA", "75,000 Tokens per day"],
      discounts: [{ id: "founding100", percentage: 0.2 }]
    },
    {
      id: "team_business",
      name: "Business",
      basePriceInr: 1499,
      highlight: true,
      suitableFor: "For growing businesses that need to scale (10-50).",
      features: ["Everything in Starter", "Milestone Automations", "DriftIQ", "AITriage (Manual)", "Workload Analysis", "Kairo.ai", "Full Client Management", "Advanced Team RBA", "1,50,000 Tokens per day"],
      discounts: [{ id: "founding100", percentage: 0.2 }]
    },
    {
      id: "team_pro",
      name: "Pro",
      basePriceInr: 2499,
      suitableFor: "For large teams & organizations (50+).",
      features: ["Everything in Business", "AITriage (Automatic)", "Advanced Security & Compliance", "Dedicated Account Manager", "Service Level Agreement (SLA)", "2,50,000 Tokens per day"],
      discounts: [{ id: "founding100", percentage: 0.2 }]
    },
  ]
};

// ====================================================================================
// 2. DYNAMIC CALCULATION & RESPONSIVE HOOK
// ====================================================================================

const calculateDisplayPrice = (plan, market, billingCycle, user) => {
  if (plan.basePriceInr === null) return { finalPrice: "Custom", originalPrice: null, appliedDiscount: null };

  let finalPrice = plan.basePriceInr;
  let originalPrice = plan.basePriceInr;
  let appliedDiscount = null;

  const userDiscount = plan.discounts.find(d => user.discounts.includes(d.id));
  if (userDiscount) {
    appliedDiscount = userDiscount;
    finalPrice *= (1 - userDiscount.percentage);
  }

  if (billingCycle === "yearly") {
    originalPrice = finalPrice;
    finalPrice *= (1 - YEARLY_DISCOUNT_PERCENTAGE);
    if (!appliedDiscount) {
      appliedDiscount = { id: 'yearly', percentage: YEARLY_DISCOUNT_PERCENTAGE };
    }
  }

  if (market === MARKETS.INTERNATIONAL) {
    finalPrice = (finalPrice * INTERNATIONAL_PRICE_MULTIPLIER) / USD_TO_INR_RATE;
    originalPrice = (originalPrice * INTERNATIONAL_PRICE_MULTIPLIER) / USD_TO_INR_RATE;
  }

  const displayOriginalPrice = Math.round(originalPrice) > Math.round(finalPrice) ? Math.round(originalPrice) : null;

  return {
    finalPrice: Math.round(finalPrice),
    originalPrice: displayOriginalPrice,
    appliedDiscount,
  };
};

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

// ====================================================================================
// 3. VIEW-SPECIFIC CHILD COMPONENTS
// ====================================================================================

const DesktopPricingView = ({ plans, currency, bannerVisible, setBannerVisible, billingCycle, market, user, setUser, setMarket, segment, setSegment, setBillingCycle, isUserModalOpen, setUserModalOpen }) => {
  const [championTierVisibility, setChampionTierVisibility] = useState(false);

  return(
  <div className={styles['page-wrapper']}>
    {bannerVisible && (
      <Banner setBannerVisible={setBannerVisible} setChampionTierVisibility={setChampionTierVisibility}/>
    )}

    <NavBar />

    <main className={styles['pricing-main']}>
      <div className={styles['pricing-header-section']}>
        <div className={styles['pricing-header-text-wrapper']}>
          <p>Simple, transparent pricing for your team</p>
          <p>Choose the plan that fits your needs. Upgrade, downgrade, or adjust anytime.</p>
        </div>
        <div className={styles['market-toggle-container']}>
          <div className={styles['market-toggle-wrapper']}>
            <div className={`${styles['market-toggle-option']} ${market === MARKETS.INDIA ? styles['active'] : ''}`} onClick={() => setMarket(MARKETS.INDIA)}>
              <img src={indianFlag} alt="Indian Flag" className={styles['flag-icon']} /> India (INR)
            </div>
            <div className={`${styles['market-toggle-option']} ${market === MARKETS.INTERNATIONAL ? styles['active'] : ''}`} onClick={() => setMarket(MARKETS.INTERNATIONAL)}>
              🌍 International (USD)
            </div>
            <div className={styles['market-toggle-pill']} style={{ transform: market === MARKETS.INDIA ? 'translateX(0%)' : 'translateX(100%)' }} />
          </div>
        </div>
      </div>

      <div className={styles['pricing-controls-area']}>


        <div className={styles['pricing-header-footer']}>
          <div className={styles['pricing-header-button-wrapper']}>
            <p>Choose the user type that best describes you</p>
            <div onClick={() => setUserModalOpen(true)} className={styles['pricing-header-button']}>
              <p><ShinyText text={segment === "individuals" ? "For Individuals" : "For Teams"} /></p>
            </div>
            {isUserModalOpen && (
              <div className={styles['user-type-selection-wrapper']}>
                <p onClick={() => { setSegment("individuals"); setUserModalOpen(false); }}>For Freelancers</p>
                <p onClick={() => { setSegment("team"); setUserModalOpen(false); }}>For Teams</p>
              </div>
            )}
          </div>
          <div className={`${styles['plan-toggle-wrapper']} ${billingCycle === 'yearly' ? styles['active'] : ''}`}>
            <p className={billingCycle === 'monthly' ? styles['active-text'] : ''} onClick={() => setBillingCycle('monthly')}>Monthly</p>
            <div className={styles['toggle-wrapper']} onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
              <div className={styles['toggle']} style={{ left: billingCycle === 'monthly' ? '2.5px' : 'calc(100% - 22.5px)' }} />
            </div>
            <p className={billingCycle === 'yearly' ? styles['active-text'] : ''} onClick={() => setBillingCycle('yearly')}>
              {billingCycle === 'yearly' ? <ShinyText text={`Yearly (Save 20%)`} /> : `Yearly (Save 20%)`}
            </p>
          </div>
        </div>
      </div>

      <section className={styles['pricing-section']}>
        <div className={styles['founding100-wrapper']}>
          <ShinyText text={"Exclusive 20% Discounts for Founding 100"} textSize={13} />
        </div>
        <div className={styles['cards-row']}>
          {plans.map(plan => {
            const { finalPrice, originalPrice, appliedDiscount } = calculateDisplayPrice(plan, market, billingCycle, user);
            return (
              <div className={`${styles['plan-card']} ${plan.highlight ? styles['highlight'] : ''}`} key={plan.id}>
                {/* {appliedDiscount && (
                  <div className={styles['discount-badge']}>
                    {appliedDiscount.id === 'founding100' ? "Founding 100!" : `Save ${appliedDiscount.percentage * 100}%`}
                  </div>
                )} */}
                <div className={styles['plan-header']}>
                  <p className={styles['plan-name']}>{plan.name}</p>
                  <div className={styles['pricing']}>
                    {originalPrice && (
                      <span className={styles['original-price']}>{currency.sign}{originalPrice}</span>
                    )}
                    <span className={styles['price-amount']}>{currency.sign}{finalPrice}</span>
                  </div>
                </div>
                <div className={styles['plan-subs']}><p>Billed {billingCycle}, per user</p></div>
                <div className={styles['perks-heading']}><p>PERKS INCLUDED</p></div>
                <div className={styles['plan-features']}>
                  {plan.features.map((feature, i) => (
                    <div className={styles['feature-item-i']} key={i}>
                      <img src={checkIcon} alt="check" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>


      </main>
      
      {championTierVisibility && <Founding100v2 setChampionTierVisibility={setChampionTierVisibility} />}

  </div>

)};

const MobilePricingView = ({ plans, currency, bannerVisible, setBannerVisible, billingCycle, market, user, setUser, setMarket, segment, setSegment, setBillingCycle, isUserModalOpen, setUserModalOpen }) => {
  const [openPlan, setOpenPlan] = useState(plans.find(p => p.highlight)?.id || plans[0]?.id);
  const [championTierVisibility, setChampionTierVisibility] = useState(false);

  return (

    <div className={styles['page-wrapper']}>
      {bannerVisible && (
        <Banner setBannerVisible={setBannerVisible} setChampionTierVisibility={setChampionTierVisibility}/>
      )}

      <NavBar />

      <main className={styles['pricing-main']}>
        <div className={styles['pricing-header-section']}>
          <div className={styles['pricing-header-text-wrapper']}>
            <p>Pricing</p>
            <p>Choose the plan that fits your needs. Upgrade, downgrade, or adjust anytime.</p>
          </div>
          <div className={styles['market-toggle-container']}>
            <div className={styles['market-toggle-wrapper']}>
              <div className={`${styles['market-toggle-option']} ${market === MARKETS.INDIA ? styles['active'] : ''}`} onClick={() => setMarket(MARKETS.INDIA)}>
                <img src={indianFlag} alt="Indian Flag" className={styles['flag-icon']} />
              </div>
              <div className={`${styles['market-toggle-option']} ${market === MARKETS.INTERNATIONAL ? styles['active'] : ''}`} onClick={() => setMarket(MARKETS.INTERNATIONAL)}>
                🌍
              </div>
              <div className={styles['market-toggle-pill']} style={{ transform: market === MARKETS.INDIA ? 'translateX(0%)' : 'translateX(100%)' }} />
            </div>
          </div>
        </div>

        <div className={styles['pricing-controls-area']}>
          <div className={styles['pricing-header-footer']}>
            <div className={styles['pricing-header-button-wrapper']}>
              <p>Choose the user type that best describes you</p>
              <div onClick={() => setUserModalOpen(true)} className={styles['pricing-header-button']}>
                <p><ShinyText text={segment === "individuals" ? "For Freelancers" : "For Teams"} /></p>
              </div>
              {isUserModalOpen && (
                <div className={styles['user-type-selection-wrapper']}>
                  <p onClick={() => { setSegment("individuals"); setUserModalOpen(false); }}>For Individuals</p>
                  <p onClick={() => { setSegment("team"); setUserModalOpen(false); }}>For Teams</p>
                </div>
              )}
            </div>
            <div className={`${styles['plan-toggle-wrapper']} ${billingCycle === 'yearly' ? styles['active'] : ''}`}>
              <p className={billingCycle === 'monthly' ? styles['active-text'] : ''} onClick={() => setBillingCycle('monthly')}>Monthly</p>
              <div className={styles['toggle-wrapper']} onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
                <div className={styles['toggle']} style={{ left: billingCycle === 'monthly' ? '2.5px' : 'calc(100% - 22.5px)' }} />
              </div>
              <p className={billingCycle === 'yearly' ? styles['active-text'] : ''} onClick={() => setBillingCycle('yearly')}>
                {billingCycle === 'yearly' ? <ShinyText text={`Yearly (Save 20%)`} /> : `Yearly (Save 20%)`}
              </p>
            </div>
          </div>
        </div>


      </main>
      <section className={styles['pricing-section']}>

        <div className={styles['founding100-wrapper']}>
          <ShinyText text={"Exclusive 20% Discounts for Founding 100"} textSize={14} />
        </div>



        {plans.map(plan => {
          const { finalPrice, originalPrice, appliedDiscount } = calculateDisplayPrice(plan, market, billingCycle, user);
          const isOpen = openPlan === plan.id;

          return (

            <div className={styles['cards-row']}>
              <div className={`${styles['plan-card']} ${plan.highlight ? styles['highlight'] : ''}`} key={plan.id}>
                {/* {appliedDiscount && (
                  <div className={styles['discount-badge']}>
                    {appliedDiscount.id === 'founding100' ? "Founding 100!" : `Save ${appliedDiscount.percentage * 100}%`}
                  </div>
                )} */}
                <div className={styles['plan-header']}>
                  <p className={styles['plan-name']}>{plan.name}</p>
                  <div className={styles['pricing']}>
                    {originalPrice && (
                      <span className={styles['original-price']}>{currency.sign}{originalPrice}</span>
                    )}
                    <span className={styles['price-amount']}>{currency.sign}{finalPrice}</span>
                  </div>
                </div>
                <div className={styles['plan-subs']}><p>Billed {billingCycle}, per user</p></div>
                <div className={styles['perks-heading']}><p>PERKS INCLUDED</p></div>
                <div className={styles['plan-features']}>
                  {plan.features.map((feature, i) => (
                    <div className={styles['feature-item-i']} key={i}>
                      <img src={checkIcon} alt="check" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          );
        })}
      </section>

      {championTierVisibility && <Founding100v2 setChampionTierVisibility={setChampionTierVisibility}/>}
    </div>

  );
};

// ====================================================================================
// 4. MAIN PARENT COMPONENT
// ====================================================================================

function PricingPage() {
  const [width] = useWindowSize();
  const isMobile = width <= 992;

  const [bannerVisible, setBannerVisible] = useState(true);
  const [market, setMarket] = useState(MARKETS.INDIA);
  const [segment, setSegment] = useState("individuals");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [user, setUser] = useState({ loggedIn: true, discounts: ['founding100'] });

  const activePlans = useMemo(() => PLANS[segment], [segment]);
  const currency = useMemo(() => CURRENCY_MAP[market], [market]);

  return (

    <>
      {isMobile ? (
        <MobilePricingView
          plans={activePlans}
          currency={currency}
          bannerVisible={bannerVisible}
          setBannerVisible={setBannerVisible}
          billingCycle={billingCycle}
          market={market}
          user={user}
          setUser={setUser}
          setMarket={setMarket}
          segment={segment}
          setSegment={setSegment}
          setBillingCycle={setBillingCycle}
          isUserModalOpen={isUserModalOpen}
          setUserModalOpen={setUserModalOpen}
        />
      ) : (
        <DesktopPricingView
          plans={activePlans}
          currency={currency}
          bannerVisible={bannerVisible}
          setBannerVisible={setBannerVisible}
          billingCycle={billingCycle}
          market={market}
          user={user}
          setUser={setUser}
          setMarket={setMarket}
          segment={segment}
          setSegment={setSegment}
          setBillingCycle={setBillingCycle}
          isUserModalOpen={isUserModalOpen}
          setUserModalOpen={setUserModalOpen}
        />
      )}

    </>
  );
}

export default PricingPage;
