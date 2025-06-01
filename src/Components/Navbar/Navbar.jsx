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

        </div>
    )
}

export default Navbar
