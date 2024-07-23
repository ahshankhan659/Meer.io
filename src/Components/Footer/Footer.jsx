import React from "react";
import footerlogo from "../../Components/images/footer_logo.png";
import footerbefore from "../../Components/images/footerBeforeImg.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-up">

{/* ----------Footer Image----------- */}

          <div className="footer-img">
            <img className="ml" src={footerlogo} alt="" />
            <img className="mr" src={footerbefore} alt="" />
          </div>

{/* -----------Footer Navbar----------- */}

          <div className="footer-nav">
            <h2>Useful Links</h2>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Latest News</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

{/* -----------Footer Contact---------- */}

          <div className="footer-contact">
            <h2>Contact Us</h2>
            <div class="footer-Citem">
              <h3>Address</h3>
              <p>
                He'd no. 6 Ajman new Industrial Area Ajman po <br/> box no. 18487
              </p>
            </div>
            <div class="footer-Citem">
              <h3>Email Us</h3>
              <p>
                <a href="mailto:akahshankhan659@gmail.com">
                  akahshankhan659@gmail.com
                </a>
              </p>
            </div>
            <div class="footer-Citem">
              <h3>Call Us</h3>
              <p>
                <a href="tel:+923136745659">+92 3136745659</a>
              </p>
            </div>
          </div>
          </div>

{/* ---------Footer Down---------------- */}

        <div className="footer-down">
          @2024 RIGHTS RESERVED. MASTER ELECTRICAL ENG - REPAIRING
        </div>
        
      </footer>
    </>
  );
}

export default Footer;
