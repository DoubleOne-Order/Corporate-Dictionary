import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='nav'>
            <img src={logo} alt="" className='logo' />
            <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li>Home</li>
                <li>About</li>
                <li>Find Jobs</li>
                <li>Services</li>
                <li className='contact-us'>Contact Us</li>
            </ul>
            <i
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isMenuOpen ? "fas fa-x" : "fas fa-bars"}
                id='bar'
            ></i>

        </div>
    )
}

export default Navbar
