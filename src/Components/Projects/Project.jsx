import React from 'react';
import './project.css';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import excellence from '../../Components/images/excellence_bg.jpg';
import { companyDetail, tabDetail } from './ProjectDetail';

function Project() {
    const [key, setKey] = useState('excellence');

    return (
        <>
            <div className="services-head">
                <h1 className='light'>COMPANY</h1>
                <h1 className='bold'>OUR COMPANY</h1>
            </div>
            {companyDetail.map((detail) => (
                <div className="company-detail" key={detail.p1}>
                    <p>{detail.p1}</p>
                    <p className='p2'>{detail.p2}</p>
                </div>
            ))}
            <div className="tab">
                <div className="tab-head">
                    <h5>These six values underscore the way we do our business</h5>
                </div>
                <div className="tab-main">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 color-dark"
                    >
                        {tabDetail.map((tab) => (
                            <Tab eventKey={tab.title.toLowerCase()} title={tab.title} key={tab.title}>
                                <div className="tab-section">
                                    <div className="tab-img">
                                        <img src={tab.imge} alt="" />
                                    </div>
                                    <div className="tab-detail">
                                        <div className="tab-icon">
                                            <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                            <span><i className="fa-solid fa-link"></i></span>
                                        </div>
                                        <div className="tab-info">
                                            <h1 className='tab-title'>{tab.head}</h1>
                                            <p className='tab-text'>{tab.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
            <div className="tab-explore">
                <p>DO YOU WANT TO EXPLORE ALL OUR WORKS?</p>
                <button type='btn'>VIEW ALL WORKS</button>
            </div>
        </>
    )
}

export default Project;
