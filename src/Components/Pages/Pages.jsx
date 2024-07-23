import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from "../../Components/images/product1.png";
import product2 from "../../Components/images/product2.png";
import product3 from "../../Components/images/product3.png";
import product4 from "../../Components/images/product4.png";
import product5 from "../../Components/images/product5.png";
import chart from '../../Components/images/chart1.png'
import "./Pages.css";
import { pageDetail } from "./PagesDetail";
import Chart from "../Chart/Chart";

function Pages(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="pages">
        <Carousel
          arrows={false}
          autoPlaySpeed={3000}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          responsive={responsive}
        >
          {pageDetail.map((page) => (
            <div className="imgs">
              <img src={page.products} alt="" />
            </div>
          ))}
        </Carousel>
        ;
      </div>
      <div className="chart">
        <div className="chart-head">
          <h2>ORGANISATION CHART</h2>
        </div>
        <div className="chart-img">
          <img src={chart} alt="" />
        </div>
      </div>
    </>
  );
}

export default Pages;
