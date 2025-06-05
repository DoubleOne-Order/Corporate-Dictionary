import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={logo} alt="" className='logo' />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam deserunt repellendus facere iure omnis unde laboriosam cum, quod quaerat cumque obcaecati harum velit maxime beatae pariatur ipsum. Quas repellendus autem maiores officiis, nihil ullam dicta architecto sequi, nesciunt ea dignissimos!.</p>
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
