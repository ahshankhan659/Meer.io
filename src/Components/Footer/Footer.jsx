import React from 'react'
import footerlogo from '../../Components/images/footer_logo.png'
import footerbefore from '../../Components/images/footerBeforeImg.png'
import './Footer.css'

function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className="footer-up">
            <div className="footer-img">
                <img src={footerlogo} alt="" />
                <img src={footerbefore} alt="" />
            </div>
            
        </div>
        <div className="footer-down"></div>
    </footer>
    </>

  )
}

export default Footer