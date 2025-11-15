import React, { useState, useEffect } from "react";
import styles from "./HomeLanding.module.css";
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import faces from '../assets/images/faces.svg';

// --- Placeholder Components (as defined in previous turns) ---
import { AlreadyJoined } from "./HomePage";
import { ShinyText } from "./HomePage";


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

        {ajBanner && <AlreadyJoined setAJBanner={setAJBanner} />}
    </div>
);

const MobileView = ({ email, setEmail, handleJoinWaitlist, loading, targetCount }) => (
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
    </div>
);


// ====================================================================================
// 3. MAIN PARENT COMPONENT (HomeLanding)
// ====================================================================================

export const HomeLanding = () => {
    const [width] = useWindowSize();
    const isMobile = width <= 768;

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [targetCount, setTargetCount] = useState(0);

    const [ajBanner, setAJBanner] = useState(false);
    const [ojBanner, setOJBanner] = useState(false);

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
        if (!email) return;

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

            if (response.ok) {
                setEmail("");
                setOJBanner(true);
                setTimeout(() => setOJBanner(false), 5000);

                // refresh count after successful join
                fetchWaitlistCount();

            } else {
                setAJBanner(true);
                setTimeout(() => setAJBanner(false), 5000);
            }
        } catch (error) {
            console.error(error);
            setAJBanner(true);
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
