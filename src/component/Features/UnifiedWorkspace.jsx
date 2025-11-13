import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./UnifiedWorkspace.module.css";

import integration from "../../assets/images/integration1.svg";
import kairoFeature from "../../assets/images/kairoFeature1.svg";
import kairoEditor from "../../assets/images/kairo_editor.png";
import finance_management from "../../assets/images/fm2.png";
import project_management from "../../assets/images/project_managementv1.png";
import collaboration_feature from "../../assets/images/collaboration_feature.png";
import kairo_feature from "../../assets/images/kairo_featurev1.png";

import projectmanagement from "../../assets/icons/project.svg";
import collaboration from "../../assets/icons/collaborations.svg";
import rupee from "../../assets/icons/rupee.svg";
import client from "../../assets/icons/client.svg";
import kairo from "../../assets/icons/kairo.svg";
import integrations from "../../assets/icons/integrations.svg";

const CollaborationComp = () => (
    <div className={styles["collaboration-comp"]}>
        <img src={collaboration_feature} alt="Collaboration Feature" />
    </div>
);

const AiComp = () => (
    <div className={styles["kairo-feature"]}>
        <img src={kairo_feature} alt="Kairo Feature" />
    </div>
);

const FinancesComp = () => (
    <div className={styles["finance-feature"]}>
        <img src={finance_management} alt="Finance Feature" />
    </div>
);

const ProjectManagementComp = () => (
    <div className={styles["project-feature"]}>
        <img src={project_management} alt="Project Management Feature" />
    </div>
);

const IntegrationsComp = () => (
    <div className={styles["integration-feature"]}>
        <img src={integration} alt="Integration Feature" />
    </div>
);

const coreFeatures = [
    {
        id: "projects",
        icon: projectmanagement,
        component: <ProjectManagementComp />,
        title: "Project Management",
        description:
            "Plan, track, and deliver projects on time. Use timelines, Kanban boards, and lists to manage your work, your way.",
    },
    {
        id: "collaboration",
        icon: collaboration,
        component: <CollaborationComp />,
        title: "Collaboration",
        description:
            "Keep your team in sync. Link conversations to tasks, share files, and centralize all project communication.",
    },
    {
        id: "finances",
        icon: rupee,
        component: <FinancesComp />,
        title: "Finance",
        description:
            "Track budgets, log time, and manage invoices without ever leaving your workspace. Get a clear view of every project's financial health.",
    },
    {
        id: "clients",
        icon: client,
        component: <CollaborationComp />, // Replace with ClientComp if available
        title: "Client Management",
        description:
            "From onboarding to reporting, deliver a world-class client experience with branded portals and automated status updates.",
    },
    {
        id: "ai",
        icon: kairo,
        component: <AiComp />,
        title: "Kairo Copilot",
        description:
            "Let our AI automate summaries, flag risks, and provide predictive insights, so you can focus on strategic work.",
    },
    {
        id: "integrations",
        icon: integrations,
        component: <IntegrationsComp />,
        title: "Integrations",
        description:
            "Connect Gravyn to the tools you already use, from Slack to GitHub, creating a truly unified command center.",
    },
];


const CARD_WIDTH = 250; // width of one card plus margin (match CSS)
const VISIBLE_CARDS = 3;
const AUTO_SNAP_DELAY = 3000; // ms

function SnapCarousel({ features, onCardClick }) {
    const total = features.length;
    const extendedFeatures = [...features, ...features]; // for infinite snap
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    // Auto snap timer
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex(i => (i + 1) % total);
        }, AUTO_SNAP_DELAY);

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, total]);

    // Calculate translateX for snapping animation
    const translateX = currentIndex * CARD_WIDTH;

    return (
        <div className={styles["carousel-viewport"]} style={{ width: CARD_WIDTH * VISIBLE_CARDS, overflow: "hidden", margin: "auto" }}>
            <motion.div
                className={styles["carousel-track"]}
                animate={{ x: -translateX }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.7 }}
                style={{ display: "flex" }}
            >
                {extendedFeatures.map((feature, idx) => {
                    const relativeIndex = (idx - currentIndex + total) % total;
                    // relativeIndex = 0 means center card
                    let scale = 0.8;
                    if (relativeIndex === 0) scale = 1;
                    else if (relativeIndex === 1 || relativeIndex === total - 1) scale = 0.9;

                    let opacity = relativeIndex <= 1 || relativeIndex >= total - 1 ? 1 : 0.5;
                    let zIndex = relativeIndex === 0 ? 3 : relativeIndex === 1 || relativeIndex === total - 1 ? 2 : 1;

                    return (
                        <motion.div
                            key={`${feature.id}-${idx}`}
                            className={styles["carousel-card"]}
                            style={{
                                width: CARD_WIDTH,
                                minWidth: CARD_WIDTH,
                                margin: "0 -35px",
                                scale,
                                opacity,
                                zIndex,
                                transformOrigin: "center center",
                            }}
                            animate={{ scale }}
                            transition={{ type: "spring", stiffness: 260, damping: 25 }}
                            onClick={() => onCardClick(feature.id)}
                        >
                            <div className={styles["feature-icon-mobile"]}>
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <div className={styles["feature-text-mobile"]}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}



// Mobile Carousel with continuous sliding
function MobileFeatureCarousel({ features, onCardClick }) {
    const containerRef = useRef(null);
    const [offsetX, setOffsetX] = useState(0);
    const totalFeatures = features.length;
    const CARD_WIDTH = 250; // pixels (adjust to your CSS card width)
    const VISIBLE_CARDS = 3;
    const extendedFeatures = [...features, ...features]; // duplicate for infinite effect

    // Animate continuous sliding using requestAnimationFrame
    useEffect(() => {
        let animationFrameId;
        let lastTimestamp = 0;
        const scrollSpeedPxPerSec = 40; // adjust speed here

        const animate = (time) => {
            if (!lastTimestamp) lastTimestamp = time;
            const elapsed = time - lastTimestamp;
            lastTimestamp = time;

            setOffsetX((prev) => {
                let nextOffset = prev + (scrollSpeedPxPerSec * elapsed) / 1000;
                const resetPoint = CARD_WIDTH * totalFeatures;
                if (nextOffset >= resetPoint) nextOffset = nextOffset - resetPoint;
                return nextOffset;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [totalFeatures]);

    // Calculate the center card index in real time
    const centerIndexFloat = offsetX / CARD_WIDTH + VISIBLE_CARDS / 2;
    const centerIndex = Math.floor(centerIndexFloat) % totalFeatures;

    return (
        <div
            className={styles["carousel-viewport"]}
            style={{ width: CARD_WIDTH * VISIBLE_CARDS, overflow: "hidden", margin: "0 auto" }}
            ref={containerRef}
        >
            <motion.div
                className={styles["carousel-track"]}
                style={{
                    display: "flex",
                    transform: `translateX(${-offsetX}px)`,
                    userSelect: "none",
                    cursor: "grab",
                }}
            >
                {extendedFeatures.map((feature, idx) => {
                    // Calculate distance from center for scaling
                    let dist = Math.min(
                        Math.abs(idx % totalFeatures - centerIndex),
                        totalFeatures - Math.abs(idx % totalFeatures - centerIndex)
                    );

                    let scale = 0.8;
                    if (dist === 0) scale = 1;
                    else if (dist === 1) scale = 0.9;

                    let opacity = dist <= 1 ? 1 : 1;
                    let zIndex = dist === 0 ? 3 : dist === 1 ? 2 : 1;

                    return (
                        <motion.div
                            key={`${feature.id}-${idx}`}
                            className={styles["carousel-card"]}
                            style={{
                                width: CARD_WIDTH,
                                minWidth: CARD_WIDTH,
                                margin: "0 -35px",
                                zIndex: zIndex,
                                opacity: opacity,
                                scale: scale,
                                transformOrigin: "center center",
                                userSelect: "none",
                            }}
                            animate={{ scale }}
                            transition={{ type: "spring", stiffness: 260, damping: 25 }}
                            onClick={() => onCardClick(feature.id)}
                        >
                            <div className={styles["feature-icon-mobile"]}>
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <div className={styles["feature-text-mobile"]}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

// Mobile Layout using the moving carousel
const MobileLayout = ({ activeFeatureId, setActiveFeatureId }) => (
    <section className={styles["unified-workspace-section-mobile"]}>
        <div className={styles["features-header-mobile"]}>
            <h2>From Scattered to Seamless.</h2>
            <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
        </div>
        <SnapCarousel features={coreFeatures} onCardClick={setActiveFeatureId} />

    </section>
);

// Desktop layout as earlier (unchanged)
const DesktopLayout = ({ activeFeatureId, setActiveFeatureId, activeComponent }) => (
    <section className={styles["unified-workspace-section"]}>
        <div className={styles["features-header"]}>
            <h2>From Scattered to Seamless.</h2>
            <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
        </div>
        <div className={styles["workspace-grid"]}>
            <div className={styles["workspace-visual"]}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeatureId}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ width: "100%", height: "100%" }}
                    >
                        {activeComponent}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className={styles["workspace-features"]}>
                <div className={styles["features-grid"]}>
                    {coreFeatures.map((feature) => (
                        <div
                            key={feature.id}
                            className={`${styles["feature-item"]} ${activeFeatureId === feature.id ? styles["active"] : ""
                                }`}
                            onMouseEnter={() => setActiveFeatureId(feature.id)}
                        >
                            <div className={styles["feature-icon"]}>
                                <img src={feature.icon} alt={feature.title} />
                            </div>
                            <div className={styles["feature-text"]}>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// Hook for window width detection
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return width;
}

// Main exported component

export const UnifiedWorkspace = () => {
    const [activeFeatureId, setActiveFeatureId] = useState(coreFeatures[0].id);
    const width = useWindowWidth();
    const isMobile = width <= 768;

    const activeComponent = coreFeatures.find((f) => f.id === activeFeatureId)?.component;

    return isMobile ? (
        <MobileLayout activeFeatureId={activeFeatureId} setActiveFeatureId={setActiveFeatureId} />
    ) : (
        <DesktopLayout
            activeFeatureId={activeFeatureId}
            setActiveFeatureId={setActiveFeatureId}
            activeComponent={activeComponent}
        />
    );
};
