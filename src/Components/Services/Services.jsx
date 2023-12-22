import React from 'react'
import serviceIcon1 from '../../Components/images/service1_icon-3.png'
import './Services.css'
import { servicesDetail } from './ServicesDetail'

function Services() {
    return (
        <>
            <div className="services-head">
                <h1 className='light'>SERVICES</h1>
                <h1 className='bold'>OUR SERVICES</h1>
            </div>
            <div className="services-card">
                {servicesDetail.map((service ,i) => (
                    <div className="services">
                        <div className="cards" key={i}>
                            <img src={service.img} alt="" />
                            <div className="card-detail">
                                <p>{service.desc}</p>
                                <div className="center">
                                <span>{service.text1}</span>
                                <hr />
                                <span>{service.text2}</span>
                                </div>
                                <button type='btn'>{service.btn}</button>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </>
    )
}

export default Services