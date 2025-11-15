import React, { useState, useEffect, useRef , useMemo, useCallback} from "react";

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
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

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
        img : project_management,
        description:
            "Plan, track, and deliver projects on time. Use timelines, Kanban boards, and lists to manage your work, your way.",
    },
    {
        id: "finances",
        icon: rupee,
        img : finance_management,
        component: <FinancesComp />,
        title: "Finance Management",
        description:
            "Track budgets, log time, and manage invoices without ever leaving your workspace. Get a clear view of every project's financial health.",
    },
    {
        id: "integrations",
        icon: integrations,
        img: integration,
        component: <IntegrationsComp />,
        title: "Comprehensive Integrations",
        description:
            "Connect Gravyn to the tools you already use, from Slack to GitHub, creating a truly unified command center.",
    },
    {
        id: "clients",
        icon: client,
        img : collaboration_feature,
        component: <CollaborationComp />, // Replace with ClientComp if available
        title: "Client Management",
        description:
            "From onboarding to reporting, deliver a world-class client experience with branded portals and automated status updates.",
    },
    {
        id: "ai",
        icon: kairo,
        img : kairo_feature,
        component: <AiComp />,
        title: "Kairo Copilot",
        description:
            "Let our AI automate summaries, flag risks, and provide predictive insights, so you can focus on strategic work.",
    },
    {
        id: "collaboration",
        icon: collaboration,
        img: collaboration_feature,
        component: <CollaborationComp />,
        title: "Collaboration",
        description:
            "Keep your team in sync. Link conversations to tasks, share files, and centralize all project communication.",
    },
];

// ====================================================================================
// 1. DYNAMIC CONFIGURATION & HOOKS
// ====================================================================================

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};

const AUTO_SLIDE_INTERVAL = 4000; // ms
const CARD_MARGIN = 20;

// ====================================================================================
// 2. THE CAROUSEL COMPONENT
// ====================================================================================

function SnapCarousel({ features, onCardClick }) {
    const [width] = useWindowSize();

    const CARD_WIDTH = useMemo(() => {
        if (width > 768) return 320; // Fixed width for desktop
        return width - 60; // Dynamic width for mobile
    }, [width]);

    const cardFullWidth = CARD_WIDTH + CARD_MARGIN;

    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);
    const intervalRef = useRef(null);
    const x = useMotionValue(0);

    // Use a simpler padding for the infinite effect
    const paddedFeatures = useMemo(() => {
        if (features.length === 0) return [];
        const start = features.slice(-2);
        const end = features.slice(0, 2);
        return [...start, ...features, ...end];
    }, [features]);

    // --- AUTOSCROLL LOGIC (RESTORED) ---
    const startAutoSlide = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, AUTO_SLIDE_INTERVAL);
    }, []);

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, [startAutoSlide]);

    // --- INFINITE SCROLL TRANSITION ---
    // When the animation completes, check if we need to jump to the non-padded equivalent
    const onUpdate = (latest) => {
        if (latest.x <= -((features.length + 1) * cardFullWidth)) {
            x.set(-(cardFullWidth)); // Jump to the first real item
            setCurrentIndex(0);
        } else if (latest.x >= 0) {
            x.set(-(features.length * cardFullWidth)); // Jump to the last real item
            setCurrentIndex(features.length - 1);
        }
    }

    const centeredOffset = `calc(50% - ${CARD_WIDTH / 2}px)`;

    return (
        <div
            className={styles['carousel-viewport']}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <motion.div
                ref={trackRef}
                className={styles['carousel-track']}
                drag="x"
                dragConstraints={{
                    left: -((features.length + 2) * cardFullWidth),
                    right: cardFullWidth,
                }}
                style={{ x, paddingLeft: centeredOffset, paddingRight: centeredOffset }}
                animate={{ x: -(currentIndex * cardFullWidth) }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
                onUpdate={onUpdate}
            >
                {paddedFeatures.map((feature, i) => (
                    <Card
                        key={`${feature.id}-${i}`}
                        feature={feature}
                        cardWidth={CARD_WIDTH}
                        cardMargin={CARD_MARGIN}
                        onCardClick={onCardClick}
                    />
                ))}
            </motion.div>
        </div>
    );
}

// ====================================================================================
// 3. THE CARD SUB-COMPONENT
// ====================================================================================

function Card({ feature, cardWidth, cardMargin, onCardClick }) {
    return (
        <motion.div
            className={styles['carousel-card']}
            style={{
                width: cardWidth,
                minWidth: cardWidth,
                marginRight: cardMargin,
            }}
            onClick={() => onCardClick(feature.id)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className={styles['feature-image']}>
                <img src={feature.img}/>
            </div>
            {/* <div className={styles['feature-icon-mobile']}>
                <img src={feature.icon} alt={feature.title} />
            </div> */}
            <div className={styles['feature-text-mobile']}>
                <p>{feature.title}</p>
                <p>{feature.description}</p>
            </div>
        </motion.div>
    );
}

// Mobile Layout using the moving carousel
const MobileLayout = ({ activeFeatureId, setActiveFeatureId }) => (
    <section className={styles["unified-workspace-section-mobile"]}>
        <div className={styles["features-header-mobile"]}>
            <p>From Scattered to Seamless.</p>
            <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
        </div>
        <SnapCarousel features={coreFeatures} onCardClick={setActiveFeatureId} />

    </section>
);

// Desktop layout as earlier (unchanged)
const DesktopLayout = ({ activeFeatureId, setActiveFeatureId, activeComponent }) => (
    <section className={styles["unified-workspace-section"]}>
        <div className={styles["features-header"]}>
            <p>From Scattered to Seamless.</p>
            <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
        </div>
        <div className={styles["workspace-grid"]}>
            <div className={styles["workspace-visual"]}>
                <div className={styles['visual-content']}> 
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
