import React from 'react'
import logo from "../../Components/images/logo.png"
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            {/* ---------UPPER NAVBAR-------- */}
            <div className="upper-navbar">
                <div className="u-nav-l">
                    <p>WELCOME TO MASTER ELECTRICAL ENG. REPAIRING</p>
                </div>
                <div className="u-nav-r">
                    <div className="u-nav-r1">
                        <p><span><i class="fa-solid fa-envelope"></i></span>www.MEER.com</p>
                    </div>
                    <div className="u-nav-r1">
                        <p><span><i class="fa-solid fa-phone"></i></span>+971 6 527 0670</p>
                    </div>
                </div>

            </div>
            {/* -----------------LOWER NAVBAR----------- */}
            <div className="lower-navbar">
                <div className="l-nav-l">
                    <img src={logo} alt="" />
                
                </div>
                <div className="l-nav-r">
                    <ul>
                        <li><Link to="/">HOME</Link><i class="fa-solid fa-square"></i></li>
                        <li><Link to="/about">ABOUT US</Link><i class="fa-solid fa-square"></i></li>
                        <li><Link to="/service">SERVICES</Link><i class="fa-solid fa-square"></i></li>
                        <li><Link to="/project">PROJECTS</Link><i class="fa-solid fa-square"></i></li>
                        <li><Link to="/page">PAGES</Link><i class="fa-solid fa-square"></i></li>
                        <li><Link to="/testimonial">LATEST NEWS</Link><i class="fa-solid fa-square"></i></li>
                        <li><Link to="/abc">CONTACT US</Link><i class="fa-solid fa-square"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar