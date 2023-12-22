import React from 'react'
import chart from '../../Components/images/chart1.png'
import './Chart.css'

function Chart() {
  return (
    <>
    
    <div className="chart">
        <div className="chart-head">
            <h2>ORGANISATION CHART</h2>
        </div>
        <div className="chart-img">
            <img src={chart} alt="" />
        </div>
    </div>
    </>
  )
}

export default Chart