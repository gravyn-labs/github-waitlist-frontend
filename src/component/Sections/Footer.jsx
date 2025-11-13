import React from "react"
import blackhole from "../../assets/images/blackhole.svg"
import linkedin from "../../assets/icons/linkedin.svg"
import twitter from "../../assets/icons/twitter.svg"
import logov1 from "../../assets/logo/logov2.svg"



export const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            {/* <img className='footer-blackhole' src={blackhole} /> */}
            <img className='text-image' src={blackhole} />
            <div className='footer-main'>
                <div className='footer-main-flex'>
                    <div className='footer-main-flex-i footer-main-flex-left'>
                        <div className='footer-main-flex-left-header'>
                            <p><img src={logov1} />Gravyn.</p>
                            <p>Let’s redefine how teams work. Gravyn unites planning, collaboration, and execution in one intelligent workspace, built to help you move faster and think smarter.</p>
                        </div>
                        <div className='followus-wrapper'>
                            <a href=''><img src={linkedin} /></a>
                            <a href=''><img src={twitter} /></a>
                        </div>
                    </div>
                    <div className='footer-main-flex-i footer-main-flex-right'>
                        <div className='list-main'>
                            <p>Platfrom</p>
                            <div className='list-main-item'>
                                <p>Home</p>
                                <p>Pricing</p>
                            </div>
                        </div>
                        <div className='list-main'>
                            <p>Company</p>
                            <div className='list-main-item'>
                                <p>Contact Us</p>
                                <p>Career</p>
                            </div>
                        </div>
                        <div className='list-main'>
                            <p>Reach Us</p>
                            <div className='list-main-item'>
                                <p>aryan@gravyn.app</p>
                                <p>support@gravyn.app</p>
                                <p>20H, Sector 63, Noida, 201301</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-main-bottom'>
                    <div className='footer-main-bottom-i'>
                        <p>© 2025 Gravyn Labs Private Limited. All rights reserved.</p>
                    </div>
                    <div className='footer-main-bottom-i'>
                        <a>Privacy Poliy</a>
                        <a>Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

