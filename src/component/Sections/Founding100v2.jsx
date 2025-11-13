import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./Founding100v2.module.css";
import checkBoxIncludes from "../../assets/icons/check.svg";
import Orbiez from "../Orbiez";
import championBadge from "../../assets/images/championbage.svg";
import confetti from "canvas-confetti";
import Aurora from "./Aurora";
import close from "../../assets/icons/close.svg"

export const Founding100v2 = ({ user, championTierVisibility, setChampionTierVisibility }) => {
    const fireConfetti = () => {
        confetti({
            zIndex: 1000,
            colors: ["#036CFE", "#00FF00", "#549bff"],
            particleCount: 100,
            spread: 150,
            origin: { y: 0.6 },
        });
    };

    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setChampionTierVisibility(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    fireConfetti();

    if (!championTierVisibility) return null;

    return (
        <div className={styles["tier-modal-overlay"]}>
            <div ref={modalRef} className={styles["tier-modal-wrapper"]}>
                <div className={styles["tier-header"]}>
                    <img onClick={()=>{setChampionTierVisibility(false)}} src={close} className={styles['close-btn']}/>
                    <Aurora
                        amplitude={0.5}
                        colorStops={["#3017ee", "#6617ee", "#3017ee"]}
                    />
                    <div className={styles["tier-modal-header-img"]}>
                        <img src={championBadge} alt="Founding 100 Badge" />
                    </div>
                </div>

                <div className={styles["tier-modal-content"]}>
                    <div className={styles["tier-content-header"]}>
                        <p className={styles["tier-content-header-heading"]}>
                            <span>Gravyn Founding 100</span>
                            <p>Become Exclusive Member</p>
                        </p>
                        <p className={styles["tier-content-header-subheading"]}>
                            Become one of the first 100 teams to subscribe to Gravyn and secure
                            your place in our history. This is an exclusive, one-time opportunity
                            to help shape the future of how teams plan and execute.
                        </p>
                    </div>

                    <div className={styles["tier-perks-wrapper"]}>
                        <div className={styles["perks-heading"]}>
                            <p>YOUR FOUNDING 100 BENEFITS</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="74"
                                height="2"
                                viewBox="0 0 74 2"
                                fill="none"
                            >
                                <path
                                    d="M1 0.4C0.668629 0.4 0.4 0.668629 0.4 1C0.4 1.33137 0.668629 1.6 1 1.6V0.4ZM1 1.6H74V0.4H1V1.6Z"
                                    fill="url(#paint0_linear_266_290)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_266_290"
                                        x1="1"
                                        y1="1"
                                        x2="74"
                                        y2="1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#036CFE" />
                                        <stop offset="0.5" stopColor="#036CFE" stopOpacity="0.5" />
                                        <stop offset="1" stopColor="#036CFE" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className={styles["perks-wrapper"]}>
                            <div className={styles["perk-wrapper"]}>
                                <img src={checkBoxIncludes} alt="check" />
                                <div className={styles["perk-text-wrapper"]}>
                                    <p className={styles["perk-text-heading"]}>Lifetime 20% Discount</p>
                                    <p className={styles["perk-text-subheading"]}>
                                        Receive a permanent 20% discount on your Gravyn Team plan — for life.
                                    </p>
                                </div>
                            </div>

                            <div className={styles["perk-wrapper"]}>
                                <img src={checkBoxIncludes} alt="check" />
                                <div className={styles["perk-text-wrapper"]}>
                                    <p className={styles["perk-text-heading"]}>Founding 100 Badge</p>
                                    <p className={styles["perk-text-subheading"]}>
                                        A unique badge will be permanently displayed on your team's profile.
                                    </p>
                                </div>
                            </div>

                            <div className={styles["perk-wrapper"]}>
                                <img src={checkBoxIncludes} alt="check" />
                                <div className={styles["perk-text-wrapper"]}>
                                    <p className={styles["perk-text-heading"]}>Direct Access to Founders</p>
                                    <p className={styles["perk-text-subheading"]}>
                                        Get a direct communication channel with Gravyn’s founding team to share feedback and ideas.
                                    </p>
                                </div>
                            </div>

                            <div className={styles["perk-wrapper"]}>
                                <img src={checkBoxIncludes} alt="check" />
                                <div className={styles["perk-text-wrapper"]}>
                                    <p className={styles["perk-text-heading"]}>Beta Feature Access</p>
                                    <p className={styles["perk-text-subheading"]}>
                                        Be the first to test new Gravyn features before anyone else.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                    <div className={styles["tier-content-footer"]}>
                        <p>
                            This exclusive opportunity is open to the first 100 teams that subscribe
                            to any Gravyn Team plan. Once you join, your place in the Founding 100
                            is secured forever.
                        </p>
                        <p className={styles["closing-text"]}>
                            This isn’t just a subscription — it’s a partnership. Together, we’ll shape
                            the way teams plan, collaborate, and grow.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
