import React from "react";
import Slider from "react-slick";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { onClick } = props;
  let classes = "arrow-slick1 next-slick1 slick-arrow";
  return (
    <button
      className={classes}
      onClick={onClick}
    ><FontAwesomeIcon icon={faCaretRight} size="xs" /></button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  let classes = "arrow-slick1 prev-slick1 slick-arrow";
  return (
    <button
      className={classes}
      onClick={onClick}
    ><FontAwesomeIcon icon={faCaretLeft} size="xs" /></button>
  );
}

const BannerSlider = () => {

  const banners = [
    {id: 1, description: 'Banner 1', src: 'images/sliders/candy-man-slide.jpg'},
    {id: 2, description: 'Banner 2', src: 'images/sliders/free-guy-slide.jpg'},
    {id: 3, description: 'Banner 3', src: 'images/sliders/the-addams-family-2-slide.jpg'}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
       
  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <Slider {...settings}>
          { banners.map(banner => (
            <Banner 
              key={banner.id}
              banner={banner}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
 
export default BannerSlider;