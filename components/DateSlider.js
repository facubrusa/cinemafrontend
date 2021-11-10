import React, { useState, useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MovieContext from '../context/movies/MovieContext';
import DateItem from './DateItem';

function SampleNextArrow(props) {
    const { onClick } = props;
    let classes = "arrow-slick4 next-slick4 slick-arrow";
    return (
        <button
            className={classes}
            onClick={onClick}
        ><FontAwesomeIcon icon={faAngleRight} size="xs" /></button>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    let classes = "arrow-slick4 prev-slick4 slick-arrow";
    return (
        <button
            className={classes}
            onClick={onClick}
        ><FontAwesomeIcon icon={faAngleLeft} size="xs" /></button>
    );
}

function getDates (startDate, endDate) {
  const dates = [];
  let year, month, day, dateFormat;
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  while (currentDate <= endDate) {
    year = currentDate.getFullYear();
    month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    day = String(currentDate.getDate()).padStart(2, '0');
    dateFormat = `${year}-${month}-${day}`;
    dates.push(dateFormat);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
}

const DateSlider = () => {
    const movieContext = useContext(MovieContext);
    const { dateselected, today, setDate } = movieContext;
    // console.log(dateselected);
    // console.log(today);
    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 8,
      slidesToScroll: 8,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
      ]
    };

    // Generate array of 8 days
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const startDate = new Date(today);
    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 8);
    const dates = getDates(startDate, endDate);

    return (
      <Slider {...settings}>
        { dates.map((date, index) => (
            <DateItem 
                key={index}
                date={date}
                days={days}
                dateselected={dateselected}
                setDate={setDate}
            />
        ))}
      </Slider>
    );
}
 
export default DateSlider;