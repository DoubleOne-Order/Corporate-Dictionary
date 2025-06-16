import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo} alt="" className='logo' />
                    <p>Strategic support for individuals and businesses navigating change, growth, and opportunity. Rooted in Kenya, built for global impact.</p>
                </div>
                <div className="footer-content-center">
                    <h2>LINKS</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Find jobs</li>
                        <li> Services</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+254 70676970</li>
                        <li>info@corporatedictionary.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2025 &copy; Corporate Dictionary - All Rights reserved </p>
        </div>
    )
}

export default Footer
