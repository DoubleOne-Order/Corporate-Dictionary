import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about-section'>
            <div className="about-container">
                <h2>What We <span>Do</span></h2>
                <h3>Your Success is <br /> Our <span>Mission</span></h3>
                <p className='statement'>We're not a regular agency. We're your behind-the-scenes HR team, career coach, and business strategist all in one.

                </p>
                <p className='state-point'>Whether you're an ambitious job seeker in Nairobi, a remote work hopeful in Kisumu, or a bold SME founder in Eldoret, Corporate Dictionary equips you to compete, stand out, and grow.</p>
            </div>
            <div className="mission-container">
                <div className='mission'>
                    <h2>Our Mission</h2>
                    <p>Empowering local excellence for global opportunity</p>
                </div>
                <div className='mission-grid'>
                    <div>
                        <img src="" alt="" />
                        <h3>Professional</h3>
                        <p>Clear, structured, and confident approach to your career growth</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Empowering</h3>
                        <p>Speaking hope and clarity to discouraged professionals</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Realistic</h3>
                        <p>Honest about the job market, local barriers, and global opportunities</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Afro-Urban</h3>
                        <p>Fresh, youthful, and rooted in Kenya's energy but globally sharp</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Professional</h3>
                        <p>Clear, structured, and confident approach to your career growth</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
