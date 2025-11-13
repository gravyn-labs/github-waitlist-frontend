import React, { useRef, useEffect } from "react";
import styles from "./Founding100v2.module.css";
import checkBoxIncludes from "../../assets/icons/check.svg";
import championBadge from "../../assets/images/championbage.svg";
import confetti from "canvas-confetti";
import Aurora from "./Aurora";
import close from "../../assets/icons/close.svg";

export const Founding100v2 = ({ user, championTierVisibility, setChampionTierVisibility }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (championTierVisibility) {
            confetti({
                zIndex: 2000,
                colors: ["#036CFE", "#00FF00", "#549bff"],
                particleCount: 100,
                spread: 150,
                origin: { y: 0.6 },
            });
        }
    }, [championTierVisibility]);

    useEffect(() => {
        document.body.style.overflow = championTierVisibility ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [championTierVisibility]);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setChampionTierVisibility(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!championTierVisibility) return null;

    return (
        <div className={styles["tier-modal-overlay"]}>
            <div ref={modalRef} className={styles["tier-modal-wrapper"]}>
                <button
                    onClick={() => setChampionTierVisibility(false)}
                    className={styles["close-btn"]}
                >
                    <img src={close} alt="close" />
                </button>

                <div className={styles["tier-header"]}>
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
                            <p>Become Exclusive Member</p>

                            <span>Gravyn Founding 100</span>
                        </p>
                        <p className={styles["tier-content-header-subheading"]}>
                            Become one of the first 100 teams to subscribe to Gravyn and secure
                            your place in our history.
                        </p>
                    </div>

                    <div className={styles["tier-perks-wrapper"]}>
                        {[
                            {
                                heading: "Lifetime 20% Discount",
                                sub: "Receive a permanent 20% discount on your Gravyn Team plan — for life.",
                            },
                            {
                                heading: "Founding 100 Badge",
                                sub: "A unique badge will be permanently displayed on your team's profile.",
                            },
                            {
                                heading: "Direct Access to Founders",
                                sub: "Get a direct communication channel with Gravyn’s founding team.",
                            },
                            {
                                heading: "Beta Feature Access",
                                sub: "Be the first to test new Gravyn features before anyone else.",
                            },
                        ].map((perk) => (
                            <div key={perk.heading} className={styles["perk-wrapper"]}>
                                <img src={checkBoxIncludes} alt="check" />
                                <div className={styles["perk-text-wrapper"]}>
                                    <p className={styles["perk-text-heading"]}>{perk.heading}</p>
                                    <p className={styles["perk-text-subheading"]}>{perk.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
