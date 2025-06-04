import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

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
                <img className="hero-image" src={hero} alt="" />
            </div>
        </div >
    )
}

export default Hero
