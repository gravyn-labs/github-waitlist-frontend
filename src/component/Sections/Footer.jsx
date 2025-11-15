import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

// --- Placeholder Imports ---
// Replace these with your actual asset paths
import blackhole from "../../assets/images/blackhole.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";
import logov1 from "../../assets/logo/logov2.svg";

// ====================================================================================
// 1. CUSTOM HOOK FOR RESPONSIVENESS
// ====================================================================================
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
// 2. VIEW-SPECIFIC CHILD COMPONENTS
// ====================================================================================

const DesktopFooter = () => (
    <footer className={styles['footer-wrapper']}>
        <div className={styles['footer-main']}>
            <div className={styles['footer-main-flex']}>
                <div className={`${styles['footer-main-flex-i']} ${styles['footer-main-flex-left']}`}>
                    <div className={styles['footer-main-flex-left-header']}>
                        <p><img src={logov1} alt="Gravyn Logo" />Gravyn</p>
                        <p>Let’s redefine how teams work. Gravyn unites planning, collaboration, and execution in one intelligent workspace, built to help you move faster and think smarter.</p>
                    </div>
                    <div className={styles['followus-wrapper']}>
                        <a href="https://www.linkedin.com/company/gravyn" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="https://twitter.com/gravyn" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
                    </div>
                </div>
                <div className={`${styles['footer-main-flex-i']} ${styles['footer-main-flex-right']}`}>
                    <div className={styles['list-main']}>
                        <p>Platform</p>
                        <div className={styles['list-main-item']}>
                            <a>Home</a>
                            <a>Pricing</a>
                        </div>
                    </div>
                    <div className={styles['list-main']}>
                        <p>Company</p>
                        <div className={styles['list-main-item']}>
                            <a>Contact Us</a>
                            <a>Career</a>
                        </div>
                    </div>
                    <div className={styles['list-main']}>
                        <p>Reach Us</p>
                        <div className={styles['list-main-item']}>
                            <p>aryan@gravyn.app</p>
                            <p>support@gravyn.app</p>
                            <p>20H, Sector 63, Noida, 201301</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['footer-main-bottom']}>
                <div className={styles['footer-main-bottom-i']}>
                    <p>© 2025 Gravyn Labs Private Limited. All rights reserved.</p>
                </div>
                <div className={`${styles['footer-main-bottom-i']} ${styles['footer-links']}`}>
                    <a>Privacy Policy</a>
                    <a>Terms & Condition</a>
                </div>
            </div>
        </div>
    </footer>
);


const MobileFooter = () => (
    <footer className={`${styles['footer-wrapper']} ${styles['mobile']}`}>
        {/* <img className={styles['text-image']} src={blackhole} alt="Abstract background graphic" /> */}
        <div className={styles['footer-main']}>
            <div className={styles['footer-main-flex-left-header']}>
                <p><img src={logov1} alt="Gravyn Logo" />Gravyn</p>
                <p>Let’s redefine how teams work. Gravyn unites planning, collaboration, and execution in one intelligent workspace.</p>
            </div>

            {/* In mobile, lists can be simplified or stacked */}
            <div className={styles['mobile-links-container']}>
                <div className={styles['list-main']}>
                    <p>Platform</p>
                    <div className={styles['list-main-item']}>
                        <a>Home</a>
                        <a>Pricing</a>
                    </div>
                </div>
                <div className={styles['list-main']}>
                    <p>Company</p>
                    <div className={styles['list-main-item']}>
                        <a>Contact Us</a>
                        <a>Career</a>
                    </div>
                </div>
            </div>

            <div className={styles['list-main']}>
                <p>Reach Us</p>
                <div className={styles['list-main-item']}>
                    <a href="mailto:aryan@gravyn.app">aryan@gravyn.app</a>
                    <a href="mailto:support@gravyn.app">support@gravyn.app</a>
                </div>
            </div>

            <div className={styles['followus-wrapper']}>
                <a href="https://www.linkedin.com/company/gravyn" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
                <a href="https://twitter.com/gravyn" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
            </div>

            <div className={styles['footer-main-bottom']}>
                <div className={styles['footer-links']}>
                    <a>Privacy Policy</a>
                    <a>Terms & Condition</a>
                </div>
                <div className={styles['footer-main-bottom-i']}>
                    <p>© 2025 Gravyn Labs Private Limited.</p>
                </div>
            </div>
        </div>
    </footer>
);

// ====================================================================================
// 3. MAIN EXPORTED COMPONENT
// ====================================================================================

export const Footer = () => {
    const [width] = useWindowSize();
    const isMobile = width <= 768; // Your mobile breakpoint

    return isMobile ? <MobileFooter /> : <DesktopFooter />;
}
