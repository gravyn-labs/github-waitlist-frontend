import React, { useState, useEffect } from "react";
import styles from "./HomeLanding.module.css";
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import faces from '../assets/images/faces.svg';

// --- Placeholder Components (as defined in previous turns) ---
import { AlreadyJoined, OnceJoined } from "./HomePage";
import { ShinyText } from "./HomePage";
import { validateEmail } from "../utils/safeguard";


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

const rotatingWords = ["Teams", "Freelancers", "Individuals", "Agencies", "Businesses"];

export function DynamicPhrase() {
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
        <p className={styles['dynamic-phrase']}>
            Where Intelligent <span className={fade ? "fade-in" : "fade-out"}>{rotatingWords[index]}</span> Build Brilliant Workflows.
        </p>
    );
}



// ====================================================================================
// 2. VIEW-SPECIFIC CHILD COMPONENTS
// ====================================================================================

const DesktopView = ({ email, setEmail, handleJoinWaitlist, loading, targetCount, ojBanner, ajBanner, setAJBanner, setOJBanner }) => (
    <div className={styles['landing-content']}>
        <div className={styles['landing-content-text-wrapper']}>
            <DynamicPhrase />
            <p className={styles['hero-subtitle']}>
                Discover a unified workspace that simplifies project delivery, client collaboration, and finances — all enhanced by powerful AI-driven insights. Join the waitlist for early access and transform how your team works.
            </p>
        </div>

        <div className={styles['waitlist-wrapper']}>
            <input type="email" placeholder="Enter Your Email Address..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleJoinWaitlist} disabled={loading}>
                {loading ? "Joining..." : <ShinyText text={"Join Waitlist"} />}
            </button>
        </div>

        <div className={styles['joined-wrapper']}>
            <img src={faces} alt="A collage of user profile pictures" />
            <p>
                <span>{targetCount}</span> {targetCount === 1 ? "Person" : "People"} are waiting to step in future.
            </p>
        </div>

        <div className={styles['landing-banner']}>
            <img src={banner1} alt="Product screenshot showing tasks and projects" />
            <img src={banner2} alt="Product screenshot showing financial analytics" />
        </div>

        {ojBanner && <OnceJoined setOJBanner={setOJBanner} />}
        {ajBanner && <AlreadyJoined setAJBanner={setAJBanner} />}
    </div>
);

const MobileView = ({ email, setEmail, handleJoinWaitlist, loading, targetCount, ojBanner, ajBanner, setAJBanner, setOJBanner }) => (
    <div className={styles['landing-page-mobile']}>
        <div className={styles['landing-content-text-wrapper']}>
            <DynamicPhrase />
            <p className={styles['hero-subtitle']}>
                A unified workspace for project delivery, client collaboration, and finances, all enhanced by AI.
            </p>
        </div>

        <div className={styles['waitlist-wrapper']}>
            <input type="email" placeholder="Enter Email Address..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleJoinWaitlist} disabled={loading}>
                {loading ? "Joining..." : <ShinyText text={"Join Waitlist"} />}
            </button>
        </div>

        <div className={styles['joined-wrapper']}>
            <img src={faces} alt="A collage of user profile pictures" />
            <p><span>{targetCount}</span> + people waiting for the launch.</p>
        </div>

        <div className={styles['landing-mobile-banner']}>
            <img src={banner1} alt="Product screenshot showing tasks" />
            <img src={banner2} alt="Product screenshot showing analytics" />
        </div>


        {ojBanner && <OnceJoined setOJBanner={setOJBanner} />}
        {ajBanner && <AlreadyJoined setAJBanner={setAJBanner} />}
    </div>
);


// ====================================================================================
// 3. MAIN PARENT COMPONENT (HomeLanding)
// ====================================================================================

export const HomeLanding = ({ ojBanner, ajBanner, setOJBanner, setAJBanner, notificationMessage, setNotificationMessage, setShowNotification }) => {
    const [width] = useWindowSize();
    const isMobile = width <= 768;

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [targetCount, setTargetCount] = useState(0);



    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // ====================================================================================
    // ⏳ NEW: Fetch waitlist count from backend
    // ====================================================================================
    const fetchWaitlistCount = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/waitlist/count`);
            const data = await response.json();
            if (response.ok && data.count !== undefined) {
                setTargetCount(data.count);
            }
        } catch (error) {
            console.error("Failed to fetch waitlist count:", error);
        }
    };

    // Fetch on mount
    useEffect(() => {
        fetchWaitlistCount();
    }, []);

    // Auto-refresh count every 20 seconds
    useEffect(() => {
        const interval = setInterval(fetchWaitlistCount, 20000);
        return () => clearInterval(interval);
    }, []);



    // ====================================================================================
    // JOIN WAITLIST LOGIC
    // ====================================================================================

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
                fetchWaitlistCount(); // Refresh the count
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




    // ====================================================================================
    // RENDER
    // ====================================================================================

    return isMobile ? (
        <MobileView
            email={email}
            setEmail={setEmail}
            handleJoinWaitlist={handleJoinWaitlist}
            loading={loading}
            targetCount={targetCount}
            ojBanner={ojBanner}
            ajBanner={ajBanner}
            setAJBanner={setAJBanner}
            setOJBanner={setOJBanner}
        />
    ) : (
        <DesktopView
            email={email}
            setEmail={setEmail}
            handleJoinWaitlist={handleJoinWaitlist}
            loading={loading}
            targetCount={targetCount}
            ojBanner={ojBanner}
            ajBanner={ajBanner}
            setAJBanner={setAJBanner}
            setOJBanner={setOJBanner}
        />
    );
};

export default HomeLanding;
