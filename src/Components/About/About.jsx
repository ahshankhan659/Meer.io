import React from 'react'
import about from '../../Components/images/about_img.jpg'
import './About.css'
import { aboutDetail } from './AboutDetail'

function About() {
    return (
        <>
            <div className="about-head">
                <h1 className='light'>WELCOME TO</h1>
                <h1 className='bold'>MASTER ELECTRICAL ENG. REPAIRING</h1>
            </div>
            {aboutDetail.map((about) => (
                <div className="about" key={about.head}>
                    <div className="about-l">
                        <img src={about.img} alt="" />
                    </div>

                    <div className="about-r">
                        <div className="about-content">
                            <h2>{about.head}</h2>
                            <p>{about.para}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default About