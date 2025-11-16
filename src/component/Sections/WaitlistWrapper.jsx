import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Waitlist.module.css";

// IMAGES
import bg_noise from "../../assets/images/grad.png";
import glow_logo from "../../assets/images/glow_logo.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import face1 from "../../assets/images/face5.png";
import face2 from "../../assets/images/face6.png";
import face3 from "../../assets/images/face8.png";

import Orbiez from "../Orbiez";
import { validateEmail } from "../../utils/safeguard";

const WaitlistWrapper = ({ id , ojBanner, ajBanner, setOJBanner, setAJBanner, notificationMessage, setNotificationMessage, setShowNotification }) => {
    const parentRef = useRef(null);
    const imageRef = useRef(null);
    const location = useLocation();

    const [email, setEmail] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // Track window resize and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        imageRef.current.classList.add(styles["animate-glow"]);
                    } else {
                        imageRef.current.classList.remove(styles["animate-glow"]);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (parentRef.current) {
            observer.observe(parentRef.current);
        }

        return () => {
            if (parentRef.current) observer.unobserve(parentRef.current);
        };
    }, [window.innerWidth]);

    const handleJoinWaitlist = async () => {
        if (!email) {
            // Optional: Add a visual cue that email is required
            return;
        }



        if (!validateEmail(email)) {
            setShowNotification(true)
            setNotificationMessage("Please enter a valid email address.")
            return; // Stop the function if the email is invalid
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();



            // Check for non-successful HTTP status codes first (e.g., 409, 429)
            if (!response.ok) {
                switch (data.status) {
                    case 'ALREADY_REGISTERED':
                        setAJBanner(true); // Show "Already Joined" banner
                        setTimeout(() => setAJBanner(false), 5000);
                        break;
                    case 'RATE_LIMIT':
                        setNotificationMessage("You're trying that a bit too fast! Please take a break and try again in an hour.")
                        setShowNotification(true)
                        break;
                    case 'VALIDATION_ERROR':
                        // Handle validation error, e.g., show message next to the input
                        break;
                    default:
                        // A generic error for other 4xx/5xx responses
                        setAJBanner(true); // Re-using AJBanner for general errors
                        setTimeout(() => setAJBanner(false), 5000);
                }
                return; // Stop execution since there was an error
            }

            // Handle the successful case (HTTP 201)
            if (data.status === 'SUCCESS') {
                setEmail("");
                setOJBanner(true); // Show "Once Joined" banner for new signups
                setTimeout(() => setOJBanner(false), 5000);
            }

        } catch (error) {
            // This catches network errors (e.g., server is down)
            console.error("Network or fetch error:", error);
            setAJBanner(true); // Show a generic error banner
            setTimeout(() => setAJBanner(false), 5000);
        } finally {
            setLoading(false);
        }
    };

    // Empty mobile view placeholder for you to implement
    const mobileView = <div id={id} className={styles['workspace-mobile-join-section']}>
        <Orbiez />
        <div className={styles["workspace-mobile-join-text-wrapper"]}>
            <img ref={imageRef} src={glow_logo} alt="glow logo" />
            <p>Work Smarter. Deliver Faster.</p>
            <p className={styles["mobile-subheading"]}>Join our exclusive waitlist and be the first to know when we launch!</p>
        </div>


        <div className={styles["workspace-mobile-input-area"]}>
            <div className={styles["workspace-mobile-input-area-i"]}>
                <div className={styles["workspace-mobile-input-area-left"]}>
                    <p>Join the waitlist</p>
                    <p>Join our waitlist to get notified the moment we launch.</p>
                </div>
                <div className={styles["workspace-mobile-input-area-i-right"]}>
                    <div className={styles["faces-wrapper"]}>
                        <img src={face1} alt="face1" />
                        <img src={face3} alt="face3" />
                        <img src={face2} alt="face2" />
                    </div>
                </div>
            </div>

            <div className={styles["workspace-mobile-input-area-i"]}>
                <div className={styles["input-area"]}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address..."
                        disabled={loading}
                    />
                    <button onClick={handleJoinWaitlist} disabled={loading}>
                        {loading ? "Joining..." : "Join Waitlist"}
                    </button>
                </div>
            </div>
        </div>

        <div className={styles["followus-mobile-wrapper"]}>
            <p>Follow Us</p>
            <a href="https://www.linkedin.com/company/108729125/admin/dashboard/">
                <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="">
                <img src={twitter} alt="Twitter" />
            </a>
        </div>

    </div>;

    // Desktop view JSX (your existing desktop layout)
    const desktopView = (
        <div id={id} ref={parentRef} className={styles["workspace-join-section-wrapper"]}>
            <img src={bg_noise} alt="background noise" />
            <Orbiez />
            <div className={styles["workspace-join-central-wrapper"]}>
                <div className={styles["workspace-join-text-wrapper"]}>
                    <img ref={imageRef} src={glow_logo} alt="glow logo" />
                    <p>Work Smarter. Deliver Faster.</p>
                    <p></p>
                </div>

                <div className={styles["workspace-join-input-area"]}>
                    <div className={styles["workspace-join-input-area-i"]}>
                        <div className={styles["workspace-join-input-area-left"]}>
                            <p>Join the waitlist</p>
                            <p>Join our waitlist to get notified the moment we launch.</p>
                        </div>
                        <div className={styles["workspace-join-input-area-i-right"]}>
                            <div className={styles["faces-wrapper"]}>
                                <img src={face1} alt="face1" />
                                <img src={face3} alt="face3" />
                                <img src={face2} alt="face2" />
                            </div>
                        </div>
                    </div>

                    <div className={styles["workspace-join-input-area-i"]}>
                        <div className={styles["input-area"]}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email Address..."
                                disabled={loading}
                            />
                            <button onClick={handleJoinWaitlist} disabled={loading}>
                                {loading ? "Joining..." : "Join Waitlist"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles["followus-wrapper"]}>
                    <p>Follow Us</p>
                    <a href="https://www.linkedin.com/company/108729125/admin/dashboard/">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
            </div>
        </div>
    );

    // Conditionally render mobileView or desktopView based on screen size
    return isMobile ? mobileView : desktopView;
};

export default WaitlistWrapper;
