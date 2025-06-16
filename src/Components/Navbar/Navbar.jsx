import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='nav'>
            <img src={logo} alt="" className='logo' />
            <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#findjobs">FindJobs</a></li>
                <li><a href="#services">Services</a></li>
                <li className='contact-us'><a href="#contact">Contact Us</a></li>
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
