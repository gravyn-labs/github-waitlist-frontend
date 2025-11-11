import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import logo from '../assets/logo/gravyn_logo.svg';
import collapseIcon from '../assets/icons/collapse.svg'; // This will be our hamburger icon

const menuItems = [
  { label: "Pricing", to: "/pricing" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
  { label: "Join Waitlist", to: "/waitlist", highlight: true }
];

const NavBar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (to) => {
    navigate(to);
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <div className="logo-wrapper" onClick={() => handleNavigation('/')}>
          <img src={logo} alt="Gravyn logo" />
          <p>Gravyn</p>
        </div>
        
        {/* Desktop Menu */}
        <div className="menu-wrapper">
          {menuItems.map(({ label, to, highlight }) => (
            <div
              key={label}
              className={`menu-item ${highlight ? 'waitlist-menu-item' : ''}`}
              onClick={() => handleNavigation(to)}
            >
              <p>{label}</p>
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-menu-trigger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <img src={collapseIcon} alt="Menu" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {menuItems.map(({ label, to, highlight }) => (
            <div
              key={label}
              className="mobile-menu-item"
              onClick={() => handleNavigation(to)}
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
