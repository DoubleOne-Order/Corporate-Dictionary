import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'

const Hero = () => {
    return (
        <div className='hero' >
            <div className="hero-content">
                <div className="headline">
                    <h1>Empowering Africans for <span>Global</span> Success</h1>
                    <p>Strategic support for individuals and businesses navigating change, growth, and opportunity.
                        Rooted in Kenya, built for global impact.</p>
                    <div className='buttons'>
                        <button>Start you Journey</button>
                        <button>Book a Free Career Call</button>
                    </div>

                </div>
                <div className='image'>
                    <img className="hero-image" src={hero} alt="" />
                    <div className='float-right'>
                        <p>💻 Remote Ready</p>
                        <p>Global opportunities unlocked</p>
                    </div>
                    <div className='float-left'>
                        <p>🚀 Accelerated Program</p>
                        <p>Next-gen career learning</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Hero
