import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <p className="logo">Corporate Dictionary.</p>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Find Jobs</li>
                <li>Services</li>
                <li className='contact-us'>Contact Us</li>
            </ul>
            <i onClick={(e) => e.target.className.includes('bars')
                ? e.target.className = "fas fa-xmark"
                : e.target.className = "fas fa-bars"} id="bar" className='fas fa-bars'></i>

        </div>
    )
}

export default Navbar
