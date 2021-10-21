import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout";
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return ( 
        <Layout>
        <div className="">
            <div className="title-bar primary">
                <span className="title">React Slick</span>
            </div>
            <div className="">
                <div className="">
                    <div className="content">
                        <div>
                            <h2> Single Item</h2>
                            <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        
    );
}
 
export default SimpleSlider;