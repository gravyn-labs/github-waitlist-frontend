import React, { useState } from "react";
import NavBar from "./NavBar";
import championsIcons from "../assets/icons/championsvv2.svg";
import close from "../assets/icons/close.svg";
import sales from "../assets/icons/sales.svg";
import billing from "../assets/icons/rupee.svg";
import support from "../assets/icons/productsupport.svg";
import serviceunavail from "../assets/icons/unavailable.svg";
import "./Contact.css";

const Contact = () => {
  // ------------------------------
  // State Management
  // ------------------------------
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null,
  });

  // ------------------------------
  // Handlers
  // ------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    try {
      const response = await fetch("https://gravyn-backend-env.us-east-1.elasticbeanstalk.com/api/contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Something went wrong");

      setStatus({ loading: false, success: result.success, error: null });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus({ loading: false, success: null, error: error.message });
    }
  };

  // ------------------------------
  // UI Rendering
  // ------------------------------
  return (
    <div className="page-wrapper">
      {/* Banner */}
      {bannerVisible && !isModalOpen && (
        <div className="banner">
          <div className="banner-content-wrapper">
            <img src={championsIcons} alt="Champions" />
            <p>
              Be Among the First 100 Subscribers — Join the Gravyn Founding 100!
            </p>
            <p>Know More</p>
          </div>
          <img
            onClick={() => setBannerVisible(false)}
            className="close-icon"
            src={close}
            alt="Close"
          />
        </div>
      )}

      {/* Navbar always visible */}
      <NavBar />

      {/* Full-page Modal */}
      {isModalOpen ? (
        <div className="contact-fullscreen-form">
          <div className="contact-form-header">
            <h2>Contact Sales</h2>
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
          </div>
          <p className="contact-form-subtitle">
            Fill out the form below and our team will get back to you shortly.
          </p>

          {status.success ? (
            <div className="success-message">
              <h3>Message Sent!</h3>
              <p>{status.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {status.error && (
                <p className="error-message">{status.error}</p>
              )}
              <button
                type="submit"
                className="submit-btn"
                disabled={status.loading}
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      ) : (
        // Normal Contact Page
        <div className="contact-hero-section">
          <div className="contact-hero-text-wrapper">
            <p className="title">
              <span className="ripple" />
              Gravyn Sales Operational
            </p>
            <p className="heading">We're here to help.</p>
            <p className="subheading">
              We’re passionate about helping teams succeed. Whether you have a
              question about features, pricing, or anything else, our team is
              ready to answer all your questions.
            </p>
          </div>

          {/* Contact Options */}
          <div className="contact-content">
            <div className="row row-one contact-i-1">
              <div className="contact-content-header contact-content-header-1">
                <img src={sales} alt="Sales" />
                <p>Reach out to sales</p>
                <p>
                  Interested in a custom Enterprise plan, exploring partnership
                  opportunities, or have questions about volume pricing? Our
                  sales specialists are ready to help.
                </p>
              </div>
              <p
                onClick={() => setIsModalOpen(true)}
                className="contact-button"
              >
                Contact Sales
              </p>
            </div>

            <div className="row row-two">
              {[
                { icon: billing, title: "Billing Inquiries" },
                { icon: support, title: "Product Support" }
              ].map((section, index) => (
                <div key={index} className="contact-i">
                  <div className="avail-wrapper">
                    <img src={serviceunavail} alt="Unavailable" />
                    <p>Service Unavailable</p>
                  </div>
                  <div className="contact-content-header">
                    <img src={section.icon} alt={section.title} />
                    <p>{section.title}</p>
                    <p>
                      {section.title === "Billing Inquiries"
                        ? "For questions related to your subscription, invoices, or payments, our billing team is here to assist."
                        : "Experiencing a technical issue or need help with a feature? Our support team is ready to get you back on track."}
                    </p>
                  </div>
                  <p className="contact-button">
                    Contact {section.title} Support
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
