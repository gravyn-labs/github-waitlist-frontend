import React, { useEffect } from "react";
import styles from "./Founding100.module.css"; // Assuming your CSS is in this file
import Orbiez from "../Orbiez"
import close from "../../assets/icons/close.svg"
import check from "../../assets/icons/check.svg"

import championBadge from "../../assets/images/championbage.svg";

import Aurora from "./Aurora";

export const Founding100 = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);


    return (
        <div className={styles["overlay"]} onClick={onClose}>
            <img
                className={styles["close-btn"]}
                src={close}
                alt="Close"
                onClick={onClose}
            />
            <div
                className={styles["founding-100-wrapper"]}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles["f-100-header"]}>
                    <Orbiez />
                    <img src={championBadge} alt="Founding 100 Badge" />
                </div>

                <div className={styles["f-100-content"]}>
                    <div className={styles["f-100-section-first"]}>
                        <p>Join the Gravyn Founding 100</p>
                    </div>

                    <div className={styles["f-100-section"]}>
                        <p>
                            Become one of the first 100 teams to subscribe to Gravyn and secure
                            your place in our history. The Gravyn Founding 100 is an exclusive,
                            one-time opportunity for our earliest and most passionate
                            supporters.
                            <br />
                            <br />
                            As a member, you're not just a customer—you're a core part of our
                            founding story. Your early support grants you exclusive lifetime
                            benefits and a direct line to our team, helping us shape the future
                            of project management.
                        </p>
                    </div>

   

                    <div className={styles["f-100-section"]}>
                        <p>
                            This exclusive offer is available to the first 100 teams that
                            subscribe to any Gravyn Team plan. Simply choose a plan that fits
                            your needs, and you'll be automatically enrolled in the Founding
                            100.
                        </p>
                    </div>

                    <div className={styles["f-100-section"]}>
                        <p className={styles["f-100-closing"]}>
                            This is more than just a subscription—it's a partnership. We're
                            incredibly excited about what we're building, and we want you to be
                            a part of it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
