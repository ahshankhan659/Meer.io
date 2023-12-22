import React from 'react'
import './Testimonials.css'
import user from '../../Components/images/user.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testDetail } from './TestimonialsDetail';

function Testimonials(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 756 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 756, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-head">
                    <h1>TESTIMONIALS</h1>
                </div>
                <div className="testimonials-main">
                    <Carousel arrows={false} autoPlaySpeed={3000} infinite={true} autoPlay={props.deviceType !== "mobile" ? true : false} responsive={responsive}>
                        {testDetail.map((testitem) => (
                            <div className="testimonials-mainDetail">
                                <div className="testimonials-text">
                                    <p>{testitem.text}</p>
                                </div>
                                <div className="testimonials-name">
                                    <div className="test-icon">
                                        <img src={testitem.imge} alt="" />
                                    </div>
                                    <div className="test-detail">
                                        <h6>{testitem.name}</h6>
                                        <p>{testitem.profession}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>;
                </div >
            </div >
        </>
    )
}

export default Testimonials