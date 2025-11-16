import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./NavBar.css";
import logo from '../assets/logo/gravyn_logo.svg';
import collapseIcon from '../assets/icons/collapse.svg';
import { ShinyText } from './HomePage'; // Assuming you have this component
import close from "../assets/icons/close.svg"


const menuItems = [
  { label: "Pricing", to: "/pricing" },
  { label: "Contact Us", to: "/contact" },
  { label: "Join Waitlist", to: "/", highlight: true, isWaitlist: true }, // This flag is key
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Handles all navigation clicks.
   * @param {string} to - The path to navigate to.
   * @param {boolean} scrollToWaitlist - A flag to indicate if we should scroll to the waitlist section.
   */
  const handleNavigation = (to, isWaitlist = false) => {
    navigate(to, { state: { scrollToWaitlist: isWaitlist } });
    setMobileMenuOpen(false); // Always close mobile menu on click
  };

  // This useEffect is for handling the scroll after navigation to the homepage
  useEffect(() => {
    if (location.state?.scrollToWaitlist) {
      const waitlistSection = document.getElementById('waitlist-section');
      if (waitlistSection) {
        // Use a short timeout to ensure the component has rendered
        setTimeout(() => {
          waitlistSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        {/* --- CORRECTED LOGO LINK --- */}
        <div className="logo-wrapper" onClick={() => handleNavigation('/')}>
          <img src={logo} alt="Gravyn logo" />
          <p>Gravyn</p>
        </div>

        {/* --- DESKTOP MENU (Corrected Logic) --- */}
        <div className="menu-wrapper">
          {menuItems.map(({ label, to, highlight, isWaitlist }) => (
            <div
              key={label}
              className={`menu-item ${highlight ? 'waitlist-menu-item' : ''}`}
              onClick={() => handleNavigation(to, isWaitlist)}
            >
              {highlight ? < p >{label}</p> : <p>{label}</p>}
            </div>
          ))}
        </div>

        {/* --- MOBILE HAMBURGER ICON --- */}
        <div className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <img src={collapseIcon} alt="Menu" />
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY (Corrected Logic) --- */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {menuItems.map(({ label, to, isWaitlist }) => (
            <div
              key={label}
              className="mobile-menu-item"
              onClick={() => handleNavigation(to, isWaitlist)}
            >
              <p>{label}</p>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
