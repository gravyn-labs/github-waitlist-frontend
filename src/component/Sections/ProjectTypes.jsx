import React, { useState, useEffect, useRef } from "react";
import styles from "./ProjectTypes.module.css";

// IMAGES
import terminal from "../../assets/images/terminal.png";
import contiguous from "../../assets/images/contiguous.png";

import bullseye from "../../assets/icons/bullseye.svg";
import growth from "../../assets/icons/growth.svg";
import ai from "../../assets/icons/ai.svg";
import unified from "../../assets/icons/unified.svg";

export const ProjectTypes = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile ? <MobileView /> : <DesktopView />}
        </>
    );
};

/* =========================
   💻 DESKTOP VIEW
========================= */
const DesktopView = () => {
    return (
        <section className={styles["project-types-section"]}>
            <div className={styles["project-types-text"]}>
                <p>
                    Built for the Sprint to the Finish Line, and the Marathon That Never Ends.
                </p>
                <p>
                    Whether you're shipping a feature or managing a department, Gravyn provides the exact workflow to match the nature of your work.
                </p>
            </div>

            <div className={styles["project-types-grid"]}>
                <div className={styles["visual-container"]}>
                    <div className={styles["project-type-header"]}>
                        <div className={styles["decorative-dots"]}>••••••••••</div>
                        <h3>For Projects: The Path to Delivery.</h3>
                        <p>
                            Perfect for work with a defined scope and a clear finish line. Move initiatives sequentially through phases, manage dependencies, and launch on time, every time.
                        </p>
                    </div>
                    <div className={styles["project-type-image"]}>
                        <img src={terminal} alt="Project workflow" />
                    </div>
                </div>

                <div className={styles["visual-container"]}>
                    <div className={styles["project-type-header"]}>
                        <div className={styles["decorative-dots"]}>••••••••••</div>
                        <h3>For Processes: The Rhythm of Operation.</h3>
                        <p>
                            Ideal for the never-ending work of running a team or a system. Manage a continuous flow of tasks, track performance, and optimize your processes month after month.
                        </p>
                    </div>
                    <div className={styles["project-type-image"]}>
                        <img src={contiguous} alt="Continuous workflow" />
                    </div>
                </div>
            </div>

            <div className={styles["feature-callouts-grid"]}>
                <Feature icon={bullseye} title="Precision & Predictability" desc="Tools built to keep your fixed-scope projects on time and on budget." />
                <Feature icon={growth} title="Growth & Retention" desc="Tools built to prove your value and grow client relationships over the long term." />
                <Feature icon={ai} title="AI-Powered Reporting" desc="Use Kairo to automatically generate weekly digests and client status updates." />
                <Feature icon={unified} title="Unified Toolset" desc="One platform for projects, clients, and financials. No more scattered data." />
            </div>
        </section>
    );
};

/* =========================
   📱 MOBILE VIEW
========================= */
const MobileView = () => {
    return (
        <section className={styles["project-mobile-section"]}>
            <div className={styles["project-mobile-text"]}>
                <p>
                    Built for the Sprint to the Finish Line,
                    <br /> and the Marathon That Never Ends.
                </p>
                <p>
                    Gravyn adapts to how you work — whether you're managing rapid delivery or continuous growth.
                </p>
            </div>

            <div className={styles["project-mobile-grid"]}>
                <div className={styles["visual-container"]}>
                    <div className={styles["project-type-header"]}>
                        <div className={styles["decorative-dots"]}>••••••••••</div>

                        <h4>For Projects: The Path to Delivery.</h4>
                        <p>
                            Perfect for work with a defined scope and a clear finish line. Move initiatives sequentially through phases, manage dependencies, and launch on time, every time.
                        </p>
                    </div>
                    <div className={styles["project-type-image"]}>
                        <img src={terminal} alt="Projects Mobile" />
                    </div>
                </div>

                <div className={styles["visual-container"]}>
                    <div className={styles["project-type-header"]}>
                        <div className={styles["decorative-dots"]}>••••••••••</div>

                        <h4>For Processes: The Rhythm of Operation.</h4>
                        <p>
                            Ideal for the never-ending work of running a team or a system. Manage a continuous flow of tasks, track performance, and optimize your processes month after month.
                        </p>
                    </div>
                    <div className={styles["project-type-image"]}>
                        <img src={contiguous} alt="Processes Mobile" />
                    </div>
                </div>
            </div>

            <div className={styles["feature-callouts-grid-mobile"]}>
                <Feature icon={bullseye} title="Precision" desc="Stay on track and deliver with clarity." />
                <Feature icon={growth} title="Retention" desc="Grow and nurture your client base." />
                <Feature icon={ai} title="AI Reports" desc="Get instant updates with Kairo." />
                <Feature icon={unified} title="Unified" desc="All-in-one workspace for your projects." />
            </div>
        </section>
    );
};

/* =========================
   🔹 Feature Component
========================= */
const Feature = ({ icon, title, desc }) => (
    <div className={styles["feature-callout"]}>
        <div className={styles["feature-icon"]}>
            <img src={icon} alt={title} />
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
);
