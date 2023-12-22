import React from 'react'
import logo from "../../Components/images/logo.png"
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
                        <li><a href="">HOME</a><i class="fa-solid fa-square"></i></li>
                        <li><a href="">ABOUT US</a><i class="fa-solid fa-square"></i></li>
                        <li><a href="">SERVICES</a><i class="fa-solid fa-square"></i></li>
                        <li><a href="">PROJECTS</a><i class="fa-solid fa-square"></i></li>
                        <li><a href="">PAGES</a><i class="fa-solid fa-square"></i></li>
                        <li><a href="">LATEST NEWS</a><i class="fa-solid fa-square"></i></li>
                        <li><a href="">CONTACT US</a><i class="fa-solid fa-square"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar