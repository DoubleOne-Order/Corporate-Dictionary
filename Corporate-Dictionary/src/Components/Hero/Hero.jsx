import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
                <div className="headline">
                    <h1>Brand Yourself for Success</h1>
                    <h3>Empowering professionals with standout CVs and profiles.</h3>
                    <p>You bring the ambition, we shape your story. Let your credentials reflect your true potential and vision.</p>
                    <button>Explore Our Services</button>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
