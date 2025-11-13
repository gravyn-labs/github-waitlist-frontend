import React, { useState, useEffect } from "react";
import styles from "./PlanningWrapper.module.css";

// IMAGES
import leaves from "../../assets/icons/leaves.svg";
import rm from "../../assets/images/rm.png";
import taskmanage from "../../assets/images/taskmanage.png";
import timelinebanner from "../../assets/images/timelinebanner.png";
import milestone from "../../assets/images/milestone_finalv5.png";

export const PlanningWrapper = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile ? <MobilePlanning /> : <DesktopPlanning />}
        </>
    );
};

// ===================== 🖥 DESKTOP COMPONENT =====================
const DesktopPlanning = () => {
    return (
        <div className={styles["section-wrapper"] + " " + styles["plan-section"]}>
            <div className={styles["section-text-wrapper"]}>
                <p>
                    <img src={leaves} alt="leaves icon" /> Planning & Execution
                </p>
                <p>Plan with precision and adapt effortlessly to shifting priorities</p>
            </div>

            <div className={styles["section-content"]}>
                <div className={styles["plan-grid-view"]}>
                    <div className={styles["plan-gird-c"] + " " + styles["plan-gird-c1"]}>
                        <div className={styles["plan-gird-cr"] + " " + styles["plan-gird-c1-r1"]}>
                            <div className={styles["plan-grid-cr-image"]}>
                                <img src={rm} alt="resource management" />
                            </div>
                            <div className={styles["plan-grid-cr-text"]}>
                                <p>Allocate Your Team with Confidence.</p>
                                <p>
                                    Get a bird's-eye view of your entire team's workload and capacity.
                                    Balance assignments, prevent burnout, and ensure the right people are on the right projects.
                                </p>
                            </div>
                        </div>

                        <div className={styles["plan-gird-cr"] + " " + styles["plan-gird-c1-r2"]}>
                            <div className={styles["plan-grid-cr-image"]}>
                                <img src={taskmanage} alt="task management" />
                            </div>
                            <div className={styles["plan-grid-cr-text"]}>
                                <p>Your Team's Command Center.</p>
                                <p>
                                    Transform chaos into clarity. Organize work with lists, Kanban boards, and calendars, and give every team member a clear view of their priorities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles["plan-gird-c"] + " " + styles["plan-gird-c2"]}>
                        <div className={styles["plan-gird-cr"] + " " + styles["plan-gird-c2-r1"]}>
                            <div className={styles["plan-grid-cr-image"]}>
                                <img src={timelinebanner} alt="timeline banner" />
                            </div>
                            <div className={styles["plan-grid-cr-text"]}>
                                <p>Visualize the Path Forward.</p>
                                <p>
                                    Build beautiful, interactive Gantt charts in seconds. Map out project phases and see how every piece of work connects to the bigger picture.
                                </p>
                            </div>
                        </div>

                        <div className={styles["plan-gird-cr"] + " " + styles["plan-gird-c2-r2"]}>
                            <div className={styles["plan-grid-cr-image"]}>
                                <img src={milestone} alt="milestone" />
                            </div>
                            <div className={styles["plan-grid-cr-text"]}>
                                <p>Turn Milestones into Momentum.</p>
                                <p>
                                    Don't just track key dates — automate them. Create powerful workflows that trigger when a milestone is completed, notifying stakeholders and kicking off the next phase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ===================== 📱 MOBILE COMPONENT =====================
const MobilePlanning = () => {
    return (
        <div className={styles["mobile-section-wrapper"]}>
            <div className={styles["mobile-section-text-wrapper"]}>
                <p>
                    <img src={leaves} alt="leaves icon" /> Planning & Execution
                </p>
                <p>Plan with precision and adapt effortlessly to shifting priorities</p>
            </div>

            <div className={styles["mobile-section-content"]}>
                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["plan-mobile-cr-image"]}>
                        <img src={rm} alt="resource management" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Allocate Your Team with Confidence.</p>
                        <p>
                            Get a bird's-eye view of your entire team's workload and capacity. Balance assignments, prevent burnout, and ensure the right people are on the right projects.
                        </p>
                    </div>
                </div>

                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["plan-mobile-cr-image"]}>
                        <img src={taskmanage} alt="task management" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Your Team's Command Center.</p>
                        <p>
                            Transform chaos into clarity. Organize work with lists, Kanban boards, and calendars, and give every team member a clear view of their priorities.
                        </p>
                    </div>
                </div>

                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["plan-mobile-cr-image"]}>
                        <img src={timelinebanner} alt="timeline banner" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Visualize the Path Forward.</p>
                        <p>
                            Build beautiful, interactive Gantt charts in seconds. Map out project phases and see how every piece connects to the bigger picture.
                        </p>
                    </div>
                </div>

                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["plan-mobile-cr-image"]}>
                        <img src={milestone} alt="milestone" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Turn Milestones into Momentum.</p>
                        <p>
                            Don’t just track key dates — automate them. Trigger notifications and actions as each milestone is completed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
