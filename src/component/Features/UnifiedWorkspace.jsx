import React, { useState, useEffect } from "react";
import { motion, AnimatePresence , useAnimation} from "framer-motion";
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
    <div className={styles['collaboration-comp']}>
        <img src={collaboration_feature} alt="Collaboration Feature" />
    </div>
);

const AiComp = () => (
    <div className={styles['kairo-feature']}>
        <img src={kairo_feature} alt="Kairo Feature" />
    </div>
);

const FinancesComp = () => (
    <div className={styles['finance-feature']}>
        <img src={finance_management} alt="Finance Feature" />
    </div>
);

const ProjectManagementComp = () => (
    <div className={styles['project-feature']}>
        <img src={project_management} alt="Project Management Feature" />
    </div>
);

const IntegrationsComp = () => (
    <div className={styles['integration-feature']}>
        <img src={integration} alt="Integration Feature" />
    </div>
);

const coreFeatures = [
    {
        id: 'projects',
        icon: projectmanagement,
        component: <ProjectManagementComp />,
        title: 'Project Management',
        description: 'Plan, track, and deliver projects on time. Use timelines, Kanban boards, and lists to manage your work, your way.'
    },
    {
        id: 'collaboration',
        icon: collaboration,
        component: <CollaborationComp />,
        title: 'Collaboration',
        description: 'Keep your team in sync. Link conversations to tasks, share files, and centralize all project communication.'
    },
    {
        id: 'finances',
        icon: rupee,
        component: <FinancesComp />,
        title: "Track budgets, log time, and manage invoices without ever leaving your workspace. Get a clear view of every project's financial health."
    },
    {
        id: 'clients',
        icon: client,
        component: <CollaborationComp />, // Replace with ClientComp if available
        title: 'Client Management',
        description: 'From onboarding to reporting, deliver a world-class client experience with branded portals and automated status updates.'
    },
    {
        id: 'ai',
        icon: kairo,
        component: <AiComp />,
        title: 'Kairo Copilot',
        description: 'Let our AI automate summaries, flag risks, and provide predictive insights, so you can focus on strategic work.'
    },
    {
        id: 'integrations',
        icon: integrations,
        component: <IntegrationsComp />,
        title: 'Integrations',
        description: 'Connect Gravyn to the tools you already use, from Slack to GitHub, creating a truly unified command center.'
    },
];

// Detect screen size hook
function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    return width;
}

const DesktopLayout = ({ activeFeatureId, setActiveFeatureId, activeComponent }) => (
    <section className={styles['unified-workspace-section']}>
        <div className={styles['features-header']}>
            <h2>From Scattered to Seamless.</h2>
            <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
        </div>
        <div className={styles['workspace-grid']}>
            <div className={styles['workspace-visual']}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeatureId}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {activeComponent}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className={styles['workspace-features']}>
                <div className={styles['features-grid']}>
                    {coreFeatures.map(feature => (
                        <div
                            key={feature.id}
                            className={`${styles['feature-item']} ${activeFeatureId === feature.id ? styles['active'] : ''}`}
                            onMouseEnter={() => setActiveFeatureId(feature.id)}
                        >
                            <div className={styles['feature-icon']}><img src={feature.icon} alt={feature.title} /></div>
                            <div className={styles['feature-text']}>
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

const Carousel = ({ features, activeIndex, setActiveIndex }) => {
    const controls = useAnimation();

    useEffect(() => {
        async function cycle() {
            while (true) {
                await controls.start({
                    x: "-=300px",
                    transition: { duration: 0.8, ease: "easeInOut" },
                });
                setActiveIndex((prev) => (prev + 1) % features.length);
                controls.set({ x: 0 });
            }
        }
        cycle();
    }, [controls, features.length, setActiveIndex]);

    return (
        <motion.div className={styles['carousel-wrapper']} animate={controls}>
            {features.map((feature, index) => (
                <div key={feature.id} className={styles['carousel-card']}>
                    <img src={feature.icon} alt={feature.title} className={styles['carousel-image']} />
                    <div className={styles['carousel-text']}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

const MobileLayout = ({ activeFeatureId, setActiveFeatureId, activeComponent }) => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    return (
        <section className={styles['unified-workspace-section-mobile']}>
            <div className={styles['features-header-mobile']}>
                <h2>From Scattered to Seamless.</h2>
                <p>Gravyn provides the foundational tools for clarity and control, so you can build the exact workflow your team needs.</p>
            </div>

            <Carousel features={coreFeatures} activeIndex={carouselIndex} setActiveIndex={setCarouselIndex} />

            <div className={styles['workspace-visual-mobile']}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFeatureId}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {activeComponent}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export const UnifiedWorkspace = () => {
    const [activeFeatureId, setActiveFeatureId] = useState(coreFeatures[0].id);
    const width = useWindowWidth();
    const isMobile = width <= 768;

    const activeComponent = coreFeatures.find(f => f.id === activeFeatureId)?.component;

    return isMobile ? (
        <MobileLayout activeFeatureId={activeFeatureId} setActiveFeatureId={setActiveFeatureId} activeComponent={activeComponent} />
    ) : (
        <DesktopLayout activeFeatureId={activeFeatureId} setActiveFeatureId={setActiveFeatureId} activeComponent={activeComponent} />
    );
};
