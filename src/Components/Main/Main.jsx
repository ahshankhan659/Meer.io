import React from 'react';
import './Main.css';
import { mainDetail } from './MainDetail';

function Main() {
  return (
    <>
      {mainDetail.map((main) => (
        <div className="main" key={main.head}>
          <div className="main-img">
            <img src={main.image} alt="" />
          </div>
          <div className="main-content">
            <p className='light'>{main.p1}</p>
            <h1>{main.head}</h1>
            <hr />
            <p className='bold'>{main.p2}</p>
            <button type='btn'>{main.btn}</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Main;
