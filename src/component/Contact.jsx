// Contact.js
import React, { useState, useEffect, useCallback } from "react";
import NavBar from "./NavBar";
import styles from "./Contact.module.css";
import championsIcons from "../assets/icons/championsvv2.svg";
import close from "../assets/icons/close.svg";
import sales from "../assets/icons/sales.svg";
import billing from "../assets/icons/rupee.svg";
import support from "../assets/icons/productsupport.svg";
import serviceunavail from "../assets/icons/unavailable.svg";
import bg_noise from "../assets/images/grad.png";
import check from "../assets/icons/check.svg";
import Banner from "./Features/Banner";
import { Founding100v2 } from "./Sections/Founding100v2";
import { Footer } from "./Sections/Footer";

/**
 * DesktopView - moved outside Contact to avoid re-creation on every render
 * Receives all state/handlers it needs through props.
 */
const DesktopView = React.memo(function DesktopView(props) {
  const {
    bannerVisible,
    isModalOpen,
    setIsModalOpen,
    formData,
    handleChange,
    handleSubmit,
    status,
  } = props;

  return (
    <div className={styles["desktop-wrapper"]}>
      {bannerVisible && <Banner />}

      <NavBar />

      {/* FULLSCREEN FORM MODAL */}
      {isModalOpen ? (
        <div className={styles["contact-fullscreen-form"]}>
          <div className={styles["contact-sales-section-left"]}>
            <div className={styles["contact-sales-section-left-text"]}>
              <div className={styles["contact-sales-section-left-text-header"]}>
                <p>Get in touch with our sales team.</p>
                <p>
                  Whether you're a startup scaling fast or an enterprise modernizing
                  your workflow, our team is here to craft the perfect solution for you.
                </p>
              </div>
            </div>
            <div className="contact-sales-section-left-text-footer">
              <div className="sales-perks-item">
                <p><img src={check} alt="check" />Tailored Plans for Every Stage</p>
                <p>From early teams to growing enterprises, we design solutions that fit your unique goals — not one-size-fits-all pricing.</p>
              </div>
              <div className="sales-perks-item">
                <p><img src={check} alt="check" />Dedicated Onboarding & Support</p>
                <p>Get personalized onboarding, setup assistance, and access to a dedicated Gravyn advisor for your organization.</p>
              </div>
              <div className="sales-perks-item">
                <p><img src={check} alt="check" />Integrations That Work for You</p>
                <p>Our experts will guide you on how Gravyn connects with your existing tools and data stack for seamless adoption.</p>
              </div>
            </div>
          </div>

          <div className={styles["contact-sales-section-right"]}>
            <div className={styles["contact-form-area"]}>
              {status.success ? (
                <div className={styles["success-message"]}>
                  <h3>Message Sent!</h3>
                  <p>{status.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles["contact-form"]}>
                  <div className={styles["form-header"]}>
                    <p>Fill your details here.</p>
                    <button
                      className={styles["modal-close-btn"]}
                      onClick={() => setIsModalOpen(false)}
                      type="button"
                    >
                      ×
                    </button>
                  </div>

                  <div className={styles["form-group-holder"]}>
                    <div className={styles["form-group"]}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles["form-group"]}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Describe your enquiry..."
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {status.error && <p className={styles["error-message"]}>{status.error}</p>}

                  <div className={styles["button-bolder"]}>
                    <button
                      type="submit"
                      className={styles["submit-btn"]}
                      disabled={status.loading}
                    >
                      {status.loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
          <img className={styles["bg-noise"]} src={bg_noise} alt="Noise" />
        </div>
      ) : (
        <>
          {/* Normal contact section */}
          <div className={styles["contact-hero-section"]}>
            <div className={styles["contact-hero-text-wrapper"]}>
              <p className={styles["title"]}>
                <span className={styles["ripple"]} />
                Gravyn Sales Operational
              </p>
              <p className={styles["heading"]}>We're here to help.</p>
              <p className={styles["subheading"]}>
                We’re passionate about helping teams succeed. Whether you have a
                question about features, pricing, or anything else, our team is ready
                to answer all your questions.
              </p>
            </div>

            <div className={styles["contact-content"]}>
              <div className={`${styles["row"]} ${styles["row-one"]}`}>
                <div className={styles["contact-content-header"]}>
                  <img src={sales} alt="Sales" />
                  <p>Reach out to sales</p>
                  <p>
                    Interested in a custom Enterprise plan, exploring partnership
                    opportunities, or have questions about volume pricing? Our sales
                    specialists are ready to help.
                  </p>
                </div>
                <p
                  onClick={() => setIsModalOpen(true)}
                  className={styles["contact-button"]}
                >
                  Contact Sales
                </p>
              </div>

              <div className={`${styles["row"]} ${styles["row-two"]}`}>
                {[{ icon: billing, title: "Billing Inquiries" },
                { icon: support, title: "Product Support" }].map((section, i) => (
                  <div key={i} className={styles["contact-i"]}>
                    <div className={styles["avail-wrapper"]}>
                      <img src={serviceunavail} alt="Unavailable" />
                      <p>Service Unavailable</p>
                    </div>
                    <div className={styles["contact-content-header"]}>
                      <img src={section.icon} alt={section.title} />
                      <p>{section.title}</p>
                      <p>
                        {section.title === "Billing Inquiries"
                          ? "For questions related to your subscription or invoices."
                          : "Need help with a feature or technical issue?"}
                      </p>
                    </div>
                    <p className={styles["contact-button"]}>
                      Contact {section.title} Support
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

/**
 * MobileView - moved outside Contact to avoid re-creation on every render
 * It keeps championTierVisibility local (same behavior as original).
 */
const MobileView = React.memo(function MobileView(props) {
  const {
    bannerVisible,
    isModalOpen,
    setIsModalOpen,
    formData,
    handleChange,
    handleSubmit,
    status,
  } = props;

  const [championTierVisibility, setChampionTierVisibility] = useState(false);

  return (
    <div className={styles["mobile-wrapper"]}>
      {bannerVisible && (
        <Banner championTierVisibility={championTierVisibility} setChampionTierVisibility={setChampionTierVisibility} />
      )}

      <NavBar />

      {isModalOpen ? (
        <div className={styles["contact-fullscreen-form-mobile"]}>
          <button
            className={styles["modal-close-btn"]}
            onClick={() => setIsModalOpen(false)}
            type="button"
          >
            <img src={close} alt="close" />
          </button>
          <div className={styles["contact-sales-section-left"]}>
            <div className={styles["contact-sales-section-left-text"]}>
              <div className={styles["contact-sales-section-left-text-header"]}>
                <p>Get in touch with our sales team.</p>
                <p>
                  Whether you're a startup scaling fast or an enterprise modernizing
                  your workflow, our team is here to craft the perfect solution for you.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles["contact-form-mobile"]}>
            {/* Group 1: Full Name */}
            <div className={styles["form-mobile-group"]}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>

            {/* Group 2: Email */}
            <div className={styles["form-mobile-group"]}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email address"
                onChange={handleChange}
                required
              />
            </div>

            {/* Group 3: Company */}
            <div className={styles["form-mobile-group"]}>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                placeholder="Your company name"
                onChange={handleChange}
              />
            </div>

            {/* Group 4: Message */}
            <div className={styles["form-mobile-group"]}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Describe your enquiry..."
                rows="4"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              className={styles["submit-btn"]}
              disabled={status.loading}
              type="submit"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success && <p className={styles["success-message"]}>{status.success}</p>}
            {status.error && <p className={styles["error-message"]}>{status.error}</p>}
          </form>

          <div className={styles['contact-sales-section-mobile-text-footer']}>
            <div className={styles['sales-perks-item']}>
              <p><img src={check} alt="check" />Tailored Plans for Every Stage</p>
              <p>From early teams to growing enterprises, we design solutions that fit your unique goals — not one-size-fits-all pricing.</p>
            </div>
            <div className={styles['sales-perks-item']}>
              <p><img src={check} alt="check" />Dedicated Onboarding & Support</p>
              <p>Get personalized onboarding, setup assistance, and access to a dedicated Gravyn advisor for your organization.</p>
            </div>
            <div className={styles['sales-perks-item']}>
              <p><img src={check} alt="check" />Integrations That Work for You</p>
              <p>Our experts will guide you on how Gravyn connects with your existing tools and data stack for seamless adoption.</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles["mobile-hero-text"]}>
            <p className={styles["title"]}>
              <span className={styles["ripple"]} /> Gravyn Sales Operational
            </p>
            <p className={styles["heading"]}>We're here to help.</p>
            <p className={styles["subheading"]}>
              We’re passionate about helping teams succeed. Whether you have a
              question about features, pricing, or anything else, our team is
              ready to answer all your questions.
            </p>
          </div>

          <div className={styles["mobile-contact-cards"]}>
            <div className={styles["contact-card"]}>
              <img src={sales} alt="Sales" />
              <h3>Reach out to Sales</h3>
              <p>Interested in custom enterprise plans or partnerships? Our team is ready to help.</p>
              <button
                className={styles["contact-btn"]}
                onClick={() => setIsModalOpen(true)}
              >
                Contact Sales
              </button>
            </div>

            <div className={styles["contact-card"]}>
              <img src={billing} alt="Billing" />
              <h3>Billing Inquiries</h3>
              <p>For questions related to invoices or payments.</p>
              <div className={styles["unavailable"]}>
                <img src={serviceunavail} alt="Unavailable" />
                <p>Service Unavailable</p>
              </div>
            </div>

            <div className={styles["contact-card"]}>
              <img src={support} alt="Support" />
              <h3>Product Support</h3>
              <p>Experiencing a technical issue? We’ll help you get back on track.</p>
              <div className={styles["unavailable"]}>
                <img src={serviceunavail} alt="Unavailable" />
                <p>Service Unavailable</p>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
      <Founding100v2 />
      {championTierVisibility && <Founding100v2 championTierVisibility={championTierVisibility} setChampionTierVisibility={setChampionTierVisibility} />}
    </div>
  );
});

/**
 * Main Contact component
 * Keeps thin local state and passes handlers down to child views.
 */
const Contact = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  // Resize handler (stable)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stable handlers to avoid re-creation on each render
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    // Functional update to avoid depending on formData
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus({ loading: true, success: "", error: "" });
      try {
        const response = await fetch(`${API_BASE_URL}/api/contact-sales`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setStatus({ loading: false, success: data.message || "We'll get back soon!", error: "" });
          setFormData({ name: "", email: "", company: "", message: "" });
        } else {
          setStatus({ loading: false, success: "", error: data.error || "Failed to send message" });
        }
      } catch (err) {
        setStatus({ loading: false, success: "", error: "Network error. Try again later." });
      }
    },
    // note: depends on formData so it will update when formData changes
    [formData]
  );

  // Render the appropriate view (components are memoized and defined outside)
  return isMobile ? (
    <MobileView
      bannerVisible={bannerVisible}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      status={status}
    />
  ) : (
    <DesktopView
      bannerVisible={bannerVisible}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      status={status}
    />
  );
};

export default Contact;
