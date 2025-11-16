import React, { useState, useEffect } from "react";
import styles from "./CollaborationWrapper.module.css";

// Images
import rbafeature from "../../assets/images/rbafeaturev1.png";
import heart from "../../assets/icons/heart.svg";
import calendarfeature from "../../assets/images/calendarfeaturev1.png";
import filefeature from "../../assets/images/files_feature.png";
import collaboration from "../../assets/images/conversationv1.png";

// -------------------- Desktop Component --------------------
const DesktopComponent = () => {
    return (
        <div className={styles["section-wrapper"] + " " + styles["collaboration-section"]}>
            <div className={styles["section-text-wrapper"]}>
                <p>
                    <img src={heart} alt="heart icon" /> Collaboration
                </p>
                <p>Connect seamlessly and foster creativity in teams and clients</p>
            </div>

            <div className={styles["section-content"]}>
                <div className={styles["collaborate-grid-view"]}>
                    {/* Left Side */}
                    <div className={styles["collaborate-gird-c"] + " " + styles["plan-gird-c1"]}>
                        {/* Row 1 */}
                        <div className={styles["collaborate-gird-cr"] + " " + styles["collaborate-gird-c1-r1"]}>
                            <div className={styles["collaborate-grid-cr-image"]}>
                                <img src={calendarfeature} alt="calendar feature" />
                            </div>
                            <div
                                className={
                                    styles["collaborate-grid-cr-text"] + " " + styles["collaborate-grid-c1r1-text"]
                                }
                            >
                                <p>Your Team's Shared Schedule.</p>
                                <p>
                                    See all your project deadlines, key milestones, and team meetings in one unified
                                    calendar. Schedule events, check availability, and ensure everyone is on the same
                                    page.
                                </p>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className={styles["collaborate-gird-cr"] + " " + styles["collaborate-gird-c1-r2"]}>
                            <div className={styles["collaborate-grid-cr-image"]}>
                                <img src={filefeature} alt="file feature" />
                            </div>
                            <div
                                className={
                                    styles["collaborate-grid-cr-text"] + " " + styles["collaborate-grid-c1r1-text"]
                                }
                            >
                                <p>Your Files, Finally Organized.</p>
                                <p>
                                    Attach assets, documents, and designs directly to the work they relate to,
                                    creating a central, version-controlled library for every project.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className={styles["collaborate-gird-c"] + " " + styles["collaborate-gird-c2"]}>
                        <div className={styles["collaborate-gird-cr"] + " " + styles["collaborate-gird-c2-r1"]}>
                            <div className={styles["collaborate-grid-cr-image"]}>
                                <img src={rbafeature} alt="rba feature" />
                            </div>
                            <div
                                className={
                                    styles["collaborate-grid-cr-text"] + " " + styles["collaborate-grid-c1r1-text"]
                                }
                            >
                                <p>Clarity and Control for Everyone.</p>
                                <p>
                                    Clear roles and permissions for your team members, clients, and freelancers.
                                    Role-Based Access (RBA) ensures everyone has access to exactly what they need—and
                                    nothing they don't.
                                </p>
                            </div>
                        </div>

                        <div className={styles["collaborate-gird-cr"] + " " + styles["collaborate-gird-c2-r2"]}>
                            <div className={styles["collaborate-grid-cr-image"]}>
                                <img src={collaboration} alt="Collaboration feature" />
                            </div>
                            <div
                                className={
                                    styles["collaborate-grid-cr-text"] + " " + styles["collaborate-grid-c1r1-text"]
                                }
                            >
                                <p>Conversations with Context.</p>
                                <p>
                                    Ditch the scattered threads and email chains. Have focused, threaded discussions
                                    directly on tasks, files, or documents, so every conversation is automatically
                                    organized and easy to find later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// -------------------- Mobile Component --------------------
const MobileComponent = () => {
    return (
        <div className={styles["mobile-section-wrapper"]}>
            <div className={styles["mobile-section-text-wrapper"]}>
                <p>
                    <img src={heart} alt="heart icon" /> Collaboration
                </p>
                <p>Connect seamlessly and foster creativity in teams and clients</p>
            </div>

            <div className={styles["mobile-section-content"]}>
                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["collaborate-mobile-cr-image"]}>
                        <img src={calendarfeature} alt="calendar feature" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Your Team's Shared Schedule.</p>
                        <p>
                            See all your project deadlines, key milestones, and meetings in one unified calendar.
                            Schedule events and ensure everyone stays aligned.
                        </p>
                    </div>
                </div>

                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["collaborate-mobile-cr-image"]}>
                        <img src={filefeature} alt="file feature" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Your Files, Finally Organized.</p>
                        <p>
                            Attach assets, documents, and designs directly to tasks for a central, version-controlled
                            workspace.
                        </p>
                    </div>
                </div>

                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["collaborate-mobile-cr-image"]}>
                        <img src={rbafeature} alt="rba feature" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Clarity and Control for Everyone.</p>
                        <p>
                            Role-Based Access ensures every member, client, or freelancer has the right access—and
                            nothing more.
                        </p>
                    </div>
                </div>

                <div className={styles["mobile-feature-block"]}>
                    <div className={styles["collaborate-mobile-cr-image"]}>
                        <img src={collaboration} alt="Collaboration feature" />
                    </div>
                    <div className={styles["mobile-feature-text"]}>
                        <p>Conversations with Context.</p>
                        <p>
                            Keep all discussions focused and attached to the right tasks or files—no more scattered
                            threads or messy inboxes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// -------------------- Wrapper Component --------------------
export const CollaborationWrapper = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileComponent /> : <DesktopComponent />;
};
