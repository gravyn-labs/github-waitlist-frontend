import React from "react";
import championsIcons from "../../assets/icons/championsvv2.svg";
import close from "../../assets/icons/close.svg";
import styles from "../Features/Banner.module.css";


const Banner = ({ setBadgeVisible, setBannerVisible , setChampionTierVisibility }) => {
    return (
        <div className={styles['banner']}>
            <div className={styles['banner-content-wrapper']}>
                <img src={championsIcons} alt="champions" />
                <p>Be Among the First 100 Subscribers — Join the Gravyn Founding 100!</p>
                <p onClick={() => setChampionTierVisibility(true)}>Know More</p>
            </div>
            <img
                onClick={() => setBannerVisible(false)}
                className={styles['close-icon']}
                src={close}
                alt="close"
            />
        </div>
    );
};

export default Banner;
