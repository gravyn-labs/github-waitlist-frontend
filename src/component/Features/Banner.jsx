import React, { useState, useEffect } from "react";
import championsIcons from "../../assets/icons/championsvv2.svg";
import close from "../../assets/icons/close.svg";
import styles from "../Features/Banner.module.css";

const Banner = ({ setBannerVisible, setChampionTierVisibility }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen width for responsive toggle
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {!isMobile ? (
                // === DESKTOP VIEW ===
                <div className={styles["banner"]}>
                    <div className={styles["banner-content-wrapper"]}>
                        <img src={championsIcons} alt="champions" />
                        <p>Be Among the First 100 Subscribers — Join the Gravyn Founding 100!</p>
                        <p onClick={() => setChampionTierVisibility(true)}>Know More</p>
                    </div>
                    <img
                        onClick={() => setBannerVisible(false)}
                        className={styles["close-icon"]}
                        src={close}
                        alt="close"
                    />
                </div>
            ) : (
                // === MOBILE VIEW ===
                <div
                    onClick={() => setChampionTierVisibility(true)}
                    className={styles["banner"]}
                >
                    <div className={styles["banner-content-wrapper"]}>
                        <img src={championsIcons} alt="champions" />
                        <p>Join the Gravyn Founding 100!</p>
                        <p style={{ display: "none" }}></p>
                    </div>
                    <img
                        className={styles["close-icon"]}
                        src={close}
                        alt="close"
                    />
                </div>
            )}
        </>
    );
};

export default Banner;
