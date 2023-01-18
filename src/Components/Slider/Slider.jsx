import React from "react";

import { Navigation, Pagination, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.css"

// import swipper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import swipper2 from "../../static/images/fir3.webp";
import swipper1 from "../../static/images/fir.jpg";
import swipper3 from "../../static/images/fire6.jpeg";


function Slider () {
    return(
        <div className="Slider-container">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loopFillGroupWithBlank={true}
            navigation={true}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}   
            modules={[Navigation, Pagination, Scrollbar]}
            >
                <SwiperSlide>
                    <div className="Swiper-wrapper">
                        <img src={swipper1} alt="swipper1" className="Slider"></img>
                        <h1 class="centered"> <span>We Provide</span> High Quality Sawdust,
                        Biomass Briquettes
                        And  Pellets
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="Swiper-wrapper">
                        <img src={swipper2} alt="swipper2" className="Slider"></img>
                        <h1 class="centered"> <span>And manufacture</span> them 
                        for industrial clients,
                        schools and the domestic market.
                        </h1>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Slider;